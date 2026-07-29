"use client";

/**
 * RipplePortrait — Olivier Larose-style water ripple shader
 *
 * Architecture:
 *   - Ping-pong FBO simulation (wave equation + damping)
 *   - Display shader: glass refraction + chromatic aberration + fresnel + specular
 *   - Mouse velocity controls ripple size/strength
 *   - Mobile fallback: static image with CSS grayscale
 *
 * Pure Three.js (no R3F) — simpler SSR, no Canvas sizing issues.
 */

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════
   SHADER: Ripple Simulation (write to FBO)
   Wave equation with 9-tap Laplacian for smoother propagation.
   ═══════════════════════════════════════════ */

const SIM_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const SIM_FRAG = /* glsl */ `
uniform sampler2D uPrev;
uniform vec2 uTexel;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;
uniform float uDamping;
varying vec2 vUv;

void main() {
  // 9-tap Laplacian (smoother than 5-tap)
  float c   = texture2D(uPrev, vUv).r;
  float l   = texture2D(uPrev, vUv + vec2(-uTexel.x, 0.0)).r;
  float r   = texture2D(uPrev, vUv + vec2( uTexel.x, 0.0)).r;
  float t   = texture2D(uPrev, vUv + vec2(0.0,  uTexel.y)).r;
  float b   = texture2D(uPrev, vUv + vec2(0.0, -uTexel.y)).r;
  float tl  = texture2D(uPrev, vUv + vec2(-uTexel.x,  uTexel.y)).r;
  float tr  = texture2D(uPrev, vUv + vec2( uTexel.x,  uTexel.y)).r;
  float bl  = texture2D(uPrev, vUv + vec2(-uTexel.x, -uTexel.y)).r;
  float br  = texture2D(uPrev, vUv + vec2( uTexel.x, -uTexel.y)).r;

  // Weighted Laplacian: center=-1, cardinal=0.2, diagonal=0.05
  float lap = (l + r + t + b) * 0.2 + (tl + tr + bl + br) * 0.05 - c;

  float next = c + lap;
  next *= uDamping;

  // Drop injection with smooth bell curve
  float d = distance(vUv, uCenter);
  if (d < uRadius) {
    float f = 1.0 - smoothstep(0.0, uRadius, d);
    next += uStrength * f * f;
  }

  gl_FragColor = vec4(clamp(next, -2.0, 2.0), 0.0, 0.0, 1.0);
}`;

/* ═══════════════════════════════════════════
   SHADER: Display (reads FBO, applies effects)
   ═══════════════════════════════════════════ */

const DISPLAY_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const DISPLAY_FRAG = /* glsl */ `
uniform sampler2D uImage;
uniform sampler2D uRipple;
uniform vec2 uTexel;
uniform float uTime;
varying vec2 vUv;

void main() {
  // ── Surface normal from ripple gradient (smooth 3-tap) ──
  float hL = texture2D(uRipple, vUv - vec2(uTexel.x * 1.5, 0.0)).r;
  float hR = texture2D(uRipple, vUv + vec2(uTexel.x * 1.5, 0.0)).r;
  float hT = texture2D(uRipple, vUv + vec2(0.0, uTexel.y * 1.5)).r;
  float hB = texture2D(uRipple, vUv - vec2(0.0, uTexel.y * 1.5)).r;

  vec2 grad = vec2(hR - hL, hT - hB);
  vec3 N = normalize(vec3(-grad * 2.5, 1.0));
  vec3 V = vec3(0.0, 0.0, 1.0);

  // ── Glass refraction (IOR ~1.5) ──
  vec3 R = refract(V, N, 0.67);
  vec2 refractedUV = clamp(vUv + R.xy * 0.015, 0.002, 0.998);

  // ── Chromatic aberration (ultra subtle — max 2px) ──
  vec2 caDir = normalize(grad + 1e-6);
  float caAmt = clamp(length(grad) * 0.001, 0.0, 0.002);

  float cr = texture2D(uImage, refractedUV + caDir * caAmt).r;
  float cg = texture2D(uImage, refractedUV).g;
  float cb = texture2D(uImage, refractedUV - caDir * caAmt).b;
  vec3 col = vec3(cr, cg, cb);

  // ── Fresnel edge glow (subtle) ──
  float fres = pow(1.0 - abs(dot(V, N)), 4.0);
  col += vec3(fres * 0.05);

  // ── Specular highlight ──
  vec3 L = normalize(vec3(0.3, 0.5, 0.8));
  float spec = pow(max(dot(N, normalize(L + V)), 0.0), 256.0);
  col += vec3(spec * 0.10);

  gl_FragColor = vec4(col, 1.0);
}`;

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

interface RipplePortraitProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function RipplePortrait({
  src,
  alt,
  width,
  height,
  className = "",
}: RipplePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    /* ── Constants ── */
    const RES = 512; // Higher res for smoother waves
    const DAMPING = 0.97;
    const imgAspect = width / height;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    /* ── Cameras ── */
    const simCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const dispCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    /* ── FBO pair ── */
    const fboOpts: THREE.WebGLRenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };
    const rtA = new THREE.WebGLRenderTarget(RES, RES, fboOpts);
    const rtB = new THREE.WebGLRenderTarget(RES, RES, fboOpts);

    /* ── Materials ── */
    const simMat = new THREE.ShaderMaterial({
      vertexShader: SIM_VERT,
      fragmentShader: SIM_FRAG,
      uniforms: {
        uPrev: { value: null },
        uTexel: { value: new THREE.Vector2(1 / RES, 1 / RES) },
        uCenter: { value: new THREE.Vector2(0.5, 0.5) },
        uRadius: { value: 0.0 },
        uStrength: { value: 0.0 },
        uDamping: { value: DAMPING },
      },
    });

    const dispMat = new THREE.ShaderMaterial({
      vertexShader: DISPLAY_VERT,
      fragmentShader: DISPLAY_FRAG,
      uniforms: {
        uImage: { value: null },
        uRipple: { value: null },
        uTexel: { value: new THREE.Vector2(1 / RES, 1 / RES) },
        uTime: { value: 0 },
      },
    });

    /* ── Scenes ── */
    const simScene = new THREE.Scene().add(
      new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMat)
    );

    // Display plane — defer creation until container has valid dimensions
    let dispMesh: THREE.Mesh | null = null;
    const dispScene = new THREE.Scene();

    function rebuildDisplayPlane() {
      const rect = container.getBoundingClientRect();
      const cw = rect.width;
      const ch = rect.height;
      if (cw === 0 || ch === 0) return false;

      const canvasPixelAspect = cw / ch;
      const planeH = 2.0;
      const planeW = (imgAspect / canvasPixelAspect) * planeH;
      if (!isFinite(planeW) || !isFinite(planeH) || planeW <= 0) return false;

      // Remove old mesh if any
      while (dispScene.children.length) {
        const child = dispScene.children[0] as THREE.Mesh;
        dispScene.remove(child);
        child.geometry?.dispose();
      }

      dispMesh = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), dispMat);
      dispScene.add(dispMesh);
      return true;
    }

    // Try building the plane; if the container is hidden (0×0), the
    // ResizeObserver below will rebuild it as soon as dimensions appear.
    rebuildDisplayPlane();

    /* ── State ── */
    let writeIdx = 0;
    const pointer = {
      uv: new THREE.Vector2(0.5, 0.5),
      prev: new THREE.Vector2(0.5, 0.5),
      velocity: 0,
      active: false,
    };
    const drop = { cx: 0.5, cy: 0.5, r: 0, s: 0 };
    let textureLoaded = false;
    const clock = new THREE.Clock();

    /* ── Resize ── */
    function resize() {
      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      // Rebuild display plane if container was hidden at init (e.g. <lg breakpoint)
      rebuildDisplayPlane();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    /* ── Load texture ── */
    new THREE.TextureLoader().load(src, (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      dispMat.uniforms.uImage.value = tex;
      textureLoaded = true;
    });

    /* ── Pointer events ── */
    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      pointer.prev.copy(pointer.uv);
      pointer.uv.set(x, y);
      pointer.velocity = Math.min(
        pointer.uv.distanceTo(pointer.prev) * 12,
        1
      );
      pointer.active = true;
    }
    function onEnter() {
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
      pointer.velocity = 0;
    }
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointerleave", onLeave);

    /* ── Render loop ── */
    let raf: number;
    function animate() {
      raf = requestAnimationFrame(animate);
      if (!textureLoaded || !dispMesh) return;

      // Velocity-based drop injection
      if (pointer.active && pointer.velocity > 0.005) {
        drop.cx = pointer.uv.x;
        drop.cy = pointer.uv.y;
        drop.r = 0.015 + pointer.velocity * 0.035;
        drop.s = pointer.velocity * 0.2;
      } else {
        drop.r *= 0.92;
        drop.s *= 0.88;
        pointer.velocity *= 0.93;
      }

      const isA = writeIdx === 0;
      const readRT = isA ? rtA : rtB;
      const writeRT = isA ? rtB : rtA;

      // ── Pass 1: Ripple simulation → writeRT ──
      simMat.uniforms.uPrev.value = readRT.texture;
      simMat.uniforms.uCenter.value.set(drop.cx, drop.cy);
      simMat.uniforms.uRadius.value = drop.r;
      simMat.uniforms.uStrength.value = drop.s;
      renderer.setRenderTarget(writeRT);
      renderer.render(simScene, simCam);

      // ── Pass 2: Display → screen ──
      dispMat.uniforms.uRipple.value = writeRT.texture;
      dispMat.uniforms.uTime.value = clock.elapsedTime;
      renderer.setRenderTarget(null);
      renderer.render(dispScene, dispCam);

      writeIdx = 1 - writeIdx;
    }
    raf = requestAnimationFrame(animate);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      rtA.dispose();
      rtB.dispose();
      simMat.dispose();
      dispMat.dispose();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [src, width, height, isMobile]);

  /* ── Mobile fallback ── */
  if (isMobile) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
          style={{ filter: "grayscale(1) contrast(1.1) brightness(0.95)" }}
          loading="lazy"
        />
      </div>
    );
  }

  /* ── Desktop: WebGL canvas ── */
  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ cursor: "crosshair" }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}

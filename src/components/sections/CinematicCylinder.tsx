"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Renderer, Camera, Transform, Texture, Program, Mesh } from "ogl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import type { CameraAnimation, ParticleMesh } from "@/lib/variant-1/types";
import {
  images,
  perspectives,
  getCylinderConfig,
  getParticleConfig,
  imageConfig,
} from "@/lib/variant-1/data";
import {
  drawImageCover,
  getPositionClasses,
  createCylinderGeometry,
  createParticleGeometry,
} from "@/lib/variant-1/utils";
import {
  cylinderVertex,
  cylinderFragment,
  particleVertex,
  particleFragment,
} from "@/lib/variant-1/shaders";

// Client-only plugin registration (Next.js SSR safe).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  CustomEase.create("cinematicSilk", "0.45, 0.05, 0.55, 0.95");
  CustomEase.create("cinematicSmooth", "0.25, 0.1, 0.25, 1");
  CustomEase.create("cinematicFlow", "0.33, 0, 0.2, 1");
  CustomEase.create("cinematicLinear", "0.4, 0, 0.6, 1");
}

/**
 * Cinematic 3D cylinder carousel — ported from Codrops
 * (https://github.com/JosephASG/codrops-cinematic-scroll-animations, demo 1).
 *
 * Adaptations for this Next.js site:
 *  - Replaced premium `gsap/ScrollSmoother` with native scroll + ScrollTrigger
 *    (the rest of the site already drives smooth scroll via Lenis).
 *  - Scoped GSAP work in `gsap.context` + `ctx.revert()` so cleanup never
 *    kills ScrollTriggers owned by sibling sections.
 *  - Switched the canvas/text from `position: fixed` to `position: sticky`
 *    so the experience is contained to this section instead of the whole page.
 *  - Reads its image set from `src/lib/variant-1/data.ts` (the user's
 *    "best shots" folder).
 */
export default function CinematicCylinder() {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rendererRef = useRef<Renderer | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const cylinderRef = useRef<Mesh | null>(null);
  const cameraAnimRef = useRef<CameraAnimation>({ x: 0, y: 0, z: 8, rotY: 0 });
  const particlesRef = useRef<ParticleMesh[]>([]);
  const lastRotationRef = useRef(0);
  const velocityRef = useRef(0);
  const momentumRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const visHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (
      !canvasRef.current ||
      !containerRef.current ||
      typeof window === "undefined"
    ) {
      return;
    }

    const cylinderConfig = getCylinderConfig();
    const particleConfig = getParticleConfig();

    const renderer = new Renderer({
      canvas: canvasRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.disable(gl.CULL_FACE);
    rendererRef.current = renderer;

    const getResponsiveDimensions = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;

      const maxRadius = isMobile ? 1.8 : isTablet ? 2.2 : 2.5;
      const cylinderHeight = isMobile ? 0.8 : isTablet ? 1.0 : 1.2;
      const cameraZ = isMobile ? 6 : isTablet ? 7 : 8;
      const fov = isMobile ? 50 : 45;

      return {
        cylinderScale: maxRadius / cylinderConfig.radius,
        cylinderHeight,
        cameraZ,
        fov,
        isMobile,
      };
    };

    const dimensions = getResponsiveDimensions();

    const cameraOptions: { fov: number; aspect?: number } = { fov: dimensions.fov };
    if (dimensions.isMobile) {
      cameraOptions.aspect = window.innerWidth / window.innerHeight;
    }
    const camera = new Camera(gl, cameraOptions);
    camera.position.set(0, 0, dimensions.cameraZ);
    cameraRef.current = camera;

    const scene = new Transform();
    sceneRef.current = scene;

    const geometry = createCylinderGeometry(gl, cylinderConfig);

    const hardwareLimit = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const isMobileDevice = window.innerWidth < 768;
    const safeLimit = isMobileDevice ? 2048 : Math.min(hardwareLimit, 8192);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
      willReadFrequently: false,
      alpha: false,
    })!;
    const numImages = images.length;

    const totalWidthOriginal = imageConfig.width * numImages;
    const heightOriginal = imageConfig.height;
    const scale = Math.min(1, safeLimit / totalWidthOriginal);

    canvas.width = Math.floor(totalWidthOriginal * scale) + 1;
    canvas.height = Math.floor(heightOriginal * scale);

    let loadedImages = 0;
    const imageElements: HTMLImageElement[] = [];

    const circumference = 2 * Math.PI * cylinderConfig.radius;
    const textureAspectRatio = imageConfig.height / (imageConfig.width * images.length);
    const idealHeight = circumference * textureAspectRatio;
    const heightCorrection = idealHeight / cylinderConfig.height;

    let lastWidth = window.innerWidth;

    const handleResize = () => {
      if (rendererRef.current && cameraRef.current && cylinderRef.current) {
        const currentWidth = window.innerWidth;
        const newDimensions = getResponsiveDimensions();

        // Mobile address-bar jump prevention: if width unchanged, only the URL
        // bar toggled — bail to avoid a camera zoom/crop.
        if (newDimensions.isMobile && currentWidth === lastWidth) {
          return;
        }
        lastWidth = currentWidth;

        rendererRef.current.setSize(currentWidth, window.innerHeight);

        cameraRef.current.perspective({
          fov: newDimensions.fov,
          aspect: currentWidth / window.innerHeight,
        });

        if (newDimensions.isMobile) {
          cylinderRef.current.scale.set(
            newDimensions.cylinderScale,
            newDimensions.cylinderScale * heightCorrection,
            newDimensions.cylinderScale
          );
        } else {
          cylinderRef.current.scale.set(
            newDimensions.cylinderScale,
            newDimensions.cylinderScale,
            newDimensions.cylinderScale
          );
        }

        if (
          cameraAnimRef.current.z === 8 ||
          cameraAnimRef.current.z === 7 ||
          cameraAnimRef.current.z === 6
        ) {
          cameraAnimRef.current.z = newDimensions.cameraZ;
        }

        ScrollTrigger.refresh();
      }
    };

    // GSAP work is scoped to a context so cleanup never touches ScrollTriggers
    // owned by sibling sections (HorizontalSection, etc.).
    const gsapCtx = gsap.context(() => {
      images.forEach((imageSrc, index) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          imageElements[index] = img;
          loadedImages++;

          const totalCanvasWidth = canvas.width;
          const canvasHeight = canvas.height;

          if (loadedImages === numImages) {
            // Draw all images to the atlas canvas
            imageElements.forEach((loadedImg, i) => {
              const xStartExact = (i / numImages) * totalCanvasWidth;
              const xEndExact = ((i + 1) / numImages) * totalCanvasWidth;

              const xPos = Math.floor(xStartExact);
              const xEnd = Math.floor(xEndExact);
              const drawWidthActual = xEnd - xPos;

              drawImageCover(ctx, loadedImg, xPos, 0, drawWidthActual, canvasHeight);
            });

            // Seam fix: draw a 1-pixel strip of the first image at the very end
            // so the texture wraps seamlessly when mapped onto the cylinder.
            {
              const firstImg = imageElements[0];
              const stripSrcX = 0;
              const stripSrcW = 1;
              const stripDstX = totalCanvasWidth;
              ctx.drawImage(firstImg, stripSrcX, 0, stripSrcW, heightOriginal, stripDstX, 0, 1, canvasHeight);
            }

            const texture = new Texture(gl, {
              wrapS: gl.CLAMP_TO_EDGE,
              wrapT: gl.CLAMP_TO_EDGE,
              minFilter: gl.LINEAR,
              magFilter: gl.LINEAR,
              generateMipmaps: false,
            });

            texture.image = canvas;
            texture.needsUpdate = true;

            const program = new Program(gl, {
              vertex: cylinderVertex,
              fragment: cylinderFragment,
              uniforms: {
                tMap: { value: texture },
                uDarkness: { value: 0.3 },
              },
              cullFace: null,
            });

            const cylinder = new Mesh(gl, { geometry, program });
            cylinder.setParent(scene);
            cylinder.rotation.y = 0.5;
            cylinder.scale.set(
              dimensions.cylinderScale,
              dimensions.cylinderScale,
              dimensions.cylinderScale
            );
            cylinderRef.current = cylinder;

            setIsLoading(false);

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            });

            tl.to(cameraAnimRef.current, {
              x: 0,
              y: 0,
              z: dimensions.cameraZ,
              duration: 1,
              ease: "cinematicSilk",
            })
              .to(cameraAnimRef.current, {
                x: 0,
                y: 5,
                z: 5,
                duration: 1,
                ease: "cinematicFlow",
              })
              .to(cameraAnimRef.current, {
                x: 1.5,
                y: 2,
                z: 2,
                duration: 2,
                ease: "cinematicLinear",
              })
              .to(cameraAnimRef.current, {
                x: 0.5,
                y: 0,
                z: 0.8,
                duration: 3.5,
                ease: "power1.inOut",
              })
              .to(cameraAnimRef.current, {
                x: -6,
                y: -1,
                z: dimensions.cameraZ,
                duration: 1,
                ease: "cinematicSmooth",
              });

            tl.to(
              cylinderRef.current.rotation,
              {
                // 3.5 full turns per section (was 4.5) — slower, calmer spin
                // while the camera pushes through its choreography.
                y: "+=21.99",
                duration: 8.5,
                ease: "none",
              },
              0
            );

            textRefs.current.forEach((textEl, index) => {
              if (!textEl) return;

              const sectionDuration = 100 / perspectives.length;
              const start = index * sectionDuration;
              const end = (index + 1) * sectionDuration;

              const textTimeline = gsap.timeline({
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: `${start}% top`,
                  end: `${end}% top`,
                  scrub: 0.8,
                },
              });

              textTimeline
                .fromTo(
                  textEl,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 0.2,
                    ease: "cinematicSmooth",
                  }
                )
                .to(textEl, {
                  opacity: 1,
                  duration: 0.6,
                  ease: "none",
                })
                .to(textEl, {
                  opacity: 0,
                  duration: 0.2,
                  ease: "cinematicSmooth",
                });
            });

            for (let i = 0; i < particleConfig.numParticles; i++) {
              const { geometry: lineGeometry, userData } = createParticleGeometry(
                gl,
                particleConfig,
                i,
                cylinderConfig.height
              );

              // Store the raw position buffer for direct updates in the animation loop.
              // OGL Geometry may consume the Float32Array during construction, so we
              // keep our own reference to mutate positions without going through
              // geometry.attributes (which may be undefined in some OGL versions).
              const posBuffer = lineGeometry.attributes.position?.data as Float32Array | undefined;

              const lineProgram = new Program(gl, {
                vertex: particleVertex,
                fragment: particleFragment,
                uniforms: {
                  uColor: { value: [1.0, 1.0, 1.0] },
                  uOpacity: { value: 0.0 },
                },
                transparent: true,
                depthTest: true,
              });

              const particle = new Mesh(gl, {
                geometry: lineGeometry,
                program: lineProgram,
                mode: gl.LINE_STRIP,
              }) as ParticleMesh;

              particle.userData = userData;
              (particle as any)._posBuffer = posBuffer;
              particle.setParent(scene);
              particlesRef.current.push(particle);
            }

            window.addEventListener("resize", handleResize);

            /* ── Render-loop gating ──────────────────────────────────
               The RAF loop only runs while the 500svh section is actually
               on screen AND the tab is visible. Scrolling past it (or
               switching tabs) stops all GL work; returning resumes. */
            let sectionVisible = true;
            let tabVisible = !document.hidden;
            let loopRunning = false;

            const startLoop = () => {
              if (loopRunning || !rendererRef.current) return;
              loopRunning = true;
              rafIdRef.current = requestAnimationFrame(animate);
            };
            const stopLoop = () => {
              loopRunning = false;
              if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
              }
            };
            const syncLoop = () => {
              if (sectionVisible && tabVisible) startLoop();
              else stopLoop();
            };

            const io = new IntersectionObserver(
              ([entry]) => {
                sectionVisible = entry.isIntersecting;
                syncLoop();
              },
              // small margin so brief edge-scrolls don't thrash the loop
              { rootMargin: "10% 0px" }
            );
            if (containerRef.current) {
              io.observe(containerRef.current);
            }
            ioRef.current = io;

            const onVisChange = () => {
              tabVisible = !document.hidden;
              syncLoop();
            };
            document.addEventListener("visibilitychange", onVisChange);
            visHandlerRef.current = onVisChange;

            const animate = () => {
              // Stop immediately if component has been cleaned up
              if (!rendererRef.current || !sceneRef.current || !cameraRef.current) {
                return;
              }
              // Gate-aware continuation: only re-queue while allowed
              if (loopRunning) {
                rafIdRef.current = requestAnimationFrame(animate);
              }

              camera.position.set(
                cameraAnimRef.current.x,
                cameraAnimRef.current.y,
                cameraAnimRef.current.z
              );
              camera.lookAt([0, 0, 0]);

              if (cylinderRef.current) {
                const currentRotation = cylinderRef.current.rotation.y;
                velocityRef.current = currentRotation - lastRotationRef.current;
                lastRotationRef.current = currentRotation;

                const inertiaFactor = 0.15;
                const decayFactor = 0.92;
                momentumRef.current =
                  momentumRef.current * decayFactor + velocityRef.current * inertiaFactor;

                const speed = Math.abs(velocityRef.current) * 100;
                const isRotating = Math.abs(velocityRef.current) > 0.0001;

                particlesRef.current.forEach((particle) => {
                  const userData = particle.userData;

                  const targetOpacity = isRotating ? Math.min(speed * 3, 0.95) : 0;
                  const currentOpacity = particle.program.uniforms.uOpacity
                    .value as number;
                  particle.program.uniforms.uOpacity.value =
                    currentOpacity + (targetOpacity - currentOpacity) * 0.15;

                  if (isRotating) {
                    const rotationOffset = velocityRef.current * userData.speed * 1.5;
                    const newBaseAngle = userData.baseAngle + rotationOffset;
                    userData.baseAngle = newBaseAngle;

                    const segments = particleConfig.segments;
                    const positions = (particle as any)._posBuffer as Float32Array | undefined;

                    if (positions) {
                      for (let j = 0; j <= segments; j++) {
                        const t = j / segments;
                        const angle = newBaseAngle + userData.angleSpan * t;
                        const radiusWithSpeed = userData.radius;

                        positions[j * 3] = Math.cos(angle) * radiusWithSpeed;
                        positions[j * 3 + 1] = userData.baseY;
                        positions[j * 3 + 2] = Math.sin(angle) * radiusWithSpeed;
                      }

                      const posAttr = particle.geometry.attributes.position;
                      if (posAttr) {
                        posAttr.needsUpdate = true;
                      }
                    }
                  }
                });
              }

              if (cylinderRef.current && sceneRef.current && cameraRef.current && rendererRef.current) {
                rendererRef.current.render({ scene: sceneRef.current, camera: cameraRef.current });
              }
            };
            // Kick off (IO/visibility gate decides whether the loop runs)
            syncLoop();
          }
        };
        img.onerror = () => {
          console.error("Failed to load image:", imageSrc);
          setIsLoading(false);
        };
        img.src = imageSrc;
      });
    }, containerRef);

    return () => {
      // Cancel the render loop FIRST to prevent any further draw calls
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      window.removeEventListener("resize", handleResize);
      if (visHandlerRef.current) {
        document.removeEventListener("visibilitychange", visHandlerRef.current);
        visHandlerRef.current = null;
      }
      ioRef.current?.disconnect();
      ioRef.current = null;

      // Free WebGL resources before reverting GSAP (which may trigger re-renders)
      particlesRef.current.forEach((p) => {
        try { p.geometry?.remove?.(); } catch {}
        try { p.program?.remove?.(); } catch {}
      });
      try { cylinderRef.current?.geometry?.remove?.(); } catch {}
      try { cylinderRef.current?.program?.remove?.(); } catch {}
      try { geometry?.remove?.(); } catch {}

      gsapCtx.revert();

      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      cylinderRef.current = null;
      particlesRef.current = [];
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="design-in-motion"
      className="relative z-[1] w-full text-white min-h-screen"
      style={{ height: "500svh" }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* ══════ Ambient radial glow — matches the Services section ══════ */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-0 w-[1200px] h-[1200px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
          }}
        />

        {/* WebGL canvas — aria-label for accessibility since images are rendered via JS */}
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          style={{ display: "block" }}
          aria-label="Rotating 3D gallery showcasing Rahul Chanda's commercial photography: product, food, beverage, footwear, and advertising campaign work"
          role="img"
        />

        {/* Caption overlays — fade in/out as the cylinder rotates */}
        <div className="pointer-events-none absolute inset-0 z-10 text-white">
          {perspectives.map((perspective, index) => (
            <div
              key={index}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className={`absolute text-center opacity-0 max-md:w-full ${getPositionClasses(
                perspective.position
              )}`}
            >
              <h2 className="text-7xl font-[300] leading-[0.8] max-md:text-3xl">
                {perspective.title}
               </h2>
               <p className="mt-2 text-2xl font-[300] opacity-50 max-md:text-base">
                 {perspective.description}
               </p>
             </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-8 right-8 z-10 animate-[float_2.6s_cubic-bezier(0.25,1,0.5,1)_infinite]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/60"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <span className="text-m text-white/40">Scroll</span>
          </div>

        {/* View Gallery CTA */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <Link
            href="/gallery"
            className="group flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            data-cursor="pointer"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">View Gallery</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Minimal loading veil */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-700">
            <div className="flex flex-col items-center gap-3">
              <div className="h-[2px] w-24 overflow-hidden bg-white/10">
                <div className="h-full w-1/2 animate-pulse bg-white/70" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Loading reel
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

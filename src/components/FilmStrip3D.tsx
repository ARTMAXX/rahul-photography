'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// ── Constants ──
const IMG_W = 2.2;
const IMG_H = 3.0;
const NUM_IMGS = 10;

const projects = [
  '/best shots/Food photo/food-biriyani.webp',
  '/best shots/Beverage images/bev-toast.webp',
  '/best shots/Product image/product-headphone.webp',
  '/best shots/Food photo/food-chicken.webp',
  '/best shots/Product image/product-watch-luxury.webp',
  '/best shots/Beverage images/three-iced-drinks.webp',
  '/best shots/mens shoe/shoe-mens-campaign.webp',
  '/best shots/ladies shoe/High-end-shoe.webp',
  '/best shots/Product image/product-energy-design.webp',
  '/best shots/Food photo/food-curry.webp',
];

// ════════════════════════════════════════
//  RIBBON CURVE — S-curve through 3D
// ════════════════════════════════════════
function buildCurve(): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(-12, -2.5, -6),
    new THREE.Vector3(-8,  -1.0,  0),
    new THREE.Vector3(-4,   0.3,  4),
    new THREE.Vector3( 0,   1.0,  5.5),
    new THREE.Vector3( 4,   0.3,  4),
    new THREE.Vector3( 8,  -1.0,  0),
    new THREE.Vector3(12,  -2.5, -6),
  ]);
}

// ════════════════════════════════════════
//  RIBBON RENDERER
//  Every frame: reads ribbon, sets images.
//  Images NEVER animate independently.
// ════════════════════════════════════════
function RibbonRenderer({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const { camera } = useThree();
  const curve = useMemo(() => buildCurve(), []);
  const meshesRef = useRef<(THREE.Mesh | null)[]>([]);
  const textures = projects.map((src) => useTexture(src));

  // ── Reusable vectors (avoid GC) ──
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tan = useMemo(() => new THREE.Vector3(), []);
  const bin = useMemo(() => new THREE.Vector3(), []);
  const norm = useMemo(() => new THREE.Vector3(), []);
  const up = useMemo(() => new THREE.Vector3(), []);
  const m4 = useMemo(() => new THREE.Matrix4(), []);
  const quat = useMemo(() => new THREE.Quaternion(), []);
  const camPos = useMemo(() => new THREE.Vector3(), []);
  const lookPos = useMemo(() => new THREE.Vector3(), []);
  const camTarget = useMemo(() => new THREE.Vector3(), []);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);

  // ── Pre-compute edge-to-edge spacing ──
  const totalLen = curve.getLength();
  const step = IMG_W / totalLen; // parameter step for one image width
  const startT = 0.05;
  const imageTs = useMemo(() => {
    const ts: number[] = [];
    for (let i = 0; i < NUM_IMGS; i++) {
      ts.push(Math.min(0.95, startT + i * step));
    }
    return ts;
  }, [step]);

  // ── Every frame: compute ALL image transforms from ribbon ──
  useFrame(() => {
    const p = Math.max(0, Math.min(1, progressRef.current));

    // ── Update camera ──
    curve.getPointAt(p, camPos);
    curve.getTangentAt(p, tan).normalize();

    // Frenet frame at camera position
    up.set(0, 1, 0);
    if (Math.abs(tan.y) > 0.99) up.set(0, 0, 1);
    bin.crossVectors(tan, up).normalize();
    norm.crossVectors(bin, tan).normalize();

    // Camera offset: in front (+normal), slightly elevated (+binormal)
    camTarget.copy(camPos)
      .addScaledVector(norm, 9)
      .addScaledVector(bin, 0.8);

    // Look slightly ahead
    const lookT = Math.min(1, p + 0.04);
    curve.getPointAt(lookT, lookPos);
    lookTarget.copy(lookPos).addScaledVector(bin, 0.3);

    camera.position.lerp(camTarget, 0.08);
    camera.lookAt(lookTarget);

    // ── Update EVERY image from the ribbon ──
    for (let i = 0; i < NUM_IMGS; i++) {
      const mesh = meshesRef.current[i];
      if (!mesh) continue;

      const t = imageTs[i];

      // 1. Position from curve
      curve.getPointAt(t, pos);

      // 2. Tangent at this point
      curve.getTangentAt(t, tan).normalize();

      // 3. Frenet frame from tangent
      up.set(0, 1, 0);
      if (Math.abs(tan.y) > 0.99) up.set(0, 0, 1);
      bin.crossVectors(tan, up).normalize();
      norm.crossVectors(bin, tan).normalize();

      // 4. Build quaternion: X=tangent, Y=binormal, Z=normal
      m4.set(
        tan.x, bin.x, norm.x, 0,
        tan.y, bin.y, norm.y, 0,
        tan.z, bin.z, norm.z, 0,
        0,     0,     0,      1,
      );
      quat.setFromRotationMatrix(m4);

      // 5. Set position + rotation (NO scale, NO opacity, NO independent anything)
      mesh.position.copy(pos);
      mesh.quaternion.copy(quat);
    }
  });

  // ── Render meshes (static geometry, textures come from ribbon) ──
  return (
    <group>
      <fog attach="fog" args={['#E5E1D8', 12, 25]} />

      {/* Each image — geometry only, transforms come from useFrame */}
      {projects.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => { meshesRef.current[i] = el; }}
        >
          <planeGeometry args={[IMG_W, IMG_H]} />
          <meshBasicMaterial
            map={textures[i]}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ── Fallback during texture loading ──
function Fallback() {
  return null;
}

// ════════════════════════════════════════
//  EXPORTED
// ════════════════════════════════════════
export default function FilmStrip3D({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ fov: 40, near: 0.1, far: 60, position: [0, 0, 15] }}
        gl={{ alpha: false, antialias: true }}
        style={{
          width: '100%',
          height: '100%',
          background: '#E5E1D8',
        }}
      >
        <Suspense fallback={<Fallback />}>
          <RibbonRenderer progressRef={progressRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}

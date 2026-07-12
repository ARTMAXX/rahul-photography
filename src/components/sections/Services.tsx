'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const services = [
  'A.I.',
  'DESIGN',
  'DEVELOPMENT',
  'BRANDING'
];

export default function Services() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create abstract sculptural geometry
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xe8dfd0,
      roughness: 0.3,
      metalness: 0.2,
      flatShading: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x6b9bd1, 0.5);
    pointLight.position.set(-5, 0, 2);
    scene.add(pointLight);

    // Fog for atmospheric effect
    scene.fog = new THREE.Fog(0x0a0a0a, 3, 10);

    // Animation
    let scrollY = 0;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
      scrollY = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the mesh
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;

      // Move based on scroll
      mesh.position.y = Math.sin(scrollY * Math.PI) * 0.5;
      mesh.position.x = Math.cos(scrollY * Math.PI * 2) * 0.3;
      mesh.scale.setScalar(1 + scrollY * 0.3);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-[#0a0a0a] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 text-center">
          <h2 className="text-sm tracking-[0.2em] text-white/60 mb-16">
            OUR SERVICES
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service}
                className="text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tight text-white mix-blend-difference"
                style={{
                  animation: `fadeSlideIn 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {service}
              </div>
            ))}
          </div>

          <div className="mt-32 flex justify-end">
            <a
              href="#services"
              className="group text-sm tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              VIEW SERVICES
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs tracking-[0.2em] text-white/40">
            ✦ DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

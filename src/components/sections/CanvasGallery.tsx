"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image, ScrollControls, useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GALLERY_ITEMS = [
  { src: "/best shots/Product image/product-watch-luxury.webp", position: [0, 0, 0] },
  { src: "/best shots/Beverage images/bev-macro.webp", position: [2, 1, -2] },
  { src: "/best shots/Food photo/food-cream-macro.webp", position: [-2, -1, -4] },
  { src: "/best shots/ladies shoe/shoe-ladies-heels.webp", position: [0, 0, -6] },
  { src: "/best shots/Product image/product-headphone.webp", position: [2, 1, -8] },
  { src: "/best shots/Beverage images/bev-iced.webp", position: [-2, -1, -10] },
];

function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    // Camera flight: move group in Z based on scroll
    group.current.position.z = scroll.offset * 10;
  });

  return (
    <group ref={group}>
      {GALLERY_ITEMS.map((item, i) => (
        <Image 
          key={i} 
          url={item.src} 
          position={item.position as [number, number, number]} 
          scale={[3, 4, 1]}
          transparent
        />
      ))}
    </group>
  );
}

export default function CanvasGallery() {
  return (
    <section className="h-[200vh] w-full bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ScrollControls pages={2}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </section>
  );
}

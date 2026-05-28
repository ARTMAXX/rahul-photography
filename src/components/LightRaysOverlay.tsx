"use client";

import { useEffect, useRef, useState } from 'react';
import LightRays from './LightRays';

export default function LightRaysOverlay() {
  // Tracks the Hero section's top position in the viewport.
  // 0   = Hero fully in view (top of viewport)
  // -H  = Hero fully scrolled out (H = hero height)
  // We drive opacity from this so the fade is tied to actual scroll, not
  // IntersectionObserver ratio (which is blocked by GSAP pin: pinned elements
  // keep ratio=1 until the pin releases, producing a flash).
  const [heroTop, setHeroTop] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const hero = document.getElementById('hero-section');
    if (!hero) return;

    const update = () => {
      const top = hero.getBoundingClientRect().top;
      setHeroTop(top);
      rafRef.current = null;
    };

    const onScroll = () => {
      // Throttle to one read per frame
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    // Initial read
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Map heroTop to opacity:
  //   top >= 0           -> opacity 0   (Hero fully in view)
  //   top <= -heroHeight -> opacity 1   (Hero fully gone)
  // Linear interpolation in between for a smooth fade tied to scroll position.
  const heroHeight = 939; // matches the GSAP pin height; harmless if it varies slightly
  const t = Math.max(0, Math.min(1, -heroTop / heroHeight));
  const opacity = t;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 45,
        opacity,
        // Screen blend: rays only show on dark areas, never tint text/photos.
        // This makes the LightRays read as a "background" atmospheric effect
        // even though it sits above content in z-order.
        mixBlendMode: 'screen',
        // Create a new stacking context so the blend only mixes with elements
        // below this wrapper in the document, not with the canvas siblings.
        isolation: 'isolate',
        transition: 'opacity 0.25s linear',
        willChange: 'opacity',
      }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
    </div>
  );
}

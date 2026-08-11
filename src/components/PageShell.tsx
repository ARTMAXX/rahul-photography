"use client";

import { useEffect, useState, type ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";
import ColorBends from "./ColorBends";

/**
 * PageShell — conditionally wraps the page with heavy components.
 * On mobile (<768px): skips ColorBends (Three.js WebGL) and Lenis smooth scroll
 * to save battery, reduce jank, and avoid scroll hijacking.
 * On desktop: full experience with WebGL background and smooth scroll.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(true); // SSR-safe default

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    // Mobile: lightweight — no WebGL, no smooth scroll, no custom cursor
    return (
      <>
        <div className="relative z-10">
          {children}
        </div>
      </>
    );
  }

  // Desktop: full cinematic experience
  return (
    <SmoothScroll>
      <ColorBends
        colors={["#0d0506", "#160809", "#260d0e", "#571610"]}
        rotation={90}
        speed={0.15}
        scale={1.05}
        frequency={1.2}
        warpStrength={0.9}
        mouseInfluence={1}
        noise={0.08}
        parallax={0.5}
        iterations={2}
        intensity={0.55}
        bandWidth={3}
        transparent={false}
        className="fixed inset-0 z-0 h-screen w-screen"
      />
      <div className="relative z-10">
        {children}
      </div>
    </SmoothScroll>
  );
}

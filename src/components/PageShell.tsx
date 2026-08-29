"use client";

import { useEffect, useState, type ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";
import ColorBends from "./ColorBends";

/**
 * PageShell  —  ONE stable tree for every viewport.
 *
 * The old version swapped between two different trees (mobile: bare div,
 * desktop: SmoothScroll+ColorBends+div), which forced React to unmount and
 * remount the ENTIRE page right after hydration on desktop  —  a measurable
 * LCP/TBT cost and a flash of unstyled state.
 *
 * Now the tree shape never changes:
 *  - <SmoothScroll> always wraps (it adds no DOM); on mobile it runs Lenis
 *    inertly (no smoothing, no rAF) so native scrolling stays butter-smooth.
 *  - ColorBends (Three.js shader background) only MOUNTS on "°768px.
 *
 * Result: crossing the breakpoint toggles at most the WebGL canvas  — 
 * page content is never destroyed.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(true); // SSR-safe default

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMobile(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <SmoothScroll enabled={!isMobile}>
      {!isMobile && (
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
      )}
      <div className="relative z-10">{children}</div>
    </SmoothScroll>
  );
}

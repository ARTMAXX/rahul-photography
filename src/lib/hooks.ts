"use client";

import { useEffect, useState } from "react";

/**
 * Reactive viewport flag driven by matchMedia (not resize spam).
 * SSR-safe: defaults to `true` (mobile/light path) so the server render and
 * the first paint never include heavy desktop-only subtrees.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

/**
 * True when the user asked the OS to reduce motion.
 * Used to skip Lenis smoothing, breathing loops, and parallax work.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

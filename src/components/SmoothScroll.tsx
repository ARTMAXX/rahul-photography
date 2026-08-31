"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function LenisScrollSync({ enabled }: { enabled: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    // Mobile / reduced-motion: Lenis is mounted but inert  —  native scroll
    // drives everything and ScrollTrigger listens to the window directly.
    if (!enabled || !lenis) return;

    /* GSAP and ScrollTrigger are only needed when smooth scroll is active.
       Lazy-loading them here avoids ~250 KB of parse cost on mobile and on
       pages where the user never scrolls. */
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      /* Tell ScrollTrigger that Lenis is the real scroll driver.
         Without this proxy, long-range triggers can't compute progress
         because Lenis uses virtual scrolling and the native scrollTop
         never changes. In root mode, the scroller is the window. */
      ScrollTrigger.scrollerProxy(window, {
        scrollTop(value) {
          return arguments.length
            ? lenis.scrollTo(value as number, { immediate: true })
            : lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "fixed",
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();

      return () => {
        lenis.off("scroll", ScrollTrigger.update);
      };
    })();
  }, [lenis, enabled]);

  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
  /**
   * false = Lenis mounts inertly (no smoothing, no rAF loop, native scroll).
   * Used on mobile so the tree stays stable without hijacking touch scroll.
   */
  enabled?: boolean;
}

export default function SmoothScroll({
  children,
  enabled = true,
}: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        autoRaf: enabled,
        smoothWheel: enabled,
      }}
    >
      <LenisScrollSync enabled={enabled} />
      {children}
    </ReactLenis>
  );
}

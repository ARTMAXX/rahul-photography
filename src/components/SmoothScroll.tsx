"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Tell ScrollTrigger that Lenis is the real scroll driver.
   Without this proxy, long-range triggers (top bottom → bottom top)
   can't compute progress because Lenis uses virtual scrolling and
   the native scrollTop never changes. Deferred to useEffect so
   document is available (no SSR reference error). */
function setupScrollerProxy() {
  ScrollTrigger.scrollerProxy("[data-lenis]", {
    scrollTop(value) {
      return arguments.length
        ? window.scrollTo(0, value)
        : window.scrollY;
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
  ScrollTrigger.refresh();
}

function LenisScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    setupScrollerProxy();
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
    }
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
      autoRaf
    >
      <LenisScrollSync />
      {children}
    </ReactLenis>
  );
}

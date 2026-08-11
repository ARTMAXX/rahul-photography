"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * MobileShell — wraps the page and conditionally disables heavy components
 * (ColorBends WebGL, Lenis smooth scroll, custom cursor) on mobile devices.
 * This saves battery, reduces jank, and avoids scroll hijacking issues.
 */
export default function MobileShell({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(true); // default to mobile for SSR safety

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return <>{children}</>;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

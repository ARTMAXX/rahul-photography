"use client";

import { useEffect } from "react";

let lockCount = 0;
let prevOverflow = "";
let lenisInstance: { stop: () => void; start: () => void } | null = null;

/** Register the Lenis instance so locks can freeze/resume smooth scroll. */
export function registerLenisForLock(lenis: typeof lenisInstance) {
  lenisInstance = lenis;
}

/**
 * Lock body scrolling. Safe to nest (lightbox + mobile menu at once):
 * the lock releases only when the last caller unlocks.
 * Works with AND without Lenis (mobile has no Lenis).
 */
export function lockScroll() {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (lockCount > 1) return;

  const html = document.documentElement;
  prevOverflow = html.style.overflow;
  html.style.overflow = "hidden";
  // iOS Safari: also pin body to prevent rubber-banding behind overlays
  document.body.style.touchAction = "none";
  try {
    lenisInstance?.stop();
  } catch {
    /* lenis not mounted */
  }
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;

  const html = document.documentElement;
  html.style.overflow = prevOverflow || "";
  document.body.style.touchAction = "";
  try {
    lenisInstance?.start();
  } catch {
    /* lenis not mounted */
  }
}

/** React hook form: lock while `locked` is true. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    lockScroll();
    return unlockScroll;
  }, [locked]);
}

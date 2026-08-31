"use client";

import { useEffect, useState, lazy, Suspense } from "react";

// Lazy-load the heavy framer-motion cursor component — on touch devices it
// never renders at all so the ~100 KB of framer-motion is never loaded.
const CursorImpl = lazy(() =>
  import("./CursorImpl").then((m) => ({ default: m.default }))
);

function CursorFallback() {
  return null; // invisible while framer-motion hydrates
}

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;
    // CursorImpl + framer-motion only load for non-touch (desktop) users
  }, []);

  if (isTouch) return null;

  return (
    <Suspense fallback={<CursorFallback />}>
      <CursorImpl />
    </Suspense>
  );
}

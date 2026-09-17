"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function CursorImpl() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "close">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  // prefers-reduced-motion: the trailing ring IS motion decoration —
  // users who asked for less motion get the plain native cursor only.
  const prefersReducedMotion = usePrefersReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Accent ring spring — stiff enough to hug the pointer without wobbling.
  // The native cursor stays visible; this ring is decoration, not the cursor.
  const springConfig = { damping: 40, stiffness: 400, mass: 0.35 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor") || "pointer";
        setCursorType(type as typeof cursorType);
        setCursorText(interactiveEl.getAttribute("data-cursor-label") || "");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible || prefersReducedMotion) return null;

  const outerVariants = {
    default: {
      width: 28,
      height: 28,
      border: "1px solid rgba(255,255,255,0.25)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    pointer: {
      width: 48,
      height: 48,
      border: "1px solid rgba(255,255,255,0.6)",
      backgroundColor: "rgba(255,255,255,0.04)",
    },
    view: {
      width: 72,
      height: 72,
      border: "1px solid rgba(255,255,255,0.5)",
      backgroundColor: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(4px)",
    },
    close: {
      width: 48,
      height: 48,
      border: "1px solid rgba(255,255,255,0.5)",
      backgroundColor: "rgba(255,255,255,0.06)",
    },
  };

  return (
    <>
      {/* Accent ring — trails softly behind the native cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={outerVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cursorText && (
          <span className="font-sans text-[9px] uppercase font-medium tracking-[0.12em] pointer-events-none text-white/80">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}

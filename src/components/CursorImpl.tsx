"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorImpl() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "close">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 300, mass: 0.4 };
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

  if (!isVisible) return null;

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

  const innerVariants = {
    default: {
      scale: 1,
      backgroundColor: "#ffffff",
    },
    pointer: {
      scale: 0.4,
      backgroundColor: "#ffffff",
    },
    view: {
      scale: 0,
      backgroundColor: "#ffffff",
    },
    close: {
      scale: 0.5,
      backgroundColor: "#ffffff",
    },
  };

  return (
    <>
      {/* Trailing ring */}
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

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={innerVariants}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "view" | "explore" | "close" | "pointer">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Core coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for outer trailing ring
  const springConfig = { damping: 45, stiffness: 350, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor if touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

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
        setCursorType(type as any);
        const label = interactiveEl.getAttribute("data-cursor-label") || "";
        setCursorText(label);
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

  // Variants for the outer trailing circle
  const outerVariants = {
    default: {
      width: 32,
      height: 32,
      border: "1.5px solid rgba(232, 59, 44, 0.4)",
      backgroundColor: "rgba(0,0,0,0)",
      boxShadow: "0 0 12px rgba(232, 59, 44, 0.15)",
    },
    pointer: {
      width: 56,
      height: 56,
      border: "1.5px solid rgba(232, 59, 44, 0.8)",
      backgroundColor: "rgba(232, 59, 44, 0.05)",
      boxShadow: "0 0 20px rgba(232, 59, 44, 0.4)",
    },
    view: {
      width: 90,
      height: 90,
      border: "1.5px solid rgba(255, 255, 255, 0.8)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
    },
    explore: {
      width: 100,
      height: 100,
      border: "1.5px solid rgba(232, 59, 44, 0.8)",
      backgroundColor: "rgba(10, 10, 10, 0.85)",
      backdropFilter: "blur(4px)",
      boxShadow: "0 0 30px rgba(232, 59, 44, 0.45)",
    },
    close: {
      width: 70,
      height: 70,
      border: "1.5px solid rgba(232, 59, 44, 0.6)",
      backgroundColor: "rgba(10, 10, 10, 0.9)",
      boxShadow: "0 0 15px rgba(232, 59, 44, 0.2)",
    }
  };

  // Variants for the inner solid dot
  const innerVariants = {
    default: {
      scale: 1,
      backgroundColor: "#e83b2c",
      boxShadow: "0 0 8px rgba(232, 59, 44, 0.6)",
    },
    pointer: {
      scale: 0.5,
      backgroundColor: "#ffffff",
      boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
    },
    view: {
      scale: 0,
      backgroundColor: "#ffffff",
    },
    explore: {
      scale: 0,
      backgroundColor: "#ffffff",
    },
    close: {
      scale: 0.5,
      backgroundColor: "#e83b2c",
    }
  };

  return (
    <>
      {/* 1. Trailing Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-center transition-all duration-300"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={outerVariants}
      >
        {cursorText && (
          <span className="font-sans text-[10px] uppercase font-bold tracking-widest pointer-events-none text-white drop-shadow-md">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* 2. Fast Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={innerVariants}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}

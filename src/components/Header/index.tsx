"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import Button from "./Button";
import Nav from "./Nav";
import styles from "./style.module.scss";
import { registerLenisForLock, useScrollLock } from "@/lib/scroll-lock";
import { useIsMobile } from "@/lib/hooks";

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

function getPanelVariants(): Variants {
  // 9 links + social row no longer fit the old fixed 650px panel.
  // Height adapts to the viewport (capped so it never leaves the screen);
  // falls back to 650px during SSR.
  const panelH =
    typeof window !== "undefined"
      ? Math.min(720, Math.max(520, window.innerHeight - 80))
      : 650;
  return {
    open: {
      width: "480px",
      maxWidth: "480px",
      height: `${panelH}px`,
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: EASE },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: EASE },
    },
  };
}

export default function Header() {
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  const [inCylinderSection, setInCylinderSection] = useState(false);
  const lenis = useLenis();

  // Wire Lenis into the shared scroll-lock (mobile has no Lenis; lock still
  // works through native overflow).
  useEffect(() => {
    registerLenisForLock(lenis ?? null);
    return () => registerLenisForLock(null);
  }, [lenis]);

  // Freeze page scroll while the menu is open
  useScrollLock(isActive);

  // Escape closes the menu
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive]);

  useEffect(() => {
    const section = document.getElementById("design-in-motion");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInCylinderSection(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const navVariant = isMobile ? "fullscreen" : "panel";

  return (
    <>
      {/* Mobile fullscreen overlay  —  rendered OUTSIDE the header element.
          The header creates its own stacking context (fixed + z-9999); a
          nav inside it could never paint ABOVE the header, so the overlay
          swallowed the logo and CLOSE button, leaving no way back. As a
          sibling, the header (z-9999) sits above the overlay (z-9995):
          logo + CLOSE stay visible and tappable while the menu is open. */}
      {isMobile && (
        <AnimatePresence>
          {isActive && (
            <Nav variant="fullscreen" onNavigate={() => setIsActive(false)} />
          )}
        </AnimatePresence>
      )}

      <div
        className={`${styles.header} ${
          inCylinderSection ? styles.hidden : ""
        }`}
        data-menu-open={isActive || undefined}
      >
        {/* Brand  —  always-visible wordmark. No aria-label override: the
            accessible name then equals the visible content, which satisfies
            axe label-content-name-mismatch (href="/" carries the context). */}
        <Link
          href="/"
          onClick={() => setIsActive(false)}
          className="pointer-events-auto relative z-[2] select-none leading-none"
        >
          <span className="font-serif text-lg tracking-tight text-white">
            Rahul<span className="italic text-[#e83b2c]"> Chanda</span>
          </span>
          {/* leading space keeps textContent aligned with the accessible name
              ("Rahul Chanda Photography"), satisfying label-content-name-mismatch */}
          {" "}
          {/* no text-transform: axe's label-content-name check compares the
              RENDERED text case-sensitively against the accessible name */}
          <span className="mt-0.5 block font-sans text-[8px] tracking-[0.35em] text-white/40">
            PHOTOGRAPHY
          </span>
        </Link>

        {/* Right cluster: expanding desktop panel + MENU/CLOSE button.
            The cluster mirrors the old header origin so the panel's negative
            offsets keep their original bleed geometry. */}
        <div className={styles.cluster}>
          {!isMobile && (
            <motion.div
              className={styles.menu}
              variants={getPanelVariants()}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>
                {isActive && <Nav variant="panel" onNavigate={() => setIsActive(false)} />}
              </AnimatePresence>
            </motion.div>
          )}

          <Button
            isActive={isActive}
            toggleMenu={() => setIsActive(!isActive)}
          />
        </div>
      </div>
    </>
  );
}

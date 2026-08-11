"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";
import styles from "./style.module.scss";

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

function getMenuVariants(): Variants {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return {
    open: {
      width: isMobile ? "calc(100vw - 20px)" : "480px",
      maxWidth: isMobile ? "340px" : "480px",
      height: isMobile ? "500px" : "650px",
      top: isMobile ? "-10px" : "-25px",
      right: isMobile ? "-5px" : "-25px",
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
  const [isActive, setIsActive] = useState(false);
  const [inCylinderSection, setInCylinderSection] = useState(false);
  const [menuVariants, setMenuVariants] = useState<Variants>(getMenuVariants());

  useEffect(() => {
    setMenuVariants(getMenuVariants());
    const handleResize = () => setMenuVariants(getMenuVariants());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div
      className={`${styles.header} ${
        inCylinderSection ? styles.hidden : ""
      }`}
    >
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav onNavigate={() => setIsActive(false)} />}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}

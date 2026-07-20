"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";
import styles from "./style.module.scss";

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

const menu: Variants = {
  open: {
    width: "480px",
    height: "650px",
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

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [inCylinderSection, setInCylinderSection] = useState(false);

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
        variants={menu}
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

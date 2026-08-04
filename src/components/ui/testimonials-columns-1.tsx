"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";

const accents = [
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
  { bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/20", text: "text-[#ffffff]" },
];

const Avatar = ({ name, index }: { name: string; index: number }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  const accent = accents[index % accents.length];
  return (
    <div className={`h-10 w-10 rounded-full ${accent.bg} ${accent.border} border flex items-center justify-center text-xs ${accent.text} font-medium shrink-0`}>
      {initials}
    </div>
  );
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    name: string;
    role: string;
  }[];
  duration?: number;
  startIndex?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const columnRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const halfHeightRef = useRef(0);
  const y = useMotionValue(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  // Measure content height
  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        halfHeightRef.current = contentRef.current.scrollHeight / 2;
      }
    };
    measure();
    const t = setTimeout(measure, 200);
    const ro = typeof ResizeObserver !== "undefined" && contentRef.current
      ? new ResizeObserver(measure) : null;
    if (ro && contentRef.current) ro.observe(contentRef.current);
    return () => { clearTimeout(t); ro?.disconnect(); };
  }, [props.testimonials]);

  // Simple requestAnimationFrame loop — no motion/react overhead
  useEffect(() => {
    const speed = 40 / (props.duration || 10);
    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;
      const hh = halfHeightRef.current;

      let current = y.get();

      if (isHovered) {
        // Pause auto-scroll while hovering, letting the reader focus
        if (Math.abs(velocityRef.current) < 0.5) velocityRef.current = 0;
        current += velocityRef.current * dt;
        velocityRef.current *= Math.pow(0.03, dt);
      } else {
        // Auto-scroll up
        current -= speed * dt * 60;
      }

      // Seamless loop
      if (hh > 0) {
        if (current <= -hh) current += hh;
        else if (current > 0) current -= hh;
      }

      y.set(current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isHovered, props.duration, y]);

  return (
    <div
      ref={columnRef}
      className={props.className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); velocityRef.current = 0; }}
    >
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="flex flex-col items-center gap-6 pb-6"
      >
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <div
                aria-hidden={index === 1}
                className="p-8 rounded-3xl border border-white/[0.08] bg-black/25 backdrop-blur-md max-w-xs w-full hover:bg-black/40 hover:border-white/[0.14] transition-colors duration-300"
                key={i}
              >
                <div className="text-sm text-white/60 leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <Avatar name={name} index={(props.startIndex || 0) + i} />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white text-sm">{name}</div>
                    <div className="leading-5 opacity-50 tracking-tight text-white text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

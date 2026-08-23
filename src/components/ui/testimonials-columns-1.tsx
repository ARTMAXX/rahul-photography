"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "motion/react";

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
  const maxScrollRef = useRef(0);
  const y = useMotionValue(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  // Measure content vs container height to know the scrollable range
  useEffect(() => {
    const measure = () => {
      if (contentRef.current && columnRef.current) {
        maxScrollRef.current = Math.max(
          0,
          contentRef.current.scrollHeight - columnRef.current.clientHeight
        );
      }
    };
    measure();
    const t = setTimeout(measure, 200);
    const ro =
      typeof ResizeObserver !== "undefined" &&
      contentRef.current &&
      columnRef.current
        ? new ResizeObserver(measure)
        : null;
    if (ro && contentRef.current && columnRef.current) {
      ro.observe(contentRef.current);
      ro.observe(columnRef.current);
    }
    return () => {
      clearTimeout(t);
      ro?.disconnect();
    };
  }, [props.testimonials]);

  // Gentle auto-scroll to the end — NO duplicated content, pauses on hover
  useEffect(() => {
    const speed = 40 / (props.duration || 10);
    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

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

      // Clamp: content stops cleanly at the end (no seam jump, no repeats)
      const maxScroll = maxScrollRef.current;
      if (current <= -maxScroll) current = -maxScroll;
      else if (current > 0) current = 0;

      y.set(current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isHovered, props.duration, y]);

  return (
    <div
      ref={columnRef}
      className={`h-full max-h-[740px] overflow-hidden ${props.className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        velocityRef.current = 0;
      }}
    >
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="flex flex-col items-center gap-6 pb-6"
      >
        {props.testimonials.map((testimonial, i) => (
          <div
            key={testimonial.name}
            className="p-8 rounded-3xl border border-white/[0.08] bg-black/25 backdrop-blur-md max-w-xs w-full hover:bg-black/40 hover:border-white/[0.14] transition-colors duration-300"
          >
            <div className="text-sm text-white/80 leading-relaxed">
              {testimonial.text}
            </div>
            <div className="flex items-center gap-3 mt-5">
              <Avatar name={testimonial.name} index={(props.startIndex || 0) + i} />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5 text-white text-sm">
                  {testimonial.name}
                </div>
                <div className="leading-5 opacity-70 tracking-tight text-white text-xs">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
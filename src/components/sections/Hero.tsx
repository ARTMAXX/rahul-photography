"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Set initial state of video wrapper: centered card aspect ratio
    gsap.set(videoWrapperRef.current, {
      width: "35vw",
      height: "22vh",
      borderRadius: "12px",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=80%",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // Expand video wrapper from center card to full screen
    tl.to(videoWrapperRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      ease: "none",
      duration: 1,
    }, 0);

    // Fade out plus marks near the end of the expand animation
    tl.to(".plus-mark", {
      opacity: 0,
      duration: 0.3,
      ease: "none",
    }, 0.7);

    // Slide text outward horizontally and fade out
    tl.to(leftTextRef.current, {
      x: "-25vw",
      opacity: 0,
      ease: "none",
      duration: 0.8,
    }, 0);

    tl.to(rightTextRef.current, {
      x: "25vw",
      opacity: 0,
      ease: "none",
      duration: 0.8,
    }, 0);

    // Fade in center subtext over the video
    tl.fromTo(subTextRef.current, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      ease: "none",
      duration: 0.5,
    }, 0.65);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero-section" className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-[#8c1c13] to-[#0a0a0a] opacity-80 mix-blend-screen blur-[100px]" />

      {/* Top Left Text */}
      <div className="absolute top-24 left-8 md:top-32 md:left-12 z-20 text-white max-w-[280px] mix-blend-difference">
        <p className="text-xs md:text-sm font-sans tracking-wide leading-relaxed">
          Creating high-impact <span className="italic">visual identities</span>, <br />
          that connect brands with their audience.
        </p>
      </div>

      {/* Massive Text (Bottom) */}
      <div className="absolute bottom-16 md:bottom-12 left-0 w-full z-10 flex justify-center items-baseline gap-4 md:gap-8 mix-blend-difference px-4 md:px-8 overflow-hidden select-none whitespace-nowrap">
        <span ref={leftTextRef} className="text-[14vw] md:text-[16vw] font-serif leading-[0.8] tracking-tighter text-[#F4EFE7]">
          Rahul
        </span>
        <span ref={rightTextRef} className="text-[14vw] md:text-[16vw] font-serif italic leading-[0.8] tracking-tighter text-neutral-300">
          Chanda
        </span>
      </div>

      {/* Bottom Nav / Lines */}
      <div className="absolute bottom-0 w-full z-20 flex justify-between items-center px-4 md:px-8 pb-4 md:pb-6 border-b border-white/20 mix-blend-difference text-white">
        <span className="text-[10px] md:text-xs font-sans tracking-widest uppercase">→ V3.0</span>
        <div className="flex gap-2 md:gap-4 text-[8px] md:text-[10px] font-sans tracking-widest uppercase">
          <a href="https://www.instagram.com/rahul_chanda_photography/" target="_blank" className="hover:opacity-70 transition-opacity">INSTAGRAM</a> /
          <a href="mailto:rahulchandaphotography@gmail.com" className="hover:opacity-70 transition-opacity">EMAIL</a> /
          <a href="tel:+917078939475" className="hover:opacity-70 transition-opacity">PHONE</a>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-sans tracking-widest uppercase">
          <a href="#archive" className="hover:opacity-70 transition-opacity">WORK</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">INFO</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
        </div>
      </div>
      <div className="absolute bottom-10 md:bottom-12 w-full h-px bg-white/20 z-20 mix-blend-difference" />

      {/* Centered Expanding Video Wrapper */}
      <div
        ref={videoWrapperRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-black overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
          src="/main hero shots/hero-video.mp4"
        />

        {/* 4 Corner Plus Marks */}
        <span className="plus-mark absolute top-4 left-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute top-4 right-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute bottom-4 left-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute bottom-4 right-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>

        <div ref={subTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <h2 className="text-3xl md:text-6xl font-serif italic text-white mix-blend-difference drop-shadow-2xl text-center">
            Basically, I make images.
          </h2>
        </div>
      </div>
    </section>
  );
}

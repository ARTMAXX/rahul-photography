"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BreathingText } from "@/components/ui/breathing-text";
import LazyVideo from "@/components/ui/LazyVideo";
import { useIsMobile } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  // SSR-safe: server + first paint assume mobile (lightest markup); the
  // matchMedia listener corrects desktop after hydration.
  const isMobile = useIsMobile();

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    // Set initial state of video wrapper: centered card
    gsap.set(videoWrapperRef.current, {
      width: isMobile ? "75vw" : "35vw",
      height: isMobile ? "45vh" : "22vh",
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

    // Expand wrapper from center card to full screen
    tl.to(videoWrapperRef.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      ease: "none",
      duration: 1,
    }, 0);

    // Fade out plus marks
    tl.to(".plus-mark", {
      opacity: 0,
      duration: 0.3,
      ease: "none",
    }, 0.7);

    // Slide text outward and fade out
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

    // Fade in center subtext
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
    <section ref={containerRef} id="hero-section" className="relative z-[1] h-screen 
w-full overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-[#8c1c13] to-[#0a0a0a] opacity-80 mix-blend-screen blur-[100px]" />

      {/* Top Left Text */}
      <div className="absolute top-24 left-8 md:top-32 md:left-12 z-20 text-white max-w-[280px] mix-blend-difference">
        <p className="text-xs md:text-sm font-sans tracking-wide leading-relaxed">
          Dehradun-based commercial product photographer, <br />
          making products look <span className="italic text-[#e83b2c]">worth choosing</span> for brands worldwide.
        </p>
      </div>

      {/* Vertical scroll cue — desktop only */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 mix-blend-difference">
        <span className="text-[9px] font-sans tracking-[0.35em] uppercase text-white/60 [writing-mode:vertical-rl]">
          Scroll to explore
        </span>
        <span className="w-px h-24 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* SEO: Semantic H1 — visually hidden for screen readers & crawlers */}
      <h1 className="sr-only">
        Rahul Chanda — Commercial & Product Photographer in Dehradun, India
      </h1>

      {/* Massive Text (Bottom) — decorative visual name reveal */}
      <div className="absolute bottom-24 md:bottom-20 left-0 w-full z-10 flex justify-center items-baseline gap-2 md:gap-4 mix-blend-difference px-4 md:px-8 select-none whitespace-nowrap" aria-hidden="true">
        <strong ref={leftTextRef} className="text-[12vw] md:text-[13vw] font-serif leading-[0.8] tracking-tighter text-[#F4EFE7] inline-flex">
          {isMobile ? (
            <span>Rahul</span>
          ) : (
            <BreathingText
              label="Rahul"
              scaleRange={[1, 1.12]}
              opacityRange={[0.75, 1]}
              duration={2.5}
              staggerDuration={0.12}
              staggerFrom="first"
              repeatDelay={0.3}
            />
          )}
        </strong>
        <strong ref={rightTextRef} className="text-[12vw] md:text-[13vw] font-serif italic leading-[0.8] tracking-tighter text-neutral-300 inline-flex">
          {isMobile ? (
            <span>Chanda</span>
          ) : (
            <BreathingText
              label="Chanda"
              scaleRange={[1, 1.12]}
              opacityRange={[0.75, 1]}
              duration={2.5}
              staggerDuration={0.1}
              staggerFrom="center"
              repeatDelay={0.3}
            />
          )}
        </strong>
      </div>

      {/* Bottom Nav / Lines */}
      <div className="absolute bottom-0 w-full z-20 flex justify-between items-end px-4 md:px-8 pb-4 md:pb-6 border-b border-white/20 mix-blend-difference text-white">
        <span className="text-[11px] md:text-xs font-sans tracking-widest uppercase pb-1">Dehradun, India</span>
        <div className="flex items-center gap-1 md:gap-4 text-[11px] md:text-[11px] font-sans tracking-widest uppercase">
          <a href="https://www.instagram.com/rahul_chanda_photography/" target="_blank" className="py-2 px-2 -mx-2 min-h-[44px] flex items-center hover:opacity-70 transition-opacity">INSTAGRAM</a>
          <span className="text-white/30">/</span>
          <a href="mailto:rahulchandaphotography@gmail.com" className="py-2 px-2 -mx-2 min-h-[44px] flex items-center hover:opacity-70 transition-opacity">EMAIL</a>
          <span className="text-white/30">/</span>
          <a href="tel:+917078939475" className="py-2 px-2 -mx-2 min-h-[44px] flex items-center hover:opacity-70 transition-opacity">PHONE</a>
        </div>
        <div className="hidden md:flex gap-6 text-[11px] font-sans tracking-widest uppercase">
          <a href="#design-in-motion" className="py-2 hover:opacity-70 transition-opacity">WORK</a>
          <a href="/dehradun" className="py-2 hover:opacity-70 transition-opacity">DEHRADUN</a>
          <a href="/blog" className="py-2 hover:opacity-70 transition-opacity">BLOG</a>
          <a href="#about" className="py-2 hover:opacity-70 transition-opacity">INFO</a>
          <a href="#contact" className="py-2 hover:opacity-70 transition-opacity">CONTACT</a>
        </div>
      </div>
      <div className="absolute bottom-10 md:bottom-12 w-full h-px bg-white/20 z-20 mix-blend-difference" />

      {/* Centered Expanding Video/Image Wrapper */}
      <div
        ref={videoWrapperRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Only ONE media: optimized image on mobile, IO-gated video on desktop */}
        {isMobile ? (
          <Image
            src="/opt/hero-mobile.webp"
            alt="Dramatic luxury watch product photograph with metallic studio lighting by Rahul Chanda — premium commercial product photographer in Dehradun, India"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover opacity-80"
          />
        ) : (
          <LazyVideo
            src="/opt/hero-shots/hero-video.mp4"
            poster="/opt/hero-shots/hero-video-poster.webp"
            className="w-full h-full object-cover opacity-70"
            preload="auto"
            alt="Cinematic showreel of Rahul Chanda's commercial product photography - luxury watches, food & beverage, footwear, and advertising campaigns"
          />
        )}

        {/* 4 Corner Plus Marks */}
        <span className="plus-mark absolute top-4 left-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute top-4 right-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute bottom-4 left-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>
        <span className="plus-mark absolute bottom-4 right-4 text-white text-lg font-light select-none z-40 pointer-events-none">+</span>

        <div ref={subTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <p className="text-3xl md:text-6xl font-serif italic text-white mix-blend-difference drop-shadow-2xl text-center">
            Basically, I make images.
          </p>
        </div>
      </div>
    </section>
  );
}

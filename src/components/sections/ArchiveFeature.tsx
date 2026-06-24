"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ARCHIVE } from "@/data/archive";

gsap.registerPlugin(ScrollTrigger);

const projects = ARCHIVE.map((p) => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  year: p.year,
  client: p.client,
  category: p.category,
  description: p.desc,
  image: p.img,
  folder: p.folder,
}));

export default function ArchiveFeature() {
  const section = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section heading — large editorial text ──
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 80, opacity: 0, filter: "blur(12px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1.2,
            },
          }
        );
      }

      // ── Carousel — horizontal scroll animation ──
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll<HTMLElement>(".carousel-card");
        
        // Stagger cards in from right
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            x: 100, 
            rotateY: 15,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            stagger: 0.08,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: carouselRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      // ── Bottom CTA ──
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              end: "top 60%",
              scrub: 0.8,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // ── Drag to scroll ──
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={section}
      id="archive"
      className="relative w-full bg-[#070707] overflow-hidden"
    >
      {/* ── Ambient gradient orbs ── */}
      <div
        className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,168,75,0.3) 0%, transparent 70%)",
        }}
      />

      {/* ── Header — large editorial text like trionn "DESIGN IN MOTION" ── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 md:pt-44 pb-8 md:pb-12">
        <div ref={headingRef}>
          {/* Top label */}
          <p
            className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium mb-6"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Photography
          </p>
          
          {/* Large editorial heading */}
          <h2 className="text-[clamp(3rem,10vw,9rem)] font-serif leading-[0.85] tracking-[-0.04em] text-white/90 mb-4">
            The Complete
            <br />
            <span className="italic text-white/60">Collection</span>
          </h2>
          
          {/* Subtext */}
          <p
            className="text-sm text-white/30 max-w-[380px] leading-relaxed mt-8"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Eight projects spanning product, food, footwear, and campaign —
            each frame a negotiation between light and subject.
          </p>
        </div>
      </div>

      {/* ── Horizontal Carousel — trionn "DESIGN IN MOTION" style ── */}
      <div className="w-full py-12 md:py-20">
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-6 md:px-16 pb-8 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((p, idx) => (
            <Link
              key={p.id}
              href={`/archive/${p.slug}`}
              className="carousel-card group flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px]"
              data-cursor="pointer"
              style={{
                perspective: "1000px",
              }}
            >
              <div
                className="relative overflow-hidden rounded-2xl bg-[#111] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-2 group-hover:ring-white/20"
                style={{
                  transform: `rotateY(${idx % 2 === 0 ? -2 : 2}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 420px"
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    quality={85}
                    priority={idx < 4}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-full ring-1 ring-white/10">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg md:text-xl font-serif text-white/90 leading-tight mb-1 group-hover:text-white transition-colors duration-500">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-white/40">
                    <span>{p.client}</span>
                    <span className="text-white/20">·</span>
                    <span>{p.year}</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA — trionn "VIEW ALL PROJECTS" style ── */}
      <div
        ref={ctaRef}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Left — description */}
          <p
            className="text-sm text-white/30 max-w-[340px] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            A curated selection of editorial and commercial photography — 
            each project a unique visual narrative.
          </p>

          {/* Right — CTA link */}
          <Link
            href="/archive"
            className="group inline-flex items-center gap-4"
            data-cursor="pointer"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/40 group-hover:text-white transition-colors duration-500">
              View All Projects
            </span>
            <span className="w-12 h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-500" />
            <span className="text-white/30 group-hover:text-white/80 transition-colors duration-500 text-sm">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

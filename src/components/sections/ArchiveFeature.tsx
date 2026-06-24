"use client";

import { useEffect, useRef } from "react";
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
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading animation — "DESIGN IN MOTION" style ──
      if (headingRef.current) {
        const titleLeft = headingRef.current.querySelector(".title-left");
        const titleRight = headingRef.current.querySelector(".title-right");
        const subtitle = headingRef.current.querySelector(".subtitle");

        if (titleLeft && titleRight) {
          gsap.fromTo(
            titleLeft,
            { x: -100, opacity: 0, filter: "blur(8px)" },
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );

          gsap.fromTo(
            titleRight,
            { x: 100, opacity: 0, filter: "blur(8px)" },
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }

        if (subtitle) {
          gsap.fromTo(
            subtitle,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
              },
            }
          );
        }
      }

      // ── 3D Carousel — curved rotating cards ──
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll<HTMLElement>(".carousel-card");
        const totalCards = cards.length;
        const angleStep = 360 / totalCards;
        const radius = 400; // radius of the carousel circle

        // Set initial positions
        cards.forEach((card, i) => {
          const angle = i * angleStep;
          gsap.set(card, {
            rotationY: angle,
            z: radius,
            transformOrigin: "center center",
          });
        });

        // Animate carousel rotation on scroll
        gsap.to(carouselRef.current, {
          rotationY: -360,
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            end: "bottom -20%",
            scrub: 2,
          },
        });
      }

      // ── Bottom CTA ──
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="archive"
      className="relative w-full bg-[#070707] overflow-hidden"
    >
      {/* ── Ambient gradient ── */}
      <div
        className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
      />

      {/* ── Header — DESIGN IN MOTION style ── */}
      <div
        ref={headingRef}
        className="relative w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 md:pt-44 pb-16 md:pb-24"
      >
        {/* Large split title */}
        <div className="relative">
          <h2 className="title-left text-[clamp(3rem,12vw,10rem)] font-serif leading-[0.85] tracking-[-0.04em] text-white/90">
            Photography
          </h2>
          <h2 className="title-right text-[clamp(3rem,12vw,10rem)] font-serif leading-[0.85] tracking-[-0.04em] text-white/40 text-right mt-2">
            in Motion
          </h2>
        </div>

        {/* Centered subtitle */}
        <div className="subtitle flex justify-center mt-8">
          <p
            className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium text-center max-w-[200px] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Exploring ideas through
            <br />
            daily photography practice.
          </p>
        </div>
      </div>

      {/* ── 3D Carousel — curved rotating cards ── */}
      <div className="w-full py-16 md:py-24 overflow-hidden" style={{ perspective: "1200px" }}>
        <div
          ref={carouselRef}
          className="relative w-full h-[500px] md:h-[600px]"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-5deg)",
          }}
        >
          {projects.map((p, idx) => {
            const totalCards = projects.length;
            const angleStep = 360 / totalCards;
            const angle = idx * angleStep;
            const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 400;

            return (
              <Link
                key={p.id}
                href={`/archive/${p.slug}`}
                className="carousel-card absolute top-1/2 left-1/2 w-[200px] md:w-[280px] lg:w-[320px]"
                data-cursor="pointer"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#111] ring-1 ring-white/10 transition-all duration-500 hover:ring-white/30 hover:scale-105">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="320px"
                      className="object-cover"
                      quality={80}
                      priority={idx < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm md:text-base font-serif text-white/90 leading-tight mb-1">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-white/40">
                      <span>{p.category}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Bottom CTA — trionn style ── */}
      <div
        ref={ctaRef}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p
            className="text-sm text-white/30 max-w-[340px] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Concepts, explorations, and interface experiments shared openly as part of our creative process.
          </p>

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

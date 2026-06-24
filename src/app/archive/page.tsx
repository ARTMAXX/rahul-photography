"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ARCHIVE, type Project } from "@/data/archive";

gsap.registerPlugin(ScrollTrigger);

const aspectRatios = [
  "2.8/1",
  "2.4/1",
  "3/1",
  "2.2/1",
  "3.2/1",
  "2.6/1",
  "2/1",
  "2.5/1",
];

export default function ArchivePage() {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading ──
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      }

      // ── Each project row ──
      if (listRef.current) {
        const rows = listRef.current.querySelectorAll<HTMLElement>(".archive-row");
        rows.forEach((row) => {
          const img = row.querySelector(".ar-img");
          const info = row.querySelector(".ar-info");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 40%",
              scrub: 1.2,
            },
          });

          tl.fromTo(
            img,
            { scale: 1.12, filter: "blur(6px)" },
            { scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
          );

          tl.fromTo(
            info,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
            "-=0.5"
          );
        });
      }

      // ── Progress bar ──
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
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
    }, container);

    return () => ctx.revert();
  }, []);

  // Track active section for index dots
  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".archive-row");
    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(rows).indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    rows.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={container}
      className="relative w-full min-h-screen bg-[#070707] text-[#f0f0f0]"
    >
      {/* ── Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-white/[0.03] z-50">
        <div
          ref={progressRef}
          className="h-full w-full bg-white/10 origin-left scale-x-0"
        />
      </div>

      {/* ── Back Nav ── */}
      <div className="fixed top-6 left-6 md:left-10 z-40 mix-blend-difference">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-all duration-500 text-[11px] uppercase tracking-[0.2em]"
          data-cursor="pointer"
        >
          <span className="transition-transform duration-300 hover:-translate-x-0.5 inline-block">
            ←
          </span>
          <span>Home</span>
        </Link>
      </div>

      {/* ── Floating Index (desktop) ── */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5">
        {ARCHIVE.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const rows = document.querySelectorAll<HTMLElement>(".archive-row");
              rows[i]?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-[3px] rounded-full transition-all duration-700 ${
              i === activeIdx
                ? "h-6 bg-white/40"
                : "h-[3px] bg-white/10 hover:bg-white/25"
            }`}
            aria-label={`Project ${i + 1}`}
            data-cursor="pointer"
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] flex items-center px-6 md:px-16 pt-28 pb-20">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 35%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        <div ref={headingRef} className="max-w-[1400px] mx-auto w-full">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/15 mb-6">
            Portfolio — 2019 / 2026
          </p>

          <h1 className="text-[clamp(3rem,10vw,7rem)] font-serif leading-[0.82] tracking-[-0.04em] text-white/90 max-w-[8ch] mb-6">
            The Complete
            <br />
            Collection
          </h1>

          <p
            className="text-sm text-white/25 max-w-[460px] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Eight projects spanning product, beverage, food, footwear, and
            campaign work. Each chapter represents a different conversation
            between light, texture, and composition.
          </p>

          {/* Scroll hint */}
          <div className="mt-12 flex items-center gap-3">
            <span className="block w-6 h-px bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/15">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECTS — editorial rows
          ══════════════════════════════════════════ */}
      <div ref={listRef}>
        {ARCHIVE.map((project, idx) => (
          <Link
            key={project.id}
            href={`/archive/${project.slug}`}
            className="archive-row group block w-full border-t border-white/[0.03] last:border-b last:border-white/[0.03]"
            data-cursor="pointer"
          >
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-8 md:py-14">
              {/* Image — varied aspect ratios, no overlay */}
              <div
                className="ar-img relative w-full overflow-hidden bg-[#111] mb-5"
                style={{ aspectRatio: aspectRatios[idx % aspectRatios.length] }}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    quality={92}
                    priority={idx < 2}
                  />
                )}
              </div>

              {/* Info row */}
              <div className="ar-info flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div className="flex items-baseline gap-3 md:gap-5">
                  <span className="text-[10px] font-mono text-white/15 tabular-nums select-none">
                    {project.id}
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-white/70 leading-tight group-hover:text-white/90 transition-colors duration-500">
                    {project.title}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/15 border border-white/[0.06] px-2 py-0.5 hidden sm:inline-block">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-white/20">
                  <span className="hidden sm:inline text-white/30">
                    {project.client}
                  </span>
                  <span className="hidden sm:inline text-white/10">·</span>
                  <span>{project.year}</span>
                  <span className="text-white/10 ml-auto md:ml-6 group-hover:text-white/50 transition-colors duration-500 text-sm">
                    View →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className="relative w-full min-h-[50vh] flex items-center justify-center px-6 md:px-16 py-24"
      >
        <div className="text-center max-w-[560px] mx-auto">
          <div className="w-10 h-px bg-white/10 mx-auto mb-10" />

          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-serif text-white/80 leading-[0.95] mb-6">
            Ready to create
            <br />
            your next chapter?
          </h2>

          <p
            className="text-sm text-white/20 mb-10 max-w-[340px] mx-auto leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            One conversation can change the direction of your brand&apos;s
            visual identity.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-4"
            data-cursor="pointer"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/30 group-hover:text-white transition-colors duration-500">
              Start a Project
            </span>
            <span className="w-8 h-px bg-white/10 group-hover:bg-white/40 transition-colors duration-500" />
            <span className="text-white/20 group-hover:text-white/60 transition-colors duration-500 text-sm">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section heading ──
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 60, opacity: 0 },
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
        const rows = listRef.current.querySelectorAll<HTMLElement>(".project-row");
        rows.forEach((row) => {
          const img = row.querySelector(".pr-img");
          const info = row.querySelector(".pr-info");

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
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.6"
          );
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="archive"
      className="relative w-full bg-[#070707]"
    >
      {/* ── Intro ── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 md:pt-44 pb-8 md:pb-12">
        <div ref={headingRef}>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-serif leading-[0.92] tracking-[-0.03em] text-white/90 mb-3">
            The Complete Collection
          </h2>
          <p
            className="text-sm text-white/25 max-w-[460px] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Eight projects spanning product, food, footwear, and campaign —
            each frame a negotiation between light and subject.
          </p>
        </div>
      </div>

      {/* ── Projects: editorial image row + info below ── */}
      <div ref={listRef}>
        {projects.map((p, idx) => (
          <Link
            key={p.id}
            href={`/archive/${p.slug}`}
            className="project-row group block w-full border-t border-white/[0.04] last:border-b last:border-white/[0.04]"
            data-cursor="pointer"
          >
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-6 md:py-10">
              {/* Image — no overlays, let it breathe */}
              <div className="pr-img relative w-full aspect-[2.8/1] md:aspect-[3.2/1] overflow-hidden bg-[#111] mb-4 md:mb-5">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  quality={92}
                  priority={idx < 2}
                />
              </div>

              {/* Info row beneath */}
              <div className="pr-info flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div className="flex items-baseline gap-3 md:gap-5">
                  <span className="text-[10px] font-mono text-white/20 tabular-nums select-none">
                    {p.id}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif text-white/80 leading-tight group-hover:text-white transition-colors duration-500">
                    {p.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/20 border border-white/[0.06] px-2 py-0.5 hidden sm:inline-block">
                    {p.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-white/20">
                  <span className="hidden sm:inline">{p.client}</span>
                  <span className="hidden sm:inline text-white/10">·</span>
                  <span>{p.year}</span>
                  <span className="text-white/10 ml-auto md:ml-4 group-hover:text-white/60 transition-colors duration-500">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div
        ref={ctaRef}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-32 text-center"
      >
        <div className="w-10 h-px bg-white/10 mx-auto mb-10" />

        <h3 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-serif text-white/80 leading-[0.95] mb-6">
          Ready to create
          <br />
          your next chapter?
        </h3>

        <p
          className="text-sm text-white/20 mb-10 max-w-[340px] mx-auto"
          style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
        >
          One conversation can change the direction of your brand&apos;s visual
          identity.
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
  );
}

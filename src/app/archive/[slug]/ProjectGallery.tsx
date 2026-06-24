"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/data/archive";

gsap.registerPlugin(ScrollTrigger);

interface MediaItem {
  src: string;
  type: "image" | "video";
}

export default function ProjectGallery({
  project,
  media,
  projectVideo,
}: {
  project: Project;
  media: MediaItem[];
  projectVideo: { src: string; type: "video" } | null;
}) {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Close lightbox with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // ── GSAP animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero letter-by-letter
      if (headingRef.current) {
        const letters = headingRef.current.querySelectorAll(".h-char");
        gsap.fromTo(
          letters,
          { y: 80, opacity: 0, rotateX: 35 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.8,
            stagger: 0.035,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      // Grid items stagger
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".g-item");
        items.forEach((item, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              end: "top 40%",
              scrub: 1.2,
            },
          });

          tl.fromTo(
            item.querySelector(".g-media"),
            { scale: 1.15, filter: "blur(8px)" },
            { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
          );
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  // ── Video refs for autoplay management ──
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  return (
    <>
      <main
        ref={container}
        className="relative w-full min-h-screen bg-[#070707] text-[#f0f0f0]"
      >
        {/* ─── Back Nav ─── */}
        <div className="fixed top-8 left-6 md:left-10 z-50 mix-blend-difference">
          <Link
            href="/archive"
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-500 text-xs uppercase tracking-[0.25em]"
            data-cursor="pointer"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1 inline-block">
              ←
            </span>
            <span>Archive</span>
          </Link>
        </div>

        {/* Count */}
        <div className="fixed top-8 right-6 md:right-10 z-50 text-[10px] uppercase tracking-[0.25em] text-white/20">
          <span className="text-[#c8a84b]/60">{media.length}</span>
          <span className="mx-1.5">/</span>
          <span>media</span>
        </div>

        {/* ─── Hero ─── */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] flex items-center px-6 md:px-16 pt-28 pb-16"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(200,168,75,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-[1400px] mx-auto w-full">
            {/* Number */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[clamp(4rem,12vw,10rem)] font-serif italic text-[#c8a84b]/20 leading-none select-none">
                {project.id}
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-[clamp(2.5rem,7vw,6rem)] font-serif leading-[0.85] tracking-[-0.04em] text-white mb-6 overflow-hidden max-w-[10ch]"
            >
              {project.title.split("").map((char, i) => (
                <span
                  key={i}
                  className="h-char inline-block"
                  style={{ opacity: 0 }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-white/30">
              <span className="text-white/40">{project.client}</span>
              <span className="w-px h-3 bg-white/20" />
              <span>{project.year}</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="border border-white/10 text-white/30 px-2 py-0.5">
                {project.category}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-[#c8a84b]/70">{media.length} media</span>
            </div>

            {/* Description */}
            <p
              className="text-sm md:text-base text-white/40 leading-relaxed max-w-[520px] mt-6"
              style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
            >
              {project.desc}
            </p>
          </div>
        </section>

        {/* ─── Gallery Grid ─── */}
        <section className="relative pb-32 px-0 md:px-6">
          <div ref={gridRef} className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {media.map((item, i) => (
                <button
                  key={item.src}
                  className="g-item relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-[#0a0a0a] group cursor-pointer"
                  onClick={() => setLightbox(item)}
                  data-cursor="pointer"
                >
                  <div className="g-media w-full h-full">
                    {item.type === "video" ? (
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current.set(item.src, el);
                        }}
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={`${project.title} — ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                      />
                    )}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#070707]/0 group-hover:bg-[#070707]/30 transition-all duration-500" />

                  {/* Play indicator for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white/80 text-lg ml-0.5">▶</span>
                      </div>
                    </div>
                  )}

                  {/* Index */}
                  <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="relative py-24 md:py-32 text-center px-6 border-t border-white/5">
          <div className="w-12 h-px bg-[#c8a84b]/30 mx-auto mb-8" />
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-serif text-white leading-[0.9] mb-6">
            Ready to create
            <br />
            your next chapter?
          </h2>
          <p
            className="text-sm text-white/30 mb-10 max-w-[360px] mx-auto"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            One conversation can change the direction of your brand&apos;s
            visual identity.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-5"
            data-cursor="pointer"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/50 group-hover:text-white transition-colors duration-500">
              Start a Project
            </span>
            <span className="w-10 h-px bg-white/20 group-hover:bg-[#c8a84b] transition-colors duration-500" />
            <span className="text-white/30 group-hover:text-[#c8a84b] transition-colors duration-500 text-lg font-light transition-transform duration-500 group-hover:translate-x-1 inline-block">
              →
            </span>
          </Link>
        </section>
      </main>

      {/* ══════════════════════════════════════════
          LIGHTBOX — full-screen media viewer
          ══════════════════════════════════════════ */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#070707]/98 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-8 right-8 z-10 text-white/50 hover:text-white transition-colors duration-300 text-xs uppercase tracking-[0.3em]"
            onClick={() => setLightbox(null)}
            data-cursor="pointer"
          >
            Close
          </button>

          {/* Prev / Next */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors duration-300 text-2xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = media.findIndex((m) => m.src === lightbox.src);
              if (idx > 0) setLightbox(media[idx - 1]);
            }}
            data-cursor="pointer"
          >
            ←
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors duration-300 text-2xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = media.findIndex((m) => m.src === lightbox.src);
              if (idx < media.length - 1) setLightbox(media[idx + 1]);
            }}
            data-cursor="pointer"
          >
            →
          </button>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30">
            <span className="text-[#c8a84b]/70">
              {String(media.findIndex((m) => m.src === lightbox.src) + 1).padStart(
                2,
                "0"
              )}
            </span>
            <span className="mx-2">/</span>
            <span>{String(media.length).padStart(2, "0")}</span>
          </div>

          {/* Media */}
          <div
            className="w-full h-full flex items-center justify-center p-16"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "video" ? (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full max-w-[90vw] max-h-[85vh]">
                <Image
                  src={lightbox.src}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="90vw"
                  quality={100}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

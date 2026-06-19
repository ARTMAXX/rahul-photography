"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TileScrollGrid.css";

gsap.registerPlugin(ScrollTrigger);

export interface TileAsset {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface TileRow {
  images: TileAsset[];
  speed: number;
}

export interface TileGridSection {
  id: string;
  rows: TileRow[];
  variant?: string;
}

interface TileScrollGridProps {
  sections: TileGridSection[];
}

/**
 * Completely new gallery system.
 *
 * - No rows
 * - No parallax drift
 * - No single-image panels
 *
 * This is now a cinematic masonry archive wall
 * with scroll-reveal depth and hover amplification.
 */

export default function TileScrollGrid({ sections }: TileScrollGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".archive-item");

      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  // Flatten ALL images across ALL sections
  const allImages: TileAsset[] = sections.flatMap((section) =>
    section.rows.flatMap((row) => row.images)
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-zinc-950 px-6 md:px-16 py-32"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight">
          The Archive
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        {allImages.map((img, index) => (
          <div
            key={index}
            className="archive-item break-inside-avoid overflow-hidden rounded-2xl group relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 rounded-2xl" />

            {/* Meta */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-xs tracking-widest text-zinc-300 mb-2">
                {img.category}
              </p>
              <p className="text-lg text-white font-medium">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
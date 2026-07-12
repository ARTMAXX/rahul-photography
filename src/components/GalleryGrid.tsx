"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  galleryItems,
  galleryCategories,
  type GalleryItem,
} from "@/data/gallery";

/* ────────────────────────────────────────────────────────────────────────
   Full "View All" gallery — masonry wall (CSS columns) + filter chips +
   full-screen lightbox with keyboard navigation. Dark editorial theme to
   match the site (Playfair headings, Outfit body, gold accent).
   ──────────────────────────────────────────────────────────────────────── */

const GOLD = "rgba(200, 168, 75, 1)";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter]
  );

  // Reset any open lightbox when the filter changes (indices no longer align).
  useEffect(() => {
    setActiveIndex(null);
  }, [filter]);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );

  // Keyboard nav + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, close, next, prev]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <section className="relative min-h-screen w-full bg-[#070707] text-[#f0f0f0]">
      {/* ── Header ── */}
      <div className="px-6 pt-32 pb-10 md:px-12 md:pt-40 md:pb-14">
        <Link
          href="/"
          data-cursor="pointer"
          className="mb-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
        >
          <span aria-hidden>&larr;</span> Back to home
        </Link>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-[11px] uppercase tracking-[0.3em]"
              style={{ color: GOLD }}
            >
              The Archive
            </p>
            <h1
              className="leading-[0.95]"
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 700,
                fontSize: "clamp(40px, 7vw, 104px)",
                letterSpacing: "-0.02em",
              }}
            >
              Every Frame
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            The complete collection — {galleryItems.length} selected stills and
            motion pieces across food, beverage, footwear and product work.
          </p>
        </div>

        {/* ── Filter chips ── */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {galleryCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                data-cursor="pointer"
                onClick={() => setFilter(cat)}
                className="rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  borderColor: isActive ? GOLD : "rgba(255,255,255,0.16)",
                  backgroundColor: isActive ? GOLD : "transparent",
                  color: isActive ? "#070707" : "rgba(255,255,255,0.65)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Masonry wall ── */}
      <div className="px-4 pb-24 md:px-10">
        <div className="gallery-masonry">
          {items.map((item, index) => (
            <GalleryTile key={item.id} item={item} onOpen={() => open(index)} />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <Lightbox
          item={active}
          index={activeIndex!}
          total={items.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}

      {/* Column counts that actually respond to viewport width. */}
      <style jsx>{`
        .gallery-masonry {
          column-count: 2;
          column-gap: 16px;
        }
        @media (min-width: 768px) {
          .gallery-masonry {
            column-count: 3;
          }
        }
        @media (min-width: 1280px) {
          .gallery-masonry {
            column-count: 4;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Individual masonry tile ─────────────────────────────────────────────── */
function GalleryTile({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button
      data-cursor="pointer"
      onClick={onOpen}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative mb-4 block w-full overflow-hidden rounded-sm bg-white/[0.03] text-left"
      style={{ breakInside: "avoid" }}
    >
      {item.type === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full transform-gpu transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full transform-gpu transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}

      {/* video badge */}
      {item.type === "video" && (
        <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          <span
            aria-hidden
            className="inline-block h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-white"
          />
          Motion
        </span>
      )}

      {/* hover caption */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-[11px] uppercase tracking-[0.12em] text-white/90">
          {item.title}
        </span>
      </span>
    </button>
  );
}

/* ── Full-screen lightbox ────────────────────────────────────────────────── */
function Lightbox({
  item,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* close */}
      <button
        data-cursor="pointer"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition-colors duration-300 hover:border-white/60 hover:text-white"
      >
        &times;
      </button>

      {/* counter + title */}
      <div className="pointer-events-none absolute left-5 top-6 z-10 text-[11px] uppercase tracking-[0.2em] text-white/60">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        <span className="mx-2 text-white/25">—</span>
        <span className="text-white/85">{item.title}</span>
      </div>

      {/* prev */}
      <button
        data-cursor="pointer"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/60 hover:text-white md:left-6"
      >
        &larr;
      </button>

      {/* next */}
      <button
        data-cursor="pointer"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/60 hover:text-white md:right-6"
      >
        &rarr;
      </button>

      {/* media — stop propagation so clicking the media doesn't close */}
      <div
        className="flex max-h-[82vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[82vh] max-w-[90vw] object-contain"
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            loop
            playsInline
            className="max-h-[82vh] max-w-[90vw] object-contain"
          />
        )}
      </div>
    </div>
  );
}

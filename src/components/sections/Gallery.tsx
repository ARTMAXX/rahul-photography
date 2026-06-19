"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   Portfolio Archive — Codrops TileScroll
   Markup mirrors codrops Demo 1: a rotated wall,
   a columns wall, an oneline band, a small band,
   and a fixed wall. Motion is GSAP ScrollTrigger
   replicating Locomotive's data-scroll-speed/
   data-scroll-direction so there is no Lenis
   conflict (codrops ships Locomotive Scroll v3).
────────────────────────────────────────────── */

/* ── Curated image pool (real /best shots/ assets) ── */
const IMG = {
  product: [
    "/best shots/Product image/product-watch-luxury.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/Product image/product-serum.webp",
    "/best shots/Product image/product-energy-shot.webp",
    "/best shots/Product image/product-energy-design.webp",
  ],
  beverage: [
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/Beverage images/bev-toast.webp",
  ],
  food: [
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/Food photo/food-biriyani.webp",
    "/best shots/Food photo/indian-curry.png",
    "/best shots/Food photo/crispy-chicken.png",
    "/best shots/Food photo/kashmiri-mutton.png",
  ],
  footwear: [
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/ladies shoe/High-end-shoe.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    "/best shots/ladies shoe/shoe-ladies-slipon.webp",
  ],
};

const allSources: string[] = [
  ...IMG.product,
  ...IMG.beverage,
  ...IMG.food,
  ...IMG.footwear,
];

/* Helper: pull n images from a source list, wrapping safely. */
const take = (srcs: string[], n: number): string[] => {
  const out: string[] = [];
  for (let i = 0; i < n; i++) out.push(srcs[i % srcs.length]);
  return out;
};

/* ── Row/section configs. speed sign = direction (pos→right, neg→left) ──
   These mirror codrops' data-scroll-speed values per Demo 1. */
const ROTATED_ROWS = [
  { speed: 1, images: take([...IMG.product, ...IMG.footwear], 7) },
  { speed: -1, images: take([...IMG.food, ...IMG.beverage], 7) },
  { speed: 1.2, images: take([...IMG.footwear, ...IMG.product], 7) },
  { speed: -1.4, images: take([...IMG.beverage, ...IMG.food], 7) },
  { speed: 1, images: take([...IMG.product, ...IMG.footwear], 7) },
];

const COLUMNS_ROWS = [
  { speed: 1, images: take([...IMG.product, ...IMG.food], 4) },
  { speed: -1, images: take([...IMG.footwear, ...IMG.beverage], 4) },
  { speed: 1, images: take([...IMG.food, ...IMG.footwear], 4) },
  { speed: -1, images: take([...IMG.beverage, ...IMG.product], 4) },
];

const ONELINE_ROW = [
  { speed: 2, images: take(IMG.footwear, 4) },
  { speed: -2, images: take([...IMG.beverage, ...IMG.food], 4) },
];

const SMALL_ROW = [{ speed: 1, images: take(allSources, 10) }];

/* Fixed wall: per-tile fan effect (codrops Demo 3 style) */
const FIXED_ROWS = [
  { speed: 1, images: take([...IMG.product, ...IMG.footwear], 6) },
  { speed: -1, images: take([...IMG.food, ...IMG.beverage], 6) },
  { speed: 1, images: take([...IMG.footwear, ...IMG.product], 6) },
];
const FIXED_FAN = [3, 2, 1, -1, -2, -3];

interface LightboxData {
  src: string;
  index: number;
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<LightboxData | null>(null);

  /* ─── GSAP TileScroll parallax ───
     Each .tiles section is one ScrollTrigger "target" (mirrors
     data-scroll-target="#gridX"). Rows animate on x at ±(speed*K),
     so the sign controls direction exactly like data-scroll-speed. */
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const vpQuarter = window.innerWidth * 0.25;

      /* Travel distance is computed from the row's REAL overflow
         (content size − viewport), so a row streams across its full
         overscan — reproducing the Locomotive data-scroll-speed feel.
         The sign of `speed` sets direction (pos→right/down, neg→left/up),
         matching codrops' alternating +1 / −1 rows. */
      const drive = (
        el: HTMLElement,
        grid: HTMLElement,
        speed: number,
        dir: "horizontal" | "vertical"
      ) => {
        if (reduced || speed === 0) return;
        const isX = dir === "horizontal";
        const size = isX ? el.scrollWidth : el.scrollHeight;
        const vp = isX ? window.innerWidth : window.innerHeight;
        /* half the overflow = exactly the per-side overscan, so the row
           can slide its full reach without ever leaving a gap. */
        const half = Math.max((size - vp) / 2, vp * 0.25);
        const sign = speed > 0 ? 1 : -1;
        const from = isX ? { x: -half * sign } : { y: -half * sign };
        const to = isX ? { x: half * sign } : { y: half * sign };
        gsap.fromTo(el, from, {
          ...to,
          ease: "none",
          scrollTrigger: {
            trigger: grid,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      };

      section
        .querySelectorAll<HTMLElement>("[data-tiles-grid]")
        .forEach((grid) => {
          /* ── Rows: animate each .tiles__line (skip fanned rows) ── */
          grid
            .querySelectorAll<HTMLElement>(".tiles__line")
            .forEach((line) => {
              if (line.querySelector("[data-tile-speed]")) return; // fixed wall
              const speed = parseFloat(line.dataset.speed ?? "1");
              const dir = (line.dataset.direction ?? "horizontal") as
                | "horizontal"
                | "vertical";
              drive(line, grid, speed, dir);
            });

          /* ── Per-tile fan (fixed wall): each tile streams on its own,
               using its parent line's overflow so speeds fan out evenly. ── */
          grid
            .querySelectorAll<HTMLElement>("[data-tile-speed]")
            .forEach((tile) => {
              const s = parseFloat(tile.dataset.tileSpeed ?? "1");
              if (reduced || s === 0) return;
              const line = tile.parentElement as HTMLElement | null;
              /* normalize the fan (±3) so each tile takes a fraction of the
                 row's reach — positive tiles drift one way, negative the other. */
              const mag = Math.min(Math.abs(s) / 3, 1);
              const sign = s > 0 ? 1 : -1;
              const size = line ? line.scrollWidth : tile.scrollWidth;
              const half = Math.max((size - window.innerWidth) / 2, vpQuarter);
              const dist = half * mag * sign;
              gsap.fromTo(
                tile,
                { x: -dist },
                {
                  x: dist,
                  ease: "none",
                  scrollTrigger: {
                    trigger: grid,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                }
              );
            });
        });

      /* Recompute trigger positions once layout/images settle. */
      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      window.addEventListener("load", refresh);

      /* ── Heading reveal ── */
      const heading = section.querySelector(".gallery-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      }

      /* ── Breakout text drift (subtle) ── */
      section
        .querySelectorAll<HTMLElement>(".tiles-breakout")
        .forEach((el) => {
          if (reduced) return;
          gsap.fromTo(
            el,
            { x: el.classList.contains("tiles-breakout--big") ? -80 : 80 },
            {
              x: el.classList.contains("tiles-breakout--big") ? 80 : -80,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });

      /* Recompute on resize after images settle */
      const r = () => ScrollTrigger.refresh();
      window.addEventListener("resize", r);

      return () => {
        window.removeEventListener("resize", r);
        window.removeEventListener("load", refresh);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  /* ─── Lightbox keyboard nav ─── */
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const nextImage = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const i = (lb.index + 1) % allSources.length;
      return { src: allSources[i], index: i };
    });
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const i = (lb.index - 1 + allSources.length) % allSources.length;
      return { src: allSources[i], index: i };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  /* Map a tile src to a lightbox index once per render. */
  const indexOf = (src: string) => allSources.indexOf(src);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="tiles-gallery"
      aria-label="Portfolio Archive"
    >
      {/* ─── Section heading ─── */}
      <div className="gallery-heading">
        <span className="gallery-eyebrow">Portfolio Archive</span>
        <h2 className="gallery-title">Each frame, a new chapter.</h2>
        <p className="gallery-subtitle">
          A curated selection of commercial campaigns across product, food,
          beverage, and lifestyle — every image shot with precise intent and
          studio light.
        </p>
      </div>

      {/* ════════ 1 · Rotated wall (22.5°) ════════ */}
      <section
        className="tiles tiles--rotated"
        data-tiles-grid
        aria-label="Rotated showcase"
      >
        <div className="tiles__wrap">
          {ROTATED_ROWS.map((row, ri) => (
            <div
              key={ri}
              className="tiles__line"
              data-speed={row.speed}
              data-direction="horizontal"
            >
              {row.images.map((src, ii) => (
                <div
                  key={ii}
                  className="tiles__line-img"
                  style={{ backgroundImage: `url("${src}")` }}
                  onClick={() => setLightbox({ src, index: indexOf(src) })}
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <p className="tiles-breakout tiles-breakout--big" aria-hidden="true">
        frame by frame
      </p>

      {/* ════════ 2 · Columns wall (vertical parallax) ════════ */}
      <section
        className="tiles tiles--columns"
        data-tiles-grid
        aria-label="Columns showcase"
      >
        <div className="tiles__wrap">
          {COLUMNS_ROWS.map((row, ri) => (
            <div
              key={ri}
              className="tiles__line"
              data-speed={row.speed}
              data-direction="vertical"
            >
              {row.images.map((src, ii) => (
                <div
                  key={ii}
                  className="tiles__line-img"
                  style={{ backgroundImage: `url("${src}")` }}
                  onClick={() => setLightbox({ src, index: indexOf(src) })}
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ════════ 3 · Oneline band ════════ */}
      {ONELINE_ROW.map((row, ri) => (
        <section
          key={ri}
          className="tiles tiles--oneline"
          data-tiles-grid
          aria-label="Single-line showcase"
        >
          <div className="tiles__wrap">
            <div
              className="tiles__line"
              data-speed={row.speed}
              data-direction="horizontal"
            >
              {row.images.map((src, ii) => (
                <div
                  key={ii}
                  className="tiles__line-img"
                  style={{ backgroundImage: `url("${src}")` }}
                  onClick={() => setLightbox({ src, index: indexOf(src) })}
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <p className="tiles-breakout tiles-breakout--medium" aria-hidden="true">
        the archive never closes
      </p>

      {/* ════════ 4 · Small band ════════ */}
      <section
        className="tiles tiles--small"
        data-tiles-grid
        aria-label="Thumbnail strip"
      >
        <div className="tiles__wrap">
          {SMALL_ROW.map((row, ri) => (
            <div
              key={ri}
              className="tiles__line"
              data-speed={row.speed}
              data-direction="horizontal"
            >
              {row.images.map((src, ii) => (
                <div
                  key={ii}
                  className="tiles__line-img"
                  style={{ backgroundImage: `url("${src}")` }}
                  onClick={() => setLightbox({ src, index: indexOf(src) })}
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ════════ 5 · Fixed wall (per-tile fan) ════════ */}
      <section
        className="tiles tiles--fixed tiles--darker"
        data-tiles-grid
        aria-label="Fixed showcase"
      >
        <div className="tiles__wrap">
          {FIXED_ROWS.map((row, ri) => (
            <div key={ri} className="tiles__line">
              {row.images.map((src, ii) => (
                <div
                  key={ii}
                  className="tiles__line-img"
                  data-tile-speed={
                    FIXED_FAN[ii % FIXED_FAN.length] * (ri % 2 === 0 ? 1 : -1)
                  }
                  style={{ backgroundImage: `url("${src}")` }}
                  onClick={() => setLightbox({ src, index: indexOf(src) })}
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── View Full Archive CTA ─── */}
      <div className="gallery-cta">
        <Link href="/archive" className="gallery-cta-btn">
          View Full Archive
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7h10M7 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="gallery-lightbox__content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-lightbox__media">
                <Image
                  src={lightbox.src}
                  alt="Full view"
                  width={1200}
                  height={800}
                  quality={100}
                  className="gallery-lightbox__img"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="gallery-lightbox__count">
                {lightbox.index + 1} / {allSources.length}
              </div>
            </div>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

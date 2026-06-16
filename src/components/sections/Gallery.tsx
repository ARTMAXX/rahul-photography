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

/* ─── Image rows for the TileScroll effect ─── */
const ROWS = [
  {
    speed: 1,
    images: [
      "/best shots/ladies shoe/leather-sandal.png",
      "/best shots/Food photo/kashmiri-mutton.png",
      "/best shots/mens shoe/modern-athletic-sneaker.webp",
      "/best shots/ladies shoe/fashion-lifestyle.png",
      "/best shots/mens shoe/white-sneaker.png",
    ],
  },
  {
    speed: 1.2,
    images: [
      "/best shots/TileScroll/1.abdece96.jpg",
      "/best shots/TileScroll/10.4f66b9bf.jpg",
      "/best shots/TileScroll/11.bc61a1e3.jpg",
      "/best shots/TileScroll/12.4061d1aa.jpg",
      "/best shots/TileScroll/13.1bbeab4e.jpg",
    ],
  },
  {
    speed: -1,
    images: [
      "/best shots/Food photo/biriyani.png",
      "/best shots/ladies shoe/High-end-shoe.webp",
      "/best shots/Beverage images/iced-drinks.png",
      "/best shots/mens shoe/sneaker-duo.png",
      "/best shots/Food photo/indian-buffet.png",
    ],
  },
  {
    speed: 1.5,
    images: [
      "/best shots/ladies shoe/luxury-mule.png",
      "/best shots/Food photo/crispy-chicken.png",
      "/best shots/mens shoe/sneaker-campaign.png",
      "/best shots/Product image/product-energy-shot.webp",
      "/best shots/Product image/product-watch-luxury.webp",
    ],
  },
  {
    speed: -1.5,
    images: [
      "/best shots/Beverage images/three-iced-drinks.webp",
      "/best shots/mens shoe/lifestyle-fashion.png",
      "/best shots/Food photo/indian-curry.png",
      "/best shots/Product image/serum.png",
      "/best shots/ladies shoe/slip-on-shoes.png",
    ],
  },
  {
    speed: 2,
    images: [
      "/best shots/Product image/luxury-watch.png",
      "/best shots/Food photo/food-cream.webp",
      "/best shots/mens shoe/shoe-mens-campaign.webp",
      "/best shots/Beverage images/bev-iced.webp",
      "/best shots/Product image/headphone-jbl.png",
    ],
  },
  {
    speed: -2,
    images: [
      "/best shots/Food photo/food-curry.webp",
      "/best shots/ladies shoe/shoe-ladies-heels.webp",
      "/best shots/Product image/energy-drink.png",
      "/best shots/mens shoe/shoe-mens-lifestyle.webp",
      "/best shots/Food photo/food-biriyani.webp",
    ],
  },
];

interface LightboxData {
  src: string;
  index: number;
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<LightboxData | null>(null);

  /* ─── GSAP TileScroll parallax ─── */
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lines = gsap.utils.toArray<HTMLElement>(".tiles__line");

    lines.forEach((line) => {
      const speed = parseFloat(line.dataset.speed || "1");
      const direction = line.dataset.direction || "horizontal";

      if (direction === "horizontal") {
        // Calculate total scrollable width
        const lineW = line.scrollWidth;
        const viewportW = window.innerWidth;
        const overflow = lineW - viewportW;

        gsap.fromTo(
          line,
          { x: speed > 0 ? -overflow / 2 : overflow / 2 },
          {
            x: speed > 0 ? overflow / 2 : -overflow / 2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }
    });

    // Reveal heading
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

    // Fade in individual tiles
    const tileImgs = gsap.utils.toArray<HTMLElement>(".tiles__line-img");
    tileImgs.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 1.08 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: sectionRef });

  /* ─── Lightbox keyboard nav ─── */
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, closeLightbox]);

  // Collect all images flat for lightbox navigation
  const allImages = ROWS.flatMap((r) => r.images);

  const nextImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox({ src: allImages[(lightbox.index + 1) % allImages.length], index: (lightbox.index + 1) % allImages.length });
  }, [lightbox, allImages.length]);

  const prevImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox({ src: allImages[(lightbox.index - 1 + allImages.length) % allImages.length], index: (lightbox.index - 1 + allImages.length) % allImages.length });
  }, [lightbox, allImages.length]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, nextImage, prevImage]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="tiles-gallery"
      aria-label="Portfolio gallery"
    >
      {/* ─── Section heading ─── */}
      <div className="gallery-heading">
        <span className="gallery-eyebrow">Portfolio Archive</span>
        <h2 className="gallery-title">Each frame, a new chapter.</h2>
        <p className="gallery-subtitle">
          A curated selection of commercial campaigns across product, food, beverage,
          and lifestyle — every image shot with precise intent and studio light.
        </p>
      </div>

      {/* ─── TileScroll: Rotated horizontal rows ─── */}
      <div className="tiles tiles--rotated">
        <div className="tiles__wrap">
          {ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="tiles__line"
              data-speed={row.speed}
              data-direction="horizontal"
            >
              {row.images.map((src, imgIdx) => (
                <div
                  key={imgIdx}
                  className="tiles__line-img"
                  style={{ backgroundImage: `url(${src})` }}
                  onClick={() =>
                    setLightbox({
                      src,
                      index: rowIdx * row.images.length + imgIdx,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  aria-label="Open image in full view"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── View Full Archive CTA ─── */}
      <div className="gallery-cta">
        <Link href="/archive" className="gallery-cta-btn">
          View Full Archive
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
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
                {lightbox.index + 1} / {allImages.length}
              </div>
            </div>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



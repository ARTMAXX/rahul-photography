"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./GalleryShowcase.css";

/* Curated 12 images chosen from assets NOT used in the existing Gallery section
   to avoid visual duplication. Mix of product, food, beverage, and shoe shots. */
const showcaseImages = [
  {
    src: "/best shots/ADs/ad-culinary.webp",
    alt: "Culinary campaign visual",
    caption: "Culinary Craft",
    category: "Campaign",
  },
  {
    src: "/best shots/ladies shoe/shoe-ladies-slipon.webp",
    alt: "Ladies slip-on shoe",
    caption: "Effortless Slip",
    category: "Footwear",
  },
  {
    src: "/best shots/new-images/new-product-blast.jpg",
    alt: "Product blast visual",
    caption: "Product Blast",
    category: "Product",
  },
  {
    src: "/best shots/new-images/new-juice-01.jpg",
    alt: "Fresh juice pour",
    caption: "Pour & Glow",
    category: "Beverage",
  },
  {
    src: "/best shots/new-images/new-product-heel.jpg",
    alt: "Luxury heel detail",
    caption: "Heel Detail",
    category: "Footwear",
  },
  {
    src: "/best shots/Product image/product-energy-shot.webp",
    alt: "Energy drink product shot",
    caption: "Energy Shot",
    category: "Product",
  },
  {
    src: "/best shots/ADs/ad-popout.webp",
    alt: "Popout advertisement",
    caption: "Popout Ad",
    category: "Campaign",
  },
  {
    src: "/best shots/new-images/new-food-biriyani.png",
    alt: "Biriyani dish",
    caption: "Royal Biriyani",
    category: "Food",
  },
  {
    src: "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    alt: "Mens lifestyle sneaker",
    caption: "Street Sole",
    category: "Footwear",
  },
  {
    src: "/best shots/new-images/new-product-bold.jpg",
    alt: "Bold product visual",
    caption: "Bold Edit",
    category: "Product",
  },
  {
    src: "/best shots/ladies shoe/shoe-ladies-heels.webp",
    alt: "Ladies heels",
    caption: "Sky Heel",
    category: "Footwear",
  },
  {
    src: "/best shots/new-images/new-food-ultra.png",
    alt: "Ultra food detail",
    caption: "Ultra Macro",
    category: "Food",
  },
];

const VIDEO_SRC = "/best shots/ladies shoe/shoe-ladies-video.mp4";
const VIDEO_POSTER = "/best shots/ladies shoe/High-end-shoe.webp";

/* Hook: fade-in on scroll via IntersectionObserver.
   Lightweight â€” no GSAP, no pinning, no scroll-driven hiding. */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function GalleryShowcase() {
  const sectionRef = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % showcaseImages.length
      ),
    []
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null
          ? null
          : (i - 1 + showcaseImages.length) % showcaseImages.length
      ),
    []
  );

  /* Keyboard support for the lightbox */
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    /* Lock background scroll while lightbox is open */
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section
      ref={sectionRef}
      className="showcase"
      aria-label="Portfolio showcase gallery"
    >
      {/* Section header */}
      <header className="showcase__header" data-reveal>
        <span className="showcase__eyebrow">Portfolio</span>
        <h2 className="showcase__title">
          Each shoot is a chance to learn
        </h2>
        <p className="showcase__subtitle">
          A curated selection of recent work across product, food, beverage,
          and lifestyle â€” every frame available to view in full.
        </p>
      </header>

      {/* Featured video â€” large, autoplays, always visible */}
      <div className="showcase__video-wrap" data-reveal>
        <video
          className="showcase__video"
          src={VIDEO_SRC}
          poster={VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Behind the scenes product video"
        />
        <div className="showcase__video-caption">
          <span className="showcase__video-tag">Featured Reel</span>
          <span className="showcase__video-title">Ladies Footwear â€” In Motion</span>
        </div>
      </div>

      {/* Image grid â€” all 12 images visible at once */}
      <div className="showcase__grid" role="list">
        {showcaseImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="showcase__tile"
            data-reveal
            style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open ${img.caption} in full view`}
            role="listitem"
          >
            <div className="showcase__tile-media">
              <Image quality={100}
                src={img.src}
                alt={img.alt}
                width={800}
                height={450}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="showcase__tile-img"
              />
            </div>
            <div className="showcase__tile-meta">
              <span className="showcase__tile-category">{img.category}</span>
              <span className="showcase__tile-caption">{img.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox â€” full-size viewer with keyboard + click nav */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Full view: ${showcaseImages[lightboxIndex].caption}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close full view"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
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

          <figure
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox__media">
              <Image quality={100}
                src={showcaseImages[lightboxIndex].src}
                alt={showcaseImages[lightboxIndex].alt}
                width={1200}
                height={675}
                sizes="100vw"
                className="lightbox__img"
                priority
              />
            </div>
            <figcaption className="lightbox__caption">
              <span className="lightbox__category">
                {showcaseImages[lightboxIndex].category}
              </span>
              <span className="lightbox__title">
                {showcaseImages[lightboxIndex].caption}
              </span>
              <span className="lightbox__count">
                {lightboxIndex + 1} / {showcaseImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
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
        </div>
      )}
    </section>
  );
}



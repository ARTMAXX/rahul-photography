"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "./archive.css";

/* ── ALL assets: images + video ── */
const ALL_ASSETS: Array<{
  src: string;
  alt: string;
  caption: string;
  category: string;
  type: "image" | "video";
  wide?: boolean;
  tall?: boolean;
}> = [
  { type: "image", src: "/best shots/ADs/ad-culinary.webp",                alt: "Culinary campaign",         caption: "Culinary Craft",      category: "Campaign",   wide: true },
  { type: "image", src: "/best shots/ladies shoe/shoe-ladies-slipon.webp", alt: "Ladies slip-on",            caption: "Effortless Slip",     category: "Footwear" },
  { type: "image", src: "/best shots/new-images/new-product-blast.jpg",   alt: "Product blast",             caption: "Product Blast",       category: "Product",   tall: true },
  { type: "image", src: "/best shots/new-images/new-juice-01.jpg",        alt: "Fresh juice",               caption: "Pour & Glow",         category: "Beverage" },
  { type: "image", src: "/best shots/new-images/new-product-heel.jpg",    alt: "Luxury heel",               caption: "Heel Detail",         category: "Footwear" },
  { type: "image", src: "/best shots/Product image/product-energy-shot.webp", alt: "Energy drink",          caption: "Energy Shot",         category: "Product",   wide: true },
  { type: "image", src: "/best shots/ADs/ad-popout.webp",                 alt: "Pop-out ad",                caption: "Popout Ad",           category: "Campaign" },
  { type: "image", src: "/best shots/new-images/new-food-biriyani.png",   alt: "Biriyani dish",             caption: "Royal Biriyani",      category: "Food",      tall: true },
  { type: "image", src: "/best shots/mens shoe/shoe-mens-lifestyle.webp", alt: "Mens lifestyle sneaker",    caption: "Street Sole",         category: "Footwear" },
  { type: "image", src: "/best shots/new-images/new-product-bold.jpg",    alt: "Bold product",              caption: "Bold Edit",           category: "Product" },
  { type: "image", src: "/best shots/ladies shoe/shoe-ladies-heels.webp", alt: "Ladies heels",              caption: "Sky Heel",            category: "Footwear",  wide: true },
  { type: "image", src: "/best shots/new-images/new-food-ultra.png",      alt: "Ultra food detail",         caption: "Ultra Macro",         category: "Food" },
  { type: "video", src: "/best shots/ladies shoe/shoe-ladies-video.mp4",  alt: "Ladies footwear reel",      caption: "Motion Reel",         category: "Video",     wide: true },
  { type: "image", src: "/best shots/ladies shoe/High-end-shoe.webp",     alt: "High-end shoe luxury",      caption: "High-End",            category: "Footwear" },
];

/* ── Parallax depth — different rows scroll at different speeds ── */
const SPEEDS = [0, -35, 20, -15, 25, -30, 15, -20, 30, -25, 20, -35, 10, -20];

function useParallaxScroll(containerRef: React.RefObject<HTMLDivElement | null>) {
  const tickRef = useRef(false);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const onScroll = useCallback(() => {
    if (tickRef.current) return;
    tickRef.current = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = SPEEDS[i % SPEEDS.length];
        el.style.transform = `translateY(${scrollY * speed * 0.001}px)`;
      });
      tickRef.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return cardRefs;
}

export default function ArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useParallaxScroll(containerRef);

  /* Reveal observer */
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-revealed");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="archive-page" ref={containerRef}>
      {/* back nav */}
      <nav className="archive__nav">
        <Link href="/" className="archive__back">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Portfolio
        </Link>
        <span className="archive__nav-title">Full Archive</span>
      </nav>

      {/* page hero text */}
      <header className="archive__header" data-reveal>
        <span className="archive__eyebrow">Every frame. Every campaign.</span>
        <h1 className="archive__title">The Archive</h1>
        <p className="archive__count">{ALL_ASSETS.length} Works</p>
      </header>

      {/* Masonry parallax wall */}
      <div className="archive__wall">
        {ALL_ASSETS.map((asset, i) => (
          <article
            key={asset.src}
            ref={(el) => { cardRefs.current[i] = el; }}
            data-reveal
            style={{
              transitionDelay: `${(i % 5) * 60}ms`,
              "--parallax-i": i,
            } as React.CSSProperties}
            className={[
              "archive__card",
              asset.wide  ? "archive__card--wide"  : "",
              asset.tall  ? "archive__card--tall"  : "",
              asset.type === "video" ? "archive__card--video" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {asset.type === "video" ? (
              <video
                src={asset.src}
                poster="/best shots/ladies shoe/High-end-shoe.webp"
                autoPlay
                loop
                muted
                playsInline
                className="archive__media"
                aria-label={asset.alt}
              />
            ) : (
              <Image
                src={asset.src}
                alt={asset.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="archive__media"
                loading="lazy"
              />
            )}

            <div className="archive__card-overlay">
              <span className="archive__card-category">{asset.category}</span>
              <span className="archive__card-caption">{asset.caption}</span>
            </div>
          </article>
        ))}
      </div>

      {/* footer */}
      <div className="archive__footer" data-reveal>
        <Link href="/" className="archive__footer-link">
          ← Return to Portfolio
        </Link>
      </div>
    </div>
  );
}

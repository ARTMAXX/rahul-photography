"use client";

/**
 * PinnedShowcase — Awwwards-style pinned portfolio showcase.
 *
 * Reconstructed from the lukebaffait.fr reference video:
 *   - Full-viewport pinned section.
 *   - LEFT: vertical list of titles, sliding up so the active
 *     title is centered. Inactive titles are dim and slightly
 *     translated down. Subtle horizontal divider between each.
 *   - The big red brush stroke is NOT rendered here. It lives
 *     in Contact.tsx as ONE continuous page-wide SVG path that
 *     animates as the user scrolls from the projects pinned
 *     section into the contact section. Same motion, same flow.
 *   - RIGHT: a preview image with "MM YYYY" date + "PREVIEW" label
 *     above. Active image crossfades in (scale 0.96→1, blur 8→0).
 *   - RIGHT EDGE: small vertical progress line + section label
 *     rotated 90° (e.g. "Projects", "Gallery").
 *   - LEFT EDGE: counter in parens, e.g. "(34)", increments with
 *     scroll progress.
 *
 * Used by the Projects section. (Gallery was removed at user
 * request.) The page-wide brush is shared with Contact.tsx.
 */

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import "./PinnedShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export interface ShowcaseItem {
  /** Title shown in the left list */
  title: string;
  /** Date label "MM YYYY" above the preview */
  date: string;
  /** Image or video source path */
  src: string;
  /** Alt text */
  alt: string;
  /** Defaults to image; set to "video" to render a <video> */
  type?: "image" | "video";
}

interface PinnedShowcaseProps {
  /** DOM id and section anchor */
  id: string;
  /** Right-rail label (e.g. "Projects", "Gallery") */
  label: string;
  /** Counter start value (e.g. 30) */
  counterStart: number;
  /** Items to scroll through */
  items: readonly ShowcaseItem[];
  /**
   * Accent color. NOTE: the big red brush stroke is no longer
   * rendered inside this component. It is drawn page-wide in
   * Contact.tsx so that ONE continuous path spans both the
   * Projects pinned section AND the Services/Contact section
   * with the same smooth motion and flow (matching Luke's
   * reference). Kept on the prop for API compatibility.
   */
  accentColor?: string;
}

export default function PinnedShowcase({
  id,
  label,
  counterStart,
  items,
}: PinnedShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    const counter = counterRef.current;
    const progress = progressRef.current;
    if (!section || !list || !counter || !progress) return;

    const titles = titleRefs.current.filter(Boolean) as HTMLElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLElement[];
    const total = items.length;
    if (total === 0) return;

    // Active title = white (red is the SHAPE, not the text)
    const ACTIVE = "#ffffff";
    const DIM = "rgba(255, 255, 255, 0.28)";

    /* ---------- Initial states ---------- */
    gsap.set(titles, { opacity: 0.28, y: 20, color: DIM });
    if (titles[0]) {
      gsap.set(titles[0], { opacity: 1, y: 0, color: ACTIVE });
    }
    gsap.set(images, { opacity: 0, scale: 0.96, filter: "blur(8px)" });
    if (images[0]) {
      gsap.set(images[0], { opacity: 1, scale: 1, filter: "blur(0px)" });
    }
    if (dateRef.current) dateRef.current.textContent = items[0].date;

    /* ---------- Initial brush state ----------
       The big red brush stroke is no longer drawn here.
       It is drawn page-wide in Contact.tsx as ONE continuous
       path spanning the projects pinned section and the
       services/contact section. This component focuses only
       on the title list / preview interactions. */

    /* Position the list so the first title sits near vertical
       center of the viewport at scroll start. As the user
       scrolls, the list translates UP, bringing later titles
       to center. */
    const itemH = titles[0].offsetHeight;
    const containerH = window.innerHeight;
    const firstCenter = titles[0].offsetTop + itemH / 2;
    // Start with the first title near vertical center of the viewport
    const startY = containerH * 0.5 - firstCenter;
    gsap.set(list, { y: startY });

    /* ---------- Master timeline ---------- */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${total * 75}%`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      },
    });

    // Right-edge progress fill (top → bottom over scroll)
    tl.to(
      progress,
      {
        scaleY: 1,
        ease: "none",
        duration: total,
        transformOrigin: "top center",
      },
      0
    );

    /* The big red brush stroke animation lives in Contact.tsx
       and spans the projects pinned section + contact section
       as ONE continuous path. This component only animates
       the title list, previews, and counter. */

    /* ---------- Per-project keyframes ---------- */
    titles.forEach((title, i) => {
      const t = i;

      // Slide the list so this title is centered in the viewport
      const itemCenter = title.offsetTop + itemH / 2;
      const targetY = containerH * 0.5 - itemCenter;
      tl.to(
        list,
        { y: targetY, ease: "power2.inOut", duration: 1 },
        t
      );

      // Activate this title: full opacity, no y, white
      tl.to(
        title,
        {
          opacity: 1,
          y: 0,
          color: ACTIVE,
          duration: 0.3,
          ease: "power2.out",
        },
        t
      );

      // Dim the previous title
      if (i > 0) {
        tl.to(
          titles[i - 1],
          {
            opacity: 0.28,
            y: 20,
            color: DIM,
            duration: 0.3,
            ease: "power2.out",
          },
          t
        );
      }

      // Activate this image: crossfade in with scale + blur release
      tl.to(
        images[i],
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
        },
        t
      );

      // Fade out the previous image
      if (i > 0) {
        tl.to(
          images[i - 1],
          {
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
            duration: 0.5,
            ease: "power2.out",
          },
          t
        );
      }

      // Update the date label
      tl.call(
        () => {
          if (dateRef.current) dateRef.current.textContent = items[i].date;
        },
        [],
        t
      );
    });

    /* Counter — increments by `total` over the full scroll */
    const counterObj = { val: counterStart };
    tl.to(
      counterObj,
      {
        val: counterStart + total,
        ease: "none",
        duration: total,
        onUpdate: () => {
          counter.textContent = `(${String(Math.round(counterObj.val)).padStart(2, "0")})`;
        },
      },
      0
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id={id}
      className="showcase"
      aria-label={`${label} showcase`}
    >
      {/* The big red brush stroke is rendered in Contact.tsx
         as ONE continuous page-wide path that animates as the
         user scrolls from the projects section into the
         contact section. Same motion, same flow, no reset. */}

      {/* Right-edge fixed nav: small vertical progress line + label */}
      <div className="showcase__nav" aria-hidden="true">
        <div className="showcase__nav-line">
          <div
            ref={progressRef}
            className="showcase__nav-line-fill"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
        <span className="showcase__nav-label">{label}</span>
      </div>

      {/* Left-edge counter (horizontal text) */}
      <div className="showcase__counter-wrap" aria-hidden="true">
        <span ref={counterRef} className="showcase__counter">
          ({String(counterStart).padStart(2, "0")})
        </span>
      </div>

      {/* Main content: title list (left) + preview (right) */}
      <div className="showcase__content">
        {/* Left: vertical title list. The list translates vertically
           so the active title is always centered in the viewport. */}
        <div className="showcase__list-clip">
          <div ref={listRef} className="showcase__list">
            {items.map((item, i) => (
              <div
                key={`title-${i}`}
                ref={(el) => {
                  titleRefs.current[i] = el;
                }}
                className="showcase__item"
              >
                <span className="showcase__item-title">{item.title}</span>
                <div className="showcase__item-divider" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: preview image stack with date + PREVIEW label */}
        <div className="showcase__preview">
          <div className="showcase__preview-meta">
            <span ref={dateRef} className="showcase__preview-date">
              {items[0].date}
            </span>
            <span className="showcase__preview-label">PREVIEW</span>
          </div>
          <div className="showcase__preview-stack">
            {items.map((item, i) => (
              <div
                key={`img-${i}`}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="showcase__preview-item"
              >
                {item.type === "video" ? (
                  <video
                    key={`video-${i}`}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="showcase__preview-media"
                    aria-label={item.alt}
                    onLoadedData={() => console.log(`Video loaded: ${item.src}`)}
                    onError={(e) => console.error(`Video error: ${item.src}`, e)}
                  />
                ) : (
                  <Image
                    key={`img-${i}`}
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="showcase__preview-media"
                    priority={i === 0}
                    unoptimized
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

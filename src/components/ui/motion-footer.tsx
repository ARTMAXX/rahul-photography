"use client";

import * as React from "react";

// -------------------------------------------------------------------------
// 1. STYLES  —  Morphic-exact + animations
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000000;
}

/* Giant Watermark  —  outline-only, anchored below the nav (no overlap).
   Hidden on mobile to prevent overlap with the link grid + bottom bar;
   the desktop-only 78% positioning relies on enough vertical space. */
.footer-watermark {
  display: none;
}
@media (min-width: 768px) {
  .footer-watermark {
    display: block;
    position: absolute;
    left: 50%;
    top: 78%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    opacity: 0;
    animation: watermarkReveal 1.4s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}
.footer-watermark-text {
  font-size: clamp(80px, 20vw, 390px);
  line-height: 0.8;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.04);
  -webkit-text-stroke: 1.5px rgba(232, 59, 44, 0.45);
  white-space: nowrap;
  /* Breathing red glow uses text-shadow (works on text strokes,
      unlike drop-shadow which barely affects outline-only text).
      Each frame stacks multiple shadow layers for a soft falloff. */
  animation: watermarkGlow 3.5s ease-in-out infinite alternate;
}
/* Breathing outline glow  —  text-shadow stacks that pulse brighter
   and dimmer, brand red dominant, white highlight on the leading edge. */
@keyframes watermarkGlow {
  0% {
    text-shadow:
      0 0 6px rgba(232, 59, 44, 0.35),
      0 0 18px rgba(232, 59, 44, 0.25),
      0 0 32px rgba(232, 59, 44, 0.15);
  }
  100% {
    text-shadow:
      0 0 8px rgba(232, 59, 44, 0.85),
      0 0 28px rgba(232, 59, 44, 0.65),
      0 0 56px rgba(232, 59, 44, 0.40),
      0 0 80px rgba(232, 59, 44, 0.20);
  }
}

/* Shine sweep layer  —  VengenceUI AnimatedButton style: a light band
   travels along the outline stroke every few seconds. The red shine
   sweeps across the already-drawn outline, creating the "drawing"
   effect on top of the static text-stroke. */
.footer-watermark-shine {
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(232, 59, 44, 0.85);
  -webkit-mask-image: linear-gradient(
    -75deg,
    transparent 35%,
    rgba(0, 0, 0, 1) 50%,
    transparent 65%
  );
  mask-image: linear-gradient(
    -75deg,
    transparent 35%,
    rgba(0, 0, 0, 1) 50%,
    transparent 65%
  );
  -webkit-mask-size: 250% 100%;
  mask-size: 250% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
  animation: watermarkShine 3.2s linear infinite;
  pointer-events: none;
  will-change: mask-position, -webkit-mask-position;
}
@keyframes watermarkShine {
  0%   { -webkit-mask-position: 100% 0;  mask-position: 100% 0;  }
  100% { -webkit-mask-position: -50% 0;  mask-position: -50% 0;  }
}
@media (prefers-reduced-motion: reduce) {
  .footer-watermark-shine { animation: none; opacity: 0; }
  .footer-watermark-text   { animation: none; }
}
@keyframes watermarkReveal {
  0%   { opacity: 0; transform: translate(-50%, -50%) scale(1.02); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

/* Wide grid-cell pills  —  Morphic layout + React-Bits circle-rise hover */
.footer-pill {
  display: flex;
  align-items: center;
  height: 34px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  color: #8a8a8a;
  white-space: nowrap;
  transition: border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  letter-spacing: 0.01em;
  width: 100%;
}

/* Rising circle fill  —  bubbles up from the bottom on hover */
.footer-pill::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 260%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: #e83b2c;
  transform: translate(-50%, calc(-50% + 112%));
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
  will-change: transform;
  pointer-events: none;
}
.footer-pill:hover::before {
  transform: translate(-50%, -50%);
}
.footer-pill:hover {
  border-color: rgba(232, 59, 44, 0.4);
}

/* Touch: 44px minimum target (WCAG 2.5.5 / Apple HIG)  —  desktop keeps
   the original slim 34px pill */
@media (pointer: coarse) {
  .footer-pill {
    height: 44px;
  }
}

/* Label stack  —  old label exits up, white label enters from below */
.pill-label-stack {
  position: relative;
  display: inline-block;
  overflow: hidden;
  line-height: 1.2;
  z-index: 1;
}
.footer-pill .pill-label {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.footer-pill .pill-label-hover {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(115%);
  color: #ffffff;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.footer-pill:hover .pill-label {
  transform: translateY(-115%);
}
.footer-pill:hover .pill-label-hover {
  transform: translateY(0);
}

/* Morphic-style timeline ruler  —  subtle seconds labels + fine ticks */
.footer-ruler {
  width: 100%;
  padding: 0 8px;
  opacity: 0;
  animation: rulerFadeIn 0.6s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes rulerFadeIn {
  to { opacity: 1; }
}

.footer-ruler-labels {
  display: flex;
  justify-content: space-between;
  padding: 0 0 7px;
}

.footer-ruler-label {
  font-size: 10px;
  line-height: 1;
  /* #767676 = 4.54:1 on black (WCAG AA); still reads as a faint ruler */
  color: #767676;
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.footer-ruler-track {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 10px;
}

/* Thin 1px ticks  —  fine marks, not blocks */
.footer-ruler-tick {
  flex: none;
  width: 1px;
  height: 5px;
  background: rgba(255, 255, 255, 0.09);
}

.footer-ruler-tick.major {
  height: 10px;
  background: rgba(255, 255, 255, 0.16);
}


/* Bottom bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* #8a8a8a → 5.3:1 on black  —  WCAG AA for small legal text */
  color: #8a8a8a;
  font-size: 11.5px;
  opacity: 0;
  animation: bottomBarReveal 0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes bottomBarReveal {
  0%   { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
.footer-divider-v {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  flex-shrink: 0;
}
.footer-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8a8a;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}
.footer-social-icon:hover {
  color: #ffffff;
  transform: translateY(-2px) scale(1.1);
}

/* Logo waveform bars  —  staggered pulse animation */
.footer-logo-bar {
  display: block;
  width: 2.5px;
  border-radius: 1.5px;
  background: white;
  animation: barPulse 2.5s ease-in-out infinite alternate;
}
.footer-logo-bar:nth-child(1) { animation-delay: 0s; }
.footer-logo-bar:nth-child(2) { animation-delay: 0.2s; }
.footer-logo-bar:nth-child(3) { animation-delay: 0.4s; }
@keyframes barPulse {
  0%   { transform: scaleY(0.6); opacity: 0.5; }
  100% { transform: scaleY(1); opacity: 1; }
}
.group:hover .footer-logo-bar {
  animation-duration: 0.5s;
}

/* Pill row staggered entry */
.footer-pill-row {
  opacity: 0;
  transform: translateY(8px);
  animation: pillRowReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.footer-pill-row:nth-child(1) { animation-delay: 0.3s; }
.footer-pill-row:nth-child(2) { animation-delay: 0.4s; }
@keyframes pillRowReveal {
  0%   { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* EN button */
.footer-en-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #8a8a8a;
  transition: color 0.25s ease;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 12px;
}
.footer-en-btn:hover {
  color: #ffffff;
}
.footer-en-btn svg {
  transition: transform 0.25s ease;
}
.footer-en-btn:hover svg {
  transform: rotate(180deg);
}
`;

// -------------------------------------------------------------------------
// 2. DATA
// -------------------------------------------------------------------------
const WHATSAPP_NUMBER = "917078939475";

const NAV_ROW_1: { label: string; href: string; external?: boolean }[] = [
  { label: "Portfolio", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Dehradun", href: "/dehradun" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NAV_ROW_2: { label: string; href: string; external?: boolean }[] = [
  { label: "Help Center", href: "/faq" },
  {
    label: "Contact Us",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi Rahul, I'd like to discuss a photography project."
    )}`,
    external: true,
  },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

// Inline SVG icons
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L20 4h-2l-5.2 6.4L8 4H4z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Social profiles.
// X (Twitter) entry was removed in Sept 2026 — no real X profile exists yet.
// To re-enable, add `{ label: "X (Twitter)", href: "https://x.com/<handle>", Icon: XIcon }`
// once a real account is created.
const SOCIALS: { label: string; href: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
  { label: "Instagram", href: "https://www.instagram.com/rahul_chanda_photography/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-chanda-a9a860269", Icon: LinkedInIcon },
];

// -------------------------------------------------------------------------
// 3. TIMELINE RULER  —  Morphic-style: subtle seconds + fine ticks (no playhead)
// -------------------------------------------------------------------------
const TIMELINE_SECONDS = 15;
const TICKS_PER_SECOND = 8; // fine minor ticks

const TimelineRuler = () => {
  const totalTicks = TIMELINE_SECONDS * TICKS_PER_SECOND;
  return (
    <div className="footer-ruler" aria-hidden="true">
      {/* Seconds labels: 0, 1s, 2s ... 15s */}
      <div className="footer-ruler-labels">
        {Array.from({ length: TIMELINE_SECONDS + 1 }, (_, s) => (
          <span key={s} className="footer-ruler-label">
            {s === 0 ? "0" : `${s}s`}
          </span>
        ))}
      </div>
      {/* Fine tick strip hanging below the hairline */}
      <div className="footer-ruler-track">
        {Array.from({ length: totalTicks }, (_, i) => (
          <span
            key={i}
            className={`footer-ruler-tick${
              i % TICKS_PER_SECOND === 0 ? " major" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// 4. MAIN COMPONENT  —  Morphic-exact layout + micro/macro animations
// -------------------------------------------------------------------------
export function CinematicFooter() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <footer className="cinematic-footer-wrapper relative w-full overflow-hidden min-h-[500px]">
        {/* Giant watermark  —  outline-only, anchored below the nav (no overlap) */}
        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-text">RAHUL</span>
          <span className="footer-watermark-text footer-watermark-shine">
            RAHUL
          </span>
        </div>

        {/* Layer 1: Logo  —  top-left with animated waveform bars */}
        <div className="relative z-10 px-4 md:px-20 pt-8">
          <a href="/" className="inline-flex items-center gap-2 group" data-cursor="pointer">
            <span className="flex h-4 items-end gap-[2px]">
              <span className="footer-logo-bar h-2" />
              <span className="footer-logo-bar h-3.5" />
              <span className="footer-logo-bar h-1.5" />
            </span>
            <span className="text-[14px] font-semibold tracking-tight text-white group-hover:opacity-70 transition-opacity duration-300">
              Rahul Chanda
            </span>
          </a>
        </div>

        {/* Layer 2: Morphic-style timeline ruler */}
        <div className="relative z-10 mt-5">
          <TimelineRuler />
        </div>

        {/* Layer 3: Grid pills  —  equal-width cells like Morphic */}
        <nav className="relative z-[11] mx-auto mt-6 w-full max-w-[960px] px-4" aria-label="Footer">
          <div className="footer-pill-row grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {NAV_ROW_1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="pointer"
                className="footer-pill"
              >
                <span className="pill-label-stack">
                  <span className="pill-label">{link.label}</span>
                  <span className="pill-label-hover" aria-hidden="true">
                    {link.label}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <div className="footer-pill-row grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {NAV_ROW_2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-cursor="pointer"
                className="footer-pill"
              >
                <span className="pill-label-stack">
                  <span className="pill-label">{link.label}</span>
                  <span className="pill-label-hover" aria-hidden="true">
                    {link.label}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Layer 4: Bottom bar  —  copyright left, EN | socials right.
            Switched from absolute positioning to flex flow so it stacks
            cleanly on mobile and never overlaps the link grid above. */}
        <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10 mx-4 md:mx-20 mt-12 md:mt-0 mb-5 footer-bottom">
          {/* Left side */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
            <span>© {new Date().getFullYear()} Rahul Chanda Photography. All rights reserved.</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button className="footer-en-btn" data-cursor="pointer">
              EN
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <span className="footer-divider-v" />

            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="footer-social-icon"
              >
                <Icon className="w-4 h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

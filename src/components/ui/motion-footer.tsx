"use client";

import * as React from "react";

// -------------------------------------------------------------------------
// 1. STYLES — Morphic-exact + animations
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000000;
}

/* Giant Watermark — centered like Morphic reference */
.footer-watermark {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  opacity: 0;
  animation: watermarkReveal 2s 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.footer-watermark-text {
  font-size: clamp(140px, 24vw, 350px);
  line-height: 0.82;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 0.8px rgba(255, 255, 255, 0.05);
  white-space: nowrap;
}
@keyframes watermarkReveal {
  0%   { opacity: 0; transform: translate(-50%, -50%) scale(1.02); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

/* Rectangular buttons — matching Morphic's style */
.footer-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: #888888;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.02em;
}
.footer-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.footer-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.15);
}
.footer-pill:hover::before {
  opacity: 1;
}

/* Timeline ruler — editing timeline style like Morphic */
.footer-ruler {
  position: relative;
  width: 100%;
  padding: 0 40px;
  opacity: 0;
  animation: rulerFadeIn 0.6s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes rulerFadeIn {
  to { opacity: 1; }
}

/* Main horizontal line */
.footer-ruler-track {
  position: relative;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

/* Playhead scrubber */
.footer-ruler-playhead {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  z-index: 5;
  cursor: grab;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.footer-ruler-playhead:hover {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
}

/* Tick container - ticks hang DOWN from the line */
.footer-ruler-ticks {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0;
}

/* Individual tick wrapper */
.footer-ruler-tick {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 0;
  animation: tickFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* The vertical tick line - hangs DOWN from the horizontal track */
.footer-ruler-tick-line {
  width: 1px;
  height: 10px;
  background: rgba(255, 255, 255, 0.18);
  margin-top: 0;
  transition: height 0.2s ease, background 0.2s ease;
}

/* Major ticks (every 5 seconds) are taller */
.footer-ruler-tick.major .footer-ruler-tick-line {
  height: 14px;
  background: rgba(255, 255, 255, 0.25);
}

.footer-ruler-tick:hover .footer-ruler-tick-line {
  height: 16px;
  background: rgba(255, 255, 255, 0.4);
}

/* Time labels below ticks */
.footer-ruler-tick-label {
  font-size: 10px;
  color: #555555;
  line-height: 1;
  padding-top: 6px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer-ruler-tick:hover .footer-ruler-tick-label {
  color: #aaaaaa;
}

/* Major tick labels are slightly larger */
.footer-ruler-tick.major .footer-ruler-tick-label {
  font-size: 10.5px;
  color: #666666;
}

@keyframes tickFadeIn {
  to { opacity: 1; }
}


/* Bottom bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4a4a4a;
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
  color: #555555;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}
.footer-social-icon:hover {
  color: #ffffff;
  transform: translateY(-2px) scale(1.1);
}

/* Logo waveform bars — staggered pulse animation */
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
  color: #555555;
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

const SOCIALS: { label: string; href: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
  { label: "X (Twitter)", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/rahul_chanda_photography/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
];

// -------------------------------------------------------------------------
// 3. TIMELINE COMPONENT — editing timeline style like Morphic
// -------------------------------------------------------------------------
const TimelineRuler = () => {
  const ticks = Array.from({ length: 16 }, (_, i) => i); // 0..15
  return (
    <div className="footer-ruler">
      {/* Main horizontal track line */}
      <div className="footer-ruler-track">
        {/* Playhead scrubber */}
        <div className="footer-ruler-playhead" />
      </div>
      
      {/* Ticks container - hangs below the line */}
      <div className="footer-ruler-ticks">
        {ticks.map((t) => (
          <div
            key={t}
            className={`footer-ruler-tick ${t % 5 === 0 ? 'major' : ''}`}
            style={{ animationDelay: `${0.3 + t * 0.025}s` }}
          >
            <div className="footer-ruler-tick-line" />
            <span className="footer-ruler-tick-label">
              {t === 0 ? "0" : `${t}s`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// 4. MAIN COMPONENT — Morphic-exact layout + micro/macro animations
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const handlePillMouseMove = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <footer className="cinematic-footer-wrapper relative w-full overflow-hidden min-h-[540px]">
        {/* Giant watermark — centered, subtle stroke like Morphic */}
        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-text">CHANDA</span>
        </div>

        {/* Layer 1: Logo — top-left with animated waveform bars */}
        <div className="relative z-10 px-8 pt-7 md:px-10">
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

        {/* Layer 2: Timeline ruler — editing timeline style */}
        <div className="relative z-10 mt-4">
          <TimelineRuler />
        </div>

        {/* Layer 3: Rectangular buttons — centered, matching Morphic's grid */}
        <nav className="relative z-[11] mx-auto mt-5 max-w-[900px]" aria-label="Footer">
          <div className="footer-pill-row flex items-center justify-center gap-[6px]">
            {NAV_ROW_1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="pointer"
                className="footer-pill"
                onMouseMove={handlePillMouseMove}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-pill-row flex items-center justify-center gap-[6px] mt-[8px]">
            {NAV_ROW_2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-cursor="pointer"
                className="footer-pill"
                onMouseMove={handlePillMouseMove}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Layer 4: Bottom bar — copyright | certification left, EN | socials right */}
        <div className="absolute bottom-0 left-0 right-0 z-10 mx-10 mb-4 footer-bottom">
          {/* Left side */}
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Rahul Chanda Photography. All rights reserved.</span>
            <span className="footer-divider-v" />
            <span className="text-[13px]">AICPA SOC 2 Type 1 certified</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
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

"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "rahulchandaphotography@gmail.com",
    href: "mailto:rahulchandaphotography@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 70789 39475",
    href: "tel:+917078939475",
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/rahul_chanda_photography/" },
  { name: "Email", href: "mailto:rahulchandaphotography@gmail.com" },
  { name: "Phone", href: "tel:+917078939475" },
];

// Generate horizontal lines that form text pattern
function generateLines(count: number) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const y = (i / count) * 100;
    // Vary line length to create "TRIONN" text silhouette
    const width = 30 + Math.sin(i * 0.3) * 20 + Math.cos(i * 0.5) * 15;
    const left = 10 + Math.sin(i * 0.2) * 5;
    lines.push({ y, width, left, delay: i * 0.02 });
  }
  return lines;
}

export default function ContactForm() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const lines = generateLines(60);

  useGSAP(() => {
    // ── Large heading animation ──
    if (headingRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1.2,
          },
        })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          }
        );
    }

    // ── Lines animation on scroll ──
    if (linesRef.current) {
      const lineElements = linesRef.current.querySelectorAll(".line-element");
      gsap.fromTo(
        lineElements,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          stagger: 0.01,
          ease: "power2.out",
          duration: 0.5,
          scrollTrigger: {
            trigger: linesRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }

    // ── Footer items stagger ──
    const footerItems = containerRef.current?.querySelectorAll(".footer-item");
    if (footerItems) {
      gsap.fromTo(
        footerItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power3.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: footerItems[0],
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full bg-[#070707] overflow-hidden"
    >
      {/* ── LiquidEther fluid background — radial vignette mask ──
          Monochrome Navier-Stokes fluid simulation (liquid mercury / silk).
          Concentrated behind the CTA via .fluid-mask radial fade.
          pointer-events: none so the contact links stay clickable.
          Mouse + auto-demo interaction enabled. */}
      <div className="absolute inset-0 z-0 pointer-events-none fluid-mask h-[1000px]">
        <LiquidEther
          colors={["#0a0a0a", "#3a3a3a", "#888888", "#d8d8d8", "#ffffff"]}
          mouseForce={20}
          cursorSize={120}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          resolution={0.5}
          BFECC={true}
        />
      </div>

      {/* ── Main CTA — trionn "Ready to build something bold?" ── */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 md:pt-44 pb-16 md:pb-24">
        <div ref={headingRef}>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white/90 max-w-[20ch] mb-8">
            Ready to build
            <br />
            something <span className="italic text-white/50">bold</span>?
          </h2>

          <Link
            href="mailto:rahulchandaphotography@gmail.com"
            className="group inline-flex items-center gap-4 mt-8"
            data-cursor="pointer"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/40 group-hover:text-white transition-colors duration-500">
              Start a Collaboration
            </span>
            <span className="w-12 h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-500" />
            <span className="text-white/30 group-hover:text-white/80 transition-colors duration-500 text-sm">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* ── Animated Lines — trionn "HOVER THE LINES" effect ── */}
      <div
        ref={linesRef}
        className="relative w-full h-[300px] md:h-[400px] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className="line-element absolute h-[1px] transition-all duration-700"
            suppressHydrationWarning
            style={{
              top: `${line.y}%`,
              left: `${line.left}%`,
              width: `${line.width}%`,
              background: isHovering
                ? "linear-gradient(90deg, transparent, rgba(200,168,75,0.4), transparent)"
                : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              transform: `scaleX(${isHovering ? 1.1 : 1})`,
            }}
          />
        ))}

        {/* Hover text */}
        <div className="absolute bottom-4 left-6 md:left-16 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <span>Sound On</span>
          <span className="text-white/20">🔊</span>
          <span>Hover the lines.</span>
        </div>
      </div>

      {/* ── Footer — trionn style ── */}
      <div className="relative z-10 w-full border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Left — Copyright */}
            <div className="footer-item">
              <p className="text-xs text-white/30 mb-2" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                © Rahul Chanda {new Date().getFullYear()}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                Commercial Product Photographer
              </p>
              <p className="text-[10px] text-white/15 mt-1" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                Based in Dehradun, India
              </p>
            </div>

            {/* Middle — Business Enquiry */}
            <div className="footer-item">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-4" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                Business Enquiry
              </p>
              <div className="space-y-2">
                {CONTACT_METHODS.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300"
                    data-cursor="pointer"
                  >
                    <span className="text-white/20 text-xs">{method.label === "Email" ? "E." : "P."}</span>
                    <span className="group-hover:text-[#c8a84b] transition-colors duration-300">{method.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Social */}
            <div className="footer-item">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-4" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>
                Social
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Instagram" ? "_blank" : undefined}
                    rel={link.name === "Instagram" ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    data-cursor="pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

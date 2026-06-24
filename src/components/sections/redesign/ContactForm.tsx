"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "rahulchandaphotography@gmail.com",
    href: "mailto:rahulchandaphotography@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 70789 39475",
    href: "tel:+917078939475",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@rahul_chanda_photography",
    href: "https://www.instagram.com/rahul_chanda_photography/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/rahul_chanda_photography/" },
  { name: "Email", href: "mailto:rahulchandaphotography@gmail.com" },
  { name: "Phone", href: "tel:+917078939475" },
];

export default function ContactForm() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // ── Large heading animation — trionn style ──
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
          { opacity: 0, y: 100, filter: "blur(16px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          }
        );
    }

    // ── Footer info stagger ──
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
      {/* ── Ambient gradient ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
      />

      {/* ── Main CTA section — trionn "Ready to build something bold?" style ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 md:pt-44 pb-16 md:pb-24">
        <div ref={headingRef}>
          {/* Large editorial heading */}
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white/90 max-w-[20ch] mb-8">
            Ready to build
            <br />
            something{" "}
            <span className="italic text-white/50">bold</span>?
          </h2>

          {/* CTA link — trionn "START A COLLABORATION" style */}
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

      {/* ── Footer — trionn style with columns ── */}
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
                {CONTACT_METHODS.slice(0, 2).map((method) => (
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

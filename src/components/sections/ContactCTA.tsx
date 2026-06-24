"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rahul_chanda_photography/",
    username: "@rahul_chanda_photography",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    username: "@rahulchanda",
  },
  {
    label: "Email",
    href: "mailto:rahulchandaphotography@gmail.com",
    username: "rahulchandaphotography@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+917****9475",
    username: "+91 7****9475",
  },
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main CTA card animation
      gsap.fromTo(
        ".contact-cta-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.6,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
          scrollTrigger: {
            trigger: ".contact-cta-card",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Social links staggered
      const socialLinks = gsap.utils.toArray<HTMLElement>(".social-link-item");
      socialLinks.forEach((link, i) => {
        gsap.fromTo(
          link,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: link,
              start: "top 85%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#050505] overflow-hidden"
      style={{ padding: "clamp(8rem, 16vh, 12rem) clamp(1rem, 4vw, 3rem) clamp(4rem, 8vh, 6rem)" }}
    >
      {/* Massive ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Main CTA card - Double-bezel with heavy padding */}
        <div className="contact-cta-card mb-24 md:mb-32">
          <div className="p-2 md:p-3 rounded-[3rem] bg-white/[0.03] ring-1 ring-white/10">
            <div className="p-12 md:p-20 rounded-[calc(3rem-0.75rem)] bg-gradient-to-br from-white/[0.05] to-transparent text-center">
              {/* Eyebrow */}
              <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
                Let's Create
              </span>

              {/* Massive heading */}
              <h2
                className="text-[clamp(2.5rem,9vw,7rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Have a project in{" "}
                <span className="italic font-bold">mind?</span>
              </h2>

              <p className="text-lg md:text-xl text-white/60 max-w-[50ch] mx-auto mb-12">
                Whether it's a product launch, culinary campaign, or brand refresh — let's bring your vision to life with obsessive attention to detail.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:rahulchandaphotography@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Get in Touch</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                    ↗
                  </span>
                </a>

                <a
                  href="#archive"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/10 text-white font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:ring-white/20 active:scale-[0.98]"
                >
                  <span>View Portfolio</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-item group"
            >
              {/* Double-bezel link card */}
              <div className="p-1.5 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]">
                <div className="p-6 md:p-8 rounded-[calc(2rem-0.375rem)] bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50 mb-1">
                      {link.label}
                    </div>
                    <div className="text-lg text-white font-medium transition-transform duration-300 group-hover:translate-x-2">
                      {link.username}
                    </div>
                  </div>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 text-white transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm text-white/40">
            <span>© 2026 Rahul Chanda Photography</span>
            <span className="hidden md:inline">•</span>
            <span>Commercial Product Photographer</span>
            <span className="hidden md:inline">•</span>
            <span>Based in Dehradun, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

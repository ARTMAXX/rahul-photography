"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Rahul's attention to detail is unmatched. Every frame tells a story, every angle is intentional. The product shots elevated our entire brand.",
    author: "Sarah Mitchell",
    role: "Creative Director",
    company: "Luxe Footwear Co.",
  },
  {
    id: 2,
    quote:
      "Working with Rahul transformed how we present our culinary offerings. His food photography doesn't just show dishes — it makes you taste them.",
    author: "Marco Rossi",
    role: "Head Chef",
    company: "Nero Restaurant",
  },
  {
    id: 3,
    quote:
      "The beverage campaign shots were beyond anything we imagined. Technical mastery combined with artistic vision. Absolute game-changer.",
    author: "James Chen",
    role: "Brand Manager",
    company: "Crystal Spirits",
  },
];

const PARTNERS = [
  { name: "Behance", logo: "https://cdn.simpleicons.org/behance/FFFFFF" },
  { name: "Fiverr", logo: "https://cdn.simpleicons.org/fiverr/FFFFFF" },
  { name: "Casio", logo: "https://cdn.simpleicons.org/casio/FFFFFF" },
  { name: "Adidas", logo: "https://cdn.simpleicons.org/adidas/FFFFFF" },
  { name: "HBO", logo: "https://cdn.simpleicons.org/hbo/FFFFFF" },
  { name: "GQ", logo: "https://cdn.simpleicons.org/gq/FFFFFF" },
  { name: "ASOS", logo: "https://cdn.simpleicons.org/asos/FFFFFF" },
  { name: "A24", logo: "https://cdn.simpleicons.org/a24/FFFFFF" },
];

export default function TestimonialsPartners() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonial cards with staggered parallax
      const testimonialCards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      testimonialCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: -10,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });

      // Partners logo fade-in
      const logos = gsap.utils.toArray<HTMLElement>(".partner-logo");
      logos.forEach((logo, i) => {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: logo,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-black overflow-hidden"
      style={{ padding: "clamp(8rem, 16vh, 12rem) clamp(1rem, 4vw, 3rem)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute top-1/4 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
            Testimonials
          </span>

          <h2
            className="text-[clamp(2.5rem,7vw,5rem)] font-serif leading-[0.95] tracking-[-0.02em] text-white max-w-[20ch] mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted by <span className="italic font-bold">creative</span> leaders.
          </h2>
        </div>

        {/* Testimonial cards - floating Z-axis layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className="testimonial-card"
              style={{
                transform: `perspective(1000px)`,
              }}
            >
              {/* Double-bezel card */}
              <div className="p-2 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]">
                <div className="p-8 md:p-10 rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-white/[0.03] to-transparent min-h-[360px] flex flex-col">
                  {/* Quote mark */}
                  <div className="text-6xl font-serif text-white/10 leading-none mb-4">
                    "
                  </div>

                  {/* Quote text */}
                  <p className="text-white/80 leading-relaxed mb-auto">
                    {item.quote}
                  </p>

                  {/* Author info */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="font-medium text-white mb-1">
                      {item.author}
                    </div>
                    <div className="text-sm text-white/50">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners section */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10">
            Selected Collaborators
          </span>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-[1200px] mx-auto">
          {PARTNERS.map((partner, index) => (
            <div
              key={partner.name}
              className="partner-logo group"
            >
              {/* Double-bezel logo container */}
              <div className="p-1.5 rounded-3xl bg-white/[0.02] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04] hover:scale-105">
                <div className="flex items-center justify-center w-32 h-20 md:w-40 md:h-24 rounded-[calc(1.5rem-0.375rem)] bg-white/[0.02] transition-opacity duration-300 group-hover:opacity-100 opacity-40">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-auto object-contain filter brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

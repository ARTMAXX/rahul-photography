"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Product Photography",
    description:
      "High-end commercial imagery with obsessive attention to lighting, texture, and emotion. Every frame tells a story.",
    capabilities: ["Hero Shots", "Lifestyle", "E-commerce", "Editorial"],
  },
  {
    id: 2,
    number: "02",
    title: "Beverage & Splash",
    description:
      "Dynamic liquid motion captured at the perfect millisecond. Technical precision meets artistic vision.",
    capabilities: ["Splash Photography", "Cocktails", "Pour Shots", "Macro"],
  },
  {
    id: 3,
    number: "03",
    title: "Food Styling",
    description:
      "Culinary art brought to life through cinematic lighting and meticulous composition. Taste with your eyes.",
    capabilities: ["Fine Dining", "Recipe Content", "Menu Design", "Campaigns"],
  },
  {
    id: 4,
    number: "04",
    title: "Fashion & Footwear",
    description:
      "From luxury heels to streetwear sneakers. Detail-obsessed product and lifestyle photography that moves product.",
    capabilities: ["Product Detail", "Campaign", "Lookbooks", "E-comm"],
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".services-heading",
        {
          opacity: 0,
          y: 80,
          filter: "blur(16px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Cards staggered reveal
      const serviceCards = gsap.utils.toArray<HTMLElement>(".service-card");
      serviceCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: -40,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 60%",
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
      id="services"
      className="relative w-full bg-black overflow-hidden"
      style={{ padding: "clamp(8rem, 16vh, 12rem) clamp(1rem, 4vw, 3rem)" }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Split: Massive typography left, scrollable cards right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Sticky heading */}
          <div className="md:sticky md:top-24 md:self-start">
            <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
              Services
            </span>

            <h2
              className="services-heading text-[clamp(2.5rem,7vw,5rem)] font-serif leading-[0.95] tracking-[-0.02em] text-white mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafting visual narratives with{" "}
              <span className="italic font-bold">technical precision</span>.
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-white/60 max-w-[40ch] mb-12">
              From product to plate, from pour to portrait — every project gets
              obsessive attention to detail and cinematic execution.
            </p>

            {/* CTA button-in-button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/10 text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:ring-white/20 active:scale-[0.98]"
            >
              <span className="text-sm font-medium tracking-wide">
                Start a Project
              </span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                ↗
              </span>
            </a>
          </div>

          {/* Right: Scrollable service cards */}
          <div ref={cardsRef} className="space-y-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="service-card group"
              >
                {/* Double-bezel card */}
                <div className="p-2 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]">
                  <div className="p-8 md:p-10 rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-white/[0.03] to-transparent">
                    {/* Number badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 ring-1 ring-white/10 text-white/40 text-sm font-medium mb-6 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white/60">
                      {service.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 transition-transform duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed mb-6 max-w-[50ch]">
                      {service.description}
                    </p>

                    {/* Capabilities pills */}
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white/90"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "SolÃ© Campaign",
    category: "Footwear",
    image: "/best shots/ladies shoe/High-end-shoe.webp",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    title: "Liquid Shadow",
    category: "Beverage",
    image: "/best shots/Beverage images/bev-macro.webp",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 3,
    title: "Street Sole",
    category: "Lifestyle",
    image: "/best shots/mens shoe/shoe-mens-campaign.webp",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: 4,
    title: "Hydro Blast",
    category: "Product",
    image: "/best shots/Product image/product-energy-shot.webp",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    id: 5,
    title: "Velvet CrÃ¨me",
    category: "Food",
    image: "/best shots/Food photo/food-cream-macro.webp",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    id: 6,
    title: "Bold Edit",
    category: "Campaign",
    image: "/best shots/new-images/new-product-bold.jpg",
    span: "md:col-span-4 md:row-span-1",
  },
];

export default function PortfolioGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".portfolio-card");
      
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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
      id="work"
      className="relative w-full bg-[#050505] overflow-hidden"
      style={{ padding: "clamp(6rem, 12vh, 10rem) clamp(1rem, 4vw, 3rem)" }}
    >
      {/* Radial gradient orb */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Eyebrow tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10">
          Featured Work
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Section heading */}
      <h2
        className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.95] tracking-[-0.02em] text-white mb-16 md:mb-24 max-w-[20ch]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Portfolio that <span className="italic font-bold">speaks</span> louder
        than words.
      </h2>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-[1600px] mx-auto">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`portfolio-card group relative ${item.span} col-span-1`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Double-bezel outer shell */}
            <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] p-1.5 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-white/20 group-hover:bg-white/[0.04]">
              {/* Inner core */}
              <div className="relative w-full h-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-black">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  priority={item.id <= 2}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category pill */}
                  <div
                    className="inline-flex items-center gap-2 w-max mb-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style={{
                      transform:
                        hoveredId === item.id
                          ? "translateY(0)"
                          : "translateY(12px)",
                      opacity: hoveredId === item.id ? 1 : 0.7,
                    }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-serif text-white mb-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style={{
                      transform:
                        hoveredId === item.id
                          ? "translateY(0)"
                          : "translateY(8px)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Arrow button-in-button */}
                  <button
                    className="inline-flex items-center gap-3 w-max px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-white text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/20 active:scale-[0.98]"
                    style={{
                      transform:
                        hoveredId === item.id
                          ? "translateY(0) translateX(0)"
                          : "translateY(12px) translateX(-8px)",
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                  >
                    View Project
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                      â†—
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-16 md:mt-24">
        <a
          href="#gallery"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/10 text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:ring-white/20 active:scale-[0.98]"
        >
          <span className="text-sm font-medium tracking-wide">
            Explore Full Archive
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
            â†’
          </span>
        </a>
      </div>
    </section>
  );
}



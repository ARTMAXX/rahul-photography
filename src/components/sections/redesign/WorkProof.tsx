"use client";

import { motion } from "motion/react";
import Image from "next/image";

/* ════════════════════════════════════════════════════════════════════
   WorkProof – "Proof through work"
   A curated proof strip of 6 campaigns (no thumbnail wall). Alternating
   editorial rows with index numbers, brief, and outcome per project.
   ════════════════════════════════════════════════════════════════════ */

interface Project {
  src: string;
  category: string;
  title: string;
  brief: string;
  outcome: string;
}

const projects: Project[] = [
  {
    src: "/best%20shots/Product%20image/product-watch-luxury.webp",
    category: "Product",
    title: "Luxury Watch — Campaign Hero",
    brief: "Macro metallic detail for a premium timepiece launch.",
    outcome: "Adopted as the campaign hero across paid media.",
  },
  {
    src: "/best%20shots/Food%20photo/food-biriyani.webp",
    category: "Food & Beverage",
    title: "Biriyani — Menu Hero",
    brief: "Texture-forward hero for a restaurant menu refresh.",
    outcome: "Menu update that lifted the dish's orders.",
  },
  {
    src: "/best%20shots/mens%20shoe/shoe-mens-white.webp",
    category: "Footwear",
    title: "White Sneaker — Clean Cutout",
    brief: "Studio cutout on white for marketplace use.",
    outcome: "Amazon/Flipkart-ready asset delivered same week.",
  },
  {
    src: "/best%20shots/mens%20shoe/shoe-mens-campaign.webp",
    category: "Campaigns",
    title: "Sneaker Campaign — Scene",
    brief: "Lifestyle campaign scene for a footwear brand.",
    outcome: "Seasonal campaign across retail + social.",
  },
  {
    src: "/best%20shots/Product%20image/product-serum.webp",
    category: "Product",
    title: "Bloom Skincare Serum",
    brief: "Glass-and-liquid study for a D2C serum launch.",
    outcome: "Used across launch email, ads and PDP.",
  },
  {
    src: "/best%20shots/Beverage%20images/bev-iced.webp",
    category: "Food & Beverage",
    title: "Iced Beverage — Condensation",
    brief: "Chilled glass with condensation detail.",
    outcome: "Refresh-launch asset for the bar menu.",
  },
];

export default function WorkProof() {
  return (
    <section id="work" className="relative w-full py-24 md:py-36 px-4 md:px-12 overflow-hidden bg-[#070707]">
      {/* Copper ambient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[900px] h-[900px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white uppercase">
            Selected Work
          </h2>
        </motion.div>

        {/* Campaign rows */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-12% 0px" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center"
              >
                {/* Image */}
                <div className={`md:col-span-7 ${flip ? "md:order-2" : "md:order-1"}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] aspect-[4/3] md:aspect-[16/10]">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Index plate */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/15" style={{ fontFamily: "Outfit, system-ui" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className={`md:col-span-5 ${flip ? "md:order-1 md:text-right" : "md:order-2"}`}>
                  <div className={`font-serif text-6xl md:text-7xl text-white/[0.08] leading-none select-none ${flip ? "md:text-right" : ""}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className={`mt-4 text-2xl md:text-4xl font-serif text-white leading-tight tracking-tight ${flip ? "md:text-right" : ""}`}>
                    {project.title}
                  </h3>
                  <p className={`mt-4 text-white/60 text-sm md:text-base leading-relaxed ${flip ? "md:ml-auto md:text-right" : ""}`} style={{ fontFamily: "Outfit, system-ui" }}>
                    {project.brief}
                  </p>
                  <div className={`mt-5 pt-5 border-t border-white/10 ${flip ? "md:ml-auto md:text-right" : ""}`}>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#e83b2c]/60" style={{ fontFamily: "Outfit, system-ui" }}>
                      Result
                    </p>
                    <p className="mt-2 text-white/70 text-sm md:text-base italic leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <a
            href="/gallery"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-[0.2em] transition-colors"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            View the full gallery
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
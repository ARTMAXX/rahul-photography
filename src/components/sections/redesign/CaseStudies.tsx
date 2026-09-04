"use client";

import { motion } from "motion/react";
import Image from "next/image";

/* ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
   CaseStudies  —  three flagship assignments, framed as challenge → work → result
   ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ */

interface Study {
  src: string;
  category: string;
  title: string;
  brief: string;
  outcome: string;
}

const studies: Study[] = [
  {
    src: "/opt/best%20shots/Product%20image/product-watch-luxury.webp",
    category: "Product · Campaign",
    title: "Luxury Watch — Campaign Hero",
    brief:
      "A premium timepiece launching into a crowded market needed a hero image with the weight of the product itself. The brief: make metal look expensive, macro-level.",
    outcome:
      "The final frame became the campaign hero across paid media — the single asset the brand bet the launch on.",
  },
  {
    src: "/opt/best%20shots/Food%20photo/food-biriyani.webp",
    category: "Food & Beverage · Menu",
    title: "Biriyani — Menu Hero",
    brief:
      "A restaurant refresh needed a menu image that made a 15-year-old dish look ordered-again. The ask was simple: texture you can almost smell.",
    outcome:
      "The updated menu lifted the dish's orders — the image did the selling, not the description.",
  },
  {
    src: "/opt/best%20shots/mens%20shoe/shoe-mens-white.webp",
    category: "Footwear · Marketplace",
    title: "White Sneaker — Clean Cutout",
    brief:
      "A D2C shoe label needed Amazon/Flipkart-ready assets: studio cutouts with flawless edges, consistent angle, and zero retouch-tell.",
    outcome:
      "Marketplace-compliant hero assets delivered — listed and live on both platforms the same week.",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative w-full py-24 md:py-36 px-4 md:px-12 overflow-hidden bg-[#070707]">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest" style={{ fontFamily: "Outfit, system-ui" }}>
            Case Studies
          </div>
          <h2 className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white max-w-[14ch]">
            From brief to <span className="text-[#e83b2c] italic">result.</span>
          </h2>
        </motion.div>

        {/* Study plates */}
        <div className="space-y-16 md:space-y-24">
          {studies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-12% 0px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch"
            >
              {/* Image */}
              <div className="md:col-span-7 group relative overflow-hidden rounded-2xl bg-white/[0.03] aspect-[4/3] md:aspect-[16/11]">
               <Image
                   src={study.src}
                   alt={`${study.title} - ${study.category} photography by Rahul Chanda`}
                   fill
                   sizes="(max-width: 768px) 100vw, 58vw"
                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                   loading={i === 0 ? "eager" : "lazy"}
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/15" style={{ fontFamily: "Outfit, system-ui" }}>
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="font-serif text-6xl md:text-7xl text-[#e83b2c]/25 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-4xl font-serif text-white leading-tight tracking-tight">
                    {study.title}
                  </h3>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: "Outfit, system-ui" }}>
                      Brief
                    </p>
                    <p className="mt-2 text-white/60 text-sm md:text-base leading-relaxed" style={{ fontFamily: "Outfit, system-ui" }}>
                      {study.brief}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#e83b2c]/60" style={{ fontFamily: "Outfit, system-ui" }}>
                      Result
                    </p>
                    <p className="mt-2 text-white/80 text-sm md:text-base italic leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 text-center"
        >
          <p className="text-white/40 text-sm" style={{ fontFamily: "Outfit, system-ui" }}>
            Want the full archive with every brief and result?
          </p>
          <a
            href="/gallery"
            className="group mt-3 inline-flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-[0.2em] transition-colors"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Open the gallery
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
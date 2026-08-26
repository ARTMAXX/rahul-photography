"use client";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   WorkProof – "Selected Work"
   Aceternity-style scroll timeline: brand-red beam draws down the left
   as you scroll; each campaign sticks its title while its proof card
   (image, brief, result) scrolls past. 6 curated campaigns.
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

import { motion } from "motion/react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

interface Project {
  src: string;
  category: string;
  title: string;
  brief: string;
  outcome: string;
}

const projects: Project[] = [
  {
    src: "/opt/best%20shots/Product%20image/product-watch-luxury.webp",
    category: "Product",
    title: "Luxury Watch — Campaign Hero",
    brief: "Macro metallic detail for a premium timepiece launch.",
    outcome: "Adopted as the campaign hero across paid media.",
  },
  {
    src: "/opt/best%20shots/Food%20photo/food-biriyani.webp",
    category: "Food & Beverage",
    title: "Biriyani — Menu Hero",
    brief: "Texture-forward hero for a restaurant menu refresh.",
    outcome: "Menu update that lifted the dish's orders.",
  },
  {
    src: "/opt/best%20shots/mens%20shoe/shoe-mens-white.webp",
    category: "Footwear",
    title: "White Sneaker — Clean Cutout",
    brief: "Studio cutout on white for marketplace use.",
    outcome: "Amazon/Flipkart-ready asset delivered same week.",
  },
  {
    src: "/opt/best%20shots/mens%20shoe/shoe-mens-campaign.webp",
    category: "Campaigns",
    title: "Sneaker Campaign — Scene",
    brief: "Lifestyle campaign scene for a footwear brand.",
    outcome: "Seasonal campaign across retail + social.",
  },
  {
    src: "/opt/best%20shots/Product%20image/product-serum.webp",
    category: "Product",
    title: "Bloom Skincare Serum",
    brief: "Glass-and-liquid study for a D2C serum launch.",
    outcome: "Used across launch email, ads and PDP.",
  },
  {
    src: "/opt/best%20shots/Beverage%20images/bev-iced.webp",
    category: "Food & Beverage",
    title: "Iced Beverage — Condensation",
    brief: "Chilled glass with condensation detail.",
    outcome: "Refresh-launch asset for the bar menu.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div>
      {/* Image */}
      <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] aspect-[4/3] md:aspect-[16/10]">
        <Image
          src={project.src}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Category chip */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/15"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Brief */}
      <p
        className="mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-[52ch]"
        style={{ fontFamily: "Outfit, system-ui" }}
      >
        {project.brief}
      </p>

      {/* Result */}
      <div className="mt-5 pt-5 border-t border-white/10">
        <p
            className="text-[10px] uppercase tracking-[0.25em] text-[#e83b2c]"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          Result
        </p>
        <p className="mt-2 text-white/70 text-sm md:text-base italic leading-relaxed max-w-[52ch]">
          {project.outcome}
        </p>
      </div>
    </div>
  );
}

export default function WorkProof() {
  return (
    <section
      id="work"
      className="relative w-full py-24 md:py-36 px-4 md:px-12 overflow-hidden bg-[#070707]"
    >
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
          <p
            className="mt-4 text-white/50 text-sm md:text-base max-w-[52ch] leading-relaxed"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Six assignments, one throughline — the product comes first, and it
            has to look like the obvious choice.
          </p>
        </motion.div>

        {/* Scroll timeline */}
        <Timeline
          data={projects.map((project, i) => ({
            title: (
              <span className="inline-flex items-baseline gap-3">
                <span className="text-base md:text-lg text-[#e83b2c] font-sans tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.title}
              </span>
            ),
            content: <ProjectCard project={project} index={i} />,
          }))}
        />

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
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

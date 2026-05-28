"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  { year: "2026", client: "MOLTON BROWN", title: "STILL LIFE PRODUCT", category: "COMMERCIAL" },
  { year: "2026", client: "ICED DRINKS", title: "BEVERAGE STORY", category: "COMMERCIAL" },
  { year: "2025", client: "CURRY STUDY", title: "TEXTURE & LIGHT", category: "FOOD" },
  { year: "2025", client: "LUXURY SANDAL", title: "QUIET ELEGANCE", category: "FASHION" },
];

export default function Projects() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-black/40">
            SELECTED WORK
          </span>
          <h2 className="text-[12vw] font-serif leading-[0.9] tracking-tighter mt-6">
            CRAFTING <br /> VISUALS
          </h2>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-[80px_1fr_auto_auto] items-center border-t border-black/10 py-10"
            >
              <div className="text-[10px] font-mono tracking-tighter text-black/40">
                {project.year}
              </div>
              <div>
                <h3 className="text-4xl font-serif tracking-tighter">
                  {project.client}
                </h3>
                <p className="text-[10px] font-sans text-black/50 mt-1 uppercase tracking-[0.2em]">{project.title}</p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-black/40 px-12">
                {project.category}
              </div>
              <div className="text-[10px] font-sans underline underline-offset-4 cursor-pointer hover:text-black/60 uppercase tracking-widest">
                VIEW CASE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

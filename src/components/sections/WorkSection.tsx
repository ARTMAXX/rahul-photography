"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  { year: "2026", client: "MOLTON BROWN", title: "STILL LIFE PRODUCT", category: "COMMERCIAL", src: "/best shots/Product image/product-molton-brown.webp" },
  { year: "2026", client: "ICED DRINKS", title: "BEVERAGE STORY", category: "COMMERCIAL", src: "/best shots/Beverage images/three-iced-drinks.webp" },
  { year: "2025", client: "CURRY STUDY", title: "TEXTURE & LIGHT", category: "FOOD", src: "/best shots/Food photo/food-curry.webp" },
  { year: "2025", client: "LUXURY SANDAL", title: "QUIET ELEGANCE", category: "FASHION", src: "/best shots/ladies shoe/High-end-shoe.webp" },
];

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="bg-white text-black py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        <div className="mb-24">
          <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-black/40">
            Selected Work
          </span>
          <h2 className="text-[12vw] md:text-[8vw] font-serif leading-[0.8] tracking-tighter mt-6">
            CRAFTING <br /> VISUALS
          </h2>
        </div>

        <div className="flex flex-col relative">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-center border-b border-black/10 py-12 cursor-pointer transition-colors duration-500 hover:bg-black/5"
            >
              <div className="text-[10px] font-mono tracking-tighter text-black/30 pr-12">
                {project.year}
              </div>
              <div className="pr-12">
                <h3 className="text-4xl md:text-7xl font-serif tracking-tighter transition-all duration-300 group-hover:pl-8">
                  {project.client}
                </h3>
                <p className="text-sm font-sans text-black/50 mt-2 uppercase tracking-[0.2em]">{project.title}</p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-black/30">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Image Preview */}
        <AnimatePresence>
          {hoveredProject !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="fixed top-1/3 right-10 w-[300px] h-[400px] z-50 pointer-events-none hidden md:block"
            >
              <img 
                src={PROJECTS[hoveredProject].src} 
                alt={PROJECTS[hoveredProject].client}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

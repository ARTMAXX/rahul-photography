"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ── Curated Archive ──
const ITEMS = [
  {
    src: "/best shots/Product image/product-watch-luxury.webp",
    title: "Chrono",
    category: "Product",
    year: "2025",
    aspect: "portrait" as const,
    desc: "Luxury timepiece campaign — precision meets editorial warmth.",
  },
  {
    src: "/best shots/Beverage images/bev-macro.webp",
    title: "Crystal",
    category: "Beverage",
    year: "2025",
    aspect: "landscape" as const,
    desc: "Cold-brew editorial. Ice, glass, and the geometry of light through liquid.",
  },
  {
    src: "/best shots/Food photo/food-cream-macro.webp",
    title: "Velvet",
    category: "Food",
    year: "2025",
    aspect: "landscape" as const,
    desc: "Dessert collection for a five-star patisserie. Temperature, texture, tension.",
  },
  {
    src: "/best shots/ladies shoe/shoe-ladies-heels.webp",
    title: "Silhouette",
    category: "Fashion",
    year: "2026",
    aspect: "portrait" as const,
    desc: "Spring lookbook — movement, drape, and the architecture of form.",
  },
  {
    src: "/best shots/Product image/product-headphone.webp",
    title: "Pulse",
    category: "Product",
    year: "2025",
    aspect: "square" as const,
    desc: "AudioTech flagship launch. Industrial precision meets editorial depth.",
  },
  {
    src: "/best shots/Food photo/food-dish.webp",
    title: "Ember",
    category: "Food",
    year: "2025",
    aspect: "landscape" as const,
    desc: "Charcoal-grill narrative for Restaurant Noir. Smoke as atmosphere.",
  },
  {
    src: "/best shots/Product image/product-watch-dark.webp",
    title: "Nocturne",
    category: "Product",
    year: "2025",
    aspect: "portrait" as const,
    desc: "Dark-field watch study. Light as the only subject.",
  },
];

export default function RedesignedGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof ITEMS[0] | null>(null);

  return (
    <section className="relative w-full bg-[#050505] py-32 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-24 italic">The Archive</h2>
        
        <div className="space-y-24">
          {ITEMS.map((item, i) => (
            <div 
              key={i} 
              className="group cursor-pointer flex flex-col md:flex-row items-center gap-12"
              onClick={() => setSelectedImage(item)}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-sm">
                <div className={`relative ${item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c8a84b] font-medium">
                    {item.category} · {item.year}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-white">{item.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{item.desc}</p>
                <button className="text-sm uppercase tracking-widest text-white/40 group-hover:text-white transition-colors border-b border-white/20 pb-1">
                    View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative p-6 bg-white/5 rounded-2xl ring-1 ring-white/10"
              style={{
                width: "auto",
                maxWidth: "50vw",
                maxHeight: "50vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

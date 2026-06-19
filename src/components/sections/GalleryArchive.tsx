"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const CATEGORIES = ["All", "Product", "Beverage", "Food", "Footwear"];

const GALLERY_ITEMS = [
  { id: 1, src: "/best shots/Product image/product-watch-luxury.webp", category: "Product", title: "Chrono Luxury" },
  { id: 2, src: "/best shots/Beverage images/bev-macro.webp", category: "Beverage", title: "Crystal Pour" },
  { id: 3, src: "/best shots/Food photo/food-cream-macro.webp", category: "Food", title: "Velvet Cream" },
  { id: 4, src: "/best shots/ladies shoe/shoe-ladies-heels.webp", category: "Footwear", title: "Sky Heel" },
  { id: 5, src: "/best shots/Product image/product-headphone.webp", category: "Product", title: "Audio Gold" },
  { id: 6, src: "/best shots/Beverage images/bev-iced.webp", category: "Beverage", title: "Frost Glass" },
  { id: 7, src: "/best shots/Food photo/food-biriyani.webp", category: "Food", title: "Royal Feast" },
  { id: 8, src: "/best shots/mens shoe/shoe-mens-campaign.webp", category: "Footwear", title: "Street Edge" },
];

export default function GalleryArchive() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-zinc-950 dark:text-zinc-50 mb-6">
              Curated <span className="italic font-serif">Archives</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              A precise collection of commercial works. Shot with intent, framed with purpose.
            </p>
          </div>
          <nav className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeFilter === cat
                    ? "text-zinc-950 dark:text-zinc-50 border-b-2 border-zinc-950 dark:border-zinc-50"
                    : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden bg-zinc-200 dark:bg-zinc-800 ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <p className="text-zinc-50 text-xs uppercase tracking-widest">{item.category}</p>
                <h3 className="text-2xl font-light text-zinc-50">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Lightbox from "@/components/Lightbox";

type Category =
  | "All"
  | "Product"
  | "Food & Beverage"
  | "Footwear"
  | "Campaigns";

interface GalleryItem {
  src: string;
  category: Exclude<Category, "All">;
  ratio: string;
}

const items: GalleryItem[] = [
  // ── PRODUCT ──
  { src: "/best%20shots/Product%20image/product-watch-luxury.webp", category: "Product", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Product%20image/product-headphone.webp", category: "Product", ratio: "aspect-square" },
  { src: "/best%20shots/Product%20image/product-serum.webp", category: "Product", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Product%20image/product-molton-brown.webp", category: "Product", ratio: "aspect-[3/4]" },
  { src: "/best%20shots/Product%20image/product-bodywash.webp", category: "Product", ratio: "aspect-square" },
  { src: "/best%20shots/Product%20image/product-hairspray.webp", category: "Product", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Product%20image/product-energy-shot.webp", category: "Product", ratio: "aspect-square" },
  { src: "/best%20shots/Product%20image/product-watch-dark.webp", category: "Product", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Product%20image/headphone-jbl.png", category: "Product", ratio: "aspect-square" },
  { src: "/best%20shots/Product%20image/energy-drink-design.png", category: "Product", ratio: "aspect-[3/4]" },

  // ── FOOD & BEVERAGE ──
  { src: "/best%20shots/Food%20photo/food-biriyani.webp", category: "Food & Beverage", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Food%20photo/food-buffet.webp", category: "Food & Beverage", ratio: "aspect-[16/10]" },
  { src: "/best%20shots/Food%20photo/food-cream-macro.webp", category: "Food & Beverage", ratio: "aspect-square" },
  { src: "/best%20shots/Food%20photo/food-mutton.webp", category: "Food & Beverage", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Food%20photo/food-curry.webp", category: "Food & Beverage", ratio: "aspect-square" },
  { src: "/best%20shots/Beverage%20images/bev-iced.webp", category: "Food & Beverage", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Beverage%20images/bev-macro.webp", category: "Food & Beverage", ratio: "aspect-square" },
  { src: "/best%20shots/Beverage%20images/beverage-macro.png", category: "Food & Beverage", ratio: "aspect-[3/4]" },
  { src: "/best%20shots/Beverage%20images/iced-drinks.png", category: "Food & Beverage", ratio: "aspect-[16/10]" },

  // ── FOOTWEAR ──
  { src: "/best%20shots/ladies%20shoe/shoe-ladies-mule.webp", category: "Footwear", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/ladies%20shoe/shoe-ladies-heels.webp", category: "Footwear", ratio: "aspect-square" },
  { src: "/best%20shots/ladies%20shoe/High-end-shoe.webp", category: "Footwear", ratio: "aspect-[3/4]" },
  { src: "/best%20shots/mens%20shoe/shoe-mens-white.webp", category: "Footwear", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/mens%20shoe/shoe-mens-duo.webp", category: "Footwear", ratio: "aspect-square" },
  { src: "/best%20shots/mens%20shoe/modern-athletic-sneaker.webp", category: "Footwear", ratio: "aspect-[16/10]" },

  // ── CAMPAIGNS ──
  { src: "/best%20shots/ADs/ad-culinary.webp", category: "Campaigns", ratio: "aspect-square" },
  { src: "/best%20shots/ADs/ad-popout.webp", category: "Campaigns", ratio: "aspect-[4/5]" },
  { src: "/best%20shots/Food%20photo/food-chicken.webp", category: "Campaigns", ratio: "aspect-[3/4]" },
  { src: "/best%20shots/mens%20shoe/shoe-mens-campaign.webp", category: "Campaigns", ratio: "aspect-[16/10]" },
];

const categories: Category[] = ["All", "Product", "Food & Beverage", "Footwear", "Campaigns"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active]
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Keyboard: close lightbox with Escape
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    },
    [closeLightbox]
  );

  return (
    <main
      className="min-h-screen bg-[#070707] text-[#f0f0f0] pt-32 pb-28"
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <div className="mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[720px]"
        >
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest" style={{ fontFamily: "Outfit, system-ui" }}>
            Gallery
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mt-6 text-white">
            Selected <span className="italic text-[#e83b2c]">Work</span>
          </h1>
          <p className="mt-6 text-white/50 text-base leading-relaxed max-w-[520px]" style={{ fontFamily: "Outfit, system-ui" }}>
            A curated archive of commercial shoots — product, food &amp; beverage,
            footwear, and campaign imagery crafted for brands.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "bg-[#e83b2c] text-white font-medium"
                    : "border border-white/10 text-white/60 hover:text-white hover:border-white/25"
                }`}
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {filtered.map((item, i) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightbox(item.src)}
              className={`relative w-full overflow-hidden bg-white/[0.03] rounded-lg group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e83b2c]/60 ${item.ratio}`}
              aria-label={`View image: ${item.src.split("/").pop()?.split(".")[0]}`}
            >
              <Image
                src={item.src}
                alt={`Commercial photography — ${item.category}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading={i < 6 ? "eager" : "lazy"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[#ffffff] text-xs uppercase tracking-widest" style={{ fontFamily: "Outfit, system-ui" }}>
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <p className="mt-16 text-center text-white/60 text-sm" style={{ fontFamily: "Outfit, system-ui" }}>
          Want to see the full archive?{" "}
          <a
            href="mailto:rahulchandaphotography@gmail.com"
            className="text-[#e83b2c] underline underline-offset-4 hover:text-[#f0523f] transition-colors"
          >
            Request the complete portfolio
          </a>
        </p>
      </div>

      <Lightbox imageUrl={lightbox} onClose={closeLightbox} />
    </main>
  );
}

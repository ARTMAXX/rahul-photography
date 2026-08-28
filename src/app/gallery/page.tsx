"use client";

import { useState, useEffect } from "react";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { CinematicFooter } from "@/components/ui/motion-footer";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, url: "/opt/best shots/Product image/product-watch-luxury.webp", title: "Luxury Watch — Campaign Hero", category: "Product" },
  { id: 2, url: "/opt/best shots/Product image/product-headphone.webp", title: "AudioTech Headphones", category: "Product" },
  { id: 3, url: "/opt/best shots/Product image/product-serum.webp", title: "Bloom Skincare Serum", category: "Product" },
  { id: 4, url: "/opt/best shots/Product image/product-molton-brown.webp", title: "Molton Brown — Packaging", category: "Product" },
  { id: 5, url: "/opt/best shots/Product image/product-energy-shot.webp", title: "Energy Drink Splash", category: "Product" },
  { id: 6, url: "/opt/best shots/Product image/product-bodywash.webp", title: "Body Wash Product", category: "Product" },
  { id: 7, url: "/opt/best shots/Product image/energy-drink-design.webp", title: "Energy Drink Design", category: "Product" },
  { id: 8, url: "/opt/best shots/Product image/product-hairspray.webp", title: "Hair Spray Product", category: "Product" },
  { id: 9, url: "/opt/best shots/Product image/product-watch-dark.webp", title: "Dark Watch Detail", category: "Product" },
  { id: 10, url: "/opt/best shots/Food photo/food-biriyani.webp", title: "Biriyani — Menu Hero", category: "Food" },
  { id: 11, url: "/opt/best shots/Food photo/food-chicken.webp", title: "Crispy Chicken", category: "Food" },
  { id: 12, url: "/opt/best shots/Food photo/food-curry.webp", title: "Traditional Curry", category: "Food" },
  { id: 13, url: "/opt/best shots/Food photo/food-mutton.webp", title: "Mutton Special", category: "Food" },
  { id: 14, url: "/opt/best shots/Food photo/food-buffet.webp", title: "Food Buffet", category: "Food" },
  { id: 15, url: "/opt/best shots/Food photo/food-cream-macro.webp", title: "Cream Macro Detail", category: "Food" },
  { id: 16, url: "/opt/best shots/Beverage images/bev-iced.webp", title: "Iced Beverage — Condensation", category: "Beverage" },
  { id: 17, url: "/opt/best shots/Beverage images/bev-macro.webp", title: "Beverage Macro Detail", category: "Beverage" },
  { id: 18, url: "/opt/best shots/Beverage images/bev-toast.webp", title: "Celebration Toast", category: "Beverage" },
  { id: 19, url: "/opt/best shots/Beverage images/beverage-macro.webp", title: "Drink Detail Shot", category: "Beverage" },
  { id: 20, url: "/opt/best shots/Beverage images/iced-drinks.webp", title: "Iced Drinks Lineup", category: "Beverage" },
  { id: 21, url: "/opt/best shots/Beverage images/three-iced-drinks.webp", title: "Three Iced Beverages", category: "Beverage" },
  { id: 22, url: "/opt/best shots/mens shoe/shoe-mens-white.webp", title: "White Sneaker — Clean Cutout", category: "Footwear" },
  { id: 23, url: "/opt/best shots/mens shoe/shoe-mens-campaign.webp", title: "Sneaker Campaign Scene", category: "Footwear" },
  { id: 24, url: "/opt/best shots/mens shoe/modern-athletic-sneaker.webp", title: "Modern Athletic Sneaker", category: "Footwear" },
  { id: 25, url: "/opt/best shots/ladies shoe/High-end-shoe.webp", title: "High-End Ladies Shoe", category: "Footwear" },
  { id: 26, url: "/opt/best shots/ladies shoe/shoe-ladies-heels.webp", title: "Ladies Heels", category: "Footwear" },
  { id: 27, url: "/opt/best shots/ladies shoe/shoe-ladies-mule.webp", title: "Ladies Mule", category: "Footwear" },
  { id: 28, url: "/opt/best shots/ADs/ad-culinary.webp", title: "Culinary Campaign", category: "Campaigns" },
  { id: 29, url: "/opt/best shots/ADs/ad-popout.webp", title: "Pop-out Ad Design", category: "Campaigns" },
  { id: 30, url: "/opt/best shots/new-images/new-product-bold.webp", title: "Bold Product Shot", category: "Campaigns" },
  { id: 31, url: "/opt/best shots/new-images/new-product-blast.webp", title: "Dynamic Blast", category: "Campaigns" },
  { id: 32, url: "/opt/best shots/new-images/new-juice-01.webp", title: "Fresh Juice Campaign", category: "Campaigns" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [columns, setColumns] = useState(2);
  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  // Responsive column count
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w >= 1024) setColumns(3);
      else if (w >= 640) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-end px-4 md:px-12 pb-16 pt-36 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(232,59,44,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white max-w-[16ch]">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-6 leading-relaxed">
            Six assignments, one throughline — the product comes first, and it has to look like the obvious choice.
          </p>
        </div>
      </section>

      {/* Filter buttons */}
      <div className="px-4 md:px-12 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-[#e83b2c] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ─── MASONRY IMAGE GRID using 21st.dev InView component ─── */}
      <div className="px-4 md:px-12 pb-24">
        <InView
          key={filter}
          viewOptions={{ once: true, margin: "0px 0px -200px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          <div style={{ columnCount: columns, columnGap: "16px" }}>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ breakInside: "avoid", marginBottom: "16px" }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-auto block rounded-lg transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 rounded-lg">
                  <h3 className="text-white font-medium text-sm mb-2 text-center drop-shadow-md">{image.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#e83b2c] text-white text-[10px] uppercase tracking-wider rounded-full">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-sm">No images found in this category</p>
        </div>
      )}

      <CinematicFooter />
    </main>
  );
}

"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import Lightbox from "@/components/Lightbox";
import { absoluteUrl } from "@/lib/site";

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
  title: string;
  brief: string;
  outcome: string;
  alt: string;
}

const items: GalleryItem[] = [
  // ──── PRODUCT ────
  {
    src: "/opt/best%20shots/Product%20image/product-watch-luxury.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Luxury Watch — Campaign Hero",
    brief: "Macro metallic detail for a premium timepiece launch.",
    outcome: "Adopted as the campaign hero across paid media.",
    alt: "Luxury watch macro detail shot with studio lighting by Rahul Chanda - commercial product photographer",
  },
  {
    src: "/opt/best%20shots/Product%20image/product-headphone.webp",
    category: "Product",
    ratio: "aspect-square",
    title: "AudioTech Headphones",
    brief: "Flagship e-commerce hero for a premium audio brand.",
    outcome: "Became the PDP hero image for the launch.",
    alt: "Premium audio headphones product photography - high-end commercial packshot",
  },
  {
    src: "/opt/best%20shots/Product%20image/product-serum.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Bloom Skincare Serum",
    brief: "Glass-and-liquid study for a D2C serum launch.",
    outcome: "Used across launch email, ads and PDP.",
    alt: "Skincare serum bottle product photography - glass and liquid macro detail",
  },
  {
    src: "/opt/best%20shots/Product%20image/product-molton-brown.webp",
    category: "Product",
    ratio: "aspect-[3/4]",
    title: "Molton Brown — Packaging",
    brief: "Luxury body-care packaging, hero cutouts.",
    outcome: "Consistent marketplace + D2C product pages.",
    alt: "Luxury body care product packaging photography - premium e-commerce cutout",
  },

  // ──── FOOD & BEVERAGE ────
  {
    src: "/opt/best%20shots/Food%20photo/food-biriyani.webp",
    category: "Food & Beverage",
    ratio: "aspect-[4/5]",
    title: "Biriyani — Menu Hero",
    brief: "Texture-forward hero for a restaurant menu refresh.",
    outcome: "Menu update that lifted the dish's orders.",
    alt: "Biryani food photography with steaming rice texture detail - restaurant menu hero shot",
  },
  {
    src: "/opt/best%20shots/Food%20photo/food-coffee.webp",
    category: "Food & Beverage",
    ratio: "aspect-square",
    title: "Café Morning — Atmosphere",
    brief: "Moody coffee setup for a Landour café's social presence.",
    outcome: "Posted once, drove foot traffic for an entire season.",
    alt: "Coffee shop morning photography - steaming beverage with morning light atmosphere",
  },
  {
    src: "/opt/best%20shots/Food%20photo/food-sourdough.webp",
    category: "Food & Beverage",
    ratio: "aspect-[5/4]",
    title: "Sourdough Cross-Section",
    brief: "Artisanal bread detail for a bakery brand.",
    outcome: "Featured on all packaging and marketing collateral.",
    alt: "Artisanal sourdough bread cross-section photography - texture and crumb detail",
  },

  // ──── FOOTWEAR ────
  {
    src: "/opt/best%20shots/mens%20shoe/shoe-mens-white.webp",
    category: "Footwear",
    ratio: "aspect-square",
    title: "White Sneaker — Clean Cutout",
    brief: "Studio cutout on white for marketplace use.",
    outcome: "Amazon/Flipkart-ready asset delivered same week.",
    alt: "White sneaker shoe product photography - e-commerce clean white background cutout",
  },
  {
    src: "/opt/best%20shots/footwear/shoe-heel-black.webp",
    category: "Footwear",
    ratio: "aspect-[3/4]",
    title: "Black Heel — Fashion Detail",
    brief: "Close-up for a luxury footwear lookbook.",
    outcome: "Feature image for seasonal campaign.",
    alt: "Black heel shoe luxury product photography - fashion footwear macro detail",
  },

  // ──── CAMPAIGNS ────
  {
    src: "/opt/best%20shots/campaigns/campaign-watch.webp",
    category: "Campaigns",
    ratio: "aspect-[16/9]",
    title: "Timepiece Campaign — Hero",
    brief: "Art-directed hero for a luxury watch brand launch.",
    outcome: "Used across print, digital, and OOH.",
    alt: "Luxury watch advertising campaign photography - premium brand hero image",
  },
  {
    src: "/opt/best%20shots/campaigns/campaign-lifestyle.webp",
    category: "Campaigns",
    ratio: "aspect-[4/5]",
    title: "Lifestyle Brand Campaign",
    brief: "Lifestyle scene for an e-commerce brand identity.",
    outcome: "Homepage hero and paid media primary visual.",
    alt: "Lifestyle product campaign photography - brand advertising hero scene",
  },
];

// ════════════════════════════════════════════════════════════════════
// GALLERY PAGE SCHEMA (ImageGallery + CollectionPage)
// ════════════════════════════════════════════════════════════════════
const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": absoluteUrl("/gallery"),
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": absoluteUrl("/gallery"),
      "name": "Commercial Photography Portfolio - Rahul Chanda",
      "description":
        "Gallery of commercial product, food & beverage, footwear, and campaign photography by Rahul Chanda. Professional high-end photography for brands worldwide.",
      "image": items.slice(0, 4).map((item) => ({
        "@type": "ImageObject",
        "url": absoluteUrl(item.src),
        "name": item.title,
        "description": item.brief,
      })),
    },
    {
      "@type": "ImageGallery",
      "@id": absoluteUrl("/gallery#gallery"),
      "name": "Photography Portfolio",
      "associatedMedia": items.map((item) => ({
        "@type": "ImageObject",
        "url": absoluteUrl(item.src),
        "name": item.title,
        "description": item.brief,
        "encodingFormat": "image/webp",
      })),
    },
  ],
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categories: Category[] = ["All", "Product", "Food & Beverage", "Footwear", "Campaigns"];

  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
        strategy="afterInteractive"
      />

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-48 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-6">
            Commercial <span className="italic text-[#e83b2c]">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl">
            A curated collection of commercial product, food & beverage, footwear, and campaign photography for brands across India and internationally.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`group cursor-pointer overflow-hidden rounded-lg ${item.ratio}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative w-full h-full bg-white/5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-white/60 mb-2">{item.category}</p>
                      <h3 className="text-lg font-serif text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <Lightbox
          items={filteredItems}
          startIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </main>
  );
}

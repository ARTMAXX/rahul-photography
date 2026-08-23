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
  title: string;
  brief: string;
  outcome: string;
}

const items: GalleryItem[] = [
  // ── PRODUCT ──
  {
    src: "/best%20shots/Product%20image/product-watch-luxury.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Luxury Watch — Campaign Hero",
    brief: "Macro metallic detail for a premium timepiece launch.",
    outcome: "Adopted as the campaign hero across paid media.",
  },
  {
    src: "/best%20shots/Product%20image/product-headphone.webp",
    category: "Product",
    ratio: "aspect-square",
    title: "AudioTech Headphones",
    brief: "Flagship e-commerce hero for a premium audio brand.",
    outcome: "Became the PDP hero image for the launch.",
  },
  {
    src: "/best%20shots/Product%20image/product-serum.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Bloom Skincare Serum",
    brief: "Glass-and-liquid study for a D2C serum launch.",
    outcome: "Used across launch email, ads and PDP.",
  },
  {
    src: "/best%20shots/Product%20image/product-molton-brown.webp",
    category: "Product",
    ratio: "aspect-[3/4]",
    title: "Molton Brown — Packaging",
    brief: "Luxury body-care packaging, hero cutouts.",
    outcome: "Consistent marketplace + D2C product pages.",
  },
  {
    src: "/best%20shots/Product%20image/product-bodywash.webp",
    category: "Product",
    ratio: "aspect-square",
    title: "Body Wash — Studio Cutout",
    brief: "High-key cutout for an Amazon-ready listing.",
    outcome: "Marketplace-compliant asset delivered same week.",
  },
  {
    src: "/best%20shots/Product%20image/product-hairspray.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Hairspray — Detail Series",
    brief: "Aerosol detail study with controlled highlights.",
    outcome: "Fed the brand's social and PDP content library.",
  },
  {
    src: "/best%20shots/Product%20image/product-energy-shot.webp",
    category: "Product",
    ratio: "aspect-square",
    title: "Energy Shot — Bold Bottle",
    brief: "High-energy bottle shot for a functional drink.",
    outcome: "Anchor visual for the new-can announcement.",
  },
  {
    src: "/best%20shots/Product%20image/product-watch-dark.webp",
    category: "Product",
    ratio: "aspect-[4/5]",
    title: "Watch — Dark Glass",
    brief: "Low-key luxury watch on black glass.",
    outcome: "Editorial asset for the evening campaign.",
  },
  {
    src: "/best%20shots/Product%20image/headphone-jbl.webp",
    category: "Product",
    ratio: "aspect-square",
    title: "JBL Headphones — Lifestyle",
    brief: "Lifestyle product imagery for a consumer electronics brand.",
    outcome: "Used on PDP, social and retailer listings.",
  },
  {
    src: "/best%20shots/Product%20image/energy-drink-design.webp",
    category: "Product",
    ratio: "aspect-[3/4]",
    title: "Energy Drink — Design Series",
    brief: "Frozen splash for a can redesign launch.",
    outcome: "Launch visual system rolled out across platforms.",
  },

  // ── FOOD & BEVERAGE ──
  {
    src: "/best%20shots/Food%20photo/food-biriyani.webp",
    category: "Food & Beverage",
    ratio: "aspect-[4/5]",
    title: "Biriyani — Menu Hero",
    brief: "Texture-forward hero for a restaurant menu refresh.",
    outcome: "Menu update that lifted the dish's orders.",
  },
  {
    src: "/best%20shots/Food%20photo/food-buffet.webp",
    category: "Food & Beverage",
    ratio: "aspect-[16/10]",
    title: "Buffet — Wide Staging",
    brief: "Wide staged spread for a hotel buffet campaign.",
    outcome: "Campaign imagery for website and booking ads.",
  },
  {
    src: "/best%20shots/Food%20photo/food-cream-macro.webp",
    category: "Food & Beverage",
    ratio: "aspect-square",
    title: "Cream — Macro Texture",
    brief: "Macro dessert texture study.",
    outcome: "Social-first asset for the pastry launch.",
  },
  {
    src: "/best%20shots/Food%20photo/food-mutton.webp",
    category: "Food & Beverage",
    ratio: "aspect-[4/5]",
    title: "Mutton — Rustic Styling",
    brief: "Rustic North-Indian dish in warm light.",
    outcome: "Menu + Instagram asset for the kitchen.",
  },
  {
    src: "/best%20shots/Food%20photo/food-curry.webp",
    category: "Food & Beverage",
    ratio: "aspect-square",
    title: "Curry — Steam & Colour",
    brief: "Fresh steam captured in controlled light.",
    outcome: "Hero for the restaurant's delivery listing.",
  },
  {
    src: "/best%20shots/Beverage%20images/bev-iced.webp",
    category: "Food & Beverage",
    ratio: "aspect-[4/5]",
    title: "Iced Beverage — Condensation",
    brief: "Chilled glass with condensation detail.",
    outcome: "Refresh-launch asset for the bar menu.",
  },
  {
    src: "/best%20shots/Beverage%20images/bev-macro.webp",
    category: "Food & Beverage",
    ratio: "aspect-square",
    title: "Beverage Macro — Bubbles",
    brief: "Macro carbonation study.",
    outcome: "Texture library for the brand's creative team.",
  },
  {
    src: "/best%20shots/Beverage%20images/beverage-macro.png",
    category: "Food & Beverage",
    ratio: "aspect-[3/4]",
    title: "Splash Macro — Orange",
    brief: "High-speed splash with coloured liquid.",
    outcome: "Hero visual for the beverage campaign.",
  },
  {
    src: "/best%20shots/Beverage%20images/iced-drinks.png",
    category: "Food & Beverage",
    ratio: "aspect-[16/10]",
    title: "Iced Drinks — Lineup",
    brief: "Lineup in natural light for a cafe menu.",
    outcome: "Website + social set for the cafe brand.",
  },

  // ── FOOTWEAR ──
  {
    src: "/best%20shots/ladies%20shoe/shoe-ladies-mule.webp",
    category: "Footwear",
    ratio: "aspect-[4/5]",
    title: "Ladies Mule — Side Study",
    brief: "Elegant side profile on a neutral backdrop.",
    outcome: "PDP hero for the D2C shoe label.",
  },
  {
    src: "/best%20shots/ladies%20shoe/shoe-ladies-heels.webp",
    category: "Footwear",
    ratio: "aspect-square",
    title: "Heels — High Angle",
    brief: "Dramatic high-angle heels shot.",
    outcome: "Campaign image for the seasonal drop.",
  },
  {
    src: "/best%20shots/ladies%20shoe/High-end-shoe.webp",
    category: "Footwear",
    ratio: "aspect-[3/4]",
    title: "Premium Loafer — Editorial",
    brief: "Editorial-grade loafer with sculpted light.",
    outcome: "Luxury-positioning asset for the brand.",
  },
  {
    src: "/best%20shots/mens%20shoe/shoe-mens-white.webp",
    category: "Footwear",
    ratio: "aspect-[4/5]",
    title: "White Sneaker — Clean Cutout",
    brief: "Studio cutout on white for marketplace use.",
    outcome: "Amazon/Flipkart-ready asset.",
  },
  {
    src: "/best%20shots/mens%20shoe/shoe-mens-duo.webp",
    category: "Footwear",
    ratio: "aspect-square",
    title: "Sneaker Duo — Packshot",
    brief: "Pair packshot with soft shadow.",
    outcome: "Product-page set for the launch.",
  },
  {
    src: "/best%20shots/mens%20shoe/modern-athletic-sneaker.webp",
    category: "Footwear",
    ratio: "aspect-[16/10]",
    title: "Athletic Sneaker — Motion",
    brief: "Dynamic angle for a performance feel.",
    outcome: "Launch visual across social and PDP.",
  },

  // ── CAMPAIGNS ──
  {
    src: "/best%20shots/ADs/ad-culinary.webp",
    category: "Campaigns",
    ratio: "aspect-square",
    title: "Culinary Campaign — Flat Lay",
    brief: "Art-directed flat lay for an F&B campaign.",
    outcome: "Multi-platform campaign assets.",
  },
  {
    src: "/best%20shots/ADs/ad-popout.webp",
    category: "Campaigns",
    ratio: "aspect-[4/5]",
    title: "Pop-Out Product Ad",
    brief: "Product pop-out composition for paid ads.",
    outcome: "Static ad creative that held up at scale.",
  },
  {
    src: "/best%20shots/Food%20photo/food-chicken.webp",
    category: "Campaigns",
    ratio: "aspect-[3/4]",
    title: "Chicken — Campaign Hero",
    brief: "Appetite-appeal hero for a chicken brand.",
    outcome: "Hero for menu, ads and delivery listings.",
  },
  {
    src: "/best%20shots/mens%20shoe/shoe-mens-campaign.webp",
    category: "Campaigns",
    ratio: "aspect-[16/10]",
    title: "Sneaker Campaign — Scene",
    brief: "Lifestyle campaign scene for a footwear brand.",
    outcome: "Seasonal campaign across retail + social.",
  },
];

const categories: Category[] = ["All", "Product", "Food & Beverage", "Footwear", "Campaigns"];

// Featured case studies — one flagship per core category.
const featured: GalleryItem[] = [
  items[0],  // Luxury Watch
  items[10], // Biriyani
  items[21], // White Sneaker
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

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
            footwear, and campaign imagery crafted for brands. Open any frame for
            the brief and the result behind it.
          </p>
        </motion.div>

        {/* Featured case studies */}
        <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4" aria-label="Featured case studies">
          {featured.map((f) => (
            <motion.button
              key={f.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightbox(f)}
              className="group relative w-full overflow-hidden bg-white/[0.03] rounded-lg aspect-[4/5] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e83b2c]/60 text-left"
              aria-label={`View case study: ${f.title}`}
            >
              <Image
                src={f.src}
                alt={`Case study — ${f.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
                <span className="text-[#e83b2c] text-[10px] uppercase tracking-widest" style={{ fontFamily: "Outfit, system-ui" }}>
                  {f.category} · Case Study
                </span>
                <h3 className="text-white font-serif text-lg mt-2 leading-tight">
                  {f.title}
                </h3>
                <p className="text-white/70 text-xs mt-1.5 leading-relaxed line-clamp-2" style={{ fontFamily: "Outfit, system-ui" }}>
                  {f.brief}
                </p>
                <p className="text-white/45 text-xs mt-2 leading-relaxed line-clamp-2 italic" style={{ fontFamily: "Outfit, system-ui" }}>
                  {f.outcome}
                </p>
              </div>
            </motion.button>
          ))}
        </section>

        {/* Filters */}
        <div className="mt-14 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter gallery by category">
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
              onClick={() => setLightbox(item)}
              className={`relative w-full overflow-hidden bg-white/[0.03] rounded-lg group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e83b2c]/60 ${item.ratio}`}
              aria-label={`View case study: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading={i < 6 ? "eager" : "lazy"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                <span className="text-[#e83b2c] text-[10px] uppercase tracking-widest" style={{ fontFamily: "Outfit, system-ui" }}>
                  {item.category}
                </span>
                <span className="text-[#ffffff] text-sm font-medium mt-1" style={{ fontFamily: "Outfit, system-ui" }}>
                  {item.title}
                </span>
                <span className="text-white/60 text-xs mt-1 line-clamp-2" style={{ fontFamily: "Outfit, system-ui" }}>
                  {item.brief}
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

      <Lightbox
        imageUrl={lightbox?.src ?? null}
        onClose={closeLightbox}
        caption={lightbox ? { title: lightbox.title, brief: lightbox.brief, outcome: lightbox.outcome } : null}
      />
    </main>
  );
}

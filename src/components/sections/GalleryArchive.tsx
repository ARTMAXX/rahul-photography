"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "Product", "Beverage", "Food", "Footwear"];

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/best shots/Product image/product-watch-luxury.webp",
    category: "Product",
    title: "Chrono Luxury",
  },
  {
    id: 2,
    src: "/best shots/Beverage images/bev-macro.webp",
    category: "Beverage",
    title: "Crystal Pour",
  },
  {
    id: 3,
    src: "/best shots/Food photo/food-cream-macro.webp",
    category: "Food",
    title: "Velvet Cream",
  },
  {
    id: 4,
    src: "/best shots/ladies shoe/shoe-ladies-heels.webp",
    category: "Footwear",
    title: "Sky Heel",
  },
  {
    id: 5,
    src: "/best shots/Product image/product-headphone.webp",
    category: "Product",
    title: "Audio Gold",
  },
  {
    id: 6,
    src: "/best shots/Beverage images/bev-iced.webp",
    category: "Beverage",
    title: "Frost Glass",
  },
  {
    id: 7,
    src: "/best shots/Food photo/food-biriyani.webp",
    category: "Food",
    title: "Royal Feast",
  },
  {
    id: 8,
    src: "/best shots/mens shoe/shoe-mens-campaign.webp",
    category: "Footwear",
    title: "Street Edge",
  },
  {
    id: 9,
    src: "/best shots/Product image/product-serum.webp",
    category: "Product",
    title: "Luxury Serum",
  },
  {
    id: 10,
    src: "/best shots/Beverage images/three-iced-drinks.webp",
    category: "Beverage",
    title: "Triple Chill",
  },
  {
    id: 11,
    src: "/best shots/Food photo/food-chicken.webp",
    category: "Food",
    title: "Golden Crisp",
  },
  {
    id: 12,
    src: "/best shots/ladies shoe/shoe-ladies-sandal.webp",
    category: "Footwear",
    title: "Summer Sole",
  },
];

export default function GalleryArchive() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      setFilteredItems(
        GALLERY_ITEMS.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".gallery-heading",
        {
          opacity: 0,
          y: 60,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
          scrollTrigger: {
            trigger: ".gallery-heading",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Gallery items cascade
      const items = gsap.utils.toArray<HTMLElement>(".gallery-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 80,
            rotateX: -15,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full bg-[#050505] overflow-hidden"
      style={{ padding: "clamp(8rem, 16vh, 12rem) clamp(1rem, 4vw, 3rem)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-1/3 left-1/3 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto">
        {/* Header with filters */}
        <div className="mb-16 md:mb-24">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
            Full Archive
          </span>

          <h2
            className="gallery-heading text-[clamp(2.5rem,7vw,5rem)] font-serif leading-[0.95] tracking-[-0.02em] text-white mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Every frame, every <span className="italic font-bold">detail</span>.
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                  activeFilter === cat
                    ? "bg-white/10 ring-2 ring-white/20 text-white"
                    : "bg-white/5 ring-1 ring-white/10 text-white/60 hover:bg-white/10 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Z-Axis Cascade Grid - items with slight rotation and overlap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item group"
              style={{
                transform: `perspective(1000px)`,
              }}
            >
              {/* Double-bezel outer shell */}
              <div className="p-2 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04] hover:scale-[1.02]">
                {/* Inner core */}
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-black">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-[10px] uppercase tracking-[0.2em] text-white/90 w-max mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



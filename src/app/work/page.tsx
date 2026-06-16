"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "Product", "Beverage", "Food", "Footwear", "Campaign", "Video"];

interface MediaItem {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  src: string;
  type: "image" | "video";
  featured?: boolean;
}

const ALL_MEDIA: MediaItem[] = [
  // Campaign/ADs
  { id: 1, title: "Culinary Campaign", category: "Campaign", year: "2026", client: "Restaurant Brand", src: "/best shots/ADs/ad-culinary.webp", type: "image", featured: true },
  { id: 2, title: "Pop-out Campaign", category: "Campaign", year: "2026", client: "Product Brand", src: "/best shots/ADs/ad-popout.webp", type: "image" },
  
  // Beverages
  { id: 3, title: "Iced Beverage", category: "Beverage", year: "2026", client: "Cafe Chain", src: "/best shots/Beverage images/bev-iced.webp", type: "image", featured: true },
  { id: 4, title: "Beverage Macro", category: "Beverage", year: "2026", client: "Spirits Brand", src: "/best shots/Beverage images/bev-macro.webp", type: "image" },
  { id: 5, title: "Toast Celebration", category: "Beverage", year: "2026", client: "Event Brand", src: "/best shots/Beverage images/bev-toast.webp", type: "image" },
  { id: 6, title: "Waiter Service", category: "Beverage", year: "2026", client: "Hotel Group", src: "/best shots/Beverage images/bev-waiter.webp", type: "image" },
  { id: 7, title: "Crystal Glass Detail", category: "Beverage", year: "2025", client: "Bar Brand", src: "/best shots/Beverage images/beverage-macro.png", type: "image" },
  { id: 8, title: "Clinking Glasses", category: "Beverage", year: "2025", client: "Event Co", src: "/best shots/Beverage images/clinking-glasses.png", type: "image" },
  { id: 9, title: "Iced Drinks Collection", category: "Beverage", year: "2025", client: "Cafe Brand", src: "/best shots/Beverage images/iced-drinks.png", type: "image" },
  { id: 10, title: "Three Iced Drinks", category: "Beverage", year: "2026", client: "Beverage Co", src: "/best shots/Beverage images/three-iced-drinks.webp", type: "image" },
  { id: 11, title: "Waiter Tray", category: "Beverage", year: "2025", client: "Restaurant", src: "/best shots/Beverage images/waiter-tray.png", type: "image" },
  
  // Food
  { id: 12, title: "Biryani Presentation", category: "Food", year: "2026", client: "Indian Restaurant", src: "/best shots/Food photo/Biriyani photo.webp", type: "image", featured: true },
  { id: 13, title: "Royal Biryani", category: "Food", year: "2025", client: "Fine Dining", src: "/best shots/Food photo/biriyani.png", type: "image" },
  { id: 14, title: "Crispy Chicken", category: "Food", year: "2026", client: "Restaurant Group", src: "/best shots/Food photo/crispy-chicken.png", type: "image" },
  { id: 15, title: "Biryani Detail", category: "Food", year: "2026", client: "Restaurant Brand", src: "/best shots/Food photo/food-biriyani.webp", type: "image" },
  { id: 16, title: "Buffet Spread", category: "Food", year: "2026", client: "Hotel Chain", src: "/best shots/Food photo/food-buffet.webp", type: "image" },
  { id: 17, title: "Chicken Plating", category: "Food", year: "2026", client: "Chef Brand", src: "/best shots/Food photo/food-chicken.webp", type: "image" },
  { id: 18, title: "Cream Macro", category: "Food", year: "2026", client: "Dessert Brand", src: "/best shots/Food photo/food-cream-macro.webp", type: "image" },
  { id: 19, title: "Dessert Cream", category: "Food", year: "2025", client: "Pastry Shop", src: "/best shots/Food photo/food-cream.webp", type: "image" },
  { id: 20, title: "Indian Curry", category: "Food", year: "2026", client: "Restaurant", src: "/best shots/Food photo/food-curry.webp", type: "image" },
  { id: 21, title: "Signature Dish", category: "Food", year: "2026", client: "Fine Dining", src: "/best shots/Food photo/food-dish.webp", type: "image" },
  { id: 22, title: "Kashmiri Mutton", category: "Food", year: "2026", client: "Restaurant Noir", src: "/best shots/Food photo/food-mutton.webp", type: "image", featured: true },
  { id: 23, title: "Food Composition", category: "Food", year: "2025", client: "Food Brand", src: "/best shots/Food photo/food.png", type: "image" },
  { id: 24, title: "Indian Buffet", category: "Food", year: "2025", client: "Hotel Group", src: "/best shots/Food photo/indian-buffet.png", type: "image" },
  { id: 25, title: "Curry Plating", category: "Food", year: "2025", client: "Restaurant", src: "/best shots/Food photo/indian-curry.png", type: "image" },
  { id: 26, title: "Kashmiri Special", category: "Food", year: "2025", client: "Fine Dining", src: "/best shots/Food photo/kashmiri-mutton.png", type: "image" },
  
  // Ladies Footwear
  { id: 27, title: "Fashion Lifestyle", category: "Footwear", year: "2026", client: "Fashion Magazine", src: "/best shots/ladies shoe/fashion-lifestyle.png", type: "image", featured: true },
  { id: 28, title: "High-End Luxury", category: "Footwear", year: "2026", client: "Designer Brand", src: "/best shots/ladies shoe/High-end-shoe.webp", type: "image" },
  { id: 29, title: "Leather Sandal", category: "Footwear", year: "2026", client: "Fashion Brand", src: "/best shots/ladies shoe/leather-sandal.png", type: "image" },
  { id: 30, title: "Luxury Mule", category: "Footwear", year: "2026", client: "Designer Label", src: "/best shots/ladies shoe/luxury-mule.png", type: "image" },
  { id: 31, title: "Shoe Detail", category: "Footwear", year: "2026", client: "Footwear Co", src: "/best shots/ladies shoe/shoe-ladies-detail.webp", type: "image" },
  { id: 32, title: "Designer Heels", category: "Footwear", year: "2026", client: "Luxury Brand", src: "/best shots/ladies shoe/shoe-ladies-heels.webp", type: "image" },
  { id: 33, title: "Lifestyle Editorial", category: "Footwear", year: "2026", client: "Magazine", src: "/best shots/ladies shoe/shoe-ladies-lifestyle.webp", type: "image" },
  { id: 34, title: "Mule Detail", category: "Footwear", year: "2026", client: "Fashion Brand", src: "/best shots/ladies shoe/shoe-ladies-mule-detail.webp", type: "image" },
  { id: 35, title: "Designer Mule", category: "Footwear", year: "2026", client: "Luxury Label", src: "/best shots/ladies shoe/shoe-ladies-mule.webp", type: "image" },
  { id: 36, title: "Elegant Sandal", category: "Footwear", year: "2026", client: "Fashion Co", src: "/best shots/ladies shoe/shoe-ladies-sandal.webp", type: "image" },
  { id: 37, title: "Slip-on Style", category: "Footwear", year: "2026", client: "Footwear Brand", src: "/best shots/ladies shoe/shoe-ladies-slipon.webp", type: "image" },
  { id: 38, title: "Slip-on Shoes", category: "Footwear", year: "2025", client: "Fashion Brand", src: "/best shots/ladies shoe/slip-on-shoes.png", type: "image" },
  
  // Men's Footwear
  { id: 39, title: "Lifestyle Fashion", category: "Footwear", year: "2026", client: "Men's Magazine", src: "/best shots/mens shoe/lifestyle-fashion.png", type: "image" },
  { id: 40, title: "Modern Athletic Sneaker", category: "Footwear", year: "2026", client: "Sports Brand", src: "/best shots/mens shoe/modern-athletic-sneaker.webp", type: "image", featured: true },
  { id: 41, title: "Sneaker Campaign", category: "Footwear", year: "2026", client: "Athletic Brand", src: "/best shots/mens shoe/shoe-mens-campaign.webp", type: "image" },
  { id: 42, title: "Sneaker Duo", category: "Footwear", year: "2026", client: "Sports Co", src: "/best shots/mens shoe/shoe-mens-duo.webp", type: "image" },
  { id: 43, title: "Lifestyle Sneaker", category: "Footwear", year: "2026", client: "Fashion Brand", src: "/best shots/mens shoe/shoe-mens-lifestyle.webp", type: "image" },
  { id: 44, title: "White Sneaker", category: "Footwear", year: "2026", client: "Athletic Co", src: "/best shots/mens shoe/shoe-mens-white.webp", type: "image" },
  { id: 45, title: "Campaign Shot", category: "Footwear", year: "2025", client: "Sports Brand", src: "/best shots/mens shoe/sneaker-campaign.png", type: "image" },
  { id: 46, title: "Duo Collection", category: "Footwear", year: "2025", client: "Footwear Brand", src: "/best shots/mens shoe/sneaker-duo.png", type: "image" },
  { id: 47, title: "Premium White", category: "Footwear", year: "2025", client: "Athletic Brand", src: "/best shots/mens shoe/white-sneaker.png", type: "image" },
  
  // New Images
  { id: 48, title: "Biryani Delicacy", category: "Food", year: "2026", client: "Restaurant", src: "/best shots/new-images/new-food-biriyani.png", type: "image" },
  { id: 49, title: "Ultra Food Macro", category: "Food", year: "2026", client: "Food Brand", src: "/best shots/new-images/new-food-ultra.png", type: "image" },
  { id: 50, title: "Fresh Juice", category: "Beverage", year: "2026", client: "Juice Bar", src: "/best shots/new-images/new-juice-01.jpg", type: "image" },
  
  // Videos
  { id: 51, title: "Ladies Footwear Motion", category: "Video", year: "2026", client: "Fashion Brand", src: "/best shots/ladies shoe/shoe-ladies-video.mp4", type: "video", featured: true },
  { id: 52, title: "Men's Sneaker Showcase", category: "Video", year: "2026", client: "Sports Brand", src: "/best shots/mens shoe/shoe-mens-video.mp4", type: "video", featured: true },
  { id: 53, title: "Athletic Sneaker Motion", category: "Video", year: "2026", client: "Sports Co", src: "/best shots/Product image/modern-athleti-sneaker.mp4", type: "video" },
  { id: 54, title: "Energy Can Reveal", category: "Video", year: "2026", client: "Energy Brand", src: "/best shots/Product image/product-energy-can.mp4", type: "video" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filteredMedia, setFilteredMedia] = useState(ALL_MEDIA);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredMedia(ALL_MEDIA);
    } else {
      setFilteredMedia(ALL_MEDIA.filter((m) => m.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [filteredMedia]);

  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedMedia]);

  return (
    <div ref={sectionRef} className="relative w-full bg-[#050505] min-h-screen">
      {/* Ambient gradient */}
      <div
        className="fixed top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Header section */}
      <div className="relative z-10 pt-32 pb-20 px-4 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
            Full Portfolio
          </span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.02em] text-white mb-8">
            Complete <span className="italic">Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-[60ch] mb-12">
            Every shot tells a story. Browse through {ALL_MEDIA.length}+ high-end commercial photography and video projects.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-500
                  ${activeCategory === cat
                    ? 'bg-white/15 text-white ring-2 ring-white/30'
                    : 'bg-white/5 text-white/60 ring-1 ring-white/10 hover:bg-white/10 hover:text-white/80'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="relative z-10 px-4 md:px-12 pb-32">
        <div className="max-w-[1800px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
            {filteredMedia.map((media) => (
              <div
                key={media.id}
                className="work-card group relative cursor-pointer mb-4 md:mb-6 break-inside-avoid"
                onClick={() => setSelectedMedia(media)}
              >
                <div className="p-2 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-white/25 group-hover:bg-white/[0.04] group-hover:scale-[1.01]">
                  <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden bg-black/40">
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        className="w-full h-auto object-contain"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                    ) : (
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={media.src}
                          alt={media.title}
                          fill
                          quality={100}
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        {media.featured && (
                          <span className="inline-block px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-[10px] uppercase tracking-[0.2em] text-white/90 mb-3">
                            Featured
                          </span>
                        )}
                        <h3 className="text-xl font-serif text-white mb-2">
                          {media.title}
                        </h3>
                        <p className="text-sm text-white/60">
                          {media.client} · {media.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 flex items-center justify-center text-white text-2xl transition-all duration-500 hover:bg-white/20 hover:rotate-90 active:scale-95 z-10"
            >
              ×
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  className="w-full h-full max-h-[90vh] object-contain"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    width={1920}
                    height={1080}
                    quality={100}
                    className="object-contain w-full h-full max-h-[90vh]"
                  />
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-3xl font-serif text-white mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-lg text-white/60">
                  {selectedMedia.client} · {selectedMedia.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

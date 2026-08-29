"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X } from "lucide-react";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1,  url: "/opt/best shots/Product image/product-watch-luxury.webp",  title: "Luxury Watch — Campaign Hero",  category: "Product" },
  { id: 2,  url: "/opt/best shots/Product image/product-headphone.webp",     title: "AudioTech Headphones",          category: "Product" },
  { id: 3,  url: "/opt/best shots/Product image/product-serum.webp",         title: "Bloom Skincare Serum",          category: "Product" },
  { id: 4,  url: "/opt/best shots/Product image/product-molton-brown.webp",  title: "Molton Brown — Packaging",      category: "Product" },
  { id: 5,  url: "/opt/best shots/Product image/product-energy-shot.webp",   title: "Energy Drink Splash",           category: "Product" },
  { id: 6,  url: "/opt/best shots/Product image/product-bodywash.webp",      title: "Body Wash Product",             category: "Product" },
  { id: 7,  url: "/opt/best shots/Product image/energy-drink-design.webp",   title: "Energy Drink Design",           category: "Product" },
  { id: 8,  url: "/opt/best shots/Product image/product-hairspray.webp",     title: "Hair Spray Product",            category: "Product" },
  { id: 9,  url: "/opt/best shots/Product image/product-watch-dark.webp",    title: "Dark Watch Detail",             category: "Product" },
  { id: 10, url: "/opt/best shots/Food photo/food-biriyani.webp",            title: "Biriyani — Menu Hero",          category: "Food" },
  { id: 11, url: "/opt/best shots/Food photo/food-chicken.webp",             title: "Crispy Chicken",                category: "Food" },
  { id: 12, url: "/opt/best shots/Food photo/food-curry.webp",               title: "Traditional Curry",             category: "Food" },
  { id: 13, url: "/opt/best shots/Food photo/food-mutton.webp",              title: "Mutton Special",                category: "Food" },
  { id: 14, url: "/opt/best shots/Food photo/food-buffet.webp",              title: "Food Buffet",                   category: "Food" },
  { id: 15, url: "/opt/best shots/Food photo/food-cream-macro.webp",         title: "Cream Macro Detail",            category: "Food" },
  { id: 16, url: "/opt/best shots/Beverage images/bev-iced.webp",            title: "Iced Beverage — Condensation",  category: "Beverage" },
  { id: 17, url: "/opt/best shots/Beverage images/bev-macro.webp",           title: "Beverage Macro Detail",         category: "Beverage" },
  { id: 18, url: "/opt/best shots/Beverage images/bev-toast.webp",           title: "Celebration Toast",             category: "Beverage" },
  { id: 19, url: "/opt/best shots/Beverage images/beverage-macro.webp",      title: "Drink Detail Shot",             category: "Beverage" },
  { id: 20, url: "/opt/best shots/Beverage images/iced-drinks.webp",         title: "Iced Drinks Lineup",            category: "Beverage" },
  { id: 21, url: "/opt/best shots/Beverage images/three-iced-drinks.webp",   title: "Three Iced Beverages",          category: "Beverage" },
  { id: 22, url: "/opt/best shots/mens shoe/shoe-mens-white.webp",           title: "White Sneaker — Clean Cutout",  category: "Footwear" },
  { id: 23, url: "/opt/best shots/mens shoe/shoe-mens-campaign.webp",        title: "Sneaker Campaign Scene",        category: "Footwear" },
  { id: 24, url: "/opt/best shots/mens shoe/modern-athletic-sneaker.webp",   title: "Modern Athletic Sneaker",       category: "Footwear" },
  { id: 25, url: "/opt/best shots/ladies shoe/High-end-shoe.webp",           title: "High-End Ladies Shoe",          category: "Footwear" },
  { id: 26, url: "/opt/best shots/ladies shoe/shoe-ladies-heels.webp",       title: "Ladies Heels",                  category: "Footwear" },
  { id: 27, url: "/opt/best shots/ladies shoe/shoe-ladies-mule.webp",        title: "Ladies Mule",                   category: "Footwear" },
  { id: 28, url: "/opt/best shots/ADs/ad-culinary.webp",                     title: "Culinary Campaign",             category: "Campaigns" },
  { id: 29, url: "/opt/best shots/ADs/ad-popout.webp",                       title: "Pop-out Ad Design",             category: "Campaigns" },
  { id: 30, url: "/opt/best shots/new-images/new-product-bold.webp",         title: "Bold Product Shot",             category: "Campaigns" },
  { id: 31, url: "/opt/best shots/new-images/new-product-blast.webp",        title: "Dynamic Blast",                 category: "Campaigns" },
  { id: 32, url: "/opt/best shots/new-images/new-juice-01.webp",             title: "Fresh Juice Campaign",          category: "Campaigns" },
];

/* — Individual gallery item with scroll-triggered fade-in — */
function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="mb-2 break-inside-avoid cursor-pointer group relative"
      onClick={onClick}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${image.title}`}
    >
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="w-full aspect-[4/3] bg-white/5 animate-pulse rounded-sm" />
      )}

      {/* Raw image — full width of column, height auto = natural ratio */}
      <img
        src={image.url}
        alt={image.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-700 group-hover:scale-[1.03] ${
          loaded ? "opacity-100" : "opacity-0 absolute"
        }`}
      />

      {/* Hover overlay — smooth reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <h3 className="text-center text-lg font-semibold text-white px-4 drop-shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          {image.title}
        </h3>
        <Badge className="mt-2 bg-[#e83b2c] text-white border-none translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75" variant="secondary">
          {image.category}
        </Badge>
      </div>
    </motion.div>
  );
}

export function GalleryGridBlock() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" });

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleKeyNav = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        const idx = filteredImages.findIndex((i) => i.id === selectedImage);
        setSelectedImage(filteredImages[(idx + 1) % filteredImages.length].id);
      }
      if (e.key === "ArrowLeft") {
        const idx = filteredImages.findIndex((i) => i.id === selectedImage);
        setSelectedImage(
          filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length].id
        );
      }
    },
    [selectedImage, filteredImages]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [handleKeyNav]);

  const handleNext = () => {
    if (selectedImage !== null) {
      const idx = filteredImages.findIndex((i) => i.id === selectedImage);
      setSelectedImage(filteredImages[(idx + 1) % filteredImages.length].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const idx = filteredImages.findIndex((i) => i.id === selectedImage);
      setSelectedImage(
        filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length].id
      );
    }
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#070707] px-4 py-16"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header — fade in on scroll */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 bg-[#e83b2c]/10 text-[#e83b2c] border-[#e83b2c]/20" variant="secondary">
            <Grid className="mr-1 h-3 w-3" />
            Portfolio
          </Badge>
          <h2
            id="gallery-heading"
            className="mb-4 text-4xl font-bold tracking-tight text-white font-serif"
          >
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Six assignments, one throughline — the product comes first, and it has to look like the obvious choice.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={
                filter === category
                  ? "bg-[#e83b2c] hover:bg-[#e83b2c]/90 text-white border-transparent"
                  : "border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Pure CSS Columns Masonry — images at their NATURAL aspect ratio */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-2"
          role="list"
          aria-label="Gallery items"
        >
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image.id)}
            />
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl w-full flex flex-col items-center"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-2 top-0 sm:-right-12 text-white hover:bg-white/10 z-20"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery dialog"
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-20"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  aria-label="View previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-20"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  aria-label="View next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <img
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 text-center text-white"
                >
                  <h3 className="mb-2 text-xl font-semibold" id="gallery-dialog-title">
                    {selectedImageData.title}
                  </h3>
                  <Badge className="bg-[#e83b2c] text-white border-none" variant="secondary">
                    {selectedImageData.category}
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

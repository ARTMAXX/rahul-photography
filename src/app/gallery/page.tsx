"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { CinematicFooter } from "@/components/ui/motion-footer";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  { id: 1, url: "/opt/best shots/Product image/product-watch-luxury.webp", title: "Luxury Watch — Campaign Hero", alt: "Luxury watch product photography with metallic studio lighting by Rahul Chanda, commercial photographer in Dehradun", category: "Product", width: 1024, height: 1024 },
  { id: 2, url: "/opt/best shots/Product image/product-headphone.webp", title: "AudioTech Headphones", alt: "Premium headphone product photography for AudioTech brand campaign by Rahul Chanda, Dehradun", category: "Product", width: 1024, height: 1024 },
  { id: 3, url: "/opt/best shots/Product image/product-serum.webp", title: "Bloom Skincare Serum", alt: "Bloom skincare serum bottle product photography with soft lighting by Rahul Chanda, commercial photographer", category: "Product", width: 1024, height: 1024 },
  { id: 4, url: "/opt/best shots/Product image/product-molton-brown.webp", title: "Molton Brown — Packaging", alt: "Molton Brown luxury packaging product photography by Rahul Chanda, commercial photographer in Dehradun", category: "Product", width: 1024, height: 1024 },
  { id: 5, url: "/opt/best shots/Product image/product-energy-shot.webp", title: "Energy Drink Splash", alt: "Dynamic energy drink splash photography with frozen motion by Rahul Chanda, beverage photographer", category: "Product", width: 1024, height: 1024 },
  { id: 6, url: "/opt/best shots/Product image/product-bodywash.webp", title: "Body Wash Product", alt: "Body wash product photography with water droplets by Rahul Chanda, commercial photographer in India", category: "Product", width: 1024, height: 1024 },
  { id: 7, url: "/opt/best shots/Product image/energy-drink-design.webp", title: "Energy Drink Design", alt: "Creative energy drink product photography with bold colors by Rahul Chanda, Dehradun photographer", category: "Product", width: 1024, height: 1024 },
  { id: 8, url: "/opt/best shots/Product image/product-hairspray.webp", title: "Hair Spray Product", alt: "Hair spray bottle product photography with dramatic lighting by Rahul Chanda, commercial photographer", category: "Product", width: 1024, height: 1024 },
  { id: 9, url: "/opt/best shots/Product image/product-watch-dark.webp", title: "Dark Watch Detail", alt: "Close-up watch detail photography with dark moody lighting by Rahul Chanda, product photographer", category: "Product", width: 1024, height: 1024 },
  { id: 10, url: "/opt/best shots/Food photo/food-biriyani.webp", title: "Biriyani — Menu Hero", alt: "Appetizing biriyani food photography for restaurant menu by Rahul Chanda, food photographer in Dehradun", category: "Food", width: 1024, height: 1024 },
  { id: 11, url: "/opt/best shots/Food photo/food-chicken.webp", title: "Crispy Chicken", alt: "Crispy fried chicken food photography with steam and garnish by Rahul Chanda, restaurant photographer", category: "Food", width: 1024, height: 1024 },
  { id: 12, url: "/opt/best shots/Food photo/food-curry.webp", title: "Traditional Curry", alt: "Traditional Indian curry food photography in copper bowl by Rahul Chanda, food photographer India", category: "Food", width: 1024, height: 1024 },
  { id: 13, url: "/opt/best shots/Food photo/food-mutton.webp", title: "Mutton Special", alt: "Mutton dish food photography with rich gravy by Rahul Chanda, commercial food photographer Dehradun", category: "Food", width: 1024, height: 1024 },
  { id: 14, url: "/opt/best shots/Food photo/food-buffet.webp", title: "Food Buffet", alt: "Grand food buffet spread photography for restaurant marketing by Rahul Chanda, food photographer", category: "Food", width: 1024, height: 1024 },
  { id: 15, url: "/opt/best shots/Food photo/food-cream-macro.webp", title: "Cream Macro Detail", alt: "Macro food photography of cream texture and detail by Rahul Chanda, Dehradun commercial photographer", category: "Food", width: 1024, height: 1024 },
  { id: 16, url: "/opt/best shots/Beverage images/bev-iced.webp", title: "Iced Beverage — Condensation", alt: "Iced beverage photography with condensation droplets by Rahul Chanda, beverage photographer India", category: "Beverage", width: 1024, height: 1024 },
  { id: 17, url: "/opt/best shots/Beverage images/bev-macro.webp", title: "Beverage Macro Detail", alt: "Macro beverage photography capturing liquid detail by Rahul Chanda, commercial photographer Dehradun", category: "Beverage", width: 1024, height: 1024 },
  { id: 18, url: "/opt/best shots/Beverage images/bev-toast.webp", title: "Celebration Toast", alt: "Celebration toast beverage photography with glasses clinking by Rahul Chanda, product photographer", category: "Beverage", width: 1024, height: 1024 },
  { id: 19, url: "/opt/best shots/Beverage images/beverage-macro.webp", title: "Drink Detail Shot", alt: "Close-up drink detail photography with ice and garnish by Rahul Chanda, beverage photographer India", category: "Beverage", width: 1024, height: 1024 },
  { id: 20, url: "/opt/best shots/Beverage images/iced-drinks.webp", title: "Iced Drinks Lineup", alt: "Iced drinks lineup photography for cafe menu by Rahul Chanda, food and beverage photographer Dehradun", category: "Beverage", width: 1024, height: 1024 },
  { id: 21, url: "/opt/best shots/Beverage images/three-iced-drinks.webp", title: "Three Iced Beverages", alt: "Three iced beverages product photography for brand campaign by Rahul Chanda, commercial photographer", category: "Beverage", width: 1024, height: 1024 },
  { id: 22, url: "/opt/best shots/mens shoe/shoe-mens-white.webp", title: "White Sneaker — Clean Cutout", alt: "White sneaker product photography on clean background by Rahul Chanda, footwear photographer India", category: "Footwear", width: 1024, height: 1024 },
  { id: 23, url: "/opt/best shots/mens shoe/shoe-mens-campaign.webp", title: "Sneaker Campaign Scene", alt: "Sneaker advertising campaign photography with dramatic lighting by Rahul Chanda, footwear photographer", category: "Footwear", width: 1024, height: 1024 },
  { id: 24, url: "/opt/best shots/mens shoe/modern-athletic-sneaker.webp", title: "Modern Athletic Sneaker", alt: "Modern athletic sneaker product photography for ecommerce by Rahul Chanda, Dehradun commercial photographer", category: "Footwear", width: 1024, height: 1024 },
  { id: 25, url: "/opt/best shots/ladies shoe/High-end-shoe.webp", title: "High-End Ladies Shoe", alt: "High-end ladies shoe luxury product photography by Rahul Chanda, footwear photographer India", category: "Footwear", width: 1024, height: 1024 },
  { id: 26, url: "/opt/best shots/ladies shoe/shoe-ladies-heels.webp", title: "Ladies Heels", alt: "Ladies heels product photography with elegant lighting by Rahul Chanda, fashion photographer Dehradun", category: "Footwear", width: 1024, height: 1024 },
  { id: 27, url: "/opt/best shots/ladies shoe/shoe-ladies-mule.webp", title: "Ladies Mule", alt: "Ladies mule shoe product photography for fashion brand by Rahul Chanda, commercial photographer India", category: "Footwear", width: 1024, height: 1024 },
  { id: 28, url: "/opt/best shots/ADs/ad-culinary.webp", title: "Culinary Campaign", alt: "Culinary advertising campaign photography for restaurant brand by Rahul Chanda, Dehradun photographer", category: "Campaigns", width: 1024, height: 1024 },
  { id: 29, url: "/opt/best shots/ADs/ad-popout.webp", title: "Pop-out Ad Design", alt: "Creative pop-out advertising design photography by Rahul Chanda, commercial campaign photographer India", category: "Campaigns", width: 1024, height: 1024 },
  { id: 30, url: "/opt/best shots/new-images/new-product-bold.webp", title: "Bold Product Shot", alt: "Bold product photography with vibrant colors and dramatic lighting by Rahul Chanda, commercial photographer", category: "Campaigns", width: 1024, height: 1024 },
  { id: 31, url: "/opt/best shots/new-images/new-product-blast.webp", title: "Dynamic Blast", alt: "Dynamic product explosion photography with motion effects by Rahul Chanda, advertising photographer Dehradun", category: "Campaigns", width: 1024, height: 1024 },
  { id: 32, url: "/opt/best shots/new-images/new-juice-01.webp", title: "Fresh Juice Campaign", alt: "Fresh juice product photography campaign with fruit splash by Rahul Chanda, beverage photographer India", category: "Campaigns", width: 1024, height: 1024 },
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
            Commercial Photography Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-6 leading-relaxed">
            Product, food, beverage, footwear, and advertising campaign photography by Rahul Chanda — Dehradun, India.
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
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

      {/* Internal linking CTA — drives traffic to services & contact */}
      <section className="px-4 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
            Like what you <span className="italic text-[#e83b2c]">see</span>?
          </h2>
          <p className="text-white/50 mt-4 max-w-[40ch] mx-auto">
            Let&apos;s talk about your next product or brand photography project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="/services"
              className="px-6 py-3 bg-[#e83b2c] text-white text-sm uppercase tracking-wider rounded-full hover:bg-[#c6321f] transition-colors"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white/20 text-white/70 text-sm uppercase tracking-wider rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}

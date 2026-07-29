"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { ReactLenis } from "lenis/react";
import { X } from "lucide-react";

const GALLERY_ITEMS = [
  { id: "gal-1", title: "Mechanical Darkness", category: "Chrono Luxury", img: "/best shots/Product image/product-watch-dark.webp" },
  { id: "gal-2", title: "Botanical Mist", category: "Product / Hairspray", img: "/best shots/Product image/product-hairspray.webp" },
  { id: "gal-3", title: "Mutton Culinary Style", category: "Velvet Crème / Culinary", img: "/best shots/Food photo/food-mutton.webp" },
  { id: "gal-4", title: "Refraction Macro", category: "Liquid Shadow / Beverage", img: "/best shots/Beverage images/bev-macro.webp" },
];

export default function ImmersiveGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const expandedImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  const handleItemClick = (item: typeof GALLERY_ITEMS[0]) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <section id="gallery" className="relative w-full bg-editorial-bg py-24 overflow-hidden">
      <h2 className="px-16 mb-16 font-serif text-7xl text-editorial-ink">Visual Catalog</h2>

      <div className="relative w-full h-[60vh] overflow-hidden">
        <ReactLenis root={false} options={{ orientation: 'horizontal', lerp: 0.1 }} className="h-full overflow-x-auto flex items-center gap-8 px-16">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="flex-shrink-0 w-[300px] h-full flex flex-col justify-center cursor-pointer"
            >
              <div className="relative w-full rounded-sm group">
                <img src={item.img} alt={item.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </ReactLenis>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-20" onClick={handleClose}>
          <div 
            className="max-w-[85vw] max-h-[85vh] bg-editorial-bg rounded-sm flex items-center justify-center"
          >
             <img src={selectedItem.img} alt={selectedItem.title} className="max-w-full max-h-[85vh] w-auto h-auto object-contain" />
          </div>
          <button onClick={handleClose} className="absolute top-10 right-10 p-4 bg-white rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

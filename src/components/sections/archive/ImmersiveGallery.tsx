"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { ReactLenis } from "@studio-freight/react-lenis";
import { X } from "lucide-react";

const GALLERY_ITEMS = [
  { id: "gal-1", title: "Mechanical Darkness", category: "Chrono Luxury", img: "/best shots/Product image/product-watch-dark.webp", aspect: "aspect-[4/5]" },
  { id: "gal-2", title: "Botanical Mist", category: "Product / Hairspray", img: "/best shots/Product image/product-hairspray.webp", aspect: "aspect-[3/4]" },
  { id: "gal-3", title: "Mutton Culinary Style", category: "Velvet Crème / Culinary", img: "/best shots/Food photo/food-mutton.webp", aspect: "aspect-[4/3]" },
  { id: "gal-4", title: "Refraction Macro", category: "Liquid Shadow / Beverage", img: "/best shots/Beverage images/bev-macro.webp", aspect: "aspect-[16/10]" },
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
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-neutral-200 rounded-sm group`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </ReactLenis>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-20" onClick={handleClose}>
          <div 
            className="w-[80vw] h-[80vh] bg-editorial-bg rounded-sm overflow-hidden"
          >
             <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-contain" />
          </div>
          <button onClick={handleClose} className="absolute top-10 right-10 p-4 bg-white rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

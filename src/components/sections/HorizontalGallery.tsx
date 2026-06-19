"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

const ITEMS = [
  { src: "/best shots/Product image/product-watch-luxury.webp", title: "Chrono Luxury", span: "row-span-2" },
  { src: "/best shots/Beverage images/bev-macro.webp", title: "Crystal Pour", span: "row-span-1" },
  { src: "/best shots/Food photo/food-cream-macro.webp", title: "Velvet Cream", span: "row-span-1" },
  { src: "/best shots/ladies shoe/shoe-ladies-heels.webp", title: "Sky Heel", span: "row-span-2" },
  { src: "/best shots/Product image/product-headphone.webp", title: "Audio Gold", span: "row-span-1" },
  { src: "/best shots/Beverage images/bev-iced.webp", title: "Frost Glass", span: "row-span-1" },
];

export default function ArchiveExhibition() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]), springConfig);
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 15]), springConfig);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
        
        {/* Editorial Title */}
        <div className="absolute top-24 left-12 md:left-24 z-20 pointer-events-none">
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">
            — The Archive
          </p>
          <h2 className="text-[clamp(4rem,12vw,9rem)] font-serif text-zinc-100 leading-[0.8] tracking-tighter">
            Curated<br />Campaigns.
          </h2>
        </div>

        <motion.div 
          style={{ x, rotateY, perspective: 2000 }} 
          className="flex items-center gap-12 px-24"
        >
          {ITEMS.map((item, i) => (
            <motion.div 
              key={i} 
              className={`relative flex-shrink-0 ${item.span === "row-span-2" ? "h-[70vh] w-[35vw]" : "h-[45vh] w-[25vw]"} bg-zinc-900 group`}
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-zinc-400 font-mono text-[10px] tracking-widest uppercase mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-4xl font-serif text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

const ITEMS = [
  { src: "/best shots/Product image/product-watch-luxury.webp", title: "Chrono Luxury" },
  { src: "/best shots/Beverage images/bev-macro.webp", title: "Crystal Pour" },
  { src: "/best shots/Food photo/food-cream-macro.webp", title: "Velvet Cream" },
  { src: "/best shots/ladies shoe/shoe-ladies-heels.webp", title: "Sky Heel" },
  { src: "/best shots/Product image/product-headphone.webp", title: "Audio Gold" },
];

export default function RedesignedGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative bg-zinc-50 dark:bg-zinc-950 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] mb-6">
            // Selected Archive
          </p>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-serif leading-[0.9] tracking-tighter text-zinc-950 dark:text-zinc-50">
            Precision<br />
            <span className="italic font-light">Defined.</span>
          </h2>
        </header>

        <div className="flex flex-col gap-32">
          {ITEMS.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ item, index }: { item: typeof ITEMS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1]), { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity, scale }}
      className="flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="w-full md:w-1/2 aspect-[4/5] relative bg-zinc-200 dark:bg-zinc-800">
        <Image 
          src={item.src} 
          alt={item.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4 block">
          0{index + 1}
        </span>
        <h3 className="text-5xl font-serif text-zinc-950 dark:text-zinc-50 tracking-tighter italic">
          {item.title}
        </h3>
        <p className="mt-8 text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
          Meticulously framed to capture the essence of the subject, utilizing controlled studio light to create depth and narrative.
        </p>
      </div>
    </motion.div>
  );
}

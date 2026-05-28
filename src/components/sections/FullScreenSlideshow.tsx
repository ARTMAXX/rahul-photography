"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { title: "MOLTON BROWN", desc: "STILL LIFE PRODUCT", src: "/best shots/Product image/product-molton-brown.webp" },
  { title: "ICED DRINKS", desc: "BEVERAGE STORY", src: "/best shots/Beverage images/three-iced-drinks.webp" },
  { title: "CURRY STUDY", desc: "TEXTURE & LIGHT", src: "/best shots/Food photo/food-curry.webp" },
];

export default function FullScreenSlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <section className="h-[90vh] w-full bg-white text-black relative flex items-center justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-12">
            <div className="w-1/2">
                <h2 className="text-[6vw] font-serif tracking-tighter leading-[0.9]">
                    {SLIDES[index].title}
                </h2>
                <p className="text-xs font-sans tracking-[0.2em] uppercase mt-4 text-black/50">{SLIDES[index].desc}</p>
            </div>
            <div className="w-1/3 h-[50vh] relative">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        src={SLIDES[index].src}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>
        </div>
        <div className="absolute bottom-12 left-12 flex gap-4">
            <button onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)} className="text-[10px] uppercase underline">Prev</button>
            <button onClick={() => setIndex((i) => (i + 1) % SLIDES.length)} className="text-[10px] uppercase underline">Next</button>
        </div>
    </section>
  );
}

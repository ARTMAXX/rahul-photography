"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { ArrowRight, ChevronRight, Maximize2, X } from "lucide-react";

// Mock data — will be replaced by actual project CMS or array
const PROJECTS = [
  { id: "chrono-luxury", title: "Chrono Luxury" },
  { id: "liquid-shadow", title: "Liquid Shadow" },
  { id: "velvet-creme", title: "Velvet Crème" },
  { id: "sole-luxury", title: "Solé Luxury" },
];

const chapters = [
  {
    num: "01",
    title: "Chrono Luxury",
    subtitle: "Chapter I / Architectures of Time",
    desc: "Controlled lighting designs outlining complex watch contours, mechanical chronographs, and reflective steel details.",
    img: "/best shots/Product image/product-watch-luxury.webp",
    color: "#131211", // Dark Bronze Charcoal
    projectKey: "chrono-luxury"
  },
  {
    num: "02",
    title: "Liquid Shadow",
    subtitle: "Chapter II / The Hydration Kinetics",
    desc: "Capturing high-speed liquid kinetics, soda explosions, splash refractions, and botanical droplets at 1/8000s.",
    img: "/best shots/Beverage images/bev-macro.webp",
    color: "#0B1519", // Deep Oceanic Teal
    projectKey: "liquid-shadow"
  },
  {
    num: "03",
    title: "Velvet Crème",
    subtitle: "Chapter III / Epicurean Tactility",
    desc: "Deep culinary art explorations focusing on dessert glaze, micro textures, and food compositions.",
    img: "/best shots/Food photo/Biriyani photo.webp",
    secondImg: "/best shots/Food photo/food-chicken.webp",
    color: "#1C120C", // Saffron Terracotta
    projectKey: "velvet-creme"
  },
  {
    num: "04",
    title: "Solé Luxury",
    subtitle: "Chapter IV / Sculpted Steps",
    desc: "Premium shoe advertising. Hard focus detailing premium leather grains, fashion silhouettes, and lifestyle dynamics.",
    img: "/best shots/ladies shoe/High-end-shoe.webp",
    color: "#1A0E0D", // Deep Burgundy Leather
    projectKey: "sole-luxury"
  }
];

// Helper component for 3D Folding Text Character Animation
const FoldingTitle = ({ text, active }: { text: string; active: boolean }) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  useEffect(() => {
    if (active && charsRef.current.length > 0) {
      const validChars = charsRef.current.filter(Boolean) as HTMLSpanElement[];
      gsap.killTweensOf(validChars);
      gsap.fromTo(
        validChars,
        { 
          rotationX: -90, 
          opacity: 0,
          transformOrigin: "50% 50% -30px"
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.03,
          ease: "power3.out",
          delay: 0.35,
        }
      );
    }
  }, [active]);

  return (
    <h3 
      className="font-sans font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-white flex flex-wrap gap-x-4 gap-y-1 justify-start"
      style={{ perspective: "1000px" }}
    >
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const index = wordIdx * 100 + charIdx;
            return (
              <span
                key={charIdx}
                ref={(el) => {
                  charsRef.current[index] = el;
                }}
                className="inline-block"
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h3>
  );
};

export default function StoryWorld({ onOpenProject, onOpenLightbox }: any) {
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);

    const scrollEl = scrollRef.current;
    const pinEl = pinRef.current;
    if (!scrollEl || !pinEl) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return scrollEl.scrollWidth - window.innerWidth;
      };

      const pinTrigger = gsap.fromTo(
        scrollEl,
        { x: 0 },
        {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            pin: true,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      chapters.forEach((chap, idx) => {
        const triggerEl = slideRefs.current[idx + 1];
        if (triggerEl) {
          ScrollTrigger.create({
            trigger: triggerEl,
            containerAnimation: pinTrigger,
            start: "left center",
            end: "right center",
            onToggle: (self) => {
              if (self.isActive) {
                gsap.to(pinEl, {
                  backgroundColor: chap.color,
                  duration: 1.2,
                  ease: "power2.out"
                });
              }
            }
          });
        }
      });
    }, pinEl);

    return () => ctx.revert();
  }, []);

  const handleOpenDetail = (idx: number) => {
    setExpandedIdx(idx);
  };

  const handleCloseDetail = () => {
    setExpandedIdx(null);
  };

  return (
    <div 
      ref={pinRef} 
      className="relative bg-[#111111] w-full overflow-hidden select-none transition-colors duration-1000 z-30"
    >
      <div
        ref={scrollRef}
        className="relative h-screen flex flex-row items-center w-[500vw] will-change-transform z-10"
      >
        <div 
          ref={(el) => { slideRefs.current[0] = el; }}
          className="w-[100vw] h-full flex flex-col justify-center px-12 md:px-24 text-[#F4EFE7] bg-[#111111] shrink-0 relative border-r border-[#F4EFE7]/10"
        >
          <div className="max-w-2xl z-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#9D8B74] font-bold block mb-4">
              [ SECTION 03 // BRAND NARRATIVES ]
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-6">
              The Story World of <br />
              <span className="italic text-[#9D8B74] font-semibold">Rahul Chanda</span>.
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#F4EFE7]/60 uppercase tracking-widest leading-relaxed max-w-lg mb-8">
              A spatial editorial journey through commercial product chapters. Click any card to expand details and review case files.
            </p>
          </div>
        </div>

        {chapters.map((chap, idx) => {
          const slideIndex = idx + 1;
          return (
            <div
              key={chap.num}
              ref={(el) => { slideRefs.current[slideIndex] = el; }}
              className="w-[100vw] h-full flex items-center justify-center shrink-0 px-8 md:px-24 border-r border-[#F4EFE7]/10 relative overflow-hidden"
            >
                <div className="relative w-full max-w-6xl grid grid-cols-12 gap-8 items-center z-10">
                  <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-[#F4EFE7]">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#9D8B74] block mb-2">{chap.subtitle}</span>
                    <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-none text-white mb-6">
                      {chap.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#F4EFE7]/70 leading-relaxed uppercase tracking-wider max-w-md mb-8">
                      {chap.desc}
                    </p>
                    <button
                      onClick={() => handleOpenDetail(idx)}
                      className="inline-flex items-center space-x-2 border border-[#9D8B74]/30 hover:border-white px-5 py-2.5 rounded-sm font-sans text-[10px] uppercase tracking-widest text-[#F4EFE7] hover:text-[#9D8B74] transition-all max-w-[200px]"
                    >
                      <span>Review Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <div className="col-span-12 md:col-span-6 flex justify-end">
                    <div
                      ref={(el) => { imageRefs.current[idx] = el; }}
                      onClick={() => handleOpenDetail(idx)}
                      className="w-full md:w-[35vw] rounded-sm relative group shadow-2xl cursor-pointer"
                    >
                      <img
                        src={chap.img}
                        alt={chap.title}
                        className="w-full h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>

      {expandedIdx !== null && (
        <div 
          className="fixed inset-0 w-full h-screen z-[995] flex items-center justify-center bg-black/95 text-[#F4EFE7] overflow-hidden"
          style={{ backgroundColor: chapters[expandedIdx].color }}
        >
          <button
            onClick={handleCloseDetail}
            className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-7xl px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="col-span-12 md:col-span-7 flex justify-center">
              <div 
                className="w-full md:w-[42vw] rounded-sm bg-black/40 border border-white/10 shadow-2xl relative"
              >
                <img
                  src={chapters[expandedIdx].img}
                  alt={chapters[expandedIdx].title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 text-left flex flex-col justify-center">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9D8B74] block mb-3">
                {chapters[expandedIdx].subtitle}
              </span>
              <FoldingTitle 
                text={chapters[expandedIdx].title} 
                active={expandedIdx !== null} 
              />
              <p className="font-sans text-xs md:text-sm text-[#F4EFE7]/80 leading-relaxed uppercase tracking-wider mt-6 max-w-md">
                {chapters[expandedIdx].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { id: "chrono-luxury", title: "Chrono Luxury" },
  { id: "liquid-shadow", title: "Liquid Shadow" },
  { id: "velvet-creme", title: "Velvet Crème" },
  { id: "sole-luxury", title: "Solé Luxury" },
];

const CAMPAIGN_PRODUCTS = [
  {
    id: "hairspray",
    img: "/best shots/Product image/hair-spray-bottle.png",
    fallbackImg: "/best shots/Product image/product-hairspray.webp",
    label: "Botanical Mist",
    sub: "01 / FRAGRANCE SERIES",
    desc: "A study in direct softbox lighting, accentuating the crystalline reflections of botanical extracts through premium glass contours.",
    bgClass: "bg-gradient-to-b from-[#1E252E]/10 to-transparent",
  },
  {
    id: "bodywash",
    img: "/best shots/Product image/bodywash-cream.png",
    fallbackImg: "/best shots/Product image/product-bodywash.webp",
    label: "Pure Wash",
    sub: "02 / BATH & BODY",
    desc: "Capturing tactile textures and rich cream densities using focused rim strobes to sculpt organic form from deep shadows.",
    bgClass: "bg-gradient-to-b from-[#2E2822]/10 to-transparent",
  },
  {
    id: "serum",
    img: "/best shots/Product image/serum.png",
    fallbackImg: "/best shots/Product image/product-serum.webp",
    label: "Glow Serum",
    sub: "03 / SKINCARE EDITORIAL",
    desc: "Exploring micro-droplet kinetic dynamics and refraction patterns under a controlled, high-contrast spotlight.",
    bgClass: "bg-gradient-to-b from-[#2E2125]/10 to-transparent",
  },
];

export default function FeaturedCampaign({
  onOpenProject,
  onOpenLightbox,
}: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridLinesContainerRef = useRef<HTMLDivElement>(null);
  const cameraFrameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const horizLines = gsap.utils.toArray(".ed-line-h");
      const vertLines = gsap.utils.toArray(".ed-line-v");

      gsap.fromTo(
        horizLines,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.8,
          stagger: 0.15,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        vertLines,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 2.0,
          stagger: 0.15,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        videoRef.current,
        { filter: "blur(20px) contrast(0.7)", scale: 1.12 },
        {
          filter: "blur(0px) contrast(1)",
          scale: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cameraFrameRef.current,
            start: "top 80%",
            end: "bottom 35%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".campaign-card-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured-campaign"
      className="relative w-full bg-[#0F0E0C] text-[#F4EFE7] overflow-hidden py-24 md:py-40 border-t border-b border-[#9D8B74]/20"
    >
      <div ref={gridLinesContainerRef} className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="ed-line-h absolute top-[50%] left-0 w-full h-[1px] bg-[#9D8B74]/5" />
        <div className="ed-line-v absolute left-[50%] top-0 h-full w-[1px] bg-[#9D8B74]/5" />
      </div>

      <div className="relative z-10 px-8 md:px-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 border-b border-[#9D8B74]/15 pb-10">
          <div className="tech-title-draw">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#9D8B74] font-semibold block mb-4">
              CASE FEATURE
            </span>
            <h2 className="font-serif text-5xl md:text-8xl font-light text-white tracking-tight leading-none">
              Still <span className="italic text-[#9D8B74] font-normal">Life</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col">
            <div 
              ref={cameraFrameRef}
              className="relative w-full rounded-sm bg-[#0A0A0A] border border-[#9D8B74]/10 shadow-2xl"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain cursor-pointer opacity-85 hover:opacity-100 transition-opacity duration-700 ease-out"
              >
                <source src="/best shots/Product image/product-energy-can.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div 
            ref={rightColumnRef}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {CAMPAIGN_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onOpenLightbox(prod.fallbackImg)}
                className="campaign-card-reveal group relative overflow-hidden rounded-sm border border-[#9D8B74]/10 p-6 flex flex-row items-center gap-6 cursor-pointer transition-all duration-500 hover:border-[#9D8B74]/40 bg-[#141311] z-10 shadow-sm"
              >
                <div className={`absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none ${prod.bgClass}`} />
                <div className="w-32 md:w-36 shrink-0 bg-black/20 rounded-sm border border-[#9D8B74]/10 flex items-center justify-center p-3">
                  <img
                    src={prod.img}
                    alt={prod.label}
                    className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-700 ease-out z-10"
                  />
                </div>
                <div className="flex-1 select-none z-10">
                  <span className="font-sans text-[8px] uppercase tracking-widest text-[#9D8B74]/60 block mb-1">
                    {prod.sub}
                  </span>
                  <h4 className="font-serif text-lg font-light tracking-wide text-[#F4EFE7] group-hover:text-[#9D8B74] transition-colors duration-300">
                    {prod.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

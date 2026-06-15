"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Commercial Product Photography",
    desc: "Creating high-contrast, razor-sharp visual layouts for luxury assets, timepieces, cosmetics, and packaging. I sculpt form and detail out of deep shadows using specialized, precise studio lighting setups.",
    img: "/best shots/Product image/product-watch-luxury.webp",
    alt: "Commercial product photography campaign",
  },
  {
    title: "Culinary & Beverage Arts",
    desc: "Capturing rich textures, steam, heat, and high-speed splash kinetics. Every drop is frozen in time to showcase gourmet flavor depth, fresh ingredient styling, and drink dynamics.",
    img: "/best shots/new-images/new-food-biriyani.png",
    alt: "High-end food and beverage styling photography",
  },
  {
    title: "High-End Retouching & Post-Production",
    desc: "Perfecting glass refractions, correcting dust and reflections, and balancing micro-detail texture mapping. Every pixel is edited with campaign-level color science and precision.",
    img: "/best shots/Product image/product-serum.webp",
    alt: "Before and after high-end beauty product retouching",
  },
  {
    title: "Dynamic Video Campaigns",
    desc: "Directing and filming cinematically paced video campaigns for social platforms and digital displays. Connecting fluid motion, crisp close-ups, and brand messaging into strategic video content.",
    img: "/best shots/ladies shoe/High-end-shoe.webp",
    alt: "Cinematic commercial video product capture",
  },
];

export default function CreativeServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(() => {
    // Scroll-driven trigger for changing the active index
    SERVICES.forEach((_, idx) => {
      ScrollTrigger.create({
        trigger: `.service-text-${idx}`,
        start: "top 60%",
        end: "bottom 60%",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveIdx(idx);
          }
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="services" 
      className="relative w-full bg-[#050505] text-[#f4efe7] py-32 md:py-48 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Column: Services Texts scrolling by */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-[#f4efe7]/30 block mb-6">
            CAPABILITIES & SPECIALIZATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none mb-16 max-w-md">
            Creating high-impact <span className="italic font-bold text-red-500">visual identities</span>.
          </h2>

          <div className="flex flex-col space-y-[25vh] md:space-y-[35vh] pb-[20vh]">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.title} 
                className={`service-text-${idx} transition-opacity duration-500 flex flex-col items-start ${
                  activeIdx === idx ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="font-mono text-xs text-red-500 mb-4 tracking-widest">
                  0{idx + 1} // SERVICE
                </div>
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-6">
                  {service.title}
                </h3>
                <p className="font-sans text-[#f4efe7]/70 leading-relaxed text-sm md:text-base max-w-[45ch]">
                  {service.desc}
                </p>

                {/* Mobile-only visible image (falls back to grid element) */}
                <div className="relative w-full mt-8 block md:hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Image Display (Desktop only) */}
        <div className="hidden md:flex md:w-1/2 sticky top-[20vh] h-[60vh] w-full flex-col justify-center items-center">
          <div className="relative w-full max-w-[480px] bg-black">
            {SERVICES.map((service, idx) => (
              <div
                key={`sticky-img-${idx}`}
                className={`w-full transition-all duration-700 ease-in-out ${
                  activeIdx === idx 
                    ? "opacity-100 scale-100 filter blur-0 block" 
                    : "opacity-0 scale-95 filter blur-[10px] pointer-events-none hidden"
                }`}
              >
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={960}
                  height={540}
                  sizes="50vw"
                  className="w-full h-auto object-contain"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

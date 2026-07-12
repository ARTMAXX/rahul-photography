"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  pricing: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Product Photography",
    category: "Commercial",
    description: "High-end product shots that showcase every detail. From small accessories to large furniture pieces, I create images that sell.",
    deliverables: ["20-50 edited high-res images", "White & lifestyle backgrounds", "Multiple angles & details", "Retouching included"],
    pricing: "Starting at ₹25,000",
    image: "◰"
  },
  {
    id: 2,
    title: "Fashion & Lifestyle",
    category: "Editorial",
    description: "Editorial-quality fashion imagery for brands and publications. Lookbooks and campaigns that tell your brand's story.",
    deliverables: ["30-80 edited images", "Creative direction", "Model coordination", "Location scouting"],
    pricing: "Starting at ₹40,000",
    image: "◈"
  },
  {
    id: 3,
    title: "Food & Beverage",
    category: "Culinary",
    description: "Mouth-watering food photography for restaurants and brands. Make your menu items irresistible.",
    deliverables: ["15-40 styled shots", "Props & styling", "Overhead & hero angles", "Menu-ready images"],
    pricing: "Starting at ₹30,000",
    image: "◐"
  },
  {
    id: 4,
    title: "Brand Content",
    category: "Strategy",
    description: "Complete visual identity creation. Cohesive brand photography that establishes your market presence.",
    deliverables: ["50-100 images", "Brand guidelines", "Social media assets", "3 months support"],
    pricing: "Starting at ₹75,000",
    image: "◇"
  }
];

export default function ServicesCarousel3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !carouselRef.current) return;

    const section = sectionRef.current;
    const carousel = carouselRef.current;

    // Pin the section and animate carousel rotation based on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Rotate carousel
          const rotation = progress * 360 * 1.5;
          gsap.set(carousel, {
            rotateY: rotation
          });

          // Update active index based on rotation
          const normalizedRotation = ((rotation % 360) + 360) % 360;
          const index = Math.round((normalizedRotation / 360) * services.length) % services.length;
          setActiveIndex(index);
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden"
    >
      {/* Title - fades out on scroll */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center"
        style={{
          opacity: 1 - scrollProgress * 2
        }}
      >
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4">
          Services in Motion
        </h2>
        <p className="text-white/40 text-lg">Scroll to explore what I offer</p>
      </motion.div>

      {/* 3D Carousel Container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-[2000px]">
        <div
          ref={carouselRef}
          className="relative w-[400px] h-[500px] transform-style-3d"
        >
          {services.map((service, index) => {
            const angle = (360 / services.length) * index;
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={service.id}
                className="absolute inset-0 backface-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(600px)`,
                }}
              >
                <div
                  className={`
                    w-full h-full bg-gradient-to-br from-white/5 to-white/[0.02]
                    border border-white/10 rounded-2xl p-8
                    backdrop-blur-sm
                    transition-all duration-700
                    ${isActive ? 'scale-110 border-white/30' : 'scale-100'}
                  `}
                >
                  {/* Icon */}
                  <div className="text-6xl mb-6 text-white/80">
                    {service.image}
                  </div>

                  {/* Category */}
                  <div className="text-xs tracking-[0.2em] text-white/40 mb-3">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/50">
                        <span className="text-white/30 mt-1">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="text-sm font-medium text-white/90 mt-auto">
                    {service.pricing}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active Service Details Panel - slides in from right */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] p-12 bg-gradient-to-l from-[#050505] to-transparent z-10"
        style={{
          opacity: scrollProgress > 0.1 ? 1 : 0,
          x: scrollProgress > 0.1 ? 0 : 100
        }}
      >
        <div className="space-y-6">
          <div>
            <div className="text-xs tracking-[0.2em] text-white/40 mb-2">
              CURRENT SERVICE
            </div>
            <h3 className="text-3xl font-light text-white tracking-tight">
              {services[activeIndex].title}
            </h3>
          </div>

          <div className="h-px bg-gradient-to-r from-white/20 to-transparent" />

          <div>
            <div className="text-xs tracking-[0.2em] text-white/40 mb-3">
              DELIVERABLES
            </div>
            <div className="space-y-2">
              {services[activeIndex].deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-white/30 mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] text-white/40 mb-2">
              INVESTMENT
            </div>
            <div className="text-xl font-light text-white">
              {services[activeIndex].pricing}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {services.map((_, index) => (
          <div
            key={index}
            className={`
              h-1 rounded-full transition-all duration-300
              ${index === activeIndex
                ? 'w-12 bg-white'
                : 'w-1 bg-white/20'
              }
            `}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  pricing: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Product Photography",
    icon: "◰",
    shortDesc: "High-end commercial product shots that showcase every detail.",
    fullDesc: "Professional product photography for e-commerce, marketing campaigns, and brand identity. From small accessories to large furniture pieces, I create images that sell.",
    deliverables: [
      "20-50 edited high-res images",
      "White background & lifestyle shots",
      "Multiple angles & detail captures",
      "Retouching & color correction",
      "Web-optimized versions"
    ],
    pricing: "Starting at ₹25,000"
  },
  {
    id: 2,
    title: "Fashion & Lifestyle",
    icon: "◈",
    shortDesc: "Editorial-quality fashion imagery for brands and publications.",
    fullDesc: "From lookbooks to editorial campaigns, I craft fashion photography that tells your brand's story with emotional depth and visual impact.",
    deliverables: [
      "30-80 edited images per session",
      "Creative direction & styling guidance",
      "Model coordination (if needed)",
      "Location scouting & setup",
      "Post-production & retouching"
    ],
    pricing: "Starting at ₹40,000"
  },
  {
    id: 3,
    title: "Food & Beverage",
    icon: "◐",
    shortDesc: "Mouth-watering food photography for restaurants and brands.",
    fullDesc: "Make your menu items irresistible with photography that captures texture, color, and appetite appeal. Perfect for menus, social media, and marketing.",
    deliverables: [
      "15-30 hero shots per session",
      "Styled & natural light setups",
      "Props & surface styling",
      "Multiple compositions",
      "Menu-ready files"
    ],
    pricing: "Starting at ₹20,000"
  },
  {
    id: 4,
    title: "Commercial Campaigns",
    icon: "◉",
    shortDesc: "Full-scale campaign photography from concept to delivery.",
    fullDesc: "Complete visual campaigns tailored to your brand's goals. Includes creative direction, production, and a comprehensive suite of assets for all platforms.",
    deliverables: [
      "50-150+ campaign images",
      "Creative concepting & storyboarding",
      "Location & talent management",
      "Multi-format deliverables",
      "Usage rights consultation"
    ],
    pricing: "Custom quote"
  },
  {
    id: 5,
    title: "Brand Content Creation",
    icon: "◇",
    shortDesc: "Monthly content packages for consistent brand presence.",
    fullDesc: "Ongoing photography services to keep your social media, website, and marketing materials fresh. Perfect for brands who need regular, high-quality content.",
    deliverables: [
      "40-100 images per month",
      "Content calendar planning",
      "Multiple formats & sizes",
      "Priority scheduling",
      "Quick turnaround (48-72hrs)"
    ],
    pricing: "₹35,000/month"
  },
  {
    id: 6,
    title: "Architectural & Interiors",
    icon: "◻",
    shortDesc: "Architectural photography that showcases space and design.",
    fullDesc: "Capture the essence of your architectural projects and interior designs with precision and artistry. Ideal for real estate, hospitality, and design portfolios.",
    deliverables: [
      "20-40 wide & detail shots",
      "HDR & twilight photography",
      "Vertical corrections",
      "Floor plan integration (optional)",
      "Virtual staging consultation"
    ],
    pricing: "Starting at ₹30,000"
  }
];

export default function ServicesShowcase() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, filter: "blur(20px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }
  }, { scope: containerRef });

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black py-32 md:py-40 px-4 md:px-12 overflow-hidden"
    >
      {/* Ambient gradient orb - different position */}
      <div
        className="absolute top-1/3 right-1/4 w-[900px] h-[900px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Eyebrow tag */}
        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
          Services
        </span>

        {/* Heading */}
        <h2 
          ref={headingRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-12 max-w-[20ch]"
        >
          What I <span className="italic">craft</span> for you.
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-[60ch] mb-24 leading-relaxed">
          Specialized photography services tailored to your brand's unique needs. Click any service to explore details, deliverables, and pricing.
        </p>

        {/* Expandable Service Cards - Accordion Style */}
        <div className="space-y-4">
          {services.map((service, idx) => {
            const isExpanded = expandedService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.08,
                  ease: [0.32, 0.72, 0, 1]
                }}
              >
                {/* Double-bezel wrapper */}
                <div className={`
                  p-2 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${isExpanded 
                    ? 'bg-white/[0.06] ring-2 ring-white/20' 
                    : 'bg-white/[0.02] ring-1 ring-white/10 hover:bg-white/[0.04] hover:ring-white/15'
                  }
                `}>
                  <div className="rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">
                    {/* Service Header - Always Visible */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full p-6 md:p-8 text-left transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 md:gap-6 flex-1">
                          {/* Icon */}
                          <div className={`
                            w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-500
                            ${isExpanded 
                              ? 'bg-white/15 ring-2 ring-white/25 text-white scale-110' 
                              : 'bg-white/5 ring-1 ring-white/10 text-white/40'
                            }
                          `}>
                            {service.icon}
                          </div>

                          {/* Title & Short Desc */}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-white/60 leading-relaxed">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Expand/Collapse Button */}
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                          ${isExpanded 
                            ? 'bg-white/15 ring-1 ring-white/25 text-white rotate-180' 
                            : 'bg-white/5 ring-1 ring-white/10 text-white/40 hover:bg-white/10 hover:text-white/60'
                          }
                        `}>
                          ↓
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-6" />

                            {/* Grid: Description + Deliverables */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                              {/* Full Description */}
                              <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                                  Overview
                                </h4>
                                <p className="text-white/80 leading-relaxed">
                                  {service.fullDesc}
                                </p>
                              </div>

                              {/* Deliverables */}
                              <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                                  What You Get
                                </h4>
                                <ul className="space-y-2">
                                  {service.deliverables.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05, duration: 0.3 }}
                                      className="flex items-start gap-3 text-white/70 text-sm"
                                    >
                                      <span className="text-white/40 mt-1">•</span>
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Pricing + CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
                              <div>
                                <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-1">
                                  Investment
                                </span>
                                <span className="text-2xl font-serif text-white">
                                  {service.pricing}
                                </span>
                              </div>

                              <button className="group">
                                <div className="p-1.5 rounded-full bg-white/[0.05] ring-1 ring-white/20 transition-all duration-500 hover:bg-white/10 hover:ring-white/30 active:scale-95">
                                  <div className="px-6 py-2.5 rounded-full bg-white/10 flex items-center gap-2 transition-all duration-300 group-hover:bg-white/15">
                                    <span className="text-sm font-medium text-white">
                                      Inquire Now
                                    </span>
                                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs transition-transform duration-300 group-hover:translate-x-1">
                                      →
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

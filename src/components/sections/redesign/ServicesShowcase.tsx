"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Clapperboard,
  Pizza,
  Repeat,
  Shirt,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  pricing: string;
  /** URL of the dedicated service subpage, if one exists. */
  subpageHref?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Product Photography",
    icon: Camera,
    shortDesc: "High-end commercial product shots that showcase every detail.",
    fullDesc:
      "Professional product photography for e-commerce, marketing campaigns, and brand identity. From small accessories to large furniture pieces, I create images that sell.",
    subpageHref: "/services/product-photography",
    deliverables: [
      "20-50 edited high-res images",
      "White background & lifestyle shots",
      "Multiple angles & detail captures",
      "Retouching & color correction",
      "Web-optimized versions",
    ],
    pricing: "Starting at \u20B925,000",
  },
  {
    id: 2,
    title: "Fashion & Lifestyle",
    icon: Shirt,
    shortDesc: "Editorial-quality fashion imagery for brands and publications.",
    fullDesc:
      "From lookbooks to editorial campaigns, I craft fashion photography that tells your brand's story with emotional depth and visual impact.",
    deliverables: [
      "30-80 edited images per session",
      "Creative direction & styling guidance",
      "Model coordination (if needed)",
      "Location scouting & setup",
      "Post-production & retouching",
    ],
    pricing: "Starting at \u20B940,000",
  },
  {
    id: 3,
    title: "Food & Beverage",
    icon: Pizza,
    shortDesc: "Mouth-watering food photography for restaurants and brands.",
    fullDesc:
      "Make your menu items irresistible with photography that captures texture, color, and appetite appeal. Perfect for menus, social media, and marketing.",
    subpageHref: "/services/food-beverage-photography",
    deliverables: [
      "15-30 hero shots per session",
      "Styled & natural light setups",
      "Props & surface styling",
      "Multiple compositions",
      "Menu-ready files",
    ],
    pricing: "Starting at \u20B920,000",
  },
  {
    id: 4,
    title: "Commercial Campaigns",
    icon: Clapperboard,
    shortDesc:
      "Full-scale campaign photography from concept to delivery.",
    fullDesc:
      "Complete visual campaigns tailored to your brand's goals. Includes creative direction, production, and a comprehensive suite of assets for all platforms.",
    subpageHref: "/services/commercial-campaigns",
    deliverables: [
      "50-150+ campaign images",
      "Creative concepting & storyboarding",
      "Location & talent management",
      "Multi-format deliverables",
      "Usage rights consultation",
    ],
    pricing: "Custom quote",
  },
  {
    id: 5,
    title: "Brand Content Creation",
    icon: Repeat,
    shortDesc: "Monthly content packages for consistent brand presence.",
    fullDesc:
      "Ongoing photography services to keep your social media, website, and marketing materials fresh. Perfect for brands who need regular, high-quality content.",
    deliverables: [
      "40-100 images per month",
      "Content calendar planning",
      "Multiple formats & sizes",
      "Priority scheduling",
      "Quick turnaround (48-72hrs)",
    ],
    pricing: "\u20B935,000/month",
  },
  {
    id: 6,
    title: "Architectural & Interiors",
    icon: Building2,
    shortDesc:
      "Architectural photography that showcases space and design.",
    fullDesc:
      "Capture the essence of your architectural projects and interior designs with precision and artistry. Ideal for real estate, hospitality, and design portfolios.",
    deliverables: [
      "20-40 wide & detail shots",
      "HDR & twilight photography",
      "Vertical corrections",
      "Floor plan integration (optional)",
      "Virtual staging consultation",
    ],
    pricing: "Starting at \u20B930,000",
  },
];

export default function ServicesShowcase() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  // NOTE: the FAQPage JSON-LD for this section is server-rendered in
  // src/app/services/page.tsx — client-injected schema is less reliable
  // for crawlers and duplicated work on every mount.
  const stickerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Heading reveal â… cinematic blur to sharp
    if (headingRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1.2,
          },
        })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, filter: "blur(24px)", rotateX: 12 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotateX: 0,
            ease: "power3.out",
            duration: 1,
          }
        );
    }

    // Sticker parallax â… follows scroll
    if (stickerRef.current) {
      gsap.to(stickerRef.current, {
        y: -200,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    // Each service card â… staggered entrance
    servicesRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    // NOTE: no global ScrollTrigger kill here — useGSAP's context revert
    // already cleans up ONLY the triggers this component created. Killing
    // getAll() would destroy Hero/About/etc. triggers on unmount.

    return undefined;
  }, { scope: containerRef });

  // Stagger reset when expanded service changes
  useEffect(() => {
    // Brief delay to let the DOM settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, [expandedService]);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  // Scroll to the enquiry form and pre-select the service they asked about.
  const inquireAbout = (serviceTitle: string) => {
    // On the homepage: dispatch + smooth-scroll to the in-page contact section.
    // On a standalone /services page: navigate to /contact?service=â…
    if (window.location.pathname === "/") {
      window.dispatchEvent(
        new CustomEvent("inquire-service", { detail: serviceTitle })
      );
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/contact?service=${encodeURIComponent(
        serviceTitle
      )}`;
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full py-32 md:py-40 px-4 md:px-12 overflow-hidden bg-[#070707]"
    >
      {/* Sticker Parallax Gradient */}
      <div
        ref={stickerRef}
        className="absolute top-1/4 right-0 w-[1200px] h-[1200px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section header â… two-column: headline left, intro + proof right */}
        <div className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-end">
          <div>
            <h2
              ref={headingRef}
              className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white max-w-[16ch]"
            >
              <span className="text-[#e83b2c]">Services</span>
              <br />
              tailored to your
              <br />
              vision.
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="text-lg md:text-xl text-white/60 max-w-[46ch] leading-relaxed">
              Specialized photography services tailored to your brand&apos;s
              unique needs. Click any service to explore details, deliverables,
              and pricing.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-[46ch]">
              {[
                { value: "6+", label: "Years behind the lens" },
                { value: "120+", label: "Brands shot & delivered" },
                { value: "2,000+", label: "Images edited & graded" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-4">
                  <div className="text-3xl md:text-4xl font-serif text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-3 md:space-y-4">
          {services.map((service, idx) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                ref={(el) => { servicesRef.current[idx] = el; }}
              >
                {/* Double-bezel accordion */}
                <div
                  className={`p-[2px] rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isExpanded
                      ? "bg-gradient-to-br from-[#e83b2c]/30 via-[#8c1c13]/10 to-transparent"
                      : "bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div
                    className={`rounded-[calc(2rem-2px)] transition-all duration-700 bg-gradient-to-br from-black to-[#0a0a0a] overflow-hidden ${
                      isExpanded ? "ring-1 ring-[#e83b2c]/30" : ""
                    }`}
                  >
                    {/* Header â… Always Visible */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full p-6 md:p-8 text-left transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 md:gap-6 flex-1 min-w-0">
                          {/* Icon with glow */}
                          <div
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                              isExpanded
                                ? "bg-[#e83b2c]/15 ring-2 ring-[#e83b2c]/30 text-[#e83b2c] scale-110"
                                : "bg-white/5 ring-1 ring-white/10 text-white/40"
                            }`}
                          >
                            <service.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                          </div>

                          {/* Title + Short Desc */}
                          <div className="min-w-0 flex-1">
                            <h3 className="h-card mb-2 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="t-body line-clamp-2">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Expand indicator */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                            isExpanded
                              ? "bg-[#e83b2c]/15 ring-1 ring-[#e83b2c]/30 text-[#e83b2c]"
                              : "bg-white/5 ring-1 ring-white/10 text-white/40 hover:bg-white/10"
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className={`transition-transform duration-500 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                            {/* Gold divider */}
                            <div className="w-full h-px bg-gradient-to-r from-[#ffffff]/40 via-white/10 to-transparent mb-8" />

                            {/* Grid: Overview + Deliverables */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                              {/* Full Description */}
                              <div>
                                <h4 className="h-eyebrow mb-4">
                                  Overview
                                </h4>
                                <p className="t-body">
                                  {service.fullDesc}
                                </p>
                              </div>

                              {/* Deliverables */}
                              <div>
                                <h4 className="h-eyebrow mb-4">
                                  What You Get
                                </h4>
                                <ul className="space-y-3">
                                  {service.deliverables.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -15 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: i * 0.05,
                                        duration: 0.4,
                                        ease: [0.32, 0.72, 0, 1],
                                      }}
                                      className="flex items-start gap-3 t-body"
                                    >
                                      <span className="text-[#e83b2c]/50 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e83b2c]/50 flex-shrink-0" />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Pricing + CTA Footer */}
                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent ring-1 ring-white/10">
                              <div>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium block mb-1">
                                  Investment
                                </span>
                                <span className="text-2xl md:text-3xl font-serif text-[#e83b2c]">
                                  {service.pricing}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 flex-wrap">
                                {service.subpageHref && (
                                  <Link
                                    href={service.subpageHref}
                                    className="group/sub inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-[#e83b2c] transition-colors duration-300"
                                    data-cursor="pointer"
                                    aria-label={`Read the full ${service.title} service page`}
                                  >
                                    <span>Full service page</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5" />
                                  </Link>
                                )}
                                <button
                                  onClick={() => inquireAbout(service.title)}
                                  className="group relative"
                                  aria-label={`Inquire about ${service.title}`}
                                >
                                  <div className="p-[1.5px] rounded-full bg-gradient-to-br from-[#e83b2c]/40 to-[#e83b2c]/10 transition-all duration-500 group-hover:from-[#e83b2c]/70 group-hover:to-[#e83b2c]/30 active:scale-[0.97]">
                                    <div className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-black flex items-center gap-3 transition-all duration-300">
                                      <span className="text-sm font-medium text-white/90 group-hover:text-white">
                                        Inquire Now
                                      </span>
                                      <div className="w-5 h-5 rounded-full bg-[#e83b2c]/20 flex items-center justify-center text-[#e83b2c] text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-[2px]">
                                        <ArrowUpRight className="w-3 h-3" />
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

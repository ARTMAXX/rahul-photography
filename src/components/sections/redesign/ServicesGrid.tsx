"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Pizza, Shirt, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceLink {
  href: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
}

// Dedicated deep-link grid for the 4 services that have full subpages.
// (The 6-service accordion on /services and on the homepage above covers the
// complete offering; this grid is the SEO-friendly path into the ranked
// service landing pages.)
const services: ServiceLink[] = [
  {
    href: "/services/product-photography",
    title: "Product Photography",
    icon: Camera,
    shortDesc:
      "Amazon, Flipkart & Shopify-ready packshots, cosmetics, watches, jewelry and footwear.",
    longDesc:
      "E-commerce catalogue volumes, white-background packshots, and creative hero imagery — engineered for marketplace compliance and brand campaigns across India.",
    highlights: [
      "Marketplace-compliant packshots",
      "In-house retouching & colour grading",
      "Batch catalogue workflows (20—200+ SKUs)",
    ],
  },
  {
    href: "/services/food-beverage-photography",
    title: "Food & Beverage Photography",
    icon: Pizza,
    shortDesc:
      "Restaurants, menus, Swiggy/Aomato, and beverage splash photography.",
    longDesc:
      "Menu photography, restaurant campaigns, beverage splash & glass work, ingredient styling — engineered to make kitchens and bars sell more.",
    highlights: [
      "Menu & delivery-app ready",
      "Beverage splash & glass control",
      "Restaurant, cafe & brand work",
    ],
  },
  {
    href: "/services/footwear-fashion-photography",
    title: "Footwear & Fashion Photography",
    icon: Shirt,
    shortDesc:
      "E-commerce footwear, apparel lookbooks, and editorial fashion campaigns.",
    longDesc:
      "On-location shoots for footwear labels and apparel brands — detail macros, lifestyle lookbooks, and campaign imagery for D2C, marketplaces, and editorial.",
    highlights: [
      "Marketplace-ready shoe angles",
      "Lookbook & campaign production",
      "Editorial & D2C-ready grading",
    ],
  },
  {
    href: "/services/commercial-campaigns",
    title: "Commercial Campaigns",
    icon: Clapperboard,
    shortDesc:
      "Art-directed brand campaigns — concept, production, retouch, delivery.",
    longDesc:
      "Full-scale campaign photography from brief to delivery — creative direction, set design, lighting, talent, retouch, and multi-format assets for every platform.",
    highlights: [
      "End-to-end production",
      "Multi-format delivery",
      "Licensing & usage rights",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section
      aria-label="Specialized photography services"
      className="relative w-full py-24 md:py-32 px-4 md:px-12 bg-[#070707] border-t border-white/5"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest mb-4">
              Deep-dive services
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white max-w-[18ch]">
              Specialized
              <br />
              <span className="italic text-[#e83b2c]">service pages</span>.
            </h2>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-[46ch] leading-relaxed lg:pb-3">
            Each service below has its own page with full deliverables, platform
            notes, and India-wide coverage. Click into any one to see the work
            and book a shoot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href={service.href}
                  className="group relative block p-[2px] rounded-3xl bg-white/[0.04] hover:bg-gradient-to-br hover:from-[#e83b2c]/30 hover:via-[#8c1c13]/10 hover:to-transparent transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  data-cursor="pointer"
                >
                  <div className="rounded-[calc(1.5rem-2px)] bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 h-full">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 ring-1 ring-white/10 text-white/50 group-hover:bg-[#e83b2c]/15 group-hover:ring-[#e83b2c]/30 group-hover:text-[#e83b2c] group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                      </div>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 ring-1 ring-white/10 text-white/40 group-hover:bg-[#e83b2c]/15 group-hover:ring-[#e83b2c]/30 group-hover:text-[#e83b2c] transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-white mb-3 transition-colors duration-300 group-hover:text-[#e83b2c]">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-white/55 leading-relaxed mb-3">
                      {service.shortDesc}
                    </p>

                    <p className="text-xs md:text-sm text-white/35 leading-relaxed mb-6 hidden md:block">
                      {service.longDesc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#e83b2c]/60 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-xs text-[#e83b2c]/80 font-medium uppercase tracking-wide pt-4 border-t border-white/5">
                      Explore service
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        â" '
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

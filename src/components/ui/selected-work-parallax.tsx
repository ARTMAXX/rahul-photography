"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  keywords: string;
}

interface SelectedWorkParallaxProps {
  items?: ServiceItem[];
}

export const SelectedWorkParallax = ({
  items = defaultServices,
}: SelectedWorkParallaxProps) => {
  return (
    <section
      id="services-preview"
      className="relative py-32 md:py-48 px-4 md:px-12 bg-[#070707] border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* H2 with SEO-rich heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white max-w-[18ch]"
        >
          Commercial
          <br />
          photography for{" "}
          <span className="italic text-[#e83b2c]">brands</span> across
          India.
        </motion.h2>

        {/* Long-form SEO paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/60 max-w-[65ch] mt-8 leading-relaxed"
        >
          Product, food, beverage, footwear, and advertising campaign
          photography from a Dehradun-based commercial photographer working
          with brands across India  —  from e-commerce studios in Delhi NCR to
          F&amp;B launches in Mumbai, Bengaluru, and beyond.
        </motion.p>

        {/* SEO-rich service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mt-16 md:mt-20 border border-white/5">
          {items.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={service.link}
                className="group block bg-[#070707] p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300 h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight group-hover:text-[#e83b2c] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/50 mt-3 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-xs text-white/30 mt-4 uppercase tracking-widest">
                      {service.keywords}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#e83b2c] group-hover:bg-[#e83b2c] transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA  —  drives traffic to the full services page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#e83b2c] hover:bg-[#e83b2c] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
          >
            View all services
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// SEO-optimized service preview items linking to real subpages
const defaultServices: ServiceItem[] = [
  {
    title: "Product Photography",
    description:
      "E-commerce packshots, luxury product detail, and catalog imagery built to convert. White-background, lifestyle, and 360° product photography for D2C brands, Amazon listings, and Shopify stores.",
    link: "/services/product-photography",
    keywords: "Product photographer India — E-commerce photography — Packshot studio",
  },
  {
    title: "Food & Beverage Photography",
    description:
      "Restaurant menu photography, beverage splash shots, and food styling for delivery apps, cookbooks, and brand campaigns. Mumbai, Delhi, Bengaluru and Dehradun on-location shoots.",
    link: "/services/food-beverage-photography",
    keywords: "Food photographer India — Restaurant menu — Beverage splash photography",
  },
  {
    title: "Footwear & Fashion Photography",
    description:
      "Sneaker product photography, apparel lookbooks, and e-commerce catalog shoots for footwear brands and fashion labels. White cutout, on-model, and lifestyle campaign imagery.",
    link: "/services/footwear-fashion-photography",
    keywords: "Footwear photographer India — Sneaker photography — Fashion catalog",
  },
  {
    title: "Commercial Campaign Photography",
    description:
      "Art-directed advertising campaigns for brand launches, billboards, and digital ads. Concept-to-delivery service covering creative direction, production, retouching, and campaign rollout.",
    link: "/services/commercial-campaigns",
    keywords: "Commercial photographer India — Ad campaign — Brand launch photography",
  },
];

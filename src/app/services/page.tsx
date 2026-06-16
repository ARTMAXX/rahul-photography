"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Product Photography",
    subtitle: "Precision. Detail. Impact.",
    description:
      "High-end commercial imagery with obsessive attention to lighting, texture, and emotion. From luxury watches to consumer electronics, every frame tells a story that moves product and builds brand equity.",
    capabilities: [
      { name: "Hero Shots", desc: "Flagship product imagery for campaigns" },
      { name: "Lifestyle Integration", desc: "Products in real-world context" },
      { name: "E-commerce Ready", desc: "White background, 360°, cutouts" },
      { name: "Editorial Quality", desc: "Magazine-grade artistic shots" },
    ],
    image: "/best shots/Product image/product-watch-luxury.webp",
    pricing: "Starting at ₹15,000 per shot",
    deliverables: ["RAW + Retouched files", "Web-optimized variants", "Usage rights included"],
  },
  {
    id: 2,
    number: "02",
    title: "Beverage & Splash",
    subtitle: "Freeze time. Capture motion.",
    description:
      "Dynamic liquid motion captured at the perfect millisecond. Technical precision meets artistic vision with sub-millisecond high-speed photography for cocktails, pours, and splash moments that stop viewers mid-scroll.",
    capabilities: [
      { name: "Splash Photography", desc: "Controlled liquid motion capture" },
      { name: "Cocktail Artistry", desc: "Craft beverage presentation" },
      { name: "Pour Shots", desc: "Dynamic action sequences" },
      { name: "Macro Detail", desc: "Condensation, bubbles, texture" },
    ],
    image: "/best shots/Beverage images/bev-macro.webp",
    pricing: "Starting at ₹20,000 per setup",
    deliverables: ["High-speed sequences", "Multiple angles", "Composite-ready layers"],
  },
  {
    id: 3,
    number: "03",
    title: "Food Styling & Photography",
    subtitle: "Make them taste it with their eyes.",
    description:
      "Culinary art brought to life through cinematic lighting and meticulous composition. From fine dining to recipe content, every element is placed with intention, every texture captured in exquisite detail.",
    capabilities: [
      { name: "Fine Dining", desc: "Michelin-level presentation" },
      { name: "Recipe Content", desc: "Step-by-step process shots" },
      { name: "Menu Design", desc: "Restaurant marketing assets" },
      { name: "Campaign Ready", desc: "Large-format print quality" },
    ],
    image: "/best shots/Food photo/food-cream-macro.webp",
    pricing: "Starting at ₹18,000 per dish",
    deliverables: ["Styled & photographed", "Multiple compositions", "Overhead & 45° angles"],
  },
  {
    id: 4,
    number: "04",
    title: "Fashion & Footwear",
    subtitle: "From luxury heels to street sneakers.",
    description:
      "Detail-obsessed product and lifestyle photography that moves product. Whether it's the texture of Italian leather or the rebellious energy of streetwear, every shot is engineered for maximum conversion and brand storytelling.",
    capabilities: [
      { name: "Product Detail", desc: "Material, stitching, craftsmanship" },
      { name: "Campaign Shoots", desc: "Styled lifestyle imagery" },
      { name: "Lookbook Production", desc: "Full seasonal collections" },
      { name: "E-comm Assets", desc: "Consistent, clean product shots" },
    ],
    image: "/best shots/ladies shoe/High-end-shoe.webp",
    pricing: "Starting at ₹12,000 per style",
    deliverables: ["Multiple angles", "Detail macros", "Lifestyle & product mix"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Brief",
    desc: "Deep dive into your brand, product, and vision. Understanding goals, audience, and intended use cases.",
  },
  {
    step: "02",
    title: "Concept & Moodboard",
    desc: "Visual direction proposal with references, lighting diagrams, and prop selection for your approval.",
  },
  {
    step: "03",
    title: "Production Day",
    desc: "Controlled studio environment with professional lighting, styling, and on-set previews for real-time feedback.",
  },
  {
    step: "04",
    title: "Editing & Delivery",
    desc: "Color grading, retouching, and final delivery in multiple formats optimized for print and digital use.",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service cards animation
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -60, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });

      // Process steps animation
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-black min-h-screen">
      {/* Ambient gradient orbs */}
      <div
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Header section */}
      <div className="relative z-10 px-4 md:px-12 pt-32 pb-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mb-12 text-white/60 hover:text-white transition-colors duration-500"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="text-sm uppercase tracking-widest">Back to Home</span>
        </Link>

        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
          Services & Capabilities
        </span>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-8 max-w-[18ch]">
          Crafting visual narratives with <span className="italic font-bold">technical mastery</span>.
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-[60ch] mb-12">
          From product to plate, from pour to portrait — every project gets obsessive attention to detail and cinematic execution.
        </p>
      </div>

      {/* Services grid */}
      <div className="relative z-10 px-4 md:px-12 pb-32">
        <div className="max-w-[1600px] mx-auto space-y-12 md:space-y-16">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="service-card">
              {/* Double-bezel outer shell */}
              <div className="p-2 rounded-[3rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]">
                <div className="rounded-[calc(3rem-0.5rem)] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image side */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={100} className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                      
                      {/* Number overlay */}
                      <div className="absolute top-8 left-8 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-white text-xl font-medium">
                        {service.number}
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                        {service.subtitle}
                      </h3>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        {service.title}
                      </h2>
                      <p className="text-white/70 leading-relaxed mb-8 max-w-[50ch]">
                        {service.description}
                      </p>

                      {/* Expandable capabilities */}
                      <button
                        onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                        className="group inline-flex items-center gap-3 w-max mb-8 text-white hover:text-white/80 transition-colors duration-500"
                      >
                        <span className="text-sm font-medium uppercase tracking-wider">View Capabilities</span>
                        <span className={`transition-transform duration-500 ${activeService === service.id ? 'rotate-180' : ''}`}>
                          ↓
                        </span>
                      </button>

                      {/* Capabilities list */}
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          activeService === service.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {service.capabilities.map((cap, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10"
                            >
                              <h4 className="text-white font-medium mb-1">{cap.name}</h4>
                              <p className="text-sm text-white/50">{cap.desc}</p>
                            </div>
                          ))}
                        </div>

                        {/* Pricing & deliverables */}
                        <div className="space-y-4 pt-6 border-t border-white/10">
                          <div>
                            <span className="text-xs uppercase tracking-wider text-white/40">Starting Price</span>
                            <p className="text-lg text-white font-medium">{service.pricing}</p>
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-white/40 block mb-2">Deliverables</span>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-white w-max transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/20 active:scale-[0.98]"
                      >
                        <span className="text-sm font-medium">Book This Service</span>
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process section */}
      <div className="relative z-10 px-4 md:px-12 py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
            How It Works
          </span>

          <h2 className="text-5xl md:text-7xl font-serif text-white mb-16 max-w-[20ch]">
            From concept to <span className="italic font-bold">final frame</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="process-step p-2 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]"
              >
                <div className="p-8 rounded-[calc(2rem-0.5rem)] bg-white/[0.02] min-h-[280px] flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 text-sm font-medium mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


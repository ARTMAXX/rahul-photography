"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PostSwiper from "@/components/ui/PostSwiper";
import type { Swiper as SwiperType } from "swiper";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Luxe Timepieces",
    quote: "Rahul's product photography elevated our entire brand. The attention to detail and lighting mastery is unmatched. Our e-commerce conversion rate increased by 34% after implementing his images.",
    project: "Luxury Watch Collection 2025"
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Founder & CEO",
    company: "Bean & Brew Coffee",
    quote: "Working with Rahul was seamless from concept to delivery. His food photography doesn't just look good—it makes you taste the coffee through the screen. A true artist with commercial sensibility.",
    project: "Artisan Coffee Campaign"
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    role: "Creative Head",
    company: "Urban Threads",
    quote: "Rahul brought our vision to life with editorial-quality fashion photography. His ability to capture emotion and movement while maintaining technical perfection is rare. Highly recommend for any fashion brand.",
    project: "Spring/Summer Lookbook 2026"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Brand Manager",
    company: "AudioTech India",
    quote: "The level of professionalism and creative output exceeded our expectations. Rahul's product shots made our headphones look like art pieces. The campaign was our most successful product launch to date.",
    project: "Premium Audio Launch"
  },
  {
    id: 5,
    name: "Anjali Desai",
    role: "Head of Marketing",
    company: "Restaurant Noir",
    quote: "Rahul transformed our menu with stunning food photography. Each dish looks irresistible, and the styling is impeccable. Our reservations doubled after the new menu launch. Worth every rupee.",
    project: "Michelin Star Menu Redesign"
  }
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (!swiperInstance) return;

    const handleSlideChange = () => {
      setActiveIndex(swiperInstance!.realIndex);
    };

    swiperInstance.on("slideChange", handleSlideChange);
    return () => {
      swiperInstance?.off("slideChange", handleSlideChange);
    };
  }, [swiperInstance]);

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 7000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setDirection(1);
    if (swiperInstance) {
      swiperInstance.slideNext();
    } else {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    if (swiperInstance) {
      swiperInstance.slidePrev();
    } else {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    
    // Reset auto-play timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] py-32 md:py-40 px-4 md:px-12 overflow-hidden"
    >
      {/* Ambient gradient orb */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Heading — no eyebrow pill, integrated title */}
        <h2 
          ref={headingRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-24 max-w-[18ch]"
        >
          Words from{" "}
          <span className="text-[#c8a84b]">happy</span>{" "}
          clients.
        </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative min-h-[500px] md:min-h-[400px]">
              <PostSwiper
                loop={false}
                onSwiper={setSwiperInstance}
                slides={testimonials.map((t) => (
                  <div key={t.id} className="w-full max-w-xl mx-auto">
                    {/* Double-bezel wrapper */}
                    <div className="p-2 rounded-[2.5rem] bg-white/[0.03] ring-1 ring-white/10">
                      <div className="p-8 md:p-12 rounded-[calc(2.5rem-0.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent min-h-[400px] flex flex-col justify-between">
                        {/* Quote */}
                        <div>
                          <div className="text-white/20 text-6xl md:text-7xl font-serif mb-6 leading-none">"</div>
                          <p className="text-xl md:text-2xl font-serif leading-relaxed text-white/90 mb-8">
                            {t.quote}
                          </p>
                        </div>

                        {/* Author Info + Project */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/10">
                          <div>
                            <h4 className="text-lg md:text-xl font-serif text-white mb-1">
                              {t.name}
                            </h4>
                            <p className="text-sm text-white/60">
                              {t.role} · {t.company}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-1">
                              Project
                            </span>
                            <p className="text-sm text-white/80">
                              {t.project}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              />
            </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-between gap-6">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="group w-12 h-12 rounded-full bg-white/[0.05] ring-1 ring-white/10 flex items-center justify-center text-white/60 transition-all duration-500 hover:bg-white/10 hover:ring-white/20 hover:text-white active:scale-95"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="group w-12 h-12 rounded-full bg-white/[0.05] ring-1 ring-white/10 flex items-center justify-center text-white/60 transition-all duration-500 hover:bg-white/10 hover:ring-white/20 hover:text-white active:scale-95"
              >
                →
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="group relative"
                >
                  <div className={`
                    transition-all duration-500 rounded-full
                    ${index === activeIndex 
                      ? 'w-12 h-2 bg-white/40' 
                      : 'w-2 h-2 bg-white/20 hover:bg-white/30'
                    }
                  `} />
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-white/60">
              <span className="text-white text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(testimonials.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Client Logos Grid (Optional Enhancement) */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-8 text-center">
            Trusted By Leading Brands
          </span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center text-white/60 text-sm font-medium">
                {t.company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    project: "Premium Audio Series"
  }
];

export default function TestimonialsFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    // Pin section and animate cards in a flowing wave pattern
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = Math.floor(progress * testimonials.length);
          setActiveIndex(Math.min(currentIndex, testimonials.length - 1));

          cards.forEach((card, index) => {
            const cardProgress = Math.max(0, Math.min(1, (progress * testimonials.length) - index));

            // Wave motion - each card follows a curved path
            const baseY = 0;
            const waveAmplitude = 150;
            const phaseShift = index * 0.3;
            const yOffset = Math.sin((cardProgress + phaseShift) * Math.PI) * waveAmplitude;

            // Horizontal movement
            const xStart = window.innerWidth;
            const xEnd = -card.offsetWidth;
            const xOffset = xStart - (cardProgress * (xStart - xEnd));

            // Scale and opacity based on position
            const scale = 0.8 + (Math.sin(cardProgress * Math.PI) * 0.2);
            const opacity = Math.sin(cardProgress * Math.PI);

            gsap.set(card, {
              x: xOffset,
              y: baseY + yOffset,
              scale: scale,
              opacity: opacity,
              rotateZ: (0.5 - cardProgress) * 5,
              filter: `blur(${(1 - Math.sin(cardProgress * Math.PI)) * 8}px)`
            });
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden"
    >
      {/* Title */}
      <div className="absolute top-20 left-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.2em] text-white/40 mb-4">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">
            Trusted by Brands
          </h2>
        </motion.div>
      </div>

      {/* Cards flowing through space */}
      <div className="absolute inset-0 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={el => cardsRef.current[index] = el}
            className="absolute w-[500px]"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Quote */}
              <div className="mb-8">
                <span className="text-4xl text-white/20">"</span>
                <p className="text-white/80 text-lg leading-relaxed mt-2">
                  {testimonial.quote}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-6" />

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs tracking-[0.15em] text-white/30 mb-1">
                    PROJECT
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active indicator */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4">
        <div className="text-xs tracking-[0.2em] text-white/40">
          {String(activeIndex + 1).padStart(2, '0')}
        </div>
        <div className="w-24 h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white/60"
            style={{
              scaleX: (activeIndex + 1) / testimonials.length,
              transformOrigin: 'left'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-xs tracking-[0.2em] text-white/40">
          {String(testimonials.length).padStart(2, '0')}
        </div>
      </div>

      {/* Ambient gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Scroll hint */}
      <div className="absolute bottom-12 right-12 text-white/30 text-sm tracking-wider">
        Scroll to continue
      </div>
    </section>
  );
}

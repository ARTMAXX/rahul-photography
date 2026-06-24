/*
<design_plan>
  Python RNG Simulation:
    Hero Layout: Cinematic Center
    Components: ['Bento', 'Stack']
    Animations: Physics Cascade

  AIDA Check: Confirmed.
  Hero Math: max-w-6xl to ensure 2-line flow. NO badges.
  Bento Density: grid-flow-dense applied, interlocking col-span/row-span used.
  Label Sweep: Meta-labels (01, 02) removed entirely.
</design_plan>
*/
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Chrono Luxury', category: 'PRODUCT', img: '/best shots/Product image/luxury-watch.png' },
  { title: 'Crystal Pour', category: 'BEVERAGE', img: '/best shots/Beverage images/clinking-glasses.png' },
  { title: 'Velvet Crème', category: 'FOOD', img: '/best shots/Food photo/food-cream-macro.webp' },
  { title: 'Sky Heel', category: 'FOOTWEAR', img: '/best shots/ladies shoe/luxury-mule.png' },
];

export default function EditorialArchiveNew() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // High-end GSAP Cascade Motion
      const cards = gsap.utils.toArray('.project-card');
      
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          ease: 'power4.out',
          duration: 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-[#050505] text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Area - Cinematic */}
        <div className="mb-24 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-light tracking-tight leading-[1.1] max-w-6xl mx-auto">
            Each frame, a new chapter.
          </h2>
        </div>

        {/* Bento/Stack Bento Grid - Double-Bezel Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-dense">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`project-card group relative p-1.5 rounded-[2rem] bg-white/5 ring-1 ring-white/10 ${i % 2 === 0 ? 'md:col-span-8' : 'md:col-span-4'} row-span-2`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#0A0A0A] h-[400px] md:h-[500px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-medium">{project.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

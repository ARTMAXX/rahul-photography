"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const PROJECTS = [
  { id: "p1", title: "Chrono Luxury", category: "Commercial", mainImage: "/best shots/Product image/product-watch-luxury.webp", year: "2025", description: "Luxury timepiece campaign with precision studio lighting.", client: "Independent", gallery: ["/best shots/Product image/product-watch-luxury.webp", "/best shots/Product image/product-watch-dark.webp"], deliverables: ["Studio Photography", "Post-Production", "Campaign Visuals"] },
  { id: "p2", title: "Liquid Shadow", category: "High-Speed", mainImage: "/best shots/Beverage images/bev-macro.webp", year: "2026", description: "High-speed beverage splash photography capturing fluid dynamics.", client: "Independent", gallery: ["/best shots/Beverage images/bev-macro.webp", "/best shots/Beverage images/bev-iced.webp"], deliverables: ["High-Speed Photography", "Retouching", "Social Assets"] },
  { id: "p3", title: "Velvet Crème", category: "Culinary", mainImage: "/best shots/Food photo/food-mutton.webp", year: "2026", description: "Culinary art direction with rich texture and depth.", client: "Independent", gallery: ["/best shots/Food photo/food-mutton.webp", "/best shots/new-images/new-food-biriyani.png"], deliverables: ["Food Styling", "Photography", "Post-Production"] },
  { id: "p4", title: "Solé Luxury", category: "Fashion", mainImage: "/best shots/ladies shoe/High-end-shoe.webp", year: "2025", description: "High-end fashion footwear campaign with cinematic lighting.", client: "Independent", gallery: ["/best shots/ladies shoe/High-end-shoe.webp", "/best shots/ladies shoe/shoe-ladies-heels.webp"], deliverables: ["Fashion Photography", "Video Direction", "Retouching"] },
];


export default function VisualDiscovery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 bg-editorial-bg text-editorial-ink">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.2em] text-editorial-accent mb-16">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="aspect-[4/5] bg-neutral-200 overflow-hidden mb-6">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-serif">{project.title}</h3>
                <span className="text-xs uppercase tracking-widest text-editorial-muted">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

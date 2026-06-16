"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Category = "all" | "product" | "lifestyle" | "fashion" | "food";

interface Project {
  id: number;
  title: string;
  category: Category;
  client: string;
  year: string;
  image: string;
  width: number;
  height: number;
}

const projects: Project[] = [
  { id: 1, title: "Luxury Leather Sandals", category: "product", client: "Fashion Brand", year: "2026", image: "/best shots/ladies shoe/leather-sandal.png", width: 1920, height: 1080 },
  { id: 2, title: "Kashmiri Mutton Delicacy", category: "food", client: "Restaurant Noir", year: "2026", image: "/best shots/Food photo/kashmiri-mutton.png", width: 1920, height: 1080 },
  { id: 3, title: "Modern Athletic Sneakers", category: "fashion", client: "Footwear Co", year: "2026", image: "/best shots/mens shoe/modern-athletic-sneaker.webp", width: 1920, height: 1080 },
  { id: 4, title: "Lifestyle Fashion Editorial", category: "lifestyle", client: "Magazine", year: "2025", image: "/best shots/ladies shoe/fashion-lifestyle.png", width: 1920, height: 1080 },
  { id: 5, title: "White Premium Sneakers", category: "product", client: "Athletic Brand", year: "2026", image: "/best shots/mens shoe/white-sneaker.png", width: 1920, height: 1080 },
  { id: 6, title: "Authentic Biryani Presentation", category: "food", client: "Fine Dining", year: "2025", image: "/best shots/Food photo/biriyani.png", width: 1920, height: 1080 },
  { id: 7, title: "High-End Designer Heels", category: "fashion", client: "Luxury Brand", year: "2026", image: "/best shots/ladies shoe/High-end-shoe.webp", width: 1920, height: 1080 },
  { id: 8, title: "Iced Beverage Collection", category: "food", client: "Cafe Chain", year: "2025", image: "/best shots/Beverage images/iced-drinks.png", width: 1920, height: 1080 },
  { id: 9, title: "Sneaker Campaign Duo", category: "lifestyle", client: "Sports Brand", year: "2026", image: "/best shots/mens shoe/sneaker-duo.png", width: 1920, height: 1080 },
  { id: 10, title: "Indian Buffet Spread", category: "food", client: "Hotel Chain", year: "2025", image: "/best shots/Food photo/indian-buffet.png", width: 1920, height: 1080 },
  { id: 11, title: "Luxury Mule Collection", category: "product", client: "Designer Label", year: "2026", image: "/best shots/ladies shoe/luxury-mule.png", width: 1920, height: 1080 },
  { id: 12, title: "Crispy Chicken Plating", category: "food", client: "Restaurant Group", year: "2026", image: "/best shots/Food photo/crispy-chicken.png", width: 1920, height: 1080 },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<Project | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    }

    // TileScroll effect
    const tiles = gsap.utils.toArray<HTMLElement>(".tile");
    
    tiles.forEach((tile, i) => {
      const imageWrap = tile.querySelector(".tile__img-wrap") as HTMLElement;
      const image = tile.querySelector(".tile__img") as HTMLElement;
      
      // Stagger pattern - alternate row offsets
      const row = Math.floor(i / 2);
      const col = i % 2;
      const offsetY = col === 0 ? -150 : 150;

      // Image reveal on scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: tile,
          start: "top bottom-=10%",
          end: "bottom top+=10%",
          scrub: true,
        }
      })
      .fromTo(imageWrap, 
        { 
          scale: 1.5,
          yPercent: offsetY / 10
        },
        { 
          scale: 1,
          yPercent: 0,
          ease: "none"
        }, 0)
      .fromTo(image,
        {
          scale: 1.3,
        },
        {
          scale: 1,
          ease: "none"
        }, 0);

      // Parallax movement
      gsap.to(tile, {
        yPercent: col === 0 ? -15 : 15,
        ease: "none",
        scrollTrigger: {
          trigger: tile,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef, dependencies: [filteredProjects] });

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Work" },
    { value: "product", label: "Product" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "fashion", label: "Fashion" },
    { value: "food", label: "Food & Beverage" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-40 px-4 md:px-12 overflow-hidden"
    >
      {/* Ambient gradient orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Eyebrow tag */}
        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
          Selected Work
        </span>

        {/* Heading */}
        <h2 
          ref={headingRef}
          className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-20 max-w-[18ch]"
        >
          Projects that <span className="italic">speak</span> volumes.
        </h2>

        {/* Category Filter Pills */}
        <div className="mb-24 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className="group relative"
            >
              <div className={`
                p-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
                ${activeCategory === cat.value 
                  ? 'bg-white/10 ring-2 ring-white/20' 
                  : 'bg-white/[0.02] ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/15'
                }
              `}>
                <div className={`
                  px-6 py-2.5 rounded-full transition-all duration-500
                  ${activeCategory === cat.value 
                    ? 'bg-white/10 text-white' 
                    : 'bg-white/5 text-white/60 group-hover:text-white/80'
                  }
                `}>
                  <span className="text-sm font-medium tracking-wide">
                    {cat.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="tile cursor-pointer"
              style={{ 
                marginTop: idx % 2 === 0 ? '0' : '8rem',
                willChange: 'transform'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setLightboxImage(project)}
            >
              <div className="tile__img-wrap relative overflow-hidden rounded-3xl" style={{ willChange: 'transform' }}>
                <div className="tile__img relative aspect-[3/4] overflow-hidden" style={{ willChange: 'transform' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    priority={idx < 4}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent
                    transition-opacity duration-500
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-base text-white/70">
                        {project.client} · {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-32 flex justify-center">
          <Link href="/work" className="group relative">
            <div className="p-2 rounded-full bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-white/25 group-hover:bg-white/[0.05] active:scale-95">
              <div className="px-8 py-4 rounded-full bg-white/5 flex items-center gap-3 transition-all duration-500 group-hover:bg-white/10">
                <span className="text-sm font-medium text-white tracking-wide">
                  View Full Portfolio
                </span>
                <div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white/60 text-xs transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-[2px] group-hover:bg-white/20 group-hover:text-white">
                  →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 flex items-center justify-center text-white text-2xl transition-all duration-500 hover:bg-white/20 hover:rotate-90 active:scale-95 z-10"
            >
              ×
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  width={lightboxImage.width}
                  height={lightboxImage.height}
                  quality={100}
                  className="object-contain w-full h-full max-h-[90vh]"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-3xl font-serif text-white mb-2">
                  {lightboxImage.title}
                </h3>
                <p className="text-lg text-white/60">
                  {lightboxImage.client} · {lightboxImage.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

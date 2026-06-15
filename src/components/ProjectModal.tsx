"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Calendar, Compass, Shield, Maximize2 } from "lucide-react";
import { PROJECTS } from "./sections/archive/VisualDiscovery";

interface ProjectModalProps {
  project: typeof PROJECTS[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  if (!project || !mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 32, stiffness: 200, mass: 0.9 }}
          className="fixed inset-0 w-full h-screen z-[990] bg-[#F4EFE7] text-[#111111] overflow-y-auto"
        >
          {/* Custom Close Button for cursor alignment */}
          <div className="absolute top-6 right-6 md:top-12 md:right-12 z-50">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-[#111111]/15 flex items-center justify-center bg-[#F4EFE7]/80 backdrop-blur-md text-[#111111] hover:bg-[#111111] hover:text-[#F4EFE7] transition-all duration-300 active:scale-90"
              data-cursor="close"
              data-cursor-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Header banner */}
          <div className="w-full px-6 pt-16 md:px-12 md:pt-24 select-none">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/10 pb-8">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#9D8B74] font-bold block mb-2">
                  Campaign Case File // {project.year}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-none text-[#111111]">
                  {project.title}
                </h2>
              </div>
              <div className="mt-4 md:mt-0 font-sans text-xs uppercase tracking-widest text-[#9D8B74]">
                Category: <span className="text-[#111111] font-bold">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Core Case Study details */}
          <div className="w-full px-6 py-12 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left: Concept Brief & Narrative (7 Columns) */}
            <div className="md:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <span className="font-serif italic text-xl text-[#9D8B74] block">
                  The Concept Outline
                </span>
                <p className="font-sans text-sm md:text-base text-[#111111]/80 leading-relaxed uppercase tracking-wider">
                  {project.description}
                </p>
              </div>

              {/* Creative Stills / Slideshow Gallery Strip */}
              <div className="space-y-4 pt-4">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#9D8B74] font-bold block">
                  Campaign Visual Stills (Chapter Gallery)
                </span>
                
                {/* Responsive Grid Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl: string, i: number) => (
                    <div
                      key={i}
                      className="w-full rounded-sm group shadow-sm"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} slide ${i}`}
                        className="w-full h-auto object-contain transition-transform duration-700 ease-out"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Metadata Panel (5 Columns) */}
            <div className="md:col-span-5 bg-[#EBE5DB]/50 border border-[#9D8B74]/15 p-8 rounded-sm shadow-sm space-y-8 font-sans">
              
              {/* Project Title Sign */}
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#9D8B74] block mb-1">STUDIO WORKPLACE</span>
                <span className="font-serif italic text-2xl text-[#111111] font-semibold">Rahul Chanda Studio</span>
              </div>

              {/* Metadata list */}
              <div className="space-y-6 text-sm border-t border-[#111111]/10 pt-6">
                
                {/* Client detail */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-[#111111]/60">
                    <Shield className="w-4 h-4 text-[#9D8B74]" />
                    <span className="text-[10px] uppercase tracking-widest">Brand Client</span>
                  </div>
                  <span className="font-bold text-[#111111] uppercase tracking-wider text-xs">{project.client}</span>
                </div>

                {/* Date detail */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-[#111111]/60">
                    <Calendar className="w-4 h-4 text-[#9D8B74]" />
                    <span className="text-[10px] uppercase tracking-widest">Timeline Index</span>
                  </div>
                  <span className="font-bold text-[#111111] uppercase tracking-wider text-xs">{project.year}</span>
                </div>

                {/* Coordinates */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-[#111111]/60">
                    <Compass className="w-4 h-4 text-[#9D8B74]" />
                    <span className="text-[10px] uppercase tracking-widest">Studio Grid</span>
                  </div>
                  <span className="font-bold text-[#9D8B74] uppercase tracking-wider text-xs">30.31° N, Dehradun</span>
                </div>

              </div>

              {/* Campaign Deliverables list */}
              <div className="border-t border-[#111111]/10 pt-6">
                <span className="text-[10px] uppercase tracking-widest text-[#9D8B74] font-bold block mb-4">
                  Visual Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="border border-[#111111]/15 px-3 py-1.5 rounded-sm text-[9px] uppercase tracking-widest text-[#111111]/70 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button Call to Action */}
              <button
                onClick={onClose}
                className="w-full bg-[#111111] text-[#F4EFE7] font-sans text-xs uppercase tracking-widest py-3.5 rounded-sm font-bold flex items-center justify-center space-x-2 hover:bg-[#9D8B74] hover:text-[#F4EFE7] transition-colors duration-300"
              >
                <span>Resume Portfolio Exploration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

          {/* Subtitle Decorative footer */}
          <div className="text-center py-12 text-[10px] uppercase tracking-widest text-[#111111]/15 select-none border-t border-[#111111]/5">
            Rahul Chanda Photography Case Catalog // 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

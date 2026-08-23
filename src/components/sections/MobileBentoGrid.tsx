'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { images } from '@/lib/variant-1/data';

gsap.registerPlugin(ScrollTrigger);

const LABELS = [
  'Headphones', 'Watch', 'Bodywash', 'Serum',
  'Molton Brown', 'Iced Beverage', 'Macro Pour', 'Biryani',
  'Crispy Chicken', 'Men\'s Campaign', 'Ladies Editorial', 'Culinary Ad',
];

const BENTO_ITEMS = [
  { idx: 0, span: 'col-span-2 row-span-2' },
  { idx: 1, span: 'col-span-1 row-span-1' },
  { idx: 2, span: 'col-span-1 row-span-1' },
  { idx: 5, span: 'col-span-1 row-span-2' },
  { idx: 6, span: 'col-span-1 row-span-1' },
  { idx: 3, span: 'col-span-1 row-span-1' },
  { idx: 7, span: 'col-span-2 row-span-1' },
  { idx: 8, span: 'col-span-1 row-span-1' },
  { idx: 9, span: 'col-span-1 row-span-2' },
  { idx: 10, span: 'col-span-1 row-span-1' },
  { idx: 11, span: 'col-span-1 row-span-1' },
  { idx: 4, span: 'col-span-1 row-span-1' },
];

export default function MobileBentoGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header fade in
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Staggered card reveal — cards slide up + fade in with slight scale
    const validCards = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      validCards,
      { opacity: 0, y: 40, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // CTA button slide up
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: gridRef });

  return (
    <section className="relative w-full bg-[#070707] px-4 py-20 md:hidden overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,59,44,0.8) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div ref={headerRef} className="mb-10 text-center">
        <h2 className="text-4xl font-[300] tracking-tight text-white">
          Selected Work
        </h2>
        <p className="mt-2 text-sm text-white/40 uppercase tracking-[0.2em]">
          Work, in brief
        </p>
      </div>

      {/* Bento Grid */}
      <div ref={gridRef} className="grid grid-cols-3 gap-2 auto-rows-[120px]">
        {BENTO_ITEMS.map((item, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className={`relative overflow-hidden rounded-lg bg-white/5 ${item.span} group`}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
          >
            <img
              src={images[item.idx]}
              alt={LABELS[item.idx]}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient overlay — always subtle, intensifies on hover/tap */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent transition-opacity duration-500" />
            {/* Label — slides up on hover/tap */}
            <div
              className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-500 ease-out ${
                activeIdx === i
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'
              }`}
            >
              <span className="text-[10px] text-white/80 uppercase tracking-[0.15em] font-medium">
                {LABELS[item.idx]}
              </span>
              {/* Accent line under label */}
              <div className="mt-1.5 h-[1px] w-0 group-hover:w-8 transition-all duration-500 ease-out bg-[#e83b2c]" />
            </div>
            {/* Active ring glow on tap */}
            {activeIdx === i && (
              <div className="absolute inset-0 rounded-lg ring-1 ring-[#e83b2c]/30 pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      {/* Gallery CTA */}
      <div ref={ctaRef} className="mt-10 text-center">
        <a
          href="/gallery"
          className="inline-block border border-white/20 bg-white/5 px-8 py-3 text-xs uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/40 active:scale-95"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  );
}

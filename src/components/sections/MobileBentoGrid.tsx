'use client';

import { useState } from 'react';
import { images } from '@/lib/variant-1/data';

/**
 * MobileBentoGrid — dark cinematic bento grid shown on mobile instead
 * of the heavy WebGL cylinder. Matches the site's bg-[#070707] vibe.
 */

const LABELS = [
  'Headphones', 'Watch', 'Bodywash', 'Serum',
  'Molton Brown', 'Iced Beverage', 'Macro Pour', 'Biryani',
  'Crispy Chicken', 'Men\'s Campaign', 'Ladies Editorial', 'Culinary Ad',
];

// Bento layout: which images go where, and their grid span
const BENTO_ITEMS = [
  { idx: 0, span: 'col-span-2 row-span-2' },  // headphones — large
  { idx: 1, span: 'col-span-1 row-span-1' },  // watch
  { idx: 2, span: 'col-span-1 row-span-1' },  // bodywash
  { idx: 5, span: 'col-span-1 row-span-2' },  // iced — tall
  { idx: 6, span: 'col-span-1 row-span-1' },  // macro
  { idx: 3, span: 'col-span-1 row-span-1' },  // serum
  { idx: 7, span: 'col-span-2 row-span-1' },  // biryani — wide
  { idx: 8, span: 'col-span-1 row-span-1' },  // chicken
  { idx: 9, span: 'col-span-1 row-span-2' },  // men's shoe — tall
  { idx: 10, span: 'col-span-1 row-span-1' }, // ladies shoe
  { idx: 11, span: 'col-span-1 row-span-1' }, // culinary ad
  { idx: 4, span: 'col-span-1 row-span-1' },  // molton brown
];

export default function MobileBentoGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#070707] px-4 py-20 md:hidden">
      {/* Section header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-[300] tracking-tight text-white">
          Selected Work
        </h2>
        <p className="mt-2 text-sm text-white/40 uppercase tracking-[0.2em]">
          A closer look at the craft
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-3 gap-2 auto-rows-[120px]">
        {BENTO_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg bg-white/5 ${item.span} group`}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
          >
            <img
              src={images[item.idx]}
              alt={LABELS[item.idx]}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Label overlay on hover/tap */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-xs text-white/80 uppercase tracking-widest">
                {LABELS[item.idx]}
              </span>
            </div>
            {/* Active label for tap */}
            {activeIdx === i && (
              <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                <span className="text-xs text-white/80 uppercase tracking-widest">
                  {LABELS[item.idx]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gallery CTA */}
      <div className="mt-10 text-center">
        <a
          href="/gallery"
          className="inline-block border border-white/20 bg-white/5 px-8 py-3 text-xs uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/40"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  );
}

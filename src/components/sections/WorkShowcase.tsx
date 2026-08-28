"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"
import { CollectionSurfer, CollectionItem } from "@/components/ui/collection-surfer"

const portfolioFrames = [
  {
    id: 1,
    image: "/best shots/Food photo/Biriyani photo.webp",
    alt: "Gourmet Biriyani - Fine Dining Food Photography",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    image: "/best shots/Beverage images/bev-toast.webp",
    alt: "Celebratory Toast - Beverage Photography",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    image: "/best shots/ADs/ad-culinary.webp",
    alt: "Culinary Advertisement - Commercial Photography",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    image: "/best shots/Beverage images/bev-macro.webp",
    alt: "Macro Beverage Detail - Product Photography",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    image: "/best shots/Food photo/crispy-chicken.png",
    alt: "Crispy Chicken - Restaurant Menu Photography",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    image: "/best shots/Beverage images/three-iced-drinks.webp",
    alt: "Iced Beverages Collection - Commercial Shoot",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    image: "/best shots/ADs/ad-popout.webp",
    alt: "Dynamic Pop-out Advertisement",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    image: "/best shots/Beverage images/bev-waiter.webp",
    alt: "Professional Service - Hospitality Photography",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    image: "/best shots/Beverage images/bev-iced.webp",
    alt: "Artisan Iced Beverage - Studio Photography",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
]

// Collection items for the CollectionSurfer component
const collectionItems: CollectionItem[] = [
  {
    id: 1,
    image: "/best shots/Food photo/Biriyani photo.webp",
    title: "HERITAGE 01",
  },
  {
    id: 2,
    image: "/best shots/Beverage images/bev-toast.webp",
    title: "HERITAGE 02",
  },
  {
    id: 3,
    image: "/best shots/ADs/ad-culinary.webp",
    title: "HERITAGE 03",
  },
  {
    id: 4,
    image: "/best shots/Beverage images/bev-macro.webp",
    title: "HERITAGE 04",
  },
  {
    id: 5,
    image: "/best shots/Food photo/crispy-chicken.png",
    title: "HERITAGE 05",
  },
  {
    id: 6,
    image: "/best shots/Beverage images/three-iced-drinks.webp",
    title: "HERITAGE 06",
  },
  {
    id: 7,
    image: "/best shots/ADs/ad-popout.webp",
    title: "HERITAGE 07",
  },
  {
    id: 8,
    image: "/best shots/Beverage images/bev-waiter.webp",
    title: "HERITAGE 08",
  },
  {
    id: 9,
    image: "/best shots/Beverage images/bev-iced.webp",
    title: "HERITAGE 09",
  },
]

export function WorkShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-black py-24 px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">
            Selected Works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl">
            A curated collection of food, beverage, and commercial photography. 
            Hover to explore each piece in detail.
          </p>
        </div>
      </div>

      {/* Dynamic Frame Layout */}
      <div className="max-w-[1800px] mx-auto h-[800px] md:h-[1000px]">
        <DynamicFrameLayout 
          frames={portfolioFrames} 
          className="w-full h-full" 
          hoverSize={7}
          gapSize={12}
        />
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-24 text-center">
        <p className="text-lg text-zinc-400 mb-8">
          Interested in working together?
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors duration-300"
        >
          Get in Touch
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

/**
 * CollectionSurfer Variant - Interactive 3D scrolling gallery
 * Displays your portfolio with magnetic hover effects and smooth 3D transforms
 * Choose variant: "magnetic" | "uplift" | "simple"
 */
export function WorkShowcaseCollection() {
  return (
    <CollectionSurfer 
      items={collectionItems} 
      variant="magnetic" 
    />
  )
}

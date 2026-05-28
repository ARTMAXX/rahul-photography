"use client";

import PinnedShowcase, { type ShowcaseItem } from "../PinnedShowcase";

const FEATURED_ITEMS: readonly ShowcaseItem[] = [
  {
    title: "Solé Campaign",
    date: "09 2025",
    src: "/best shots/ladies shoe/shoe-ladies-video.mp4",
    type: "video",
    alt: "High-end ladies footwear campaign in motion",
  },
  {
    title: "Liquid Shadow",
    date: "01 2026",
    src: "/best shots/Product image/energy-drink-shot.png",
    alt: "Beverage editorial splash capturing direct refraction lighting",
  },
  {
    title: "Street Sole",
    date: "05 2025",
    src: "/best shots/mens shoe/shoe-mens-duo.webp",
    alt: "Modern athletic mens footwear details",
  },
  {
    title: "Hydro Blast",
    date: "01 2026",
    src: "/best shots/Product image/product-energy-can.mp4",
    type: "video",
    alt: "Commercial beverage can splash campaign",
  },
  {
    title: "Velvet Crème",
    date: "03 2026",
    src: "/best shots/Product image/product-serum.webp",
    alt: "Organic skincare serum drops under macro spotlight",
  },
  {
    title: "Bold Edit",
    date: "10 2025",
    src: "/best shots/new-images/new-product-bold.jpg",
    alt: "Bold commercial cosmetic editorial campaign",
  },
];

export default function FeaturedWorks() {
  return (
    <div id="work" className="bg-black">
      <PinnedShowcase
        id="featured-showcase"
        label="Featured Work"
        counterStart={30}
        items={FEATURED_ITEMS}
        accentColor="#e83b2c"
      />
    </div>
  );
}

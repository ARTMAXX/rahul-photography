"use client";

import PinnedShowcase, { type ShowcaseItem } from "../../PinnedShowcase";

/* Gallery — second PinnedShowcase instance. Counter continues from
   the end of the Projects section (which ends at 36 = 30 + 6), so
   the gallery runs 42 → 48 to match the reference's continuous
   counter. The big red brush stroke is the same shared path as
   Projects — a single continuous drawing that traces the whole
   scroll. */
const gallery: readonly ShowcaseItem[] = [
  {
    title: "Product Editorials",
    date: "01 2026",
    src: "/best shots/Product image/product-bodywash.webp",
    alt: "Body wash product still life",
  },
  {
    title: "Beverage Pours",
    date: "02 2026",
    src: "/best shots/Beverage images/bev-iced.webp",
    alt: "Iced beverage pour",
  },
  {
    title: "Macro & Texture",
    date: "03 2026",
    src: "/best shots/Food photo/food-cream-macro.webp",
    alt: "Cream macro shot",
  },
  {
    title: "High-end Fashion",
    date: "04 2026",
    src: "/best shots/ladies shoe/High-end-shoe.webp",
    alt: "High-end ladies shoe",
  },
  {
    title: "Mens Footwear",
    date: "05 2026",
    src: "/best shots/mens shoe/shoe-mens-duo.webp",
    alt: "Mens shoe duo",
  },
  {
    title: "Timepieces",
    date: "06 2026",
    src: "/best shots/Product image/product-watch-dark.webp",
    alt: "Dark watch on surface",
  },
  {
    title: "Liquid Light",
    date: "07 2026",
    src: "/best shots/Beverage images/bev-macro.webp",
    alt: "Beverage macro shot",
  },
  {
    title: "Culinary Arts",
    date: "08 2026",
    src: "/best shots/Food photo/food-biriyani.webp",
    alt: "Biriyani dish",
  },
  {
    title: "Tech Electronics",
    date: "09 2026",
    src: "/best shots/Product image/product-headphone.webp",
    alt: "Headphone product shot",
  },
  {
    title: "Campaign Story",
    date: "10 2026",
    src: "/best shots/ADs/ad-culinary.webp",
    alt: "Culinary campaign ad",
  },
];

export default function Gallery() {
  return (
    <PinnedShowcase
      id="gallery"
      label="Gallery"
      counterStart={42}
      items={gallery}
      accentColor="#ff1a1a"
    />
  );
}

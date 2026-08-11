import type { Perspective } from "./types";

/**
 * 12 curated images from /public/best shots — mapped onto the rotating
 * WebGL cylinder. Mix of product, food, beverage and fashion work so the
 * carousel reads as a portfolio reel.
 */
export const images = [
  "/best shots/Product image/product-headphone.webp",
  "/best shots/Product image/product-watch-luxury.webp",
  "/best shots/Product image/product-bodywash.webp",
  "/best shots/Product image/product-serum.webp",
  "/best shots/Product image/product-molton-brown.webp",
  "/best shots/Beverage images/bev-iced.webp",
  "/best shots/Beverage images/bev-macro.webp",
  "/best shots/Food photo/food-biriyani.webp",
  "/best shots/Food photo/food-chicken.webp",
  "/best shots/mens shoe/shoe-mens-campaign.webp",
  "/best shots/ladies shoe/High-end-shoe.webp",
  "/best shots/ADs/ad-culinary.webp",
];

/**
 * Captions that fade in/out as the cylinder rotates. Photography-portfolio
 * voice — short, confident, specific to Rahul's work.
 */
export const perspectives: Perspective[] = [
  {
    title: "Food & Beverage",
    description: "Styled, lit, and shot to make you hungry",
    position: "top",
  },
  {
    title: "Product & Lifestyle",
    description: "Every surface, every reflection — intentional",
    position: "center",
  },
  {
    title: "Behind the Lens",
    description: "Dehradun-based, available worldwide",
    position: "center",
  },
  {
    title: "Selected Work",
    description: "A closer look at the craft",
    position: "bottom",
  },
];

/**
 * SSR-safe cylinder config. Original used `window.innerWidth` at module load;
 * here we resolve it lazily inside the component effect so the server doesn't
 * touch `window`.
 */
export function getCylinderConfig() {
  const isWide = typeof window !== "undefined" && window.innerWidth > 768;
  return {
    radius: isWide ? 2.5 : 2.2,
    height: isWide ? 2 : 1.2,
    radialSegments: 64,
    heightSegments: 1,
  };
}

export const particleConfig = {
  numParticles: 12,
  particleRadius: 3.3, // cylinderRadius + 0.8
  segments: 20,
  angleSpan: 0.3,
};

export const imageConfig = {
  width: 1024,
  height: 1024,
};

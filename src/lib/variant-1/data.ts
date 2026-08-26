import type { Perspective } from "./types";

/**
 * 12 curated images from /public/opt/best shots — mapped onto the rotating
 * WebGL cylinder (desktop) and the mobile bento grid. Re-encoded ~1024px
 * WebP derivatives (~20–80 KB each) instead of the multi-MB masters.
 */
export const images = [
  "/opt/best shots/Product image/product-headphone.webp",
  "/opt/best shots/Product image/product-watch-luxury.webp",
  "/opt/best shots/Product image/product-bodywash.webp",
  "/opt/best shots/Product image/product-serum.webp",
  "/opt/best shots/Product image/product-molton-brown.webp",
  "/opt/best shots/Beverage images/bev-iced.webp",
  "/opt/best shots/Beverage images/bev-macro.webp",
  "/opt/best shots/Food photo/food-biriyani.webp",
  "/opt/best shots/Food photo/food-chicken.webp",
  "/opt/best shots/mens shoe/shoe-mens-campaign.webp",
  "/opt/best shots/ladies shoe/High-end-shoe.webp",
  "/opt/best shots/ADs/ad-culinary.webp",
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
    description: "Work, in brief",
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

export function getParticleConfig() {
  return {
    numParticles: 12,
    particleRadius: 3.3,
    segments: 20,
    angleSpan: 0.3,
  };
}

export const imageConfig = {
  width: 1024,
  height: 1024,
};

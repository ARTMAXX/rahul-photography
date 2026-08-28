"use client";

import { CollectionSurfer, CollectionItem } from "./collection-surfer";

const selectedWorkItems: CollectionItem[] = [
  {
    id: 1,
    title: "Gourmet Biriyani",
    image: "/best shots/Food photo/food-biriyani-hero.webp",
  },
  {
    id: 2,
    title: "Celebratory Toast",
    image: "/best shots/Beverage images/bev-toast.webp",
  },
  {
    id: 3,
    title: "Culinary Campaign",
    image: "/best shots/ADs/ad-culinary.webp",
  },
  {
    id: 4,
    title: "Macro Beverage Detail",
    image: "/best shots/Beverage images/bev-macro.webp",
  },
  {
    id: 5,
    title: "Crispy Chicken",
    image: "/best shots/Food photo/crispy-chicken.png",
  },
  {
    id: 6,
    title: "Iced Collection",
    image: "/best shots/Beverage images/three-iced-drinks.webp",
  },
  {
    id: 7,
    title: "Beverage Service",
    image: "/best shots/Beverage images/bev-waiter.webp",
  },
  {
    id: 8,
    title: "Biriyani Hero",
    image: "/best shots/Food photo/biriyani.png",
  },
  {
    id: 9,
    title: "Indian Curry",
    image: "/best shots/Food photo/indian-curry.png",
  },
  {
    id: 10,
    title: "Ladies Footwear",
    image: "/best shots/ladies shoe/shoe-ladies-video.mp4",
  },
  {
    id: 11,
    title: "White Sneaker",
    image: "/best shots/mens shoe/shoe-mens-white.webp",
  },
  {
    id: 12,
    title: "Gourmet Plating",
    image: "/best shots/new-images/new-food-ultra.png",
  },
  {
    id: 13,
    title: "Energy Drink Splash",
    image: "/best shots/Product image/product-energy-shot.webp",
  },
];

export function FeatureShowcase() {
  return (
    <section id="work">
      <CollectionSurfer
        items={selectedWorkItems}
        variant="magnetic"
      />
    </section>
  );
}

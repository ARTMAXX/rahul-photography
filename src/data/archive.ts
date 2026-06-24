export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  img: string;
  client: string;
  desc: string;
  folder: string; // subfolder under public/best shots/
  video?: string;
}

export const ARCHIVE: Project[] = [
  {
    id: "01",
    title: "Chrono Luxury",
    slug: "chrono-luxury",
    category: "Product",
    year: "2025",
    img: "/best shots/Product image/product-watch-luxury.webp",
    client: "Luxe Timepieces",
    desc: "A study in precision lighting — every curve of the bezel and grain of the leather strap rendered with editorial clarity.",
    folder: "Product image",
  },
  {
    id: "02",
    title: "Crystal Pour",
    slug: "crystal-pour",
    category: "Beverage",
    year: "2026",
    img: "/best shots/Beverage images/bev-macro.webp",
    client: "Spirits Brand",
    desc: "Macro cinematography capturing the effervescence and clarity of premium spirits in motion.",
    folder: "Beverage images",
  },
  {
    id: "03",
    title: "Velvet Crème",
    slug: "velvet-creme",
    category: "Food",
    year: "2026",
    img: "/best shots/Food photo/food-cream-macro.webp",
    client: "Dessert Brand",
    desc: "Textural storytelling through diffused soft light — cream meeting light in a single, deliberate frame.",
    folder: "Food photo",
  },
  {
    id: "04",
    title: "Sky Heel",
    slug: "sky-heel",
    category: "Footwear",
    year: "2025",
    img: "/best shots/ladies shoe/High-end-shoe.webp",
    client: "Luxury Label",
    desc: "Elegance distilled. A monochromatic composition that lets form and material speak without distraction.",
    folder: "ladies shoe",
  },
  {
    id: "05",
    title: "Energy Shot",
    slug: "energy-shot",
    category: "Product",
    year: "2026",
    img: "/best shots/Product image/product-energy-shot.webp",
    client: "Energy Brand",
    desc: "High-impact commercial lighting designed to stop the scroll — vibrant, crisp, and conversion-ready.",
    folder: "Product image",
  },
  {
    id: "06",
    title: "Royal Biryani",
    slug: "royal-biryani",
    category: "Food",
    year: "2025",
    img: "/best shots/Food photo/food-biriyani.webp",
    client: "Fine Dining",
    desc: "Layered composition and warm tonal depth that makes heritage cuisine feel contemporary and coveted.",
    folder: "Food photo",
  },
  {
    id: "07",
    title: "Modern Athletic",
    slug: "modern-athletic",
    category: "Footwear",
    year: "2026",
    img: "/best shots/mens shoe/modern-athletic-sneaker.webp",
    client: "Sports Brand",
    desc: "Dynamic angles and high-contrast lighting that translate motion and performance into a single frame.",
    folder: "mens shoe",
  },
  {
    id: "08",
    title: "Popout Ad",
    slug: "popout-ad",
    category: "Campaign",
    year: "2026",
    img: "/best shots/ADs/ad-popout.webp",
    client: "Product Brand",
    desc: "Bold campaign composition with punchy color blocking and product-as-hero framing.",
    folder: "ADs",
  },
];

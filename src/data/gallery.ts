/**
 * Curated manifest for the full "View All" gallery (/gallery).
 *
 * Source: public/best shots/**.  Where a shot existed as both .png and .webp,
 * the .webp is kept (smaller, identical content).  The hash-named TileScroll
 * demo tiles are intentionally excluded.  All four motion clips are included.
 *
 * `category` drives the filter chips.  Order below is intentionally interleaved
 * so the "All" view reads as a varied editorial wall rather than blocks per type.
 */

export type GalleryCategory =
  | "Ads"
  | "Beverages"
  | "Food"
  | "Footwear"
  | "Products";

export interface GalleryItem {
  id: string;
  src: string;
  type: "image" | "video";
  category: GalleryCategory;
  title: string;
}

const B = "/best shots";

export const galleryItems: GalleryItem[] = [
  // ── opening salvo — strong, varied covers ──
  { id: "watch-luxury", src: `${B}/Product image/product-watch-luxury.webp`, type: "image", category: "Products", title: "Luxury Watch" },
  { id: "bev-iced", src: `${B}/Beverage images/bev-iced.webp`, type: "image", category: "Beverages", title: "Iced Pour" },
  { id: "shoe-mens-video", src: `${B}/mens shoe/shoe-mens-video.mp4`, type: "video", category: "Footwear", title: "Men’s — In Motion" },
  { id: "food-biriyani", src: `${B}/Food photo/food-biriyani.webp`, type: "image", category: "Food", title: "Biriyani" },
  { id: "shoe-ladies-heels", src: `${B}/ladies shoe/shoe-ladies-heels.webp`, type: "image", category: "Footwear", title: "Heels" },
  { id: "ad-culinary", src: `${B}/ADs/ad-culinary.webp`, type: "image", category: "Ads", title: "Culinary Campaign" },

  // ── beverages ──
  { id: "bev-macro", src: `${B}/Beverage images/bev-macro.webp`, type: "image", category: "Beverages", title: "Macro Droplets" },
  { id: "product-energy-can", src: `${B}/Product image/product-energy-can.mp4`, type: "video", category: "Beverages", title: "Energy Can — Motion" },
  { id: "bev-toast", src: `${B}/Beverage images/bev-toast.webp`, type: "image", category: "Beverages", title: "The Toast" },
  { id: "three-iced-drinks", src: `${B}/Beverage images/three-iced-drinks.webp`, type: "image", category: "Beverages", title: "Trio on Ice" },
  { id: "bev-waiter", src: `${B}/Beverage images/bev-waiter.webp`, type: "image", category: "Beverages", title: "Service" },
  { id: "new-juice", src: `${B}/new-images/new-juice-01.jpg`, type: "image", category: "Beverages", title: "Fresh Juice" },

  // ── food ──
  { id: "food-dish", src: `${B}/Food photo/food-dish.webp`, type: "image", category: "Food", title: "Plated Dish" },
  { id: "food-chicken", src: `${B}/Food photo/food-chicken.webp`, type: "image", category: "Food", title: "Crispy Chicken" },
  { id: "food-curry", src: `${B}/Food photo/food-curry.webp`, type: "image", category: "Food", title: "Curry" },
  { id: "food-cream-macro", src: `${B}/Food photo/food-cream-macro.webp`, type: "image", category: "Food", title: "Crème Macro" },
  { id: "food-buffet", src: `${B}/Food photo/food-buffet.webp`, type: "image", category: "Food", title: "Buffet Spread" },
  { id: "food-mutton", src: `${B}/Food photo/food-mutton.webp`, type: "image", category: "Food", title: "Kashmiri Mutton" },
  { id: "food-cream", src: `${B}/Food photo/food-cream.webp`, type: "image", category: "Food", title: "Crème" },
  { id: "new-food-ultra", src: `${B}/new-images/new-food-ultra.png`, type: "image", category: "Food", title: "Ultra Detail" },
  { id: "new-food-biriyani", src: `${B}/new-images/new-food-biriyani.png`, type: "image", category: "Food", title: "Biriyani II" },

  // ── footwear — women ──
  { id: "shoe-ladies-video", src: `${B}/ladies shoe/shoe-ladies-video.mp4`, type: "video", category: "Footwear", title: "Women’s — In Motion" },
  { id: "high-end-shoe", src: `${B}/ladies shoe/High-end-shoe.webp`, type: "image", category: "Footwear", title: "High-End Heel" },
  { id: "shoe-ladies-sandal", src: `${B}/ladies shoe/shoe-ladies-sandal.webp`, type: "image", category: "Footwear", title: "Sandal" },
  { id: "shoe-ladies-mule", src: `${B}/ladies shoe/shoe-ladies-mule.webp`, type: "image", category: "Footwear", title: "Mule" },
  { id: "shoe-ladies-lifestyle", src: `${B}/ladies shoe/shoe-ladies-lifestyle.webp`, type: "image", category: "Footwear", title: "Lifestyle" },
  { id: "shoe-ladies-detail", src: `${B}/ladies shoe/shoe-ladies-detail.webp`, type: "image", category: "Footwear", title: "Detail" },
  { id: "shoe-ladies-mule-detail", src: `${B}/ladies shoe/shoe-ladies-mule-detail.webp`, type: "image", category: "Footwear", title: "Mule — Detail" },
  { id: "shoe-ladies-slipon", src: `${B}/ladies shoe/shoe-ladies-slipon.webp`, type: "image", category: "Footwear", title: "Slip-On" },
  { id: "new-product-heel", src: `${B}/new-images/new-product-heel.jpg`, type: "image", category: "Footwear", title: "Statement Heel" },
  { id: "new-product-sandal", src: `${B}/new-images/new-product-luxury -sandel.jpg`, type: "image", category: "Footwear", title: "Luxury Sandal" },

  // ── footwear — men ──
  { id: "sneaker-motion", src: `${B}/Product image/modern-athleti-sneaker.mp4`, type: "video", category: "Footwear", title: "Sneaker — Motion" },
  { id: "shoe-mens-campaign", src: `${B}/mens shoe/shoe-mens-campaign.webp`, type: "image", category: "Footwear", title: "Campaign" },
  { id: "modern-athletic-sneaker", src: `${B}/mens shoe/modern-athletic-sneaker.webp`, type: "image", category: "Footwear", title: "Athletic Sneaker" },
  { id: "shoe-mens-duo", src: `${B}/mens shoe/shoe-mens-duo.webp`, type: "image", category: "Footwear", title: "Duo" },
  { id: "shoe-mens-white", src: `${B}/mens shoe/shoe-mens-white.webp`, type: "image", category: "Footwear", title: "White Sneaker" },
  { id: "shoe-mens-lifestyle", src: `${B}/mens shoe/shoe-mens-lifestyle.webp`, type: "image", category: "Footwear", title: "Lifestyle" },

  // ── products ──
  { id: "product-headphone", src: `${B}/Product image/product-headphone.webp`, type: "image", category: "Products", title: "Headphones" },
  { id: "product-watch-dark", src: `${B}/Product image/product-watch-dark.webp`, type: "image", category: "Products", title: "Watch — Noir" },
  { id: "product-serum", src: `${B}/Product image/product-serum.webp`, type: "image", category: "Products", title: "Serum" },
  { id: "product-molton-brown", src: `${B}/Product image/product-molton-brown.webp`, type: "image", category: "Products", title: "Molton Brown" },
  { id: "product-energy-design", src: `${B}/Product image/product-energy-design.webp`, type: "image", category: "Products", title: "Energy — Design" },
  { id: "product-energy-shot", src: `${B}/Product image/product-energy-shot.webp`, type: "image", category: "Products", title: "Energy — Shot" },
  { id: "product-hairspray", src: `${B}/Product image/product-hairspray.webp`, type: "image", category: "Products", title: "Hair Spray" },
  { id: "product-bodywash", src: `${B}/Product image/product-bodywash.webp`, type: "image", category: "Products", title: "Body Wash" },
  { id: "new-product-blast", src: `${B}/new-images/new-product-blast.jpg`, type: "image", category: "Products", title: "Blast" },
  { id: "new-product-bold", src: `${B}/new-images/new-product-bold.jpg`, type: "image", category: "Products", title: "Bold" },
  { id: "ad-popout", src: `${B}/ADs/ad-popout.webp`, type: "image", category: "Ads", title: "Pop-Out" },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Food",
  "Beverages",
  "Footwear",
  "Products",
  "Ads",
];

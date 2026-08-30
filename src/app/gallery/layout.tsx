import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photography Gallery | Rahul Chanda",
  description:
    "Browse Rahul Chanda's commercial photography gallery — product packshots, beverage splash, food styling, footwear campaigns, and brand advertising from Dehradun, India.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photography Gallery — Rahul Chanda Photography",
    description:
      "Commercial photography portfolio: product, food, beverage, footwear, and campaign imagery shot in Dehradun, India.",
    url: absoluteUrl("/gallery"),
    images: [
      {
        url: absoluteUrl("/opt/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Photography Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Gallery — Rahul Chanda Photography",
    description:
      "Commercial photography portfolio: product, food, beverage, footwear, and campaign imagery.",
    images: [absoluteUrl("/opt/og-image.jpg")],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Gallery", item: absoluteUrl("/gallery") },
      ],
    },
    {
      "@type": "ImageGallery",
      name: "Rahul Chanda — Commercial Photography Gallery",
      description:
        "Portfolio of commercial product, food, beverage, footwear, and campaign photography by Rahul Chanda, Dehradun, India.",
      url: absoluteUrl("/gallery"),
      creator: {
        "@type": "Person",
        name: "Rahul Chanda",
        url: absoluteUrl("/about"),
      },
      about: {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": absoluteUrl("/#business"),
      },
      image: [
        absoluteUrl("/opt/best shots/Product image/product-watch-luxury.webp"),
        absoluteUrl("/opt/best shots/Food photo/food-biriyani.webp"),
        absoluteUrl("/opt/best shots/Beverage images/bev-iced.webp"),
        absoluteUrl("/opt/best shots/mens shoe/shoe-mens-white.webp"),
      ],
    },
  ],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photography Portfolio — Dehradun",
  description:
    "Commercial photography portfolio — product, food & beverage, footwear, and campaign imagery by Rahul Chanda Photography.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Commercial Photography Portfolio — Dehradun, India",
    description:
      "Commercial photography portfolio — product, food & beverage, footwear, and campaign imagery by Rahul Chanda.",
    url: absoluteUrl("/gallery"),
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Rahul Chanda Studio Portfolio Archive",
  "description":
    "Premium commercial photography portfolio — product, food, beverage splash, and footwear imagery.",
  "url": absoluteUrl("/gallery"),
  "about": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": absoluteUrl("/"),
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
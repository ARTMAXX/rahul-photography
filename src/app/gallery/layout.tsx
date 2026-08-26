import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photography Portfolio — Commercial Photographer in Dehradun",
  description:
    "Browse commercial photography work by Rahul Chanda — product, food & beverage, splash, footwear, and campaign imagery shot on location in Dehradun and across India.",
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
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio Gallery",
          "item": absoluteUrl("/gallery"),
        },
      ],
    },
    {
      "@type": "ImageGallery",
      "@id": absoluteUrl("/gallery#gallery"),
      "name": "Rahul Chanda Commercial Photography Portfolio",
      "description":
        "Curated commercial photography portfolio — product, food & beverage, splash, and footwear imagery.",
      "url": absoluteUrl("/gallery"),
      "author": {
        "@type": "Person",
        "name": "Rahul Chanda",
        "url": absoluteUrl("/"),
      },
      "about": {
        "@type": "ProfessionalService",
        "name": siteConfig.name,
        "url": absoluteUrl("/"),
      },
    },
  ],
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
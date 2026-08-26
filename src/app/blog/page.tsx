import type { Metadata } from "next";
import { BlogSection } from "@/components/ui/blog-section";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Photography Blog & Field Notes | Rahul Chanda",
  description:
    "Field notes, lighting techniques, AI retouching workflows, and behind-the-scenes guides from commercial photographer Rahul Chanda in Dehradun, India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Commercial Photography Blog & Field Notes — Rahul Chanda",
    description:
      "Field notes on commercial photography — lighting, styling, retouching, AI tools, and behind-the-scenes guides from Rahul Chanda.",
    url: absoluteUrl("/blog"),
  },
};

const blogSchema = {
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
          "name": "Journal & Field Notes",
          "item": absoluteUrl("/blog"),
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogSection />
      <CinematicFooter />
    </main>
  );
}

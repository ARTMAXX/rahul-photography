import type { Metadata } from "next";
import { BlogSection } from "@/components/ui/blog-section";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { blogs } from "@/lib/blog-catalog";
import { postDates, postModified } from "@/lib/blog-posts";

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
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Commercial Photography Blog — Rahul Chanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Photography Blog — Rahul Chanda",
    description: "Field notes, lighting techniques, and behind-the-scenes guides from a Dehradun commercial photographer.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

/**
 * Blog + ItemList JSON-LD. The post list comes from the single catalog source
 * (src/lib/blog-catalog.ts — the same list the card grid and RSS render);
 * publish and refresh dates come from src/lib/blog-posts.ts so these nodes
 * agree with each post's own JSON-LD and the sitemap. All dates are static
 * strings — never new Date().
 */
const blogPageUrl = absoluteUrl("/blog");

const blogPostNodes = blogs.map((b) => {
  const slugKey = b.slug.replace(/^\/blog\//, "");
  const published = postDates[slugKey] ?? b.createdAt;
  const modified = postModified[slugKey] ?? published;
  return {
    "@type": "BlogPosting",
    "@id": absoluteUrl(b.slug),
    "url": absoluteUrl(b.slug),
    "headline": b.title,
    "description": b.description,
    "image": absoluteUrl(b.image),
    "datePublished": published,
    "dateModified": modified,
    "isPartOf": { "@id": blogPageUrl },
    "author": { "@type": "Person", "name": siteConfig.contact.name },
  };
});

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
          "name": "Blog & Field Notes",
          "item": absoluteUrl("/blog"),
        },
      ],
    },
    {
      "@type": "Blog",
      "@id": blogPageUrl,
      "url": blogPageUrl,
      "name": `${siteConfig.name} — Blog & Field Notes`,
      "description":
        "Field notes, lighting techniques, AI retouching workflows, and behind-the-scenes guides from commercial photographer Rahul Chanda in Dehradun, India.",
      "inLanguage": "en",
      "publisher": { "@type": "Organization", "name": siteConfig.name },
      "blogPost": blogPostNodes,
    },
    {
      "@type": "ItemList",
      "@id": `${blogPageUrl}#blog-posts`,
      "name": "Blog & Field Notes — Posts",
      "numberOfItems": blogPostNodes.length,
      "itemListElement": blogPostNodes.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": p.url,
        "name": p.headline,
      })),
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

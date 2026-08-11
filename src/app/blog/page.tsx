import type { Metadata } from "next";
import { BlogSection } from "@/components/ui/blog-section";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photography Tips & AI Tools — Dehradun",
  description:
    "Field notes on commercial photography — lighting, styling, retouching, AI tools, and behind-the-scenes guides from Rahul Chanda.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Photography Field Notes & AI Tools — Dehradun, India",
    description:
      "Field notes on commercial photography — lighting, styling, retouching, AI tools, and behind-the-scenes guides from Rahul Chanda.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#070707] text-[#f0f0f0]">
      <BlogSection />
      <CinematicFooter />
    </main>
  );
}

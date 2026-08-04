import type { Metadata } from "next";
import { BlogSection } from "@/components/ui/blog-section";
import { CinematicFooter } from "@/components/ui/motion-footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on commercial photography — lighting, styling, retouching, and behind-the-scenes guides from Rahul Chanda's studio.",
};

export default function BlogPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#070707] text-[#f0f0f0] pt-36 md:pt-44">
      <div className="relative">
        <BlogSection />
      </div>
      <CinematicFooter />
    </main>
  );
}

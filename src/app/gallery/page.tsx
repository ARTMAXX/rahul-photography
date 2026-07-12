import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Rahul Chanda | Complete Photography & Motion Archive",
  description:
    "Browse the complete collection of Rahul Chanda's commercial work — food, beverage, footwear and product photography plus motion pieces, filterable in a full-screen gallery.",
};

export default function GalleryPage() {
  return <GalleryGrid />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive — Full Portfolio | Rahul Chanda Studio",
  description:
    "Explore the complete portfolio archive — every commercial campaign, product editorial, food & beverage story, and footwear shoot by Rahul Chanda.",
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

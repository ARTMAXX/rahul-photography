import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import LightRaysOverlay from "../components/LightRaysOverlay";
import Header from "../components/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rahul Chanda — Immersive Editorial Photography Portfolio & Visual Strategy",
  description: "Explore the luxurious, cinematic photography world of Rahul Chanda. High-end commercial product, food, beverage splash, and shoe photography campaigns styled with premium editorial depth.",
  keywords: ["Rahul Chanda", "Commercial Photography Dehradun", "Product Photographer India", "Beverage Splash Photography", "High-End Retouching", "Editorial Portfolio"],
  authors: [{ name: "Rahul Chanda" }],
  openGraph: {
    title: "Rahul Chanda — Immersive Editorial Photography Portfolio",
    description: "Creating high-impact visual identities that connect premium brands with their global audience.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rahul Chanda",
              "jobTitle": "Commercial Product Photographer & Visual Strategist",
              "sameAs": [
                "https://www.instagram.com/rahul_chanda_photography/"
              ],
              "knowsAbout": [
                "Product Photography",
                "Beverage Splash Photography",
                "Culinary Arts Photography",
                "High-End Fashion Retouching",
                "Creative Direction"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Rahul Chanda Studio Portfolio Archive",
              "description": "Premium commercial photography showcase including Chrono Luxury, Liquid Shadow, Velvet Crème, and Solé campaigns."
            })
          }}
        />
        <SmoothScroll>
          <LightRaysOverlay />
          <CustomCursor />
          <Header />
          {children}
        </SmoothScroll>
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}


import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import ColorBends from "../components/ColorBends";

import Header from "../components/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulchandaphotography.com"),
  title: {
    default: "Rahul Chanda — Commercial Product Photographer | Dehradun, India",
    template: "%s — Rahul Chanda Photography",
  },
  description:
    "Rahul Chanda is a high-end commercial product photographer based in Dehradun, India. Specialising in product, food, beverage splash, and footwear photography for premium brands.",
  keywords: [
    "Rahul Chanda",
    "Commercial Photography Dehradun",
    "Product Photographer India",
    "Beverage Splash Photography",
    "High-End Retouching",
    "Editorial Portfolio",
    "Food Photographer",
    "Footwear Photography",
  ],
  authors: [{ name: "Rahul Chanda" }],
  creator: "Rahul Chanda",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rahul Chanda Photography",
    title: "Rahul Chanda — Commercial Product Photographer",
    description:
      "High-end commercial product, food, beverage splash, and footwear photography. Based in Dehradun, India.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Chanda — Commercial Product Photographer",
    description:
      "High-end commercial product, food, beverage splash, and footwear photography.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
              ],
              "dateModified": "2026-07-29"
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
              "description": "Premium commercial photography portfolio — product, food, beverage splash, and footwear imagery."
            })
          }}
        />
        {/* ── LocalBusiness Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rahul Chanda Photography",
              "image": "https://rahulchandaphotography.com/about%20me%20photo/1me.webp",
              "description": "High-end commercial photography studio in Dehradun, India. Specializing in product, food, beverage splash, and footwear photography.",
              "@id": "https://rahulchandaphotography.com",
              "url": "https://rahulchandaphotography.com",
              "telephone": "+917078939475",
              "email": "rahulchandaphotography@gmail.com",
              "priceRange": "₹12,000 – ₹2,00,000+",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.3165,
                "longitude": 78.0322
              },
              "openingHours": "Mo-Sa 10:00-19:00",
              "sameAs": [
                "https://www.instagram.com/rahul_chanda_photography/"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Dehradun"
              }
            })
          }}
        />
        {/* ── Professional Service Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rahul Chanda Photography",
              "image": "https://rahulchandaphotography.com/about%20me%20photo/1me.webp",
              "description":
                "High-end commercial product photography, food photography, beverage splash photography, and footwear photography based in Dehradun, India.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "addressCountry": "IN",
              },
              "priceRange": "₹12,000 – ₹2,00,000+",
              "telephone": "+917078939475",
              "email": "rahulchandaphotography@gmail.com",
              "url": "https://rahulchandaphotography.com",
              "sameAs": [
                "https://www.instagram.com/rahul_chanda_photography/",
              ],
              "dateModified": "2026-07-29",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Photography" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beverage & Splash Photography" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Food Photography" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fashion & Footwear Photography" } },
                ],
              },
            }),
          }}
        />
        {/* ── FAQ Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How fast does Rahul Chanda respond to enquiries?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I reply within 24 hours with a tailored quote and shoot plan — and you work directly with me, not a sales team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Rahul Chanda Photography based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rahul Chanda is based in Dehradun, India, and shoots commercial campaigns nationwide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What photography services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Product, food & beverage splash, fashion & footwear, commercial campaign and brand content photography with high-end retouching."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are retouching and licensing discussed upfront?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — retouching, image licensing and delivery terms are agreed in writing before any project begins."
                  }
                }
              ]
            })
          }}
        />
        <SmoothScroll>
          <ColorBends
            colors={["#0d0506", "#160809", "#260d0e", "#571610"]}
            rotation={90}
            speed={0.15}
            scale={1.05}
            frequency={1.2}
            warpStrength={0.9}
            mouseInfluence={1}
            noise={0.08}
            parallax={0.5}
            iterations={2}
            intensity={0.55}
            bandWidth={3}
            transparent={false}
            className="fixed inset-0 z-0 h-screen w-screen"
          />
          <div className="relative z-10">
            <CustomCursor />
            <Header />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}


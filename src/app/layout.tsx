import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Outfit } from "next/font/google";
import { siteConfig, absoluteUrl } from "../lib/site";
import PageShell from "../components/PageShell";
import CustomCursor from "../components/CustomCursor";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — Rahul Chanda Photography",
  },
  description: siteConfig.description,
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
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LPBLXilY-PFQjebIFc4eq2AG5bSQqeuKsxm4i_xZoks",
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
        <PageShell>
          <CustomCursor />
          <Header />
          {children}
        </PageShell>
        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="TiJZdymXtkHehsEBZqxbkg"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
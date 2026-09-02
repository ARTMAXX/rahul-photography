import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rahul Chanda Photography \u2014 Commercial & Product Photographer Dehradun",
  description:
    "Professional commercial photography for products, food, footwear & brands. Based in Dehradun, India. Book your shoot today.",
  alternates: { canonical: "/social-landing" },
  openGraph: {
    title: "Rahul Chanda Photography — Dehradun, India",
    description:
      "Product, food, footwear & commercial photography. Book your shoot today.",
    url: absoluteUrl("/social-landing"),
    images: [{ url: absoluteUrl(siteConfig.ogImagePath), width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Chanda Photography — Dehradun, India",
    description: "Product, food, footwear & commercial photography. Book your shoot today.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
  robots: { index: false, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Rahul Chanda Photography",
      description: "Commercial & product photography services in Dehradun, India",
      url: absoluteUrl("/"),
      image: absoluteUrl(siteConfig.ogImagePath),
      address: { "@type": "PostalAddress", addressLocality: "Dehradun", addressRegion: "Uttarakhand", addressCountry: "IN" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Gallery", item: absoluteUrl("/gallery") },
      ],
    },
  ],
};

const heroImages = [
  { src: "/best shots/new-images/new-product-bold.jpg", alt: "Bold product photography with dramatic lighting" },
  { src: "/best shots/new-images/new-food-biriyani.png", alt: "Vibrant biriyani food photography" },
  { src: "/best shots/new-images/new-product-heel.jpg", alt: "Heeled footwear product shot" },
  { src: "/best shots/new-images/new-product-luxury-sandal.jpg", alt: "Luxury sandal product photography" },
  { src: "/best shots/new-images/new-product-blast.jpg", alt: "Dynamic product photography" },
  { src: "/best shots/new-images/new-food-ultra.png", alt: "Detailed food close-up photography" },
];

const services = [
  { title: "Product Photography", desc: "Clean packshots, lifestyle shots, and e-commerce imagery that sells.", href: "/services/product-photography", img: "/best shots/new-images/new-product-bold.jpg" },
  { title: "Food & Beverage", desc: "Mouth-watering food and beverage photography for restaurants and brands.", href: "/services/food-beverage-photography", img: "/best shots/new-images/new-food-biriyani.png" },
  { title: "Footwear & Fashion", desc: "Editorial and commercial footwear and fashion photography.", href: "/services/footwear-fashion-photography", img: "/best shots/new-images/new-product-heel.jpg" },
];

export default function SocialLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/best shots/new-images/new-product-bold.jpg"
            alt="Rahul Chanda \u2014 Commercial Photographer"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Rahul Chanda
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 font-light">
              Commercial & Product Photographer — Dehradun, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                Book a Shoot
              </Link>
            </div>
          </div>
        </section>

        {/* Work Gallery */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
              Selected Work
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {heroImages.map((img, i) => (
                <Link key={i} href="/gallery">
                  <div className="relative aspect-square overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/gallery"
                className="text-sm tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
              >
                See All Work  —
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 px-4 bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
              What I Do
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link key={i} href={s.href} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-400">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            Ready to elevate your brand with stunning product photography?
            Get in touch and let&apos;s discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Get In Touch
          </Link>
        </section>
      </main>
    </>
  );
}

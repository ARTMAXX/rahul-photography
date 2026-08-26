import type { Metadata } from "next";
import Link from "next/link";
import { LegalFooter } from "@/components/ui/legal-footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Rahul Chanda Photography",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-[#070707] text-[#f0f0f0] flex flex-col justify-between">
      <section className="relative flex-1 flex flex-col justify-center items-center px-6 md:px-12 pt-36 pb-20 max-w-[1200px] mx-auto text-center">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,59,44,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c] uppercase tracking-widest mb-6">
            404 · Error
          </div>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-serif leading-[0.9] tracking-tight text-white mb-6">
            Frame <span className="italic text-[#e83b2c]">not found</span>.
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-[50ch] mx-auto leading-relaxed mb-10">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          {/* Quick navigation grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto mb-10">
            {[
              {
                title: "Home",
                desc: "Return to homepage",
                href: "/",
                icon: "✦",
              },
              {
                title: "Portfolio",
                desc: "Explore selected work",
                href: "/gallery",
                icon: "📸",
              },
              {
                title: "Services",
                desc: "Pricing & deliverables",
                href: "/services",
                icon: "⚙️",
              },
              {
                title: "Dehradun",
                desc: "Local photography service",
                href: "/dehradun",
                icon: "📍",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-white/10 bg-white/[0.02] p-5 rounded-2xl text-left hover:border-[#e83b2c]/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-lg mb-2">{item.icon}</div>
                <div className="text-white font-serif text-lg group-hover:text-[#e83b2c] transition-colors">
                  {item.title}
                </div>
                <div className="text-white/40 text-xs mt-1">{item.desc}</div>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e83b2c] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#d63426] transition-colors"
            >
              Contact Rahul →
            </Link>
            <a
              href="https://wa.me/917078939475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-7 py-3.5 rounded-full hover:text-white hover:border-white/30 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}

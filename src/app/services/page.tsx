import type { Metadata } from "next";
import ServicesShowcase from "@/components/sections/redesign/ServicesShowcase";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Photographer in Dehradun",
  description:
    "Commercial photography services — product, food & beverage, fashion, footwear, campaigns, brand content, and interiors. Based in Dehradun, India, shooting nationwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Commercial Photography Services in Dehradun",
    description:
      "Commercial photography services — product, food & beverage, footwear, campaigns and brand content. Based in Dehradun, India.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* Page hero */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            Services
          </div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white mt-6 max-w-[16ch]">
            Tailored to
            <br />
            your <span className="italic text-[#e83b2c]">vision</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-8 leading-relaxed">
            Specialized photography services for brands that demand
            precision. Every project is scoped to your product, your story,
            and your budget.
          </p>
        </div>
      </section>

      {/* Reuse the interactive services accordion */}
      <ServicesShowcase />

      {/* Process strip */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              t: "Discovery",
              d: "We talk through your product, goals, and references. I send a clear scope, timeline, and investment estimate.",
            },
            {
              n: "02",
              t: "Production",
              d: "A focused shoot day with careful lighting, styling, and art direction — you review selects in real time.",
            },
            {
              n: "03",
              t: "Delivery",
              d: "Retouched, color-graded finals delivered in print + digital formats, with licensing agreed upfront.",
            },
          ].map((s) => (
            <div key={s.n} className="border-t border-white/10 pt-6">
              <span className="text-[#e83b2c] text-sm font-medium">
                {s.n}
              </span>
              <h2 className="text-2xl font-serif text-white mt-3">{s.t}</h2>
              <p className="text-white/50 mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative w-full px-4 md:px-12 pb-28">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact?service=Commercial%20Campaigns"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="pointer"
          >
            <span className="italic text-[#e83b2c]">Let&apos;s plan your shoot</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]">→</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}

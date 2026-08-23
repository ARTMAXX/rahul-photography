"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LegalFooter } from "@/components/ui/legal-footer";

// ─── FAQ Data ────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What types of photography do you offer?",
    a: "I specialize in product photography, food & beverage photography, fashion & footwear campaigns, and high-end retouching. Each project is tailored to the brand's visual identity.",
  },
  {
    q: "How do I book a shoot?",
    a: "Reach out via the contact form, WhatsApp, or email with your project details. I'll prepare a custom quote within 24 hours. Once confirmed with a 50% deposit, your shoot date is locked in.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "Standard delivery is 5–10 business days after the shoot. Rush delivery (24–48 hours) is available on request for an additional fee.",
  },
  {
    q: "How many images are included per project?",
    a: "This depends on the scope agreed in the project brief — Product Photography includes 20–50 edited high-res images and Food & Beverage includes 15–30 hero shots. The exact count is defined before the shoot begins.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. I'm based in Dehradun and available for shoots across India. Travel logistics and costs are discussed during the quoting stage.",
  },
  {
    q: "Can I request revisions?",
    a: "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
  },
  {
    q: "Do you provide raw or unedited files?",
    a: "Raw files are not delivered. Every final image goes through my retouching pipeline to ensure consistency and quality that matches the portfolio standard.",
  },
  {
    q: "What are the payment terms?",
    a: "A 50% booking deposit secures your date. The remaining balance is due before final image delivery. Payments can be made via bank transfer or UPI.",
  },
  {
    q: "Can I use the images for commercial purposes?",
    a: "Yes — delivered images come with a commercial use license as defined in the project brief. Extended or additional usage beyond the agreed scope requires a separate license.",
  },
  {
    q: "How long are quotes valid for?",
    a: "Written quotes are valid for 14 days from the date of issue. Final pricing is confirmed in writing before any shoot begins.",
  },
  {
    q: "What happens if I need to cancel a booked shoot?",
    a: "Deposits are non-refundable for cancellations made within 7 days of the scheduled shoot date — that production time is reserved exclusively for you.",
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a: "I work with brands of all sizes — from early-stage startups to established companies. Every project gets the same attention to craft and detail.",
  },
];

// ─── Feature Grid Data ───────────────────────────────────────────────
const features = [
  {
    icon: "📸",
    title: "Product & E-commerce",
    desc: "Crystal-clear product shots optimized for marketplaces, D2C brands, and catalogues.",
  },
  {
    icon: "🍽️",
    title: "Food & Beverage",
    desc: "Styling and photography that captures texture, colour, and appetite appeal.",
  },
  {
    icon: "👗",
    title: "Fashion & Footwear",
    desc: "Campaign-grade fashion imagery for lookbooks, social, and print.",
  },
  {
    icon: "✨",
    title: "High-End Retouching",
    desc: "Pixel-level retouching and compositing for hero visuals and billboards.",
  },
  {
    icon: "🎬",
    title: "Behind-the-Scenes",
    desc: "BTS content that shows your production process and builds brand trust.",
  },
  {
    icon: "📦",
    title: "End-to-End Delivery",
    desc: "From concept to final files — art direction, shooting, post, and archive.",
  },
];

// ─── Accordion Component ─────────────────────────────────────────────
function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors pr-8">
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border text-xs transition-all duration-300 ${
          isOpen
            ? "border-[#e83b2c]/40 bg-[#e83b2c]/10 text-[#e83b2c]"
            : "border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white/70"
        }`}>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/50 leading-relaxed pb-6 max-w-[70ch]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* ── Hero ── */}
      <section className="relative px-4 md:px-12 pt-36 md:pt-44 pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9]">
              Everything you
              <br />
              need to{" "}
              <span className="italic text-[#e83b2c]">know.</span>
            </h1>
          </div>
          <div className="md:pt-4">
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[40ch] mb-8">
              Quick answers about services, booking, pricing, and delivery.
              If you don&apos;t find what you need, just reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#e83b2c] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#f0523f] transition-colors"
                data-cursor="pointer"
              >
                Talk to Rahul
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-[#e83b2c]/30 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#e83b2c]/10 transition-colors"
                data-cursor="pointer"
              >
                View services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subtle divider ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── Feature Grid ── */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-12 md:mb-16">
          Specialized in your needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-14">
          {features.map((f) => (
            <div key={f.title}>
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight">
            &ldquo;Rahul&apos;s work became part of our brand identity and
            helped us launch faster with confidence.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white/80">Anita Cruz</p>
              <p className="text-xs text-white/40">Head of Creative</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">
              FAQs
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-12 py-20 md:py-32">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-white/80">RC</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight mb-4">
            Bring your stories
            <br />
            to life.
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-[36ch] mx-auto leading-relaxed">
            No templates. No stock. Just a meticulous photographer
            turning your product into imagery that sells.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e83b2c] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#f0523f] transition-colors"
              data-cursor="pointer"
            >
              Talk to Rahul
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-[#e83b2c]/30 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#e83b2c]/10 transition-colors"
              data-cursor="pointer"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}

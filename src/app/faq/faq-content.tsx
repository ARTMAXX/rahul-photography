"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CinematicFooter } from "@/components/ui/motion-footer";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQContent({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
          HERO
         ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden bg-[#070707]">
        {/* Ambient sticker — matches other section heroes */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            Frequently Asked Questions
          </div>
          <h1 className="h-display">
            Answers to the
            <br />
            <span className="italic text-[#e83b2c]">questions</span> clients
            <br />
            ask before booking.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[65ch] mt-8 leading-relaxed">
            Pricing, turnaround, revisions, deliverables, payment terms and
            cancellations — everything you need to decide whether we&apos;re a fit
            before you reach out.
          </p>
        </div>
      </section>

      {/* ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
          FAQ ACCORDION — two-column layout matching FAQSection
         ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ */}
      <section
        id="faq"
        className="relative w-full py-24 md:py-36 px-4 md:px-12 overflow-hidden bg-[#070707] border-t border-white/5"
      >
        {/* Ambient */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
                FAQ
              </div>
              <h2 className="mt-5 h-section">
                Questions,
                <br />
                <span className="text-[#e83b2c] italic">answered.</span>
              </h2>
              <p className="mt-6 text-white/50 text-sm md:text-base leading-relaxed max-w-[36ch]">
                Straight answers — no fine print hiding. Anything else, just ask
                and I&apos;ll reply within 24 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#e83b2c] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-[#f0523f] transition-colors"
                  data-cursor="pointer"
                >
                  Start a Project
                </Link>
                <a
                  href="https://wa.me/917078939475?text=Hi%20Rahul%2C%20I%20have%20a%20question%20about%20your%20photography%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-full hover:border-white/30 transition-colors"
                  data-cursor="pointer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: accordion (same UI language as FAQSection on homepage) */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                    aria-expanded={isOpen}
                    data-cursor="pointer"
                  >
                    <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors pr-8">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                        isOpen
                          ? "border-[#e83b2c]/40 bg-[#e83b2c]/10 text-[#e83b2c]"
                          : "border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white/70"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5v14M5 12h14"
                        />
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
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
          BOTTOM CTA — matches the homepage CinematicCTA visual language
         ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ */}
      <section className="relative py-24 md:py-36 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#070707]/60 to-[#070707]" />
          <div className="absolute inset-0 bg-[#ffffff]/[0.04] mix-blend-screen" />
        </div>

        {/* Copper streak accents */}
        <div className="absolute left-1/2 top-0 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8c1c13]/50 to-transparent" />
        <div className="absolute left-1/2 bottom-0 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8c1c13]/30 to-transparent" />

        <div className="relative z-10 mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 border border-[#e83b2c]/20 bg-black/30 backdrop-blur px-5 py-2 rounded-full text-white/60 text-xs uppercase tracking-[0.3em]">
              <span className="text-[#e83b2c]">—</span> Still have a question?
            </div>

            <h2 className="h-section max-w-\[20ch\]">
              Let&apos;s talk about
              <br />
              <span className="text-[#e83b2c] italic">your project.</span>
            </h2>

            <p className="mt-6 max-w-xl mx-auto text-white/45 text-sm md:text-base leading-relaxed">
              Reach out directly via email, WhatsApp, or the contact form.
              Replies within 24 hours, no sales team in between.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#e83b2c] text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full hover:bg-[#f0523f] transition-colors shadow-[0_10px_40px_-10px_rgba(232,59,44,0.5)]"
                data-cursor="pointer"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://wa.me/917078939475?text=Hi%20Rahul%2C%20I%20have%20a%20question%20about%20your%20photography%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#e83b2c]/40 text-white px-8 py-4 rounded-full text-sm md:text-base font-medium backdrop-blur hover:bg-[#e83b2c]/10 transition-colors"
                data-cursor="pointer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-10 text-white/25 text-xs tracking-[0.2em] uppercase">
              Typically replies within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <CinematicFooter />
    </>
  );
}

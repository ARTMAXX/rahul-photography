"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LegalFooter } from "@/components/ui/legal-footer";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQContent({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="pt-32 md:pt-48 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/60">
            Everything you need to know about booking a shoot, pricing, delivery, and working with Rahul Chanda for commercial photography.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-left font-serif text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  ▼
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-black border-t border-white/10"
                  >
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Still have questions?</h2>
          <p className="text-white/60 mb-8">
            Reach out directly via email, WhatsApp, or the contact form.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black rounded-full font-serif hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <LegalFooter />
    </>
  );
}

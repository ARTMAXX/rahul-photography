"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢
   FAQSection — objection handling on the homepage
   Reuses the real answers from /faq: deposits, turnaround, quotes, cancellation.
   â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢â"¢ */

const faqs = [
  {
    q: "What is the typical turnaround time?",
    a: "Standard delivery is 5—10 business days after the shoot. Rush delivery (24—48 hours) is available on request for an additional fee.",
  },
  {
    q: "How many images are included per project?",
    a: "It depends on the scope agreed in the project brief — Product Photography includes 20—50 edited high-res images and Food & Beverage includes 15—30 hero shots. The exact count is defined before the shoot begins.",
  },
  {
    q: "What are the payment terms?",
    a: "A 50% booking deposit secures your date. The remaining balance is due before final image delivery. Payments can be made via bank transfer or UPI.",
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
    q: "Can I request revisions?",
    a: "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a: "I work with brands of all sizes — from early-stage startups to established companies. Every project gets the same attention to craft and detail.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-24 md:py-36 px-4 md:px-12 overflow-hidden bg-[#070707]">
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
            <p className="mt-6 t-body max-w-[36ch]">
              Straight answers — no fine print hiding. Anything else, just ask
              and I&apos;ll reply within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e83b2c] text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-[#f0523f] transition-colors"
              >
                Start a Project
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 border border-white/15 font-sans text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-full hover:border-white/30 transition-colors"
              >
                Full FAQ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: accordion */}
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
                >
                  <span className="t-body pr-8">
                    {faq.q}
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
                      <p className="t-body pb-6 max-w-[70ch]">
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
  );
}
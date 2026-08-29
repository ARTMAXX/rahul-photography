"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyVideo from "@/components/ui/LazyVideo";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "917078939475";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "rahulchandaphotography@gmail.com",
    href: "mailto:rahulchandaphotography@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 70789 39475",
    href: "tel:+917078939475",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+91 70789 39475",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
  },
];

const SERVICES = [
  "Product Photography",
  "Fashion & Lifestyle",
  "Food & Beverage",
  "Commercial Campaigns",
  "Brand Content Creation",
  "Architectural & Interiors",
  "Something else",
];

export default function ContactForm({
  headingLevel = "h2",
}: {
  /** "h1" on the standalone /contact page (its only H1); "h2" on the homepage. */
  headingLevel?: "h1" | "h2";
}) {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const HeadingTag = headingLevel;

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Listen for "Inquire Now" clicks in the Services section.
  useEffect(() => {
    const onInquire = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      if (title && SERVICES.includes(title)) setService(title);
    };
    window.addEventListener("inquire-service", onInquire);
    return () => window.removeEventListener("inquire-service", onInquire);
  }, []);

  // Preselect service from ?service= URL param (e.g. /contact?service=Product%20Photography)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const svc = params.get("service");
    if (svc && SERVICES.includes(svc)) setService(svc);
  }, []);

  useGSAP(() => {
    if (headingRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1.2,
          },
        })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          }
        );
    }

    const formItems = containerRef.current?.querySelectorAll(".footer-item");
    if (formItems) {
      gsap.fromTo(
        formItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power3.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: formItems[0],
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }

    // NOTE: no global ScrollTrigger kill  —  the gsap context reverts only
    // this component's triggers (global kills broke sibling sections).

    return undefined;
  }, { scope: containerRef });

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please tell me your name.";
    if (!contact.trim()) {
      next.contact = "An email or phone number helps me reply.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim()) &&
      !/^[+\d][\d\s-]{7,}$/.test(contact.trim())
    ) {
      next.contact = "That doesn't look like an email or phone number.";
    }
    if (!service) next.service = "Which service are you interested in?";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openWhatsApp = () => {
    const text = [
      `Hi Rahul, my name is ${name.trim()}.`,
      `I'm interested in ${service}.`,
      message.trim() ? `Details: ${message.trim()}` : "",
      `My contact: ${contact.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    if (!validate()) return;

    setStatus("sending");
    // Short pause so the button visibly acknowledges the tap,
    // then hand off to WhatsApp (the closest thing to a live reply).
    window.setTimeout(() => {
      openWhatsApp();
      setStatus("sent");
      // Reset after the user has had a moment with the success state.
      window.setTimeout(() => {
        setName("");
        setContact("");
        setService("");
        setMessage("");
        setStatus("idle");
      }, 5000);
    }, 450);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-screen overflow-hidden bg-[#070707]"
    >
      {/* -- Full-resolution video background (IO-gated; poster-only on mobile) -- */}
      <LazyVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
        poster="/opt/hero-shots/main hero landing page.webp"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "70% center" }}
        preload="metadata"
        alt="Rahul Chanda photographing products in the studio"
      />

      {/* -- Dark overlay for text readability -- */}
      <div className="absolute inset-0 bg-black/55" />

      {/* -- Content over video -- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pt-32 md:pt-44 pb-16 md:pb-24 max-w-[1400px] mx-auto w-full">
          <div ref={headingRef}>
            <HeadingTag className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white/90 max-w-[20ch] mb-12">
              Ready to make your product
              <br />
              <span className="italic text-[#e83b2c]">worth choosing?</span>
            </HeadingTag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            {/* -- Left: contact methods + quick WhatsApp -- */}
            <div className="space-y-10">
              <div className="footer-item space-y-4">
                {CONTACT_METHODS.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "WhatsApp" ? "_blank" : undefined}
                    rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 text-base text-white/75 hover:text-white transition-colors duration-300"
                    data-cursor="pointer"
                  >
                    <span className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-[#e83b2c] group-hover:border-[#e83b2c]/40 transition-colors duration-300">
                      <method.icon className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {method.label}
                      </span>
                      <span className="group-hover:text-[#ffffff] transition-colors duration-300">
                        {method.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="footer-item">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi Rahul, I'd like to discuss a photography project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white/70 hover:text-white transition-colors duration-500"
                  data-cursor="pointer"
                >
                  <span>Prefer WhatsApp?</span>
                  <span className="w-12 h-px bg-[#e83b2c]/40 group-hover:bg-[#e83b2c] transition-colors duration-500" />
                  <MessageCircle className="w-3.5 h-3.5 text-[#e83b2c]" />
                </a>
              </div>

              {/* -- Decision reassurance: what happens next -- */}
              <div className="footer-item rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
                  What happens next
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-white/75">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#e83b2c] shrink-0" />
                    <span>
                      I reply within <span className="text-white">24 hours</span> with a
                      tailored quote and shoot plan.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/75">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#e83b2c] shrink-0" />
                    <span>
                      No calls-shopping Å“Â¦ you work 
                      <span className="text-white">directly with me</span>, not a
                      sales team.
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/75">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#e83b2c] shrink-0" />
                    <span>
                      Retouching, license, and delivery terms are agreed 
                      <span className="text-white">upfront</span>, in writing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* -- Right: the form -- */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="footer-item rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="block text-[10px] uppercase tracking-[0.2em] text-white/75 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    inputMode="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3.5 min-h-[48px] text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#e83b2c]/60 focus:bg-white/[0.06] transition-colors duration-300"
                    data-cursor="pointer"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#e83b2c]">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="cf-contact"
                    className="block text-[10px] uppercase tracking-[0.2em] text-white/75 mb-2"
                  >
                    Email or Phone
                  </label>
                  <input
                    id="cf-contact"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="you@brand.com / +91"
                    className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3.5 min-h-[48px] text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#e83b2c]/60 focus:bg-white/[0.06] transition-colors duration-300"
                    data-cursor="pointer"
                  />
                  {errors.contact && (
                    <p className="mt-1.5 text-xs text-[#e83b2c]">{errors.contact}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="cf-service"
                  className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2"
                >
                  Service
                </label>
                <select
                  id="cf-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 min-h-[48px] text-base appearance-none focus:outline-none focus:bg-white/[0.06] transition-colors duration-300 ${
                      service
                        ? "text-white border-white/15 focus:border-[#ffffff]/60"
                        : "text-white/50 border-white/15"
                    }`}
                  data-cursor="pointer"
                >
                  <option value="" disabled className="bg-[#111] text-white/50">
                    Select a serviceÅ“Â¦
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#111] text-white">
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-[#e83b2c]">{errors.service}</p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="cf-message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2"
                >
                  Project Details 
                  <span className="text-white/50 normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="cf-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell me about the product, timeline, and where you'd like the shoot."
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3.5 min-h-[100px] text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#e83b2c]/60 focus:bg-white/[0.06] transition-colors duration-300 resize-none"
                  data-cursor="pointer"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative mt-6 w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#e83b2c] px-8 py-4 min-h-[52px] text-base font-medium text-white transition-all duration-300 hover:bg-[#f0523f] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(232,59,44,0.5)]"
                data-cursor="pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Opening WhatsAppÅ“Â¦</span>
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Opened in WhatsApp</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-white/60">
                Sends instantly via WhatsApp Å“Â¦ no account needed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

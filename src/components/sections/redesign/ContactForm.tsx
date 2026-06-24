"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  timeline: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
  timeline: "",
};

const SERVICES = [
  "Product Photography",
  "Fashion & Lifestyle",
  "Food & Beverage",
  "Commercial Campaigns",
  "Brand Content Creation",
  "Architectural & Interiors",
];

const BUDGET_RANGES = [
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const TIMELINES = [
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Flexible",
];

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "rahulchandaphotography@gmail.com",
    href: "mailto:rahulchandaphotography@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 70789 39475",
    href: "tel:+917078939475",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@rahul_chanda_photography",
    href: "https://www.instagram.com/rahul_chanda_photography/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1.2,
          },
        })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, filter: "blur(24px)", rotateX: 12 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotateX: 0,
            ease: "power3.out",
            duration: 1,
          }
        );
    }

    // Contact method cards stagger
    const methodCards = containerRef.current?.querySelectorAll(".contact-method-card");
    if (methodCards) {
      gsap.fromTo(
        methodCards,
        { opacity: 0, x: -30, filter: "blur(6px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          ease: "power3.out",
          duration: 0.7,
          scrollTrigger: {
            trigger: methodCards[0],
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, { scope: containerRef });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const renderField = (
    name: keyof FormData,
    label: string,
    type: "text" | "email" | "tel" | "textarea" | "select",
    options?: string[],
    placeholder?: string,
    required?: boolean,
    colSpan?: boolean
  ) => {
    const isFocused = focusedField === name;
    const value = formData[name];

    const inputClasses = `w-full px-4 py-3 bg-transparent text-white placeholder-white/30 focus:outline-none rounded-lg ${
      type === "select" ? "appearance-none" : ""
    }`;

    return (
      <div className={colSpan ? "md:col-span-2" : ""}>
        <label
          htmlFor={name}
          className="block text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-3"
        >
          {label} {required && <span className="text-[#c8a84b]">*</span>}
        </label>
        <div
          className={`p-[1px] rounded-xl transition-all duration-500 ${
            isFocused
              ? "bg-gradient-to-br from-[#c8a84b]/40 to-white/10"
              : "bg-white/[0.04]"
          }`}
        >
          <div
            className={`rounded-[calc(0.75rem-1px)] transition-all duration-500 ${
              isFocused ? "bg-black/80" : "bg-transparent"
            }`}
          >
            {type === "textarea" ? (
              <textarea
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                required={required}
                rows={5}
                className={`${inputClasses} resize-none`}
                placeholder={placeholder}
              />
            ) : type === "select" ? (
              <div className="relative">
                <select
                  id={name}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(name)}
                  onBlur={() => setFocusedField(null)}
                  required={required}
                  className={inputClasses}
                >
                  <option value="" className="bg-black">
                    {placeholder || "Select..."}
                  </option>
                  {options?.map((opt) => (
                    <option key={opt} value={opt} className="bg-black">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                required={required}
                className={inputClasses}
                placeholder={placeholder}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full bg-black py-32 md:py-40 px-4 md:px-12 overflow-hidden"
    >
      {/* Ambient gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header — no numbered marker for variety */}
        <div className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium mb-6">
            Contact
          </span>
          <h2
            ref={headingRef}
            className="text-[clamp(3rem,10vw,7rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white max-w-[16ch]"
          >
            Let&apos;s{" "}
            <span className="italic text-[#c8a84b]">create</span>{" "}
            together.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Info + Contact Methods */}
          <div>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-[45ch] mb-12">
              Ready to elevate your brand with exceptional photography? Fill
              out the form and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-3">
              {CONTACT_METHODS.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "Instagram" ? "_blank" : undefined}
                  rel={method.label === "Instagram" ? "noopener noreferrer" : undefined}
                  className="contact-method-card group block"
                  data-cursor="pointer"
                >
                  <div className="p-[1px] rounded-2xl bg-white/[0.03] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#c8a84b]/20 hover:to-white/5">
                    <div className="p-4 rounded-[calc(1rem-1px)] bg-black/60 flex items-center gap-4 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/50 transition-all duration-500 group-hover:bg-[#c8a84b]/10 group-hover:ring-[#c8a84b]/30 group-hover:text-[#c8a84b]">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium block mb-0.5">
                          {method.label}
                        </span>
                        <span className="text-white/80 text-sm truncate block">
                          {method.value}
                        </span>
                      </div>
                      <div className="text-white/20 transition-all duration-300 group-hover:text-[#c8a84b]/60 group-hover:translate-x-1">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Double-bezel form container */}
              <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent ring-1 ring-white/10">
                <div className="rounded-[calc(2.5rem-2px)] bg-gradient-to-br from-black via-[#0a0a0a] to-black p-6 md:p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {renderField("name", "Your Name", "text", undefined, "Enter your full name", true)}
                      {renderField("email", "Email", "email", undefined, "your@email.com", true)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {renderField("phone", "Phone", "tel", undefined, "+91 XXXXX XXXXX")}
                      {renderField("service", "Service Interested In", "select", SERVICES, undefined, true)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {renderField("budget", "Budget Range", "select", BUDGET_RANGES)}
                      {renderField("timeline", "Timeline", "select", TIMELINES)}
                    </div>

                    {renderField("message", "Project Details", "textarea", undefined, "Tell me about your project, vision, and what you're looking to achieve...", true, true)}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className="group w-full relative"
                      data-cursor="pointer"
                    >
                      <div
                        className={`p-[2px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          isSubmitting || submitStatus === "success"
                            ? "bg-white/10"
                            : "bg-gradient-to-br from-[#c8a84b]/40 to-white/10 hover:from-[#c8a84b]/70 hover:to-white/30"
                        }`}
                      >
                        <div
                          className={`px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-500 ${
                            isSubmitting || submitStatus === "success"
                              ? "bg-white/5"
                              : "bg-black group-hover:bg-black/80"
                          }`}
                        >
                          {submitStatus === "success" ? (
                            <>
                              <span className="text-base font-medium text-white">
                                Message Sent Successfully!
                              </span>
                              <span className="text-xl">✓</span>
                            </>
                          ) : isSubmitting ? (
                            <>
                              <span className="text-base font-medium text-white/70">
                                Sending...
                              </span>
                              <div className="w-5 h-5 border-2 border-white/20 border-t-[#c8a84b] rounded-full animate-spin" />
                            </>
                          ) : (
                            <>
                              <span className="text-base font-medium text-white/90">
                                Send Message
                              </span>
                              <div className="w-6 h-6 rounded-full bg-[#c8a84b]/20 flex items-center justify-center text-[#c8a84b] text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-[2px]">
                                →
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

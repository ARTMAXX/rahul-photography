"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "rahulchandaphotography@gmail.com",
    href: "mailto:rahulchandaphotography@gmail.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+91 7078939475",
    href: "tel:+917078939475",
    icon: "☎",
  },
  {
    label: "Instagram",
    value: "@rahul_chanda_photography",
    href: "https://www.instagram.com/rahul_chanda_photography/",
    icon: "◐",
  },
  {
    label: "Location",
    value: "Dehradun, India",
    href: "#",
    icon: "◉",
  },
];

const PROJECT_TYPES = [
  "Product Photography",
  "Beverage & Splash",
  "Food Photography",
  "Fashion & Footwear",
  "Campaign Shoot",
  "Other",
];

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 60, filter: "blur(20px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
          delay: 0.3,
        }
      );

      const methods = gsap.utils.toArray<HTMLElement>(".contact-method");
      methods.forEach((method, i) => {
        gsap.fromTo(
          method,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "cubic-bezier(0.32, 0.72, 0, 1)",
            delay: 0.5 + i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In production, you'd send this to an API endpoint
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <div ref={sectionRef} className="relative w-full bg-[#050505] min-h-screen">
      {/* Massive ambient glow */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Header section */}
      <div className="relative z-10 px-4 md:px-12 pt-32 pb-16">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mb-12 text-white/60 hover:text-white transition-colors duration-500"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="text-sm uppercase tracking-widest">Back to Home</span>
        </Link>

        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
          Let's Create Together
        </span>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-8 max-w-[15ch]">
          Have a project in <span className="italic font-bold">mind?</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-[60ch]">
          Whether it's a product launch, culinary campaign, or brand refresh — let's bring your vision to life with obsessive attention to detail.
        </p>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 px-4 md:px-12 pb-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact methods - Left sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-serif text-white mb-8">Get in touch</h2>
            {CONTACT_METHODS.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-method group block"
              >
                <div className="p-1.5 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/20 hover:bg-white/[0.04]">
                  <div className="p-6 rounded-[calc(2rem-0.375rem)] bg-white/[0.02] flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                        {method.label}
                      </div>
                      <div className="text-white font-medium transition-transform duration-300 group-hover:translate-x-2">
                        {method.value}
                      </div>
                    </div>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 text-white text-xl transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                      {method.icon}
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="p-1.5 rounded-[2rem] bg-white/[0.02] ring-1 ring-white/10 mt-12">
              <div className="p-6 rounded-[calc(2rem-0.375rem)] bg-gradient-to-br from-green-500/10 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for projects</span>
                </div>
                <p className="text-xs text-white/60">
                  Currently booking for Q3 2026. Rush projects accommodated.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form - Right main area */}
          <div className="lg:col-span-2 contact-form">
            <div className="p-2 md:p-3 rounded-[3rem] bg-white/[0.03] ring-1 ring-white/10">
              <div className="p-8 md:p-12 rounded-[calc(3rem-0.75rem)] bg-gradient-to-br from-white/[0.05] to-transparent">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
                  Tell me about your project
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none transition-all duration-500 ${
                          focusedField === "name"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none transition-all duration-500 ${
                          focusedField === "email"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none transition-all duration-500 ${
                          focusedField === "phone"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                        placeholder="+91 12345 67890"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none transition-all duration-500 ${
                          focusedField === "company"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                        placeholder="Your Brand Name"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white outline-none transition-all duration-500 appearance-none cursor-pointer ${
                          focusedField === "projectType"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-black">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("budget")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white outline-none transition-all duration-500 appearance-none cursor-pointer ${
                          focusedField === "budget"
                            ? "ring-white/30 bg-white/10"
                            : "ring-white/10"
                        }`}
                      >
                        <option value="" disabled>
                          Select your budget
                        </option>
                        {BUDGETS.map((budget) => (
                          <option key={budget} value={budget} className="bg-black">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                      Project Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("timeline")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none transition-all duration-500 ${
                        focusedField === "timeline"
                          ? "ring-white/30 bg-white/10"
                          : "ring-white/10"
                      }`}
                      placeholder="e.g., Next month, Q3 2026, ASAP"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/40 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full px-5 py-4 rounded-2xl bg-white/5 ring-1 text-white placeholder:text-white/30 outline-none resize-none transition-all duration-500 ${
                        focusedField === "message"
                          ? "ring-white/30 bg-white/10"
                          : "ring-white/10"
                      }`}
                      placeholder="Tell me about your vision, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                        submitStatus === "success"
                          ? "bg-green-500 text-white"
                          : "bg-white text-black hover:bg-white/90 hover:scale-[1.02]"
                      }`}
                    >
                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : submitStatus === "success"
                          ? "Message Sent! ✓"
                          : "Send Message"}
                      </span>
                      {!isSubmitting && submitStatus !== "success" && (
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                          →
                        </span>
                      )}
                    </button>
                  </div>

                  {submitStatus === "success" && (
                    <p className="text-sm text-green-400">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

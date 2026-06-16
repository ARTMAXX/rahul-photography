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
  timeline: ""
};

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
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, filter: "blur(20px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }
  }, { scope: containerRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData(initialFormData);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const services = [
    "Product Photography",
    "Fashion & Lifestyle",
    "Food & Beverage",
    "Commercial Campaigns",
    "Brand Content Creation",
    "Architectural & Interiors"
  ];

  const budgetRanges = [
    "₹15,000 - ₹30,000",
    "₹30,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000+"
  ];

  const timelines = [
    "Within 2 weeks",
    "Within 1 month",
    "1-3 months",
    "Flexible"
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black py-32 md:py-40 px-4 md:px-12 overflow-hidden"
    >
      {/* Ambient gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(140,28,19,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Eyebrow tag */}
        <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40 ring-1 ring-white/10 mb-8">
          Get In Touch
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Heading & Info */}
          <div>
            <h2 
              ref={headingRef}
              className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.02em] text-white mb-8 max-w-[12ch]"
            >
              Let's <span className="italic">create</span> together.
            </h2>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-[50ch]">
              Ready to elevate your brand with exceptional photography? Fill out the form and I'll get back to you within 24 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <a 
                href="mailto:rahulchandaphotography@gmail.com"
                className="group block"
              >
                <div className="p-1.5 rounded-2xl bg-white/[0.02] ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.04] hover:ring-white/15">
                  <div className="p-5 rounded-[calc(1rem-0.375rem)] bg-gradient-to-br from-white/[0.03] to-transparent flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/60 text-sm transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                      ✉
                    </div>
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-1">
                        Email
                      </span>
                      <span className="text-white/90 text-sm">
                        rahulchandaphotography@gmail.com
                      </span>
                    </div>
                    <div className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </div>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+917078939475"
                className="group block"
              >
                <div className="p-1.5 rounded-2xl bg-white/[0.02] ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.04] hover:ring-white/15">
                  <div className="p-5 rounded-[calc(1rem-0.375rem)] bg-gradient-to-br from-white/[0.03] to-transparent flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/60 text-sm transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                      ☎
                    </div>
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-1">
                        Phone
                      </span>
                      <span className="text-white/90 text-sm">
                        +91 70789 39475
                      </span>
                    </div>
                    <div className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </div>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/rahul_chanda_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="p-1.5 rounded-2xl bg-white/[0.02] ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.04] hover:ring-white/15">
                  <div className="p-5 rounded-[calc(1rem-0.375rem)] bg-gradient-to-br from-white/[0.03] to-transparent flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/60 text-sm transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                      ◈
                    </div>
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium block mb-1">
                        Instagram
                      </span>
                      <span className="text-white/90 text-sm">
                        @rahul_chanda_photography
                      </span>
                    </div>
                    <div className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Double-bezel wrapper */}
              <div className="p-2 rounded-[2.5rem] bg-white/[0.03] ring-1 ring-white/10">
                <div className="p-6 md:p-8 rounded-[calc(2.5rem-0.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                        Your Name *
                      </label>
                      <div className={`
                        p-1 rounded-xl transition-all duration-500
                        ${focusedField === "name" 
                          ? 'bg-white/10 ring-2 ring-white/20' 
                          : 'bg-white/[0.02] ring-1 ring-white/10'
                        }
                      `}>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-transparent text-white placeholder-white/30 focus:outline-none rounded-lg"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                          Email *
                        </label>
                        <div className={`
                          p-1 rounded-xl transition-all duration-500
                          ${focusedField === "email" 
                            ? 'bg-white/10 ring-2 ring-white/20' 
                            : 'bg-white/[0.02] ring-1 ring-white/10'
                          }
                        `}>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-transparent text-white placeholder-white/30 focus:outline-none rounded-lg"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                          Phone
                        </label>
                        <div className={`
                          p-1 rounded-xl transition-all duration-500
                          ${focusedField === "phone" 
                            ? 'bg-white/10 ring-2 ring-white/20' 
                            : 'bg-white/[0.02] ring-1 ring-white/10'
                          }
                        `}>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-transparent text-white placeholder-white/30 focus:outline-none rounded-lg"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                        Service Interested In *
                      </label>
                      <div className={`
                        p-1 rounded-xl transition-all duration-500
                        ${focusedField === "service" 
                          ? 'bg-white/10 ring-2 ring-white/20' 
                          : 'bg-white/[0.02] ring-1 ring-white/10'
                        }
                      `}>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("service")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-transparent text-white focus:outline-none rounded-lg"
                        >
                          <option value="" className="bg-black">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-black">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                          Budget Range
                        </label>
                        <div className={`
                          p-1 rounded-xl transition-all duration-500
                          ${focusedField === "budget" 
                            ? 'bg-white/10 ring-2 ring-white/20' 
                            : 'bg-white/[0.02] ring-1 ring-white/10'
                          }
                        `}>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("budget")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-transparent text-white focus:outline-none rounded-lg"
                          >
                            <option value="" className="bg-black">Select budget</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range} className="bg-black">
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                          Timeline
                        </label>
                        <div className={`
                          p-1 rounded-xl transition-all duration-500
                          ${focusedField === "timeline" 
                            ? 'bg-white/10 ring-2 ring-white/20' 
                            : 'bg-white/[0.02] ring-1 ring-white/10'
                          }
                        `}>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("timeline")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-transparent text-white focus:outline-none rounded-lg"
                          >
                            <option value="" className="bg-black">Select timeline</option>
                            {timelines.map((time) => (
                              <option key={time} value={time} className="bg-black">
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
                        Project Details *
                      </label>
                      <div className={`
                        p-1 rounded-xl transition-all duration-500
                        ${focusedField === "message" 
                          ? 'bg-white/10 ring-2 ring-white/20' 
                          : 'bg-white/[0.02] ring-1 ring-white/10'
                        }
                      `}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-transparent text-white placeholder-white/30 focus:outline-none rounded-lg resize-none"
                          placeholder="Tell me about your project, vision, and what you're looking to achieve..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className="group w-full relative"
                    >
                      <div className={`
                        p-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
                        ${isSubmitting || submitStatus === "success"
                          ? 'bg-white/5 ring-1 ring-white/10'
                          : 'bg-white/[0.05] ring-2 ring-white/20 hover:bg-white/10 hover:ring-white/30 active:scale-98'
                        }
                      `}>
                        <div className={`
                          px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-500
                          ${isSubmitting || submitStatus === "success"
                            ? 'bg-white/5'
                            : 'bg-white/10 group-hover:bg-white/15'
                          }
                        `}>
                          {submitStatus === "success" ? (
                            <>
                              <span className="text-base font-medium text-white">
                                Message Sent Successfully!
                              </span>
                              <span className="text-xl">✓</span>
                            </>
                          ) : isSubmitting ? (
                            <>
                              <span className="text-base font-medium text-white">
                                Sending...
                              </span>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            </>
                          ) : (
                            <>
                              <span className="text-base font-medium text-white">
                                Send Message
                              </span>
                              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[2px]">
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

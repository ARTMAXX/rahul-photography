"use client";

import { useRef, useEffect } from "react";
import "./Contact.css";

const SOCIAL_LINKS = [
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M8.228 10.52c.652 0 1.156-.513 1.156-1.156 0-.643-.504-1.157-1.156-1.157H5.385v2.313h2.843zm.521 2.032H5.385v2.67h3.364c.77 0 1.38-.616 1.38-1.378 0-.762-.61-1.292-1.38-1.292zM15.72 9.363h3.123c-.27-1.052-1.125-1.754-2.27-1.754s-2.001.702-2.271 1.754h1.418zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-7.385-5.057H16.98v-.893h-2.365v.893zm-5.387-.04c1.66 0 2.808 1.038 2.808 2.548 0 .782-.42 1.506-1.08 1.954.933.382 1.534 1.261 1.534 2.3 0 1.644-1.288 2.855-2.993 2.855H3.9V6.903h5.328zm7.4 4.254c0-.17-.01-.337-.025-.502h-4.84c.198 1.192 1.134 1.993 2.383 1.993.844 0 1.571-.39 2.057-1.03l.93.66C17.55 13.34 16.5 14 15.323 14c-2.063 0-3.634-1.51-3.634-3.54 0-2.028 1.571-3.54 3.634-3.54 1.992 0 3.396 1.414 3.396 3.4 0 .125-.005.25-.017.374l-.069-.077z"/>
      </svg>
    ),
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.33c0-3.08-1.663-4.575-3.067-4.575-1.214 0-1.948.89-2.127 1.527h-.009V7.49h-2.56v9.038h2.56v-4.38c0-.974.69-1.678 1.664-1.678.974 0 1.477.656 1.477 1.885v4.173h2.37v-4.127c0-.024.022-.048.022-.073v-.046c0-.015 0-.03.002-.045zm-9.098-4.342H8.54V6.014H5.957v1.527H4.817v2.34h1.14v4.077c0 2.34 1.517 3.042 3.25 3.042h.748v-2.388h-.51c-.703 0-1.128-.328-1.128-1.128V9.88h3.593V7.541zm-8.583 5.812c0-1.454-1.01-2.34-2.5-2.34-.89 0-1.617.444-1.957 1.01h-.014V7.489H.5v9.037h1.31v-.796c.34.468.89.796 1.617.796 1.49 0 2.9-.944 2.9-3.173zM3.17 14.808c-.89 0-1.407-.656-1.407-1.688s.517-1.688 1.407-1.688c.89 0 1.406.656 1.406 1.688s-.516 1.688-1.406 1.688z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} id="contact" className="contact-footer" aria-label="Contact and footer">
      {/* decorative grid lines */}
      <div className="contact__lines" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="contact__line" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      {/* Central CTA card */}
      <div className="contact__card" data-reveal>
        {/* Glow ring */}
        <div className="contact__glow" aria-hidden="true" />

        <span className="contact__eyebrow">Let's collaborate</span>

        <h2 className="contact__heading">
          Let&apos;s <em>Meet</em><br />
          <span className="contact__heading-sub">& create something iconic.</span>
        </h2>

        <p className="contact__body">
          Whether it&apos;s a product launch, editorial campaign, or brand identity — bring your vision and let&apos;s build it together.
        </p>

        <div className="contact__actions">
          <a
            href="mailto:hello@studio.com"
            className="contact__cta contact__cta--primary"
            data-cursor="pointer"
          >
            Email the Studio
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__cta contact__cta--secondary"
            data-cursor="pointer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="contact__bar" data-reveal>
        <div className="contact__bar-brand">
          <span className="contact__bar-name">© 2025 Studio</span>
          <span className="contact__bar-sep" aria-hidden="true">·</span>
          <span className="contact__bar-tagline">Visual Design & Photography</span>
        </div>

        <nav className="contact__socials" aria-label="Social media links">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label={s.label}
              data-cursor="pointer"
            >
              {s.icon}
            </a>
          ))}
        </nav>

        <span className="contact__bar-credit">
          Crafted with intention
        </span>
      </div>
    </footer>
  );
}

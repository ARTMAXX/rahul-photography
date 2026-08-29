"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import styles from "./style.module.scss";
import { links } from "./data";
import { perspective, slideIn } from "./anim";

interface NavProps {
  /** "fullscreen" = dedicated mobile overlay; "panel" = desktop corner panel */
  variant?: "fullscreen" | "panel";
  onNavigate?: () => void;
}

/**
 * Mobile ("fullscreen"): large touch targets, WHATSAPP conversion CTA.
 * Desktop ("panel"): original perspective-animated corner menu.
 */
export default function Nav({ variant = "panel", onNavigate }: NavProps) {
  const pathname = usePathname();
  const lenis = useLenis();
  const listRef = useRef<HTMLElement>(null);

  // Move focus into the menu for keyboard/screen-reader users
  useEffect(() => {
    if (variant === "fullscreen") listRef.current?.focus();
  }, [variant]);

  const handleLinkClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      const isHome = pathname === "/";

      if (href === "/") {
        if (isHome) {
          e.preventDefault();
          if (lenis) lenis.scrollTo(0, { duration: 1.2 });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setTimeout(() => onNavigate?.(), 150);
        return;
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex !== -1) {
        const hash = href.slice(hashIndex + 1);

        if (isHome && hash) {
          e.preventDefault();
          const target = document.getElementById(hash);
          if (target) {
            if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
            else target.scrollIntoView({ behavior: "smooth" });
          }
          setTimeout(() => onNavigate?.(), 200);
          return;
        }
        setTimeout(() => onNavigate?.(), 150);
        return;
      }

      setTimeout(() => onNavigate?.(), 100);
    };

  /* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
  /* MOBILE  —  full-screen overlay                                  */
  /* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
  if (variant === "fullscreen") {
    // Home + the six primary destinations stay in the big list;
    // Dehradun/Blog drop to the pill row.
    const primary = links.slice(0, 7);
    const secondary = links.slice(7);

    return (
      <nav
        ref={listRef as React.RefObject<HTMLElement>}
        tabIndex={-1}
        aria-label="Mobile"
        className="fixed inset-0 z-[9995] flex flex-col bg-[#070707]/[0.98] backdrop-blur-xl outline-none pt-24 pb-8 px-6 overflow-y-auto"
      >
        <ul className="flex flex-col m-0 list-none p-0">
          {primary.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/[0.07]"
            >
              <Link
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="group flex min-h-[60px] items-center justify-between py-3 text-left"
              >
                <span className="font-serif text-3xl leading-none text-white active:text-[#e83b2c]">
                  {link.title}
                </span>
                <span className="text-xs font-sans tracking-[0.25em] text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Secondary pages */}
        <div className="mt-6 flex flex-wrap gap-2">
          {secondary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick(link.href)}
              className="min-h-[44px] flex items-center rounded-full border border-white/[0.12] px-5 text-sm text-white/55 active:text-white active:border-white/30"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Primary conversion  —  WHATSAPP */}
        <a
          href={`https://wa.me/917078939475?text=${encodeURIComponent(
            "Hi Rahul, I'd like to discuss a photography project."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(() => onNavigate?.(), 100)}
          className="mt-auto pt-10"
        >
          <span className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#e83b2c] text-base font-medium text-white active:bg-[#f0523f] transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
            </svg>
            Chat on WhatsApp
          </span>
        </a>
      </nav>
    );
  }

  /* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
  /* DESKTOP  —  original corner-panel nav                           */
  /* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.linkMotion}
              >
                <Link
                  href={href}
                  className={styles.link}
                  onClick={handleLinkClick(href)}
                >
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {[
          { title: "Instagram", href: "https://www.instagram.com/rahul_chanda_photography/" },
          { title: "Email", href: "mailto:rahulchandaphotography@gmail.com" },
          { title: "Phone", href: "tel:+917078939475" },
        ].map((link, i) => (
          <motion.a
            variants={slideIn}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            key={link.title}
            href={link.href}
            className={styles.footerLink}
            target={
              link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel")
                ? "_blank"
                : undefined
            }
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

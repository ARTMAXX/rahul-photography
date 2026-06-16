"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      
      // Animate menu open
      gsap.fromTo(
        ".menu-overlay",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "cubic-bezier(0.32, 0.72, 0, 1)" }
      );

      // Staggered link animation
      gsap.fromTo(
        ".menu-link",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
        }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Floating navigation pill */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="px-2 py-2 rounded-full bg-black/40 backdrop-blur-2xl ring-1 ring-white/10 shadow-2xl">
          <div className="flex items-center gap-1 px-4">
            {/* Logo / Home link */}
            <Link
              href="/"
              className="text-white font-serif text-lg tracking-tight hover:opacity-70 transition-opacity duration-300 py-2 px-4"
            >
              RC
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1 mx-6">
              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                    pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-500 flex items-center justify-center ml-2 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center gap-1">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-8"
          onClick={toggleMenu}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Main navigation links */}
            <nav className="mb-16">
              <ul className="space-y-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href} className="menu-link">
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`group block p-6 rounded-[2rem] ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        pathname === link.href
                          ? "ring-white/30 bg-white/10"
                          : "ring-white/10 bg-white/5 hover:ring-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-4xl md:text-6xl font-serif text-white transition-transform duration-500 group-hover:translate-x-4">
                          {link.label}
                        </span>
                        <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 text-white text-2xl transition-all duration-500 group-hover:bg-white/20 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-110">
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact info */}
            <div className="menu-link grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 border-t border-white/10">
              <a
                href="https://www.instagram.com/rahul_chanda_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Instagram</div>
                <div className="text-white text-sm">@rahul_chanda_photography</div>
              </a>
              <a
                href="mailto:rahulchandaphotography@gmail.com"
                className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Email</div>
                <div className="text-white text-sm">rahulchandaphotography@gmail.com</div>
              </a>
              <a
                href="tel:+917078939475"
                className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Phone</div>
                <div className="text-white text-sm">+91 7078939475</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

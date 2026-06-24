"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 mix-blend-difference pointer-events-none text-white">
      <div className="pointer-events-auto cursor-pointer" data-cursor="pointer">
        <Image quality={100}
          src="/logo/logo.webp"
          alt="Rahul Chanda"
          width={180}
          height={40}
          className="h-7 md:h-10 w-auto"
          priority
        />
      </div>
      <nav className="flex gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest pointer-events-auto">
        <a href="#archive" className="hover:italic transition-all duration-300" data-cursor="pointer">Work</a>
        <a href="#about" className="hover:italic transition-all duration-300" data-cursor="pointer">About</a>
        <a href="#archive" className="hover:italic transition-all duration-300" data-cursor="pointer">Archive</a>
        <a href="#contact" className="hover:italic transition-all duration-300" data-cursor="pointer">Contact</a>
      </nav>
    </header>
  );
}


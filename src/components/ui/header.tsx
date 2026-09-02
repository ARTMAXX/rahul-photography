"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Services",
      description: "Commercial photography services for brands and businesses.",
      items: [
        {
          title: "Product Photography",
          href: "/services/product-photography",
        },
        {
          title: "Food & Beverage",
          href: "/services/food-beverage-photography",
        },
        {
          title: "Fashion & Footwear",
          href: "/services/footwear-fashion-photography",
        },
        {
          title: "Commercial Campaigns",
          href: "/services/commercial-campaigns",
        },
      ],
    },
    {
      title: "Work",
      description: "Browse our latest work and creative projects.",
      items: [
        {
          title: "Gallery",
          href: "/gallery",
        },
        {
          title: "Dehradun",
          href: "/dehradun",
        },
      ],
    },
    {
      title: "More",
      description: "Read the journal, learn about us, or get in touch.",
      items: [
        {
          title: "Journal",
          href: "/blog",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Privacy Policy",
          href: "/privacy",
        },
        {
          title: "Terms of Use",
          href: "/terms",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isCylinderVisible, setIsCylinderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("design-in-motion");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Section is in view if its top is above the middle of viewport
      // and its bottom is below the top of viewport
      const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;
      setIsCylinderVisible(inView);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full z-40 fixed top-0 left-0 bg-transparent transition-transform duration-300 ${isCylinderVisible ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-2 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href={item.href}>
                        <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10">
                          {item.title}
                        </Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm text-white/90 hover:text-white hover:bg-white/10 bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[600px] p-5 bg-black/95 backdrop-blur-md border border-white/10">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-6">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base text-white font-medium">{item.title}</p>
                              <p className="text-white/60 text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                            <a
                              href="https://wa.me/917078939475"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="sm" className="mt-6 bg-[#25D366] hover:bg-[#1da851] text-white">
                                Let&apos;s Talk
                              </Button>
                            </a>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-white/10 py-2.5 px-4 rounded text-white/80 hover:text-white transition-colors"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-white/40" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <div className="flex lg:justify-center">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo/whitelogo.png"
              alt="Rahul Chanda Photography"
              width={110}
              height={44}
              priority
              className="block w-[100px] md:w-[130px] h-auto"
            />
          </Link>
        </div>

        {/* Right side - CTA */}
        <div className="flex justify-end w-full gap-3 items-center">
          <a
            href="https://wa.me/917078939475"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2"
          >
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 hidden md:inline">
              Book a call
            </Button>
          </a>
          <div className="border-r border-white/20 h-5 hidden md:block"></div>
          <a
            href="https://wa.me/917078939475"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1da851] transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 border-t border-white/10 bg-black/95 backdrop-blur-md shadow-lg py-6 container gap-6 flex flex-col">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center text-white/90 hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-white/40" />
                      </Link>
                    ) : (
                      <p className="text-lg text-white/50">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center text-white/60 hover:text-white/90 py-2"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-base">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header1 };

'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false} className="z-[3]">
      <NavigationMenuList className="gap-1">

        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/60 hover:text-white data-[state=open]:text-white bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 h-8 px-3 text-[13px] font-medium rounded-full">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] border border-white/8 rounded-2xl shadow-2xl">
            <ul className="grid gap-1 w-[200px] p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Welcome
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/#design-in-motion" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Our Craft
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/#testimonials" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* WORK */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/60 hover:text-white data-[state=open]:text-white bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 h-8 px-3 text-[13px] font-medium rounded-full">
            Work
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] border border-white/8 rounded-2xl shadow-2xl">
            <ul className="grid gap-1 w-[220px] p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/work" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Featured Work
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/work#wedding" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Wedding
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/work#commercial" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Commercial
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/work#lifestyle" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Lifestyle
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/work#editorial" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Editorial
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SERVICES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/60 hover:text-white data-[state=open]:text-white bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 h-8 px-3 text-[13px] font-medium rounded-full">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] border border-white/8 rounded-2xl shadow-2xl">
            <ul className="grid gap-1 w-[220px] p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/services" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    All Services
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/services/product-photography" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Product Photography
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/services/food-beverage-photography" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Food & Beverage
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/services/footwear-fashion-photography" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Fashion
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/services/commercial-campaigns" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Commercial Campaigns
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* MORE */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/60 hover:text-white data-[state=open]:text-white bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 h-8 px-3 text-[13px] font-medium rounded-full">
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#111] border border-white/8 rounded-2xl shadow-2xl">
            <ul className="grid gap-1 w-[200px] p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    About Rahul
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/gallery" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/faq" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="block select-none rounded-lg px-3 py-2 text-sm text-white/70 no-underline hover:bg-white/5 hover:text-white transition-colors">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

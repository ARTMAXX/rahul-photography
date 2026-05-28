import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Partners from "@/components/sections/Partners";
import CreativeServices from "@/components/sections/CreativeServices";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <FeaturedWorks />
      <Partners />
      <CreativeServices />
      <Gallery />
      <Contact />
    </main>
  );
}

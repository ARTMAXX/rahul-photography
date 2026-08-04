import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DesignInMotion from "@/components/sections/DesignInMotion";
import ServicesShowcase from "@/components/sections/redesign/ServicesShowcase";
import TheCraft from "@/components/sections/redesign/TheCraft";
import Testimonials from "@/components/sections/redesign/Testimonials";
import CinematicCTA from "@/components/sections/redesign/CinematicCTA";
import ContactForm from "@/components/sections/redesign/ContactForm";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <DesignInMotion />
      <ServicesShowcase />
      <TheCraft />
      <Testimonials />
      <CinematicCTA />
      <ContactForm />
      <CinematicFooter />
    </main>
  );
}

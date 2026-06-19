import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import RedesignedGallery from "@/components/sections/RedesignedGallery";
import ServicesShowcase from "@/components/sections/redesign/ServicesShowcase";
import TestimonialsCarousel from "@/components/sections/redesign/TestimonialsCarousel";
import ContactForm from "@/components/sections/redesign/ContactForm";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <RedesignedGallery />
      <ServicesShowcase />
      <TestimonialsCarousel />
      <ContactForm />

      {/* Footer */}
      <footer className="relative w-full bg-[#050505] border-t border-white/10 py-12 px-4 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <span>© 2026 Rahul Chanda Photography</span>
              <span className="hidden md:inline">•</span>
              <span>Commercial Product Photographer</span>
              <span className="hidden md:inline">•</span>
              <span>Based in Dehradun, India</span>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/rahul_chanda_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="mailto:rahulchandaphotography@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Email
              </a>
              <a
                href="tel:+917078939475"
                className="hover:text-white transition-colors duration-300"
              >
                Phone
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

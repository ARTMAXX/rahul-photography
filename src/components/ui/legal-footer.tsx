import Link from "next/link";

const WHATSAPP_NUMBER = "917078939475";
const EMAIL = "rahulchandaphotography@gmail.com";

export function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-12 md:py-16">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="h-eyebrow mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/services/product-photography" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Product Photography</Link></li>
              <li><Link href="/services/food-beverage-photography" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Food & Beverage</Link></li>
              <li><Link href="/services/footwear-fashion-photography" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Fashion & Footwear</Link></li>
              <li><Link href="/services/commercial-campaigns" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Commercial Campaigns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="h-eyebrow mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/gallery" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="h-eyebrow mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/faq" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">FAQ</Link></li>
              <li><a href={`mailto:${EMAIL}`} className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Email Us</a></li>
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/rahul_chanda_photography/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="h-eyebrow mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/terms" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-xs md:text-sm text-white/50 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] md:text-xs text-white/30 font-medium tracking-wide">
            \u00A9 {new Date().getFullYear()} Rahul Chanda Photography. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[10px] md:text-xs text-white/30 hover:text-white/60 transition-colors font-medium tracking-wide">
              Home
            </Link>
            <Link href="/gallery" className="text-[10px] md:text-xs text-white/30 hover:text-white/60 transition-colors font-medium tracking-wide">
              Portfolio
            </Link>
            <Link href="/contact" className="text-[10px] md:text-xs text-white/30 hover:text-white/60 transition-colors font-medium tracking-wide">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

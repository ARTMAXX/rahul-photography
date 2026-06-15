"use client";

const PARTNERS = [
  { name: "Behance", slug: "behance" },
  { name: "Fiverr", slug: "fiverr" },
  { name: "Casio", slug: "casio" },
  { name: "Adidas", slug: "adidas" },
  { name: "HBO", slug: "hbo" },
  { name: "GQ", slug: "gq" },
  { name: "ASOS", slug: "asos" },
  { name: "A24", slug: "a24" },
];

export default function Partners() {
  return (
    <section className="bg-[#050505] text-[#f4efe7] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-[#f4efe7]/30 block mb-12 text-center md:text-left">
          Selected Collaborators
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center">
          {PARTNERS.map((brand) => (
            <div
              key={brand.name}
              className="relative flex items-center justify-center opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <img
                src={`https://cdn.simpleicons.org/${brand.slug}`}
                alt={brand.name}
                className="h-auto w-auto max-h-16 max-w-[160px] object-contain transition-all duration-300 invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

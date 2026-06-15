"use client";

export default function StudioServices() {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
        {["Studio", "Services", "About us"].map((item) => (
            <div key={item} className="group cursor-pointer">
                <img src="/best shots/Food photo/food-curry.webp" className="w-full h-auto object-contain" />
                <h3 className="text-3xl font-sans mt-6">{item}</h3>
            </div>
        ))}
      </div>
    </section>
  );
}

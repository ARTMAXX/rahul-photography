"use client";

export default function FooterContact() {
  return (
    <section className="bg-yellow-300 text-black pt-32">
        <div className="px-6 md:px-12 text-[15vw] font-sans font-black tracking-tighter leading-none mb-24">
            RAHUL<br/>CHANDA
        </div>
        <div className="grid md:grid-cols-4 gap-8 px-6 md:px-12 pb-24">
            <div className="space-y-4 text-xs font-sans">
                <p>DEHRADUN</p>
                <p>UTTARAKHAND</p>
                <p>INDIA</p>
            </div>
            <div className="md:col-span-2">
                <h2 className="text-5xl font-sans mb-8">Contact</h2>
                <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-black py-4 outline-none" />
            </div>
        </div>
    </section>
  );
}

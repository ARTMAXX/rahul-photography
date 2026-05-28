"use client";

import { motion } from "framer-motion";

const STATS = [
    { label: "REVENUE MANAGED", value: "€12M+" },
    { label: "ASSETS PRODUCED", value: "10K+" },
    { label: "CAMPAIGNS", value: "100+" },
    { label: "CLIENTS", value: "14+" },
];

export default function AgencyStats() {
    return (
        <section className="bg-black text-white py-32">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {STATS.map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-5xl md:text-7xl font-serif tracking-tighter mb-4">
                                {stat.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

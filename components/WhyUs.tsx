// components/WhyUs.tsx
"use client";
import { motion } from "framer-motion";

const reasons = [
  { title: "Fair Play Certified", desc: "RNG algorithms audited by global standards.", icon: "⚖️" },
  { title: "Instant Payouts", desc: "Crypto & Fiat withdrawals processed in minutes.", icon: "⚡" },
  { title: "Elite Community", desc: "Network with the best minds in the game.", icon: "🤝" },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-[#020202] relative">
      <div className="absolute inset-0 bg-vibrant-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center">
        {/* REQ 5: TITLE UPDATE */}
        <h2 className="text-amber-500 tracking-[0.5em] uppercase text-sm font-bold mb-4">The Advantage</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Why Choose <br/> <span className="text-amber-500">Golden Dynasty?</span></h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md overflow-hidden"
            >
              {/* Vibrant Border on Hover */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-amber-500/50 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
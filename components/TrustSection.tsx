"use client";

import React from "react";
import { motion } from "framer-motion";

const protocols = [
  {
    id: "01",
    title: "Fair Play Certified",
    tag: "INTEGRITY",
    desc: "Every deck is ISO-shuffled and RFID-tracked. Our 24/7 surveillance floor is monitored by third-party integrity officers to ensure zero collusion.",
    stats: "100% Transparency"
  },
  {
    id: "02",
    title: "Skill Gaming Only",
    tag: "LEGAL",
    desc: "Operating strictly under Indian Mind Sport mandates. Golden Dynasty is a verified venue for skill-based gaming, distinct from chance-based gambling.",
    stats: "100% Legal Govt Compliant"
  },
  {
    id: "03",
    title: "Responsible Play",
    tag: "SECURITY",
    desc: "Strict 18+ biometric verification. We maintain an elite ecosystem with a zero-tolerance policy for unethical behavior or collusion.",
    stats: "Verified Only"
  }
];

export default function Section6() {
  return (
    <section className="relative py-12 bg-black overflow-hidden border-t border-[#BF953F]/20">
      
      {/* 1. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#BF953F] text-[10px] font-black uppercase tracking-[0.8em] mb-4"
          >
            Institutional Standard
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">
            The <span className="italic text-[#BF953F]">Golden Dynasty</span> Protocols.
          </h2>
        </div>

        {/* THE PROTOCOL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          {protocols.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-12 bg-[#050505] border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 hover:bg-[#080808] transition-all duration-500"
            >
              {/* Corner Accent (Hover) */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#BF953F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* ID & Pulse Indicator */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-mono text-[#BF953F]/40 text-xs tracking-widest">{item.id} </span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{item.stats}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
              </div>

              {/* Tag & Title */}
              <div className="mb-6">
                <span className="bg-[#BF953F]/10 text-[#BF953F] text-[9px] font-black px-3 py-1 rounded-sm tracking-[0.3em] mb-4 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-serif text-white group-hover:text-[#BF953F] transition-colors duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                {item.desc}
              </p>

              {/* Hover Line Animation */}
              <div className="mt-10 w-full h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                   initial={{ x: "-100%" }}
                   whileHover={{ x: "0%" }}
                   className="absolute inset-0 bg-[#BF953F]/40 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
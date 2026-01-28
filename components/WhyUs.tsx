"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Provably Fair Tech",
    description: "Our proprietary RNG is audited by leading global firms, ensuring every shuffle is truly random and cryptographically secure.",
    icon: "🛡️",
    size: "md:col-span-2",
  },
  {
    title: "Instant Liquidity",
    description: "Withdraw your winnings in seconds via crypto or fiat with 0% processing fees.",
    icon: "⚡",
    size: "md:col-span-1",
  },
  {
    title: "Elite Society",
    description: "Access to private high-stakes rooms and invite-only live events in the world's most luxurious destinations.",
    icon: "💎",
    size: "md:col-span-1",
  },
  {
    title: "Pro-Grade Analytics",
    description: "Advanced HUDs and hand-tracking tools built directly into the platform to help you refine your edge.",
    icon: "📈",
    size: "md:col-span-2",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden">
      {/* Decorative Gold Light */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 tracking-[0.5em] uppercase text-xs md:text-sm font-bold mb-4"
          >
            The Dynasty Advantage
          </motion.h2 >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Why Professional Players <br /> Choose Us
          </motion.h3 >
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm overflow-hidden ${feature.size}`}
            >
              {/* Gold Hover Glow */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500" />
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-6 bg-amber-500/10 w-14 h-14 flex items-center justify-center rounded-2xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-serif text-amber-100 mb-4 tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="mt-8 flex justify-end">
                  <div className="w-8 h-[1px] bg-amber-500/30 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
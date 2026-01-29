// components/MembershipPerks.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Silver Dynasty",
    sub: "The Initiate",
    hours: "Entry Level",
    features: ["Access to Main Floor", "Complimentary F&B", "WhatsApp Support", "Weekly Tournament Invite"],
    gradient: "from-gray-400 to-gray-600",
    border: "border-gray-500",
    text: "text-gray-300"
  },
  {
    name: "VIP Dynasty",
    sub: "The Grinder",
    hours: "50+ Hours / Month",
    features: ["Priority Seat Reservation", "Zero Wait Time", "Access to Massage Spa", "2x GD Points"],
    gradient: "from-[#BF953F] to-[#AA771C]", // The Gold Gradient
    border: "border-[#BF953F]",
    text: "text-[#FBF5B7]",
    popular: true
  },
  {
    name: "Elite Dynasty",
    sub: "The Inner Circle",
    hours: "Director's Invite Only",
    features: ["Full 5-Star Hotel Stay", "Private VIP Lounge Access", "Chauffeur Service", "Dedicated Account Manager"],
    gradient: "from-black via-[#1a1a1a] to-black", // Obsidian/Black Card look
    border: "border-white/20",
    text: "text-white",
    glow: true
  }
];

export default function MembershipPerks() {
  return (
    <section id="vip" className="py-14 px-6 bg-[#080808] relative overflow-hidden">
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#BF953F]/5 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-gold-metallic text-xs font-bold uppercase tracking-[0.5em] mb-4">Loyalty Pays</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Ascend the <span className="text-gold-metallic">Hierarchy.</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Earn <strong>Golden Dynasty Points</strong> for every hour you play. 
            Redeem points for tournament buy-ins, luxury merchandise, or instant cash-out.
          </p>
        </div>

        {/* TIERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-8 rounded-2xl border ${tier.border} bg-gradient-to-b from-white/5 to-transparent hover:-translate-y-2 transition-transform duration-500 group`}
            >
              {/* "Most Popular" Badge for Gold */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-metallic text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_20px_rgba(191,149,63,0.5)]">
                  Most Popular
                </div>
              )}

              {/* Elite Glow Effect */}
              {tier.glow && (
                <div className="absolute inset-0 bg-white/5 blur-xl -z-10 animate-pulse" />
              )}

              {/* Card Header */}
              <div className="mb-8 text-center">
                <h4 className={`text-2xl font-serif font-black ${tier.text} mb-1`}>{tier.name}</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">{tier.sub}</p>
              </div>

              {/* Requirement Line */}
              <div className="py-4 border-y border-white/10 text-center mb-8">
                <p className="text-white font-bold text-sm">{tier.hours}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tier.gradient}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 border ${tier.border} ${tier.text} text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors`}>
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* CHECK POINTS STRIP (Tech Integration) */}
        <div className="mt-20 p-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/40 to-transparent rounded-3xl md:rounded-full">
  <div className="bg-black/90 backdrop-blur-md rounded-[23px] md:rounded-full px-6 py-6 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
    
    {/* LEFT SIDE: Identity */}
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
      <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#BF953F]/20 to-transparent flex items-center justify-center border border-[#BF953F]/30 shadow-[0_0_20px_rgba(191,149,63,0.1)]">
        {/* Replacement for 👑 emoji for a more premium look */}
        <svg className="w-6 h-6 text-[#FBF5B7]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
        </svg>
      </div>
      <div>
        <p className="text-white font-serif text-lg md:text-xl tracking-tight">Already a Member?</p>
        <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-widest mt-1">Track progress & redeem rewards</p>
      </div>
    </div>
    
    {/* RIGHT SIDE: Input Group */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
      <div className="relative w-full sm:w-64 md:w-48">
        <input 
          type="text" 
          placeholder="ENTER PLAYER ID" 
          className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 md:py-2 text-white text-xs tracking-widest focus:border-[#BF953F]/60 focus:outline-none w-full placeholder:text-gray-600 transition-all"
        />
      </div>
      <button className="w-full sm:w-auto whitespace-nowrap px-8 py-3 md:py-2 bg-[#BF953F] text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#FBF5B7] transition-all active:scale-95 shadow-lg shadow-[#BF953F]/10">
        Check Points
      </button>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}
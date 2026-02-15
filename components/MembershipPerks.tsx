"use client";

import React from "react";
import { motion } from "framer-motion";

interface Tier {
  name: string;
  sub: string;
  hours: string;
  features: string[];
  gradient: string;
  border: string;
  text: string;
  popular?: boolean;
  glow?: boolean;
}

const TIERS: Tier[] = [
  {
    name: "Silver Dynasty",
    sub: "The Initiate",
    hours: "Entry Level",
    features: ["Access to Main Floor", "Complimentary F&B", "WhatsApp Support", "Weekly Tournament Invite"],
    gradient: "from-gray-400 to-gray-600",
    border: "border-gray-500",
    text: "text-gray-300",
  },
  {
    name: "VIP Dynasty",
    sub: "The Grinder",
    hours: "50+ Hours / Month",
    features: ["Priority Seat Reservation", "Zero Wait Time", "Access to Massage Spa", "2x GD Points"],
    gradient: "from-[#BF953F] to-[#AA771C]",
    border: "border-[#BF953F]",
    text: "text-[#FBF5B7]",
    popular: true,
  },
  {
    name: "Elite Dynasty",
    sub: "The Inner Circle",
    hours: "Director's Invite Only",
    features: ["Full 5-Star Hotel Stay", "Private VIP Lounge Access", "Chauffeur Service", "Dedicated Account Manager"],
    gradient: "from-black via-[#1a1a1a] to-black",
    border: "border-white/20",
    text: "text-white",
    glow: true,
  },
];

export default function MembershipPerks() {
  return (
    <section id="vip" className="py-16 md:py-24 px-4 md:px-6 bg-[#080808] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#BF953F]/5 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Header />
        <TierGrid tiers={TIERS} />
        {/* <CheckPointsStrip /> */}
      </div>
    </section>
  );
}

/* ---------------- HEADER ---------------- */
const Header = () => (
  <div className="text-center mb-12 md:mb-20">
    <h2 className="text-[#BF953F] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4">
      Loyalty Pays
    </h2>
    <h3 className="text-3xl md:text-6xl font-serif text-white mb-6">
      Ascend the <span className="text-[#BF953F]">Hierarchy.</span>
    </h3>
    <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed px-4 md:px-0">
      Earn <strong>Golden Dynasty Points</strong> for every hour you play. Redeem points for tournament buy-ins, luxury merchandise, or instant cash-out.
    </p>
  </div>
);

/* ---------------- TIERS GRID ---------------- */
const TierGrid = ({ tiers }: { tiers: Tier[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
    {tiers.map((tier, i) => (
      <TierCard key={i} tier={tier} delay={i * 0.2} />
    ))}
  </div>
);

/* ---------------- SINGLE TIER CARD ---------------- */
const TierCard = ({ tier, delay }: { tier: Tier; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`relative p-6 md:p-8 rounded-2xl border ${tier.border} bg-black/40 backdrop-blur-sm hover:border-[#BF953F]/50 md:hover:-translate-y-2 transition-all duration-500 group`}
  >
    {tier.popular && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#BF953F] text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(191,149,63,0.4)] z-20">
        Most Popular
      </div>
    )}

    {tier.glow && <div className="absolute inset-0 bg-white/5 blur-xl -z-10 animate-pulse" />}

    {/* Tier Title */}
    <div className="mb-6 md:mb-8 text-center">
      <h4 className={`text-xl md:text-2xl font-serif font-black ${tier.text} mb-1`}>{tier.name}</h4>
      <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">{tier.sub}</p>
    </div>

    {/* Hours */}
    <div className="py-4 border-y border-white/10 text-center mb-6 md:mb-8">
      <p className="text-white font-bold text-xs md:text-sm tracking-wide">{tier.hours}</p>
    </div>

    {/* Features */}
    <ul className="space-y-3 md:space-y-4 mb-8">
      {tier.features.map((feat, idx) => (
        <li key={idx} className="flex items-start gap-3 text-[11px] md:text-sm text-gray-400">
          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${tier.gradient}`} />
          <span className="leading-tight">{feat}</span>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <button className={`w-full py-3 md:py-4 border ${tier.border} ${tier.text} text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors active:scale-[0.98]`}>
      View Details
    </button>
  </motion.div>
);

/* ---------------- CHECK POINTS STRIP ---------------- */
// const CheckPointsStrip = () => (
//   <div className="mt-16 md:mt-24 p-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/40 to-transparent rounded-2xl md:rounded-full">
//     <div className="bg-black/90 backdrop-blur-md rounded-[15px] md:rounded-full px-6 py-8 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      
//       {/* Info */}
//       <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
//         <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#BF953F]/20 to-transparent flex items-center justify-center border border-[#BF953F]/30 shadow-[0_0_20px_rgba(191,149,63,0.1)]">
//           <svg className="w-6 h-6 text-[#FBF5B7]" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
//           </svg>
//         </div>
//         <div>
//           <p className="text-white font-serif text-lg md:text-xl tracking-tight">Already a Member?</p>
//           <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">Track progress & redeem rewards</p>
//         </div>
//       </div>
      
//       {/* Input + Button */}
//       <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
//         <div className="relative w-full sm:w-64 md:w-48">
//           <input 
//             type="text" 
//             placeholder="ENTER PLAYER ID" 
//             className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 md:py-2 text-white text-base md:text-xs tracking-[0.2em] focus:border-[#BF953F]/60 focus:outline-none w-full placeholder:text-gray-600 transition-all"
//           />
//         </div>
//         <button className="w-full sm:w-auto whitespace-nowrap px-8 py-4 md:py-2 bg-[#BF953F] text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#FBF5B7] transition-all active:scale-95 shadow-lg shadow-[#BF953F]/10">
//           Check Points
//         </button>
//       </div>

//     </div>
//   </div>
// );
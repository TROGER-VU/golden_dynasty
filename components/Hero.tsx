"use client";

import React from "react";
import { motion } from "framer-motion";

const CARD_SUITS = ["♠", "♥", "♣", "♦"];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <BackgroundVideo />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* <LiveStatus /> */}
        <Headline />
        <SuitRow />
        <CTASection />
      </div>

      <ScrollIndicator />
    </section>
  );
}

const BackgroundVideo = () => (
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-60"
    >
      <source src="/heroBG.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    <div className="absolute inset-0 bg-black/20" />
  </div>
);

// const LiveStatus = () => (
//   <motion.div
//     initial={{ opacity: 0, y: -20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.5 }}
//     className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-[#BF953F]/30 backdrop-blur-md mb-8"
//   >
//     <span className="relative flex h-2 w-2">
//       <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
//       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
//     </span>

//     <span className="text-[#FBF5B7] text-[10px] uppercase tracking-[0.4em] font-bold">
//       Live: 18:00 — 06:00
//     </span>
//   </motion.div>
// );

const Headline = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h1 className="text-white text-5xl md:text-8xl font-serif font-black leading-[1.1] tracking-tighter mb-6">
      Kanpur&apos;s Most <br />
      <span className="text-gold-metallic">Exclusive</span> Poker.
    </h1>
  </motion.div>
);

const SuitRow = () => (
  <div className="flex items-center justify-center gap-8 md:gap-2 mb-7">
    {CARD_SUITS.map((suit, index) => (
      <motion.span
        key={suit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + index * 0.1 }}
        whileHover={{ scale: 1.2, y: -5 }}
        className="text-4xl md:text-5xl font-black cursor-default select-none transition-all duration-300
                   bg-gradient-to-tr from-[#BF953F] via-[#FBF5B7] to-[#AA771C]
                   bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        style={{
          filter: "drop-shadow(0 0 8px rgba(191,149,63,0.3))",
        }}
      >
        {suit}
      </motion.span>
    ))}
  </div>
);

const CTASection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="flex flex-col md:flex-row items-center justify-center gap-6"
  >
    <button className="group relative px-12 py-5 bg-gold-metallic text-black font-bold uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(191,149,63,0.4)]">
      Join the Club
    </button>

    {/* <button className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-white/10 backdrop-blur-sm">
      Become a Member
    </button> */}
  </motion.div>
);

const ScrollIndicator = () => (
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
  >
    <span className="text-[10px] text-white uppercase tracking-[0.3em]">
      The Arena
    </span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-[#BF953F] to-transparent" />
  </motion.div>
);
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/* =========================
   Card Data
========================= */
const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["A", "K", "Q", "J", "10", "9"];

const getRandomCard = () => ({
  rank: RANKS[Math.floor(Math.random() * RANKS.length)],
  suit: SUITS[Math.floor(Math.random() * SUITS.length)],
});

/* =========================
   Card Component
========================= */
const Card = ({ index }: { index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardFace, setCardFace] = useState(getRandomCard);

  const handleEnter = () => setIsFlipped(true);
  const handleLeave = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardFace(getRandomCard());
    }, 300);
  };

  const isRed = cardFace.suit === "♥" || cardFace.suit === "♦";

  return (
    <div
      className="relative w-40 h-64 md:w-84 md:h-124 perspective-1000 cursor-pointer pointer-events-auto"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <motion.div
        initial={{ y: 60, opacity: 0, rotate: index % 2 === 0 ? 2 : -2 }}
        animate={{
          y: 0,
          opacity: 0.6, // Lower opacity so it feels like a background
          rotateY: isFlipped ? 180 : 0,
        }}
        whileHover={{ opacity: 1, scale: 1.05, z: 50 }}
        transition={{
          delay: index * 0.1,
          rotateY: { duration: 0.6, type: "spring", stiffness: 180, damping: 22 },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* FRONT — Card Back */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-amber-600/30 shadow-2xl flex items-center justify-center backface-hidden"
          style={{
            background: "linear-gradient(145deg, #111 0%, #000 100%)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-3 border border-amber-500/10 rounded-xl" />
          <div className="flex flex-col items-center gap-3">
            <div className="text-amber-500 text-4xl drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]">♛</div>
          </div>
        </div>

        {/* BACK — Card Face */}
        <div
          className="absolute inset-0 rounded-2xl bg-slate-50 p-5 flex flex-col justify-between border-2 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.15)] backface-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className={`text-2xl font-serif font-bold ${isRed ? "text-red-600" : "text-gray-900"}`}>
            {cardFace.rank}
            <div>{cardFace.suit}</div>
          </div>
          <div className={`text-6xl self-center ${isRed ? "text-red-600" : "text-gray-900"}`}>{cardFace.suit}</div>
          <div className={`text-2xl font-serif font-bold rotate-180 ${isRed ? "text-red-600" : "text-gray-900"}`}>
            {cardFace.rank}
            <div>{cardFace.suit}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* =========================
   HERO SECTION
========================= */
export default function GoldenDynastyHero() {
  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6">
      
      {/* 1. BACKGROUND CARDS LAYER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center gap-4 md:gap-8 pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <Card key={i} index={i} />
        ))}
      </div>

      {/* 2. AMBIENT LIGHTING (Between Cards and Text) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] bg-amber-600/5 blur-[160px] rounded-full" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-amber-900/10 blur-[160px] rounded-full" />
      </div>

      {/* 3. TOP TYPOGRAPHY LAYER */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-20 text-center max-w-4xl"
      >
        <h2 className="text-amber-500/70 tracking-[0.8em] uppercase text-xs md:text-sm mb-6 font-semibold">
          Est. 2026 • The Elite Circle
        </h2>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-600 leading-none mb-8 drop-shadow-2xl">
          GOLDEN <br /> DYNASTY
        </h1>

        <p className="max-w-md mx-auto text-amber-100/70 text-lg md:text-xl font-light leading-relaxed tracking-wide mb-12">
          High stakes. Higher standards.
          <br />
          The most exclusive poker society on the web.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="group relative px-16 py-5 overflow-hidden rounded-sm transition-all">
            <span className="absolute inset-0 border border-amber-500/50"></span>
            <span className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative text-amber-500 group-hover:text-black font-bold uppercase tracking-[0.3em] text-sm">
              Enter The Lobby
            </span>
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] text-white/20 uppercase whitespace-nowrap">
        © Royal Flush Gaming Ltd
      </div> */}
    </section>
  );
}
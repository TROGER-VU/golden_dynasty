"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Chip = ({ color, suit, rotation, delay, zIndex }: { color: string, suit: string, rotation: number, delay: number, zIndex: number }) => {
  const styles: { [key: string]: string } = {
    red: "bg-gradient-to-br from-red-600 to-red-900 border-red-400",
    blue: "bg-gradient-to-br from-blue-600 to-blue-900 border-blue-400",
    black: "bg-gradient-to-br from-neutral-800 to-black border-amber-600",
  };

  const accentColor = color === "black" ? "border-amber-500/50" : "border-white/40";
  const textColor = color === "black" ? "text-amber-500" : "text-white";

  return (
    <motion.div
      initial={{ y: -500, opacity: 0, rotate: rotation }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        rotate: rotation,
        transition: { type: "spring", stiffness: 120, damping: 12, delay: delay }
      }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.5, delay: delay * 0.5 } }}
      style={{ zIndex }}
      // RESPONSIVE SIZING: w-28 on mobile, w-40 on desktop
      className={`absolute w-28 h-28 md:w-40 md:h-40 rounded-full border-[3px] md:border-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center ${styles[color]}`}
    >
      <div className={`absolute inset-0 rounded-full border-[4px] md:border-[6px] border-dashed ${accentColor}`} />

      <div className="absolute inset-2 md:inset-3 rounded-full bg-black/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
        <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-white/10 to-black/60 border ${accentColor} flex items-center justify-center`}>
            <span className={`text-3xl md:text-5xl font-serif ${textColor} drop-shadow-lg`}>
              {suit}
            </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
};

const PreLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 md:from-amber-900/20 via-black to-black" />

      {/* CHIP STACK CONTAINER: Adjusted heights for mobile */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-12 md:mb-16 flex items-center justify-center">
        
        {/* Bottom Chip (Red) - Tighter translate for mobile */}
        <div className="absolute -translate-x-6 md:-translate-x-10 translate-y-2 md:translate-y-3">
           <Chip color="red" suit="♥" rotation={-15} delay={0.1} zIndex={10} />
        </div>

        {/* Middle Chip (Blue) - Tighter translate for mobile */}
        <div className="absolute translate-x-6 md:translate-x-10 translate-y-2 md:translate-y-3">
           <Chip color="blue" suit="♦" rotation={15} delay={0.3} zIndex={20} />
        </div>

        {/* Top Chip (Black/Gold) */}
        <div className="absolute -translate-y-3 md:-translate-y-4">
          <motion.div
             animate={{ 
               y: [0, -8, 0],
               rotateY: [0, 360]
             }}
             transition={{ 
               y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
               rotateY: { duration: 4, repeat: Infinity, ease: "linear", delay: 1 }
             }}
          >
            <Chip color="black" suit="♠" rotation={0} delay={0.5} zIndex={30} />
          </motion.div>
        </div>
      </div>

      {/* LOADING TEXT & BAR */}
      <div className="relative z-10 text-center mt-8 md:mt-12 w-full max-w-[280px] md:max-w-xs">
        <div className="flex items-end justify-center gap-1 mb-3">
          <span className="text-5xl md:text-6xl font-serif font-black text-white tabular-nums tracking-tighter">
            {progress}
          </span>
          <span className="text-xl md:text-2xl font-serif text-[#BF953F] font-bold mb-2">%</span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-red-600 via-[#BF953F] to-blue-600"
          />
        </div>
        
        <p className="mt-4 text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] animate-pulse">
          Placing your bets...
        </p>
      </div>
    </motion.div>
  );
};

export default PreLoader;
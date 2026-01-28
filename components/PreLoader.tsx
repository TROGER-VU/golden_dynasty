"use client";

import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        {/* The Pulsing Crown Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1], 
            opacity: 1,
            rotateY: [0, 180, 360] 
          }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatDelay: 0.5 
          }}
          className="text-amber-500 text-7xl mb-8 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]"
        >
          ♛
        </motion.div>

        {/* Shimmering Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative text-center"
        >
          <h2 className="text-amber-100 font-serif font-bold tracking-[0.4em] uppercase text-xl">
            Golden Dynasty
          </h2>
          
          {/* Progress Bar */}
          <div className="mt-4 w-48 h-[1px] bg-white/10 relative overflow-hidden mx-auto">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Suit Icons in corners */}
      <div className="absolute inset-10 flex flex-col justify-between pointer-events-none opacity-10">
        <div className="flex justify-between w-full text-2xl text-amber-500">
          <span>♠</span>
          <span>♥</span>
        </div>
        <div className="flex justify-between w-full text-2xl text-amber-500">
          <span>♣</span>
          <span>♦</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
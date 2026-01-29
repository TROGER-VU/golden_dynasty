// components/GoldenDynastyHero.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function GoldenDynastyHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const localMouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = localMouseY / height - 0.5;
    x.set(xPct);
    mouseY.set(yPct);
  }

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-1000 bg-[#020202]"
    >
      {/* Vibrant Background Spotlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-600/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-900/20 blur-[150px] rounded-full" />

      {/* CENTER CONTENT */}
      <motion.div style={{ y }} className="relative z-20 text-center flex flex-col items-center">
        
        {/* REQ 3: COIN LOGO IN CENTER */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-[0_0_35px_rgba(245,158,11,0.4)]"
        >
          <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite]">
             <Image src="/logo.png" alt="Golden Coin" fill className="object-contain" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-transparent bg-clip-text text-gold-metallic drop-shadow-sm"
        >
          GOLDEN DYNASTY
        </motion.h1>

        {/* REQ 4: UPDATED TAGLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-amber-100/80 text-sm md:text-lg tracking-[0.3em] uppercase font-medium"
        >
          Beginner Stakes <span className="#BF953F">•</span> High Standards
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold tracking-[0.2em] uppercase rounded-sm shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all"
        >
          Enter The Lobby
        </motion.button>
      </motion.div>

      {/* REQ 9: ENGAGING CARDS (Floating 3D Background) */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        {/* Left Card */}
        <motion.div 
          initial={{ x: -200, opacity: 0, rotate: -15 }}
          animate={{ x: -350, opacity: 0.6, rotate: -15 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute w-64 h-96 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
        />
        {/* Right Card */}
        <motion.div 
          initial={{ x: 200, opacity: 0, rotate: 15 }}
          animate={{ x: 350, opacity: 0.6, rotate: 15 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute w-64 h-96 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
        />
      </motion.div>
    </section>
  );
}
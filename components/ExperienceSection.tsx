// components/ExperienceSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0a0000]">
      
      {/* 1. THE SOLID CURTAIN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* The Deep Red Base with Vertical Shadows */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, 
                #050000 0%, 
                #1a0000 10%, 
                #0a0000 20%, 
                #2a0000 30%, 
                #0a0000 40%, 
                #1a0000 50%, 
                #050000 60%, 
                #2a0000 70%, 
                #0a0000 80%, 
                #1a0000 90%, 
                #050000 100%
              )
            `,
            backgroundSize: '200px 100%'
          }}
        />
        
        {/* The "Velvet" Texture Overlay */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply opacity-60" />
        
        {/* Top Vignette (Shadow) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        
        {/* Floor Reflection (Vibrant Glow at the bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#BF953F]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT: BOLD TYPOGRAPHY */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold-metallic" />
            <span className="text-gold-metallic text-xs font-bold uppercase tracking-[0.5em]">The Arena</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-black leading-[1.05] text-white">
            Every corner <br />
            <span className="italic">designed</span> for <br />
            <span className="text-gold-metallic">The Game.</span>
          </h2>

          <div className="space-y-6 max-w-lg">
            <p className="text-white/90 text-lg leading-relaxed font-light">
              Step into the nation’s most exclusive PLO-5 environment. Under the vision of <span className="font-bold text-gold-metallic">Akash Swarnkar</span>, we’ve stripped away the noise to leave only the cards, the players, and the high-stakes thrill.
            </p>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-gold-metallic/50 to-transparent" />
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-5xl font-black text-white italic">5</p>
              <p className="text-gold-metallic text-[10px] uppercase tracking-widest font-bold mt-2">Elite Tables</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white italic">2</p>
              <p className="text-gold-metallic text-[10px] uppercase tracking-widest font-bold mt-2">Monthly Majors</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: THE IMAGE BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Spotlight on the image */}
          <div className="absolute -inset-10 bg-gold-metallic/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden border-[12px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <Image 
              src="/girl.jpeg" // The image you shared/have
              alt="Golden Dynasty Poker"
              fill
              className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
            />
            
            {/* The Badge */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <p className="text-white font-black text-2xl tracking-tighter uppercase italic">Winning Hands Waiting</p>
              <p className="text-gold-metallic text-xs font-bold tracking-[0.3em] uppercase mt-1">PLO-5 High Stakes</p>
            </div>
          </div>

          {/* Floating 'Director's Vision' Card */}
          <div className="absolute -top-6 -right-6 bg-black border border-gold-metallic/30 p-6 shadow-2xl hidden md:block">
            <p className="text-gold-metallic text-[10px] uppercase tracking-widest font-bold mb-2">Director&apos;s Vision</p>
            <p className="text-white font-serif italic text-sm">High Stakes. Bigger Thrills. Real Players.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
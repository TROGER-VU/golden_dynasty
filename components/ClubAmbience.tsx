"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clubFeatures = [
  {
    title: "4 Professional Tables",
    desc: "Standard High-Stakes PLO-5 & ROE Action.",
    src: "/poker-table.mp4",
    type: "video",
    size: "md:col-span-2 md:row-span-1 h-[300px] md:h-full",
  },
  {
    title: "1 Ultra-Luxury VIP Table",
    desc: "Private elite environment for the Golden Dynasty's top tier.",
    src: "/hero2.mp4",
    type: "video",
    size: "md:col-span-1 md:row-span-2 h-[400px] md:h-full",
  },
  {
    title: "5-Star Hospitality",
    desc: "Luxury Stay, Michelin-standard Dining, & Wellness.",
    src: "/property.mp4",
    type: "video",
    size: "md:col-span-2 md:row-span-1 h-[300px] md:h-full",
  }
];

const hospitalityItems = [
  {
    title: "Luxury Stay",
    icon: "ROOM",
    desc: "Play for 6 hours and unlock a premium 5-star suite on the same floor. No commute, just comfort.",
    tag: "COMPLIMENTARY",
    img: "/stay.jpeg",
    delay: 0.1
  },
  {
    title: "Fine Dining",
    icon: "ELITE CHEF",
    desc: "Chef-curated menu served right at your table. High-energy food designed for high-stakes focus.",
    tag: "24/7 SERVICE",
    img: "/finedine2.jpeg",
    delay: 0.2
  },
  {
    title: "Wellness & Spa",
    icon: "REJUVENATE",
    desc: "In-house massage parlor and gym access to rejuvenate your mind between intense sessions.",
    tag: "RECOVERY",
    img: "/spa.jpeg",
    delay: 0.3
  }
];

export default function ClubAmbience() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#BF953F] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4">The Venue</h2>
          <h3 className="text-3xl md:text-6xl font-serif text-white leading-[1.2] md:leading-tight">
            Elite Infrastructure. <br /> 
            <span className="text-[#BF953F]">World-Class Hospitality.</span>
          </h3>
        </div>

        {/* 1. BENTO GRID - Fixed for Mobile Stacking */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px] mb-20">
          {clubFeatures.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative rounded-sm overflow-hidden border border-white/10 group bg-neutral-900 ${feature.size}`}
            >
              {feature.type === "video" ? (
                <video
                  src={feature.src}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                />
              ) : (
                <Image 
                  src={feature.src} 
                  alt={feature.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
              )}  
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <h4 className="text-xl md:text-2xl font-serif text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm max-w-xs">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. PUNCHLINE BRIDGE - Prevent Horizontal Overflow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24 relative px-2"
        >
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-12 w-px h-12 bg-gradient-to-b from-[#BF953F] to-transparent" />
          <p className="text-gray-300 text-2xl md:text-4xl lg:text-5xl font-serif italic tracking-tight whitespace-normal md:whitespace-nowrap leading-relaxed">
            Experience the <span className="text-white font-bold not-italic">Dynasty</span>. <br className="md:hidden" />
            High Stakes. <span className="text-[#BF953F] font-bold not-italic">Real Thrills.</span>
          </p>
          <div className="mt-6 md:mt-8 flex justify-center items-center gap-4">
            <div className="w-8 md:w-12 h-[1px] bg-[#BF953F]/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#BF953F]" />
            <div className="w-8 md:w-12 h-[1px] bg-[#BF953F]/40" />
          </div>
        </motion.div>

        {/* 3. HOSPITALITY CARDS - Responsive Padding & Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {hospitalityItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.8 }}
              className="group relative h-[450px] md:h-[600px] flex flex-col justify-end border border-white/5 rounded-sm overflow-hidden bg-neutral-900 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-60 md:opacity-70 group-hover:opacity-30 transition-all duration-1000 scale-100 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              </div>

              <span className="absolute left-6 top-6 text-6xl md:text-7xl font-black text-white/[0.05] italic group-hover:text-[#BF953F]/20 transition-all duration-700 pointer-events-none z-20">
                0{idx + 1}
              </span>

              <div className="absolute top-6 md:top-8 right-6 md:right-8 z-30 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="px-3 py-1 border border-[#BF953F]/50 bg-black/60 backdrop-blur-md rounded-sm">
                  <span className="text-[#BF953F] text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="relative z-30 p-6 md:p-10 space-y-4 md:space-y-5 transform transition-transform duration-500 group-hover:translate-y-[-5px] md:group-hover:translate-y-[-10px]">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-[1px] w-6 md:w-8 bg-[#BF953F] group-hover:w-12 md:group-hover:w-16 transition-all duration-700" />
                  <span className="text-[#BF953F] text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
                    {item.icon}
                  </span>
                </div>
                
                <h5 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                  {item.title}
                </h5>
                
                <div className="md:max-h-0 group-hover:max-h-32 opacity-100 md:opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out">
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Internal border - disabled on mobile for cleaner look */}
              <div className="hidden md:block absolute inset-0 border-[1px] border-[#BF953F]/0 group-hover:border-[#BF953F]/30 transition-all duration-700 pointer-events-none z-40 m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
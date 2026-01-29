// components/MediaGallery.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "The Grand Finale",
    category: "Live Events",
    src: "https://images.unsplash.com/photo-1604345250885-11f528eec3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9rZXJ8ZW58MHx8MHx8fDA%3D",
    size: "col-span-2 row-span-2", // Large feature
  },
  {
    id: 2,
    type: "image",
    title: "High Stakes Lounge",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBva2VyfGVufDB8fDB8fHww",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    type: "image",
    title: "Private Membership",
    category: "Elite",
    src: "https://images.unsplash.com/photo-1655159428752-c700435e9983?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "The Royal Flush",
    category: "Moments",
    src: "https://images.unsplash.com/photo-1504279807002-09854ccc9b6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9rZXJ8ZW58MHx8MHx8fDA%3D",
    size: "col-span-2 row-span-1",
  },
];

export default function MediaGallery() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Gold Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BF953F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#BF953F] tracking-[0.5em] uppercase text-xs font-bold mb-4 drop-shadow-md">
              The Visual Vault
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Captured <br /> <span className="text-gold-metallic">Excellence.</span>
            </h3>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm border-l border-[#BF953F]/30 pl-6 leading-relaxed">
            A glimpse into the most exclusive poker circles in the world. 
            Where standard play meets extraordinary luxury.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {mediaItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 0.98 }}
              className={`relative rounded-3xl overflow-hidden group border border-[#BF953F]/10 ${item.size}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 brightness-75 group-hover:brightness-110 group-hover:saturate-[1.2]"
                />
              </div>

              {/* Gold "Wipe" Reflection on Hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-[#BF953F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />

              {/* Video Play Button Overlay (Conditional) */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#BF953F] group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-black" />
                  </div>
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                <span className="text-[#FBF5B7] text-[10px] tracking-[0.3em] uppercase font-bold mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold-metallic transition-colors duration-300">
                  {item.title}
                </h4>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#BF953F]/40 rounded-3xl transition-all duration-500 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="group text-[#BF953F] text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-4 mx-auto hover:text-[#FBF5B7] transition-colors">
            View Full Archives
            <span className="w-12 h-[1px] bg-[#BF953F] transition-all group-hover:w-20 group-hover:bg-[#FBF5B7]" />
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Protocol {
  id: string;
  title: string;
  tag: string;
  desc: string;
  stats: string;
  image: string;
  icon: React.ReactNode;
}

const protocols: Protocol[] = [
  {
    id: "01",
    title: "Fair Play Certified",
    tag: "INTEGRITY",
    desc: "Every deck is ISO-shuffled and RFID-tracked. Our 24/7 surveillance floor is monitored by third-party integrity officers to ensure zero collusion.",
    stats: "100% Transparency",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Skill Gaming Only",
    tag: "LEGAL",
    desc: "Operating strictly under Indian Mind Sport mandates. Golden Dynasty is a verified venue for skill-based gaming, distinct from chance-based gambling.",
    stats: "Govt Compliant",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Responsible Play",
    tag: "SECURITY",
    desc: "Strict 18+ biometric verification. We maintain an elite ecosystem with a zero-tolerance policy for unethical behavior or collusion.",
    stats: "Verified Only",
    image: "https://media.istockphoto.com/id/1143801284/photo/mature-man-gambling.webp?a=1&b=1&s=612x612&w=0&k=20&c=rILylt4o3v0tX4q5VkvdcsA0rX-VowQhecuCz2zeBCg=",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-5.09 4.83-9.063 10-9.063 1.223 0 2.387.214 3.474.607" />
      </svg>
    )
  }
];

function ProtocolCard({ item, idx }: { item: Protocol; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["4%", "-4%"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["4%", "-4%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/5 bg-neutral-950/20 cursor-pointer"
    >
      {/* 1. PARALLAX BACKGROUND LAYER - Lower Opacity */}
      <motion.div 
        style={{ x: imgX, y: imgY, scale: 1.1 }}
        className="absolute inset-0 z-0 w-[112%] h-[112%] -left-[6%] -top-[6%]"
      >
        <Image 
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-[0.45] group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/95" />
      </motion.div>

      {/* 2. STATIC CONTENT LAYER */}
      <div className="relative z-20 h-full p-8 md:p-10 bg-neutral-900/30 backdrop-blur-[2px] flex flex-col justify-between pointer-events-none">
        
        <span className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-[#BF953F]/10 transition-colors duration-700">
          {item.id}
        </span>

        <div className="flex justify-between items-start mb-12">
          <div className="text-[#BF953F] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
            {item.icon}
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">{item.stats}</span>
          </div>
        </div>

        <div>
          <span className="text-[#BF953F]/60 text-[11px] font-black tracking-[0.4em] uppercase mb-3 block group-hover:text-[#BF953F] transition-colors">
            {item.tag}
          </span>
          <h3 className="text-2xl font-serif text-white/90 mb-4 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
            {item.desc}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/20 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-700" />
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[#BF953F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}

export default function ProtocolSection() {
  return (
    <section className="relative py-14 bg-[#050505] overflow-hidden">
      

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BF953F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-[#BF953F]/50" />
            <p className="text-[#BF953F]/80 text-[10px] font-black uppercase tracking-[0.6em]">Institutional Standard</p>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif text-white/95 tracking-tight max-w-3xl">
            The <span className="text-gold-metallic">Golden Dynasty</span> Protocols.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protocols.map((item, idx) => (
            <ProtocolCard key={item.id} item={item} idx={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-5 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            Recognized by the Indian Mind Sports Association
          </p>
          <button className="text-[#BF953F]/70 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 group hover:text-[#BF953F] transition-colors">
            Download Rulebook 
            <span className="w-8 h-[1px] bg-[#BF953F]/30 group-hover:w-16 group-hover:bg-[#BF953F] transition-all" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
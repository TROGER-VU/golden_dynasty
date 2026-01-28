"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_50px_20px_rgba(245,158,11,0.05)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-amber-500 text-3xl">♛</span>
              <span className="text-amber-100 font-serif font-bold tracking-[0.2em] uppercase text-sm">
                Golden Dynasty
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The world&apos;s most exclusive poker society. Bridging the gap between elite online play and luxury live events.
            </p>
            <div className="flex gap-4">
              {['𝕏', '📸', '📺', '💬'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-amber-100 font-serif uppercase tracking-widest text-xs mb-6">The Platform</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Live Tournaments</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cash Tables</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">VIP Lounges</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Download Client</a></li>
            </ul>
          </div>

          {/* Column 3: Society */}
          <div>
            <h4 className="text-amber-100 font-serif uppercase tracking-widest text-xs mb-6">The Society</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Membership Tiers</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Global Live Events</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Hall of Fame</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Partner Program</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Join */}
          <div>
            <h4 className="text-amber-100 font-serif uppercase tracking-widest text-xs mb-6">Stay Informed</h4>
            <p className="text-gray-500 text-sm mb-4">Receive invitations to private events and weekly tournament schedules.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="VIP Email Address"
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-500 hover:text-amber-400 text-xs font-bold uppercase tracking-tighter">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Responsible Gaming & Compliance Strip */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-[10px] text-white border border-white px-2 py-0.5 font-bold italic">18+</span>
             <span className="text-[10px] text-white tracking-[0.2em] font-bold">RESPONSIBLE GAMING</span>
             <span className="text-[10px] text-white tracking-[0.2em] font-bold uppercase">MGA Licensed</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] mb-2">
              © {currentYear} Golden Dynasty • All Rights Reserved
            </p>
            <div className="flex gap-6 justify-center md:justify-end text-[10px] text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-amber-500">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500">Terms of Play</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
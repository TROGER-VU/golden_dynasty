"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "upcoming" | "ongoing";

const TAB_MAP: Record<string, TabType> = {
  Upcoming: "upcoming",
  Ongoing: "ongoing",
};

export default function TournamentCalendar() {
  const [activeTab, setActiveTab] = useState<TabType>("upcoming");

  return (
    <section
      id="tournaments"
      className="py-10 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(191,149,63,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER & TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#BF953F] text-xs font-bold uppercase tracking-[0.5em] mb-4">
              The Schedule
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">
              The Arena <span className="text-gold-metallic">Awaits.</span>
            </h3>
          </motion.div>

          <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
            {Object.keys(TAB_MAP).map((tabLabel) => (
              <button
                key={tabLabel}
                onClick={() => setActiveTab(TAB_MAP[tabLabel])}
                className={`px-6 py-2 rounded-md text-[10px] uppercase tracking-widest font-bold transition-all ${
                  activeTab === TAB_MAP[tabLabel]
                    ? "bg-[#BF953F] text-black shadow-[0_0_15px_rgba(191,149,63,0.3)]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* COMING SOON STATE */}
        <div className="relative min-h-[450px] flex items-center justify-center border border-[#BF953F]/10 rounded-3xl bg-gradient-to-b from-[#080808] to-black overflow-hidden shadow-2xl">
          {/* Subtle Animated Gold Dust or Particles could be here */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(191,149,63,0.03)_0%,_transparent_50%)]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center px-6 relative z-10"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-block"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                   {/* Spinning Ring */}
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[#BF953F]/30"
                   />
                   {/* Inner Solid Ring */}
                   <div className="absolute inset-2 rounded-full border border-[#BF953F]/10 flex items-center justify-center bg-black shadow-inner">
                      <span className="text-3xl md:text-4xl">🏆</span>
                   </div>
                </div>
              </motion.div>

              <h4 className="text-white font-serif text-3xl md:text-5xl mb-6 tracking-tight">
                <span className="italic text-gold-metallic">Coming Soon</span>
              </h4>
              
              <div className="max-w-md mx-auto space-y-4">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed uppercase tracking-[0.2em] font-light">
                  We are finalizing the blinds, structures, and massive guarantees for our inaugural season.
                </p>
                <p className="text-[#BF953F]/60 text-[10px] uppercase tracking-[0.4em]">
                  {activeTab} Schedule currently under review
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="px-8 py-3 bg-[#BF953F] text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
                  Notify Me First
                </button>
                <button className="px-8 py-3 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all">
                  Contact Host
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Live Status Hint */}
        {/* <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/50 rounded-full border border-white/5">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Live Cash Tables: <span className="text-white">Active Daily 6PM - 6AM</span>
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
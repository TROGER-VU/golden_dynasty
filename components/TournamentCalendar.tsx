// components/TournamentCalendar.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    date: "15",
    month: "FEB",
    day: "Saturday",
    title: "Dynasty Monthly Major",
    format: "PLO-5 • Deep Stack",
    buyin: "₹25,000",
    gtd: "₹10 Lakhs GTD",
    status: "Open",
    spots: "12 Seats Left"
  },
  {
    id: 2,
    date: "18",
    month: "FEB",
    day: "Tuesday",
    title: "Mid-Week Hustle",
    format: "ROE (Round of Each)",
    buyin: "₹10,000",
    gtd: "₹5 Lakhs GTD",
    status: "Filling Fast",
    spots: "4 Seats Left"
  },
  {
    id: 3,
    date: "22",
    month: "FEB",
    day: "Saturday",
    title: "The High Roller",
    format: "PLO-5 • 6-Max",
    buyin: "₹50,000",
    gtd: "Invite Only",
    status: "Waitlist",
    spots: "Full House"
  }
];

export default function TournamentCalendar() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section id="tournaments" className="py-14 px-6 bg-[#020202] border-t border-white/5 relative">
      
      {/* Background Decor: Subtle Poker Chips Pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(191,149,63,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER & TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-gold-metallic text-xs font-bold uppercase tracking-[0.5em] mb-4">The Schedule</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">
              Mark Your <span className="text-gold-metallic">Calendar.</span>
            </h3>
          </div>
          
          {/* Calendar Filter Tabs */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
            {['Upcoming', 'Results', 'Series'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-md text-[10px] uppercase tracking-widest font-bold transition-all ${
                  activeTab === tab.toLowerCase() 
                    ? 'bg-[#BF953F] text-black shadow-[0_0_15px_rgba(191,149,63,0.3)]' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* EVENT TICKETS LIST */}
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#BF953F]/50 transition-all duration-300"
            >
              
              {/* Left: Date Block */}
              <div className="w-full md:w-32 bg-[#111] py-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 group-hover:bg-[#BF953F] group-hover:text-black transition-colors duration-300">
                <span className="text-3xl font-black">{event.date}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{event.month}</span>
              </div>

              {/* Center: Event Details */}
              <div className="flex-1 p-6 md:pl-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <h4 className="text-xl text-white font-serif tracking-wide group-hover:text-[#BF953F] transition-colors">
                    {event.title}
                  </h4>
                  <span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{event.day}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-400">
                  <span className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-[#BF953F]">♠</span> {event.format}
                  </span>
                  <span className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-[#BF953F]">💰</span> Buy-in: <span className="text-white font-bold">{event.buyin}</span>
                  </span>
                </div>
              </div>

              {/* Right: Prize & Action */}
              <div className="w-full md:w-auto p-6 flex flex-col items-center gap-3 border-t md:border-t-0 md:border-l border-white/10 bg-[#050505]">
                <div className="text-center">
                  <p className="text-gold-metallic font-black text-lg">{event.gtd}</p>
                  <p className={`text-[9px] uppercase tracking-widest font-bold ${
                    event.status === 'Open' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {event.spots}
                  </p>
                </div>
                <button 
                  className={`px-8 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                    event.status === 'Waitlist' 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-[#BF953F] hover:scale-105'
                  }`}
                >
                  {event.status === 'Waitlist' ? 'Waitlist' : 'Register'}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs italic">
            *Online registration guarantees your seat until Level 2. Please bring a valid government ID.
          </p>
        </div>

      </div>
    </section>
  );
}
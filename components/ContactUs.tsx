"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-black py-14 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background flare - Gold logic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#BF953F]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#BF953F]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* LEFT: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-[#BF953F] tracking-[0.5em] uppercase text-xs md:text-sm font-bold mb-4">
              Concierge
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Direct Access to <br /> 
              <span className="text-[#BF953F] italic">The Golden Dynasty.</span>
            </h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-sm">
              Whether it&apos;s a high-stakes seat reservation or a VIP membership inquiry, our concierge is active 24/7.
            </p>
          </div>

          <div className="space-y-10">
  {[
    {
      label: "Electronic Correspondence",
      value: "contact@goldendynasty.club",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Direct VIP Line",
      value: "+91 98765 43210",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: "The Arena Location",
      value: "Civil Lines, Kanpur, Uttar Pradesh",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ].map((item, idx) => (
    <div key={idx} className="flex items-center gap-8 group cursor-pointer">
      {/* Icon Container */}
      <div className="relative">
        {/* Animated Glow Ring */}
        <div className="absolute inset-0 rounded-sm border border-[#BF953F]/50 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Main Box */}
        <div className="w-16 h-16 rounded-sm border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center text-[#BF953F] group-hover:bg-[#BF953F] group-hover:text-black transition-all duration-500 relative z-10">
          {item.icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-1">
        <p className="text-[#BF953F] font-black uppercase tracking-[0.3em] text-[9px] opacity-70 group-hover:opacity-100 transition-opacity">
          {item.label}
        </p>
        <p className="text-white font-serif text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">
          {item.value}
        </p>
      </div>
    </div>
  ))}
</div>
        </motion.div>

        {/* RIGHT: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl relative"
        >
          {/* Subtle Decorative Gold Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#BF953F]/30 pointer-events-none" />

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#BF953F] font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-[#BF953F] transition-all placeholder:text-gray-700"
                  placeholder="E.g. Akash Swarnkar"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#BF953F] font-bold ml-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-[#BF953F] transition-all placeholder:text-gray-700"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#BF953F] font-bold ml-1">Inquiry Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-[#BF953F] transition-all appearance-none cursor-pointer">
                <option className="bg-black text-white">VIP Table Booking</option>
                <option className="bg-black text-white">Membership Application</option>
                <option className="bg-black text-white">Tournament Registration</option>
                <option className="bg-black text-white">Complimentary Stay Request</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#BF953F] font-bold ml-1">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-[#BF953F] transition-all placeholder:text-gray-700 resize-none"
                placeholder="Details of your visit..."
              ></textarea>
            </div>

            <button className="w-full py-5 bg-[#BF953F] hover:bg-[#FBF5B7] text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-sm transition-all shadow-[0_0_30px_rgba(191,149,63,0.2)] active:scale-[0.98]">
              Send Transmission
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
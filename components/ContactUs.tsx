"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-amber-500 tracking-[0.5em] uppercase text-xs md:text-sm font-bold mb-4">
              Concierge
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              How Can We <br /> Assist You?
            </h3>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Whether you&apos;re looking for high-stakes table access or private event inquiries, our 24/7 concierge is standing by.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                ✉
              </div>
              <div>
                <p className="text-amber-100 font-serif uppercase tracking-widest text-sm mb-1">Email Us</p>
                <p className="text-gray-500 text-sm">vip@goldendynasty.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                ☏
              </div>
              <div>
                <p className="text-amber-100 font-serif uppercase tracking-widest text-sm mb-1">VIP Hotline</p>
                <p className="text-gray-500 text-sm">+1 (888) DYNASTY-GOLD</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                📍
              </div>
              <div>
                <p className="text-amber-100 font-serif uppercase tracking-widest text-sm mb-1">Headquarters</p>
                <p className="text-gray-500 text-sm">Monaco Tower, Suite 707, Monte Carlo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-700"
                  placeholder="James Bond"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-700"
                  placeholder="james@royale.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 ml-1">Subject</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all appearance-none">
                <option>VIP Membership Inquiry</option>
                <option>Tournament Support</option>
                <option>Live Event Registration</option>
                <option>Partnership Proposal</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 ml-1">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-700 resize-none"
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-[0.3em] text-xs rounded-xl transition-all shadow-[0_10px_20px_rgba(245,158,11,0.2)] active:scale-95">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
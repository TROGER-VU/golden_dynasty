"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TrustSection from "./TrustSection";

interface SocialLink {
  name: string;
  path: string;
  href?: string;
}

export default function TrustFooter() {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m5-2.25a1.25 1.25 0 0 1 1.25 1.25 1.25 1.25 0 0 1-1.25 1.25 1.25 1.25 0 0 1-1.25-1.25 1.25 1.25 0 0 1 1.25-1.25z",
    },
    {
      name: "Facebook",
      path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z",
    },
    {
      name: "X/Twitter",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
  ];

  return (
    <footer className="bg-black border-t border-[#BF953F]/20 relative">
      <TrustSection />

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/logo2.png" alt="GD Logo" fill className="object-contain scale-500" />
            </div>
            <div>
              <h5 className="text-white font-serif font-black tracking-widest text-lg leading-none">
                GOLDEN
              </h5>
              <p className="text-[#BF953F] text-sm uppercase tracking-[0.4em]">Dynasty</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Kanpur&apos;s premier destination for high-stakes Poker Actions. Where luxury hospitality meets professional grinding.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href ?? "#"}
                whileHover={{ y: -3, color: "#000" }}
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-[#BF953F] hover:bg-[#BF953F] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">The Arena</h5>
          <ul className="space-y-4 text-sm text-gray-500">
            {["Live Table Status", "Tournament Calendar", "VIP Membership", "House Rules"].map(
              (link) => (
                <li key={link} className="hover:text-[#BF953F] cursor-pointer transition-colors">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
            Direct Contact
          </h5>
          <ul className="space-y-6 text-[13px] text-gray-500">
            {/* Address */}
            <li className="flex gap-4 group">
              <div className="text-[#BF953F] mt-1 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="leading-relaxed group-hover:text-gray-300 transition-colors">
                Civil Lines, Kanpur,<br /> Uttar Pradesh, 208001
              </span>
            </li>
            {/* Phone */}
            <li className="flex gap-4 group items-center">
              <div className="text-[#BF953F] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="group-hover:text-gray-300 transition-colors">+91 98765 43210</span>
            </li>
            {/* Email */}
            <li className="flex gap-4 group items-center">
              <div className="text-[#BF953F] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="group-hover:text-gray-300 transition-colors">contact@goldendynasty.club</span>
            </li>
          </ul>
        </div>

        {/* Director's Note */}
        {/* Director's Note - Architectural Layout */}
<div className="relative border-l border-[#BF953F]/30 pl-8 py-2 md:col-span-1">
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h5 className="text-[#BF953F] text-[10px] uppercase tracking-[0.4em] font-bold mb-6">
      The Vision
    </h5>
    
    <blockquote className="relative">
      <p className="text-gray-300 font-serif text-base leading-[1.8] mb-6">
        “We started Golden Dynasty with one goal—to create a venue that I would love to play in myself. A place where respect, class, and high-level competition come together. This is not just a club; it is a home for the true poker aficionado.”
      </p>
      
      <footer className="flex flex-col gap-1">
        <span className="text-white text-xs font-bold uppercase tracking-widest">
          Akash Swarnkar
        </span>
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          Founder & Director
        </span>
      </footer>
    </blockquote>

    {/* Subtle Decorative Element */}
    <div className="mt-8 w-12 h-[1px] bg-gradient-to-r from-[#BF953F] to-transparent opacity-50" />
  </motion.div>
</div>
      </div>

      {/* COPYRIGHT & SEO STRIP */}
      <div className="border-t border-white/5 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2026 Golden Dynasty. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-[10px] uppercase tracking-widest">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-[#BF953F]/40 text-white px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all cursor-pointer group hover:border-[#BF953F]"
      >
        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-wa" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BF953F" />
              <stop offset="50%" stopColor="#FBF5B7" />
              <stop offset="100%" stopColor="#BF953F" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gold-wa)"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.006 12.039a11.81 11.81 0 001.578 5.925L0 24l6.135-1.61a11.81 11.81 0 005.914 1.586h.005c6.637 0 12.042-5.403 12.046-12.04a11.812 11.812 0 00-3.483-8.513z"
          />
        </svg>

        <span className="font-bold text-xs uppercase tracking-[0.2em] hidden md:block group-hover:text-[#BF953F] transition-colors">
          Club Manager
        </span>

        {/* Ping Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF953F] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FBF5B7]"></span>
        </span>
      </motion.a>
    </footer>
  );
}
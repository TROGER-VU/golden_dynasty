"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tournaments", href: "#tournaments" },
    { name: "Careers", href: "#careers" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6 ${
          scrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        <div className={`max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-8 py-3 rounded-xl md:rounded-2xl transition-all duration-500 ${
          scrolled 
          ? "bg-black/80 backdrop-blur-xl border border-[#BF953F]/20 shadow-2xl" 
          : "bg-transparent border border-transparent"
        }`}>
          
          {/* LEFT: Logo Section */}
          <div className="flex items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-8 h-8 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src="/logo2.png" 
                  alt="GD Shield" 
                  fill 
                  className="object-contain drop-shadow-[0_0_10px_rgba(191,149,63,0.3)] scale-450" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FBF5B7] font-serif font-black tracking-widest text-[10px] md:text-xs uppercase leading-none">Golden</span>
                <span className="text-[#BF953F] font-serif text-[10px] md:text-[12px] tracking-widest uppercase mt-0.5 md:mt-1">Dynasty</span>
              </div>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 ml-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link-gold">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CENTER: Rotating Coin (Desktop Only) */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 -my-8 group">
              <div className="absolute inset-0 bg-[#BF953F] blur-[30px] opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="w-full h-full animate-[spin_10s_linear_infinite]">
                <Image src="/logo.png" alt="Coin" fill className="object-contain rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT: Status & Menu Toggle */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <div className="hidden lg:flex flex-col items-end mr-4">
               <span className="text-[10px] text-green-500 font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live: 6PM - 6AM
               </span>
            </div>
            
            <button className="px-6 py-2 hidden md:block bg-gold-metallic text-black text-[10px] font-bold uppercase tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all">
            Join Club
          </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 z-[110] md:hidden p-2"
            >
              <span className={`w-6 h-0.5 bg-[#BF953F] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#BF953F] transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-4 h-0.5 bg-[#BF953F] transition-all self-end ${isMenuOpen ? "-rotate-45 -translate-y-2 w-6" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#BF953F]/10 blur-[100px] rounded-full" />

            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif text-white hover:text-[#BF953F] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
               className="mt-4 px-10 py-4 bg-[#BF953F] text-black font-bold uppercase tracking-widest text-xs"
            >
              Join the Dynasty
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
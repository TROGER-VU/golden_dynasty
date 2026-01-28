"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tournaments", href: "#" },
    { name: "Live Events", href: "#" },
    { name: "The Society", href: "#" },
    { name: "VIP", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? "md:py-3" : "md:py-6"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}>
        
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-amber-500 text-2xl group-hover:scale-110 transition-transform duration-300">♛</div>
          <span className="text-amber-100 font-serif font-bold tracking-[0.2em] uppercase text-sm hidden md:block">
            Golden Dynasty
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-amber-100/70 text-xs uppercase tracking-widest font-medium hover:text-amber-400 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-4">
            <button className="hidden sm:block text-amber-100/80 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
              Login
            </button>

            <button className="relative px-5 py-2 overflow-hidden rounded-sm group">
              <span className="absolute inset-0 border border-amber-500/50"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-amber-400 group-hover:text-black text-xs font-bold uppercase tracking-[0.25em] transition-colors">
                Join Now
              </span>
            </button>
          </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
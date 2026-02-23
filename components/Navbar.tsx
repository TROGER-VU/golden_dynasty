"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaDiscord, FaFacebook } from "react-icons/fa";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Tournaments", href: "#tournaments" },
  { name: "Arena", href: "#arena" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerClasses = `
    max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center
    px-4 md:px-8 py-3 rounded-xl md:rounded-2xl
    transition-all duration-500
    ${
      isScrolled
        ? "bg-black/80 backdrop-blur-xl border border-[#BF953F]/20 shadow-2xl"
        : "bg-transparent border border-transparent"
    }
  `;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        <div className={containerClasses}>
          {/* LEFT SECTION */}
          <div className="flex items-center gap-3 md:gap-8">
            <Brand />

            <div className="hidden md:flex gap-6 ml-4">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="nav-link-gold">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CENTER COIN */}
          <DesktopCoin />

          {/* RIGHT SECTION */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <SocialLinks />
            <LiveIndicator />

            {/* <button className="px-6 py-2 hidden md:block bg-gold-metallic text-black text-[10px] font-bold uppercase tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all">
              Join Club
            </button> */}

            <MobileMenuToggle
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMenuOpen}
        links={NAV_LINKS}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

/* ---------------- BRAND ---------------- */

const Brand = () => (
  <div className="flex items-center gap-2 md:gap-3 group">
    <div className="relative w-8 h-8 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
      <Image
        src="/logo2.png"
        alt="Golden Dynasty Logo"
        fill
        className="object-contain drop-shadow-[0_0_10px_rgba(191,149,63,0.3)] scale-450"
        priority
      />
    </div>
    <div className="flex flex-col">
      <span className="text-[#FBF5B7] font-serif font-black tracking-widest text-[10px] md:text-xs uppercase leading-none">
        Golden
      </span>
      <span className="text-[#BF953F] font-serif text-[10px] md:text-[12px] tracking-widest uppercase mt-0.5 md:mt-1">
        Dynasty
      </span>
    </div>
  </div>
);

/* ---------------- SOCIAL LINKS ---------------- */

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="hidden md:flex items-center gap-4"
  >
    <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
      <FaInstagram size={24} />
    </Link>

    <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
      <FaFacebook size={24} />
    </Link>

    <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
      <FaTwitter size={24} />
    </Link>

    {/* <a
      href="https://discord.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discord"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
      <FaDiscord size={18} />
    </a> */}
  </motion.div>
);

/* ---------------- CENTER COIN ---------------- */

const DesktopCoin = () => (
  <div className="hidden md:flex justify-center">
    <div className="relative w-20 h-20 md:w-24 md:h-24 -my-8 group">
      <div className="absolute inset-0 bg-[#BF953F] blur-[30px] opacity-10 group-hover:opacity-30 transition-opacity" />
      <div className="w-full h-full animate-[spin_10s_linear_infinite]">
        <Image
          src="/logo.png"
          alt="Golden Dynasty Emblem"
          fill
          className="object-contain rounded-full"
        />
      </div>
    </div>
  </div>
);

/* ---------------- LIVE INDICATOR ---------------- */

const LiveIndicator = () => (
  <div className="hidden lg:flex flex-col items-end">
    <span className="text-[10px] text-green-500 font-bold tracking-[0.2em] uppercase flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      Live: 6PM – 6AM
    </span>
  </div>
);

/* ---------------- MOBILE TOGGLE ---------------- */

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => (
  <button
    onClick={onToggle}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
    className="flex flex-col gap-1.5 z-[110] md:hidden p-2"
  >
    <span
      className={`w-6 h-0.5 bg-[#BF953F] transition-all ${
        isOpen ? "rotate-45 translate-y-2" : ""
      }`}
    />
    <span
      className={`w-6 h-0.5 bg-[#BF953F] transition-all ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`w-4 h-0.5 bg-[#BF953F] transition-all self-end ${
        isOpen ? "-rotate-45 -translate-y-2 w-6" : ""
      }`}
    />
  </button>
);

/* ---------------- MOBILE MENU ---------------- */

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, links, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-3xl font-serif text-white hover:text-[#BF953F] transition-colors"
          >
            {link.name}
          </motion.a>
        ))}

        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 px-10 py-4 bg-[#BF953F] text-black font-bold uppercase tracking-widest text-xs"
        >
          Join the Dynasty
        </motion.button> */}

        {/* Mobile Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-6 mt-6"
        >
          <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
    <FaInstagram size={24} />
    </Link>
          <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
    <FaTwitter size={24} />

    </Link>
          <Link
      href="https://www.instagram.com/goldendynasty.knp?igsh=MWJmNjNzaXFkdHprOA=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-[#BF953F] hover:text-[#FBF5B7] hover:drop-shadow-[0_0_8px_rgba(191,149,63,0.7)] transition-all duration-300 hover:scale-110"
    >
          <FaFacebook size={24} />
    </Link>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PreLoader from "@/components/PreLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClubAmbience from "@/components/ClubAmbience";
import LiveFloor from "@/components/LiveFloor";
import MembershipPerks from "@/components/MembershipPerks";
import TournamentCalendar from "@/components/TournamentCalendar";
import TrustFooter from "@/components/TrustFooter";
import ContactUs from "@/components/ContactUs";

const LOADER_DURATION = 3000;

const CinematicSection = () => {
  return (
    <section className="relative py-8 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-sm overflow-hidden border border-[#BF953F]/20 group"
        >
          <video
            src="/coin.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
          />

          <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
            <video
              src="/coin.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(191,149,63,0.5)] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

          <div className="absolute top-6 left-6 z-30">
            <div className="w-8 h-8 border-l border-t border-[#BF953F]/40" />
          </div>

          <div className="absolute bottom-6 right-6 z-30">
            <div className="w-8 h-8 border-r border-b border-[#BF953F]/40" />
          </div>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
};

const SectionDivider = () => {
  return (
    <div className="mt-10 text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#BF953F]/50" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#BF953F]" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#BF953F]/50" />
      </div>

      <p className="text-4xl uppercase tracking-[0.6em] text-[#BF953F] font-bold opacity-80">
        The Golden Dynasty Standard
      </p>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#020202] text-white selection:bg-amber-500/30">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PreLoader key="preloader" />
        ) : (
          <motion.div
            key="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />

            <div className="relative z-10">
              <ClubAmbience />
              <LiveFloor />
              <CinematicSection />
              <MembershipPerks />
              <TournamentCalendar />
              <ContactUs />
            </div>

            <TrustFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
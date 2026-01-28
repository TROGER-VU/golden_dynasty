"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "@/components/PreLoader";
import Navbar from "@/components/Navbar";
import GoldenDynastyHero from "@/components/GoldenDynastyHero";
import { TournamentFeed } from "@/components/TournamentFeed";
import { MembershipTiers } from "@/components/MembershipTiers";
import WhyUs from "@/components/WhyUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets (Images, Fonts, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds feels premium without being annoying

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <PreLoader key="loader" />
        ) : (
          <div key="content">
            <Navbar />
            <GoldenDynastyHero />
            <TournamentFeed />
            <WhyUs/>
            <MembershipTiers/>
            <ContactUs/>
            <Footer/>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
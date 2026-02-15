"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function EnhancedMapSection() {
  return (
    <section id="arena" className="relative py-14 bg-[#050505] overflow-hidden">
      
      {/* 1. BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BF953F]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#BF953F]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              {/* <div className="h-[1px] w-12 bg-[#BF953F]" /> */}
              <h2 className="text-[#BF953F] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4">
      The Venue
    </h2>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tighter leading-none">
              Visit the <span className="text-gold-metallic italic">Golden Dynasty.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs font-light leading-relaxed border-l border-[#BF953F]/30 pl-6">
            Entry is strictly restricted to individuals aged 18 and above. Verification of age will be mandatory at the point of entry.
          </p>
        </div>

        {/* MAIN INTERACTIVE AREA */}
        <div className="relative group">
          
          {/* THE GOLDEN GLOW FRAME */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/50 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative h-[600px] w-full bg-neutral-900 rounded-sm overflow-hidden border border-white/5">
            
            {/* 2. THE MAP (Cinematic Dark Style) */}
            <div className="absolute inset-0 z-0">
               {/* Overlay to create the "Golden Dynasty" tint */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-black/40 mix-blend-multiply" />
              <div className="absolute inset-0 z-10 pointer-events-none bg-[#BF953F]/5 mix-blend-color" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.1352110883245!2d80.1189354!3d26.4191129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4bebf0913aff%3A0xfba581a57687b3d8!2sRajawat%20The%20Fern%20-%20An%20Ecotel%20Hotel%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1771167584824!5m2!1sen!2sin" 
                className="w-full h-full grayscale invert-[0.9] contrast-[1.2] sepia-[0.2]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />

              {/* HIGH-TECH SCANNING ANIMATION */}
              {/* <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-[#BF953F]/10 to-transparent z-20 pointer-events-none"
              /> */}
            </div>

            {/* 3. FLOATING CONTACT CARD (Glassmorphism) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-10 right-10 z-30 w-full max-w-sm hidden md:block"
            >
              <div className="bg-black/60 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-[#FBF5B7] font-serif text-2xl mb-1">Rajawat The Fern</h3>
                  <p className="text-[#BF953F] text-[10px] font-black uppercase tracking-widest">An Ecotel Hotel, Kanpur</p>
                </div>

                <div className="space-y-6">
                  <ContactDetail icon={<FaMapMarkerAlt />} title="Address" content="Rajawat The Fern, Fatehpur Roshnai Delhi, Kanpur Highway, Industrial Area, Rania, Kanpur, Uttar Pradesh 209101" />
                  {/* <ContactDetail icon={<FaClock />} title="Hours" content="24/7 Operations • Members Only" /> */}
                  <ContactDetail icon={<FaPhoneAlt />} title="Contact" content="+91 73767 27375" />
                  <ContactDetail icon={<FaEnvelope />} title="Inquiries" content="contact@goldendynasty.club" />
                </div>

                <button className="w-full mt-8 py-4 bg-[#BF953F] text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#FBF5B7] transition-all">
                  Request Access
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM STATS (Visual Filler for "Better Look") */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
                { label: "Transit Time", val: "52 Min from Kanpur Airport Chakeri" },
                { label: "Parking", val: "Secure Private Valet" },
                { label: "Verification", val: "Biometric Entry" },
                // { label: "Guest Policy", val: "Invite Only" }
            ].map((stat, i) => (
                <div key={i} className="border-t border-white/5 pt-4">
                    <p className="text-[#BF953F] text-[8px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-gray-400 text-xs uppercase font-medium">{stat.val}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactDetail({ icon, title, content }: ContactDetailProps) {
  return (
    <div className="flex gap-4">
      <div className="text-[#BF953F] mt-1 text-sm">{icon}</div>
      <div>
        <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
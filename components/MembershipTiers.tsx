"use client";
import { motion } from "framer-motion";

export const MembershipTiers = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-amber-500 tracking-[0.4em] uppercase text-sm mb-4 font-bold">The Inner Circle</h2>
          <h3 className="text-5xl font-serif text-white mb-8 leading-tight">Beyond The Digital Felt.</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Golden Dynasty isn&apos;t just a platform; it&apos;s a global network. Members gain access to private live galas in Monaco, Macau, and Las Vegas.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Private Concierge', 'Live Event Invitations', 'Higher Table Limits', 'Custom Avatar Assets'].map((item) => (
              <li key={item} className="flex items-center text-amber-100/80 gap-3">
                <span className="text-amber-500">✦</span> {item}
              </li>
            ))}
          </ul>
          
          <button className="px-10 py-4 bg-amber-600 text-black font-bold uppercase tracking-widest text-xs hover:bg-amber-400 transition-all">
            Apply for VIP
          </button>
        </motion.div>

        <div className="relative h-[500px] w-full group">
          <div className="absolute inset-0 border border-amber-500/20 translate-x-4 translate-y-4 rounded-2xl" />
          <div className="absolute inset-0 bg-cover bg-center rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&q=80&w=800')` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white font-serif italic text-2xl">The only way to play.</p>
            <p className="text-amber-500 uppercase tracking-widest text-xs mt-2">— Daniel V., Elite Member</p>
          </div>
        </div>
      </div>
    </section>
  );
};
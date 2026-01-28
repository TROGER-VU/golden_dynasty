"use client";
import { motion } from "framer-motion";

const tournaments = [
  { id: 1, name: "Dynasty High Roller", prize: "$250,000", buyIn: "$500", time: "Starts in 12m", status: "Registering" },
  { id: 2, name: "Midnight Bounty", prize: "$50,000", buyIn: "$100", time: "Starts in 44m", status: "Late Reg" },
  { id: 3, name: "Golden Sunday Main", prize: "$1,200,000", buyIn: "$1,050", time: "Tomorrow", status: "Satellite" },
];

export const TournamentFeed = () => {
  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-500 tracking-[0.4em] uppercase text-sm mb-2">Live Action</h2>
            <h3 className="text-4xl font-serif text-white">Active Tournaments</h3>
          </div>
          <button className="text-amber-400 border-b border-amber-400 pb-1 text-sm hover:text-amber-200 transition-colors uppercase tracking-widest">
            View All Games
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((reg, i) => (
            <motion.div
              key={reg.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] text-amber-500 border border-amber-500/30 px-2 py-1 rounded-full uppercase tracking-tighter">
                  {reg.status}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{reg.name}</h4>
              <p className="text-gray-400 text-sm mb-6">{reg.time}</p>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-widest">Guaranteed</p>
                  <p className="text-2xl font-serif text-amber-400">{reg.prize}</p>
                </div>
                <button className="bg-white/10 hover:bg-amber-500 hover:text-black text-white px-4 py-2 text-xs font-bold transition-all rounded-sm uppercase tracking-widest">
                  Join: {reg.buyIn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
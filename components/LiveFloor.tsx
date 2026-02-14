"use client";

import React from "react";
import { motion } from "framer-motion";

interface Table {
  id: number;
  name: string;
  game: string;
  blinds: string;
  seated: number;
  total: number;
  status: string;
  color: string;
}

const TABLES: Table[] = [
  {
    id: 1,
    name: "GD Main Floor",
    game: "PLO-5",
    blinds: "100/200",
    seated: 7,
    total: 9,
    status: "Active",
    color: "bg-green-500",
  },
  {
    id: 2,
    name: "The High Roller Circle",
    game: "ROE",
    blinds: "500/1000",
    seated: 4,
    total: 9,
    status: "Active",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Elite VIP Table",
    game: "PLO-5 (High Stakes)",
    blinds: "1000/2000",
    seated: 0,
    total: 7,
    status: "Starting at 10 PM",
    color: "bg-[#BF953F]",
  },
];

export default function LiveFloor() {
  return (
    <section className="py-14 bg-[#050505] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none gold-dust" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Header />
        <TableGrid tables={TABLES} />
        <BottomTicker />
      </div>
    </section>
  );
}

const Header = () => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
    <div>
      <h2 className="text-gold-metallic text-xs font-bold uppercase tracking-[0.5em] mb-4">
        Real-Time Action
      </h2>
      <h3 className="text-4xl font-serif text-white">
        Live <span className="text-gold-metallic">Floor Status.</span>
      </h3>
    </div>

    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
        Updated: Just Now
      </span>
    </div>
  </div>
);

const TableGrid = ({ tables }: { tables: Table[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {tables.map((table) => (
      <TableCard key={table.id} table={table} />
    ))}
  </div>
);

const TableCard = ({ table }: { table: Table }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 rounded-sm relative group hover:border-[#BF953F]/40 transition-all duration-500"
  >
    {/* Header */}
    <div className="flex justify-between items-start mb-8">
      <div>
        <h4 className="text-white font-serif text-xl mb-1">{table.name}</h4>
        <p className="text-[#BF953F] text-[10px] uppercase tracking-widest font-bold">
          {table.game} • {table.blinds}
        </p>
      </div>
      <div
        className={`h-2 w-2 rounded-full ${table.color} shadow-[0_0_10px_rgba(34,197,94,0.5)]`}
      />
    </div>

    {/* Seating Bar */}
    <div className="flex items-center gap-2 mb-6">
      {[...Array(table.total)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            i < table.seated ? "bg-gold-metallic" : "bg-white/10"
          }`}
        />
      ))}
    </div>

    {/* Status & CTA */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white font-black text-2xl tracking-tighter">
          {table.seated}/{table.total}
        </p>
        <p className="text-gray-500 text-[9px] uppercase tracking-widest">
          Players Seated
        </p>
      </div>
      <button className="text-[#FBF5B7] text-[10px] uppercase tracking-[0.2em] font-bold border-b border-[#BF953F]/50 pb-1 hover:text-white hover:border-white transition-all">
        {table.status === "Active" ? "Grab Seat" : "Reserve Seat"}
      </button>
    </div>

    {/* Ambient hover glow */}
    <div className="absolute inset-0 bg-[#BF953F]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </motion.div>
);

const BottomTicker = () => (
  <div className="mt-12 bg-white/5 border-y border-white/5 py-4 relative flex items-center overflow-hidden">
    {/* Left & Right Fade */}
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

    <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center px-8">
          <TickerItem
            title="Dynasty Monthly Major"
            date="Feb 15th"
            buyIn="25K Buy-in"
            gtd="5L GTD"
            cta="Register Now"
          />
          <TickerItem
            title="The Sovereign PLO-5 Night"
            date="Mar 2nd"
            buyIn="Invite Only"
            gtd="10L GTD"
            cta="Limited Seats"
          />
          <TickerItem
            title="Dynamic Dash"
            date="Every Wed"
            buyIn="5K Buy-in"
            gtd="1L GTD"
            cta=""
          />
        </div>
      ))}
    </div>
  </div>
);

const TickerItem = ({
  title,
  date,
  buyIn,
  gtd,
  cta,
}: {
  title: string;
  date: string;
  buyIn: string;
  gtd: string;
  cta: string;
}) => (
  <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.4em] flex items-center gap-4">
    <span>Next Tournament:</span>
    <span className="text-white">{title}</span>
    <span className="text-[#BF953F]">/</span>
    <span>{date}</span>
    <span className="text-[#BF953F]">/</span>
    <span>{buyIn}</span>
    <span className="text-[#BF953F]">/</span>
    <span>{gtd}</span>
    {cta && <span className="ml-2 text-[#FBF5B7] font-bold">{cta}</span>}
  </p>
);
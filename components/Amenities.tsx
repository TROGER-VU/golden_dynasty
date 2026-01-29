// components/Amenities.tsx
"use client";
import { motion } from "framer-motion";

const amenities = [
  { id: "01", title: "Play", desc: "High Stakes Rooms", img: "https://images.unsplash.com/photo-1519671482538-30715c715866?auto=format&fit=crop&q=80" },
  { id: "02", title: "Dine", desc: "Michelin Star Service", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
  { id: "03", title: "Relax", desc: "World Class Spa", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" },
  { id: "04", title: "Sleep", desc: "Presidential Suites", img: "https://images.unsplash.com/photo-1590490360182-c87295ecc059?auto=format&fit=crop&q=80" },
];

export default function Amenities() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-serif text-white mb-12 text-center">Experience The Lifestyle</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[500px] gap-2">
          {amenities.map((item) => (
            <motion.div
              key={item.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 h-[300px] md:h-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.img})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-amber-500 text-xs tracking-widest block mb-2">{item.id}</span>
                <h4 className="text-3xl font-serif text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                <div className="h-0 overflow-hidden group-hover:h-10 transition-all duration-300">
                  <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
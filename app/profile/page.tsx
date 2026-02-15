export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="relative bg-neutral-900/50 border border-[#BF953F]/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/5 blur-3xl rounded-full" />
          
          <div className="relative w-32 h-32 rounded-full border-4 border-[#BF953F] p-1">
            <div className="w-full h-full bg-neutral-800 rounded-full flex items-center justify-center text-4xl text-[#BF953F] font-serif">
              AS
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-serif font-black text-white tracking-tight">Akash Swarnkar</h1>
            <p className="text-[#BF953F] uppercase tracking-[0.3em] text-[10px] font-bold mt-1">Founding Member — Platinum Elite</p>
            <div className="flex gap-4 mt-6">
              <div className="bg-black/50 px-4 py-2 border border-white/5 rounded-md">
                <p className="text-[10px] text-gray-500 uppercase">Win Rate</p>
                <p className="text-white font-bold">64.2%</p>
              </div>
              <div className="bg-black/50 px-4 py-2 border border-white/5 rounded-md">
                <p className="text-[10px] text-gray-500 uppercase">Total Rake</p>
                <p className="text-white font-bold">₹1.2L</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-white font-serif text-xl mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#BF953F]"></span> Hand History
          </h2>
          <div className="space-y-4">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex justify-between items-center p-4 bg-neutral-900/30 border-l-2 border-[#BF953F] rounded-r-lg">
                 <div>
                   <p className="text-white text-sm font-bold tracking-wide">Texas Hold&apos;em — Table #09</p>
                   <p className="text-gray-500 text-[10px]">14 Feb 2026 • 10:45 PM</p>
                 </div>
                 <p className="text-green-500 font-bold">+ ₹12,500</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
}
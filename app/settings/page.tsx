export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif font-black text-white mb-2">Settings</h1>
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-12">Manage your Arena Preferences</p>

        <div className="space-y-10">
          {/* Section: Privacy */}
          <section>
            <h3 className="text-[#BF953F] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Security & Privacy</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <div>
                  <p className="text-white text-sm">Anonymous Mode</p>
                  <p className="text-gray-500 text-[10px]">Hide your real name from the leaderboard</p>
                </div>
                <div className="w-10 h-5 bg-[#BF953F] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full" />
                </div>
              </div>

              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <div>
                  <p className="text-white text-sm">Two-Factor Authentication</p>
                  <p className="text-gray-500 text-[10px]">Secure your wallet via SMS/Email</p>
                </div>
                <button className="text-[10px] font-bold text-[#BF953F] uppercase tracking-widest border border-[#BF953F]/30 px-4 py-2 hover:bg-[#BF953F] hover:text-black transition-all">
                  Enable
                </button>
              </div>
            </div>
          </section>

          {/* Section: Account */}
          <section>
            <h3 className="text-[#BF953F] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Account</h3>
            <button className="w-full bg-red-950/20 text-red-500 border border-red-900/30 p-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-900/40 transition-all">
              Delete Account & Clear Ledger
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
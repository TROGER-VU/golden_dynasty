"use client";

import { useEffect, useState } from "react";
import { fetchWithAuth } from "@/lib/api";
import { Copy, PlusCircle, ArrowRightLeft } from "lucide-react";

export default function DashboardPage() {
    const [wallet, setWallet] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem("user") || "{}");
                setUser(userData);

                const data = await fetchWithAuth("/wallet");
                setWallet(data);
            } catch (err) {
                console.error("Failed to fetch wallet contents", err);
            } finally {
                setLoading(false);
            }
        };
        fetchWallet();
    }, []);

    if (loading) {
        return <div className="h-full flex items-center justify-center"><p className="text-[#BF953F]">Loading Secure Vault...</p></div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            <header className="mb-8">
                <h1 className="text-3xl font-serif text-white font-black tracking-wider mb-2">Welcome, {user?.name || "Member"}</h1>
                <p className="text-[#FBF5B7]/60 text-sm uppercase tracking-[0.2em]">Manage your assets and chips</p>
            </header>

            {/* Wallet Card */}
            <div className="bg-neutral-900/50 border border-[#BF953F]/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF953F]/10 blur-3xl rounded-full" />

                <div className="flex justify-between items-start mb-12 relative z-10">
                    <div>
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Total Available Balance (INR)</p>
                        <h2 className="text-5xl font-serif text-gold-metallic font-black">₹{wallet?.balance || "0"}</h2>
                    </div>
                    <div className="text-right">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Active Casino Chips</p>
                        <h2 className="text-3xl font-serif text-white/90">◈ {wallet?.chips || "0"}</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                    <button className="flex items-center justify-center gap-2 bg-[#BF953F]/10 border border-[#BF953F]/30 hover:bg-[#BF953F]/20 text-[#FBF5B7] py-4 rounded-xl transition-all">
                        <PlusCircle size={18} />
                        <span className="text-sm font-bold tracking-wider uppercase">Add Funds</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-black/50 border border-white/10 hover:border-[#BF953F]/50 text-white py-4 rounded-xl transition-all">
                        <ArrowRightLeft size={18} />
                        <span className="text-sm font-bold tracking-wider uppercase">Exchange to Chips</span>
                    </button>
                </div>
            </div>

            {/* Recent Transactions Skeleton */}
            <div>
                <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#BF953F]"></span> Transaction History
                </h3>
                <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 text-center text-white/40 text-sm py-12">
                    No recent transactions found in your history.
                </div>
            </div>
        </div>
    );
}

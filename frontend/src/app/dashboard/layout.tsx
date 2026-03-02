"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Wallet, User, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, [router]);

    if (!isMounted) return null;

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-obsidian-dynasty text-white font-sans flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 bg-neutral-900/80 border-b md:border-b-0 md:border-r border-[#BF953F]/30 backdrop-blur-3xl flex flex-col">
                <div className="p-6 border-b border-[#BF953F]/20">
                    <h2 className="text-xl font-serif text-gold-metallic font-black tracking-wider">Golden Dynasty</h2>
                    <p className="text-[#FBF5B7]/60 text-[10px] uppercase tracking-[0.2em] mt-1">Club App</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => router.push("/dashboard")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === "/dashboard" ? "bg-[#BF953F]/10 text-[#BF953F] border border-[#BF953F]/20" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                    >
                        <Wallet size={18} />
                        <span>Wallet & Overview</span>
                    </button>
                    <button
                        onClick={() => router.push("/dashboard/profile")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === "/dashboard/profile" ? "bg-[#BF953F]/10 text-[#BF953F] border border-[#BF953F]/20" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                    >
                        <User size={18} />
                        <span>My Profile</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-[#BF953F]/20">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all border border-transparent"
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

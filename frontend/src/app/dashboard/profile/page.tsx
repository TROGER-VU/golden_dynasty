"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(userData);
    }, []);

    if (!user) {
        return null;
    }

    const initials = user?.name ? user.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() : "AA";

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-10">
            {/* Profile Header (Matched exactly to existing theme!) */}
            <div className="relative bg-neutral-900/50 border border-[#BF953F]/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/5 blur-3xl rounded-full" />

                <div className="relative w-32 h-32 rounded-full border-4 border-[#BF953F] p-1 flex-shrink-0">
                    <div className="w-full h-full bg-neutral-800 rounded-full flex items-center justify-center text-4xl text-[#BF953F] font-serif">
                        {initials}
                    </div>
                </div>

                <div className="text-center md:text-left flex-1 relative z-10">
                    <h1 className="text-3xl font-serif font-black text-white tracking-tight">{user.name || "Member Name"}</h1>
                    <p className="text-[#BF953F] uppercase tracking-[0.3em] text-[10px] font-bold mt-1">Role — {user.role || "Member"}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        <div className="bg-black/50 px-4 py-3 border border-white/5 rounded-md min-w-32">
                            <p className="text-[10px] text-gray-500 uppercase">Email Address</p>
                            <p className="text-white text-sm mt-1">{user.email}</p>
                        </div>
                        {user.aadhaar_number && (
                            <div className="bg-black/50 px-4 py-3 border border-white/5 rounded-md min-w-32">
                                <p className="text-[10px] text-gray-500 uppercase">Aadhaar (Last 4)</p>
                                <p className="text-white text-sm mt-1 font-mono">**** {user.aadhaar_number.slice(-4)}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Security & Settings Block */}
            <div>
                <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#BF953F]"></span> Account Security
                </h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-neutral-900/30 border-l-2 border-[#BF953F] rounded-r-lg">
                        <div>
                            <p className="text-white text-sm font-bold tracking-wide">Password Update</p>
                            <p className="text-gray-500 text-[10px] mt-1">Last changed: Never</p>
                        </div>
                        <button className="text-[#BF953F] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

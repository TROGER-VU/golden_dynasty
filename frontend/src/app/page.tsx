"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaar_number: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-obsidian-dynasty flex items-center justify-center p-6 bg-sheen border-gold-metallic">
      <div className="w-full max-w-md bg-neutral-900/80 border border-[#BF953F]/30 p-8 rounded-2xl backdrop-blur-3xl shadow-[0_0_40px_rgba(191,149,63,0.1)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-900/5 blur-3xl rounded-full" />

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif text-gold-metallic font-black tracking-wider mb-2">Golden Dynasty</h1>
            <p className="text-[#FBF5B7]/60 text-xs uppercase tracking-[0.3em]">Exclusive Membership Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-white/70 mb-1 text-xs uppercase tracking-widest">Full Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-[#BF953F]/20 rounded-md p-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1 text-xs uppercase tracking-widest">Mobile Number</label>
                  <input
                    name="mobile"
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-[#BF953F]/20 rounded-md p-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1 text-xs uppercase tracking-widest">Aadhaar Number</label>
                  <input
                    name="aadhaar_number"
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-[#BF953F]/20 rounded-md p-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-white/70 mb-1 text-xs uppercase tracking-widest">Email Address</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#BF953F]/20 rounded-md p-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-1 text-xs uppercase tracking-widest">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#BF953F]/20 rounded-md p-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-xs text-center font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gold-metallic text-black font-bold py-3 uppercase tracking-widest rounded-md hover:opacity-90 transition-opacity mt-6 shadow-[0_4px_15px_rgba(191,149,63,0.3)] disabled:opacity-50"
            >
              {isLoading ? "Authenticating..." : (isLogin ? "Enter Dynasty" : "Request Membership")}
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-white/50">
            <button
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="hover:text-[#BF953F] transition-colors uppercase tracking-widest underline underline-offset-4"
            >
              {isLogin ? "Join the Society" : "Already a Member? Enter"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

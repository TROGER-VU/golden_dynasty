import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Golden Dynasty",
  description: "High stakes. Higher standards. Join the world's most exclusive poker society for online precision and luxury live events.",
  keywords: ["Poker", "High Stakes", "Golden Dynasty", "Tournament", "Online Gaming"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} font-sans antialiased bg-[#050505] text-white selection:bg-amber-500/30 selection:text-amber-200`}
      >
        {children}
      </body>
    </html>
  );
}
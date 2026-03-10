import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "iconify-icon";


import Navbar from "@/components/ui/navbar";
import LandingPage from "@/components/landing/landingPage";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MVP Building Beginner Masterclass | Dalmas",
  description: "Learn how to go from idea to MVP to first users with practical execution skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[#0A0A0A] text-zinc-400 selection:bg-zinc-800 selection:text-zinc-200`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}

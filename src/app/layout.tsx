"use client";

import { Host_Grotesk } from "next/font/google";

import { Header } from "@/components/Menu/Header";

import { Providers } from "./providers";

import "./globals.css";

const hostGrotesque = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hostGrotesque.className}>
      <body className="antialiased relative overflow-x-hidden">
        <div className="fixed top-[-20%] left-[-20%] w-[600px] h-[600px] bg-purple-700 blur-3xl opacity-15 rounded-full z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 blur-3xl opacity-15 rounded-full z-0" />
        <Header />
        <div className="pt-30">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

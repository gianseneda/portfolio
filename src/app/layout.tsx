"use client";

import { Host_Grotesk } from "next/font/google";

import { Providers } from "./providers";

import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hostGrotesk.className}>
      <body className="antialiased relative overflow-x-hidden bg-[#0a0a0a]">
        <div className="fixed top-[-20%] left-[-20%] w-[600px] h-[600px] bg-purple-700 blur-3xl opacity-15 rounded-full z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 blur-3xl opacity-15 rounded-full z-0" />
        <div className="pt-30">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

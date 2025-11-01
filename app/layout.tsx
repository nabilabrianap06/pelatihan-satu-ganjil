// File: app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabil Abrian Aryo Prabowo - Portfolio",
  description: "Portfolio of Nabil Abrian Aryo Prabowo, an Information Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ... (sisa kode body Anda sudah benar) ... */}
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
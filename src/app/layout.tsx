import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karhuno AI",
  description: "Karhuno AI - Your AI Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 min-h-screen pt-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

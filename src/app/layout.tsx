import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
      <body className={`${montserrat.variable} ${roboto.variable} font-montserrat bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 min-h-screen pt-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

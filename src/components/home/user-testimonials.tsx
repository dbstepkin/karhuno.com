"use client";

import { motion } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

// Karhuno AI brand color palette
const brandColors = [
  "bg-gradient-to-br from-[#a974ff] to-[#679eff]", // purple to blue
  "bg-[#f7f4ff]", // light purple
  "bg-[#edf0ff]", // light blue
  "bg-[#e0e7ff]", // blue-100
  "bg-[#ede9fe]", // purple-100
  "bg-[#c7d2fe]", // blue-200
  "bg-[#a5b4fc]", // blue-300
  "bg-[#ddd6fe]", // purple-200
  "bg-[#f1f5f9]", // gray-100
];
const avatarColors = [
  "bg-[#a974ff]", // purple
  "bg-[#679eff]", // blue
  "bg-[#7c3aed]", // deep purple
  "bg-[#2563eb]", // deep blue
  "bg-[#818cf8]", // blue-400
  "bg-[#a5b4fc]", // blue-300
  "bg-[#c7d2fe]", // blue-200
  "bg-[#ddd6fe]", // purple-200
];

const reviews = [
  {
    quote: "Karhuno helps us act on buying intent in real time. I don’t waste hours on generic lists anymore — now I get warm leads based on actual signals.",
    name: "Marco Rossi",
    role: "Business Development Manager @ LeadSphere",
    image: "/marco rossi .jpg"
  },
  {
    quote: "I was surprised by the precision. It’s not just keywords — it’s context. Karhuno surfaces leads that are 10x more relevant than what we used to get from SalesNav.",
    name: "Sarah Johnson",
    role: "Head of Sales Enablement @ Innovtech Group",
    image: "/sarahfoto.jpeg"
  },
  {
    quote: "Finally a platform that connects real company news with verified contacts. We’ve booked 3 demos in the first week — without scraping anything.",
    name: "Luca Moretti",
    role: "SDR Team Lead @ Nexora Systems",
    image: "/luca moretti.jpeg"
  }
];

// Gradient border utility
function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[#a974ff] to-[#679eff] p-[2px] rounded-2xl">
      <div className="bg-white rounded-[15px] h-full w-full">{children}</div>
    </div>
  );
}

function TopPickBadge() {
  return (
    <span className="absolute top-4 right-4 z-10 px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#a974ff] to-[#679eff] text-white shadow-md animate-pulse">
      Top pick
    </span>
  );
}

export default function UserTestimonials() {
  const [current, setCurrent] = useState(0);

  // Clean up dashes from quotes for a smoother look
  const cleanQuote = (quote: string) => quote.replace(/—/g, "");

  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((current + 1) % reviews.length);

  return (
    <section id="after-comparison" className="py-24 relative overflow-hidden before:-z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-200/80 before:via-pink-200/60 before:to-purple-200/80 before:animate-gradient-shift before:opacity-75 flex flex-col items-center justify-center min-h-[400px]">
      {/* Navigation arrows - left */}
      <button
        onClick={prev}
        className="absolute left-0 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#a974ff] to-[#679eff] flex items-center justify-center text-white text-3xl shadow-lg hover:scale-105 transition-all z-20 focus:outline-none px-4 md:px-8"
        aria-label="Previous review"
      >
        &#8592;
      </button>
      {/* Navigation arrows - right */}
      <button
        onClick={next}
        className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#a974ff] to-[#679eff] flex items-center justify-center text-white text-3xl shadow-lg hover:scale-105 transition-all z-20 focus:outline-none px-4 md:px-8"
        aria-label="Next review"
      >
        &#8594;
      </button>
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent drop-shadow-sm">What our users are saying</h2>
        </div>
        <div className="relative w-full flex flex-col items-center">
          <div className="text-center w-full flex flex-col items-center">
            <div className="text-[1.6rem] sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-10 leading-snug max-w-2xl mx-auto drop-shadow-sm" style={{letterSpacing: '-0.01em'}}>
              “{cleanQuote(reviews[current].quote)}”
            </div>
            <div className="flex flex-col items-center gap-0.5 mb-8 w-full">
              <Image src={reviews[current].image} alt={reviews[current].name} width={72} height={72} className="rounded-full object-cover shadow-lg border-4 border-white mx-auto" />
              <div className="font-bold text-lg text-gray-900 mt-4 mb-1 text-center">{reviews[current].name}</div>
              <div className="text-gray-700 text-sm text-center font-normal" style={{fontWeight: 400}}>{reviews[current].role}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            {reviews.map((_, idx) => (
              <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#a974ff]' : 'bg-gray-300'}`}></span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .text-[1.6rem] {
            font-size: 1.1rem;
          }
          .md\\:text-4xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
} 
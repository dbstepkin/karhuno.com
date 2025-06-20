"use client";
// REACT
import type React from "react";

import { useState, useEffect } from "react";
import { Montserrat, Roboto } from "next/font/google";

// COMPONENTS
import WhatYouGet from "@/components/home/what-you-get";
import CaseStudies from "@/components/home/case-studies";
import Automation from "@/components/home/automation";
import ContactCarousel from "@/components/home/contact-carousel";
import ComparisonTable from "@/components/home/comparison-table";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SignalCarousel from "@/components/home/signal-carousel";
import HowItWorks from "@/components/home/how-it-works";

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

const placeholderTexts = [
  "European energy companies working with startups",
  "Companies announcing warehouse launch plans",
  "Companies developing internal entrepreneurship",
];

export default function Home() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animatePlaceholder = () => {
      const currentText = placeholderTexts[placeholderIndex];

      if (!isDeleting) {
        if (placeholder.length < currentText.length) {
          setPlaceholder(currentText.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 12.5);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        } else {
          setPlaceholder(placeholder.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 2);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 20.5);
    return () => clearTimeout(timeout);
  }, [placeholder, placeholderIndex, isDeleting]);

  return (
    <>
      <header className="relative overflow-hidden mt-12">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 max-w-4xl ${roboto.className}`}>
            <span className="text-black">Stop Searching,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Start Selling</span>
            </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto text-center ${montserrat.className}`}>
            Find real-time market signals for B2B companies with unparalleled precision. Transforms thousands of data points into sales wins.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl flex mb-8">
            <input
                  type="text"
              placeholder={placeholder || "Companies developing internal entreprene"}
              className={`flex-1 rounded-l-full px-6 py-3 text-gray-900 border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
            />
            <button 
                onClick={() => window.location.href = '/early-access'}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-r-full px-6 py-3 font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Find
            </button>
          </div>

          {/* Try for free button */}
          <button 
            onClick={() => window.location.href = '/early-access'}
            className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
          >
            Try for free
          </button>
        </div>
      </header>

      <WhatYouGet />
      <SignalCarousel />
      <HowItWorks />
      <CaseStudies id="case-studies" />
      <Automation />
      <ComparisonTable />
      <Footer />
    </>
  );
}

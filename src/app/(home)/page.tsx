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
import UserTestimonials from "@/components/home/user-testimonials";
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
            We spot every mention that matters and turn it into a sales-ready contact
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
          <div className="flex flex-col items-center">
            <button 
              onClick={() => window.location.href = '/early-access'}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
            >
              Try for free
            </button>
            <span className="text-xs text-gray-400 mt-2">Start your free trial — no payment needed.</span>
          </div>
        </div>
      </header>

      {/* Real results from real outreach section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="text-black">Real results from real </span>
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">outreach</span>
          </h2>
          
          {/* Single column layout */}
          <div className="space-y-12">
            {/* LinkedIn Block */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Chart 1 */}
              <div className="flex-1">
                <div className="w-full h-48 lg:h-64 bg-gray-100 border-2 border-purple-300 rounded-2xl overflow-hidden">
                  <img 
                    src="/heyreachchart.jpeg" 
                    alt="Heyreach Chart" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* LinkedIn Content */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                  Listen to your prospects on LinkedIn
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#502AFB] to-[#6B46C1] bg-clip-text text-transparent mr-2">
                      61.7%
                    </span>
                    <span className="text-base md:text-lg text-black">
                      reply rate on LinkedIn
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#502AFB] to-[#6B46C1] bg-clip-text text-transparent mr-2">
                      5×
                    </span>
                    <span className="text-base md:text-lg text-black">
                      faster to book qualified meetings
                    </span>
                  </div>
                </div>
                {/* Campaign note */}
                <div className="flex items-center justify-end mt-auto">
                  <span className="text-xs text-gray-500 mr-1">🤝</span>
                  <div className="w-16 h-5 bg-gray-100 rounded border border-gray-200 flex items-center justify-center mr-2">
                    <span className="text-xs text-gray-600 font-medium">Heyreach</span>
                  </div>
                  <span className="text-xs text-gray-500">Campaign launched using Heyreach</span>
                </div>
              </div>
            </div>

            {/* Cold Email Block */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Cold Email Content */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                  Listen to buying signals from real companies
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#502AFB] to-[#6B46C1] bg-clip-text text-transparent mr-2">
                      24.36%
                    </span>
                    <span className="text-base md:text-lg text-black">
                      reply rate on cold emails
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#502AFB] to-[#6B46C1] bg-clip-text text-transparent mr-2">
                      10h
                    </span>
                    <span className="text-base md:text-lg text-black">
                      saved weekly by automating research & prospecting
                    </span>
                  </div>
                </div>
                {/* Campaign note */}
                <div className="flex items-center justify-end mt-auto">
                  <span className="text-xs text-gray-500 mr-1">🤝</span>
                  <div className="w-16 h-5 bg-gray-100 rounded border border-gray-200 flex items-center justify-center mr-2">
                    <span className="text-xs text-gray-600 font-medium">Success AI</span>
                  </div>
                  <span className="text-xs text-gray-500">Campaign launched using Success AI</span>
                </div>
              </div>
              {/* Chart 2 */}
              <div className="flex-1">
                <div className="w-full h-48 lg:h-64 bg-gray-100 border-2 border-dashed border-blue-300 rounded-2xl flex items-center justify-center text-gray-400 text-lg">
                  {/* TODO: Insert Chart 2 here */}
                  Chart 2
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center py-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want results like these?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start tracking the signals that matter.
            </p>
            <button 
              onClick={() => window.location.href = '/early-access'}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      <WhatYouGet />
      <SignalCarousel />
      <HowItWorks />
      <CaseStudies id="case-studies" />
      <Automation />
      <ComparisonTable />
      <UserTestimonials />
      <Footer />
    </>
  );
}

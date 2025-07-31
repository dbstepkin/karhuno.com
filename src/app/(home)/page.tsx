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
                onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-r-full px-6 py-3 font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Find
            </button>
          </div>

          {/* Try for free button */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Try for free
              </button>
              <span className={`text-gray-500 ${montserrat.className}`}>or</span>
              <button 
                onClick={() => window.open('https://calendly.com/team-karhuno/30min', '_blank')}
                className={`bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25 ${montserrat.className}`}
              >
                Book a demo
              </button>
            </div>
            <span className="text-xs text-gray-400 mt-2">Start your free trial — no credit card needed.</span>
          </div>
        </div>
      </header>

      {/* Real results from real outreach section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="text-black">Real results from real </span>
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">outreach</span>
          </h2>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LinkedIn Results Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  LinkedIn Outreach
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">Listen to your prospects on LinkedIn</p>
              
              {/* Chart */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src="/heyreachchart.jpeg" 
                    alt="LinkedIn Outreach Results" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <span className="text-lg text-gray-700">Reply rate</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    61.7%
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <span className="text-lg text-gray-700">Meeting booking speed</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    5× faster
                  </span>
                </div>
              </div>
            </div>

            {/* Cold Email Results Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Cold Email Campaigns
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">Listen to buying signals from real companies</p>
              
              {/* Chart */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden border border-blue-200">
                  <img 
                    src="/graficosuccessai.png" 
                    alt="Cold Email Results" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <span className="text-lg text-gray-700">Reply rate</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    24.36%
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <span className="text-lg text-gray-700">Time saved weekly</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    10h
                  </span>
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
            <p className="text-sm text-[#71717A] mt-3 text-center">
              No credit card required
            </p>
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

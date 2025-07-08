"use client";

import { FileText, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export default function HowItWorks() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLinkedInImageIndex, setCurrentLinkedInImageIndex] = useState(0);
  
  const deepResearchImages = [
    { src: "/imag1deep.png", alt: "Deep Research Interface 1" },
    { src: "/image2deep.png", alt: "Deep Research Interface 2" },
    { src: "/image3deep.png", alt: "Deep Research Interface 3" }
  ];

  const linkedInTrackerImages = [
    { src: "/linkedin tracker image 1.png", alt: "LinkedIn Tracker Interface 1" },
    { src: "/linkedin tracker image 2.png", alt: "LinkedIn Tracker Interface 2" },
    { src: "/linkedin tracker 3.png", alt: "LinkedIn Tracker Interface 3" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % deepResearchImages.length);
    }, 3000); // Cambia ogni 3 secondi

    return () => clearInterval(interval);
  }, [deepResearchImages.length]);

  useEffect(() => {
    const linkedInInterval = setInterval(() => {
      setCurrentLinkedInImageIndex((prev) => (prev + 1) % linkedInTrackerImages.length);
    }, 3500); // Cambia ogni 3.5 secondi (leggermente diverso per varietà)

    return () => clearInterval(linkedInInterval);
  }, [linkedInTrackerImages.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50/50 via-white to-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${roboto.className}`}
        >
          <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
            How It Works
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 gap-y-8 md:gap-y-0 max-w-6xl mx-auto items-start">
          {/* Corporate News Search Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f4efff 0%, #ffffff 100%)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate News Search</h3>
                  <p className="text-gray-700">
                    Find companies based on recent news, signals, and events — just type what you're looking for.
                  </p>
                </div>
              </div>

              {/* Step 1 - What kind of company */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    1
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">What kind of company are you looking for?</h4>
                    <p className="text-gray-600 text-sm mb-3">Specify the type of business or sector.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <input 
                        type="text" 
                        placeholder="e.g. IT companies in Europe"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="What kind of company are you looking for"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 - What happened */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    2
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">What kind of news or event?</h4>
                    <p className="text-gray-600 text-sm mb-3">Write the signal you're searching for.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="e.g. raised Series A funding, new office, hiring"
                        className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="What kind of news or event"
                      />
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <span>💡</span>
                        <span>AI refines your input automatically.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Where */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    3
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Where did it happen?</h4>
                    <p className="text-gray-600 text-sm mb-3">Optional — add countries or regions to narrow your search.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <input 
                        type="text" 
                        placeholder="e.g. Germany, Netherlands"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="Where did it happen"
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">🌍 Global</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 - Launch search */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    4
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-center gap-3 mt-6 mb-8">
                      <button 
                        onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg min-h-[48px] md:min-h-[44px] w-full md:w-auto"
                      >
                        Search now
                      </button>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1">
                        <span>🧠</span>
                        <span>AI-powered search</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-copy */}
              <div className="mt-auto pt-4">
                <p className="text-[#C7BFFF] text-sm italic pl-4">
                  "You can describe your ICP in natural language — no setup required."
                </p>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Tracker Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f4efff 0%, #ffffff 100%)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Linkedin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Tracker</h3>
                  <p className="text-gray-700">
                    Find contacts based on LinkedIn activity — posts, keywords, and commenters.
                  </p>
                </div>
              </div>

              {/* Step 1 - What kind of post */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    1
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">What kind of post are you tracking?</h4>
                    <p className="text-gray-600 text-sm mb-3">Define the topic or keywords used in LinkedIn posts.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <input 
                        type="text" 
                        placeholder="e.g. hiring SDRs in the US"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="What kind of post are you tracking"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 - Who posted or commented */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    2
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Who posted or commented?</h4>
                    <p className="text-gray-600 text-sm mb-3">Use filters to include or exclude job titles, seniority, or industry.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <input 
                        type="text" 
                        placeholder="e.g. VP of Sales, exclude recruiters"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="Who posted or commented"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3 - Which company or sector */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    3
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Which company or sector? (Optional)</h4>
                    <p className="text-gray-600 text-sm mb-3">Limit to certain industries or companies.</p>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <input 
                        type="text" 
                        placeholder="e.g. SaaS companies, Mid-market"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                        aria-label="Which company or sector"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4 - Launch search */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-700 text-base md:text-sm font-semibold">
                    4
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-center gap-3 mt-6 mb-8">
                      <button 
                        onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg min-h-[48px] md:min-h-[44px] w-full md:w-auto"
                      >
                        Search now
                      </button>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1">
                        <span>🧠</span>
                        <span>AI-enhanced filtering</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-copy */}
              <div className="mt-auto pt-4">
                <p className="text-[#C7BFFF] text-sm italic pl-4">
                  "Karhuno finds LinkedIn signals daily — so you don't have to scroll for hours."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
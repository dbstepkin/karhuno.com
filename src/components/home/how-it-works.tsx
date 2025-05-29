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
          className={`text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 ${roboto.className}`}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Deep Research Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Research</h3>
                  <p className="text-gray-700">
                    Discover companies with real buying signals from thousands of articles, news, tenders, and more.
                  </p>
                </div>
              </div>

              <div className="space-y-4 min-h-[120px] flex flex-col justify-between">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                    1
                  </span>
                  <p className="text-gray-800 leading-relaxed">
                    Submit your Ideal Customer Profile (ICP) or buying signal in plain language.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                    2
                  </span>
                  <p className="text-gray-800 leading-relaxed">
                    Select search period and depth — define how far back and how many articles to analyze.
                  </p>
                </div>
              </div>

              {/* Interactive Image Carousel for Deep Research */}
              <div className="flex justify-center mt-6">
                <div className="relative w-full max-w-[600px] h-[300px] rounded-xl overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ y: -300, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 300, opacity: 0 }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={deepResearchImages[currentImageIndex].src}
                        alt={deepResearchImages[currentImageIndex].alt}
                        fill
                        priority
                        className="object-contain p-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {deepResearchImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-purple-600 scale-125' 
                            : 'bg-purple-300 hover:bg-purple-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mt-6">
                <h4 className="text-purple-800 font-semibold mb-1">Outcome:</h4>
                <p className="text-purple-700 text-sm">
                  Get a list of companies matching your ICP, each with proof links to verified sources.
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
            className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Linkedin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Tracker</h3>
                  <p className="text-gray-700">
                    Track live LinkedIn posts and comments from key decision-makers, applying unlimited filters.
                  </p>
                </div>
              </div>

              <div className="space-y-4 min-h-[120px] flex flex-col justify-between">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                    1
                  </span>
                  <p className="text-gray-800 leading-relaxed">
                    Enter keywords describing topics or roles you want to track.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                    2
                  </span>
                  <p className="text-gray-800 leading-relaxed">
                    Apply precise filters by role, company attributes, and post content to narrow results.
                  </p>
                </div>
              </div>

              {/* Interactive Image Carousel for LinkedIn Tracker */}
              <div className="flex justify-center mt-6">
                <div className="relative w-full max-w-[600px] h-[300px] rounded-xl overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLinkedInImageIndex}
                      initial={{ y: -300, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 300, opacity: 0 }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={linkedInTrackerImages[currentLinkedInImageIndex].src}
                        alt={linkedInTrackerImages[currentLinkedInImageIndex].alt}
                        fill
                        priority
                        className="object-contain p-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation dots for LinkedIn Tracker */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {linkedInTrackerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentLinkedInImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentLinkedInImageIndex 
                            ? 'bg-purple-600 scale-125' 
                            : 'bg-purple-300 hover:bg-purple-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mt-6">
                <h4 className="text-purple-800 font-semibold mb-1">Outcome:</h4>
                <p className="text-purple-700 text-sm">
                  Receive verified contacts linked to live posts and comments, with full post context.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
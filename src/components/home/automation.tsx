"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Users, ArrowDown, ChevronRight, Mail, ExternalLink, Zap, Globe, Target, TrendingUp, BarChart3, Building2, Link2, Filter, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

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

export default function Automation() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showValidationError, setShowValidationError] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [linkedinTypingIndex, setLinkedinTypingIndex] = useState(0);
  const [linkedinCurrentText, setLinkedinCurrentText] = useState("");
  const [linkedinIsDeleting, setLinkedinIsDeleting] = useState(false);

  const icpExamples = [
    "B2B SaaS raising funds in the UK",
    "Companies hiring in Berlin", 
    "Firms opening offices in Milan"
  ];

  const linkedinExamples = [
    "CEO posting about hiring challenges",
    "LinkedIn post about team expansion",
    "Posts mentioning 'we're hiring' from CTOs",
    "Company growth announcements",
    "Product launch celebrations"
  ];

  // Invalid ICP patterns to detect
  const invalidPatterns = [
    /looking for.*CRM/i,
    /unhappy with.*software/i,
    /need.*solution/i,
    /want.*help/i,
    /searching for.*tool/i,
    /dissatisfied with/i,
    /problems with/i,
    /struggling with/i
  ];

  // Correct ICP examples for suggestions
  const correctExamples = [
    "Companies expanding to France",
    "Startups raising Series A in the UK", 
    "SaaS hiring Sales Directors in Germany"
  ];

  // Check if current text contains invalid patterns
  const isInvalidICP = (text: string) => {
    return invalidPatterns.some(pattern => pattern.test(text));
  };

  // Handle clicking on correct example
  const handleExampleClick = (example: string) => {
    setCurrentText(example);
    setShowValidationError(false);
  };

  // Fixed Deep Signal Search typing effect
  useEffect(() => {
    const currentExample = icpExamples[typingIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentExample.length) {
          setCurrentText(currentExample.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % icpExamples.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex, icpExamples]);

  // Check for invalid ICP when text changes
  useEffect(() => {
    if (currentText.length > 20 && isInvalidICP(currentText)) {
      setShowValidationError(true);
    } else {
      setShowValidationError(false);
    }
  }, [currentText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Fixed LinkedIn typing effect
  useEffect(() => {
    const currentExample = linkedinExamples[linkedinTypingIndex];
    
    const timer = setTimeout(() => {
      if (!linkedinIsDeleting) {
        if (linkedinCurrentText.length < currentExample.length) {
          setLinkedinCurrentText(currentExample.slice(0, linkedinCurrentText.length + 1));
        } else {
          setTimeout(() => setLinkedinIsDeleting(true), 2000);
        }
      } else {
        if (linkedinCurrentText.length > 0) {
          setLinkedinCurrentText(linkedinCurrentText.slice(0, -1));
        } else {
          setLinkedinIsDeleting(false);
          setLinkedinTypingIndex((prev) => (prev + 1) % linkedinExamples.length);
        }
      }
    }, linkedinIsDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [linkedinCurrentText, linkedinIsDeleting, linkedinTypingIndex, linkedinExamples]);

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#F9F9FF' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}
            style={{ color: '#202040' }}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Two engines. One goal.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${montserrat.className}`}
            style={{ color: '#555A77' }}
          >
            Automated lead discovery from signals and LinkedIn — all in one platform.
          </motion.p>
        </div>

        {/* Two Column Layout with Background Differentiation */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden lg:grid-rows-[auto_1fr_auto]">
          
          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-10 hidden lg:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>
          </div>

          {/* LEFT COLUMN - Deep Signal Search (Lavender Background) */}
          <div className="lg:col-start-1 lg:row-start-1 lg:row-end-4 p-8 lg:p-12 flex flex-col relative" style={{ backgroundColor: 'rgba(123, 47, 247, 0.02)' }}>
            {/* Left Column Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-8 flex-shrink-0"
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${roboto.className}`} style={{ color: '#202040' }}>
                From idea{" "}
                <span style={{ color: '#7B2FF7' }}>→</span>{" "}
                to signal{" "}
                <span style={{ color: '#7B2FF7' }}>→</span>{" "}
                to deal
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="w-8 h-0.5 bg-purple-300"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <div className="w-8 h-0.5 bg-purple-300"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </motion.div>

            {/* Steps Container */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Step 1: Just say what you're looking for */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(123, 47, 247, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                    >
                      1
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      Just say what you're looking for
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    No complex filters or setup. Describe your ideal customer in plain language.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4" style={{ color: '#7B2FF7' }} />
                    <span className={`text-xs font-medium ${montserrat.className}`} style={{ color: '#555A77' }}>
                      Describe your ideal customer
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className={`text-sm md:text-base min-h-[1.5rem] ${montserrat.className}`} style={{ color: '#202040' }}>
                      {currentText}
                      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} style={{ color: '#7B2FF7' }}>
                        |
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  animate={{ y: [0, 5, 0] }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                >
                  <ArrowDown className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Step 2: AI validates and detects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(123, 47, 247, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                    >
                      2
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      AI validates and searches
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Our AI validates your input, detects weak signals, and returns only verified results — with source links.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm" style={{ color: '#7B2FF7' }}>
                  <BarChart3 className="w-4 h-4" />
                  <span className={`font-medium ${montserrat.className}`}>2,500+ articles scanned per query</span>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  animate={{ y: [0, 5, 0] }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                >
                  <ArrowDown className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Step 3: You get verified company signals */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(123, 47, 247, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                    >
                      3
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      You get verified company signals
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Company names, context, proof links — ready to qualify.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm" style={{ color: '#7B2FF7' }}>
                  <CheckCircle className="w-4 h-4" />
                  <span className={`font-medium ${montserrat.className}`}>Verified buying signals with source proof</span>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center pt-8 flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 ${montserrat.className}`}
                >
                  Try Signal Search
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400 mt-2">14-day free access. Cancel anytime, no card upfront.</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - LinkedIn Tracker (Light Blue Background) */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-end-4 p-8 lg:p-12 flex flex-col relative" style={{ backgroundColor: 'rgba(79, 172, 254, 0.02)' }}>
            {/* Right Column Header */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-8 flex-shrink-0"
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${roboto.className}`} style={{ color: '#202040' }}>
                From post{" "}
                <span style={{ color: '#4FACFE' }}>→</span>{" "}
                to profile{" "}
                <span style={{ color: '#4FACFE' }}>→</span>{" "}
                to outreach
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-8 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
            </motion.div>

            {/* Steps Container */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Step 1: Find signals in LinkedIn posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(79, 172, 254, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #4FACFE, #7B2FF7)' }}
                    >
                      1
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      Find signals in LinkedIn posts
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Enter keywords or paste LinkedIn post URLs. Target specific roles, companies, and content themes.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Link2 className="w-4 h-4" style={{ color: '#4FACFE' }} />
                    <span className={`text-xs font-medium ${montserrat.className}`} style={{ color: '#555A77' }}>
                      Keywords or LinkedIn post URL
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className={`text-sm md:text-base min-h-[1.5rem] ${montserrat.className}`} style={{ color: '#202040' }}>
                      {linkedinCurrentText}
                      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} style={{ color: '#4FACFE' }}>
                        |
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  animate={{ y: [0, 5, 0] }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #4FACFE, #7B2FF7)' }}
                >
                  <ArrowDown className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Step 2: Smart filters. Only real leads. */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(79, 172, 254, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #4FACFE, #7B2FF7)' }}
                    >
                      2
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      Smart filters. Only real leads.
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    No noise — filters go beyond Sales Navigator. Works with keywords or commenters.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm" style={{ color: '#4FACFE' }}>
                  <Filter className="w-4 h-4" />
                  <span className={`font-medium ${montserrat.className}`}>Beyond Sales Navigator precision</span>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  animate={{ y: [0, 5, 0] }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(90deg, #4FACFE, #7B2FF7)' }}
                >
                  <ArrowDown className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Step 3: Get outreach-ready contacts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[200px] flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(79, 172, 254, 0.15)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(90deg, #4FACFE, #7B2FF7)' }}
                    >
                      3
                    </motion.div>
                    <h4 className={`text-lg md:text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                      Get outreach-ready contacts
                    </h4>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-4 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Enriched with verified email. Sent daily to your CRM.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#4FACFE' }}>
                    <Zap className="w-4 h-4" />
                    <span className={`font-medium ${montserrat.className}`}>Daily automated delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#4FACFE' }}>
                    <TrendingUp className="w-4 h-4" />
                    <span className={`font-medium ${montserrat.className}`}>60% reply rates with workflows</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center pt-8 flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 ${montserrat.className}`}
                >
                  Try LinkedIn Tracker
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400 mt-2">Test the platform first — no billing info asked.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
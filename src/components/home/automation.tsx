"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Users, ArrowDown, ChevronRight, Mail, ExternalLink, Zap, Globe, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export default function Automation() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showValidationError, setShowValidationError] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const icpExamples = [
    "B2B SaaS raising funds in the UK",
    "Companies hiring in Berlin", 
    "Firms opening offices in Milan"
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

  // Typing animation effect
  useEffect(() => {
    const currentIcp = icpExamples[typingIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentIcp.length) {
          setCurrentText(currentIcp.slice(0, currentText.length + 1));
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

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9F9FF' }}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-5xl font-bold mb-6 ${roboto.className}`}
            style={{ color: '#202040' }}
          >
            From idea{" "}
            <span style={{ color: '#7B2FF7' }}>→</span>{" "}
            to signal{" "}
            <span style={{ color: '#7B2FF7' }}>→</span>{" "}
            to deal
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${montserrat.className}`}
            style={{ color: '#555A77' }}
          >
            Karhuno AI turns vague ICPs into actionable company and contact data — fully automated and proven with source links.
          </motion.p>
        </div>

        {/* Step 1: Describe your ICP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-8"
          style={{ boxShadow: '0 0 12px rgba(123, 47, 247, 0.12)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
            >
              1
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
              Describe your ICP in plain language
            </h3>
          </div>
          
          <p className={`text-lg mb-6 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
            No filters. No setup. Just describe your ideal customer in plain language — like "B2B SaaS expanding to France" or "Companies hiring in Berlin."
          </p>
          
          <p className={`text-lg mb-6 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
            Karhuno's AI will help refine and validate your input to ensure it's search-ready — no guesswork required.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-5 h-5" style={{ color: '#7B2FF7' }} />
              <span className={`text-sm font-medium ${montserrat.className}`} style={{ color: '#555A77' }}>
                Enter your Ideal Customer Profile
              </span>
            </div>
            
            <div className="relative">
              <div className={`text-lg md:text-xl min-h-[2rem] ${montserrat.className}`} style={{ color: '#202040' }}>
                {currentText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} style={{ color: '#7B2FF7' }}>
                  |
                </span>
              </div>
            </div>
          </div>

          {/* Validation Error Message */}
          <AnimatePresence>
            {showValidationError && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, -10, 10, -10, 10, 0],
                        scale: [1, 1.1, 1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6, repeat: 1 }}
                      className="flex-shrink-0"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#DC2626' }}
                      >
                        <span className="text-white font-bold text-lg">❌</span>
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className={`text-red-700 font-medium mb-4 ${montserrat.className}`}>
                        Oops — this type of signal isn't trackable online. Try something that would generate public news, like office openings or new hires.
                      </p>
                      
                      <div className="space-y-3">
                        <p className={`text-sm font-medium ${montserrat.className}`} style={{ color: '#555A77' }}>
                          Try these instead:
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {correctExamples.map((example, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleExampleClick(example)}
                              className={`px-4 py-2 rounded-full border transition-all duration-200 ${montserrat.className}`}
                              style={{ 
                                background: 'linear-gradient(90deg, rgba(123, 47, 247, 0.1), rgba(79, 172, 254, 0.1))',
                                borderColor: '#7B2FF7',
                                color: '#7B2FF7'
                              }}
                            >
                              <span className="text-sm font-medium">{example}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            animate={{ scale: [1, 1.1, 1] }}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Step 2: Our AI understands and searches */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-8"
          style={{ boxShadow: '0 0 12px rgba(123, 47, 247, 0.12)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
            >
              2
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
              Our AI understands and searches
            </h3>
          </div>
          
          <p className={`text-lg mb-8 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
            Our AI understands your input in its original language and finds even the weakest online signals. It cuts through noise and surfaces only verified results — with proof.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            {/* Left Column - Animated Bar Chart */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className={`text-xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                  2,500+ articles scanned per query
                </h4>
                <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                  Our AI processes thousands of articles, reports, and news sources in real-time to identify relevant business signals.
                </p>
              </div>
              
              {/* Enhanced animated horizontal bars */}
              <div className="space-y-4">
                {[
                  { label: "News Articles", percentage: 85, delay: 0.8 },
                  { label: "Press Releases", percentage: 92, delay: 1.0 },
                  { label: "Company Reports", percentage: 78, delay: 1.2 },
                  { label: "Industry Sources", percentage: 88, delay: 1.4 }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${montserrat.className}`} style={{ color: '#202040' }}>
                        {item.label}
                      </span>
                      <span className={`text-sm font-medium ${montserrat.className}`} style={{ color: '#7B2FF7' }}>
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: item.delay, 
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="h-3 rounded-full relative overflow-hidden"
                        style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%"] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: item.delay + 1.5
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          style={{ width: "30%" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Multilingual Intelligence",
                  description: "Understands native language articles, press releases, and regional sources.",
                  delay: 1.0
                },
                {
                  icon: ExternalLink,
                  title: "Proof-backed Signals",
                  description: "Every company signal includes a verified source: article, press, or public report.",
                  delay: 1.2
                },
                {
                  icon: Search,
                  title: "Noise Filtering",
                  description: "Irrelevant content is filtered out. Only verified, business-relevant insights are returned.",
                  delay: 1.4
                },
                {
                  icon: FileText,
                  title: "Insight Summaries",
                  description: "Get English summaries of key points + company profiles with each result.",
                  delay: 1.6
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center space-y-3 cursor-pointer group"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(123, 47, 247, 0))',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 8px 25px rgba(123, 47, 247, 0.15))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(123, 47, 247, 0))';
                  }}
                >
                  <div className="flex justify-center">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2 relative overflow-hidden transition-all duration-300 group-hover:border-opacity-100"
                      style={{ 
                        borderColor: '#7B2FF7',
                        background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(79, 172, 254, 0.1))'
                      }}
                    >
                      <feature.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: '#7B2FF7' }} />
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(135deg, #7B2FF7, #4FACFE)' }}
                      />
                    </div>
                  </div>
                  
                  <h5 className={`font-bold text-base ${roboto.className}`} style={{ color: '#202040' }}>
                    {feature.title}
                  </h5>
                  
                  <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Centered callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-center py-6 px-8 rounded-xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.05), rgba(79, 172, 254, 0.05))',
              border: '1px solid rgba(123, 47, 247, 0.1)'
            }}
          >
            <p className={`text-lg font-medium ${montserrat.className}`} style={{ color: '#555A77' }}>
              Save time by getting all the insights you need — in one place.
            </p>
          </motion.div>
        </motion.div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Step 3: Enhanced with hover effects and tooltips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-8 relative"
          style={{ boxShadow: '0 0 12px rgba(123, 47, 247, 0.12)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
            >
              3
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold ${roboto.className}`} style={{ color: '#202040' }}>
              You get verified companies and contacts
            </h3>
          </div>
          
          <p className={`text-lg mb-2 leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
            Get verified companies and decision-makers ready for outreach. Each result includes source links, company summaries, and enriched contact data when available.
          </p>
          
          <p className={`text-lg mb-8 leading-relaxed font-medium ${montserrat.className}`} style={{ color: '#202040' }}>
            Everything you need to close faster — with proof, summaries, and real context.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Enhanced Company Results Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 border border-gray-100 cursor-pointer group"
              style={{ 
                boxShadow: '0 4px 12px rgba(123, 47, 247, 0.08)',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 47, 247, 0.08)';
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#7B2FF7', opacity: 0.1 }}
                >
                  <FileText className="w-4 h-4" style={{ color: '#7B2FF7' }} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                    TechCorp Milan
                  </h4>
                  <p className={`text-sm mb-3 ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Opening new European headquarters
                  </p>
                  <div 
                    className="flex items-center gap-2 text-sm mb-2 relative cursor-help"
                    style={{ color: '#7B2FF7' }}
                    onMouseEnter={() => setShowTooltip('source')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className={`${montserrat.className}`}>Source: Business Journal</span>
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {showTooltip === 'source' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg z-10 whitespace-nowrap"
                        >
                          <span className={montserrat.className}>Proof article with full verification</span>
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className={`text-xs ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Brief in English + Company summary available
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Contact Results Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 border border-gray-100 cursor-pointer group"
              style={{ 
                boxShadow: '0 4px 12px rgba(123, 47, 247, 0.08)',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 47, 247, 0.08)';
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#7B2FF7', opacity: 0.1 }}
                >
                  <Users className="w-4 h-4" style={{ color: '#7B2FF7' }} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${roboto.className}`} style={{ color: '#202040' }}>
                    Marco Rossi
                  </h4>
                  <p className={`text-sm mb-3 ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Operations Director • "Excited about our Milan expansion"
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="flex items-center gap-1 text-sm relative cursor-help"
                      onMouseEnter={() => setShowTooltip('email')}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Mail className="w-4 h-4" style={{ color: '#7B2FF7' }} />
                      <span className={`font-medium ${montserrat.className}`} style={{ color: '#7B2FF7' }}>
                        Verified email
                      </span>
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {showTooltip === 'email' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg z-10 whitespace-nowrap"
                          >
                            <span className={montserrat.className}>Deliverable address, validation checked</span>
                            <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#7B2FF7' }} />
                  </div>
                  <p className={`text-xs ${montserrat.className}`} style={{ color: '#555A77' }}>
                    Contextual quote + role-based enrichment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced 2x2 Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Search,
                title: "Smart Search",
                description: "Keywords or commenters (via LinkedIn post URL)",
                delay: 1.5
              },
              {
                icon: Target,
                title: "Precision Filters", 
                description: "Filter by job title, company type, or content attribute",
                delay: 1.6
              },
              {
                icon: Zap,
                title: "Automation",
                description: "New contacts daily + CRM integration",
                delay: 1.7
              },
              {
                icon: TrendingUp,
                title: "Conversion-Ready",
                description: "60%+ reply rates when synced with workflows",
                delay: 1.8
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-6 border border-gray-100 cursor-pointer group"
                style={{ 
                  boxShadow: '0 2px 8px rgba(123, 47, 247, 0.06)',
                  transition: 'box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(123, 47, 247, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(123, 47, 247, 0.06)';
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ 
                      borderColor: '#7B2FF7',
                      background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(79, 172, 254, 0.1))'
                    }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: '#7B2FF7' }} />
                  </div>
                  
                  <div>
                    <h5 className={`font-bold text-base mb-2 ${roboto.className}`} style={{ color: '#202040' }}>
                      {feature.title}
                    </h5>
                    <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#555A77' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.9 }}
            className={`text-center text-lg leading-relaxed font-medium ${montserrat.className}`} 
            style={{ color: '#202040' }}
          >
            Sell smarter, not harder. Get real leads — delivered daily.
          </motion.p>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center rounded-2xl p-12 text-white"
          style={{ background: 'linear-gradient(90deg, #7B2FF7, #4FACFE)' }}
        >
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
            All the insight. Zero manual work.
          </h3>
          
          <p className={`text-lg md:text-xl mb-8 opacity-90 leading-relaxed ${montserrat.className}`}>
            Start reaching out to companies that actually need what you're selling.
          </p>
          
          <Link
            href="/early-access"
            className={`inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20 ${montserrat.className}`}
            style={{ color: '#7B2FF7' }}
          >
            Discover your ICP's potential
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 
"use client";
// REACT
import type React from "react";

import { useState, useEffect } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import CanonicalHandler from "@/components/CanonicalHandler";

// COMPONENTS
import WhatYouGet from "@/components/home/what-you-get";
import CaseStudies from "@/components/home/case-studies";
import ContactCarousel from "@/components/home/contact-carousel";
import AIComparison from "@/components/home/ai-comparison";
import UserTestimonials from "@/components/home/user-testimonials";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SignalCarousel from "@/components/home/signal-carousel";
import HowKarhunoWorks from "@/components/home/how-karhuno-works";
import LinkedInChart from "@/components/home/linkedin-chart";
import ColdEmailChart from "@/components/home/cold-email-chart";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'arial'],
  preload: false
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: ['system-ui', 'arial'],
  preload: false
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
  
  // Email modal states
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    companyType: "",
    news: "",
    location: ""
  });
  const [errors, setErrors] = useState({
    companyType: false,
    news: false,
    location: false
  });

  // Email validation
  const isValidEmail = (email: string) => {
    const normalizedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(normalizedEmail);
  };

  // Handle email submission
  const handleEmailSubmit = async () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    setIsSubmitting(true);
    setEmailError(false);

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setShowFireworks(true);
        setTimeout(() => {
          setShowEmailModal(false);
          setShowSuccess(false);
          setShowFireworks(false);
          setEmail("");
          setIsSubmitting(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setEmailError(true);
      setIsSubmitting(false);
    }
  };

  // Handle email key down
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: false }));
  };

  // Handle form key down
  const handleKeyDown = (e: React.KeyboardEvent, field: string) => {
    if (e.key === 'Enter') {
      const nextField = field === 'companyType' ? 'news' : field === 'news' ? 'location' : null;
      if (nextField) {
        const nextInput = document.querySelector(`input[name="${nextField}"]`) as HTMLInputElement;
        nextInput?.focus();
      } else {
        handleFormSubmit();
      }
    }
  };

  // Handle form submission
  const handleFormSubmit = () => {
    const newErrors = {
      companyType: !formData.companyType.trim(),
      news: !formData.news.trim(),
      location: !formData.location.trim()
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      setShowEmailModal(true);
    }
  };

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
      <CanonicalHandler canonicalUrl="https://karhuno.com" />
      <Head>
        <title>Karhuno AI - B2B Sales Intelligence Platform | Real-Time Buyer Intent Signals</title>
        <meta
          name="description"
          content="Discover high-intent B2B prospects with Karhuno AI. Track LinkedIn conversations, corporate news, and competitor engagement to find companies actively seeking solutions. Start your free trial today."
        />
        <meta name="keywords" content="B2B sales, buyer intent, LinkedIn signals, corporate news, competitor monitoring, sales intelligence, lead generation" />
        <meta property="og:title" content="Karhuno AI - B2B Sales Intelligence Platform" />
        <meta property="og:description" content="Discover high-intent B2B prospects with real-time buyer intent signals. Track LinkedIn conversations, corporate news, and competitor engagement." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karhuno AI - B2B Sales Intelligence Platform" />
        <meta name="twitter:description" content="Discover high-intent B2B prospects with real-time buyer intent signals." />
        <link rel="canonical" href="https://karhuno.com" />
        <link rel="canonical" href="https://karhuno.com/" />
      </Head>
      <header className="relative overflow-hidden mt-12">
        {/* Main Content */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto min-h-[80vh] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Side - Heading */}
          <div className="flex-1 max-w-2xl pt-12 lg:pt-0">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center lg:text-left leading-tight ${roboto.className}`}>
              <span className="text-black">Stop Searching,</span>
              <br />
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Start Selling</span>
            </h1>

            <p className={`text-lg sm:text-xl md:text-2xl text-gray-500 mb-4 text-center lg:text-left ${montserrat.className}`}>
              Discover fresh buying signals matched with real, active contacts — updated daily.
            </p>
            
            <p className={`text-sm sm:text-base text-gray-400 mb-8 text-center lg:text-left ${montserrat.className}`}>
              🚀 Powered by real-time data
            </p>
          </div>

          {/* Right Side - Search Form */}
          <div className="flex-1 max-w-sm sm:max-w-md mx-auto lg:mx-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-4 sm:p-6 shadow-lg">
              <h2 className={`text-xl font-semibold text-gray-900 mb-1 text-center ${roboto.className}`}>
                Find corporate signals
              </h2>
              <p className={`text-xs text-gray-500 mb-6 text-center ${montserrat.className}`}>
                within a week
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                    What kind of company? <span className="text-xs italic text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="companyType"
                    value={formData.companyType}
                    onChange={(e) => handleInputChange('companyType', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'companyType')}
                    placeholder="e.g. IT company"
                    className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${errors.companyType ? 'border-red-500' : 'border-gray-200'} bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                    What news? <span className="text-xs italic text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="news"
                    value={formData.news}
                    onChange={(e) => handleInputChange('news', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'news')}
                    placeholder="e.g. announced new partnership"
                    className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${errors.news ? 'border-red-500' : 'border-gray-200'} bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                    Where? <span className="text-xs italic text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'location')}
                    placeholder="e.g. UK and California"
                    className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${errors.location ? 'border-red-500' : 'border-gray-200'} bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                  />
                </div>
              </div>
              
              <button
                onClick={handleFormSubmit}
                className={`w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Find warm leads
              </button>
            </div>
          </div>
        </div>
        
        {/* Trusted by Section */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto py-8">
          <div className="text-center mb-8">
            <p className={`text-sm font-medium text-gray-500 mb-8 ${montserrat.className}`}>
              Trusted by 500+ GTM Teams
            </p>
            
            {/* Logos Grid with Infinite Scroll */}
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
              <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60">
                <motion.div 
                  className="flex items-center gap-8 md:gap-12"
                  animate={{ x: [0, -800] }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {/* First Set */}
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-purple-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <circle cx="15" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 20 L20 20 M15 15 L15 25" stroke="currentColor" strokeWidth="2"/>
                      <text x="30" y="25" fontSize="10" fontWeight="600" fontFamily="Arial, sans-serif">NexTech</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <rect x="8" y="12" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 8 L14 12 M14 28 L14 32" stroke="currentColor" strokeWidth="2"/>
                      <text x="28" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">DataFlow</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-green-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <path d="M12 20 Q8 16 12 12 Q16 8 20 12 Q24 8 28 12 Q32 16 28 20 L12 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <text x="35" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">CloudSync</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-orange-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <polygon points="15,8 25,8 30,20 25,32 15,32 10,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="20" cy="20" r="3" fill="currentColor"/>
                      <text x="35" y="25" fontSize="8" fontWeight="600" fontFamily="Arial, sans-serif">ProVision</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-pink-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-pink-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <path d="M10 15 L20 15 L25 20 L20 25 L10 25 L5 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 10 L15 15 M15 25 L15 30" stroke="currentColor" strokeWidth="2"/>
                      <text x="32" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">TechFlow</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-cyan-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <circle cx="12" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="28" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M18 20 L22 20" stroke="currentColor" strokeWidth="2"/>
                      <text x="38" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">DataSync</text>
                    </svg>
                  </div>
                  
                  {/* Duplicate for seamless loop */}
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-purple-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <circle cx="15" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 20 L20 20 M15 15 L15 25" stroke="currentColor" strokeWidth="2"/>
                      <text x="30" y="25" fontSize="10" fontWeight="600" fontFamily="Arial, sans-serif">NexTech</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <rect x="8" y="12" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M14 8 L14 12 M14 28 L14 32" stroke="currentColor" strokeWidth="2"/>
                      <text x="28" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">DataFlow</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-green-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <path d="M12 20 Q8 16 12 12 Q16 8 20 12 Q24 8 28 12 Q32 16 28 20 L12 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <text x="35" y="25" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">CloudSync</text>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-24 h-12 flex-shrink-0 group cursor-pointer">
                    <svg className="w-full h-full text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-orange-500/50" viewBox="0 0 100 40" fill="currentColor">
                      <polygon points="15,8 25,8 30,20 25,32 15,32 10,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="20" cy="20" r="3" fill="currentColor"/>
                      <text x="35" y="25" fontSize="8" fontWeight="600" fontFamily="Arial, sans-serif">ProVision</text>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Real results from real outreach section - Modern SaaS Design */}
      <section className="relative w-full overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">Live Results</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Real Results. </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Signal-Driven Outreach
              </span>
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              See how real-time buying signals improve your reply rate, speed, and targeting.
            </p>
          </div>
          
          {/* Results Grid - Modern Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
            
            {/* LinkedIn Results Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white mb-2">LinkedIn Outreach</h3>
                    <p className="text-white/60">Listen to your prospects on LinkedIn</p>
                  </div>
                </div>
                
                {/* Chart Container */}
                <div className="relative z-10 mb-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <LinkedInChart />
                  </div>
                </div>
                
                {/* Metrics Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-white/60 text-sm mb-1">Reply Rate</div>
                    <div className="text-2xl font-bold text-white">61.7%</div>
                    <div className="text-green-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                      +12% vs industry
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-white/60 text-sm mb-1">Meeting Speed</div>
                    <div className="text-2xl font-bold text-white">5× faster</div>
                    <div className="text-blue-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Time to book
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cold Email Results Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Cold Email Campaigns</h3>
                    <p className="text-white/60">Listen to buying signals from real companies</p>
                  </div>
                </div>
                
                {/* Chart Container */}
                <div className="relative z-10 mb-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <ColdEmailChart />
                  </div>
                </div>
                
                {/* Metrics Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-white/60 text-sm mb-1">Reply Rate</div>
                    <div className="text-2xl font-bold text-white">24.36%</div>
                    <div className="text-green-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                      +8% vs industry
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-white/60 text-sm mb-1">Time Saved</div>
                    <div className="text-2xl font-bold text-white">10h</div>
                    <div className="text-blue-400 text-xs flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Weekly
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* CTA Section - Modern */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Want results like these?
                </h3>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Start tracking the signals that matter and transform your outreach campaigns
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                    className="group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <div className="flex items-center text-white/60 text-sm">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    7-day free trial • No credit card required
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center items-center space-x-8 text-white/50 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    SOC 2 Compliant
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    Money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatYouGet />
      <SignalCarousel />
      <HowKarhunoWorks />
      <CaseStudies id="case-studies" />
      <AIComparison />
      <UserTestimonials />
      <Footer />

      {/* Email Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Fireworks Effect */}
            {showFireworks && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ 
                      x: "50%", 
                      y: "50%", 
                      scale: 0,
                      opacity: 1 
                    }}
                    animate={{ 
                      x: `${50 + (Math.random() - 0.5) * 200}%`, 
                      y: `${50 + (Math.random() - 0.5) * 200}%`, 
                      scale: [0, 1.5, 0],
                      opacity: [1, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`spark-${i}`}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    initial={{ 
                      x: "50%", 
                      y: "50%", 
                      scale: 0,
                      opacity: 1 
                    }}
                    animate={{ 
                      x: `${50 + (Math.random() - 0.5) * 300}%`, 
                      y: `${50 + (Math.random() - 0.5) * 300}%`, 
                      scale: [0, 2, 0],
                      opacity: [1, 1, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full shadow-2xl mx-4"
            >
              {!showSuccess ? (
                <>
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center ${roboto.className}`}>
                    What email should we send the results to?
                  </h3>
                  
                  <div className="mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                      }}
                      onKeyDown={handleEmailKeyDown}
                      placeholder="your@email.com"
                      autoFocus
                      className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${emailError ? 'border-red-500' : 'border-gray-200'} bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2">Please enter a valid email address</p>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowEmailModal(false)}
                      className={`flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 ${montserrat.className}`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEmailSubmit}
                      disabled={!isValidEmail(email) || isSubmitting}
                      className={`flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${montserrat.className}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Find warm leads'}
                    </button>
                  </div>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-2xl font-bold text-gray-900 mb-4 ${roboto.className}`}
                  >
                    Request submitted!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-gray-600 ${montserrat.className}`}
                  >
                    Wait for the results email from us in 10-30 minutes!
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </>
  );
}

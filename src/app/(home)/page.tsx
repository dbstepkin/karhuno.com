"use client";
// REACT
import type React from "react";

import { useState, useEffect } from "react";
import { Montserrat, Roboto } from "@/lib/localFonts";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import CanonicalHandler from "@/components/CanonicalHandler";

// COMPONENTS
import InteractiveWorkflow from "@/components/home/interactive-workflow";
import CaseStudies from "@/components/home/case-studies";
import ContactCarousel from "@/components/home/contact-carousel";
import AIComparison from "@/components/home/ai-comparison";
import UserTestimonials from "@/components/home/user-testimonials";
import SignalCarousel from "@/components/home/signal-carousel";
import WhyKarhuno from "@/components/home/why-karhuno";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import HowKarhunoWorks from "@/components/home/how-karhuno-works";
import LinkedInChart from "@/components/home/linkedin-chart";
import ColdEmailChart from "@/components/home/cold-email-chart";
import TypewriterText from "@/components/home/TypewriterText";

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
    if (!email || typeof email !== 'string') return false;
    const normalizedEmail = email.trim();
    if (normalizedEmail.length === 0) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(normalizedEmail);
  };

  // Handle email submission
  const handleEmailSubmit = async () => {
    const trimmedEmail = email.trim();
    
    // Validate email format
    if (!trimmedEmail) {
      setEmailError(true);
      return;
    }
    
    if (!isValidEmail(trimmedEmail)) {
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
        body: JSON.stringify({ 
          email: trimmedEmail,
          companyType: formData.companyType,
          news: formData.news,
          location: formData.location
        }),
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
        // If API returns error, don't show email format error
        const errorData = await response.json().catch(() => ({}));
        console.error('Error submitting email:', errorData);
        // Don't set emailError for API errors, just log them
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      // Don't set emailError for network errors, just log them
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
        <title>Karhuno AI – Real-Time Buying Signals</title>
        <meta
          name="description"
          content="Track real-time buying intent across LinkedIn and the web. Get fresh leads matched to your ICP."
        />
        <meta name="keywords" content="buying signals, real-time intent, LinkedIn signals, lead generation, Karhuno AI" />

        {/* Open Graph */}
        <meta property="og:title" content="Karhuno AI – Real-Time Buying Signals" />
        <meta property="og:description" content="Track real-time buying intent across LinkedIn and the web. Get fresh leads matched to your ICP." />
        <meta property="og:image" content="https://karhuno.com/images/logonavbar.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karhuno.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karhuno AI – Real-Time Buying Signals" />
        <meta name="twitter:description" content="Track real-time buying intent across LinkedIn and the web. Get fresh leads matched to your ICP." />
        <meta name="twitter:image" content="https://karhuno.com/images/logonavbar.svg" />

        <link rel="canonical" href="https://karhuno.com/" />
      </Head>
      <header className="relative overflow-hidden mt-6">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-16 h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-[#a974ff]/25 via-[#679eff]/20 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-[-10%] h-72 w-72 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-[#679eff]/20 via-[#a974ff]/15 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto min-h-[80vh] pt-12 pb-14 md:pt-14 md:pb-16 flex flex-col items-center justify-center gap-5 md:gap-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_12px_36px_rgba(103,158,255,0.25)] text-[#a974ff] text-sm md:text-base font-semibold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a974ff] to-[#679eff] shadow-[0_0_10px_rgba(169,116,255,0.8)]" />
            AI-Powered Buying Signal Engine
          </div>
          <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.05] md:leading-[1.08] tracking-tight ${roboto.className}`}>
            <span className="text-black">Stop Searching,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Start Selling.
            </span>
          </h1>

          <p className={`text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed md:leading-8 tracking-tight ${montserrat.className}`}>
            Proof-backed buying signals for B2B teams selling globally, with real contacts updated in real time.
          </p>

          <div className="flex flex-col items-center gap-2">
            <button
              className={`group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#a974ff] to-[#679eff] text-white text-lg font-semibold shadow-[0_16px_42px_rgba(103,158,255,0.45)] hover:shadow-[0_20px_52px_rgba(103,158,255,0.55)] transition duration-200 flex items-center gap-3 ${montserrat.className}`}
            >
              <span>Start free trial</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition text-sm">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10h8m0 0-3-3m3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <span className={`text-xs text-gray-500 ${montserrat.className}`}>No card needed</span>

            {/* Trust badge area */}
            <div className="mt-3 inline-flex items-center gap-3 px-0 py-1 text-gray-600 text-sm md:text-base">
              <Image
                src="/tekpon-top-lead-generation.png"
                alt="Tekpon badge"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
              <span className="w-px h-6 bg-gray-300/80" />
              <span className="font-semibold text-gray-700">Trusted by 100+ sales teams</span>
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
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
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
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button 
                    onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                    className="group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://calendly.com/team-karhuno/30min', '_blank')}
                    className="group relative bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book a Demo
                    </span>
                  </button>
                </div>
                
                <div className="mt-6 flex justify-center items-center text-white/60 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    7 days moneyback guaranteed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <InteractiveWorkflow />
      <SignalCarousel />
      <WhyKarhuno />
      <UserTestimonials />
      <HowKarhunoWorks />
      <CaseStudies id="case-studies" />
      <AIComparison />
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
                      disabled={isSubmitting}
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

"use client";
// REACT
import type React from "react";

import { useState, useEffect } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

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
  
  // Form state
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
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  // Handle form submission
  const handleFindNow = () => {
    const newErrors = {
      companyType: !formData.companyType.trim(),
      news: !formData.news.trim(),
      location: !formData.location.trim()
    };
    
    setErrors(newErrors);
    
    // Check if any field is empty
    if (newErrors.companyType || newErrors.news || newErrors.location) {
      // Add vibration effect to empty fields
      Object.keys(newErrors).forEach(field => {
        if (newErrors[field as keyof typeof newErrors]) {
          const input = document.querySelector(`input[name="${field}"]`) as HTMLInputElement;
          if (input) {
            input.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
              input.style.animation = '';
            }, 500);
          }
        }
      });
      return;
    }
    
    // All fields filled, show email modal
    setShowEmailModal(true);
  };

  // Handle email submission
  const handleEmailSubmit = async () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://app.karhuno.com/webhook/free_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyType: formData.companyType,
          news: formData.news,
          location: formData.location,
          email: email
        })
      });
      
      if (response.ok) {
        setShowFireworks(true);
        setShowSuccess(true);
        setTimeout(() => {
          setShowFireworks(false);
        }, 2000);
        setTimeout(() => {
          setShowEmailModal(false);
          setShowSuccess(false);
          setEmail("");
          setFormData({ companyType: "", news: "", location: "" });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Enter key navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentField: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (currentField === 'companyType') {
        // Focus on news field
        const newsInput = document.querySelector('input[name="news"]') as HTMLInputElement;
        newsInput?.focus();
      } else if (currentField === 'news') {
        // Focus on location field
        const locationInput = document.querySelector('input[name="location"]') as HTMLInputElement;
        locationInput?.focus();
      } else if (currentField === 'location') {
        // Submit form
        handleFindNow();
      }
    }
  };

  // Handle Enter key in email modal
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEmailSubmit();
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
      <header className="relative overflow-hidden mt-12">
        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-between min-h-[80vh] px-4 max-w-7xl mx-auto">
          {/* Left Side - Heading */}
          <div className="flex-1 max-w-2xl">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-left ${roboto.className}`}>
              <span className="text-black">Stop Searching,</span>
              <br />
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Start Selling</span>
            </h1>

            <p className={`text-xl md:text-2xl text-gray-500 mb-8 text-left ${montserrat.className}`}>
              B2B sales signals, made simple and proven
            </p>
          </div>

          {/* Right Side - Search Form */}
          <div className="flex-1 max-w-md ml-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 shadow-lg">
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
                onClick={handleFindNow}
                className={`w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Find now
              </button>
              
              <p className={`text-xs text-gray-500 mt-3 text-center ${montserrat.className}`}>
                Without registration. No credit card required.
              </p>
            </div>
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
               className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
             >
               {!showSuccess ? (
                 <>
                   <h3 className={`text-2xl font-bold text-gray-900 mb-4 text-center ${roboto.className}`}>
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
                       {isSubmitting ? 'Sending...' : 'Find signals'}
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

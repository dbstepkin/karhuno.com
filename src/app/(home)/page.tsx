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
import CaseStudies from "@/components/home/case-studies";
import ContactCarousel from "@/components/home/contact-carousel";
import UserTestimonials from "@/components/home/user-testimonials";
import SignalCarousel from "@/components/home/signal-carousel";
import FinalCTA from "@/components/home/final-cta";

import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import HowKarhunoWorks from "@/components/home/how-karhuno-works";
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

  // Video modal state
  const [showVideoModal, setShowVideoModal] = useState(false);

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
      <header className="relative overflow-hidden bg-white">
        {/* Layered premium background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f9f5ff_0%,_#ebe8ff_45%,_#f5ecff_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#d2c6ff]/85 via-[#e2d6ff]/80 to-[#f8f2ff]/95" />
          {/* Radial glow behind headline */}
          <div className="absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(167,116,255,0.35)_0%,_rgba(167,116,255,0)_70%)] blur-3xl opacity-80 md:h-[620px] md:w-[620px]" />
          <div className="absolute right-[12%] top-[15%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(103,158,255,0.18)_0%,_rgba(103,158,255,0)_70%)] blur-3xl opacity-80 md:h-80 md:w-80" />
          <div className="absolute left-[4%] bottom-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(98,198,255,0.12)_0%,_rgba(98,198,255,0)_70%)] blur-3xl opacity-70 md:h-72 md:w-72" />
          {/* Subtle signal pattern */}
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(82,122,215,0.35) 1.8px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Soft radar rings */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 40%, rgba(149,176,255,0.25) 0, rgba(149,176,255,0.25) 1px, transparent 1px, transparent 70px)",
            }}
          />
          {/* Subtle scanning-inspired lines */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, rgba(118,152,255,0.25) 0px, rgba(118,152,255,0.25) 1px, transparent 1px, transparent 56px), repeating-linear-gradient(90deg, rgba(180,210,255,0.18) 0px, rgba(180,210,255,0.18) 1px, transparent 1px, transparent 68px)",
            }}
          />
          {/* Tech layered lines */}
          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, transparent 0%, rgba(136,164,255,0.4) 35%, transparent 65%), linear-gradient(300deg, transparent 15%, rgba(189,214,255,0.35) 50%, transparent 80%)",
              backgroundSize: "280px 280px, 280px 280px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(145deg, transparent 0 70px, rgba(150,190,255,0.35) 70px 71px), repeating-linear-gradient(325deg, transparent 0 90px, rgba(205,220,255,0.3) 90px 91px)",
            }}
          />
          {/* Tech diagonal traces */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(120,150,255,0.2) 0%, rgba(120,150,255,0) 45%), linear-gradient(300deg, rgba(165,210,255,0.15) 0%, rgba(165,210,255,0) 55%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0 56px, rgba(155,188,255,0.25) 56px 57px), repeating-linear-gradient(315deg, transparent 0 64px, rgba(185,215,255,0.18) 64px 65px)",
            }}
          />
          {/* Gentle scanning sweep */}
          <div
            className="absolute inset-y-0 left-0 right-0 hero-scan-sweep opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 20%, rgba(142,188,255,0.55) 50%, transparent 80%)",
              filter: "blur(0.5px)",
            }}
          />
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto min-h-[80vh] pt-20 pb-14 md:pt-24 md:pb-16 flex flex-col items-center justify-center gap-5 md:gap-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_12px_36px_rgba(103,158,255,0.25)] text-[#a974ff] text-sm md:text-base font-semibold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a974ff] to-[#679eff] shadow-[0_0_10px_rgba(169,116,255,0.8)]" />
            For B2B sales teams
          </div>
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] md:leading-[1.08] tracking-tight ${roboto.className}`}>
            <span className="text-black">Stop searching.</span>
            <br />
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Start Selling.
            </span>
          </h1>

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl leading-relaxed md:leading-relaxed tracking-tight ${montserrat.className}`}>
            Track any open-data event, from news to social mentions, see the proof behind it, and reach the right decision makers in real time.
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => window.location.href = '/signup'}
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
              <button
                onClick={() => setShowVideoModal(true)}
                className={`group px-6 py-4 rounded-2xl bg-white/80 border border-gray-200 text-gray-700 text-base font-medium hover:bg-white hover:border-gray-300 hover:shadow-md transition duration-200 flex items-center gap-2 ${montserrat.className}`}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch the overview</span>
              </button>
            </div>
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

      {/* The Problem: Traditional Outreach vs Signal-Driven Solution */}
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
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">The Problem</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Volume </span>
              <span className="text-white/50 mx-4">vs</span>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Timing
              </span>
            </h2>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Traditional list-based outreach fails. Here's how signal-driven approach wins with real results.
            </p>
          </div>

          {/* Extremely Simplified VS Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
            {/* Center "VS" Decoration */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-slate-900 border-2 border-white/20 rounded-full items-center justify-center shadow-[0_0_30px_rgba(169,116,255,0.4)]">
              <span className="text-white font-black italic text-xl">VS</span>
            </div>

            {/* Left Column: Traditional Way (Focus on Volume) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative bg-red-950/20 backdrop-blur-xl rounded-[2.5rem] p-10 border-2 border-red-500/30 flex flex-col group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-red-500/40"></span>
                  The Problem: Volume
                </div>

                <h3 className="text-5xl font-black text-white mb-8 leading-tight">
                  Burning <span className="text-red-500">Leads</span> & <br />
                  Standard Results
                </h3>

                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">Stale Static Databases</p>
                      <p className="text-white/50 leading-relaxed">Reaching out to people based on outdated info from months ago.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">Generic "Spray & Pray"</p>
                      <p className="text-white/50 leading-relaxed">Same script for everyone. 0.5% reply rate is the best you can hope for.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">Domain & Brand Fatigue</p>
                      <p className="text-white/50 leading-relaxed">Ruining your reputation by messaging prospects who aren't interested.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-16">
                <div className="text-center p-6 bg-red-500/5 rounded-3xl border border-red-500/10">
                  <div className="text-red-500 text-4xl font-black mb-1">Inefficient</div>
                  <div className="text-white/40 text-xs font-bold tracking-widest uppercase">The Dead-End Approach</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: The Karhuno Way (Focus on Timing) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border-2 border-[#a974ff]/30 flex flex-col group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="text-[#a974ff] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#a974ff]/40"></span>
                  The Karhuno Way: Timing
                </div>

                <h3 className="text-5xl font-black text-white mb-8 leading-tight">
                  Reach Them <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Exactly</span> <br />
                  When They Buy
                </h3>

                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">Live Buying Signals</p>
                      <p className="text-white/70 leading-relaxed">Reach prospects <span className="text-white font-bold italic underline decoration-purple-500">minutes</span> after they trigger a signal (hiring, news, changes).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">Contextual Proof</p>
                      <p className="text-white/70 leading-relaxed">AI automatically enriches outreach with <span className="text-white font-bold">real proof</span>. No more generic messaging.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-1">High Intent = High ROI</p>
                      <p className="text-white/70 leading-relaxed">Message only those who are <span className="text-white font-bold underline decoration-blue-500">actively</span> looking for solutions. Up to 60%+ reply rates.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-16">
                <div className="text-center p-6 bg-gradient-to-r from-[#a974ff]/20 to-[#679eff]/20 rounded-3xl border border-[#a974ff]/20 shadow-[0_0_30px_rgba(169,116,255,0.15)]">
                  <div className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent text-4xl font-black mb-1">Signal-Driven</div>
                  <div className="text-white/40 text-xs font-bold tracking-widest uppercase">The Winning Advantage</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* The Solution Section - Part 2 */}
          <div className="mt-24">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-white/90">The Solution</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Turn Timing Into </span>
                <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                  Your Advantage
                </span>
              </h2>

              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Real-time buying signals transform outreach from cold to contextual, making every message count.
              </p>
            </motion.div>

            {/* Four Solution Pillars - Alternating Layout */}
            <div className="space-y-24 mb-12">
              {/* Step 1: Real-Time Market Signals - Text Left, Logos Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-400/80">Signal</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Real-Time Market Signals</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Track buying intent as it happens across news, social, and public data—not static lists from weeks ago.
                  </p>
                </div>

                {/* Right: Data Sources Image */}
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 overflow-hidden">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/datasource.png"
                        alt="Data sources we track"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Built-In Context - Screenshot Left, Text Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Screenshot/Proof */}
                <div className="relative order-2 lg:order-1">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 overflow-hidden">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/warehouse announcement proof.png"
                        alt="Proof Link Included - Warehouse Announcement"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-400/80">Context</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Built-In Context</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Every signal includes the <span className="text-white font-semibold">context</span> you need—why they're buying, what triggered it, and when to reach out.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">Proof Link</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">Trigger Event</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">Timing Context</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Contact Enrichment - Text Left, Screenshot Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-400/80">People</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Contact Enrichment</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    You get the signal first, <span className="text-white font-semibold">never the contact</span>.
                    <br /><br />
                    Karhuno enriches it in real time to find the right decision makers: email, LinkedIn when available.
                    <br /><br />
                    No outdated lists. Just the right person, at the right moment.
                  </p>
                </div>

                {/* Right: Screenshot/Visual */}
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 overflow-hidden">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/decision maker image.png"
                        alt="Contact Enrichment - Decision Maker"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Contact with Context & Integrations - Integrations Left, Text Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Integrations */}
                <div className="relative order-2 lg:order-1">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 overflow-hidden">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/heropage/integration.png"
                        alt="Integrations available"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-400/80">Action</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Contact Them with Context</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Use enriched signals with <span className="text-white font-semibold">full context</span> on any channel—LinkedIn, email, or your CRM. Export via API, CSV, or connect directly to your workflow.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">API Export</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">CSV Export</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-300">Webhooks</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-2xl text-white/80 font-light italic max-w-2xl mx-auto mb-12">
                When timing is right, outreach stops feeling cold.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="relative bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-3xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to turn signals into sales?
                  </h3>
                  <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                    Stop wasting time on cold lists. Start finding decision makers at the perfect moment—when they're actually ready to buy.
                  </p>

                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => window.location.href = '/signup'}
                      className="group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Start Free Trial
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  <div className="mt-6 flex justify-center items-center text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <UserTestimonials />
      <SignalCarousel />
      <HowKarhunoWorks />
      <CaseStudies id="case-studies" />
      <FinalCTA />
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

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-2xl p-2 sm:p-4 max-w-4xl w-full shadow-2xl mx-4 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Close video"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video player */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  src="/video/finale-25.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onEnded={() => setShowVideoModal(false)}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video title */}
              <div className="mt-4 text-center">
                <h3 className={`text-xl font-bold text-white mb-2 ${roboto.className}`}>
                  How Karhuno AI Works
                </h3>
                <p className={`text-gray-400 text-sm ${montserrat.className}`}>
                  See how we turn signals into sales in 1 minute
                </p>
              </div>
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

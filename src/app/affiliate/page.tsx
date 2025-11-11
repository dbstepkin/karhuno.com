"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";
import { Check, ArrowRight, TrendingUp, DollarSign, Gift, BarChart3, Shield, Zap, Target, FileText, Code, Image, LayoutDashboard, Award, Megaphone, Share2, Sparkles, Users, HelpCircle, ExternalLink, Star, TrendingDown, Rocket, LineChart, ChevronDown, HelpCircle as HelpCircleIcon, UserCheck, Video, Phone, Users2, Play, PenTool, Cloud, Network, Linkedin, Mail, Search, X } from "lucide-react";
import Head from "next/head";
import CanonicalHandler from "@/components/CanonicalHandler";
import Footer from "@/components/home/footer";

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

export default function AffiliatePage() {
  const [customerCount, setCustomerCount] = useState(9);
  const revenuePerCustomer = 151.68;
  const estimatedRevenue = customerCount * revenuePerCustomer;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  // Email modal states
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      const response = await fetch('https://app.karhuno.com/webhook/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: trimmedEmail
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowEmailModal(false);
          setShowSuccess(false);
          setEmail("");
          setIsSubmitting(false);
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error submitting email:', errorData);
        setIsSubmitting(false);
        setEmailError(true);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setIsSubmitting(false);
      setEmailError(true);
    }
  };

  // Handle email key down
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <>
      <CanonicalHandler canonicalUrl="https://karhuno.com/affiliate" />
      <Head>
        <title>Karhuno AI Affiliate Programme | Earn Recurring Income</title>
        <meta
          name="description"
          content="Join the Karhuno AI Affiliate Programme and get paid every month for helping B2B teams discover real-time buying signals. Earn recurring commissions."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-radial from-[#b097ff]/20 via-white to-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-wider text-violet-600 font-semibold mb-3"
          >
            AFFILIATE PROGRAMME
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 ${roboto.className}`}
          >
            Earn recurring income with a trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7a5cff] to-[#9d7aff]">AI-powered lead generation platform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-lg text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}
          >
            Join 100+ affiliate partners earning monthly commissions by helping B2B teams discover real-time buying signals with Karhuno AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setShowEmailModal(true)}
              className="mt-8 bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] hover:from-[#6949ff] hover:to-[#8d6aff] text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg shadow-violet-300/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-sm text-gray-500 mt-4 ${montserrat.className}`}
          >
            ⭐ Trusted by 100+ partners across SaaS, marketing, and sales industries.
          </motion.p>
        </div>
      </section>

      {/* How It Works Section - Lemlist Style with Purple Theme */}
      <section className="bg-gradient-to-b from-[#7a5cff] to-[#9d7aff] py-24 px-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
                How It Works
              </span>
            </h2>
            <p className={`text-white/80 mb-12 ${montserrat.className}`}>
              3 simple steps to start earning recurring commissions
            </p>
          </motion.div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                number: "1",
                title: "Join the affiliate program",
                description: "Receive a unique affiliate code",
                image: "/images/affiliate-apply.jpg"
              },
              {
                number: "2",
                title: "Share",
                description: "Share your unique code with your audience on LinkedIn or email.",
                image: "/images/affiliate-share.jpg"
              },
              {
                number: "3",
                title: "Earn",
                description: "Earn monthly recurring commissions for every active subscriber.",
                image: "/images/affiliate-earn.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(155,120,255,0.3)] transition-all duration-300">
                  {index === 0 ? (
                    <img
                      src="/codiceaffiliate.png"
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />
                  ) : index === 1 ? (
                    <img
                      src="/share yourcode.png"
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />
                  ) : index === 2 ? (
                    <img
                      src="/earning with affiliate.png"
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />
                  ) : (
                    <div className="w-full h-52 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                      <div className="text-6xl font-bold text-purple-200">{item.number}</div>
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`text-3xl font-bold mb-2 text-gray-900 ${roboto.className}`}>
                      {item.number}
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-semibold mb-3 ${roboto.className}`}>
                      {index === 0 && item.title === "Join the affiliate program" ? (
                        <>
                          {"Join the affiliate".split('').map((letter, i, arr) => {
                            const progress = i / Math.max(arr.length - 1, 1);
                            const r1 = 122, g1 = 92, b1 = 255;
                            const r2 = 157, g2 = 122, b2 = 255;
                            const r = Math.round(r1 + (r2 - r1) * progress);
                            const g = Math.round(g1 + (g2 - g1) * progress);
                            const b = Math.round(b1 + (b2 - b1) * progress);
                            return (
                              <span
                                key={i}
                                className="inline-block"
                                style={{ color: `rgb(${r}, ${g}, ${b})` }}
                              >
                                {letter === ' ' ? '\u00A0' : letter}
                              </span>
                            );
                          })}
                          <br />
                          {"program".split('').map((letter, i, arr) => {
                            const startIndex = "Join the affiliate ".length;
                            const progress = (startIndex + i) / Math.max(item.title.length - 1, 1);
                            const r1 = 122, g1 = 92, b1 = 255;
                            const r2 = 157, g2 = 122, b2 = 255;
                            const r = Math.round(r1 + (r2 - r1) * progress);
                            const g = Math.round(g1 + (g2 - g1) * progress);
                            const b = Math.round(b1 + (b2 - b1) * progress);
                            return (
                              <span
                                key={`p-${i}`}
                                className="inline-block"
                                style={{ color: `rgb(${r}, ${g}, ${b})` }}
                              >
                                {letter}
                              </span>
                            );
                          })}
                        </>
                      ) : (
                        item.title.split('').map((letter, i, arr) => {
                          const progress = i / Math.max(arr.length - 1, 1);
                          const r1 = 122, g1 = 92, b1 = 255;
                          const r2 = 157, g2 = 122, b2 = 255;
                          const r = Math.round(r1 + (r2 - r1) * progress);
                          const g = Math.round(g1 + (g2 - g1) * progress);
                          const b = Math.round(b1 + (b2 - b1) * progress);
                          return (
                            <span
                              key={i}
                              className="inline-block"
                              style={{ color: `rgb(${r}, ${g}, ${b})` }}
                            >
                              {letter === ' ' ? '\u00A0' : letter}
                            </span>
                          );
                        })
                      )}
                    </h3>
                    <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <button
              onClick={() => setShowEmailModal(true)}
              className="bg-white text-[#7a5cff] font-semibold text-lg px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Commission Structure Section - Clean White Design */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7a5cff] to-[#9d7aff]">
                Commission Structure
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
              Scale your income as you grow your referrals
            </p>
          </motion.div>

          {/* Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Base Tier Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                  <div className="text-3xl">🧊</div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                    Base Tier
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                    <span className={`text-sm font-semibold text-[#7a5cff] ${montserrat.className}`}>
                      15% recurring
                    </span>
                  </div>
                </div>

                {/* Customers */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#7a5cff]" />
                    <span className={`text-gray-900 font-semibold ${roboto.className}`}>
                      Customers
                    </span>
                  </div>
                  <p className={`text-gray-600 ${montserrat.className}`}>
                    0–9 active customers
                  </p>
                </div>

                {/* Note */}
                <div className="pt-6 border-t border-gray-200">
                  <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                    Applies to all renewals
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Growth Tier Card - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative bg-white rounded-2xl p-8 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                {/* Hot Badge */}
                <div className="absolute -top-3 right-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className={`text-xs font-bold text-white ${roboto.className}`}>
                      🔥 Hot Tier
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                  <div className="text-3xl">🚀</div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                    Growth Tier
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-300">
                    <span className={`text-sm font-semibold text-[#7a5cff] ${montserrat.className}`}>
                      20% recurring (new customers only)
                    </span>
                  </div>
                </div>

                {/* Customers */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#7a5cff]" />
                    <span className={`text-gray-900 font-semibold ${roboto.className}`}>
                      Customers
                    </span>
                  </div>
                  <p className={`text-gray-600 ${montserrat.className}`}>
                    10+ active customers
                  </p>
                </div>

                {/* Note */}
                <div className="pt-6 border-t border-gray-200">
                  <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                    Previous 9 stay at 15%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Example Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] flex items-center justify-center shadow-md">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold text-gray-900 mb-3 text-lg ${roboto.className}`}>
                  Example:
                </h4>
                <p className={`text-gray-700 mb-3 ${montserrat.className}`}>
                  If you have <span className="font-bold text-gray-900">12 active customers</span> →
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-purple-200 shadow-sm">
                    <span className={`text-sm text-gray-700 font-medium ${montserrat.className}`}>
                      Customers 1–9 = 15%
                    </span>
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] text-white shadow-md">
                    <span className={`text-sm font-medium ${montserrat.className}`}>
                      Customers 10–12 = 20%
                    </span>
                  </span>
                </div>
                <p className={`text-sm text-gray-600 italic ${montserrat.className}`}>
                  💬 This system rewards consistent growth and performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12-Month Revenue Estimator - Interactive Calculator */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#7a5cff] to-[#9d7aff] relative overflow-hidden text-white">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
                12-Month Revenue Estimator
              </span>
            </h2>
            <p className={`text-xl text-white/80 max-w-2xl mx-auto ${montserrat.className}`}>
              Slide to see how much you could earn per year as a Karhuno affiliate.
            </p>
          </motion.div>

          {/* Interactive Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-purple-200"
          >
            {/* Slider Section */}
            <div className="mb-8">
              <label className={`block text-lg font-semibold text-gray-900 mb-6 ${roboto.className}`}>
                How many active customers do you expect to refer?
              </label>
              
              {/* Current Value Display */}
              <div className="text-center mb-6">
                <motion.div
                  key={customerCount}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-block text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent ${roboto.className}`}
                >
                  {customerCount}
                </motion.div>
                <span className={`text-2xl md:text-3xl text-gray-600 ml-2 ${montserrat.className}`}>
                  customers
                </span>
              </div>

              {/* Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={customerCount}
                  onChange={(e) => setCustomerCount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(103, 126, 255) ${((customerCount - 1) / 99) * 100}%, rgb(229, 231, 235) ${((customerCount - 1) / 99) * 100}%, rgb(229, 231, 235) 100%)`
                  }}
                />
                <style jsx>{`
                  .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: linear-gradient(to right, #a974ff, #679eff);
                    cursor: pointer;
                    box-shadow: 0 4px 8px rgba(168, 85, 247, 0.4);
                    border: 3px solid white;
                  }
                  .slider::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: linear-gradient(to right, #a974ff, #679eff);
                    cursor: pointer;
                    box-shadow: 0 4px 8px rgba(168, 85, 247, 0.4);
                    border: 3px solid white;
                  }
                `}</style>
              </div>

              {/* Min/Max Labels */}
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Revenue Output */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
              <div className="text-center">
                <p className={`text-lg text-gray-600 mb-3 ${montserrat.className}`}>
                  Estimated yearly revenue:
                </p>
                <motion.div
                  key={estimatedRevenue}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent mb-2 ${roboto.className}`}
                >
                  €{estimatedRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/year
                </motion.div>
                <p className={`text-sm text-gray-500 mt-4 ${montserrat.className}`}>
                  💬 Based on the Optimal Plan (€79/mo). Higher plans = higher earnings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Earning Potential Section - Clean Professional Design */}
      <section className="relative bg-gradient-to-b from-white via-[#f8f6ff] to-white py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm tracking-wider text-violet-600 font-semibold mb-2">
              LONG-TERM VALUE
            </p>
            <h2 className={`text-4xl font-bold text-gray-900 mb-2 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] bg-clip-text text-transparent">
                Future Earning Potential
              </span>
            </h2>
            <p className={`text-gray-600 mb-12 ${montserrat.className}`}>
              Why your affiliate income can grow over time.
            </p>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Card 1: Growth Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_25px_rgba(155,120,255,0.15)] rounded-2xl p-8 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] w-12 h-12 flex items-center justify-center rounded-xl text-white mb-5 text-2xl">
                🚀
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${roboto.className}`}>
                Growth Opportunities
              </h3>
              <p className={`text-gray-600 text-sm mb-3 ${montserrat.className}`}>
                As Karhuno expands its platform and attracts larger clients, the average value per customer is expected to increase over time.
              </p>
              <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                <span className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] bg-clip-text text-transparent font-semibold">
                  Your income grows as the ecosystem scales.
                </span>
              </p>
            </motion.div>

            {/* Card 2: Upselling to Higher Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_25px_rgba(155,120,255,0.15)] rounded-2xl p-8 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] w-12 h-12 flex items-center justify-center rounded-xl text-white mb-5 text-2xl">
                📈
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${roboto.className}`}>
                Upselling to Higher Tiers
              </h3>
              <p className={`text-gray-600 text-sm mb-3 ${montserrat.className}`}>
                Many customers naturally upgrade from entry-level to higher or custom plans, increasing the total revenue generated through your referrals.
              </p>
              <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                <span className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] bg-clip-text text-transparent font-semibold">
                  Boost your earnings with no extra effort.
                </span>
              </p>
            </motion.div>

            {/* Card 3: Consistent Commission Rates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_25px_rgba(155,120,255,0.15)] rounded-2xl p-8 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] w-12 h-12 flex items-center justify-center rounded-xl text-white mb-5 text-2xl">
                💎
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${roboto.className}`}>
                Consistent Commission Rates
              </h3>
              <p className={`text-gray-600 text-sm mb-3 ${montserrat.className}`}>
                Your affiliate percentages remain the same — meaning your income scales automatically as the platform and customer base grow.
              </p>
              <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                <span className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] bg-clip-text text-transparent font-semibold">
                  Reliable foundation for predictable income.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-gray-500 mt-12 text-center ${montserrat.className}`}
          >
            Start once — and keep earning as Karhuno evolves.
          </motion.p>
        </div>
      </section>

      {/* Who's a good match for this program? Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#7a5cff] to-[#9d7aff] text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              Who's a good match for this program?
            </h2>
          </motion.div>

          {/* Partner Categories - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                { icon: UserCheck, text: "Sales consultants" },
                { icon: Video, text: "Content creators" },
                { icon: Phone, text: "Agencies" },
                { icon: Users2, text: "Community Builders" },
                { icon: Play, text: "Youtubers" },
                { icon: Linkedin, text: "LinkedIn creators" },
                { icon: Mail, text: "Email marketing experts" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 py-3 border-b border-white/20"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-lg ${montserrat.className}`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[
                { icon: PenTool, text: "Bloggers and writers" },
                { icon: Sparkles, text: "B2B influencers" },
                { icon: Cloud, text: "SaaS Marketplaces" },
                { icon: Star, text: "Technology Reviewers" },
                { icon: Network, text: "Media Networks" },
                { icon: Search, text: "Lead generation specialists" },
                { icon: Zap, text: "Marketing automation consultants" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 py-3 border-b border-white/20"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-lg ${montserrat.className}`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => setShowEmailModal(true)}
              className="bg-white text-[#7a5cff] font-semibold text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Affiliate Toolkit Section - Interactive SaaS Dashboard Style */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Your Affiliate Toolkit
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
              Everything you need to succeed as a partner
            </p>
          </motion.div>

          {/* Interactive Toolkit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Personal Promo Code",
                subtitle: "Unique code for tracking & discounts",
                description: "e.g. MARTINA10 – share with followers for 10% off",
                icon: Code,
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100/50",
                tooltip: "Your unique affiliate code helps track referrals and provides discounts to your audience"
              },
              {
                title: "Performance Dashboard",
                subtitle: "Track your performance",
                description: "See who used your code, active subscriptions, and total earnings.",
                icon: LayoutDashboard,
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100/50",
                tooltip: "Monitor your affiliate performance in real-time with detailed analytics"
              },
              {
                title: "Marketing Resources",
                subtitle: "Banners, copy & visuals",
                description: "Templates and assets for LinkedIn, email, and more.",
                icon: Image,
                gradient: "from-purple-600 to-blue-600",
                bgGradient: "from-purple-50 to-blue-50",
                tooltip: "Access ready-to-use marketing materials to promote Karhuno AI effectively"
              },
              {
                title: "Tier Progress",
                subtitle: "Monitor your commission tier",
                description: "View your current rate (15% or 20%) and upcoming milestone.",
                icon: Award,
                gradient: "from-blue-600 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50",
                tooltip: "Track your progress toward the Growth Tier and higher commission rates"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 h-full flex flex-col`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Large Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Help Icon Tooltip */}
                      <div className="relative group/tooltip">
                        <button className="w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-gray-200 flex items-center justify-center transition-colors">
                          <HelpCircle className="w-4 h-4 text-gray-500" />
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                          {item.tooltip}
                          <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 text-gray-900 ${roboto.className}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm font-semibold text-gray-600 mb-3 ${montserrat.className}`}>
                        {item.subtitle}
                      </p>
                      <p className={`text-gray-700 ${montserrat.className}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 text-purple-700 text-sm font-medium mb-6">
              <HelpCircleIcon className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: "How do I join the Karhuno AI Affiliate Programme?",
                answer: "You can apply directly through the form on this page. Once approved, you'll receive your personal promo code (e.g. MARTINA10) and access to marketing materials to start promoting Karhuno AI immediately."
              },
              {
                question: "How are commissions calculated?",
                answer: "You'll earn 30% on the first payment (after the customer's 10% discount) and 15% recurring for up to 12 months per customer. Once you reach 10 active customers, you unlock 20% recurring for all new customers acquired from that point onward."
              },
              {
                question: "When and how do I get paid?",
                answer: "Commissions are paid monthly, once your balance exceeds €50. Payments are processed via secure bank transfer, and all transactions are verified before payout."
              },
              {
                question: "Do my commissions apply if a customer upgrades or changes their plan?",
                answer: "Yes — your commission rate remains the same even if a customer upgrades to a higher or custom plan. As plan prices increase, your earnings automatically grow without any additional action required."
              },
              {
                question: "Can I lose my Growth Tier or commissions?",
                answer: "If your active customer count drops below 10, you'll return to the Base Tier (15%) for new customers. You'll never lose commissions already earned — the system is designed to reward consistent performance, not penalize activity changes."
              },
              {
                question: "Can I promote Karhuno AI in any way I want?",
                answer: "You're free to share your promo code across social media, newsletters, or communities — just avoid spam, misleading claims, or paid ads using the Karhuno brand name."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-purple-200 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center border border-purple-200/50">
                      <span className={`text-sm font-bold text-purple-600 ${roboto.className}`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-bold text-gray-900 ${roboto.className}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className={`text-gray-700 leading-relaxed ${montserrat.className}`}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section after FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEmailModal(true)}
                className="bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-[#6949ff] hover:to-[#8d6aff] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Join Affiliate
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://calendly.com/team-karhuno/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#7a5cff] text-[#7a5cff] font-semibold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Book a Call
              </a>
            </div>

            {/* Micro CTA */}
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-sm text-gray-500 hover:text-[#7a5cff] transition-colors underline"
            >
              Read full Affiliate Terms
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Email Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isSubmitting && setShowEmailModal(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full shadow-2xl mx-4"
            >
              {!showSuccess ? (
                <>
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center ${roboto.className}`}>
                    Join our Affiliate Program
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
                      disabled={isSubmitting}
                      className={`flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${montserrat.className}`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEmailSubmit}
                      disabled={isSubmitting}
                      className={`flex-1 px-4 py-3 bg-gradient-to-r from-[#7a5cff] to-[#9d7aff] hover:from-[#6949ff] hover:to-[#8d6aff] text-white rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${montserrat.className}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Leave the application'}
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
                    Application submitted!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-gray-600 ${montserrat.className}`}
                  >
                    We'll get back to you soon with next steps.
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTermsModal(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h3 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                  🧾 Karhuno AI Affiliate Program — Key Terms & Conditions
                </h3>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="px-6 py-6">
                <div className={`text-gray-700 leading-relaxed space-y-6 ${montserrat.className}`}>
                  {/* 1. Overview */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      1. Overview
                    </h4>
                    <p className="mb-2">
                      The Karhuno AI Affiliate Program allows approved partners to earn recurring commissions by referring new paying customers to Karhuno AI.
                    </p>
                    <p>
                      By joining, affiliates agree to comply with these Terms & Conditions, which are designed to ensure fairness, transparency, and alignment with Karhuno AI's brand values.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 2. Commission Structure */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      2. Commission Structure
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong>Initial Commission:</strong> You earn 30% of the first payment from each new paying customer referred through your unique affiliate code.
                      </li>
                      <li>
                        <strong>Recurring Commission:</strong> You receive 15% recurring commission on renewals from that same customer for up to 12 months.
                      </li>
                      <li>
                        <strong>Tier Upgrade:</strong> Once you reach 10 or more active paying customers, you unlock the Growth Tier and earn 20% recurring commission on all new customers you refer from that point forward. (Your first 9 customers remain at the 15% rate.)
                      </li>
                      <li>
                        <strong>Commission Duration (Lifetime):</strong> Each customer's commission eligibility lasts up to 12 months from their initial payment date.
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 3. Payments & Payout Conditions */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      3. Payments & Payout Conditions
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong>Payout Frequency:</strong> Commissions are paid monthly, typically within the first 10 business days of the following month.
                      </li>
                      <li>
                        <strong>Minimum Payout Threshold:</strong> You must accumulate at least €50 in approved commissions before payment is released.
                      </li>
                      <li>
                        <strong>Payment Method:</strong> All payouts are processed via secure bank transfer, after internal verification and confirmation of referred customer payments.
                      </li>
                      <li>
                        <strong>Verification Process:</strong> To maintain program integrity, Karhuno AI verifies each transaction and affiliate activity before approving payouts. Fraudulent or self-referral activity will result in immediate removal from the program.
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 4. Tracking & Attribution */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      4. Tracking & Attribution
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Each affiliate receives a unique promo code to share with their audience.</li>
                      <li>When a customer subscribes using your code, the referral is automatically tracked and attributed to your account.</li>
                      <li>Cookie tracking is not currently used — tracking is based on the promo code system, ensuring transparent attribution and preventing double credit.</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 5. Term & Duration */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      5. Term & Duration
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>The affiliate relationship remains active as long as your account is in good standing and you continue to comply with these terms.</li>
                      <li>Karhuno AI reserves the right to review and adjust the program monthly to ensure fair conditions and accurate reporting.</li>
                      <li>Commission eligibility for each referred customer expires 12 months after the first purchase.</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 6. Marketing & Promotion Guidelines */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      6. Marketing & Promotion Guidelines
                    </h4>
                    <p className="mb-3">
                      Affiliates are encouraged to promote Karhuno AI authentically and in alignment with its mission: Helping B2B teams discover real-time buying signals and generate qualified leads based on intent.
                    </p>
                    <p className="font-semibold mb-2">You may not:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Misrepresent Karhuno AI's features, pricing, or ownership.</li>
                      <li>Use paid ads (e.g., Google Ads, brand bidding) with Karhuno AI's name or trademarks.</li>
                      <li>Spam or use deceptive marketing tactics (including unsolicited emails).</li>
                      <li>Impersonate Karhuno AI staff or act as a reseller.</li>
                    </ul>
                    <p className="mt-3">
                      Violation of these guidelines may result in suspension or removal from the program.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 7. Program Transparency & Updates */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      7. Program Transparency & Updates
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Program terms are reviewed monthly to ensure fairness, clarity, and sustainability.</li>
                      <li>Karhuno AI may update or refine commission rates or policies, always notifying affiliates in advance.</li>
                      <li>Affiliates will be informed of significant changes via email or the internal dashboard.</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 8. Termination */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      8. Termination
                    </h4>
                    <p className="mb-2">
                      Karhuno AI reserves the right to suspend or terminate an affiliate account at any time if:
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Fraudulent, misleading, or unethical activity is detected.</li>
                      <li>The affiliate misuses the brand name or violates these terms.</li>
                      <li>The affiliate remains inactive (no referrals) for an extended period, subject to review.</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-400">⸻</p>
                  </div>

                  {/* 9. Liability Disclaimer */}
                  <div>
                    <h4 className={`text-xl font-bold text-gray-900 mb-3 ${roboto.className}`}>
                      9. Liability Disclaimer
                    </h4>
                    <p>
                      Karhuno AI is not responsible for any indirect, incidental, or consequential damages arising from participation in the Affiliate Program. All affiliate commissions depend on verified, completed, and paid subscriptions by referred customers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";
import { Check, ArrowRight, TrendingUp, DollarSign, Gift, BarChart3, Shield, Zap, Target, FileText, Code, Image, LayoutDashboard, Award, Megaphone, Share2, Sparkles, Users, HelpCircle, ExternalLink, Star, TrendingDown, Rocket, LineChart, ChevronDown, HelpCircle as HelpCircleIcon } from "lucide-react";
import Head from "next/head";
import CanonicalHandler from "@/components/CanonicalHandler";

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
      <section className="relative overflow-hidden pt-24 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
          >
            <Gift className="w-4 h-4 mr-2" />
            Affiliate Programme
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${roboto.className}`}
          >
            <span className="text-gray-900">Earn recurring income by promoting</span>
            <br />
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              the world's first signal-based lead generation platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto ${montserrat.className}`}
          >
            Join the Karhuno AI Affiliate Programme and get paid every month for helping B2B teams discover real-time buying signals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://forms.gle/your-affiliate-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="https://forms.gle/your-waitlist-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
            >
              Join the Partner Waitlist
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Dark Dynamic Design */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white ${roboto.className}`}>
              How It Works
            </h2>
            <p className={`text-xl text-white/80 max-w-2xl mx-auto ${montserrat.className}`}>
              3 quick steps to start earning
            </p>
          </motion.div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Get your personal promo code",
                description: "Receive a unique affiliate code (e.g. MARTINA10) — your followers get 10% off their first month.",
                icon: Code,
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-500/10 to-purple-600/5"
              },
              {
                number: "2",
                title: "Share it with your audience",
                description: "Promote Karhuno AI on LinkedIn, email, or inside your community.",
                icon: Share2,
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-500/10 to-blue-600/5"
              },
              {
                number: "3",
                title: "Earn monthly commissions",
                description: "Get paid every month for each active subscriber you bring in.",
                icon: DollarSign,
                gradient: "from-purple-600 to-blue-600",
                bgGradient: "from-purple-600/10 to-blue-600/5"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2`}>
                  {/* Large Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg border-4 border-slate-900">
                    <span className={`text-2xl font-bold text-white ${roboto.className}`}>
                      {item.number}
                    </span>
                  </div>

                  {/* Large Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 text-white ${roboto.className}`}>
                    {item.title}
                  </h3>
                  <p className={`text-white/70 leading-relaxed ${montserrat.className}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave transition at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,80 600,40 900,60 C1050,70 1125,50 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
          <div className="h-16 bg-white"></div>
        </div>
      </section>

      {/* Commission Structure Section - Modern SaaS Pricing Style */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white ${roboto.className}`}>
              Commission Structure
            </h2>
            <p className={`text-xl text-white/80 max-w-2xl mx-auto ${montserrat.className}`}>
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
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-6 border border-purple-500/30">
                  <div className="text-3xl">🧊</div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold text-white mb-2 ${roboto.className}`}>
                    Base Tier
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <span className={`text-sm font-semibold text-purple-300 ${montserrat.className}`}>
                      15% recurring
                    </span>
                  </div>
                </div>

                {/* Customers */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-white/60" />
                    <span className={`text-white/80 font-semibold ${roboto.className}`}>
                      Customers
                    </span>
                  </div>
                  <p className={`text-white/70 ${montserrat.className}`}>
                    0–9 active customers
                  </p>
                </div>

                {/* Note */}
                <div className="pt-6 border-t border-white/10">
                  <p className={`text-sm text-white/60 ${montserrat.className}`}>
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                  <div className="text-3xl">🚀</div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold text-white mb-2 ${roboto.className}`}>
                    Growth Tier
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50">
                    <span className={`text-sm font-semibold text-white ${montserrat.className}`}>
                      20% recurring (new customers only)
                    </span>
                  </div>
                </div>

                {/* Customers */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-white/80" />
                    <span className={`text-white font-semibold ${roboto.className}`}>
                      Customers
                    </span>
                  </div>
                  <p className={`text-white/80 ${montserrat.className}`}>
                    10+ active customers
                  </p>
                </div>

                {/* Note */}
                <div className="pt-6 border-t border-white/20">
                  <p className={`text-sm text-white/70 ${montserrat.className}`}>
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
            className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                  <BarChart3 className="w-6 h-6 text-purple-300" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold text-white mb-2 ${roboto.className}`}>
                  Example:
                </h4>
                <p className={`text-white/80 mb-2 ${montserrat.className}`}>
                  If you have <span className="font-bold text-white">12 active customers</span> →
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30">
                    <span className={`text-sm text-purple-200 ${montserrat.className}`}>
                      Customers 1–9 = 15%
                    </span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50">
                    <span className={`text-sm text-white ${montserrat.className}`}>
                      Customers 10–12 = 20%
                    </span>
                  </span>
                </div>
                <p className={`text-sm text-white/60 italic ${montserrat.className}`}>
                  💬 This system rewards consistent growth and performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12-Month Revenue Estimator - Interactive Calculator */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                12-Month Revenue Estimator
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
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

      {/* Future Earning Potential Section - Modern SaaS/AI Design */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 text-purple-700 text-sm font-medium mb-6">
              <LineChart className="w-4 h-4" />
              <span>Growth Potential</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Future Earning Potential
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
              Why your affiliate income can grow over time
            </p>
          </motion.div>

          {/* Pyramid of Value - Stacked Blocks with Icons */}
          <div className="flex flex-col items-center gap-6">
            {/* Bottom Block: Consistent Commission Rates */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-200/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 text-gray-900 ${roboto.className}`}>
                    Consistent Commission Rates
                  </h3>
                  <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                    Your percentages remain the same — as prices grow, your income grows too.
                  </p>
                  <p className={`text-sm text-gray-500 italic ${montserrat.className}`}>
                    Reliable foundation for predictable income.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Middle Block: Upselling to Higher Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-xl bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200/50 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-200/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 text-gray-900 ${roboto.className}`}>
                    Upselling to Higher Tiers
                  </h3>
                  <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                    Many clients will upgrade from the €79 plan to higher or custom tiers, increasing average customer value.
                  </p>
                  <p className={`text-sm text-gray-500 italic ${montserrat.className}`}>
                    Boost your revenue with no extra effort.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Block: Anticipated Price Growth - Most Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-lg bg-gradient-to-br from-purple-100/80 via-violet-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border-2 border-purple-300/50 hover:shadow-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-[1.03] relative overflow-hidden group"
            >
              {/* Decorative glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 text-gray-900 ${roboto.className}`}>
                    Anticipated Price Growth
                  </h3>
                  <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                    Karhuno plans to raise plan prices up to 2× next year, boosting potential earnings per customer.
                  </p>
                  <p className={`text-sm font-semibold text-purple-600 italic ${montserrat.className}`}>
                    Your commissions could double without changing anything.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Who's a good match for this program? Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Who's a good match for this program?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg"
          >
            <ul className="space-y-4">
              {[
                "Bloggers",
                "B2B Influencers",
                "Publishers",
                "Consultants",
                "Content Creators",
                "Anyone passionate about karhuno!"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-purple-600 fill-purple-600" />
                  </div>
                  <span className={`text-lg md:text-xl text-gray-900 ${roboto.className}`}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Terms Summary Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Affiliate Terms Summary
              </span>
            </h2>
            <p className={`text-xl text-gray-600 ${montserrat.className}`}>
              Key Terms & Conditions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200"
          >
            <ul className="space-y-4">
              {[
                "Commissions: 30% on first payment, 15% recurring (up to 12 months per customer).",
                "Tier upgrade: 20% recurring for new customers once you have 10+ actives.",
                "Payout: monthly, after reaching €50.",
                "Payment method: via bank transfer (secure, verified).",
                "Commission lifetime: 12 months per referred customer.",
                "Program updates: reviewed monthly to ensure fairness and transparency."
              ].map((term, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className={`text-gray-700 ${montserrat.className}`}>
                    {term}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="/terms-of-service"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Read full Terms
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
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

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white ${roboto.className}`}>
              Ready to grow with us?
            </h2>
            <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${montserrat.className}`}>
              Apply to join the Karhuno Partner Programme and start earning recurring income today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/your-affiliate-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://forms.gle/your-waitlist-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


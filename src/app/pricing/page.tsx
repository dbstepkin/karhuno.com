"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/home/footer";
import { Montserrat } from "@/lib/localFonts";
import { Crown, Shield, Check, ChevronDown } from "lucide-react";
import Head from "next/head";
import CanonicalHandler from "@/components/CanonicalHandler";

interface PricingPlan {
  name: string;
  description: string;
  priceLabel: string;
  originalPrice?: number;
  periodLabel: string;
  ctaLabel: string;
  ctaVariant?: "primary" | "secondary";
  isRecommended: boolean;
  limits: {
    signals: number | string;
    topics: number | string;
    competitors: number | string;
    deepScans: number | string;
    emails: number | string;
  };
  extras?: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Invite Only",
    description: "Trial plan for early users by invitation",
    priceLabel: "Invite Only",
    periodLabel: "Exclusive Beta Access",
    ctaLabel: "Request Access",
    ctaVariant: "secondary",
    isRecommended: false,
    limits: {
      signals: 2,
      topics: 2,
      competitors: 20,
      deepScans: 6,
      emails: 70
    },
    extras: ["Daily fresh leads to keep your pipeline moving"]
  },
  {
    name: "OPTIMAL",
    description: "Most popular choice",
    priceLabel: "$79",
    originalPrice: 149,
    periodLabel: "per user / month",
    ctaLabel: "Get Started",
    ctaVariant: "primary",
    isRecommended: true,
    limits: {
      signals: 2,
      topics: 2,
      competitors: 20,
      deepScans: 20,
      emails: 300
    },
    extras: [
      "Real-time alerts for signals that match your ICP",
      "Daily fresh leads to never miss a hot opportunity"
    ]
  },
  {
    name: "PROFESSIONAL",
    description: "For advanced teams",
    priceLabel: "$139",
    originalPrice: 249,
    periodLabel: "per user / month",
    ctaLabel: "Get Started",
    ctaVariant: "primary",
    isRecommended: false,
    limits: {
      signals: 3,
      topics: 3,
      competitors: 50,
      deepScans: "Unlimited",
      emails: 1000
    },
    extras: [
      "Daily fresh leads to keep your pipeline full"
    ]
  }
];

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Calculate tomorrow's date for "Save until" message
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const faqData = [
    {
      question: "What happens after the free trial ends?",
      answer: "After your invited free week, you can stay on the Free plan (limited) or upgrade to a monthly plan. No charges happen unless you choose to upgrade."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    },
    {
      question: "Do I need to enter my credit card now?",
      answer: "No card is needed for the invited Free trial. If you upgrade to a paid plan, you'll enter payment details at checkout."
    },
    {
      question: "What's included in the Free trial vs monthly plans?",
      answer: "You get full access during the Free week (within the listed limits). Monthly plans keep the automation going with higher limits and ongoing support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const cta = document.querySelector('a[href="https://calendly.com/team-karhuno/30min"]');

    if (!cta) return;

    const handleClick = () => {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'cta_bottom_click', {
          event_category: 'engagement',
          event_label: 'pricing_bottom',
          value: 1
        });
      }
    };

    cta.addEventListener('click', handleClick);

    return () => {
      cta.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <CanonicalHandler canonicalUrl="https://karhuno.com/pricing" />
      <Head>
        <title>Pricing Plans | Karhuno AI - Free Trial & Monthly B2B Sales Intelligence</title>
        <meta
          name="description"
          content="Compare our free trial and monthly plans. Start tracking real buyer intent with Karhuno AI. Corporate news search, LinkedIn signals, and competitor monitoring. 7-day money-back guarantee."
        />
        <meta name="keywords" content="B2B pricing, sales intelligence pricing, LinkedIn monitoring cost, corporate news search pricing, buyer intent signals pricing" />
        <meta property="og:title" content="Pricing Plans | Karhuno AI" />
        <meta property="og:description" content="Compare our free trial and monthly plans. Start tracking real buyer intent with Karhuno AI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | Karhuno AI" />
        <meta name="twitter:description" content="Compare our free trial and monthly plans. Start tracking real buyer intent with Karhuno AI." />
        <link rel="canonical" href="https://karhuno.com/pricing" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#F6F3FF] to-[#EDEBFA]">
      <div className="container mx-auto max-w-7xl pt-12 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-roboto leading-tight">
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Choose Your Plan</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base font-montserrat">
            Select the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                plan.isRecommended 
                  ? "bg-[#f8f7ff] border-2 border-purple-600 shadow-xl hover:scale-105 ring-1 ring-purple-300 ring-offset-1" 
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Save Badge */}
              {plan.name !== "Invite Only" && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-lg">
                    Save until {getTomorrowDate()}
                  </span>
                </div>
              )}

              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2 font-roboto uppercase">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-black font-roboto leading-none">
                      {plan.priceLabel}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm font-montserrat">
                    {plan.periodLabel}
                  </p>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                  className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${montserrat.className} ${
                    plan.ctaVariant === "secondary"
                      ? 'bg-transparent border border-purple-600 text-purple-700 hover:bg-purple-50 shadow-sm'
                      : plan.isRecommended 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25' 
                        : 'bg-gray-800 text-white hover:bg-gray-900 shadow-lg'
                  }`}
                >
                  {plan.ctaLabel}
                </button>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-4 font-montserrat">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 pb-8 flex-1">
                <div className="space-y-5">
                  {[
                    `Track ${plan.limits.signals} types of company buying signals, like hiring, expansion, or product launches`,
                    `Monitor ${plan.limits.topics} LinkedIn discussion topics, and discover who’s posting or engaging in your niche`,
                    `Identify leads engaging with up to ${plan.limits.competitors} competitor profiles, warm, high-intent contacts`,
                    `${plan.limits.deepScans} Deep Market Scans (Max Results)`,
                    `${plan.limits.emails} Verified Emails — reach real decision-makers`
                  ].map((item, idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <div className="w-6 h-6 mt-0.5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-700 font-montserrat leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}

                  {plan.extras && plan.extras.length > 0 && (
                    <div className="pt-4 border-t border-gray-100 space-y-3">
                      <h4 className="font-semibold text-gray-900 font-roboto text-sm">
                        What you get:
                      </h4>
                      <div className="space-y-3">
                        {plan.extras.map((item, idx) => (
                          <div className="flex items-start gap-3" key={idx}>
                            <div className="w-6 h-6 mt-0.5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <p className="text-sm text-gray-700 font-montserrat leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="px-4 mt-4">
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-6 flex items-center gap-3 justify-center text-center">
            <Shield className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <p className="text-gray-700 text-sm sm:text-base font-montserrat">
              Risk-free trial. 7-day money-back guarantee, no questions asked.
            </p>
          </div>
        </div>

        {/* Sales Callout Section - Immediately under pricing cards */}
        <div className="max-w-screen-xl mx-auto px-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm py-6 px-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-roboto mb-2">
                  <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                    Need a bigger plan?
                  </span>
                </h3>
                <p className="text-base text-gray-500 font-montserrat max-w-xl">
                  Talk to our team for custom plans and tailored support for large-scale operations.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://calendly.com/team-karhuno/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Money-back Guarantee Section - New Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              {/* Shield Icon */}
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-purple-600" />
              </div>
              
              {/* Headline */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-roboto">
                7-Day Money-Back Guarantee
              </h3>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
                No questions asked. One-click refund. Try it 100% risk-free.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section - New Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-purple-600 font-semibold font-montserrat">FAQ</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-roboto">
                Got Questions?
              </h3>
              <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
                We've got answers. Here are the most common questions about our pricing and plans.
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group"
                >
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    openFAQ === index 
                      ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50' 
                      : 'border-gray-100 hover:border-purple-100'
                  }`}>
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left group-hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                          openFAQ === index 
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                            : 'bg-gray-100 group-hover:bg-purple-100'
                        }`}>
                          <span className={`text-lg font-bold ${
                            openFAQ === index ? 'text-white' : 'text-gray-600 group-hover:text-purple-600'
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2 font-roboto group-hover:text-purple-600 transition-colors duration-200">
                            {faq.question}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium transition-colors duration-200 ${
                              openFAQ === index ? 'text-purple-600' : 'text-gray-500 group-hover:text-purple-500'
                            }`}>
                              {openFAQ === index ? 'Click to close' : 'Click to expand'}
                            </span>
                            <ChevronDown 
                              className={`w-4 h-4 transition-all duration-200 ${
                                openFAQ === index 
                                  ? 'rotate-180 text-purple-600' 
                                  : 'text-gray-400 group-hover:text-purple-500'
                              }`} 
                            />
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                              <Check className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                                <p className="text-gray-700 font-montserrat leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">
                  Still have questions?
                </h4>
                <p className="text-gray-600 mb-6 font-montserrat">
                  Our team is here to help you choose the perfect plan for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/team-karhuno/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat with us
                  </a>
                  <button 
                    onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                    className={`inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg ${montserrat.className}`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Get started now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <Footer />

    </div>
    </>
  );
} 

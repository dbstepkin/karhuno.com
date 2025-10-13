"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/home/footer";
import { Montserrat } from "next/font/google";
import { Crown, Shield, Check, ChevronDown } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  period: string;
  isRecommended: boolean;
  features: {
    newsSearch: {
      triggers: number;
    };
    linkedinConversations: {
      topics: number;
      keywordsPerTopic: number;
    };
    competitorMonitoring: {
      competitors: number;
    };
    weeklyFeatures: {
      deepSearches: number | string;
      verifiedEmails: number;
      newLeads: string;
    };
  };
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Optimal (weekly)",
    description: "Perfect for getting started",
    price: 25,
    originalPrice: 49,
    period: "weekly",
    isRecommended: false,
    features: {
      newsSearch: { triggers: 2 },
      linkedinConversations: { topics: 2, keywordsPerTopic: 5 },
      competitorMonitoring: { competitors: 20 },
      weeklyFeatures: {
        deepSearches: 6,
        verifiedEmails: 70,
        newLeads: "daily!"
      }
    }
  },
  {
    name: "Optimal",
    description: "Most popular choice",
    price: 79,
    originalPrice: 149,
    period: "monthly",
    isRecommended: true,
    features: {
      newsSearch: { triggers: 2 },
      linkedinConversations: { topics: 2, keywordsPerTopic: 5 },
      competitorMonitoring: { competitors: 20 },
      weeklyFeatures: {
        deepSearches: 20,
        verifiedEmails: 300,
        newLeads: "daily!"
      }
    }
  },
  {
    name: "Professional",
    description: "For power users",
    price: 139,
    originalPrice: 249,
    period: "monthly",
    isRecommended: false,
    features: {
      newsSearch: { triggers: 3 },
      linkedinConversations: { topics: 3, keywordsPerTopic: 7 },
      competitorMonitoring: { competitors: 50 },
      weeklyFeatures: {
        deepSearches: "Unlimited",
        verifiedEmails: 1000,
        newLeads: "daily!"
      }
    }
  }
];

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "What happens after the free trial ends?",
      answer: "After your trial period, you'll automatically be charged for your selected plan. You can cancel anytime before the trial ends to avoid charges."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    },
    {
      question: "Do I need to enter my credit card now?",
      answer: "Yes, a credit card is required to start. However, you can use a specific code to get a free week trial to test our platform before any charges."
    },
    {
      question: "What's included in the weekly vs monthly plan?",
      answer: "The weekly plan offers the same features as the monthly plan but with different usage limits. Weekly plans are perfect for testing, while monthly plans provide better value for regular use."
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
    <div className="min-h-screen bg-gradient-to-b from-[#F6F3FF] to-[#EDEBFA]">
      <div className="container mx-auto max-w-7xl pt-24 pb-16">
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
              <div className="absolute -top-3 -right-3">
                <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-lg">
                  Save until Oct 14
                </span>
              </div>

              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Recommended
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
                    <span className="text-5xl font-bold text-black font-roboto">
                      ${plan.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${plan.originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-montserrat">
                    per user per {plan.period}
                  </p>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                  className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${montserrat.className} ${
                    plan.isRecommended 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/25' 
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-4 font-montserrat">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 pb-8 flex-1">
                <div className="space-y-4">
                  {/* News Search */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-montserrat">News search – {plan.features.newsSearch.triggers} triggers</p>
                    </div>
                  </div>

                  {/* LinkedIn Conversations */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-montserrat">LinkedIn conversations – {plan.features.linkedinConversations.topics} topics</p>
                    </div>
                  </div>

                  {/* Competitor Monitoring */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-montserrat">Competitor monitoring – {plan.features.competitorMonitoring.competitors} competitors</p>
                    </div>
                  </div>

                  {/* Weekly Features */}
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3 font-roboto text-sm">
                      Features:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-purple-600" />
                        </div>
                        <p className="text-sm text-gray-600 font-montserrat">{plan.features.weeklyFeatures.deepSearches} deep searches</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-purple-600" />
                        </div>
                        <p className="text-sm text-gray-600 font-montserrat">{plan.features.weeklyFeatures.verifiedEmails} verified emails</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-purple-600" />
                        </div>
                        <p className="text-sm text-gray-600 font-montserrat">Fresh leads delivered daily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
  );
} 
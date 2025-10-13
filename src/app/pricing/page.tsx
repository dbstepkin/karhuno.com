"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "@/components/home/footer";
import { Montserrat } from "next/font/google";
import { Crown, Shield, Check } from "lucide-react";

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
              className={`relative flex flex-col bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                plan.isRecommended ? "ring-2 ring-purple-500" : ""
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
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2 font-roboto">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm font-montserrat">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-purple-600 font-roboto">
                    ${plan.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ${plan.originalPrice}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-montserrat">
                  /{plan.period}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6 mb-8">
                {/* News Search */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-roboto">News Search</p>
                    <p className="text-sm text-gray-500 font-montserrat">{plan.features.newsSearch.triggers} news triggers</p>
                  </div>
                </div>

                {/* LinkedIn Conversations */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-roboto">LinkedIn conversations</p>
                      <p className="text-sm text-gray-500 font-montserrat">{plan.features.linkedinConversations.topics} topics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-11">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 font-montserrat">Up to {plan.features.linkedinConversations.keywordsPerTopic} keywords/topic</p>
                  </div>
                </div>

                {/* Competitor Monitoring */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-roboto">Competitor monitoring</p>
                    <p className="text-sm text-gray-500 font-montserrat">Up to {plan.features.competitorMonitoring.competitors} competitors</p>
                  </div>
                </div>

                {/* Weekly Features */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4 font-roboto">Features {plan.period === 'weekly' ? '(per week)' : ''}:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-montserrat">{plan.features.weeklyFeatures.deepSearches} deep searches</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-montserrat">{plan.features.weeklyFeatures.verifiedEmails} verified emails</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-montserrat">New leads - {plan.features.weeklyFeatures.newLeads}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Select Plan Button */}
              <button 
                onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${montserrat.className} ${
                  plan.isRecommended 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/25' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-xl">
            <Shield className="w-5 h-5" />
            <span className="font-semibold font-montserrat">
              7 days moneyback guarantee. No questions asked. One-click refund.
            </span>
          </div>
        </motion.div>

        {/* Sales Callout Section */}
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

      </div>

      <Footer />

    </div>
  );
} 
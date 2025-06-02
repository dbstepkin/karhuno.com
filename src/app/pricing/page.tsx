"use client";

import { motion } from "framer-motion";
import Footer from "@/components/home/footer";

interface Feature {
  text: string;
}

interface PricingPackage {
  price: number;
  credits: number;
  pricePerCredit: number;
  features: Feature[];
  isPopular: boolean;
}

const pricingPackages: PricingPackage[] = [
  {
    price: 20,
    credits: 2000,
    pricePerCredit: 0.0100,
    features: [
      {
        text: "Scan 2,000 LinkedIn profiles (1 credit = 1 profile)",
      },
      {
        text: "Launch 10 Deep Research scans (2,500+ articles each)",
      },
      {
        text: "Or run 20 Light Research scans (500+ articles each)",
      },
      {
        text: "Enrich up to 400 verified emails (5 credits per email)",
      },
    ],
    isPopular: false,
  },
  {
    price: 29,
    credits: 3000,
    pricePerCredit: 0.0097,
    features: [
      {
        text: "Scan 3,000 LinkedIn profiles (1 credit = 1 profile)",
      },
      {
        text: "Launch 15 Deep Research scans (2,500+ articles each)",
      },
      {
        text: "Or run 30 Light Research scans (500+ articles each)",
      },
      {
        text: "Enrich up to 600 verified emails (5 credits per email)",
      },
    ],
    isPopular: false,
  },
  {
    price: 45,
    credits: 5000,
    pricePerCredit: 0.0090,
    features: [
      {
        text: "Scan 5,000 LinkedIn profiles (1 credit = 1 profile)",
      },
      {
        text: "Launch 25 Deep Research scans (2,500+ articles each)",
      },
      {
        text: "Or run 50 Light Research scans (500+ articles each)",
      },
      {
        text: "Enrich up to 1,000 verified emails (5 credits per email)",
      },
    ],
    isPopular: true,
  },
  {
    price: 80,
    credits: 10000,
    pricePerCredit: 0.0080,
    features: [
      {
        text: "Scan 10,000 LinkedIn profiles (1 credit = 1 profile)",
      },
      {
        text: "Launch 50 Deep Research scans (2,500+ articles each)",
      },
      {
        text: "Or run 100 Light Research scans (500+ articles each)",
      },
      {
        text: "Enrich up to 2,000 verified emails (5 credits per email)",
      },
    ],
    isPopular: false,
  },
];

export default function PricingPage() {
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
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">Pay</span>{" "}
            only for
            <br />
            what you{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              use
            </span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base font-montserrat">
            Choose the credit package that best fits your prospecting needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-12">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] ${
                pkg.isPopular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg font-montserrat">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-5xl font-bold text-purple-600 font-roboto">
                  €{pkg.price}
                </span>
              </div>

              <div className="mb-6 text-center">
                <p className="text-2xl font-semibold text-purple-900 font-roboto mb-1">
                  {pkg.credits.toLocaleString()} credits
                </p>
                <p className="text-sm text-gray-500 font-montserrat">
                  €{pkg.pricePerCredit.toFixed(4)} per credit
                </p>
              </div>

              <button 
                onClick={() => window.location.href = '/early-access'}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition font-montserrat mb-6"
              >
                Get Started
              </button>

              <div className="w-full">
                <h4 className="text-sm font-semibold text-purple-900 font-montserrat mb-4">
                  How you can use your credits:
                </h4>
                <ul className="space-y-3 text-left font-montserrat">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credit Usage Explanation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-[60px] text-center"
        >
          <div className="credit-system-info">
            <h2 className="text-[26px] font-bold font-roboto leading-tight bg-gradient-to-r from-[#A14EFF] to-[#5F6DF8] text-transparent bg-clip-text mb-6">
              Flexible Credit System
            </h2>
            <p className="text-[18px] font-normal text-[#4A4A4A] max-w-[700px] mx-auto mt-[10px] font-montserrat">
              Credits are valid forever and can be used anytime. Purchase more credits as you need them, with better rates for larger packages.
            </p>
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
                <h3 className="text-2xl font-bold font-roboto bg-gradient-to-r from-[#C084FC] to-[#60A5FA] text-transparent bg-clip-text mb-2">
                  Need a bigger plan?
                </h3>
                <p className="text-base text-gray-500 font-montserrat max-w-xl">
                  Talk to our team for custom credit packages and tailored support for large-scale prospecting.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://calendly.com/team-karhuno/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200 font-montserrat"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Included Features Section */}
        <div className="py-16 bg-[#F4F2FD]">
          <div className="max-w-[1100px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-center mb-10 font-roboto">
              Included in every plan
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              {/* API Access Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-[#0F0F0F] p-6 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out relative"
              >
                {/* Coming Soon Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg font-montserrat">
                    Coming Soon
                  </span>
                </div>
                
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 font-roboto">
                  API Access
                </h3>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed font-montserrat">
                  Integrate Karhuno AI into your internal tools and workflows with ease.
                </p>
              </motion.div>

              {/* CSV Export Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 bg-[#0F0F0F] p-6 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 font-roboto">
                  CSV / Excel Export
                </h3>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed font-montserrat">
                  Export all discovered companies and contacts as .csv or .xlsx files.
                </p>
              </motion.div>

              {/* Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 bg-[#0F0F0F] p-6 rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 font-roboto">
                  Dedicated Support
                </h3>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed font-montserrat">
                  Get help directly from our team — fast response, always included.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
} 
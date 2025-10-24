"use client";

import { motion } from "framer-motion";
import { Check, X, Users, TrendingUp, Building2, Calendar } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const scanFeatures = [
  "Press releases & media announcements",
  "Product launches and expansion plans", 
  "Job openings & hiring trends"
];

const mockSignals = [
  {
    icon: Users,
    text: "Hiring for: Sales Development Rep",
    color: "text-blue-500"
  },
  {
    icon: TrendingUp,
    text: "Announced: New CRM Integration",
    color: "text-green-500"
  },
  {
    icon: Building2,
    text: "Posted on LinkedIn: 'We're scaling our RevOps team'",
    color: "text-purple-500"
  }
];

export default function ScanSection() {
  return (
    <section className="relative pt-32 pb-32 bg-gradient-to-br from-[#0D0D12] to-[#1A1A22] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Blur/Glow Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl lg:text-5xl font-bold leading-tight ${roboto.className}`}
            >
              Karhuno scans the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                web & LinkedIn
              </span>{" "}
              for fresh buying intent
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl text-gray-300 ${montserrat.className}`}
            >
              Just public data. Verified signals. Updated daily.
            </motion.p>

            {/* Bullet List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {scanFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-lg text-gray-200 ${montserrat.className}`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
              
              {/* No scraping line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
                <span className={`text-lg text-gray-200 ${montserrat.className}`}>
                  No scraping. No guesswork.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mock Data Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                    TechNova
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Live</span>
                  </div>
                </div>

                {/* Signals List */}
                <div className="space-y-4">
                  {mockSignals.map((signal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <signal.icon className={`w-5 h-5 mt-0.5 ${signal.color}`} />
                      <span className={`text-sm text-gray-700 font-medium ${montserrat.className}`}>
                        {signal.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="mt-6 pt-4 border-t border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className={`text-sm font-medium text-gray-700 ${montserrat.className}`}>
                        Identified 3 relevant signals
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Updated 2 min ago
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <TrendingUp className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Calendar className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

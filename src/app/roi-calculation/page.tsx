"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import Footer from "@/components/home/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

export default function ROICalculation() {
  const [hours, setHours] = useState(12);
  const [salary, setSalary] = useState(20);
  const [revenue, setRevenue] = useState(10);

  const timeWithKarhuno = 0.5;
  const possibleEconomy = Math.round(salary * (hours - timeWithKarhuno) * 4);
  const possibleNewRevenue = Math.round((hours / 40) * revenue * 1000);

  return (
    <>
      <div className="min-h-screen bg-[#0f0f1a] py-20 px-4 relative overflow-hidden">
        {/* Gradient orbs for background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center space-x-3 mb-4">
              <span className="text-4xl">💸</span>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                  Calculate Your ROI
                </span>
              </h1>
            </span>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how much time and money you can save, and calculate your potential revenue increase
            </p>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-8 md:p-10 relative"
          >
            <div className="space-y-8">
              {/* Hours Input */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  How many hours does your team spend trying to find companies to reach out to per week?
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <Slider
                      value={[hours]}
                      onValueChange={(value) => setHours(value[0])}
                      max={40}
                      step={1}
                      className="py-4 [&>[role=slider]]:bg-purple-500 [&>[role=slider]]:border-purple-400 [&>[role=slider]]:shadow-lg [&>[role=slider]]:hover:scale-110 [&>[role=slider]]:transition-transform [&>div]:bg-purple-500/50 group-hover:[&>div]:h-2 [&>div]:transition-all"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-white">{hours} Hours</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={hours}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-purple-400"
                      >
                        With Karhuno: {timeWithKarhuno} hours
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Salary Input */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Gross salary with taxes, $ per hour
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <Slider
                      value={[salary]}
                      onValueChange={(value) => setSalary(value[0])}
                      max={100}
                      step={1}
                      className="py-4 [&>[role=slider]]:bg-purple-500 [&>[role=slider]]:border-purple-400 [&>[role=slider]]:shadow-lg [&>[role=slider]]:hover:scale-110 [&>[role=slider]]:transition-transform [&>div]:bg-purple-500/50 group-hover:[&>div]:h-2 [&>div]:transition-all"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-white">${salary}</span>
                  </div>
                </div>
              </div>

              {/* Revenue Input */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Average sales volume per 1 sales manager per month, $K
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <Slider
                      value={[revenue]}
                      onValueChange={(value) => setRevenue(value[0])}
                      max={50}
                      step={1}
                      className="py-4 [&>[role=slider]]:bg-purple-500 [&>[role=slider]]:border-purple-400 [&>[role=slider]]:shadow-lg [&>[role=slider]]:hover:scale-110 [&>[role=slider]]:transition-transform [&>div]:bg-purple-500/50 group-hover:[&>div]:h-2 [&>div]:transition-all"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-white">${revenue}K</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-gray-400 text-sm mb-2">Monthly time savings</p>
                  <p className="text-2xl font-semibold text-white">{hours - timeWithKarhuno} hours</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-gray-400 text-sm mb-2">Monthly cost savings</p>
                  <p className="text-2xl font-semibold text-purple-400">${possibleEconomy}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-gray-400 text-sm mb-2">Potential new revenue</p>
                  <p className="text-2xl font-semibold text-purple-400">${possibleNewRevenue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href="https://my.karhuno.com/signup"
              className={`inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
            >
              Start Free Trial
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 
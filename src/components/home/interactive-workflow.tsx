"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Brain, Zap, Newspaper, TrendingUp, Briefcase, Link, CheckCircle, ArrowRight } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const scanSnippets = [
  {
    icon: Newspaper,
    text: "Searching: Press releases & media announcements",
    color: "from-blue-500 to-cyan-500",
    delay: 0
  },
  {
    icon: TrendingUp,
    text: "Tracking: Product launches and expansion plans",
    color: "from-green-500 to-emerald-500",
    delay: 0.5
  },
  {
    icon: Briefcase,
    text: "Detected: Job openings & hiring trends",
    color: "from-purple-500 to-pink-500",
    delay: 1
  },
  {
    icon: Link,
    text: "Scanning: LinkedIn company updates & posts",
    color: "from-orange-500 to-red-500",
    delay: 1.5
  }
];

const identifiedKeywords = [
  { text: "Tech Industry", color: "bg-blue-500/20 text-blue-300" },
  { text: "United Kingdom", color: "bg-green-500/20 text-green-300" },
  { text: "Funding Event", color: "bg-purple-500/20 text-purple-300" }
];

const companyResults = [
  {
    name: "Voltify Ltd",
    status: "Raised Series A",
    source: "TechCrunch",
    contact: "Sarah Liu (CMO)",
    icon: "🏢",
    delay: 0
  },
  {
    name: "Gridloop",
    status: "Hiring for RevOps",
    source: "LinkedIn Post",
    contact: "James Carter (VP Sales)",
    icon: "🏢",
    delay: 0.3
  },
  {
    name: "Finably",
    status: "Opened new UK HQ",
    source: "Company Blog",
    contact: "Eliza Grant (Head of Ops)",
    icon: "🏢",
    delay: 0.6
  },
  {
    name: "TechFlow",
    status: "Expanding to Europe",
    source: "Press Release",
    contact: "Marcus Weber (CEO)",
    icon: "🚀",
    delay: 0.9
  },
  {
    name: "DataSync",
    status: "Hiring 50 engineers",
    source: "AngelList",
    contact: "Lisa Chen (CTO)",
    icon: "💻",
    delay: 1.2
  },
  {
    name: "CloudVault",
    status: "Partnership announced",
    source: "VentureBeat",
    contact: "David Park (VP Growth)",
    icon: "☁️",
    delay: 1.5
  },
  {
    name: "InnovateLab",
    status: "New product launch",
    source: "Product Hunt",
    contact: "Alex Rivera (Founder)",
    icon: "⚡",
    delay: 1.8
  },
  {
    name: "ScaleUp Inc",
    status: "Hiring CTO",
    source: "AngelList",
    contact: "Maria Santos (HR Director)",
    icon: "🎯",
    delay: 2.1
  },
  {
    name: "FutureTech",
    status: "Expanding globally",
    source: "Forbes",
    contact: "John Kim (VP International)",
    icon: "🌍",
    delay: 2.4
  }
];

export default function InteractiveWorkflow() {
  const { scrollYProgress } = useScroll();
  const [currentStep, setCurrentStep] = useState(0);
  
  const lineProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-32 px-8 bg-gradient-to-br from-[#0A0A0F] to-[#1B1B23] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${roboto.className}`}>
            <span className="text-white">What </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Karhuno AI
            </span>
            <span className="text-white"> does</span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
            Discover how Karhuno turns real buying signals into warm leads without scraping, guesswork or cold data.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* 1. Scan Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            animate={{
              scale: currentStep === 0 ? 1.02 : 1,
              filter: currentStep === 0 ? "brightness(1.1)" : "brightness(1)"
            }}
            className="relative flex flex-col items-center text-center h-full min-h-[500px]"
          >
            <div className="relative w-full max-w-sm">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-3xl lg:text-4xl font-bold mb-8 ${roboto.className}`}
              >
                <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent font-bold">
                  We scan where intent lives
                </span>
              </motion.h2>

              {/* Floating Search Snippets */}
              <div className="space-y-4 mt-8">
                {scanSnippets.map((snippet, index) => {
                  const Icon = snippet.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: snippet.delay }}
                      className="relative"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -8, 0],
                          rotateY: [0, 8, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: snippet.delay,
                          ease: "easeInOut"
                        }}
                        className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                          boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${snippet.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className={`text-white font-medium text-sm ${montserrat.className}`}>
                            {snippet.text}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 2. Identify Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{
              scale: currentStep === 1 ? 1.02 : 1,
              filter: currentStep === 1 ? "brightness(1.1)" : "brightness(1)"
            }}
            className="relative flex flex-col items-center text-center h-full min-h-[500px]"
          >
            <div className="relative w-full max-w-sm">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-3xl lg:text-4xl font-bold mb-8 ${roboto.className}`}
              >
                <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent font-bold">
                  Describe your ideal lead in plain language
                </span>
              </motion.h2>

              {/* AI Terminal Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))`,
                  boxShadow: `0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)`
                }}
              >
                {/* Terminal Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">AI Terminal</span>
                </div>

                {/* Input Bar */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-green-400">$</span>
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 text-white"
                  >
                    "Tech companies in the UK that raised funding"
                  </motion.div>
                </div>

                {/* AI Processing */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Brain className="w-4 h-4 animate-pulse" />
                    <span>AI interpreting query...</span>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {identifiedKeywords.map((keyword, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${keyword.color}`}
                      >
                        {keyword.text}
                      </motion.div>
                    ))}
                  </div>

                  {/* Results Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    className="flex items-center space-x-2 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">12 buying signals detected</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Act Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{
              scale: currentStep === 2 ? 1.02 : 1,
              filter: currentStep === 2 ? "brightness(1.1)" : "brightness(1)"
            }}
            className="relative flex flex-col items-center text-center h-full min-h-[500px]"
          >
            <div className="relative w-full max-w-sm">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-3xl lg:text-4xl font-bold mb-8 ${roboto.className}`}
              >
                <motion.span 
                  className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We tell you who to reach and why now.
                </motion.span>
              </motion.h2>

              {/* Infinite Scrolling Company Display */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="flex flex-col space-y-4"
                  animate={{
                    y: [0, -600, 0]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Triple the array for seamless infinite loop */}
                  {[...companyResults, ...companyResults, ...companyResults].map((company, index) => (
                    <motion.div
                      key={`${company.name}-${index}`}
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        y: [0, -2, 0]
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-2xl hover:bg-white/15 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                        boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{company.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className={`text-white font-bold text-sm ${roboto.className}`}>
                              {company.name}
                            </h4>
                            <span className="text-cyan-400 text-xs font-medium">
                              — {company.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300 text-xs">
                            <Link className="w-3 h-3" />
                            <span>Source: {company.source}</span>
                            <span className="text-gray-500">|</span>
                            <span>Contact: {company.contact}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Gradient Overlays for smooth fade effect */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0A0A0F] to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none"></div>
                
                {/* Moving Glow Effect */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                  animate={{
                    y: [0, 256, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

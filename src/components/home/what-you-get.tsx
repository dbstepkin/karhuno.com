"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, MapPin, TrendingUp, Search, Zap, Target, Building2, Users, Euro } from "lucide-react";
import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const tabs = [
  {
    id: "scan",
    title: "Scan",
    description: "Discover signals from the open web. Karhuno scans publicly available content — from press releases and articles to job boards and blog mentions — helping you find signals that matter without relying on scraping or private data.",
    image: "/images/scan-icons.png"
  },
  {
    id: "identify",
    title: "Identify",
    description: "Using advanced filters, you can precisely define your Ideal Customer Profile (ICP) or buying signal in plain language, specifying industries, geographies, roles, and keywords.",
    image: "/images/sales-pipeline.png"
  },
  {
    id: "act",
    title: "Act",
    description: "Receive a curated list of verified companies or contacts, complete with proof links and context, ready for targeted outreach — all accessible from a single intuitive dashboard. (coming soon)",
    image: "/images/database-storage.png"
  }
];

// Define the type for logo objects
interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderColor: string;
  bgGradient: string;
}

// Array of public source icons with their information
const logos: Logo[] = [
  {
    src: "🌐",
    alt: "News & Articles",
    width: 80,
    height: 80,
    borderColor: "border-blue-500/30",
    bgGradient: "from-blue-500/10 to-blue-600/5"
  },
  {
    src: "📃",
    alt: "Press Releases",
    width: 80,
    height: 80,
    borderColor: "border-purple-500/30",
    bgGradient: "from-purple-500/10 to-purple-600/5"
  },
  {
    src: "💼",
    alt: "Job Listings",
    width: 80,
    height: 80,
    borderColor: "border-green-500/30",
    bgGradient: "from-green-500/10 to-green-600/5"
  },
  {
    src: "📊",
    alt: "Company Reports",
    width: 80,
    height: 80,
    borderColor: "border-orange-500/30",
    bgGradient: "from-orange-500/10 to-orange-600/5"
  },
  {
    src: "📝",
    alt: "Blogs",
    width: 80,
    height: 80,
    borderColor: "border-pink-500/30",
    bgGradient: "from-pink-500/10 to-pink-600/5"
  },
  {
    src: "🧠",
    alt: "Thought Leadership",
    width: 80,
    height: 80,
    borderColor: "border-indigo-500/30",
    bgGradient: "from-indigo-500/10 to-indigo-600/5"
  }
];

const contacts = [
  {
    type: "contact",
    name: "Sarah Johnson",
    role: "Head of Sales",
    company: "TechGrowth Inc",
    linkedin: "#",
    email: "sarah@techgrowth.com"
  },
  {
    type: "company",
    name: "InnovateSoft",
    location: "Berlin, Germany",
    signal: "Expanding development team"
  },
  {
    type: "contact",
    name: "Michael Chen",
    role: "VP of Operations",
    company: "CloudScale Solutions",
    linkedin: "#",
    email: "mchen@cloudscale.com"
  },
  {
    type: "company",
    name: "DataFlow Systems",
    location: "London, UK",
    signal: "Raised Series B funding"
  },
  {
    type: "contact",
    name: "Emma Wilson",
    role: "CTO",
    company: "AI Solutions Ltd",
    linkedin: "#",
    email: "emma@aisolutions.com"
  }
];

const ContactCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/10 mb-4">
      {data.type === "contact" ? (
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-sm">{data.name}</h4>
          <p className="text-xs text-gray-300">{data.role}</p>
          <p className="text-xs text-purple-400">{data.company}</p>
          <div className="flex gap-3 mt-2">
            <a href={data.linkedin} className="text-blue-400 hover:text-blue-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${data.email}`} className="text-purple-400 hover:text-purple-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-sm">{data.name}</h4>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <MapPin className="w-3 h-3" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span>{data.signal}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedCards = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm h-[400px] relative overflow-hidden">
        {/* Scrolling container */}
        <div className="absolute inset-0">
          <div className="animate-scroll-vertical flex flex-col py-4">
            {/* First set of cards */}
            {contacts.map((contact, index) => (
              <ContactCard key={index} data={contact} />
            ))}
            {/* Duplicate set for seamless loop */}
            {contacts.map((contact, index) => (
              <ContactCard key={`duplicate-${index}`} data={contact} />
            ))}
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0f1117] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f1117] to-transparent z-10" />
      </div>
    </div>
  );
};

const ScrollingText = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10">
      <div className="absolute inset-0 flex flex-col items-start gap-4 animate-scroll p-6">
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p>Company X just raised $10M in Series A</p>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <p>Startup Y is expanding to European market</p>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <p>Tech Corp Z is hiring new sales team</p>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <p>Company A acquired AI startup</p>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <p>Startup B launched new product line</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1117]/90" />
    </div>
  );
};

const ScrollingLogos = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-12 animate-scroll-horizontal whitespace-nowrap py-12">
          {/* First set of icons */}
          <div className="flex gap-12 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.bgGradient} ${logo.borderColor} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {logo.src}
                </div>
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex gap-12 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`}
                className={`w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.bgGradient} ${logo.borderColor} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {logo.src}
                </div>
              </div>
            ))}
          </div>
          {/* Third set to ensure complete coverage */}
          <div className="flex gap-12 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={`triple-${index}`}
                className={`w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.bgGradient} ${logo.borderColor} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {logo.src}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Reduced gradient fade at edges for smoother flow */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f1117] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f1117] to-transparent z-10" />
    </div>
  );
};

const IdentifyProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showScanMessage, setShowScanMessage] = useState(false);
  const [scanCount, setScanCount] = useState(0);
  const [analysisPhase, setAnalysisPhase] = useState(0);

  // All creative filters shown together
  const allFilters = [
    // Row 1 - Classic
    { text: "Hiring", color: "bg-purple-500", delay: 0 },
    { text: "AI Industry", color: "bg-blue-500", delay: 0.1 },
    { text: "Germany", color: "bg-green-500", delay: 0.2 },
    { text: "Last 7 days", color: "bg-orange-500", delay: 0.3 },
    
    // Row 2 - Specific  
    { text: "Blue website", color: "bg-cyan-500", delay: 0.4 },
    { text: "Founded 2020+", color: "bg-indigo-500", delay: 0.5 },
    { text: "Remote work", color: "bg-teal-500", delay: 0.6 },
    { text: "Series A", color: "bg-emerald-500", delay: 0.7 },
    
    // Row 3 - Creative
    { text: "CEO posts daily", color: "bg-pink-500", delay: 0.8 },
    { text: "Uses Slack", color: "bg-violet-500", delay: 0.9 },
    { text: "Tech stack: React", color: "bg-sky-500", delay: 1.0 },
    { text: "Office dog", color: "bg-amber-500", delay: 1.1 }
  ];

  const sources = [
    { name: "LinkedIn", logo: "/images/logos/linkedin logo.png", x: 15, y: 20, pulse: false },
    { name: "Crunchbase", logo: "/images/logos/crunch base.png", x: 75, y: 30, pulse: false },
    { name: "Reddit", logo: "/images/logos/reddit logo.webp.png", x: 25, y: 70, pulse: false },
    { name: "G2", logo: "/images/logos/g2 logo vecto.png", x: 85, y: 75, pulse: false },
    { name: "Meta", logo: "/images/logos/meta logo.png", x: 50, y: 45, pulse: false },
    { name: "Web", logo: "/images/logos/web logo.png", x: 60, y: 15, pulse: false }
  ];

  const analysisSteps = [
    "Processing natural language...",
    "Matching ICP criteria...", 
    "Analyzing sentiment patterns...",
    "Extracting buying signals...",
    "Ranking by relevance..."
  ];

  const signals = [
    {
      icon: <Users className="w-5 h-5" />,
      color: "bg-purple-500",
      text: "TechCorp is hiring a Sales Manager in Berlin",
      delay: 0
    },
    {
      icon: <Euro className="w-5 h-5" />,
      color: "bg-yellow-500", 
      text: "Startup Y just raised €5M in Seed round",
      delay: 0.3
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      color: "bg-blue-500",
      text: "AI startup expands into DACH region", 
      delay: 0.6
    },
    {
      icon: <Target className="w-5 h-5" />,
      color: "bg-green-500",
      text: "Company launches new AI product line",
      delay: 0.9
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 0) {
          setTimeout(() => setCurrentStep(1), 4000); // Clean timing
          return 0;
        } else if (prev === 1) {
          setShowScanMessage(true);
          
          // Enhanced scanning with multiple phases
          const countTimer = setInterval(() => {
            setScanCount(c => c < 3241 ? c + 89 : 3241);
          }, 40);
          
          // Analysis phases
          const phaseTimer = setInterval(() => {
            setAnalysisPhase(p => p < analysisSteps.length - 1 ? p + 1 : p);
          }, 800);
          
          setTimeout(() => {
            clearInterval(countTimer);
            clearInterval(phaseTimer);
            setCurrentStep(2);
          }, 4000);
          return 1;
        } else if (prev === 2) {
          setTimeout(() => {
            setCurrentStep(0);
            setShowScanMessage(false);
            setScanCount(0);
            setAnalysisPhase(0);
          }, 4000);
          return 2;
        }
        return prev;
      });
    }, 13000); // Clean 13-second cycle

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10 p-6">
      
      {/* Step 1: All Creative Filters Together */}
      <AnimatePresence>
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-6 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-white/90 text-base font-semibold mb-2 ${roboto.className}`}
              >
                Apply ANY Filter You Want
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`text-white/70 text-sm ${montserrat.className}`}
              >
                Literally anything - even "companies with blue websites"
              </motion.p>
            </motion.div>
            
            {/* All filters appearing together */}
            <div className="flex flex-wrap gap-2 justify-center max-w-lg mx-auto">
              {allFilters.map((filter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1 + filter.delay, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300
                  }}
                  className={`${filter.color} text-white px-3 py-1.5 rounded-full text-xs font-medium ${montserrat.className} shadow-lg`}
                >
                  {filter.text}
                </motion.div>
              ))}
            </div>

            {/* Emphasis text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-center mt-4"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className={`text-white/50 text-xs ${montserrat.className}`}
              >
                The possibilities are endless...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 2: Enhanced Analysis - Keep this amazing part unchanged */}
      <AnimatePresence>
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 p-6"
          >
            {/* Central AI Brain */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Data source connections */}
            {sources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.7],
                  scale: [0.3, 1.2, 1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm p-2 border border-white/20"
                style={{ left: `${source.x}%`, top: `${source.y}%` }}
              >
                {/* Connection line to center */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full absolute -inset-8">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="200%"
                      stroke="rgba(168, 85, 247, 0.4)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    />
                  </svg>
                </motion.div>
                
                <Image
                  src={source.logo}
                  alt={source.name}
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
            ))}

            {/* Dynamic analysis text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className={`text-white/90 text-base ${montserrat.className}`}>
                  Analyzed {scanCount.toLocaleString()} articles
                </span>
              </div>
              
              <motion.div
                key={analysisPhase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-purple-300 text-sm ${montserrat.className}`}
              >
                {analysisSteps[analysisPhase]}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Results without relevance percentages */}
      <AnimatePresence>
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 p-6 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-center mb-6"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  ✓
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`text-green-400 text-sm ${montserrat.className}`}
              >
                High-intent signals discovered
              </motion.p>
            </motion.div>
            
            <div className="space-y-3">
              {signals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 1 + signal.delay, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`${signal.color} rounded-full p-2 text-white flex-shrink-0`}>
                    {signal.icon}
                  </div>
                  <span className={`text-white/90 text-sm leading-relaxed ${montserrat.className}`}>
                    {signal.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle progress indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {[0, 1, 2].map((step) => (
          <motion.div
            key={step}
            animate={{ 
              scale: currentStep === step ? 1.2 : 1,
              opacity: currentStep === step ? 1 : 0.4
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentStep === step ? 'bg-purple-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState("identify");

  return (
    <section className="min-h-screen bg-[#0f1117] text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-4 py-1.5 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium mb-6 ${montserrat.className}`}
          >
            real buying signal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}
          >
            What we <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">do</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-gray-300 text-lg md:text-xl max-w-2xl mx-auto ${montserrat.className}`}
          >
            Unlock actionable market signals to fuel your B2B growth
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-3 text-base font-medium rounded-full transition-all duration-200 ${montserrat.className}
                  ${activeTab === tab.id 
                    ? "bg-purple-700 text-white" 
                    : "text-white hover:bg-white/10"
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg"
        >
          <div className="md:flex gap-12 items-start">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {activeTab === "identify" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-2xl md:text-3xl font-bold mb-6 ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Supercharge your conversions with sales signals
                    </span>
                  </motion.h3>
                )}
                {activeTab === "scan" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-2xl md:text-3xl font-bold mb-6 ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Discover signals from the open web
                    </span>
                  </motion.h3>
                )}
                {activeTab === "act" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-2xl md:text-3xl font-bold mb-6 tracking-tight ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Turn signals into sales with proof-backed contacts
                    </span>
                  </motion.h3>
                )}
                <p className={`text-lg text-gray-100 leading-relaxed ${montserrat.className}`}>
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
              </motion.div>
            </div>

            {/* Right Column - Image/Animation */}
            <div className="w-full md:w-1/2 h-[400px]">
              {activeTab === "identify" ? (
                <IdentifyProcess />
              ) : activeTab === "scan" ? (
                <ScrollingLogos />
              ) : (
                <AnimatedCards />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

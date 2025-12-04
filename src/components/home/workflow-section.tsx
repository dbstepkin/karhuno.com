"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Target, Zap, CheckCircle, ArrowRight, Globe, Users, TrendingUp } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const workflowSteps = [
  {
    id: "scan",
    number: "1",
    title: "Scan",
    subtitle: "Discover Real-Time Buying Signals",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Karhuno scans public web sources and LinkedIn activity to detect buying intent — in real time.",
    features: [
      "Press & media announcements",
      "Job openings and hiring trends", 
      "Product launches and partnerships",
      "LinkedIn company updates & posts"
    ],
    badge: "Live Signals",
    badgeColor: "bg-green-500"
  },
  {
    id: "identify", 
    number: "2",
    title: "Identify",
    subtitle: "Pinpoint the Right Opportunities",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "Describe your ideal buying trigger in plain language — Karhuno turns it into actionable signals.",
    features: [
      "Industry and region filters",
      "Company type or size",
      "Roles or departments involved",
      "Keywords, intent topics, or trends"
    ],
    badge: "AI-Powered",
    badgeColor: "bg-purple-500"
  },
  {
    id: "act",
    number: "3", 
    title: "Act",
    subtitle: "Reach Out With Context and Confidence",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    description: "Every signal comes with verified contact data, proof source, and context.",
    features: [
      "One-click access to source links",
      "Enriched contact info (no scraping)",
      "Export-ready leads for outreach tools",
      "Context and timing insights"
    ],
    badge: "Ready to Convert",
    badgeColor: "bg-orange-500"
  }
];

const sampleLead = {
  name: "Sarah Chen",
  role: "VP of Sales, TechCorp",
  company: "TechCorp",
  email: "sarah.chen@techcorp.com",
  linkedin: "linkedin.com/in/sarah-chen",
  signals: [
    { icon: TrendingUp, text: "Company raised $10M Series A", color: "text-green-600" },
    { icon: Users, text: "Hiring 5 new sales reps", color: "text-blue-600" },
    { icon: Globe, text: "Expanding to European market", color: "text-purple-600" }
  ]
};

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [showLead, setShowLead] = useState(false);
  const [showOutreach, setShowOutreach] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep === 0) {
      setShowLead(true);
      setShowOutreach(false);
      setShowResults(false);
    } else if (activeStep === 1) {
      setShowLead(true);
      setShowOutreach(true);
      setShowResults(false);
    } else if (activeStep === 2) {
      setShowLead(true);
      setShowOutreach(true);
      setShowResults(true);
    }
  }, [activeStep]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
            How Karhuno AI Works
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`}
          >
            <span className="text-gray-900">What Karhuno AI </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">does</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${montserrat.className}`}
          >
            We track public buying signals and match them with up-to-date contacts — so you act when timing is right.
          </motion.p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive ? "0 0 20px rgba(147, 51, 234, 0.3)" : "0 0 0px rgba(147, 51, 234, 0)"
                      }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Step Card */}
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.02 : 1,
                      borderColor: isActive ? "#8b5cf6" : "#e5e7eb"
                    }}
                    className={`bg-white rounded-2xl p-6 border-2 ${step.borderColor} shadow-lg transition-all duration-300`}
                  >
                    {/* Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${step.badgeColor}`}>
                        {step.badge}
                      </div>
                      <Icon className={`w-6 h-6 ${isActive ? `text-${step.color.split('-')[1]}-500` : 'text-gray-400'}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${roboto.className}`}>
                      {step.title}
                    </h3>
                    
                    <h4 className={`text-lg font-semibold text-gray-700 mb-3 ${roboto.className}`}>
                      {step.subtitle}
                    </h4>

                    {/* Description */}
                    <p className={`text-gray-600 mb-4 ${montserrat.className}`}>
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0.7,
                            x: isActive ? 0 : -10
                          }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Arrow (hidden on mobile) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-2 z-10">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${roboto.className}`}>
              See It In Action
            </h3>
            <p className={`text-gray-600 ${montserrat.className}`}>
              Watch how Karhuno AI transforms signals into opportunities
            </p>
          </div>

          {/* Demo Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Step 1: Lead Discovery */}
            <AnimatePresence>
              {showLead && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700">New Lead Found!</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                        SC
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{sampleLead.name}</h4>
                        <p className="text-sm text-gray-600">{sampleLead.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 mr-2">📧</span>
                        <span className="text-gray-700">{sampleLead.email}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 mr-2">💼</span>
                        <span className="text-gray-700">{sampleLead.linkedin}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {sampleLead.signals.map((signal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center text-sm bg-white rounded-lg p-2"
                      >
                        <signal.icon className={`w-4 h-4 mr-2 ${signal.color}`} />
                        <span className="text-gray-700">{signal.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Outreach */}
            <AnimatePresence>
              {showOutreach && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Automated Outreach</h4>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                        SC
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">
                          "Hi Sarah! I noticed TechCorp just raised Series A and is expanding to Europe. 
                          We help companies like yours scale their sales operations. 
                          Would you be interested in a quick call?"
                        </p>
                        <span className="text-xs text-gray-500">11:05 AM</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        3x Higher Reply Rate
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Results</h4>
                  
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">+127%</div>
                      <div className="text-sm text-gray-600">More Qualified Leads</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-green-600 mb-1">5x</div>
                      <div className="text-sm text-gray-600">Faster Response Time</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
                      <div className="text-sm text-gray-600">Meeting Conversion</div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

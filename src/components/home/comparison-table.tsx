"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

interface ComparisonFeature {
  feature: string;
  karhuno: {
    available: boolean;
    label: string;
  };
  competitor: {
    available: boolean;
    label: string;
  };
}

const competitors = [
  { 
    id: "zoominfo", 
    name: "ZoomInfo", 
    subtitle: "Traditional database",
    color: "bg-blue-50",
    textColor: "text-blue-900"
  },
  { 
    id: "apollo", 
    name: "Apollo", 
    subtitle: "Basic lead generation",
    color: "bg-purple-50",
    textColor: "text-purple-900"
  },
  { 
    id: "lusha", 
    name: "Lusha", 
    subtitle: "Contact enrichment",
    color: "bg-green-50",
    textColor: "text-green-900"
  },
  { 
    id: "chatgpt", 
    name: "ChatGPT", 
    subtitle: "AI conversation tool",
    color: "bg-emerald-50",
    textColor: "text-emerald-900"
  },
  { 
    id: "perplexity", 
    name: "Perplexity", 
    subtitle: "Search assistant",
    color: "bg-indigo-50",
    textColor: "text-indigo-900"
  },
  { 
    id: "claude", 
    name: "Claude", 
    subtitle: "AI analysis tool",
    color: "bg-orange-50",
    textColor: "text-orange-900"
  },
];

const features: ComparisonFeature[] = [
  {
    feature: "Buying signals with context",
    karhuno: { available: true, label: "AI-powered" },
    competitor: { available: false, label: "Basic alerts" },
  },
  {
    feature: "Define your own trigger or signal",
    karhuno: { available: true, label: "Custom rules" },
    competitor: { available: false, label: "Predefined only" },
  },
  {
    feature: "Signal proof (news, post, URL)",
    karhuno: { available: true, label: "Verified sources" },
    competitor: { available: false, label: "Limited context" },
  },
  {
    feature: "Launch speed / ease of use",
    karhuno: { available: true, label: "Minutes setup" },
    competitor: { available: false, label: "Weeks required" },
  },
  {
    feature: "Email & LinkedIn contact info included",
    karhuno: { available: true, label: "Ready to use" },
    competitor: { available: true, label: "Basic info" },
  },
  {
    feature: "Filtering by job role, geography, etc.",
    karhuno: { available: true, label: "Advanced filters" },
    competitor: { available: true, label: "Standard filters" },
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff]">
      <div className="container mx-auto max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-block bg-purple-100 text-purple-700 px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wider mb-4 ${montserrat.className}`}
          >
            Feature Comparison
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-4 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Why top sales teams choose Karhuno AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-xl text-gray-600 max-w-2xl mx-auto ${roboto.className}`}
          >
            Compare Karhuno with your current stack
          </motion.p>
        </div>

        {/* Progressive Comparison Sections */}
        <div className="space-y-16">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Karhuno AI Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white h-[500px] flex flex-col">
                  {/* Logo placeholder space */}
                  <div className="w-16 h-16 bg-white/20 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold">K</span>
                  </div>
                  
                  {/* Tool name and subtitle */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${roboto.className}`}>Karhuno AI</h3>
                    <p className="text-purple-100">Your AI-powered sales intelligence</p>
                  </div>
                  
                  {/* Features table */}
                  <div className="flex-1 space-y-4">
                    {features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          {feature.karhuno.available ? (
                            <Check className="w-5 h-5 text-green-300" />
                          ) : (
                            <X className="w-5 h-5 text-red-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${roboto.className}`}>{feature.feature}</p>
                          <p className="text-xs text-purple-200 mt-1">{feature.karhuno.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Competitor Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="relative"
              >
                <div className={`${competitor.color} rounded-2xl p-8 h-[500px] flex flex-col ${competitor.textColor}`}>
                  {/* Logo placeholder space */}
                  <div className="w-16 h-16 bg-white/60 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">{competitor.name.charAt(0)}</span>
                  </div>
                  
                  {/* Tool name and subtitle */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${roboto.className}`}>{competitor.name}</h3>
                    <p className="text-gray-600">{competitor.subtitle}</p>
                  </div>
                  
                  {/* Features table */}
                  <div className="flex-1 space-y-4">
                    {features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-white/60 rounded-full flex items-center justify-center">
                          {feature.competitor.available ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${roboto.className}`}>{feature.feature}</p>
                          <p className="text-xs text-gray-500 mt-1">{feature.competitor.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Optional Dot Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex gap-2">
            {competitors.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-purple-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle, ArrowRight, Star, Zap, Target, Trophy } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";

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

type ToolType = 'chatgpt' | 'claude' | 'perplexity';

interface ToolData {
  id: ToolType;
  name: string;
  logo: string;
  description: string;
  screenshot: string;
  features: {
    text: string;
    icon: 'check' | 'cross' | 'warning';
  }[];
}

const toolsData: Record<ToolType, ToolData> = {
  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: '/logo verde chatgpt.webp',
    description: 'AI conversation tool',
    screenshot: '/result warehousechatgpt.png',
    features: [
      { text: '2 vague summaries', icon: 'cross' },
      { text: 'No buying signals', icon: 'warning' },
      { text: 'No source context', icon: 'cross' }
    ]
  },
  claude: {
    id: 'claude',
    name: 'Claude',
    logo: '/logoarancioclaude.png',
    description: 'AI analysis tool',
    screenshot: '/result warehouse claude.png',
    features: [
      { text: '4 vague summaries', icon: 'cross' },
      { text: 'No buying signals', icon: 'warning' },
      { text: 'No source context', icon: 'cross' }
    ]
  },
  perplexity: {
    id: 'perplexity',
    name: 'Perplexity',
    logo: '/logobluperplexity.jpg',
    description: 'Search assistant',
    screenshot: '/new perplecity warehouse.png',
    features: [
      { text: '4 vague summaries', icon: 'cross' },
      { text: 'No buying signals', icon: 'warning' },
      { text: 'No source context', icon: 'cross' }
    ]
  }
};

export default function AIComparison() {
  const [selectedTool, setSelectedTool] = useState<ToolType>('chatgpt');

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  const getIcon = (iconType: 'check' | 'cross' | 'warning') => {
    switch (iconType) {
      case 'check':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'cross':
        return <X className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          {...fadeUp}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-6 py-3 text-sm font-medium rounded-full uppercase tracking-wider mb-6 ${montserrat.className}`}>
            <Zap className="w-4 h-4" />
            Live Comparison
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold text-center mb-6 leading-tight ${roboto.className}`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              We tested the same query.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Only Karhuno delivered.
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className={`text-xl text-gray-300 ${roboto.className}`}>
              <span className="text-gray-400">Example query:</span> 
              <span className="text-white font-semibold ml-2">"logistic company open new warehouse in the US"</span>
            </p>
          </div>
        </motion.div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          
          {/* Karhuno AI - Winner Card */}
          <motion.div
            {...fadeUp}
            className="relative group"
          >
            {/* Winner Badge */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <Trophy className="w-4 h-4" />
                WINNER
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group-hover:scale-[1.02]">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Image 
                      src="/logo.png" 
                      alt="Karhuno AI logo" 
                      width={40} 
                      height={40} 
                      className="object-contain" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">Most Accurate Sales Signals Engine</div>
                  <h3 className={`text-3xl font-bold text-white ${roboto.className}`}>
                    Karhuno AI
                  </h3>
                  <p className="text-green-200">B2B sales signals platform</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  { text: "10+ verified results – not vague summaries", icon: "check" },
                  { text: "Live proof URLs – news, posts or LinkedIn sources", icon: "check" },
                  { text: "Sales-ready leads – fully enriched with context", icon: "check" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mt-0.5 border border-green-400/30">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-gray-200 text-lg leading-relaxed">
                      <span className="font-semibold text-white">{feature.text.split(' – ')[0]}</span>
                      {feature.text.includes(' – ') && (
                        <span className="text-green-300"> – {feature.text.split(' – ')[1]}</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Screenshot */}
              <div className="mb-8">
                <div className="rounded-2xl overflow-hidden border border-green-400/30 bg-gray-900/50 backdrop-blur-sm">
                  <div className="relative w-full h-72">
                    <Image 
                      src="/result warehouskarhuno.png" 
                      alt="Karhuno AI result" 
                      fill 
                      className="object-contain p-6" 
                    />
                  </div>
                </div>
                <p className="text-sm text-green-300 mt-3 text-center font-medium">Actual result from Karhuno AI platform</p>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 group"
              >
                Try the same query
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-green-300 mt-3 text-center font-medium">97% of users find more qualified leads with Karhuno AI</p>
            </div>
          </motion.div>

          {/* AI Tools - Competitor Card */}
          <motion.div
            {...fadeUp}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800/40 to-slate-800/40 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Image 
                    src={toolsData[selectedTool].logo} 
                    alt={`${toolsData[selectedTool].name} logo`} 
                    width={40} 
                    height={40} 
                    className="object-contain" 
                  />
                </div>
                <div className="ml-6">
                  <h3 className={`text-3xl font-bold text-gray-300 ${roboto.className}`}>
                    {toolsData[selectedTool].name}
                  </h3>
                  <p className="text-gray-400">{toolsData[selectedTool].description}</p>
                </div>
              </div>

              {/* Tool Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {toolsData[selectedTool].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          feature.icon === 'check' ? 'bg-green-500/20 border border-green-400/30' :
                          feature.icon === 'cross' ? 'bg-red-500/20 border border-red-400/30' : 
                          'bg-yellow-500/20 border border-yellow-400/30'
                        }`}>
                          {getIcon(feature.icon)}
                        </div>
                        <span className="text-gray-300 text-lg font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Screenshot */}
                  <div className="mb-8">
                    <div className="rounded-2xl overflow-hidden border border-gray-600/30 bg-gray-900/50 backdrop-blur-sm">
                      <div className="relative w-full h-72">
                        <Image 
                          src={toolsData[selectedTool].screenshot} 
                          alt={`${toolsData[selectedTool].name} result`} 
                          fill 
                          className="object-contain p-6" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Tool Switcher */}
              <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-600/30">
                <div className="grid grid-cols-3 gap-2">
                  {Object.values(toolsData).map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedTool === tool.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
                      }`}
                    >
                      {tool.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          {...fadeUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-300">More Results</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Verified Sources</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">97%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
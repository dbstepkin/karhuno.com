"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5 }
  } as const;

  const getIcon = (iconType: 'check' | 'cross' | 'warning') => {
    switch (iconType) {
      case 'check':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'cross':
        return <X className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    }
  };


  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            {...fadeUp}
            className={`inline-block bg-purple-100 text-purple-700 px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wider mb-4 ${montserrat.className}`}
          >
            Comparison Switch
          </motion.div>
          <motion.h2
            {...fadeUp}
            className={`text-4xl md:text-5xl font-bold text-center mb-2 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              We tested the same query. Only Karhuno delivered.
            </span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            className={`text-lg text-gray-600 mb-8 ${roboto.className}`}
          >
            Example query: "logistic company open new warehouse in the US"
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Karhuno AI Card - Always on the left */}
          <motion.div
            {...fadeUp}
            className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <Image 
                  src="/logo.png" 
                  alt="Karhuno AI logo" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-purple-500 uppercase mb-1">Most accurate sales signals engine</div>
                <h3 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                  Karhuno AI
                </h3>
                <p className="text-gray-600">B2B sales signals platform</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">
                  <b>10+ verified results</b> – not vague summaries
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">
                  <b>Live proof URLs</b> – news, posts or LinkedIn sources
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">
                  <b>Sales-ready leads</b> – fully enriched with context
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-6">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <div className="relative w-full h-64">
                  <Image 
                    src="/result warehouskarhuno.png" 
                    alt="Karhuno AI result" 
                    fill 
                    className="object-contain p-4" 
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Actual result from Karhuno AI platform</p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Try the same query
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">97% of users find more qualified leads with Karhuno AI</p>
          </motion.div>

          {/* AI Tools Card - Right side with switcher */}
          <motion.div
            {...fadeUp}
            className="bg-zinc-50 rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            {/* Tool Header - Alligned with Karhuno AI header */}
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <Image 
                  src={toolsData[selectedTool].logo} 
                  alt={`${toolsData[selectedTool].name} logo`} 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div>
                <h3 className={`text-2xl font-bold text-gray-700 ${roboto.className}`}>
                  {toolsData[selectedTool].name}
                </h3>
                <p className="text-gray-500">{toolsData[selectedTool].description}</p>
              </div>
            </div>

            {/* Tool Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTool}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Features */}
                <div className="space-y-4 mb-6">
                  {toolsData[selectedTool].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        feature.icon === 'check' ? 'bg-green-100' :
                        feature.icon === 'cross' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        {getIcon(feature.icon)}
                      </div>
                      <span className="text-gray-600 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Screenshot */}
                <div className="mb-6">
                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                    <div className="relative w-full h-64">
                      <Image 
                        src={toolsData[selectedTool].screenshot} 
                        alt={`${toolsData[selectedTool].name} result`} 
                        fill 
                        className="object-contain p-4" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tool Switcher - Aligned with Karhuno AI CTA */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              {Object.values(toolsData).map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedTool === tool.id
                      ? 'bg-white text-gray-900 shadow-sm border border-gray-300 font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:shadow-md hover:bg-white'
                  }`}
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

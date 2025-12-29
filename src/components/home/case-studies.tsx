"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Package, Search, Target } from "lucide-react";
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

const caseStudies = [
  {
    id: "logistic",
    label: "Logistic",
    product: {
      title: "Smart Lighting Systems for Cold Storage and Industrial Warehouses",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signals: {
      title: "Detection of warehouse expansions, cold storage build-outs, and infrastructure upgrades.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "Saw you’re planning a new warehouse in Australia. Given local energy costs and compliance requirements, many cold storage operators review lighting systems early to avoid locking in unnecessary long-term energy spend.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/new warehouse signals.png",
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS",
    product: {
      title: "ESG Software",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signals: {
      title: "Announcing the purchase of carbon credits. Tracking ESG reports, corporate sustainability announcements, and regulatory filings.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "Noticed your carbon-credit purchase, curious how you're currently managing ESG data, happy to share benchmarks.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/esg image .png",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    product: {
      title: "Industrial Automation Solutions and Production Line Optimization",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signals: {
      title: "Hiring production and automation managers",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "I saw that you’re hiring a Project Manager for your production operations. Companies usually do this right before starting automation or production line optimization projects. We work with manufacturers at this stage to help optimize line performance before changes are locked in.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/manufacturing signals.png",
  },
];

interface CaseStudiesProps {
  id?: string;
}

export default function CaseStudies({ id }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState("logistic");
  const activeCase = caseStudies.find((cs) => cs.id === activeTab);

  return (
    <section id={id} className="py-20 px-4 bg-[#0f1117]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium mb-4"
          >
            Real examples
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Signal-Based Use Cases
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            See how companies use Karhuno AI to find their perfect customers
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar">
          <div className="inline-flex gap-2 p-1 bg-black/20 backdrop-blur-sm rounded-full border border-white/10">
            {caseStudies.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
                  ${activeTab === tab.id
                    ? "bg-purple-700 text-white shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Left Column - Image */}
                <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={activeCase.image}
                    alt={`${activeCase.label} case study`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="bg-[#12141b] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-6">
                  {/* Product Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.product.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        Product
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">
                      {activeCase.product.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* Signals Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.signals.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        Signals
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">
                      {activeCase.signals.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* How they act Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.howToAct.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        How they act
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed italic">
                      "{activeCase.howToAct.title}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

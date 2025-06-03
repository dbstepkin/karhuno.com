"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Package, Search } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const caseStudies = [
  {
    id: "logtech",
    label: "LogTech",
    product: {
      title: "Smart Lighting Systems for Cold Storage and Industrial Warehouses",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Detection of warehouse expansion news, including cold storage build-outs and infrastructure upgrades. Tracking press releases, local news and investment announcements.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/Logtech.webp",
  },
  {
    id: "hrtech",
    label: "HRTech",
    product: {
      title: "Gamification Platforms for Corporate Learning & Engagement",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Companies promoting internal entrepreneurship or team agility through SCRUM-based frameworks.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/HRTech.webp",
  },
  {
    id: "legaltech",
    label: "LegalTech",
    product: {
      title: "Intellectual Property Platforms for Startup & Crowdfunding Compliance",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Startups that completed successful crowdfunding campaigns, indicating a need for IP protection or licensing.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/LegalTech.webp",
  },
  {
    id: "greentech",
    label: "GreenTech",
    product: {
      title: "AI-Based Energy Management Software for Sustainable Operations",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Companies investing in green technology, energy efficiency, or sustainability-driven upgrades.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/GreenTech.webp",
  },
  {
    id: "fintech",
    label: "FinTech",
    product: {
      title: "Real-Time Money Transfer Solutions for the UAE Market",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Fintech companies operating or expanding in the UAE, flagged by financial activity and product launches.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/Fintech.webp",
  },
  {
    id: "martech",
    label: "MarTech",
    product: {
      title: "Marketing Strategy & Campaign Services for the HoReCa Sector",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signalSearch: {
      title: "Rapidly growing Instagram profiles of Brazilian HoReCa brands, signaling active audience engagement and digital investment.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    image: "/images/MarTech.webp",
  },
];

interface CaseStudiesProps {
  id?: string;
}

export default function CaseStudies({ id }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState("logtech");
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
            case studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Success Stories
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
        <div className="max-w-6xl mx-auto">
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
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={activeCase.image}
                    alt={`${activeCase.label} case study`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="bg-[#12141b] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                  <div className="border-t border-white/10 my-6" />

                  {/* Signal Search Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.signalSearch.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        Signal Search
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">
                      {activeCase.signalSearch.title}
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

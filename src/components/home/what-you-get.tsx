"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, MapPin, TrendingUp } from "lucide-react";

const tabs = [
  {
    id: "scan",
    title: "Scan",
    description: "Our AI continuously scans thousands of online sources — news, social media, company reports, blogs, forums, and more — to detect real-time market signals relevant to your business.",
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
    description: "Receive a curated list of verified companies or contacts, complete with proof links and context, ready for targeted outreach — all accessible from a single intuitive dashboard.",
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

// Array of logos with their information
const logos: Logo[] = [
  {
    src: "/images/logos/g2 logo vecto.png",
    alt: "G2 Logo",
    width: 80,
    height: 80,
    borderColor: "border-orange-500/30",
    bgGradient: "from-orange-500/10 to-orange-600/5"
  },
  {
    src: "/images/logos/crunch base.png",
    alt: "Crunchbase Logo",
    width: 80,
    height: 80,
    borderColor: "border-blue-500/30",
    bgGradient: "from-blue-500/10 to-blue-600/5"
  },
  {
    src: "/images/logos/linkedin logo.jpg",
    alt: "LinkedIn Logo",
    width: 80,
    height: 80,
    borderColor: "border-sky-500/30",
    bgGradient: "from-sky-500/10 to-sky-600/5"
  },
  {
    src: "/images/logos/reddit logo.webp",
    alt: "Reddit Logo",
    width: 80,
    height: 80,
    borderColor: "border-orange-400/30",
    bgGradient: "from-orange-400/10 to-orange-500/5"
  },
  {
    src: "/images/logos/images-4.png",
    alt: "Additional Logo",
    width: 80,
    height: 80,
    borderColor: "border-purple-500/30",
    bgGradient: "from-purple-500/10 to-purple-600/5"
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
        <div className="flex gap-16 animate-scroll-horizontal whitespace-nowrap py-12">
          {/* First set of logos */}
          <div className="flex gap-16 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`w-32 h-32 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.bgGradient} ${logo.borderColor} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-16 min-w-max">
            {logos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`}
                className={`w-32 h-32 rounded-2xl flex items-center justify-center bg-gradient-to-br ${logo.bgGradient} ${logo.borderColor} border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Subtle gradient fade at edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0f1117] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0f1117] to-transparent z-10" />
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
            className="inline-block px-4 py-1.5 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            real buying signal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What we <span className="text-purple-500">do</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
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
                  px-8 py-3 text-base font-medium rounded-full transition-all duration-200
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
                    className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  >
                    Supercharge your conversions with sales signals
                  </motion.h3>
                )}
                {activeTab === "scan" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  >
                    Continuous discovery of high-intent signals
                  </motion.h3>
                )}
                {activeTab === "act" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight"
                  >
                    Turn signals into sales with proof-backed contacts
                  </motion.h3>
                )}
                <p className="text-lg text-gray-100 leading-relaxed">
                  {tabs.find(tab => tab.id === activeTab)?.description}
                </p>
              </motion.div>
            </div>

            {/* Right Column - Image/Animation */}
            <div className="w-full md:w-1/2 h-[400px]">
              {activeTab === "identify" ? (
                <ScrollingText />
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

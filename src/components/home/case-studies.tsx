"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Package, Search, Lightbulb, Target } from "lucide-react";
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
      title: "Detection of warehouse expansion news, including cold storage build-outs and infrastructure upgrades. Tracking press releases, local news and investment announcements.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    whyItMatters: {
      title: "Warehouse expansions signal immediate need for infrastructure solutions. Companies investing in new facilities are actively evaluating vendors and making purchasing decisions.",
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "Reach out within 24-48 hours of the announcement. Position your solution as essential infrastructure for their new facility. Offer a site visit or consultation to demonstrate value.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/images/Logtech.webp",
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS",
    product: {
      title: "Sales Automation & CRM Integration Platforms for Growing Teams",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signals: {
      title: "Companies hiring for sales roles (SDRs, AEs, Sales Managers), indicating active revenue expansion and need for sales tools. Tracking job boards, LinkedIn hiring posts, and growth announcements.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    whyItMatters: {
      title: "Hiring sales talent means they're scaling revenue operations. This is the perfect moment to offer tools that help new hires ramp faster and existing teams close more deals.",
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "Connect with the hiring manager or VP of Sales. Frame your solution as essential for onboarding new reps and scaling their sales process. Offer a demo focused on team efficiency.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/images/Logtech.webp",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    product: {
      title: "Industrial Automation Solutions and Production Line Optimization",
      icon: <Package className="w-5 h-5 text-purple-400" />
    },
    signals: {
      title: "Manufacturing companies announcing new production facilities, equipment upgrades, or automation initiatives. Tracking industry news, expansion announcements, and technology adoption signals.",
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    whyItMatters: {
      title: "New facilities and automation projects require comprehensive planning. Companies are actively evaluating vendors and solutions during the planning phase, making this the ideal time to engage.",
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />
    },
    howToAct: {
      title: "Reach out to operations or engineering leadership. Position your solution as critical infrastructure for their new facility. Offer a technical consultation or case study from similar projects.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    image: "/images/Logtech.webp",
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

                  {/* Why it Matters Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.whyItMatters.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        Why it matters
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">
                      {activeCase.whyItMatters.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* How to Act Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        {activeCase.howToAct.icon}
                      </div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold text-lg">
                        How to act
                      </h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">
                      {activeCase.howToAct.title}
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

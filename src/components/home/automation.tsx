"use client";

import { motion } from "framer-motion";
import { Clock, Plug, Layers, RefreshCw } from "lucide-react";
import Link from "next/link";

interface FeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Clock className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-all duration-300" />,
    title: "Saved Searches",
    description: "Schedule custom searches to run automatically and never miss fresh signals.",
  },
  {
    icon: <Plug className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-all duration-300" />,
    title: "API Integration",
    description: "Connect Karhuno AI directly with your outreach platform or CRM.",
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-all duration-300" />,
    title: "Parallel Tracking",
    description: "Monitor multiple ICPs at once for full market coverage.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-all duration-300" />,
    title: "Real-time Updates",
    description: "Keep your sales pipeline full with no manual effort.",
  },
];

export default function Automation() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff]">
      <div className="container mx-auto">
        {/* Micro-heading */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-center text-sm font-medium tracking-wider uppercase text-purple-600 mb-4"
        >
          AI-powered automation
        </motion.span>

        {/* Title and Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center mb-4"
        >
          Maximize efficiency with automation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-center mb-12 text-lg"
        >
          Automate your lead generation with saved searches, API integration, and real-time updates.
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/login"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            Start Free Trial →
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 
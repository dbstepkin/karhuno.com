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
  zoomInfo: boolean;
  apollo: boolean;
  karhuno: boolean;
}

const features: ComparisonFeature[] = [
  {
    feature: "Sales signals with context — not guesses",
    zoomInfo: false,
    apollo: false,
    karhuno: true,
  },
  {
    feature: "Define your sales trigger",
    zoomInfo: false,
    apollo: false,
    karhuno: true,
  },
  {
    feature: "Launch in minutes. No tech team needed",
    zoomInfo: false,
    apollo: true,
    karhuno: true,
  },
  {
    feature: "Emails and LinkedIn links ready-to-use",
    zoomInfo: true,
    apollo: true,
    karhuno: true,
  },
  {
    feature: "Discover signals others can't",
    zoomInfo: false,
    apollo: false,
    karhuno: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff]">
      <div className="container mx-auto max-w-5xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
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
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-x-auto rounded-xl shadow-lg bg-white"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-4 px-6 text-left text-gray-600 font-medium w-[40%]">Feature</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">ZoomInfo</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Apollo</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium bg-purple-50/50 border-l-4 border-purple-500 rounded-tr-xl">
                  Karhuno AI
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={item.feature}
                  className={`${index !== features.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50/50 transition-colors`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.zoomInfo ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.apollo ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                  <td className={`py-4 px-6 text-center bg-purple-50/50 border-l-4 border-purple-500 ${
                    index === features.length - 1 ? "rounded-br-xl" : ""
                  }`}>
                    {item.karhuno ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

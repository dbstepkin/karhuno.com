"use client";

import { motion } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";
import { ScanLine, CalendarCheck, UserCheck, Cpu } from "lucide-react";

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

const benefits = [
  {
    icon: ScanLine,
    title: "Signals matched with real contacts",
    description: "Every lead includes a verified contact, source, and context, no guessing."
  },
  {
    icon: CalendarCheck,
    title: "Fresh leads daily, not recycled data",
    description: "We track new intent every day. What you get today wasn't relevant yesterday."
  },
  {
    icon: UserCheck,
    title: "No outdated or inactive contacts",
    description: "Our contacts are matched based on fresh signals, not pulled from an old database."
  },
  {
    icon: Cpu,
    title: "Context you can act on, not just names",
    description: "You see why the company is ready, funding, expansion, hiring, so you know when to reach out."
  }
];

export default function WhyKarhuno() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 ${roboto.className}`}>
            Why teams choose{" "}
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Karhuno
            </span>{" "}
            over static lead lists
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${montserrat.className}`}>
            Forget scraped emails and outdated info — our leads are alive, timely, and ready to convert.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#a974ff] to-[#679eff] rounded-2xl group-hover:shadow-lg transition-all duration-300"
                  >
                    <IconComponent 
                      className="w-8 h-8 text-white" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 leading-tight ${roboto.className}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${montserrat.className}`}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://my.karhuno.com/signup"
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-[#a974ff] to-[#679eff] hover:from-[#9c6bff] hover:to-[#5a8bff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${montserrat.className}`}
          >
            See how Karhuno beats static lead lists
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

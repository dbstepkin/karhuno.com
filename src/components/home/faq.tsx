"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Send } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const faqs = [
  {
    question: "What is Karhuno AI and how does it work?",
    answer:
      "A cutting-edge SaaS platform that tracks real-time buying signals from web and LinkedIn, helping you find leads precisely matched to your Ideal Customer Profile (ICP).",
  },
  {
    question: "How do I create an Ideal Customer Profile (ICP)?",
    answer:
      "Simply describe your ideal customer in plain language, including company attributes and desired signals — our AI refines it for you.",
  },
  {
    question: "What types of signals can Karhuno AI track?",
    answer:
      "Karhuno AI monitors LinkedIn posts and comments, news articles, PR releases, tenders, and other online sources for relevant buying signals.",
  },
  {
    question: "Can I filter leads by specific criteria?",
    answer:
      "Yes, you can apply limitless filters such as role, industry, company size, geography, funding stage, technology stack, and more.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "All signals and leads are updated daily to ensure you have the freshest and most accurate information.",
  },
  {
    question: "Do I need to log in with LinkedIn to use the platform?",
    answer:
      "No, Karhuno AI works independently without requiring LinkedIn login or scraping.",
  },
  {
    question: "Can I automate my lead searches?",
    answer:
      "Absolutely! Schedule recurring searches and integrate results with your CRM or outreach platform via API.",
  },
  {
    question: "How do I access the verified contact information?",
    answer:
      "Leads come with verified emails and LinkedIn profiles when available, ready for immediate outreach.",
  },
  {
    question: "What support resources are available?",
    answer:
      "We provide in-app guides, tutorials, and dedicated customer support to help you get the most from the platform.",
  },
  {
    question: "How is my data privacy protected?",
    answer:
      "Karhuno AI complies with GDPR and industry standards to ensure your data and contacts are handled securely and confidentially.",
  },
];

export default function FAQ({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      // Here you would normally send the data to your backend
      console.log('Contact form submitted:', { email, message });
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className={cn("relative py-24 overflow-hidden", className)}>
      {/* Soft Purple to Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient
                id="faq-grad1"
                cx="30%"
                cy="20%"
                r="60%"
                fx="30%"
                fy="20%"
              >
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </radialGradient>
              <radialGradient
                id="faq-grad2"
                cx="70%"
                cy="80%"
                r="50%"
                fx="70%"
                fy="80%"
              >
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.1)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#faq-grad1)">
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="0" y="0" width="100" height="100" fill="url(#faq-grad2)">
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}
          >
            Got questions?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl text-gray-700 max-w-2xl mx-auto mb-8 ${montserrat.className}`}
          >
            Let Karhuno the Bear answer them for you.
          </motion.p>
          
          {/* FAQ Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-purple-200/30">
              <Image
                src="/bannerfaq.png"
                alt="Karhuno AI FAQ Banner"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 overflow-hidden shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-50/30 transition-colors"
              >
                <h3 className={`text-lg font-semibold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent pr-4 ${roboto.className}`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className={`text-gray-900 leading-relaxed ${montserrat.className}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-purple-200/50 p-8 text-center shadow-lg">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`text-2xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}
            >
              Still have questions or doubts?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className={`text-gray-700 mb-6 ${montserrat.className}`}
            >
              Don't worry! Karhuno the Bear 🐻 is here to help. Leave your email and question, and we'll get back to you personally.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-1 gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className={`w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${montserrat.className}`}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to know about Karhuno AI?"
                  required
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border border-purple-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${montserrat.className}`}
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl ${montserrat.className}`}
              >
                <Send className="w-4 h-4" />
                Contact Karhuno
              </motion.button>
            </motion.form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mt-4 p-4 bg-green-100 border border-green-200 rounded-xl"
                >
                  <p className={`text-green-800 font-medium ${montserrat.className}`}>
                    🎉 Thanks! Karhuno the Bear will get back to you soon!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

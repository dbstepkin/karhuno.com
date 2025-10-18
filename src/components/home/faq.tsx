"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Send, Search, HelpCircle, Shield, Zap, Target, Settings, Lock, Link, Copy } from "lucide-react";
import Head from "next/head";
import { cn } from "@/lib/utils";
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

const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "signals-use-cases",
    title: "Signals & Use Cases",
    icon: <Zap className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "icp-signals",
    title: "ICP & Signals",
    icon: <Target className="w-5 h-5" />,
    color: "from-purple-500 to-violet-500"
  },
  {
    id: "leads-filters",
    title: "Lead Access & Filters",
    icon: <Search className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "platform-automation",
    title: "Platform & Automation",
    icon: <Settings className="w-5 h-5" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "security-support",
    title: "Security & Support",
    icon: <Shield className="w-5 h-5" />,
    color: "from-red-500 to-pink-500"
  }
];

const faqs = [
  {
    id: "what-is-karhuno",
    category: "general",
    question: "What is Karhuno AI and how does it work?",
    answer: "Karhuno AI is a real-time signal platform that helps you identify companies showing buying intent. It monitors LinkedIn, news, job boards, and more — and matches results to your ICP with verified contact details.",
    updated: "Oct 2025"
  },
  {
    id: "linkedin-login",
    category: "general",
    question: "Do I need a LinkedIn login to use Karhuno?",
    answer: "No. You can use Karhuno AI without LinkedIn login. The system works independently and does not scrape private data."
  },
  {
    id: "use-cases",
    category: "general",
    question: "What can I use Karhuno AI for?",
    answer: "Karhuno AI helps B2B sales teams find companies that show real-time buying intent — like hiring, opening new warehouses, or discussing relevant topics on LinkedIn. You can use it for lead generation, sales outreach, market research, or campaign targeting."
  },
  {
    id: "target-audience",
    category: "general",
    question: "Who is Karhuno AI built for?",
    answer: "Karhuno AI is built for outbound sales teams, agencies, B2B SaaS companies, consultants, and marketers who want to reach companies at the right moment — based on actual buying signals, not static lists."
  },
  {
    id: "vs-lead-databases",
    category: "general",
    question: "How is Karhuno different from lead databases?",
    answer: "Traditional databases give you static contacts. Karhuno AI delivers fresh leads based on real-world actions — like news, hiring, or product launches — and includes decision-maker contacts when available."
  },
  {
    id: "niche-markets",
    category: "general",
    question: "Does Karhuno work for niche markets?",
    answer: "Yes — you can track very specific companies, industries, and signal types. For example, \"IT consultancies hiring UX designers in Berlin\" or \"construction firms opening warehouses in Spain\"."
  },
  {
    id: "good-icp",
    category: "general",
    question: "What makes a good Ideal Customer Profile (ICP)?",
    answer: "A good ICP includes details like target industry, company size, location, roles you sell to, and the types of signals you care about (e.g. hiring, expansion, tech adoption). Karhuno AI helps you refine it step by step."
  },
  {
    id: "free-trial",
    category: "general",
    question: "Is there a free trial available?",
    answer: "You can unlock 7 days of full access using a promo code, if eligible. No credit card required to start."
  },
  {
    id: "warehouse-openings",
    category: "signals-use-cases",
    question: "Can Karhuno AI track warehouse openings?",
    answer: "Yes — warehouse openings are one of the strongest buying signals Karhuno AI can detect. You'll receive alerts when companies announce new facilities, expansions, or distribution centers — including proof links (news, job listings, press releases) and verified decision-makers to contact."
  },
  {
    id: "hiring-trends",
    category: "signals-use-cases",
    question: "Can I monitor hiring trends?",
    answer: "Absolutely. You can track when companies are hiring for specific roles (e.g., \"Warehouse Manager\", \"Logistics Lead\", \"Growth Marketer\"), which often signals investments in growth, tech, or infrastructure."
  },
  {
    id: "linkedin-activity",
    category: "signals-use-cases",
    question: "Does Karhuno detect LinkedIn activity?",
    answer: "Yes. Our LinkedIn Radar feature tracks public posts and comments based on keywords you choose (e.g., \"cold outreach\", \"AI tools\", \"user research\"), and identifies people engaging with those posts — ideal for social selling."
  },
  {
    id: "track-companies",
    category: "signals-use-cases",
    question: "Can I track specific companies?",
    answer: "Yes — you can monitor selected companies and receive updates when they appear in news, publish hiring posts, or trigger other signals like funding rounds or tech stack changes."
  },
  {
    id: "signal-verification",
    category: "signals-use-cases",
    question: "How are signals collected and verified?",
    answer: "Our AI scans hundreds of sources daily, including news outlets, job boards, company blogs, and public LinkedIn posts. Each signal comes with a proof link so you can verify its origin — no guesswork involved."
  },
  {
    id: "create-icp",
    category: "icp-signals",
    question: "How do I create an Ideal Customer Profile (ICP)?",
    answer: "Just describe your ideal customer in plain English. Our AI refines the search automatically based on your input."
  },
  {
    id: "signal-types",
    category: "icp-signals",
    question: "What kinds of signals does Karhuno track?",
    answer: "We detect hiring trends, funding news, LinkedIn activity, new warehouse openings, tech stack changes, and more.",
    updated: "Oct 2025"
  },
  {
    id: "data-updates",
    category: "icp-signals",
    question: "How often is the data updated?",
    answer: "Signals and contacts are refreshed every 24 hours — so you always get the freshest information."
  },
  {
    id: "filter-leads",
    category: "leads-filters",
    question: "Can I filter leads by industry, role, or region?",
    answer: "Yes. You can filter by location, company size, job title, funding stage, technologies used, and more."
  },
  {
    id: "verified-contacts",
    category: "leads-filters",
    question: "Do leads include verified contact info?",
    answer: "Absolutely. When available, each lead includes verified email addresses and LinkedIn profiles."
  },
  {
    id: "automate-searches",
    category: "platform-automation",
    question: "Can I automate my searches?",
    answer: "Yes. You can schedule recurring searches and connect Karhuno to your CRM via API."
  },
  {
    id: "how-to-signup",
    category: "platform-automation",
    question: "How do I sign up?",
    answer: "Go to karhuno.com/signup. If eligible, you'll receive a promo code for 7-day free access.",
    updated: "Oct 2025"
  },
  {
    id: "data-protection",
    category: "security-support",
    question: "How is my data protected?",
    answer: "Karhuno AI is fully GDPR compliant and follows strict security standards to protect your information."
  },
  {
    id: "help-support",
    category: "security-support",
    question: "Where can I get help or tutorials?",
    answer: "We offer: • Onboarding guides inside the app • Help videos • Dedicated email support: support@karhuno.com"
  }
];

// Function to generate anchor-friendly IDs
const generateAnchorId = (question: string): string => {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

// Generate JSON-LD structured data
const generateJsonLd = () => {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return JSON.stringify(faqPage, null, 0);
};

export default function FAQ({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedAnchor, setCopiedAnchor] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      console.log('Contact form submitted:', { email, message });
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const copyAnchorLink = async (anchorId: string) => {
    const fullUrl = `${window.location.origin}/faq#${anchorId}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedAnchor(anchorId);
      setTimeout(() => setCopiedAnchor(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd()
          }}
        />
      </Head>
      <section className={cn("relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white", className)}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              FAQ
            </span>
            <span className="text-gray-900"> – Everything You Need to Know</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 ${montserrat.className}`}
          >
            Let Karhuno AI guide you through the platform.<br />
            Use the questions below to explore how it works.
          </motion.p>
        </motion.div>
          
        {/* Category Filter */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
            } ${montserrat.className}`}
          >
            All Questions
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              } ${montserrat.className}`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter(faq => faq.category === category.id);
            if (selectedCategory && selectedCategory !== category.id) return null;
            if (!selectedCategory && categoryFaqs.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h2 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                    {category.title}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {categoryFaqs.map((faq, index) => {
                    const globalIndex = faqs.findIndex(f => f.id === faq.id);
                    return (
            <motion.div
                        key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                          openIndex === globalIndex 
                            ? 'border-purple-300 bg-purple-50/30 shadow-lg' 
                            : 'border-gray-200'
                        }`}
            >
              <button
                          id={`faq-${generateAnchorId(faq.question)}`}
                          onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          aria-expanded={openIndex === globalIndex}
                          className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors ${
                            openIndex === globalIndex 
                              ? 'bg-purple-50/50 hover:bg-purple-50/70' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1 pr-4">
                            <h3 className={`text-lg font-semibold text-gray-900 ${roboto.className}`}>
                  {faq.question}
                </h3>
                            {faq.updated && (
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                                Updated {faq.updated}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyAnchorLink(`faq-${generateAnchorId(faq.question)}`);
                              }}
                              className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                              title="Copy link to this question"
                            >
                              {copiedAnchor === `faq-${generateAnchorId(faq.question)}` ? (
                                <Copy className="w-4 h-4 text-green-600" />
                              ) : (
                                <Link className="w-4 h-4" />
                              )}
                            </button>
                <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                                openIndex === globalIndex ? "rotate-180" : ""
                  }`}
                />
                          </div>
              </button>
              
              <AnimatePresence>
                          {openIndex === globalIndex && (
                            <motion.section
                              role="region"
                              aria-labelledby={`faq-${generateAnchorId(faq.question)}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                              <div className="px-6 pb-5 border-t border-gray-100">
                                <p className={`text-gray-700 leading-relaxed pt-4 ${montserrat.className}`}>
                        {faq.answer}
                      </p>
                    </div>
                            </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl border border-purple-200 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`text-2xl font-bold mb-4 ${roboto.className}`}
            >
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Still have questions?
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className={`text-gray-600 mb-6 ${montserrat.className}`}
            >
              Can't find what you're looking for? Contact our support team and we'll help you out.
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
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${montserrat.className}`}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to know about Karhuno AI?"
                  required
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${montserrat.className}`}
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl ${montserrat.className}`}
              >
                <Send className="w-4 h-4" />
                Contact Support
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
                    ✅ Thanks! We'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}


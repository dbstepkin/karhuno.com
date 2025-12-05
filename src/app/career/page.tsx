"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, Zap, CheckCircle2, X, MapPin, ArrowRight } from "lucide-react";
import Footer from "@/components/home/footer";
import { Montserrat, Roboto } from "@/lib/localFonts";
import Head from "next/head";

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

interface Position {
  id: string;
  title: string;
  location: string;
  emoji: string;
  icon: React.ReactNode;
  description: string;
  fullDescription?: string;
}

const positions: Position[] = [
  {
    id: "sales-director-uk",
    title: "Sales Director",
    location: "United Kingdom",
    emoji: "💼",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Lead our sales team in the UK and drive strategic business growth.",
    fullDescription: `🇬🇧 UK – Job Description: Sales Director (United Kingdom – Remote)

Title: Sales Director – UK Market (Remote)

About Karhuno AI

Karhuno AI is a fast-growing SaaS startup helping B2B sales teams find high-conversion leads using real-time buying signals from the web and social media. We're building the next generation of intent-driven sales workflows — and we're looking for an experienced Sales Director to lead growth in the UK market.

What You'll Do

• Own the UK outbound sales strategy from pipeline generation to closing
• Identify and nurture strategic partnerships with sales agencies, tech vendors, and influencers
• Collaborate with the product team to bring voice-of-customer feedback
• Manage CRM, track KPIs, and report directly to the founders
• Represent Karhuno AI in demos, events, and networking calls
• Expand your team as revenue milestones are met

What We're Looking For

• 4+ years of experience in B2B sales (preferably SaaS or Martech)
• Strong knowledge of the UK tech/startup ecosystem
• Proven track record in outbound campaigns and closing deals
• Independent mindset: you're proactive, analytical, and self-driven
• Experience working remotely in fast-paced environments

Why Join Us

• 💸 Salary: £60–70K / year base + performance-based bonus
• 🌍 Fully remote (UK timezone preferred)
• 🎯 Direct impact role with autonomy and growth potential
• 🧠 Work closely with a product and growth-focused founding team
• 🛠 Access to cutting-edge tools and real-time intent data

Location: UK-based (remote-first)

Start date: Flexible, ideally within 1–2 months`
  },
  {
    id: "ai-pm-finland",
    title: "AI Product Manager",
    location: "Finland",
    emoji: "🤖",
    icon: <Zap className="w-5 h-5" />,
    description: "Lead AI product initiatives from our Helsinki headquarters.",
    fullDescription: `🇫🇮 Job Description: AI Product Manager (Finland – Remote)

Title: AI Product Manager – Finland (Remote)

About Karhuno AI

Karhuno AI is a signal-based lead generation platform helping B2B sales teams discover real-time buying intent across the web and social media. From corporate expansion to LinkedIn trends, we turn unstructured signals into revenue opportunities.

As we scale across Europe and North America, we're hiring a Product Manager based in Finland to lead the development of new AI-powered modules and accelerate customer feedback loops.

⸻

Your Role

As an AI Product Manager, you'll sit at the intersection of product, engineering, and growth. You'll work closely with our founders, design team, and AI developers to shape our product roadmap — turning messy real-world data into clean, actionable sales signals.

What You'll Do

• Own the product strategy for AI-based modules (e.g. LinkedIn radar, Reddit conversations, tech stack change detection)
• Translate customer problems into specs, wireframes, and sprint plans
• Work closely with developers and designers in short iteration cycles
• Prioritize features based on user feedback, data, and business impact
• Collaborate with sales and support to identify new product opportunities
• Ensure user-facing features deliver real business value

⸻

What We're Looking For

• 3–5+ years of product management experience (B2B SaaS or data/AI tools)
• Strong understanding of AI, machine learning workflows, or data enrichment products
• Experience working in startup or high-autonomy environments
• Clear communication skills — you're comfortable writing docs and making decisions
• Based in Finland (or Nordic timezone overlap)

Bonus if you have:

• Familiarity with tools like Supabase, Vercel, n8n, Stripe, etc.
• Experience launching early-stage products or features from 0→1

⸻

What You Get

• 💸 Salary: €60,000–€70,000 / year + performance bonus
• 🌍 Fully remote within Finland or Helsinki-based hybrid
• ✨ Real ownership and autonomy over product direction
• 🤝 Work closely with a small, driven team of builders
• 📈 Opportunity to shape one of Europe's fastest-growing B2B AI platforms

⸻

Location: Finland (remote-first with Helsinki option)

Start date: Flexible, ideally within the next 30–45 days`
  },
  {
    id: "sales-director-ca",
    title: "Sales Director",
    location: "California, USA",
    emoji: "📈",
    icon: <Users className="w-5 h-5" />,
    description: "Lead our sales operations in California and expand our US market presence.",
    fullDescription: `🇺🇸 California – Job Description: Sales Director (US – Pacific Time)

Title: Sales Director – US West Coast (Remote)

About Karhuno AI

At Karhuno AI, we help B2B companies discover the right moment to sell — by analyzing intent signals from public web data and social conversations. We're a lean and ambitious team backed by real traction, looking for a Sales Director to lead growth efforts in the US West Coast region.

Your Role

• Drive US customer acquisition through outbound sales, partnerships, and demos
• Own key relationships with mid-size B2B SaaS companies, agencies, and founders
• Launch strategic outreach campaigns and shape GTM experiments
• Collaborate with marketing to align messaging with customer feedback
• Report directly to the CEO, with input on expansion and hiring

You Bring

• 4+ years experience in tech sales, business development or partnerships
• Based in California or neighboring states (PST hours preferred)
• Experience with cold outreach, CRM management, and closing high-velocity deals
• Deep understanding of sales tooling, lead generation, and pipeline velocity
• Entrepreneurial attitude — excited to build from 0 to 1

What We Offer

• 💰 Salary: $65,000–$75,000 / year base + commission bonus
• 🏡 100% remote role (must work in PST overlap)
• 📈 High-growth environment and fast decision-making
• 🤝 Ownership of a strategic region (West Coast US)
• ✨ Direct line to founders and product roadmap

Location: California (or able to work West Coast hours remotely)

Start date: ASAP preferred`
  }
];


export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

  return (
    <>
      <Head>
        <title>Career | Karhuno AI - Join Our Team</title>
        <meta
          name="description"
          content="Join the Karhuno AI team and help shape the future of B2B sales intelligence. Explore career opportunities across the globe."
        />
        <meta name="keywords" content="Karhuno AI careers, jobs, hiring, B2B sales intelligence careers, tech jobs" />
        <meta property="og:title" content="Career | Karhuno AI" />
        <meta property="og:description" content="Join the Karhuno AI team and help shape the future of B2B sales intelligence." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career | Karhuno AI" />
        <meta name="twitter:description" content="Join the Karhuno AI team and help shape the future of B2B sales intelligence." />
        <link rel="canonical" href="https://karhuno.com/career" />
      </Head>
      <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 ${montserrat.className}`}>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-blue-100/30 to-indigo-100/30">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${roboto.className}`}>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Join Us
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${montserrat.className}`}>
                Help us make B2B sales intelligence smarter, faster, and more intuitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={() => {
                    const element = document.getElementById('open-positions');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Open Positions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('our-culture');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Open Positions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-200/50 shadow-2xl mb-16"
              id="open-positions"
            >
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 ${roboto.className}`}>
                  Open Positions
                </h2>
                <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
                  Join our growing team and help shape the future of B2B sales intelligence. Explore opportunities across the globe.
                </p>
              </div>

              {/* Positions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <button
                      onClick={() => setSelectedPosition(position)}
                      className="w-full bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 text-left shadow-md hover:shadow-xl"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                          <span className="text-3xl">{position.emoji}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold text-gray-900 mb-2 ${roboto.className}`}>
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-600">
                            <MapPin className="w-5 h-5" />
                            <span className={`font-medium ${montserrat.className}`}>{position.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className={`text-gray-600 leading-relaxed mb-6 ${montserrat.className}`}>
                        {position.description}
                      </p>
                      <div className={`text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200 ${montserrat.className}`}>
                        <p className="mb-2">
                          Interested in learning more? Send us an email at{" "}
                          <a 
                            href={`mailto:hr@karhuno.com?subject=Application for ${encodeURIComponent(position.title)}`}
                            className="text-purple-600 hover:text-purple-700 font-semibold underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            hr@karhuno.com
                          </a>
                        </p>
                        <p className="text-xs text-gray-500">
                          Please specify which position you're applying for to receive detailed information.
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section
          id="our-culture"
          className="relative py-24 overflow-hidden bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left Side - Main Philosophy */}
              <div>
                <h3 className={`text-sm font-semibold text-purple-600 uppercase tracking-wider mb-6 ${roboto.className}`}>
                  Our Culture
                </h3>
                <p className={`text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed ${roboto.className}`}>
                  We build Karhuno with <span className="text-purple-600">curiosity</span>, <span className="text-blue-600">honesty</span>, and a shared hunger to create something meaningful.
                  <br /><br />
                  We embrace <span className="text-indigo-600">simplicity</span>, move fast, and support each other — always.
                  <br /><br />
                  What drives us isn't just growth, but the joy of solving real problems, together.
                </p>
              </div>

              {/* Right Side - Values List */}
              <div className="space-y-6">
                {[
                  { text: "We are", bold: ["goal-driven", "dedicated"], suffix: "" },
                  { text: "We use", bold: ["our own tools"], suffix: "every day" },
                  { text: "We thrive together with", bold: ["our community"], suffix: "" },
                  { text: "We are", bold: ["customer obsessed"], suffix: "" },
                  { text: "We believe in", bold: ["people's ability to grow"], suffix: "" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className={`text-lg text-gray-700 ${montserrat.className}`}>
                      {value.text}{" "}
                      {value.bold.map((boldText, i) => (
                        <span key={i}>
                          <strong className="text-gray-900 font-semibold">{boldText}</strong>
                          {i < value.bold.length - 1 && " and "}
                        </span>
                      ))}
                      {value.suffix && ` ${value.suffix}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Position Detail Modal */}
        <AnimatePresence>
          {selectedPosition && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPosition(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                        {selectedPosition.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <MapPin className="w-5 h-5" />
                        <span className={montserrat.className}>{selectedPosition.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPosition(null)}
                      className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="px-6 py-6">
                    <p className={`text-gray-700 leading-relaxed mb-6 ${montserrat.className}`}>
                      {selectedPosition.description}
                    </p>
                    {selectedPosition.fullDescription ? (
                      <div className={`text-gray-700 leading-relaxed mb-6 whitespace-pre-line ${montserrat.className}`}>
                        {selectedPosition.fullDescription}
                      </div>
                    ) : (
                    <p className={`text-sm text-gray-500 ${montserrat.className}`}>
                      Full job description coming soon. For more information, please contact us at{" "}
                      <a href="mailto:hr@karhuno.com" className="text-purple-600 hover:text-purple-700 font-medium">
                        hr@karhuno.com
                      </a>
                    </p>
                    )}
                    <div className="mt-6">
                      <a
                        href={`mailto:hr@karhuno.com?subject=Application for ${encodeURIComponent(selectedPosition.title)}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Send us your CV
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Users, ArrowRight, CheckCircle, TrendingUp, Eye, Info, Heart, Share, ThumbsUp, MessageSquare, Globe, Zap } from 'lucide-react';
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'arial'],
  preload: false
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: ['system-ui', 'arial'],
  preload: false
});

const features = [
  {
    id: 1,
    title: "Corporate News Search",
    subtitle: "Find companies based on real-time corporate events",
    description: "Stay ahead of the market by identifying companies making strategic business moves such as hiring, funding, expansions, or partnerships as soon as they happen. Karhuno scans trusted sources to detect signals that reveal real buying intent.",
    bullets: [
      "Track companies by **industry**, **company size**, and **geographic location**",
      "Monitor high-intent signals like **funding rounds**, **job openings**, and **new partnerships**",
      "Get only **verified leads** with clickable **source-proof links**"
    ],
    icon: Search,
    gradient: "from-purple-600 to-blue-600",
    bgGradient: "from-purple-50 to-blue-50",
    borderColor: "border-purple-200",
    ctaText: "Try Corporate Search",
    ctaLink: "/signup"
  },
  {
    id: 2,
    title: "Track LinkedIn Conversation",
    subtitle: "Capture buying intent from LinkedIn posts, comments, and conversations",
    description: "Type a topic you're interested in like \"hiring trends\" or \"new office openings\" and Karhuno AI automatically detects relevant LinkedIn conversations. Our engine suggests the best keywords, scans recent posts, and helps you extract high-intent contacts with advanced filters.",
    bullets: [
      "**Autogenerate keywords** to surface relevant conversations at scale",
      "Filter by **role**, **seniority**, **company size**, and verified LinkedIn attributes",
      "Get leads enriched with **full post context**, engagement data, and links"
    ],
    icon: MessageCircle,
    gradient: "from-purple-600 to-blue-600",
    bgGradient: "from-purple-50 to-blue-50",
    borderColor: "border-purple-200",
    ctaText: "Track Conversations",
    ctaLink: "/signup"
  },
  {
    id: 3,
    title: "Who Engages with My Competitors",
    subtitle: "Turn LinkedIn engagement into warm leads automatically",
    description: "Just enter your website, and Karhuno AI will instantly identify up to 50 of your top competitors. We then track everyone who likes, comments, or shares their LinkedIn content so you can discover high-intent leads already engaging in your market. Every contact comes with full context and verifiable proof of interaction.",
    bullets: [
      "**Autodetect competitors** based on your website",
      "Monitor real-time LinkedIn **likes**, **comments**, and **shares**",
      "Export **verified profiles** with source links and role-based filters"
    ],
    icon: Users,
    gradient: "from-purple-600 to-blue-600",
    bgGradient: "from-purple-50 to-blue-50",
    borderColor: "border-purple-200",
    ctaText: "Monitor Competitors",
    ctaLink: "/signup"
  }
];

// Animated Search Demo for Corporate News Search
const AnimatedSearchDemo = () => {
  const [searchText, setSearchText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  const fullText = "companies open new warehouse in UK";
  
  const newsResults = [
    { company: "Amazon", title: "Amazon opens new 1M sq ft warehouse in Manchester", date: "2 days ago" },
    { company: "Tesco", title: "Tesco announces new distribution center in Birmingham", date: "5 days ago" },
    { company: "ASOS", title: "ASOS expands with new fulfillment center in Leeds", date: "1 week ago" },
    { company: "Next", title: "Next opens automated warehouse facility in Liverpool", date: "1 week ago" }
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(true);
      
      // Type animation
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setSearchText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Show search action
          setTimeout(() => {
            setIsSearching(true);
            setTimeout(() => {
              setIsSearching(false);
              setShowResults(true);
            }, 1000);
          }, 500);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl border-2 border-purple-200 shadow-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-full"></div>
      </div>
      
      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800">Corporate News Search</h4>
        </div>

        <div className="bg-white rounded-xl border-2 border-gray-200 p-3 mb-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" />
            <div className="flex-1 relative">
              <span className="text-gray-800">{searchText}</span>
              {showCursor && !showResults && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-gray-800"
                >
                  |
                </motion.span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isSearching ? { scale: [1, 0.95, 1] } : {}}
              className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg font-medium"
            >
              {isSearching ? "Searching..." : "Search"}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResults ? 1 : 0, y: showResults ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          {showResults && newsResults.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-purple-600">{result.company}</span>
                    <span className="text-xs text-gray-500">{result.date}</span>
                  </div>
                  <p className="text-sm text-gray-800 line-clamp-2">{result.title}</p>
                </div>
                <ArrowRight className="w-3 h-3 text-gray-400 mt-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isSearching && (
          <div className="flex items-center justify-center py-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function HowKarhunoWorks() {
  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-[#f3f1ff] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-4xl md:text-6xl font-bold text-black mb-6 ${roboto.className}`}
            >
              How <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Karhuno AI</span> Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-xl text-gray-500 max-w-3xl mx-auto ${montserrat.className}`}
            >
              Three powerful engines working together to discover the highest-quality sales signals for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => {
        // Definisco i gradienti per ogni sezione
        const sectionGradients = [
          'bg-gradient-to-b from-[#f3f1ff] to-[#eae6fd]',     // Corporate News Search
          'bg-gradient-to-b from-[#eae6fd] to-[#f9f5ff]',     // Track LinkedIn Conversation  
          'bg-gradient-to-b from-[#f9f5ff] to-white'          // Who Engages with My Competitors
        ];
        
        return (
          <section key={feature.id} className={`${sectionGradients[index]} py-20 overflow-hidden`}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  {index === 0 && <AnimatedSearchDemo />}
                  {index === 1 && (
                    <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl border-2 border-purple-200 shadow-lg overflow-hidden">
                      <video 
                        className="w-full h-full object-cover rounded-3xl"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src="/video/linkedin-demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Overlay gradiente per migliorare la leggibilità se necessario */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-3xl"></div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl border-2 border-purple-200 shadow-lg overflow-hidden">
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Competitor Engagement</h3>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-orange-600" />
                          <span className="text-sm text-gray-600">Qualified leads</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${roboto.className}`}>
                      <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                        {feature.title}
                      </span>
                    </h3>
                    <p className={`text-lg text-gray-600 font-medium ${montserrat.className}`}>
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className={`text-gray-600 text-lg leading-relaxed ${montserrat.className}`}>
                    {feature.description}
                  </p>

                  <div className="space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <motion.div
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.4 + bulletIndex * 0.1 
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-600 leading-relaxed flex items-center gap-2 ${montserrat.className}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                          {index === 2 && bulletIndex === 2 && (
                            <div className="relative group">
                              <Info className="w-4 h-4 text-purple-600 cursor-help" />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                E.g. "Liked competitor's post about CRM migration on Sept 12th"
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                  >
                    <motion.a
                      href={feature.ctaLink || "#"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg ${montserrat.className}`}
                    >
                      {feature.ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-[#f9f5ff] py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-7xl mx-auto px-6"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-200/50 shadow-lg">
            <h3 className={`text-3xl md:text-4xl font-bold text-black mb-4 ${roboto.className}`}>
              Ready to discover your next customers?
            </h3>
            <p className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto ${montserrat.className}`}>
              Start tracking the signals that matter most to your business growth.
            </p>
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg text-lg ${montserrat.className}`}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className={`text-sm text-gray-500 mt-4 ${montserrat.className}`}>
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
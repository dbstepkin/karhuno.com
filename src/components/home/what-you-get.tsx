"use client";

import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export default function WhatYouGet() {
  return (
    <section className="min-h-screen bg-[#0f1117] text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <span className={`inline-block px-4 py-1.5 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium mb-6 ${montserrat.className}`}>
          real buying signal
        </span>

        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}>
          What Karhuno AI <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">does</span>
        </h2>

        <p className={`text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 ${montserrat.className}`}>
          We track public buying signals and match them with up-to-date contacts — so you act when timing is right.
        </p>

        <div className="mb-10">
          <video
            src="/video/finale-25.mp4"
            controls
            loop
            muted
            className="w-full rounded-2xl max-h-[540px] object-cover shadow-lg border border-white/10"
          />
        </div>

        <div>
          <Link href="/contact" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-6 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-white/90 text-base font-semibold mb-2 ${roboto.className}`}
              >
                Apply ANY Filter You Want
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`text-white/70 text-sm ${montserrat.className}`}
              >
                Literally anything - even "companies with blue websites"
              </motion.p>
            </motion.div>
            
            {/* All filters appearing together */}
            <div className="flex flex-wrap gap-2 justify-center max-w-lg mx-auto">
              {allFilters.map((filter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1 + filter.delay, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300
                  }}
                  className={`${filter.color} text-white px-3 py-1.5 rounded-full text-xs font-medium ${montserrat.className} shadow-lg`}
                >
                  {filter.text}
                </motion.div>
              ))}
            </div>

            {/* Emphasis text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-center mt-4"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className={`text-white/50 text-xs ${montserrat.className}`}
              >
                The possibilities are endless...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 2: Enhanced Analysis - Keep this amazing part unchanged */}
      <AnimatePresence>
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 p-6"
          >
            {/* Central AI Brain */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Data source connections */}
            {sources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.7],
                  scale: [0.3, 1.2, 1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm p-2 border border-white/20"
                style={{ left: `${source.x}%`, top: `${source.y}%` }}
              >
                {/* Connection line to center */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full absolute -inset-8">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="200%"
                      stroke="rgba(168, 85, 247, 0.4)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    />
                  </svg>
                </motion.div>
                
                <Image
                  src={source.logo}
                  alt={source.name}
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
            ))}

            {/* Dynamic analysis text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className={`text-white/90 text-base ${montserrat.className}`}>
                  Analyzed {scanCount.toLocaleString()} articles
                </span>
              </div>
              
              <motion.div
                key={analysisPhase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-purple-300 text-sm ${montserrat.className}`}
              >
                {analysisSteps[analysisPhase]}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Results without relevance percentages */}
      <AnimatePresence>
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 p-6 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-center mb-6"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  ✓
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`text-green-400 text-sm ${montserrat.className}`}
              >
                High-intent signals discovered
              </motion.p>
            </motion.div>
            
            <div className="space-y-3">
              {signals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 1 + signal.delay, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`${signal.color} rounded-full p-2 text-white flex-shrink-0`}>
                    {signal.icon}
                  </div>
                  <span className={`text-white/90 text-sm leading-relaxed ${montserrat.className}`}>
                    {signal.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle progress indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {[0, 1, 2].map((step) => (
          <motion.div
            key={step}
            animate={{ 
              scale: currentStep === step ? 1.2 : 1,
              opacity: currentStep === step ? 1 : 0.4
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentStep === step ? 'bg-purple-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState("scan");
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-switching between tabs (only if user hasn't interacted)
  useEffect(() => {
    if (userInteracted) return; // Stop auto-switching if user clicked

    const interval = setInterval(() => {
      setActiveTab((current) => {
        if (current === "scan") return "identify";
        if (current === "identify") return "act";
        return "scan";
      });
    }, 8000); // Switch every 8 seconds (slower)

    return () => clearInterval(interval);
  }, [userInteracted]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setUserInteracted(true); // Stop auto-switching when user clicks
  };

  return (
    <section className="min-h-screen bg-[#0f1117] text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-4 py-1.5 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium mb-6 ${montserrat.className}`}
          >
            real buying signal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}
          >
            What Karhuno AI <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">does</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-gray-300 text-lg md:text-xl max-w-2xl mx-auto ${montserrat.className}`}
          >
            We track public buying signals and match them with up-to-date contacts — so you act when timing is right.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  px-8 py-3 text-base font-medium rounded-full transition-all duration-200 ${montserrat.className}
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
                    className={`text-2xl md:text-3xl font-bold mb-6 ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Pinpoint the Right Opportunities
                    </span>
                  </motion.h3>
                )}
                {activeTab === "scan" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-2xl md:text-3xl font-bold mb-6 ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Discover Real-Time Buying Signals
                    </span>
                  </motion.h3>
                )}
                {activeTab === "act" && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-2xl md:text-3xl font-bold mb-6 tracking-tight ${roboto.className}`}
                  >
                    <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                      Reach Out With Context and Confidence
                    </span>
                  </motion.h3>
                )}
                <p className={`text-lg text-gray-100 leading-relaxed ${montserrat.className}`}>
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
              </motion.div>
            </div>

            {/* Right Column - Image/Animation */}
            <div className="w-full md:w-1/2 h-[400px]">
              {activeTab === "identify" ? (
                <IdentifyProcess />
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

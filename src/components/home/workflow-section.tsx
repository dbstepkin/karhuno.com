"use client";

import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export default function WorkflowSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            How Karhuno AI Works
          </div>

          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`}>
            <span className="text-gray-900">What Karhuno AI </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">does</span>
          </h2>

          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 ${montserrat.className}`}>
            We track public buying signals and match them with up-to-date contacts — so you act when timing is right.
          </p>
        </div>

        <div className="mb-8">
          <video
            src="/video/video%20finale-25_11_2025,%2010_19%20(online-video-cutter.com).mp4"
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${roboto.className}`}>
              See It In Action
            </h3>
            <p className={`text-gray-600 ${montserrat.className}`}>
              Watch how Karhuno AI transforms signals into opportunities
            </p>
          </div>

          {/* Demo Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Step 1: Lead Discovery */}
            <AnimatePresence>
              {showLead && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700">New Lead Found!</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                        SC
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{sampleLead.name}</h4>
                        <p className="text-sm text-gray-600">{sampleLead.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 mr-2">📧</span>
                        <span className="text-gray-700">{sampleLead.email}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 mr-2">💼</span>
                        <span className="text-gray-700">{sampleLead.linkedin}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {sampleLead.signals.map((signal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center text-sm bg-white rounded-lg p-2"
                      >
                        <signal.icon className={`w-4 h-4 mr-2 ${signal.color}`} />
                        <span className="text-gray-700">{signal.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Outreach */}
            <AnimatePresence>
              {showOutreach && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Automated Outreach</h4>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                        SC
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">
                          "Hi Sarah! I noticed TechCorp just raised Series A and is expanding to Europe. 
                          We help companies like yours scale their sales operations. 
                          Would you be interested in a quick call?"
                        </p>
                        <span className="text-xs text-gray-500">11:05 AM</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        3x Higher Reply Rate
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Results</h4>
                  
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">+127%</div>
                      <div className="text-sm text-gray-600">More Qualified Leads</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-green-600 mb-1">5x</div>
                      <div className="text-sm text-gray-600">Faster Response Time</div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
                      <div className="text-sm text-gray-600">Meeting Conversion</div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

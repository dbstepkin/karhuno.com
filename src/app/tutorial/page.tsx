'use client'

import { ArrowRight, Play, CheckCircle, Clock, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat, Roboto } from 'next/font/google'
import Footer from '@/components/home/footer'

const montserrat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
})

export default function TutorialPage() {
  return (
    <div className={`min-h-screen bg-black ${montserrat.className}`} style={{ background: 'black' }}>
      {/* Hero Section */}
      <div className="relative bg-black pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <BookOpen className="w-5 h-5 text-purple-400 mr-3" />
              <span className={`text-purple-300 text-sm font-medium ${montserrat.className}`}>Learn Karhuno AI</span>
            </div>
            
            {/* Main Title */}
            <h1 className={`text-5xl md:text-7xl font-extrabold text-center mb-8 ${roboto.className} opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_both]`}>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Master Karhuno AI in Minutes
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium leading-relaxed ${montserrat.className} opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_both]`}>
              Learn how to go from zero to signals — from setup to advanced B2B strategies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <button className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 min-h-[56px] ${montserrat.className}`}>
                  <Play className="w-6 h-6 mr-3" />
                  Start Learning
                </button>
                <Link 
                  href="/signup" 
                  className={`inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm min-h-[56px] ${montserrat.className}`}
                >
                  Claim 1,000 Free Credits
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </div>
              <span className={`text-sm text-gray-400 ${montserrat.className}`}>
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot Image Section - Image Frame */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Image Frame */}
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-6 border border-purple-500/20 backdrop-blur-sm">
            {/* Glow Effect around Bear */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
            
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/banner1.png"
                alt="Karhuno AI Tutorial Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Tutorial Label */}
            <div className="absolute top-8 left-8 px-4 py-2 bg-black/70 rounded-xl backdrop-blur-sm">
              <span className={`text-sm text-white font-medium ${montserrat.className}`}>📚 Tutorial Guide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-purple-50/5 via-blue-50/10 to-purple-50/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-white mb-3 ${roboto.className}`}>15 min</div>
              <div className={`text-lg text-gray-300 font-medium ${montserrat.className}`}>Average completion time</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-white mb-3 ${roboto.className}`}>10K+</div>
              <div className={`text-lg text-gray-300 font-medium ${montserrat.className}`}>Users trained</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-white mb-3 ${roboto.className}`}>98%</div>
              <div className={`text-lg text-gray-300 font-medium ${montserrat.className}`}>Success rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">1</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`} style={{ color: '#111111' }}>
              Getting Started
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`} style={{ color: '#111111' }}>
              Begin your journey with Karhuno AI. Learn the fundamentals, set up your account, and discover how our platform can transform your B2B sales process from day one.
            </p>
            
            {/* Video Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📺</span>
                  </div>
                  <p className={`text-lg font-medium ${montserrat.className}`} style={{ color: '#666666' }}>
                    Tutorial video will appear here
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Account Setup</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Complete onboarding and configure your preferences</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Platform Overview</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Navigate through all features and capabilities</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>First Discovery</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Find your first high-quality leads</p>
              </div>
            </div>
            
            {/* Descriptive Paragraph Placeholder */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <p className={`text-lg italic ${montserrat.className}`} style={{ color: '#666666' }}>
                  Full section with written onboarding guidance will be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Research Section */}
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">2</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${roboto.className}`}>
              Deep Research
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`}>
              Master our AI-powered research engine. Discover companies through advanced analysis of articles, news, and market signals to find prospects with the highest potential.
            </p>
            
            {/* Video Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📺</span>
                  </div>
                  <p className={`text-lg font-medium text-gray-300 ${montserrat.className}`}>
                    Watch how Deep Research works in action
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Advanced Filters</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Use sophisticated search parameters and criteria</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>AI Analysis</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Leverage machine learning insights and patterns</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Quality Scoring</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Understand and optimize lead quality metrics</p>
              </div>
            </div>
            
            {/* Descriptive Text Block */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <p className={`text-lg text-gray-300 leading-relaxed ${montserrat.className}`}>
                  Deep Research is built to uncover real buying signals across the web. Whether you're analyzing market trends, scouting new opportunities, or evaluating competitors, this tool helps you go deeper with AI-powered accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Tracker Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">3</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`} style={{ color: '#111111' }}>
              LinkedIn Tracker
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`} style={{ color: '#111111' }}>
              Track decision-makers and get intelligent notifications. Know exactly when to reach out based on their LinkedIn activity, job changes, and engagement patterns.
            </p>
            
            {/* Video Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📺</span>
                  </div>
                  <p className={`text-lg font-medium ${montserrat.className}`} style={{ color: '#666666' }}>
                    Watch LinkedIn Tracker in action
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Smart Tracking</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Monitor profiles and activity automatically</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Perfect Timing</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Get notified of optimal outreach moments</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Engagement Insights</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Analyze patterns and optimize your approach</p>
              </div>
            </div>
            
            {/* Descriptive Text Block */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <p className={`text-lg leading-relaxed ${montserrat.className}`} style={{ color: '#444444' }}>
                  LinkedIn Tracker helps you stay ahead of the conversation. By monitoring key decision-makers and tracking their professional activity, you'll know exactly when they're most likely to be receptive to your outreach efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-purple-500/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className={`text-3xl font-bold text-white mb-4 ${roboto.className}`}>
              Ready to become a Karhuno AI expert?
            </h2>
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${montserrat.className}`}>
              Join thousands of sales professionals who have transformed their results with our platform.
            </p>
            <Link
              href="/signup"
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 ${montserrat.className}`}
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 
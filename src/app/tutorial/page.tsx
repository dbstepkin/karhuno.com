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
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                {/* Large Title */}
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center ${roboto.className}`}>
                  🔍 Welcome to Karhuno AI – Your Signal Command Center
                </h3>
                
                {/* Introduction Paragraph */}
                <p className={`text-xl mb-8 text-center leading-relaxed ${montserrat.className}`} style={{ color: '#374151' }}>
                  Once you log in, you'll land directly on your dashboard — the control hub where everything begins.
                </p>
                
                {/* Subtitle */}
                <p className={`text-lg font-medium mb-8 text-center ${montserrat.className}`} style={{ color: '#111111' }}>
                  Here's what you'll see and how it works:
                </p>
                
                {/* Feature List */}
                <div className="space-y-6 text-left">
                  {/* Dashboard Overview */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">📊</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        Dashboard Overview
                      </h4>
                      <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                        Track how many LinkedIn posts and web articles you've scanned, how many buying signals have been detected, and how many target companies have been found.
                      </p>
                    </div>
                  </div>
                  
                  {/* Deep Research */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🧠</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        Deep Research
                      </h4>
                      <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                        Enter your Ideal Customer Profile in plain language, and our AI will scan thousands of online sources to surface companies showing real buying intent.
                      </p>
                    </div>
                  </div>
                  
                  {/* LinkedIn Tracker */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🔎</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        LinkedIn Tracker
                      </h4>
                      <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                        Monitor posts and comments in real-time using smart filters based on keywords, job roles, industries, and more — and extract verified contacts.
                      </p>
                    </div>
                  </div>
                  
                  {/* Your Leads */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🏷️</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        Your Leads
                      </h4>
                      <p className={`leading-relaxed mb-3 ${montserrat.className}`} style={{ color: '#666666' }}>
                        This section automatically organizes the results from both modules:
                      </p>
                      <ul className={`space-y-1 ml-4 ${montserrat.className}`} style={{ color: '#666666' }}>
                        <li>• Companies from Deep Research</li>
                        <li>• Contacts from LinkedIn Tracker</li>
                      </ul>
                      <p className={`leading-relaxed mt-3 ${montserrat.className}`} style={{ color: '#666666' }}>
                        Each entry comes with context, proof link, and source.
                      </p>
                    </div>
                  </div>
                  
                  {/* API Integration */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🔌</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        API Integration
                      </h4>
                      <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                        Connect Karhuno AI with your CRM or enrichment stack. Push leads instantly, without any manual copy/paste.
                      </p>
                    </div>
                  </div>
                  
                  {/* Account Settings */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">👤</span>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        Account Settings
                      </h4>
                      <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                        Manage credits, integrations, and team access — all from one place.
                      </p>
                    </div>
                  </div>
                </div>
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
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
                {/* YouTube Video Embed */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/xOa4gAOrRsY"
                    title="Deep Research Tutorial - Karhuno AI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Label */}
                <div className="mt-4 text-center">
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
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Main Introduction */}
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <h3 className={`text-3xl font-bold text-white mb-6 text-center ${roboto.className}`}>
                  🔍 What is Deep Research?
                </h3>
                <div className={`text-gray-300 space-y-4 ${montserrat.className}`}>
                  <p className="text-xl text-center mb-6">
                    <strong>Deep Research is your AI-powered scout.</strong>
                  </p>
                  <p className="text-lg leading-relaxed">
                    It allows you to type a buying signal or ICP (Ideal Customer Profile) in plain English — like:
                  </p>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20 text-center">
                    <p className="text-purple-200 italic text-lg">
                      "Companies that opened a new office in Milan last week"
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">
                    From there, Karhuno AI does all the heavy lifting:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>It understands your request</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Analyzes thousands of articles, press releases, and business signals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Returns verified companies, with proof links and — when available — relevant contacts</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-purple-400/30 text-center mt-6">
                    <p className="text-xl font-semibold text-white">
                      ⚡ In short: it automates hours of manual research in just a few seconds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Valid vs Invalid Examples - Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Valid Examples - Left Column */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-400/20 shadow-lg backdrop-blur-sm">
                  <h4 className={`text-2xl font-bold text-green-300 mb-6 text-center ${roboto.className}`}>
                    ✅ What works best in Deep Research
                  </h4>
                  <div className={`text-gray-300 space-y-4 ${montserrat.className}`}>
                    <p className="leading-relaxed">
                      Deep Research is most powerful when used to track public, visible company actions — things you'd normally find in the news or online.
                    </p>
                    <div>
                      <p className="font-semibold text-green-200 mb-3">Here are great ICP examples:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Companies that raised a Series A round in the UK</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Startups announcing new strategic partnerships</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Companies hiring for sales roles in Italy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Firms that published an ESG report in the past 7 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Companies expanding to a new office location</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-200 mb-3">You can also track signals like:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Companies reducing plastic usage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>Publicly awarded contracts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>New product line launches in sustainability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Invalid Examples - Right Column */}
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-400/20 shadow-lg backdrop-blur-sm">
                  <h4 className={`text-2xl font-bold text-red-300 mb-6 text-center ${roboto.className}`}>
                    🚫 What doesn't work (and why)
                  </h4>
                  <div className={`text-gray-300 space-y-4 ${montserrat.className}`}>
                    <p className="leading-relaxed">
                      Karhuno AI can't read minds — only the web.
                    </p>
                    <p className="leading-relaxed">
                      That's why some ICPs are not valid, especially if they're based on:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Internal intentions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Vague feelings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Private or unconfirmed information</span>
                      </li>
                    </ul>
                    <div>
                      <p className="font-semibold text-red-200 mb-3">Examples that won't return results:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>Companies unhappy with their CRM</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>Businesses looking for new vendors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>Companies that want lead generation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>Firms struggling financially</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20 mt-4">
                      <p className="text-red-200 text-sm">
                        <strong>Why?</strong> Because these aren't visible online — and can't be verified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Write Guide */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-400/20 shadow-lg backdrop-blur-sm">
                <h4 className={`text-2xl font-bold text-blue-300 mb-6 text-center ${roboto.className}`}>
                  🧠 How to write a great ICP
                </h4>
                <div className={`text-gray-300 space-y-6 ${montserrat.className}`}>
                  <div className="text-center">
                    <p className="text-lg mb-4">Here's a simple formula that works:</p>
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                      <p className="text-xl font-semibold text-blue-200">
                        [Company type] that [took a public action] in [specific timeframe]
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-200 mb-3">For example:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>"E-commerce companies with 10+ employees that raised funds in the last month"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>"Industrial firms mentioning AI adoption in the past week"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>"B2B startups attending trade shows in Germany in the last 30 days"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-400/30">
                    <p className="font-semibold text-purple-200 mb-3">Pro tip:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✔</span>
                          <span>Keep it simple</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✔</span>
                          <span>Add location + time</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✔</span>
                          <span>Avoid vague words like "interested in…"</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 mt-1">✔</span>
                          <span>Ask yourself: Would this show up in a news article?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-cyan-500/15 rounded-2xl p-8 border border-purple-400/30 shadow-lg backdrop-blur-sm text-center">
                <h4 className={`text-2xl font-bold text-purple-300 mb-4 ${roboto.className}`}>
                  📍 Need help refining your ICP?
                </h4>
                <p className={`text-lg text-gray-300 leading-relaxed ${montserrat.className}`}>
                  Start typing and the AI will tell you if it's too vague — or help you make it stronger.
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
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Main Introduction */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className={`text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  🧭 What is LinkedIn Tracker?
                </h3>
                <div className={`text-gray-900 space-y-4 ${montserrat.className}`}>
                  <p className="text-xl text-center mb-6 font-semibold" style={{ color: '#111111' }}>
                    Monitor live conversations on LinkedIn to uncover real buying signals — and turn them into qualified leads.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: '#444444' }}>
                    LinkedIn Tracker lets you monitor public posts and comments based on specific keywords, job titles, and company filters. It's your automated radar for finding decision-makers who are actively engaging with the topics you care about.
                  </p>
                </div>
              </div>

              {/* Features and Capabilities */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-lg">
                <h4 className={`text-2xl font-bold mb-6 text-center text-green-700 ${roboto.className}`}>
                  ✅ What LinkedIn Tracker can do
                </h4>
                <div className={`text-gray-800 space-y-6 ${montserrat.className}`}>
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold">Search public LinkedIn posts and comments</span> containing any keyword (e.g., "CRM migration", "hiring SDRs", "raised Series A")
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold">Extract the full profile</span> of the author or commenter:
                        <ul className="ml-6 mt-2 space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Name</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Job title</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Company</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-green-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold">Apply filters by:</span>
                        <ul className="ml-6 mt-2 space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Job role</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Industry</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">◦</span>
                            <span>Post type (original post or comment)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-green-600 mt-1">•</span>
                      <span><span className="font-semibold">Enrich the result</span> with their verified email address</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">•</span>
                      <span><span className="font-semibold">Export contacts</span> or push directly to your CRM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
                <h4 className={`text-2xl font-bold mb-6 text-center text-blue-700 ${roboto.className}`}>
                  🧪 Example use cases
                </h4>
                <div className={`text-gray-800 space-y-4 ${montserrat.className}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold text-blue-800">"Looking for a new CRM"</span>
                        <p className="text-sm text-gray-600 mt-1">→ Target companies openly discussing tech stack changes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold text-blue-800">"We're hiring in Sales"</span>
                        <p className="text-sm text-gray-600 mt-1">→ Spot active teams expanding their commercial force</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold text-blue-800">"Just raised €5M"</span>
                        <p className="text-sm text-gray-600 mt-1">→ Reach out to startups with fresh budgets</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <div>
                        <span className="font-semibold text-blue-800">"Attending Web Summit"</span>
                        <p className="text-sm text-gray-600 mt-1">→ Identify companies engaged in major industry events</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitations */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 shadow-lg">
                <h4 className={`text-2xl font-bold mb-6 text-center text-red-700 ${roboto.className}`}>
                  ❌ What it doesn't do
                </h4>
                <div className={`text-gray-800 space-y-3 ${montserrat.className}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Doesn't access private messages or posts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Doesn't show paid or promoted content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>Doesn't ensure all profiles have emails (but enrichment works for most B2B roles)</span>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200 shadow-lg">
                <h4 className={`text-2xl font-bold mb-6 text-center text-purple-700 ${roboto.className}`}>
                  🧠 Tips to maximize results
                </h4>
                <div className={`text-gray-800 space-y-4 ${montserrat.className}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">💡</span>
                    <span>Focus on <strong>action-oriented keywords</strong> (e.g., "switching to HubSpot", "searching for SDR", "expanding in Europe")</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">💡</span>
                    <span>Combine <strong>keyword + job title filters</strong> to narrow down real buyers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">💡</span>
                    <span>Refresh your keyword list <strong>weekly</strong> to catch fresh signals</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-300 shadow-lg">
                <h4 className={`text-2xl font-bold mb-6 text-center text-gray-700 ${roboto.className}`}>
                  🎯 What you get from each result
                </h4>
                <div className={`text-gray-800 space-y-4 ${montserrat.className}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 mt-1">📄</span>
                      <span><strong>LinkedIn post link</strong> to verify context</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 mt-1">👤</span>
                      <span><strong>Full contact profile</strong> (name, title, company)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 mt-1">✉️</span>
                      <span><strong>Verified email address</strong> via enrichment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 mt-1">🔗</span>
                      <span><strong>Export, save, or integrate</strong> via API</span>
                    </div>
                  </div>
                </div>
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
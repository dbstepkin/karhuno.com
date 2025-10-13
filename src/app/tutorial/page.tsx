'use client'

import { ArrowRight, Play, CheckCircle, Clock, Users, BookOpen, Database } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat, Roboto } from 'next/font/google'
import Footer from '@/components/home/footer'

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

export default function TutorialPage() {
  return (
    <div className={`min-h-screen bg-black ${montserrat.className}`} style={{ background: 'black' }}>
      {/* Hero Section */}
      <div className="relative bg-black pt-24 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
              <BookOpen className="w-5 h-5 text-purple-400 mr-3" />
              <span className={`text-purple-300 text-sm font-medium ${montserrat.className}`}>Learn Karhuno AI</span>
            </div>
            
            {/* Main Title */}
            <h1 className={`text-5xl md:text-7xl font-extrabold text-center mb-8 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Master Karhuno AI in Minutes
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto font-medium leading-relaxed ${montserrat.className}`}>
              Learn how to go from zero to signals — from setup to advanced B2B strategies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <button 
                  onClick={() => {
                    const gettingStartedSection = document.getElementById('getting-started-video');
                    if (gettingStartedSection) {
                      gettingStartedSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/30 ${montserrat.className}`}
                >
                  <Play className="w-6 h-6 mr-3" />
                  Start Learning
                </button>
                <Link 
                  href="https://my.karhuno.com/signup" 
                  className={`inline-flex items-center px-10 py-5 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 transform hover:scale-105 shadow-xl backdrop-blur-sm ${montserrat.className}`}
                >
                  Claim 1,000 Free Credits
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </div>
              <div className={`flex flex-col sm:flex-row gap-4 text-sm text-gray-400 ${montserrat.className}`}>
                <span>No credit card required</span>
                <span className="hidden sm:block">•</span>
                <span>Sign up — 14 days</span>
              </div>
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
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-white mb-3 ${roboto.className}`}>20+</div>
              <div className={`text-lg text-gray-300 font-medium ${montserrat.className}`}>Data sources integrated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-white mb-3 ${roboto.className}`}>60%</div>
              <div className={`text-lg text-gray-300 font-medium ${montserrat.className}`}>Reply rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div id="getting-started-video" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">1</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`} style={{ color: '#111111' }}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Getting Started
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`} style={{ color: '#111111' }}>
              Begin your journey with Karhuno AI. Learn the fundamentals, set up your account, and discover how our platform can transform your B2B sales process from day one.
            </p>
            
            {/* Video Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                {/* YouTube Video Embed */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/FejlAbOXU-Q"
                    title="Getting Started Tutorial - Karhuno AI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  </div>
                
                {/* Video Label */}
                <div className="mt-4 text-center">
                  <p className={`text-lg font-medium ${montserrat.className}`} style={{ color: '#666666' }}>
                    Learn how to get started with Karhuno AI
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
            
            {/* Dashboard Overview */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                {/* Main Title */}
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center ${roboto.className}`}>
                  Karhuno AI – Dashboard Overview
                </h3>
                
                {/* Subtitle */}
                <p className={`text-xl mb-12 text-center leading-relaxed ${montserrat.className}`} style={{ color: '#374151' }}>
                  Here's what you'll see when you log in.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Dashboard Overview */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                        Dashboard Overview
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Track scanned posts, detected signals, and target companies found across all modules.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corporate News Search */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                          Corporate News Search
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Discover companies making strategic moves through real-time news analysis and funding announcements.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Track LinkedIn Conversations */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                          Track LinkedIn Conversations
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Find decision-makers actively discussing topics relevant to your business with keyword monitoring.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Who Engaged with My Competitor */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                          Who Engaged with My Competitor
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Intercept in real-time everyone who interacts with your competitors' LinkedIn content.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Your Leads */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                          Your Leads
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Automatically organized results from all modules with context, proof links, and verified contacts.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* API Integration */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${roboto.className}`} style={{ color: '#111111' }}>
                          API Integration
                      </h4>
                        <p className={`text-sm leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>
                          Connect with your CRM or enrichment stack to push leads instantly without manual copy/paste.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate News Search Section */}
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">2</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Corporate news search
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`}>
              Discover companies making strategic moves through real-time news analysis. Track funding rounds, expansions, partnerships, and major announcements to identify high-intent prospects.
            </p>
            
            {/* Coming Soon Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 ${roboto.className}`}>
                    Coming Soon
                  </h3>
                  <p className={`text-gray-300 ${montserrat.className}`}>
                    Video tutorial for Corporate News Search will be available soon
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
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Real-time news</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Monitor breaking news and announcements instantly</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Strategic signals</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Identify funding, partnerships, and expansion moves</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Verified sources</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Get reliable information from trusted publications</p>
              </div>
            </div>
            
            {/* Key Message */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className={`text-xl text-purple-200 font-medium ${montserrat.className}`}>
                Reach companies at the exact moment they have budget and are actively seeking solutions.
                    </p>
                  </div>
                  
            {/* CTA Section */}
            <div className="text-center mt-16">
              <Link
                href="https://my.karhuno.com/signup"
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Try Corporate News Search for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className={`text-sm text-gray-400 mt-3 ${montserrat.className}`}>
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search LinkedIn Conversation Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9F9FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">3</span>
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${roboto.className}`} style={{ color: '#111111' }}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Search LinkedIn conversation
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`} style={{ color: '#111111' }}>
              Find decision-makers actively discussing topics relevant to your business. Monitor LinkedIn conversations to identify prospects with immediate buying intent.
            </p>
            
            {/* Coming Soon Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-purple-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${roboto.className}`} style={{ color: '#111111' }}>
                    Coming Soon
                  </h3>
                  <p className={`${montserrat.className}`} style={{ color: '#666666' }}>
                    Video tutorial for Search LinkedIn Conversation will be available soon
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
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Keyword search</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Find posts and comments by specific keywords</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Contact extraction</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Get verified email addresses from active users</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${roboto.className}`} style={{ color: '#111111' }}>Real-time monitoring</h3>
                <p className={`leading-relaxed ${montserrat.className}`} style={{ color: '#666666' }}>Track conversations as they happen</p>
              </div>
            </div>
            
            {/* Key Message */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className={`text-xl font-medium ${montserrat.className}`} style={{ color: '#111111' }}>
                Reach people who are already discussing the problems your product solves.
              </p>
                    </div>
                    
            {/* CTA Section */}
            <div className="text-center mt-16">
              <Link
                href="https://my.karhuno.com/signup"
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
              >
                Try Search LinkedIn Conversation for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className={`text-sm mt-3 ${montserrat.className}`} style={{ color: '#666666' }}>
                No credit card required
              </p>
                      </div>
                    </div>
                      </div>
                    </div>
                    
      {/* Who Engage with My Competitors Section */}
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Purple Number Badge */}
            <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${roboto.className}`}>
              <span className="text-white font-bold text-3xl">4</span>
                    </div>
                    
            {/* Title */}
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Who engage with my competitors
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${montserrat.className}`}>
              Intercept in real-time everyone who interacts (likes, comments, shares) with your competitors' LinkedIn content. Turn their audience into your warm leads.
            </p>
            
            {/* Coming Soon Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-purple-400" />
                      </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 ${roboto.className}`}>
                    Coming Soon
                  </h3>
                  <p className={`text-gray-300 ${montserrat.className}`}>
                    Video tutorial for Competitor Engagement Tracking will be available soon
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
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Real-time monitoring</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Track likes, comments, and shares instantly</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Profile collection</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Get real profiles of people who engaged</p>
                  </div>
                    
              <div className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl p-8 border border-purple-500/10 shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${roboto.className}`}>Smart filtering</h3>
                <p className={`text-gray-400 leading-relaxed ${montserrat.className}`}>Filter by role, company type, and size</p>
                </div>
              </div>

            {/* Key Message */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className={`text-xl text-purple-200 font-medium ${montserrat.className}`}>
                Turn your competitors' audience into warm leads.
              </p>
              </div>

            {/* CTA Section */}
            <div className="text-center mt-16 px-8">
              <Link
                href="https://my.karhuno.com/signup"
                className={`inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/30 ${montserrat.className}`}
              >
                Try Competitor Engagement Tracking for Free
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
              <div className={`mt-4 space-y-1 ${montserrat.className}`}>
                <p className="text-sm text-gray-400">
                  No credit card required
                </p>
                <p className="text-sm text-gray-500">
                  Sign up — 14 days
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
            <h2 className={`text-3xl font-bold mb-4 ${roboto.className}`}>
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Ready to become a Karhuno AI expert?
              </span>
            </h2>
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${montserrat.className}`}>
              Join thousands of sales professionals who have transformed their results with our platform.
            </p>
            <Link
              href="https://my.karhuno.com/signup"
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
            >
              Start Your Sign Up
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 
"use client";

import React from 'react';
import { Search, MessageCircle, Users, ArrowRight, CheckCircle, Play, Info } from 'lucide-react';
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
    subtitle: "Turn real-time business news into actionable intent data.",
    description: "Karhuno continuously analyzes corporate updates to uncover high-intent buying signals.",
    bullets: [
      "Filter leads by **industry**, **region**, and **growth stage**",
      "Validate every opportunity with **source-backed insights**",
      "Act on **real buying intent**, not static lists"
    ],
    icon: Search,
    gradient: "from-purple-600 to-blue-600",
    ctaText: "Try Corporate Search",
    ctaLink: "https://my.karhuno.com/signup"
  },
  {
    id: 2,
    title: "LinkedIn Intent Data Engine",
    subtitle: "Turn LinkedIn engagement into qualified intent signals.",
    description: "Karhuno analyzes public conversations to detect when decision-makers discuss topics tied to your product or industry.",
    bullets: [
      "**AI-generated keywords** identify relevant posts automatically",
      "Filter by **job title**, **company size**, or **seniority**",
      "Export **enriched leads** with context, metrics, and source links"
    ],
    icon: MessageCircle,
    gradient: "from-purple-600 to-blue-600",
    ctaText: "Track Conversations",
    ctaLink: "https://my.karhuno.com/signup"
  },
  {
    id: 3,
    title: "Competitor Intelligence Tracker",
    subtitle: "Turn competitor activity into actionable intent data.",
    description: "Karhuno analyzes public sources to detect early signs of growth among your competitors — from new hires to product launches or collaborations.",
    bullets: [
      "Track **LinkedIn signals**, **news mentions**, and **market movements**",
      "Identify **partnerships**, **funding events**, or **tech changes**",
      "Get **context-rich leads** with source-backed insights"
    ],
    icon: Users,
    gradient: "from-purple-600 to-blue-600",
    ctaText: "Monitor Competitors",
    ctaLink: "https://my.karhuno.com/signup"
  }
];

// Video Placeholder Component
const VideoPlaceholder = ({ title, icon: IconComponent }: { title: string; icon: any }) => {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-300 shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Play className="w-5 h-5" />
          <span className="text-sm font-medium">Video Demo</span>
        </div>
      </div>
    </div>
  );
};

export default function HowKarhunoWorks() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-24">
            <h2 className={`text-4xl md:text-6xl font-bold text-black mb-6 ${roboto.className}`}>
              How <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Karhuno AI</span> Works
            </h2>
            <p className={`text-xl text-gray-500 max-w-3xl mx-auto ${montserrat.className}`}>
              Three powerful engines working together to discover the highest-quality sales signals for your business.
            </p>
          </div>

          {/* Main Content - All Features */}
          <div className="space-y-32">

            {/* First Feature - Corporate News Search */}
            <div className="space-y-8">
              {/* Mobile: Title First */}
              <div className="lg:hidden text-center">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                  <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                    {features[0].title}
                  </span>
                </h3>
                <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                  {features[0].subtitle}
                </p>
              </div>

              {/* Desktop: Grid Layout, Mobile: Stack Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Video */}
                <div>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-300 shadow-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/corporate news search.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Right Column - Text Content for Corporate News Search */}
                <div className="space-y-6">
                  {/* Desktop: Title */}
                  <div className="hidden lg:block">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                      <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                        {features[0].title}
                      </span>
                    </h3>
                    <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                      {features[0].subtitle}
                    </p>
                  </div>

                  <p className={`text-gray-600 text-lg leading-relaxed ${montserrat.className}`}>
                    {features[0].description}
                  </p>

                  <div className="space-y-4">
                    {features[0].bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${features[0].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-600 leading-relaxed ${montserrat.className}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href={features[0].ctaLink || "#"}
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${features[0].gradient} text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg ${montserrat.className}`}
                    >
                      {features[0].ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Feature - LinkedIn Intent Data Engine */}
            <div className="space-y-8">
              {/* Mobile: Title First */}
              <div className="lg:hidden text-center">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                  <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                    {features[1].title}
                  </span>
                </h3>
                <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                  {features[1].subtitle}
                </p>
              </div>

              {/* Desktop: Grid Layout, Mobile: Stack Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Video */}
                <div>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-300 shadow-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/linkedin conversation.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Right Column - Text Content for LinkedIn Intent Data Engine */}
                <div className="space-y-6">
                  {/* Desktop: Title */}
                  <div className="hidden lg:block">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                      <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                        {features[1].title}
                      </span>
                    </h3>
                    <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                      {features[1].subtitle}
                    </p>
                  </div>

                  <p className={`text-gray-600 text-lg leading-relaxed ${montserrat.className}`}>
                    {features[1].description}
                  </p>

                  <div className="space-y-4">
                    {features[1].bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${features[1].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-600 leading-relaxed ${montserrat.className}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href={features[1].ctaLink || "#"}
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${features[1].gradient} text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg ${montserrat.className}`}
                    >
                      {features[1].ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Feature - Competitor Intelligence Tracker */}
            <div className="space-y-8">
              {/* Mobile: Title First */}
              <div className="lg:hidden text-center">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                  <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                    {features[2].title}
                  </span>
                </h3>
                <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                  {features[2].subtitle}
                </p>
              </div>

              {/* Desktop: Grid Layout, Mobile: Stack Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Video */}
                <div>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-300 shadow-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/competitor monitoring (1).mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Right Column - Text Content for Competitor Intelligence Tracker */}
                <div className="space-y-6">
                  {/* Desktop: Title */}
                  <div className="hidden lg:block">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                      <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                        {features[2].title}
                      </span>
                    </h3>
                    <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                      {features[2].subtitle}
                    </p>
                  </div>

                  <p className={`text-gray-600 text-lg leading-relaxed ${montserrat.className}`}>
                    {features[2].description}
                  </p>

                  <div className="space-y-4">
                    {features[2].bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${features[2].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-600 leading-relaxed ${montserrat.className}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href={features[2].ctaLink || "#"}
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${features[2].gradient} text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg ${montserrat.className}`}
                    >
                      {features[2].ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Feature - Mentions & Social Listening */}
            <div className="space-y-8">
              {/* Mobile: Title First */}
              <div className="lg:hidden text-center">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                  <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                    Mentions & Social Listening
                  </span>
                </h3>
                <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                  Turn social conversations into qualified signals — and act on them instantly.
                </p>
              </div>

              {/* Desktop: Grid Layout, Mobile: Stack Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Video */}
                <div>
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-300 shadow-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/video/social conversation video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Right Column - Text Content for Mentions & Social Listening */}
                <div className="space-y-6">
                  {/* Desktop: Title */}
                  <div className="hidden lg:block">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${roboto.className}`}>
                      <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                        Mentions & Social Listening
                      </span>
                    </h3>
                    <p className={`text-xl text-gray-600 font-medium ${montserrat.className}`}>
                      Turn social conversations into qualified signals — and act on them instantly.
                    </p>
                  </div>

                  <p className={`text-gray-600 text-lg leading-relaxed ${montserrat.className}`}>
                    Karhuno scans Reddit, Facebook, and X to detect conversations where your product, market, or brand is mentioned. Spot early buyer interest, join the right discussions, and drive warm traffic back to your platform.
                  </p>

                  <div className="space-y-4">
                    {[
                      'Track relevant discussions across Reddit, Facebook, and X',
                      'Get real-time links to warm conversations about your niche',
                      'Use AI to generate smart replies and join the conversation instantly'
                    ].map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-gray-600 leading-relaxed ${montserrat.className}`}>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg ${montserrat.className}`}
                    >
                      Monitor Mentions
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-[#f9f5ff] py-20 overflow-hidden">
        <div className="text-center max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-200/50 shadow-lg">
            <h3 className={`text-3xl md:text-4xl font-bold text-black mb-4 ${roboto.className}`}>
              Ready to discover your next customers?
            </h3>
            <p className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto ${montserrat.className}`}>
              Start tracking the signals that matter most to your business growth.
            </p>
            <a
              href="https://my.karhuno.com/signup"
              className={`inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 shadow-lg text-lg ${montserrat.className}`}
            >
              Start Sign Up
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className={`text-sm text-gray-500 mt-4 ${montserrat.className}`}>
              Setup in under 5 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

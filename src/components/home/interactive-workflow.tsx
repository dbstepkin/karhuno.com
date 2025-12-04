"use client";

import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export default function InteractiveWorkflow() {
  return (
    <section className="relative pt-16 pb-16 px-8 bg-gradient-to-br from-[#0A0A0F] to-[#1B1B23] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${roboto.className}`}>
          <span className="text-white">What </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Karhuno AI
          </span>
          <span className="text-white"> does</span>
        </h2>

        <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 ${montserrat.className}`}>
          Discover how Karhuno turns real buying signals into warm leads without scraping, guesswork or cold data.
        </p>

        <div className="mb-8">
          <video
            src="/video/finale-25.mp4"
            controls
            loop
            muted
            className="w-full rounded-2xl max-h-[540px] object-cover shadow-lg border border-white/10"
          />
        </div>

        <div className="mt-6">
          <div
            role="button"
            onClick={() => window.open('https://calendly.com/team-karhuno/30min', '_blank')}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/15 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-medium">Book a Call with Our Experts</span>
            <svg className="w-4 h-4 text-cyan-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '58 Positive Replies Using Real-Time Buying Signals | LinkedIn Outreach Case Study',
  description: 'How a B2B outbound strategy achieved over 38% reply rate with just two tools: Karhuno AI and HeyReach. Real results from intent-based LinkedIn outreach.',
  keywords: 'LinkedIn outreach, buying signals, B2B outbound, reply rate, intent-based marketing, HeyReach, sales signals, LinkedIn automation',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: '58 Positive Replies Using Real-Time Buying Signals',
    description: 'How a B2B outbound strategy achieved over 38% reply rate with just two tools. Real results from 151 leads.',
    url: 'https://karhuno.com/blog/real-time-buying-signals-linkedin-outreach',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/linkedin-outreach-results.png',
        width: 1200,
        height: 675,
        alt: 'LinkedIn outreach results: 58 positive replies using real-time buying signals',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-08T00:00:00.000Z',
    modifiedTime: '2025-10-08T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Use Cases',
    tags: ['LinkedIn', 'Outbound', 'Case Study', 'Buying Signals', 'B2B Sales'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '58 Positive Replies Using Real-Time Buying Signals',
    description: 'How a B2B outbound strategy achieved over 38% reply rate with just two tools. Real results from 151 leads.',
    images: ['https://karhuno.com/images/blog/linkedin-outreach-results.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/real-time-buying-signals-linkedin-outreach',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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

export default function BlogArticle() {
  return (
    <main className={`bg-white min-h-screen ${montserrat.variable} ${roboto.variable} font-montserrat`}>
      
      {/* Article Header */}
      <header className="bg-gradient-to-b from-[#f9f9fb] to-[#eef0ff] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className={`text-[#7e51ff] hover:text-[#6842e6] transition-colors text-sm ${montserrat.className}`}>
              ← Back to blog
            </Link>
          </nav>

          {/* Category and Meta */}
          <div className="mb-6">
            <span className={`inline-block bg-[#7e51ff]/10 text-[#7e51ff] px-3 py-1 rounded-full text-sm font-medium ${roboto.className}`}>
              Use cases
            </span>
            <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
              Published October 2025 • 5 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            58 Positive Replies Using Real-Time Buying Signals
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            How a B2B outbound strategy achieved over 38% reply rate with just two tools.
          </p>

          {/* Author and Date */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">KA</span>
              </div>
              <div>
                <p className={`font-medium text-gray-900 ${roboto.className}`}>Karhuno AI Team</p>
                <p className={`text-gray-500 ${montserrat.className}`}>Published October 2025</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-8 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog/linkedin-outreach-results.png"
              alt="LinkedIn outreach results: 58 positive replies using real-time buying signals"
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* The Challenge */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Challenge
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Most outbound campaigns rely on volume — 10,000 cold messages, hoping for a 1% reply rate. 
              </p>
              <p>
                This strategy took a different approach, using only two tools — <strong>Karhuno AI</strong> and <strong>HeyReach</strong> — to build a precision-targeted LinkedIn campaign based entirely on real-time intent signals.
              </p>
              
              {/* Results Box */}
              <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-8 my-6 border-l-4 border-[#7e51ff]">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>Results achieved:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] bg-clip-text text-transparent mb-2">
                      151
                    </div>
                    <div className="text-gray-700 font-medium">Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] bg-clip-text text-transparent mb-2">
                      95
                    </div>
                    <div className="text-gray-700 font-medium">Accepted Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] bg-clip-text text-transparent mb-2">
                      58
                    </div>
                    <div className="text-gray-700 font-medium">Positive Replies</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    38%+ Reply Rate
                  </p>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="my-8">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
                  <h3 className={`text-lg font-bold text-gray-900 mb-4 text-center ${roboto.className}`}>
                    Campaign Performance Metrics
                  </h3>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog/heyreach-results-chart.jpeg"
                      alt="HeyReach campaign performance chart showing reply rates and engagement metrics"
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 1 */}
          <section className="mb-12">
            <div className="bg-white border-2 border-[#7e51ff] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h2 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                  Use Buying Signals to Find the Right People
                </h2>
              </div>
              
              <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
                <p>
                  Instead of targeting static job titles, the campaign used <strong>Karhuno AI's Signal Search</strong> to find real-time buyer intent on LinkedIn.
                </p>
                <p>
                  By scanning public LinkedIn posts, filtering by C-level roles, industries, and keywords, the strategy identified users already engaging with relevant content.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-4 border-l-4 border-[#7e51ff]">
                  <p className="font-semibold text-gray-900 mb-2">The Strategy:</p>
                  <p>
                    Only decision-makers were selected for outreach, creating hyper-relevant lists based on real engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <div className="bg-white border-2 border-[#5ca9ff] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5ca9ff] to-[#7e51ff] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h2 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>
                  Launch the Outreach – 3 Simple Messages
                </h2>
              </div>
              
              <div className={`space-y-6 ${montserrat.className}`}>
                {/* Message 1 */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className={`text-lg font-bold text-gray-900 mb-3 ${roboto.className}`}>
                    Message 1: Connection Request
                  </h3>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-gray-700 italic">
                      Hey {'{FIRST_NAME}'},
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Saw your comment under the outbound signals post.
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      I'm testing something similar and you seem like exactly the kind of person whose feedback would be gold.
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Would love to connect if you're open to it!
                    </p>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className={`text-lg font-bold text-gray-900 mb-3 ${roboto.className}`}>
                    Message 2: After Connection
                  </h3>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-gray-700 italic">
                      Hey {'{FIRST_NAME}'},
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Really appreciate you connecting!
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      I'm working on a tool that spots real-time buying signals (hiring, funding, tool mentions, etc.) from LinkedIn and the web to help outbound teams reach out at the right time.
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Happy to send over a free invite if you're curious to give it a spin.
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Let me know!
                    </p>
                  </div>
                </div>

                {/* Message 3 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className={`text-lg font-bold text-gray-900 mb-3 ${roboto.className}`}>
                    Message 3: Follow-up (if no reply)
                  </h3>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-gray-700 italic">
                      Hey {'{FIRST_NAME}'},
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      As mentioned, here's the link to the site:
                    </p>
                    <p className="text-gray-700 italic mt-2 font-semibold">
                      https://karhuno.com
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      It's 100% free during this beta phase.
                    </p>
                    <p className="text-gray-700 italic mt-2">
                      Would really appreciate your thoughts if you have a few minutes to explore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why It Worked */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why It Worked
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${roboto.className}`}>
                      Intent-first targeting
                    </h3>
                    <p className={`text-gray-700 text-sm ${montserrat.className}`}>
                      Finding people already engaging in relevant topics
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${roboto.className}`}>
                      Human-style messaging
                    </h3>
                    <p className={`text-gray-700 text-sm ${montserrat.className}`}>
                      No automation spam
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${roboto.className}`}>
                      Perfect timing
                    </h3>
                    <p className={`text-gray-700 text-sm ${montserrat.className}`}>
                      Triggered right after the intent signal
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${roboto.className}`}>
                      Simplicity
                    </h3>
                    <p className={`text-gray-700 text-sm ${montserrat.className}`}>
                      Just three messages, personalized and respectful
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Used */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Tools Used
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://karhuno.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-br from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-6 border-2 border-[#7e51ff] hover:border-[#5ca9ff] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 ${roboto.className}`}>
                      Karhuno AI
                    </h3>
                  </div>
                  <p className={`text-gray-700 ${montserrat.className}`}>
                    Track buying signals across LinkedIn and the web
                  </p>
                  <div className="mt-4">
                    <span className="text-[#7e51ff] font-semibold group-hover:underline">
                      Visit Karhuno AI →
                    </span>
                  </div>
                </div>
              </a>

              <a href="https://www.heyreach.io" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-500 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" y1="8" x2="19" y2="14"></line>
                        <line x1="22" y1="11" x2="16" y2="11"></line>
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 ${roboto.className}`}>
                      HeyReach
                    </h3>
                  </div>
                  <p className={`text-gray-700 ${montserrat.className}`}>
                    Launch personalized LinkedIn sequences
                  </p>
                  <div className="mt-4">
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Visit HeyReach →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Key Takeaway */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-2xl p-8 text-white">
              <h2 className={`text-2xl font-bold mb-4 ${roboto.className}`}>
                Key Takeaway
              </h2>
              <p className={`text-lg leading-relaxed ${montserrat.className}`}>
                This campaign proves that <strong>quality beats quantity</strong>. Instead of spamming thousands of contacts, focus on the right 150 people at the right time. Real-time buying signals make all the difference.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
            Ready to achieve similar results?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Start tracking real-time buying signals and reach prospects at the perfect moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://my.karhuno.com/signup"
              className={`bg-white text-[#7e51ff] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg ${montserrat.className}`}
            >
              Start free trial
            </a>
            <a
              href="/blog"
              className={`border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors ${montserrat.className}`}
            >
              Read more case studies
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className={`text-2xl font-bold text-gray-900 mb-8 ${roboto.className}`}>
            Related articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/5-signals-buying-intent-linkedin" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  5 signals that predict buying intent on LinkedIn
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  We analyzed 3,000+ LinkedIn posts to discover which actions indicate a prospect is ready to buy.
                </p>
              </div>
            </Link>
            <Link href="/blog/reddit-n8n-automation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  SignalPlay: How We Automated Reddit to Generate B2B Leads
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}


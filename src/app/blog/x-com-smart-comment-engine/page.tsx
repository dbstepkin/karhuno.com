import { Montserrat, Roboto } from "@/lib/localFonts";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X.com Comment Automation: 7X Your Visibility with This Smart Auto-Engage Engine',
  description: 'Discover how Karhuno AI users leverage X.com automation to respond to the right posts in real time. Build your B2B social presence with zero manual effort.',
  keywords: 'X.com automation, Twitter automation, social media automation, B2B social media, comment automation, n8n automation, Karhuno AI, social media engagement',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: 'X.com Comment Automation: 7X Your Visibility with Smart Auto-Engage Engine',
    description: 'Discover how Karhuno AI users leverage X.com automation to respond to the right posts in real time.',
    url: 'https://karhuno.com/blog/x-com-smart-comment-engine',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/x-com-automation-hero.png',
        width: 1200,
        height: 675,
        alt: 'X.com comment automation workflow diagram',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-09T00:00:00.000Z',
    modifiedTime: '2025-10-09T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Automation Recipes',
    tags: ['Automation', 'X.com', 'Social Media', 'B2B Marketing', 'Comment Automation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X.com Comment Automation: 7X Your Visibility',
    description: 'Discover how to automate X.com comments to respond to the right posts in real time.',
    images: ['https://karhuno.com/images/blog/x-com-automation-hero.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/x-com-smart-comment-engine',
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
              Automation recipes
            </span>
            <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
              Updated October 2025 • 9 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            X.com comment automation: respond to the right posts in real time, automatically
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            In today's B2B social media landscape, timing is everything. Posts disappear within minutes. Opportunities are short-lived.
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
              src="/images/blog/x-com-automation-hero.png"
              alt="X.com comment automation workflow diagram"
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
          
          {/* Introduction */}
          <section className="mb-12">
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                In today's B2B social media landscape, timing is everything. Posts disappear within minutes. Opportunities are short-lived. And engagement? It's won by those who show up — fast and with value.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                X.com Comment Automation changes the game.
              </p>
              <p>
                Built on Karhuno AI's smart auto-engage engine, this workflow allows your brand to instantly respond to high-impact public posts on X.com (formerly Twitter) — without lifting a finger.
              </p>
              <p>
                With just a few keywords, the engine hunts, thinks, and replies. Whether it's sharing insight, adding humor, or quietly inserting your value — your profile stays active, visible, and relevant 24/7.
              </p>
            </div>
          </section>

          {/* How it Works */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              How the auto-engage engine works
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                The automation is engineered using modular tools and a touch of AI magic. Here's the behind-the-scenes:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff]">
                      <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Step</th>
                      <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Action</th>
                    </tr>
                  </thead>
                  <tbody className={montserrat.className}>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">1️⃣</td>
                      <td className="p-4">Schedule your automation (daily/hourly) with n8n</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">2️⃣</td>
                      <td className="p-4">Randomly pick a keyword from your custom list</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">3️⃣</td>
                      <td className="p-4">Search X.com using Apify for fresh, relevant posts</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">4️⃣</td>
                      <td className="p-4">Run each post through Karhuno AI logic: Business Match? If yes → Strategic Reply. If no → Visibility Boost Comment</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">5️⃣</td>
                      <td className="p-4">Use OpenAI GPT to craft smart replies</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4 font-medium text-gray-900">6️⃣</td>
                      <td className="p-4">Post replies via Twitter API with random timing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                Each comment is tailored for impact — never spammy, always strategic.
              </p>
            </div>
          </section>

          {/* Comment Styles */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Comment styles: smart engagement, your way
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                The engine adapts to your brand voice, letting you define the tone. Here's how:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">💡</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Insightful</h3>
                  <p className="text-gray-600 text-sm">Educate or guide with authority</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">😄</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clever</h3>
                  <p className="text-gray-600 text-sm">Break the scroll with wit</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Relatable</h3>
                  <p className="text-gray-600 text-sm">Build empathy and trust</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">👍</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Supportive</h3>
                  <p className="text-gray-600 text-sm">Acknowledge without pitching</p>
                </div>
              </div>

              <p>
                By rotating these styles, your presence feels human — not robotic.
              </p>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Use cases across niches
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Whether you're selling software or saving the planet, smart commenting works for any niche:
              </p>
              
              <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-6 border-l-4 border-[#7e51ff] my-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#7e51ff] mr-3">💰</span>
                    <span><strong>Fintech:</strong> Monitor "invoice automation" and drop insights about managing cash flow.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7e51ff] mr-3">🎨</span>
                    <span><strong>Design agencies:</strong> Reply to "bad UX" posts with clever memes or design tips.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7e51ff] mr-3">🌱</span>
                    <span><strong>Climate orgs:</strong> Join conversations on "ESG" or "carbon offsets" with thought leadership.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                Done right, this is more than social media. It's strategic audience-building at scale.
              </p>
            </div>
          </section>

          {/* Why it Works */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why X.com automation works so well
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                X.com is a fast-moving river. Here's why real-time commenting matters:
              </p>
              
              {/* Stats Image */}
              <div className="my-8 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/blog/x-com-stats.png"
                  alt="X.com automation statistics and performance metrics"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gradient-to-br from-[#7e51ff] to-[#5ca9ff] text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">18</div>
                  <div className="text-sm">Minutes avg post lifespan</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <div className="text-sm">Visibility boost from early replies</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">2-4x</div>
                  <div className="text-sm">More engagement vs links</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">🎯</div>
                  <div className="text-sm">Strategic comments trigger curiosity DMs</div>
                </div>
              </div>

              <p>
                By showing up early, often, and on-brand, you're planting seeds for future growth — without cold pitching.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The tech stack behind the workflow
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Here's the full tech recipe powering this automation:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#7e51ff] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">n</span>
                    <span><strong>n8n:</strong> Flow scheduling + execution</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">A</span>
                    <span><strong>Apify:</strong> Real-time search across X.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">G</span>
                    <span><strong>OpenAI GPT:</strong> Contextual reply generation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">T</span>
                    <span><strong>Twitter API:</strong> Posts replies automatically</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">K</span>
                    <span><strong>Karhuno AI Logic:</strong> Decides which posts are worth it</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                This isn't a basic auto-responder. It's a smart engine built for nuance, context, and brand alignment.
              </p>
            </div>
          </section>

          {/* Who Should Use */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Who should use this automation?
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                This X.com automation is perfect for:
              </p>
              
              <div className="space-y-3 my-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">👤</div>
                  <div>
                    <p className="font-semibold text-gray-900">Founders growing an audience from scratch</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">🏢</div>
                  <div>
                    <p className="font-semibold text-gray-900">Niche B2B brands looking to stay top-of-mind</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">🎯</div>
                  <div>
                    <p className="font-semibold text-gray-900">Agencies running multiple client accounts</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">⚡</div>
                  <div>
                    <p className="font-semibold text-gray-900">Marketing teams with no time to "do social"</p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-900">
                If ghost-town engagement is a problem, this solves it — elegantly.
              </p>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              What can you customize?
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Flexibility is core to the experience. Here's what you can tweak:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Input</th>
                      <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">🎯 Keywords</td>
                      <td className="p-4">Up to 50 business-relevant phrases</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4">🎭 Tone Filters</td>
                      <td className="p-4">Choose funny, dry, serious, sarcastic</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">🌍 Language</td>
                      <td className="p-4">Multilingual support (e.g., EN, IT, FR)</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4">👥 Accounts</td>
                      <td className="p-4">Post from one or multiple handles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                That means one automation can serve different campaigns, voices, or clients.
              </p>
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Manual vs Automated Engagement
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff]">
                    <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Manual Engagement</th>
                    <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Karhuno X.com Automation</th>
                  </tr>
                </thead>
                <tbody className={montserrat.className}>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Time-consuming</td>
                    <td className="p-4 text-green-600">Runs 24/7 in the background</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4">Inconsistent tone</td>
                    <td className="p-4 text-green-600">Aligned to your chosen voice</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Reactive</td>
                    <td className="p-4 text-green-600">Proactive and strategic</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4">Limited reach</td>
                    <td className="p-4 text-green-600">Scales with keywords and posts</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Fatigue</td>
                    <td className="p-4 text-green-600">Zero burnout, zero writer's block</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-6 border-l-4 border-[#7e51ff] mt-6">
              <p className="text-gray-900 text-lg leading-relaxed">
                In short, it's your <strong>unfair advantage</strong> in the noisy world of B2B social.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Frequently asked questions (FAQs)
            </h2>
            <div className={`space-y-6 ${montserrat.className}`}>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">1. Is this against X.com's terms of service?</h3>
                <p className="text-gray-700">This automation uses the official Twitter API and follows all platform rules. It's designed for authentic interaction — not spam.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">2. Can I choose which comments get posted?</h3>
                <p className="text-gray-700">Yes. You can preview and approve replies manually or let the engine post automatically.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">3. Will it sound robotic?</h3>
                <p className="text-gray-700">No. Comments are crafted by GPT with your tone, keywords, and context in mind. They feel human — and often witty.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">4. Can I use this for multiple clients or brands?</h3>
                <p className="text-gray-700">Absolutely. The workflow is multi-profile ready and easy to clone across projects.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">5. How many keywords should I start with?</h3>
                <p className="text-gray-700">We recommend 20–30 high-intent keywords. You can expand to 50+ over time.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">6. What if there are no relevant posts found?</h3>
                <p className="text-gray-700">The engine simply skips posting. No forced engagement, no spam.</p>
              </div>

            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                Ready to get started?
              </h3>
              <p className={`text-gray-700 mb-6 ${montserrat.className}`}>
                Download the complete X.com automation workflow and start building your B2B social presence automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/downloads/x-com-automation-workflow.json"
                  className={`bg-[#7e51ff] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6842e6] transition-colors text-center ${montserrat.className}`}
                  download
                >
                  Download Workflow JSON
                </a>
                <a
                  href="https://my.karhuno.com/signup"
                  className={`border-2 border-[#7e51ff] text-[#7e51ff] px-6 py-3 rounded-xl font-semibold hover:bg-[#7e51ff] hover:text-white transition-colors text-center ${montserrat.className}`}
                >
                  Try Karhuno AI Free
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
            Ready to automate your X.com engagement?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Start building your B2B social presence with zero manual effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://my.karhuno.com/signup"
              className={`bg-white text-[#7e51ff] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg ${montserrat.className}`}
            >
              Start sign up
            </a>
            <a
              href="/blog"
              className={`border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors ${montserrat.className}`}
            >
              Read more automation guides
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
            <Link href="/blog/reddit-n8n-automation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  SignalPlay: how we automated Reddit to generate B2B leads
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase.
                </p>
              </div>
            </Link>
            <Link href="/blog/warehouse-buying-signals-24h-deal" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  How warehouse buying signals closed a deal in 24 hours
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  A real case study of how a small industrial company used warehouse buying signals from Karhuno AI.
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

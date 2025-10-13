import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SignalPlay: How We Automated Reddit to Generate B2B Leads | Karhuno AI Blog',
  description: 'A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase — for fully automated, high-quality inbound leads without being spammy.',
  keywords: 'Reddit automation B2B, AI Reddit comments, lead generation from Reddit, GPT n8n workflow, signal-based sales outreach, automated lead generation',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: 'SignalPlay: How We Automated Reddit to Generate B2B Leads (Without Being Spammy)',
    description: 'A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase — for fully automated, high-quality inbound.',
    url: 'https://karhuno.com/blog/reddit-n8n-automation',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/reddit-automation-hero.png',
        width: 1200,
        height: 675,
        alt: 'Reddit automation workflow with n8n and GPT for B2B lead generation',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-08T00:00:00.000Z',
    modifiedTime: '2025-10-08T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Automation Recipes',
    tags: ['Reddit', 'Automation', 'n8n', 'GPT', 'Lead Generation', 'B2B Sales'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalPlay: How We Automated Reddit to Generate B2B Leads',
    description: 'A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase — for fully automated, high-quality inbound.',
    images: ['https://karhuno.com/images/blog/reddit-automation-hero.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/reddit-n8n-automation',
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
              Updated October 2025 • 6 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            SignalPlay: How We Automated Reddit to Generate B2B Leads (Without Being Spammy)
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase — for fully automated, high-quality inbound.
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
              src="/images/blog/reddit-automation-hero.png"
              alt="Reddit automation workflow with n8n and GPT for B2B lead generation"
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
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              What Is SignalPlay?
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                SignalPlay is our custom-built Reddit Autocomment Engine — a fully automated workflow that monitors Reddit conversations in real time, filters for high-intent posts, uses GPT-4o to craft human-like replies, and publishes them instantly.
              </p>
              <p>
                It started as a weekend experiment using n8n, Supabase and GPT, and quickly became one of our highest-performing inbound growth channels.
              </p>
              <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-6 my-6 border-l-4 border-[#7e51ff]">
                <p className="text-gray-900 font-semibold mb-3">
                  Today, over 20 people contact us daily after seeing our helpful replies on Reddit.
                </p>
                <p className="text-gray-700">
                  All without ads. Without links. Without sounding like salespeople.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              How the Automation Works (Step-by-Step)
            </h2>

            {/* Step 1 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                1. Trigger & Post Discovery
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                The workflow runs every few minutes and scrapes fresh posts from subreddits like:
              </p>
              <ul className={`list-disc list-inside text-gray-700 mb-4 space-y-2 ${montserrat.className}`}>
                <li>r/LeadGeneration</li>
                <li>r/SaaS</li>
                <li>r/Entrepreneur</li>
                <li>r/startups</li>
              </ul>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                It looks for hot posts containing keywords like:
              </p>
              <ul className={`list-disc list-inside text-gray-700 space-y-2 ${montserrat.className}`}>
                <li>"lead gen tool"</li>
                <li>"replace Clay"</li>
                <li>"cold outreach problem"</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                2. Deduplication with Supabase
              </h3>
              <p className={`text-gray-700 ${montserrat.className}`}>
                Each post is checked against Supabase. If it's already been processed, the workflow skips it.
              </p>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                3. Quality Filter
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                Only posts that meet these conditions are considered:
              </p>
              <ul className={`list-disc list-inside text-gray-700 space-y-2 ${montserrat.className}`}>
                <li>More than 2 upvotes</li>
                <li>Text content is present</li>
                <li>Created within the last 6 months</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                4. GPT Screening – Step 1
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                GPT-4o analyzes the post and answers:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#7e51ff] mb-4">
                <p className={`text-gray-800 italic ${montserrat.className}`}>
                  "Is this a real business pain point related to sales, lead gen, or B2B growth?"
                </p>
              </div>
              <p className={`text-gray-700 ${montserrat.className}`}>
                Only posts with a "yes" continue.
              </p>
            </div>

            {/* Step 5 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                5. Key Data Extraction
              </h3>
              <p className={`text-gray-700 ${montserrat.className}`}>
                We extract all relevant metadata: post text, upvotes, subreddit size, creation date, and direct link.
              </p>
            </div>

            {/* Step 6 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                6. GPT Comment Creation – Step 2
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                A second GPT prompt generates a natural, empathetic reply — never salesy, never spammy.
              </p>
              <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-lg p-6 border border-gray-200">
                <p className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>Example comment:</p>
                <p className={`text-gray-700 italic ${montserrat.className}`}>
                  "Had the same problem recently. Ended up testing a signal-based tool that tracked funding and hiring. Let me know if you want to see what worked for us — happy to share."
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                7. Comment Is Posted
              </h3>
              <p className={`text-gray-700 ${montserrat.className}`}>
                The reply is posted automatically to the original Reddit thread — no links, no hard CTA.
              </p>
            </div>

            {/* Step 8 */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                8. Logging + Human-like Wait
              </h3>
              <ul className={`list-disc list-inside text-gray-700 space-y-2 ${montserrat.className}`}>
                <li>The post is logged to Supabase</li>
                <li>The system waits 60–300 seconds before processing the next post (to mimic real behavior)</li>
              </ul>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-2xl p-8 text-center">
              <h3 className={`text-2xl font-bold text-white mb-4 ${roboto.className}`}>
                Get the Complete n8n Workflow
              </h3>
              <p className={`text-purple-100 mb-6 max-w-2xl mx-auto ${montserrat.className}`}>
                Download the full SignalPlay automation workflow and import it directly into your n8n instance. Includes all 8 steps, GPT prompts, and Supabase integration.
              </p>
              <a
                href="/downloads/reddit-automation-workflow.json"
                download="reddit-automation-workflow.json"
                className={`inline-flex items-center gap-3 bg-white text-[#7e51ff] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg ${montserrat.className}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download n8n Workflow (JSON)
              </a>
              <p className={`text-purple-100 text-sm mt-4 ${montserrat.className}`}>
                Free • Ready to import • No signup required
              </p>
            </div>
            
            {/* What You Need */}
            <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className={`font-semibold text-gray-900 mb-3 ${roboto.className}`}>What you'll need to run this workflow:</h4>
              <ul className={`space-y-2 text-gray-700 ${montserrat.className}`}>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] mr-3">✓</span>
                  <span><strong>n8n instance</strong> (self-hosted or cloud)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] mr-3">✓</span>
                  <span><strong>OpenAI API key</strong> (for GPT-4o)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] mr-3">✓</span>
                  <span><strong>Supabase account</strong> (free tier works)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] mr-3">✓</span>
                  <span><strong>Reddit API credentials</strong> (free developer account)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Built-in Safeguards */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Built-In Safeguards
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className={`text-gray-700 ${montserrat.className}`}>✓ Double filtering (logic + GPT)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className={`text-gray-700 ${montserrat.className}`}>✓ History tracking via Supabase</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className={`text-gray-700 ${montserrat.className}`}>✓ Randomized delays</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className={`text-gray-700 ${montserrat.className}`}>✓ Human-style tone + prompt design</p>
              </div>
            </div>
          </section>

          {/* Best Use Cases */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Best Use Cases
            </h2>
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-6">
              <ul className={`space-y-3 text-gray-700 ${montserrat.className}`}>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] font-bold mr-3">•</span>
                  <span>Startup or side project promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] font-bold mr-3">•</span>
                  <span>Silent market validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] font-bold mr-3">•</span>
                  <span>Community-based lead generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7e51ff] font-bold mr-3">•</span>
                  <span>Early traction without paid ads</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Reddit Works */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why Reddit Works for B2B Leads
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Reddit is one of the most underrated lead generation platforms.
              </p>
              <p>Here's why:</p>
              <div className="bg-white border-l-4 border-[#7e51ff] p-6 my-6">
                <ul className="space-y-3">
                  <li><strong>1.8B monthly visits</strong></li>
                  <li><strong>430M active users</strong>, many in professional roles</li>
                  <li><strong>78% make purchasing decisions at work</strong> (Reddit Internal Data)</li>
                  <li><strong>100,000+ active communities</strong> across SaaS, AI, logistics, fintech, HR, and more</li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Real Power */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Real Power of Reddit
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Reddit is where:
              </p>
              <ul className={`list-disc list-inside space-y-2 ml-4`}>
                <li>Buyers ask for help before Googling</li>
                <li>Founders share unfiltered pain points</li>
                <li>Marketers, consultants, and PMs post real problems, looking for advice</li>
              </ul>
              <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-6 my-6 border-l-4 border-[#7e51ff]">
                <p className="font-semibold text-gray-900 mb-2">
                  These are live buying signals — if you intercept them in the right way, they become warm leads.
                </p>
              </div>
            </div>
          </section>

          {/* Real Example */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Real Example
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className={`font-semibold text-gray-900 mb-4 ${roboto.className}`}>Post on r/Entrepreneur:</p>
              <blockquote className={`text-gray-700 italic mb-6 pl-4 border-l-4 border-gray-300 ${montserrat.className}`}>
                "Struggling to get traction for our B2B SaaS. Anyone found a good lead gen strategy?"
              </blockquote>
              
              <div className={`space-y-3 text-gray-700 ${montserrat.className}`}>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>You reply with empathy</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>You share your experience (not your pitch)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>They check your profile → land on Karhuno → book a demo</span>
                </p>
              </div>

              <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-[#7e51ff]">
                <p className={`text-gray-900 font-semibold ${montserrat.className}`}>
                  This is not advertising. It's smart presence.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
            Ready to automate your lead generation?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Start tracking buying signals across Reddit, LinkedIn, and the web.
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
              Read more articles
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
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  How we reached 24% reply rate with deep signal search
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  A full breakdown of the outbound experiment that delivered record-level response rates.
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


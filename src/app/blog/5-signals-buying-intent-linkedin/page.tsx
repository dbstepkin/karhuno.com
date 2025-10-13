import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Signals That Predict Buying Intent on LinkedIn | Karhuno AI Blog',
  description: 'We analyzed 3,000+ LinkedIn posts to discover which actions indicate a prospect is ready to buy. Learn the 5 buying signals that increased our reply rates by 400%.',
  keywords: 'buying intent LinkedIn, LinkedIn signals, sales trigger events, LinkedIn engagement, B2B outbound, sales automation, lead generation',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: '5 Signals That Predict Buying Intent on LinkedIn',
    description: 'We analyzed 3,000+ LinkedIn posts to discover which actions indicate a prospect is ready to buy. Learn the 5 buying signals that increased our reply rates by 400%.',
    url: 'https://karhuno.com/blog/5-signals-buying-intent-linkedin',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/linkedin-signals-hero.png',
        width: 1200,
        height: 675,
        alt: '5 signals that predict buying intent on LinkedIn - analysis of engagement patterns and buying behavior',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Sales Signals',
    tags: ['LinkedIn', 'Sales Signals', 'B2B Sales', 'Lead Generation', 'Buying Intent'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Signals That Predict Buying Intent on LinkedIn',
    description: 'We analyzed 3,000+ LinkedIn posts to discover which actions indicate a prospect is ready to buy. Learn the 5 buying signals that increased our reply rates by 400%.',
    images: ['https://karhuno.com/images/blog/linkedin-signals-hero.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/5-signals-buying-intent-linkedin',
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
              Sales signals
            </span>
            <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
              Updated for 2025 • 6 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            5 signals that predict buying intent on LinkedIn
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            We analyzed 3,000+ LinkedIn posts to discover which actions indicate a prospect is ready to buy.
          </p>

          {/* Author and Date */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">KA</span>
              </div>
              <div>
                <p className={`font-medium text-gray-900 ${roboto.className}`}>Karhuno AI Team</p>
                <p className={`text-gray-500 ${montserrat.className}`}>Published January 2025</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-8 aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog/linkedin-signals-hero.png"
              alt="5 signals that predict buying intent on LinkedIn - analysis of engagement patterns and buying behavior"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
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
              Not all likes are created equal
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Most sales teams look at LinkedIn engagement as "just noise." But what if certain comments, likes or posts were actually signals that your next customer is ready to buy?
              </p>
              <p>
                At Karhuno AI, we analyzed over 3,000 LinkedIn posts across dozens of industries to understand which patterns of engagement consistently correlated with buying behavior.
              </p>
              <p>
                The result? A refined list of 5 buying signals that increased our reply rates by up to 400% — with zero change in messaging.
              </p>
            </div>
          </section>

          {/* Signal 1 */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                1. Job titles mentioned in comments
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                When people comment things like:
              </p>
              <ul className={`list-disc list-inside text-gray-700 mb-4 space-y-2 ${montserrat.className}`}>
                <li>"We've just hired our first RevOps"</li>
                <li>"Looking for help with CRM migration"</li>
              </ul>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                ...it's not just chatter. These comments often appear before a company switches tools, starts outbound campaigns, or invests in infrastructure.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>What it means:</h4>
                <p className={`text-gray-700 ${montserrat.className}`}>
                  Someone is building capacity — and likely budgeting for new tools. Reach out now before competitors do.
                </p>
              </div>
              <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>How Karhuno tracks it:</h4>
                <p className={`text-gray-700 ${montserrat.className}`}>
                  We monitor keywords like "hired," "onboarding," "migrating," within post comments by ICPs.
                </p>
              </div>
            </div>
          </section>

          {/* Signal 2 */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                2. Conversations around pain points
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                Posts that discuss frustrations or workflow gaps (even indirectly) tend to attract engagement from people who are actively looking for a better way.
              </p>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>Examples:</p>
              <ul className={`list-disc list-inside text-gray-700 mb-4 space-y-2 ${montserrat.className}`}>
                <li>"Cold emails don't work anymore"</li>
                <li>"Tired of using 6 tools for a simple campaign"</li>
                <li>"We're testing out new lead gen solutions"</li>
              </ul>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>What it means:</h4>
                <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                  They're aware of the problem. They just need the right solution.
                </p>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  Pro tip: Don't pitch. Add value. Share a playbook, insight, or relevant case study.
                </p>
              </div>
            </div>
          </section>

          {/* Signal 3 */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                3. Influencer-led engagement
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                Many prospects "show their intent" not with their own posts, but by liking or commenting on influencer content related to your category.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>What it means:</h4>
                <p className={`text-gray-700 ${montserrat.className}`}>
                  They're consuming content around your niche, which often precedes tool research or vendor discovery.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                  <strong>Example:</strong> A Head of Sales at a logistics startup likes 3 posts in a week about outbound automation. That's not random. That's research.
                </p>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  How Karhuno helps: You can track interactions with specific influencers, competitors, or posts tagged with your category.
                </p>
              </div>
            </div>
          </section>

          {/* Signal 4 */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                4. Announcements that signal growth
              </h3>
              <ul className={`list-disc list-inside text-gray-700 mb-4 space-y-2 ${montserrat.className}`}>
                <li>"We've just raised our seed round!"</li>
                <li>"New office, new chapter."</li>
                <li>"Hiring 10+ in GTM"</li>
              </ul>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                Growth announcements = buying intent. Full stop.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>What it means:</h4>
                <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                  Funding, hiring, and expansion are intent accelerators. These companies are planning new campaigns, onboarding tools, or restructuring processes.
                </p>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  Your move: Reach out with something tailored, like: "Congrats on the new funding! We work with other Series A teams like [X] to help ramp GTM efforts faster."
                </p>
              </div>
            </div>
          </section>

          {/* Signal 5 */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-8 border-l-4 border-[#7e51ff]">
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
                5. Repeat engagement on related topics
              </h3>
              <p className={`text-gray-700 mb-4 ${montserrat.className}`}>
                One like or comment could be noise. But when a decision-maker engages multiple times on posts around a specific theme — that's patterned interest.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className={`font-semibold text-gray-900 mb-2 ${roboto.className}`}>What it means:</h4>
                <p className={`text-gray-700 mb-2 ${montserrat.className}`}>
                  They're quietly signaling readiness. Especially when they engage with multiple people talking about tools, tactics or problems in the same space.
                </p>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  What we observed: When a prospect interacts with at least 3 posts around a theme (e.g. "cold email", "B2B data", "RevOps"), reply rates skyrocket.
                </p>
              </div>
            </div>
          </section>

          {/* Why These Signals Work */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why these signals work
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Unlike databases or enrichment tools, LinkedIn activity reveals real-time buyer psychology. People don't engage with sales-related content unless they're:
              </p>
              <ul className={`list-disc list-inside space-y-2 ml-4`}>
                <li>Exploring a new strategy</li>
                <li>Planning a tool switch</li>
                <li>Benchmarking competitors</li>
                <li>Open to new ideas</li>
              </ul>
              <p>
                Tracking this engagement gives you the context, timing, and topic — all before your competitor even sends a message.
              </p>
            </div>
          </section>

          {/* How to Use These Signals */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              How to use these signals in your outreach
            </h2>
            <ol className={`list-decimal list-inside space-y-3 text-gray-700 ${montserrat.className}`}>
              <li>Personalize based on the signal (e.g., comment = "We're hiring in ops")</li>
              <li>Mention the original post or context</li>
              <li>Add value (free playbook, benchmark data, relevant tool comparison)</li>
              <li>Use a soft CTA (not "book a call", but "want the report?")</li>
            </ol>
            
            <div className="bg-gray-50 rounded-xl p-6 mt-6 border border-gray-200">
              <h4 className={`font-semibold text-gray-900 mb-3 ${roboto.className}`}>Example outreach:</h4>
              <blockquote className={`text-gray-700 italic ${montserrat.className}`}>
                "Saw your comment under [post] about CRM migration. We actually built a signal tracker to catch these shifts in real-time — happy to share the use case if helpful."
              </blockquote>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
            Ready to track buying signals like these?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Start monitoring LinkedIn engagement patterns that predict buying intent.
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
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  From 2% to 18%: how signal-based outreach transformed our sales
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  A case study showing how one sales team completely changed their approach using buying signals.
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

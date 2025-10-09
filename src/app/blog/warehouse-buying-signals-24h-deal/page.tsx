import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How warehouse buying signals closed a deal in 24 hours — real case study with Karhuno AI',
  description: 'Discover how a small industrial company used warehouse buying signals from Karhuno AI to close a deal in just 24 hours. Learn the strategy, results, and how you can replicate it.',
  keywords: 'warehouse buying signals, industrial services, B2B sales case study, high-intent leads, facility openings, Karhuno AI, industrial outreach, warehouse expansion signals',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: 'How warehouse buying signals closed a deal in 24 hours — real case study',
    description: 'Discover how a small industrial company used warehouse buying signals from Karhuno AI to close a deal in just 24 hours.',
    url: 'https://karhuno.com/blog/warehouse-buying-signals-24h-deal',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/warehouse-case-study-hero.png',
        width: 1200,
        height: 675,
        alt: 'Warehouse buying signals case study - 24 hour deal close',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-09T00:00:00.000Z',
    modifiedTime: '2025-10-09T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Case Studies',
    tags: ['Case Study', 'Industrial Services', 'Warehouse Signals', 'B2B Sales', 'Buying Signals'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How warehouse buying signals closed a deal in 24 hours',
    description: 'Real case study: how a small industrial company closed a deal in under 24 hours using warehouse buying signals from Karhuno AI.',
    images: ['https://karhuno.com/images/blog/warehouse-case-study-hero.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/warehouse-buying-signals-24h-deal',
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
              Case Studies
            </span>
            <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
              Updated October 2025 • 8 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            How warehouse buying signals closed a deal in 24 hours — real case study with Karhuno AI
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            In the fast-paced world of B2B sales, being first often means being the winner. Here's how a small industrial services company did exactly that.
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
              src="/images/blog/warehouse-case-study.png"
              alt="Warehouse buying signals case study - deal closed in 24 hours"
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
                In the fast-paced world of B2B sales, being first often means being the winner. That's exactly what happened when a small industrial services company used <strong>warehouse buying signals</strong> to close a deal — in less than 24 hours. And they did it without cold calling or mass emails.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Let's dive into this real case study and break down the strategy behind this lightning-fast success.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Challenge: Find High-Intent Leads, Fast
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                This U.S.-based industrial company wasn't casting a wide net. Instead, they had one specific goal:
              </p>
              <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-6 border-l-4 border-[#7e51ff] my-6">
                <p className="text-gray-900 font-semibold text-lg">
                  Find companies opening new warehouses in a specific region of the U.S.
                </p>
              </div>
              <p className="font-semibold text-gray-900">
                Why warehouses? Because when a business opens a new warehouse, it usually means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>They're investing in equipment and infrastructure</li>
                <li>They need external help for setup and support</li>
                <li>They're making decisions <em>right now</em></li>
              </ul>
              <p>
                These are what sales pros call <strong>"high-intent buying signals."</strong>
              </p>
            </div>
          </section>

          {/* The Game-Changer */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Game-Changer: Karhuno AI's Corporate News Search
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                To track down real-time warehouse openings, the team turned to <strong>Karhuno AI</strong>. Its Corporate News Search tool scans public data to find:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verified company announcements</li>
                <li>Expansion news</li>
                <li>Job posts indicating facility openings</li>
                <li>Press releases and blogs</li>
              </ul>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
                <p className="font-semibold text-gray-900 mb-3">
                  Every signal comes with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ A summary of the event</li>
                  <li>✓ The company name</li>
                  <li>✓ A link to the source (like a blog, news article, or job post)</li>
                  <li>✓ Contact info when available</li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Strategy */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Strategy: Small List, Big Impact
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Most companies go broad with cold outreach — thousands of emails, hoping for a bite. This team went the opposite way.
              </p>
              <p className="font-semibold text-gray-900">
                Here's how:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Built a list of just <strong>50 companies</strong></li>
                <li>Each one tied to a new warehouse opening</li>
                <li>Wrote highly personalized messages based on those openings</li>
              </ul>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 my-6">
                <p className="text-sm text-gray-600 mb-2">A sample message looked like this:</p>
                <p className="text-gray-900 italic">
                  "We saw you're opening a new warehouse in [City] — we specialize in industrial infrastructure in that area. Happy to help during the setup or pre-opening phase if you need support."
                </p>
              </div>
              
              <p className="text-lg font-semibold text-gray-900">
                No fluff. Just relevant, local, and timely help.
              </p>
            </div>
          </section>

          {/* The Result */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              The Result: One Deal in Under 24 Hours
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Out of the 50 personalized emails, here's what happened:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-gradient-to-br from-[#7e51ff] to-[#5ca9ff] text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">1</div>
                  <div className="text-sm">Deal closed in &lt;24h</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">Several</div>
                  <div className="text-sm">Quote requests</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-2">Multiple</div>
                  <div className="text-sm">Pipeline entries</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#7e51ff] mt-6">
                <p className="text-gray-900 italic text-lg">
                  "We had never closed a deal in under 24 hours from cold outreach. These signals completely changed how we approach outbound."
                </p>
                <p className="text-gray-600 text-sm mt-2">— CEO of the industrial services company</p>
              </div>
            </div>
          </section>

          {/* Why This Works */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why Warehouse Buying Signals Work So Well
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Here's why warehouse buying signals work so well for industrial services:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">📍</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Physical & Time-Sensitive</h3>
                  <p className="text-gray-600 text-sm">Warehouses open on fixed timelines with clear deadlines</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Show Intent</h3>
                  <p className="text-gray-600 text-sm">A new facility needs services, equipment, and support</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Allow Local Targeting</h3>
                  <p className="text-gray-600 text-sm">Outreach can be geographically relevant and personalized</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Beat the Competition</h3>
                  <p className="text-gray-600 text-sm">If you spot the news first, you reach out first</p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Replicate */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              How to Use This for Your Own Business
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                If you're in industrial services, logistics, or equipment sales, here's how you can replicate this:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Use Karhuno AI to track warehouse or facility announcements</p>
                    <p className="text-gray-600 text-sm">Focus on your target region and filter for verified leads</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Filter for verified leads that match your ideal customer</p>
                    <p className="text-gray-600 text-sm">Quality over quantity — focus on the right fit</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Craft personalized cold emails referencing the exact event</p>
                    <p className="text-gray-600 text-sm">Mention the warehouse opening, location, and how you can help</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">Follow up fast — buying windows are short</p>
                    <p className="text-gray-600 text-sm">Speed is critical when companies are in decision mode</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#7e51ff] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <p className="font-semibold text-gray-900">Build a focused pipeline that prioritizes speed over volume</p>
                    <p className="text-gray-600 text-sm">Track responses and optimize your message based on what works</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              FAQ: Warehouse Buying Signals & Karhuno AI
            </h2>
            <div className={`space-y-6 ${montserrat.className}`}>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: How does Karhuno AI find warehouse openings?</h3>
                <p className="text-gray-700">A: It scans public web data like news sites, company blogs, and job boards to detect verified expansion events.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: Is this better than standard B2B lead gen tools?</h3>
                <p className="text-gray-700">A: Yes — it focuses on real-time, event-driven data rather than generic contact databases.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: What industries benefit from these signals?</h3>
                <p className="text-gray-700">A: Industrial services, logistics, commercial equipment suppliers, and contractors.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: How many leads do I need?</h3>
                <p className="text-gray-700">A: This case closed one deal from just 50 leads. With timing and context, you don't need massive lists.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: Can small sales teams use it?</h3>
                <p className="text-gray-700">A: Absolutely. In fact, small teams benefit most from focused, high-intent outreach.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: What's the ROI like?</h3>
                <p className="text-gray-700">A: In this case, one deal from one day of outreach — that's a powerful return.</p>
              </div>

            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Final Thoughts: Timing Beats Volume
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                This case proves that you don't need thousands of leads. What you need is the right signal, the right message, and the right time.
              </p>
              <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-8 border-l-4 border-[#7e51ff] mt-6">
                <p className="text-gray-900 text-lg leading-relaxed">
                  <strong>Warehouse buying signals offer a goldmine of opportunity for industrial companies</strong> — and Karhuno AI helps you find them before your competition even knows they exist.
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
            Ready to find your high-intent warehouse signals?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Start tracking facility openings and expansion signals in your region.
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
            <Link href="/blog/real-time-buying-signals-linkedin-outreach" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-[#7e51ff] transition-colors mb-2 ${roboto.className}`}>
                  58 Positive Replies Using Real-Time Buying Signals
                </h4>
                <p className={`text-gray-600 text-sm ${montserrat.className}`}>
                  How a B2B outbound strategy achieved over 38% reply rate with just two tools: Karhuno AI and HeyReach.
                </p>
              </div>
            </Link>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}


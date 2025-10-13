import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karhuno AI vs Perplexity: Which Tool Is Best for B2B Buying Signals? | Comparison',
  description: 'A side-by-side comparison of Karhuno AI and Perplexity for sales teams who care about timing, context, and real lead quality. See which tool wins for B2B sales research.',
  keywords: 'Karhuno vs Perplexity, B2B buying signals, sales intelligence tools, lead generation comparison, intent data tools, sales research tools',
  authors: [{ name: 'Karhuno AI Team' }],
  openGraph: {
    title: 'Karhuno AI vs Perplexity: Which Tool Is Best for Finding Real B2B Buying Signals?',
    description: 'A side-by-side comparison for sales teams who care about timing, context, and real lead quality.',
    url: 'https://karhuno.com/blog/karhuno-vs-perplexity',
    siteName: 'Karhuno AI',
    images: [
      {
        url: 'https://karhuno.com/images/blog/karhuno-vs-perplexity-hero.png',
        width: 1200,
        height: 675,
        alt: 'Karhuno AI vs Perplexity comparison for B2B sales',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-08T00:00:00.000Z',
    modifiedTime: '2025-10-08T00:00:00.000Z',
    authors: ['Karhuno AI Team'],
    section: 'Comparisons',
    tags: ['Comparison', 'Perplexity', 'Sales Intelligence', 'B2B Sales', 'Buying Signals'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karhuno AI vs Perplexity: Which Tool Is Best for B2B Buying Signals?',
    description: 'A side-by-side comparison for sales teams who care about timing, context, and real lead quality.',
    images: ['https://karhuno.com/images/blog/karhuno-vs-perplexity-hero.png'],
  },
  alternates: {
    canonical: 'https://karhuno.com/blog/karhuno-vs-perplexity',
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
              Comparisons
            </span>
            <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
              Updated October 2025 • 7 min read
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
            Karhuno AI vs Perplexity: Which Tool Is Best for Finding Real B2B Buying Signals?
          </h1>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
            A side-by-side comparison for sales teams who care about timing, context, and real lead quality.
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
              src="/images/blog/karhuno-vs-perplexity-hero.png"
              alt="Karhuno AI vs Perplexity comparison for B2B sales"
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
              Why "Intent" Is Not Just a Buzzword
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Timing is everything in B2B sales. Whether you're selling SaaS, services, or anything in between — reaching a prospect before your competitor can make the difference between a reply and a missed opportunity.
              </p>
              <p>
                But where do you find reliable, real-time intent data?
              </p>
              <p>
                Tools like Perplexity or ChatGPT can summarize news or respond to prompts. But they weren't built for sales.
              </p>
              <p>
                That's where <strong>Karhuno AI</strong> comes in — a sales signals platform designed from the ground up to detect and track real-world buyer intent.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Let's break it down.
              </p>
            </div>
          </section>

          {/* Head-to-Head Comparison */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Karhuno AI vs Perplexity – Head-to-Head
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff]">
                    <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Feature</th>
                    <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Karhuno AI</th>
                    <th className={`text-left p-4 text-white font-semibold ${roboto.className}`}>Perplexity</th>
                  </tr>
                </thead>
                <tbody className={montserrat.className}>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Purpose-built for sales</td>
                    <td className="p-4 text-green-600">✓ Yes – Built for B2B outbound</td>
                    <td className="p-4 text-red-600">✗ No – General-purpose search</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Buying signals detection</td>
                    <td className="p-4 text-green-600">✓ 10+ signal types</td>
                    <td className="p-4 text-red-600">✗ None</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Live proof links</td>
                    <td className="p-4 text-green-600">✓ News, job posts, LinkedIn URLs</td>
                    <td className="p-4 text-red-600">✗ No sources unless asked</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Lead enrichment</td>
                    <td className="p-4 text-green-600">✓ Decision-maker contacts included</td>
                    <td className="p-4 text-red-600">✗ Not available</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Search in any language</td>
                    <td className="p-4 text-green-600">✓ Yes</td>
                    <td className="p-4 text-yellow-600">⚠ English-centric</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Output format</td>
                    <td className="p-4 text-green-600">✓ Sales-ready list</td>
                    <td className="p-4 text-red-600">✗ Text block</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Integration with CRM or workflow</td>
                    <td className="p-4 text-green-600">✓ CSV, API, n8n ready</td>
                    <td className="p-4 text-red-600">✗ Manual copy-paste</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">UI built for SDRs</td>
                    <td className="p-4 text-green-600">✓ Yes</td>
                    <td className="p-4 text-red-600">✗ Not designed for sales work</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Alerts on new signals</td>
                    <td className="p-4 text-green-600">✓ Email or webhook alerts</td>
                    <td className="p-4 text-red-600">✗ Not supported</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real Example */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Real Example: Searching for Warehouse Expansions in the US
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                We ran the same query on both platforms:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#7e51ff] my-6">
                <p className="text-gray-900 italic font-medium">
                  "Show logistics companies in the US that announced new warehouses last month"
                </p>
              </div>

              {/* Karhuno Result */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
                <h3 className={`text-lg font-bold text-gray-900 mb-4 ${roboto.className}`}>Karhuno AI Result:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>10+ verified results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Company names, titles, URLs, decision-makers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Each result links to original proof (news, LinkedIn, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Ready to export or use in outbound campaigns</span>
                  </li>
                </ul>
              </div>

              {/* Perplexity Result */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border-l-4 border-red-500 mb-6">
                <h3 className={`text-lg font-bold text-gray-900 mb-4 ${roboto.className}`}>Perplexity Result:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">✗</span>
                    <span>4 vague summaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">✗</span>
                    <span>No proof or clickable sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">✗</span>
                    <span>No way to tell if the companies are real buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">✗</span>
                    <span>No contact data or relevance scoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 italic">
                  "It felt like reading a Wikipedia stub," said one of our users after testing both tools.
                </p>
              </div>
            </div>
          </section>

          {/* Why Perplexity Falls Short */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Why Perplexity Falls Short for Sales
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Perplexity is great for quick knowledge queries — "What's the best CRM for startups?" or "How does ABM work?"
              </p>
              <p>
                But if your job involves:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prioritizing prospects based on actions</li>
                <li>Reaching out right when interest spikes</li>
                <li>Personalizing based on real company moves</li>
              </ul>
              <p className="text-lg font-semibold text-gray-900">
                ...then you need a system built to detect buying signals, not just summarize content.
              </p>
            </div>
          </section>

          {/* What Makes Karhuno Different */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              What Makes Karhuno AI Different?
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Karhuno doesn't guess intent. It tracks real events that indicate a buyer is ready.
              </p>
              <p className="font-semibold text-gray-900">
                Here are a few signals it can detect:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Signal Type</th>
                      <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">Funding rounds</td>
                      <td className="p-4">"Series A in Germany – SaaS sector"</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4">Hiring patterns</td>
                      <td className="p-4">"Now hiring RevOps roles"</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">Tech stack changes</td>
                      <td className="p-4">"Moved to Salesforce from HubSpot"</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4">Office openings</td>
                      <td className="p-4">"New warehouse in Texas"</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">LinkedIn conversations</td>
                      <td className="p-4">"Commented under Clay's growth post"</td>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <td className="p-4">Partnerships or launches</td>
                      <td className="p-4">"Launched with Oracle cloud"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-xl p-6 border-l-4 border-[#7e51ff]">
                <p className="font-semibold text-gray-900 mb-3">
                  And every signal includes:
                </p>
                <ul className="space-y-2">
                  <li>• Company name + website</li>
                  <li>• Signal summary</li>
                  <li>• Source URL</li>
                  <li>• Contact data (when available)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Not Just AI */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              It's Not Just AI — It's Sales Intelligence
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                While AI helps parse the web, what makes Karhuno AI effective is its contextual logic + sales-grade filtering.
              </p>
              <p>
                It doesn't just show what happened, it tells you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Why it matters for you</li>
                <li>When to act</li>
                <li>Who to contact</li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#7e51ff] mt-6">
                <p className="text-gray-900 font-semibold">
                  That's what makes Karhuno not just an AI — but a sales advantage.
                </p>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Integrates with Your Workflow
            </h2>
            <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
              <p>
                Karhuno AI connects seamlessly with:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p>• Google Sheets / Excel</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p>• CRM platforms (HubSpot, Pipedrive, etc.)</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p>• Outbound tools (Lemlist, Instantly, etc.)</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p>• n8n workflows for alerts, enrichment, follow-up</p>
                </div>
              </div>
              <p>
                Whether you're building a cold email campaign, a LinkedIn sequence, or just prioritizing accounts — Karhuno fuels your entire funnel with fresh signals, not static data.
              </p>
            </div>
          </section>

          {/* Summary Table */}
          <section className="mb-12">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Summary: If You Sell, Karhuno Wins
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Use Case</th>
                    <th className={`text-left p-4 font-semibold text-gray-900 ${roboto.className}`}>Who Wins</th>
                  </tr>
                </thead>
                <tbody className={montserrat.className}>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Sales research</td>
                    <td className="p-4 text-green-600 font-semibold">✓ Karhuno</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4">Lead list generation</td>
                    <td className="p-4 text-green-600 font-semibold">✓ Karhuno</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Competitive tracking</td>
                    <td className="p-4 text-green-600 font-semibold">✓ Karhuno</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4">Answering trivia</td>
                    <td className="p-4 text-blue-600 font-semibold">Perplexity</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">SEO or content ideas</td>
                    <td className="p-4 text-blue-600 font-semibold">Perplexity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-xl p-8 mt-8 border-l-4 border-[#7e51ff]">
              <p className={`text-gray-900 text-lg leading-relaxed ${montserrat.className}`}>
                If you're in B2B sales or marketing, <strong>Karhuno AI is miles ahead</strong>. It's not a chatbot. It's a real-time signal engine that lets you:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Stop searching</li>
                <li>• Start selling</li>
                <li>• Reach prospects at the perfect time</li>
              </ul>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
            Ready to switch to real buying signals?
          </h3>
          <p className={`text-purple-100 text-lg mb-8 ${montserrat.className}`}>
            Stop using general AI tools for sales. Start using Karhuno AI.
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
              Read more comparisons
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


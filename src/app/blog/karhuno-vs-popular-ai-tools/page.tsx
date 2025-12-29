import { Montserrat, Roboto } from "@/lib/localFonts";
import Footer from "@/components/home/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import { Check, X, AlertTriangle, Trophy, Zap, Target, Star } from "lucide-react";

export const metadata: Metadata = {
    title: 'Karhuno AI vs. ChatGPT, Claude, and Perplexity: Why Big AI Fails at B2B Sales Signals',
    description: 'Can general-purpose AI tools find real B2B buying signals? We compare Karhuno AI with ChatGPT, Claude, and Perplexity using the same sales query. Discover why specific intelligence wins over general summaries.',
    keywords: 'Karhuno AI vs ChatGPT, Karhuno vs Claude, Karhuno vs Perplexity, B2B sales signals, buyer intent data, sales intelligence comparison, automated prospecting',
    authors: [{ name: 'Karhuno AI Team' }],
    openGraph: {
        title: 'Karhuno AI vs. The Big Three: Why General AI Fails at Sales Signals',
        description: 'We tested ChatGPT, Claude, and Perplexity against Karhuno AI on a real B2B sales query. Here are the results.',
        url: 'https://karhuno.com/blog/karhuno-vs-popular-ai-tools',
        siteName: 'Karhuno AI',
        images: [
            {
                url: 'https://karhuno.com/images/blog/karhuno-vs-popular-ai-tools-hero.png',
                width: 1200,
                height: 675,
                alt: 'Karhuno AI vs General AI Tools comparison',
            },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-12-29T00:00:00.000Z',
        modifiedTime: '2025-12-29T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Karhuno AI vs. General AI Tools: The Sales Signal Showdown',
        description: 'Why ChatGPT and Perplexity aren\'t enough for high-performance sales teams.',
        images: ['https://karhuno.com/images/blog/karhuno-vs-popular-ai-tools-hero.png'],
    },
    alternates: {
        canonical: 'https://karhuno.com/blog/karhuno-vs-popular-ai-tools',
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

export default function AIComparisonArticle() {
    return (
        <main className={`bg-white min-h-screen ${montserrat.variable} ${roboto.variable} font-montserrat`}>

            {/* Article Header */}
            <header className="bg-gradient-to-b from-[#f9f9fb] to-[#eef0ff] py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <nav className="mb-8">
                        <Link href="/blog" className={`text-[#7e51ff] hover:text-[#6842e6] transition-colors text-sm ${montserrat.className}`}>
                            ← Back to blog
                        </Link>
                    </nav>

                    <div className="mb-6">
                        <span className={`inline-block bg-[#7e51ff]/10 text-[#7e51ff] px-3 py-1 rounded-full text-sm font-medium ${roboto.className}`}>
                            Comparisons
                        </span>
                        <span className={`ml-3 text-gray-500 text-sm ${montserrat.className}`}>
                            Published Dec 2025 • 10 min read
                        </span>
                    </div>

                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${roboto.className}`}>
                        Karhuno AI vs. ChatGPT, Claude, and Perplexity: Why "Big AI" Fails at B2B Sales Signals
                    </h1>

                    <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${montserrat.className}`}>
                        We tested the world's most popular AI tools against Karhuno AI using the same sales query. Only one delivered verified, actionable buying signals.
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">KA</span>
                            </div>
                            <div>
                                <p className={`font-medium text-gray-900 ${roboto.className}`}>Karhuno AI Team</p>
                                <p className={`text-gray-500 ${montserrat.className}`}>Sales Intelligence Division</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-lg max-w-none">

                    <section className="mb-12">
                        <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
                            The Experiment: One Query, Four Contenders
                        </h2>
                        <div className={`text-gray-700 leading-relaxed space-y-4 ${montserrat.className}`}>
                            <p>
                                Every sales leader wants to know: "Can I just use ChatGPT to find my leads?"
                            </p>
                            <p>
                                In theory, LLMs like GPT-4, Claude 3.5, and Perplexity can browse the web. They can read news, summarize reports, and answer complex questions. But <strong>browsing</strong> isn't the same as <strong>detecting intent</strong>.
                            </p>
                            <p>
                                We ran a real-world test. We asked Karhuno AI and the "Big Three" general AI tools the exact same query:
                            </p>
                            <div className="bg-gray-900 text-white rounded-2xl p-8 my-8 border border-purple-500/30">
                                <p className="text-sm uppercase tracking-widest text-purple-400 mb-2 font-bold">The Query</p>
                                <p className="text-2xl italic font-semibold">
                                    "Find logistics companies in the US that announced new warehouses in the last 30 days."
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
                            The Results: Why Timing Requires Specificity
                        </h2>

                        {/* Karhuno Result */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 mb-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                                    <Trophy className="w-6 h-6" />
                                </div>
                                <h3 className={`text-2xl font-bold text-gray-900 ${roboto.className}`}>Karhuno AI: Verified Success</h3>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Karhuno AI didn't just summarize the news—it provided a list of 10+ specific companies with active expansion signals.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "10+ Verified Results (Not Summaries)",
                                    "Live Proof URLs (News & LinkedIn)",
                                    "Sales-Ready Context",
                                    "Decision-Maker Contact Data"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The Others Result */}
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${roboto.className}`}>The "Big Three": Vague & Stale</h3>
                            <p className="text-gray-700 mb-8">
                                ChatGPT, Claude, and Perplexity all followed a similar pattern of failure for this specific sales use case.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="space-y-4">
                                    <p className="font-bold text-gray-900">ChatGPT</p>
                                    <p className="text-sm text-gray-600">2 vague summaries. No buying signals. No source context.</p>
                                    <X className="text-red-500" />
                                </div>
                                <div className="space-y-4">
                                    <p className="font-bold text-gray-900">Claude</p>
                                    <p className="text-sm text-gray-600">4 vague summaries. Hallucinated some dates. No proof.</p>
                                    <X className="text-red-500" />
                                </div>
                                <div className="space-y-4">
                                    <p className="font-bold text-gray-900">Perplexity</p>
                                    <p className="text-sm text-gray-600">General industry news. No specific recent warehouse expansion links.</p>
                                    <AlertTriangle className="text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
                            The Conclusion
                        </h2>
                        <div className={`text-gray-700 leading-relaxed space-y-6 ${montserrat.className}`}>
                            <p>
                                General AI is great for writing poems or summarizing long documents. But in B2B sales, <strong>close enough is not enough</strong>.
                            </p>
                            <p>
                                If you reach out to a company about a "new warehouse" that actually opened two years ago, you lose all credibility. If you reach out without a source URL to prove <em>why</em> you're calling, you're just another cold caller.
                            </p>
                            <p className="text-xl font-semibold text-gray-900">
                                Karhuno AI wins because it was built for the SDR workflow, not for chat.
                            </p>
                        </div>
                    </section>

                    {/* CTA Box */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-xl">
                        <h3 className={`text-3xl font-bold mb-6 ${roboto.className}`}>Ready to find your own signals?</h3>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                            Don't guess with general AI. Get verified sales triggers delivered to your inbox every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://my.karhuno.com/signup" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                Start 7-day Free Trial
                            </a>
                            <a href="/pricing" className="bg-purple-500/20 border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                                View Pricing
                            </a>
                        </div>
                    </div>

                </div>
            </article>

            <Footer />
        </main>
    );
}

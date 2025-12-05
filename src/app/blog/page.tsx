"use client";

import { useState } from "react";
import { Montserrat, Roboto } from "@/lib/localFonts";
import Footer from "@/components/home/footer";
import Head from "next/head";

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

// Obiettivo: homepage del blog di Karhuno AI
// Ispirazione: specifyapp.com/blog ma adattata al mondo sales / signal intelligence

// Componenti chiave da generare:

// 1. Hero section in alto
// 2. Filtro per categorie (es: Sales Signals, Use Cases, Product Updates, Comparisons)
// 3. Lista articoli preview
// 4. Call to action in fondo per iscrizione / prova gratuita

export default function KarhunoBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sales signals", "Use cases", "Automation recipes", "Comparisons"];
  
  // Featured post data (in a real app, this would come from CMS/API)
  const featuredPost = {
    title: "Top Clay Alternatives in 2025: Better Signals, Smarter Automation",
    category: "Comparisons",
    teaser: "A complete guide to the best Clay alternatives in 2025 — with a focus on real-time buying signals and automated lead discovery.",
    readingTime: "8 min read",
    slug: "best-clay-alternatives-2025",
    hasContent: true // Set to false to show placeholder
  };

  const blogPosts = [
    {
      title: "X.com comment automation: respond to the right posts in real time, automatically",
      summary: "Discover how Karhuno AI users leverage X.com automation to respond to the right posts in real time. Build your B2B social presence with zero manual effort.",
      category: "Automation recipes",
      readingTime: "9 min read",
      image: "/images/blog/x-com-automation-hero.png",
      slug: "x-com-smart-comment-engine"
    },
    {
      title: "How warehouse buying signals closed a deal in 24 hours",
      summary: "A real case study of how a small industrial company used warehouse buying signals from Karhuno AI to close a deal in under 24 hours.",
      category: "Use cases",
      readingTime: "8 min read",
      image: "/images/blog/warehouse-case-study.png",
      slug: "warehouse-buying-signals-24h-deal"
    },
    {
      title: "5 signals that predict buying intent on LinkedIn",
      summary: "We analyzed 3000+ LinkedIn posts to uncover the most reliable engagement patterns for outbound sales.",
      category: "Sales signals",
      readingTime: "6 min read",
      image: "/images/blog/linkedIn-signals.png",
      slug: "5-signals-buying-intent-linkedin"
    },
    {
      title: "SignalPlay: how we automated Reddit to generate B2B leads",
      summary: "A step-by-step guide to building a Reddit commenting engine using n8n + GPT + Supabase for automated lead generation.",
      category: "Automation recipes",
      readingTime: "6 min read",
      image: "/images/blog/reddit-automation-hero.png",
      slug: "reddit-n8n-automation"
    },
    {
      title: "58 positive replies using real-time buying signals",
      summary: "How a B2B outbound strategy achieved over 38% reply rate with just two tools: Karhuno AI and HeyReach.",
      category: "Use cases",
      readingTime: "5 min read",
      image: "/images/blog/linkedin-outreach-results.png",
      slug: "real-time-buying-signals-linkedin-outreach"
    },
    {
      title: "How to identify who your competitors are: the ultimate 2025 strategy guide",
      summary: "Learn how to identify who your competitors are with this updated 2025 guide. Discover powerful strategies, tools, and steps to build a winning market position.",
      category: "Use cases",
      readingTime: "12 min read",
      image: "/images/blog/competitor-identification.png",
      slug: "how-to-identify-competitors-2025"
    },
    {
      title: "10 best alternatives to ZoomInfo for smarter B2B prospecting (2025)",
      summary: "Discover modern alternatives to ZoomInfo that offer better flexibility, real-time signals, and clearer ROI.",
      category: "Comparisons",
      readingTime: "10 min read",
      image: "/images/blog/zoominfo-alternatives.png",
      slug: "zoominfo-alternatives-2025"
    },
    {
      title: "Karhuno AI vs Perplexity: which tool is best for finding B2B buying signals?",
      summary: "A side-by-side comparison for sales teams who care about timing, context, and real lead quality.",
      category: "Comparisons",
      readingTime: "7 min read",
      image: "/images/blog/karhuno-vs-perplexity-hero.png",
      slug: "karhuno-vs-perplexity"
    },
    {
      title: "Top Clay Alternatives in 2025: Better Signals, Smarter Automation",
      summary: "A complete guide to the best Clay alternatives in 2025 — with a focus on real-time buying signals and automated lead discovery.",
      category: "Comparisons",
      readingTime: "8 min read",
      image: "/Blog/clay blog cover.png",
      slug: "best-clay-alternatives-2025"
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog | Karhuno AI - B2B Sales Intelligence Insights & Case Studies</title>
        <meta
          name="description"
          content="Discover B2B sales intelligence insights, case studies, and strategies. Learn about LinkedIn signals, corporate news monitoring, and competitor tracking with Karhuno AI."
        />
        <meta name="keywords" content="B2B sales blog, LinkedIn signals case study, corporate news monitoring, buyer intent signals, sales intelligence insights" />
        <meta property="og:title" content="Blog | Karhuno AI - B2B Sales Intelligence Insights" />
        <meta property="og:description" content="Discover B2B sales intelligence insights, case studies, and strategies. Learn about LinkedIn signals, corporate news monitoring, and competitor tracking." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Karhuno AI - B2B Sales Intelligence Insights" />
        <meta name="twitter:description" content="Discover B2B sales intelligence insights, case studies, and strategies." />
        <link rel="canonical" href="https://karhuno.com/blog" />
      </Head>
      <main className={`bg-gradient-to-b from-[#f9f9fb] to-[#eef0ff] min-h-screen ${montserrat.variable} ${roboto.variable} font-montserrat`}>
      
      {/* HERO */}
      <section className="bg-[#fafafa] py-20 md:py-28">
        <div className="container mx-auto px-6">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] ${roboto.className}`}>
              Karhuno AI blog: where signals become strategy
            </h1>
            <p className={`text-gray-600 mt-4 text-lg max-w-2xl mx-auto ${montserrat.className}`}>
              Learn how real-time triggers from the web and LinkedIn are reshaping B2B sales.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost.hasContent ? (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Featured Image */}
              <div>
                <div className="aspect-[4/3] bg-gray-100 rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="/Blog/clay blog cover.png" 
                    alt="Top Clay Alternatives in 2025: Better Signals, Smarter Automation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Post Text Content */}
              <div>
                <p className={`uppercase text-xs font-medium tracking-wide text-[#8B5CF6] mb-1 ${roboto.className}`}>
                  {featuredPost.category} · {featuredPost.readingTime}
                </p>
                <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight ${roboto.className}`}>
                  {featuredPost.title}
                </h2>
                <p className={`text-base text-gray-600 mb-6 ${montserrat.className}`}>
                  {featuredPost.teaser}
                </p>
                <a
                  href={`/blog/${featuredPost.slug}`}
                  className={`inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition ${montserrat.className}`}
                >
                  Read full article →
                </a>
              </div>
            </div>
          ) : (
            /* Placeholder when no featured post */
            <div className="text-center">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold text-gray-800 mb-3 ${roboto.className}`}>
                  No featured post yet — stay tuned!
                </h3>
                <p className={`text-gray-600 ${montserrat.className}`}>
                  We're working on bringing you the latest insights on sales signals and B2B strategies.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <div className="text-center">
            <h3 className={`text-3xl font-semibold text-gray-800 mb-4 ${roboto.className}`}>
              Want actionable signals in your inbox?
            </h3>
            <p className={`text-gray-600 mb-8 text-lg ${montserrat.className}`}>
              Join 1,200+ sales teams using Karhuno to discover hidden buying triggers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className={`px-5 py-3 rounded-md border border-gray-300 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#7e51ff] focus:border-transparent ${montserrat.className}`}
              />
              <button className={`bg-[#7e51ff] text-white px-6 py-3 rounded-md text-sm hover:bg-[#6842e6] transition-colors font-medium ${montserrat.className}`}>
                Subscribe
              </button>
            </div>
            <p className={`text-xs text-gray-500 mt-4 ${montserrat.className}`}>
              Weekly insights • no spam • unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <nav className="flex flex-wrap justify-center gap-3 mb-24 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm ${montserrat.className} ${
              selectedCategory === cat
                ? 'border-[#7e51ff] text-[#7e51ff] bg-[#7e51ff]/5'
                : 'border-gray-300 hover:border-[#7e51ff] hover:text-[#7e51ff] text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* POSTS GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-24">
        {filteredPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-200 group">
            {/* Post Image (use post.image when available, otherwise fall back to known slugs) */}
            <div className="h-44 relative overflow-hidden">
              <img
                src={
                  post.image
                    ? post.image
                    : post.slug === "5-signals-buying-intent-linkedin"
                    ? "/images/blog/linkedin-signals-hero.png"
                    : post.slug === "reddit-n8n-automation"
                    ? "/images/blog/reddit-automation-hero.png"
                    : post.slug === "karhuno-vs-perplexity"
                    ? "/images/blog/karhuno-vs-perplexity-hero.png"
                    : post.slug === "real-time-buying-signals-linkedin-outreach"
                    ? "/images/blog/linkedin-outreach-results.png"
                    : post.slug === "zoominfo-alternatives-2025"
                    ? "/images/blog/zoominfo-alternatives.png"
                    : post.slug === "warehouse-buying-signals-24h-deal"
                    ? "/images/blog/warehouse-case-study.png"
                    : "/images/blog/x-com-automation-hero.png"
                }
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <span className={`text-xs uppercase tracking-wider text-gray-500 ${roboto.className}`}>
                {post.category}
              </span>
              <h2 className={`mt-2 text-lg font-semibold text-gray-800 group-hover:text-[#7e51ff] transition-colors ${roboto.className}`}>
                {post.title}
              </h2>
              <p className={`text-sm text-gray-600 mt-2 ${montserrat.className}`}>
                {post.summary}
              </p>
              <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                <span className={montserrat.className}>{post.readingTime}</span>
                <a 
                  href={`/blog/${post.slug}`} 
                  className={`text-[#7e51ff] font-medium hover:text-[#6842e6] transition-colors ${montserrat.className}`}
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7e51ff]/5 to-[#5ca9ff]/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-[#7e51ff]/10 to-[#5ca9ff]/10 rounded-2xl p-8 md:p-12">
              <h3 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-relaxed ${roboto.className}`}>
                Ready to find your next customers?
              </h3>
              <p className={`text-gray-700 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${montserrat.className}`}>
                Start tracking real buying signals and turn them into sales opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://my.karhuno.com/signup"
                  className={`bg-[#7e51ff] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#6842e6] transition-colors shadow-2xl hover:shadow-[#7e51ff]/20 ${montserrat.className}`}
                >
                  Start sign up
                </a>
                <a
                  href="/pricing"
                  className={`border-2 border-[#7e51ff] text-[#7e51ff] px-8 py-4 rounded-xl font-semibold hover:bg-[#7e51ff] hover:text-white transition-colors shadow-lg hover:shadow-[#7e51ff]/10 ${montserrat.className}`}
                >
                  View pricing
                </a>
              </div>
              <p className={`text-gray-600 text-sm mt-4 ${montserrat.className}`}>
                No credit card required • setup in under 5 minutes
              </p>
            </div>
          </div>
        </div>
        
        {/* Subtle wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-12"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* TRANSITION SECTION */}
      <section className="bg-white py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-[#7e51ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e51ff]">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <path d="M8 2v4"></path>
                <path d="M12 2v4"></path>
                <path d="M16 2v4"></path>
                <path d="M8 10h8"></path>
                <path d="M8 14h5"></path>
              </svg>
            </div>
            <h4 className={`text-gray-900 text-lg md:text-xl font-semibold mb-3 ${roboto.className}`}>
              Stay updated with Karhuno AI
            </h4>
            <p className={`text-gray-600 text-sm md:text-base tracking-wide ${montserrat.className}`}>
              Discover the latest insights on B2B sales signals and strategies.
            </p>
          </div>
        </div>
        
        {/* Curved border above footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-16"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-gray-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
    </>
  );
}

"use client";

import { useState } from "react";
import { Montserrat, Roboto } from "next/font/google";
import Footer from "@/components/home/footer";

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
    title: "5 signals that predict buying intent on LinkedIn",
    category: "Sales signals",
    teaser: "We analyzed 3000+ LinkedIn posts to uncover the most reliable engagement patterns that indicate when prospects are ready to buy. Learn the specific signals that increased our reply rates by 400%.",
    readingTime: "6 min read",
    slug: "5-signals-buying-intent-linkedin",
    hasContent: true // Set to false to show placeholder
  };

  const blogPosts = [
    {
      title: "5 signals that predict buying intent on LinkedIn",
      summary: "We analyzed 3000+ LinkedIn posts to uncover the most reliable engagement patterns for outbound sales.",
      category: "Sales signals",
      readingTime: "6 min read",
      image: "/images/blog/linkedIn-signals.png",
      slug: "5-signals-buying-intent-linkedin"
    },
    {
      title: "How we reached 24% reply rate with deep signal search",
      summary: "A full breakdown of the outbound experiment that delivered record-level response rates.",
      category: "Use cases",
      readingTime: "4 min read",
      image: "/images/blog/reply-rate.png",
      slug: "24-percent-reply-rate-signal-search"
    },
    {
      title: "Karhuno vs ChatGPT: which tool finds better leads?",
      summary: "A side-by-side benchmark on the same query. The results will surprise you.",
      category: "Comparisons",
      readingTime: "5 min read",
      image: "/images/blog/karhuno-vs-chatgpt.png",
      slug: "karhuno-vs-chatgpt-lead-finding"
    },
    {
      title: "The hidden patterns in corporate news that signal vendor needs",
      summary: "Discover how to read between the lines of press releases and news articles to find buying signals.",
      category: "Sales signals",
      readingTime: "7 min read",
      image: "/images/blog/corporate-news.png",
      slug: "hidden-patterns-corporate-news-signals"
    },
    {
      title: "From 2% to 18%: how signal-based outreach transformed our sales",
      summary: "A case study showing how one sales team completely changed their approach using buying signals.",
      category: "Use cases",
      readingTime: "5 min read",
      image: "/images/blog/sales-transformation.png",
      slug: "signal-outreach-sales-transformation"
    },
    {
      title: "Karhuno vs traditional lead generation: the ROI breakdown",
      summary: "A detailed comparison of time investment, cost, and results between signal-based and traditional lead gen.",
      category: "Comparisons",
      readingTime: "8 min read",
      image: "/images/blog/roi-comparison.png",
      slug: "karhuno-vs-traditional-lead-gen-roi"
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
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
                    src="/images/blog/linkedin-signals-hero.png" 
                    alt="5 signals that predict buying intent on LinkedIn"
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
            {/* Post Image */}
            {post.slug === "5-signals-buying-intent-linkedin" ? (
              <div className="h-44 relative overflow-hidden">
                <img 
                  src="/images/blog/linkedin-signals-hero.png" 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="h-44 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7e51ff] to-[#5ca9ff] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Article preview</p>
                </div>
              </div>
            )}
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
                  Start free trial
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
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "@/components/home/footer";
import { Montserrat, Roboto } from "@/lib/localFonts";
import Head from "next/head";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Karhuno AI - Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact the Karhuno AI team for support, questions, or partnership opportunities. Reach out to us via email, phone, or visit our office in Helsinki, Finland."
        />
        <meta name="keywords" content="contact Karhuno AI, B2B sales support, sales intelligence contact, LinkedIn monitoring support, buyer intent support" />
        <meta property="og:title" content="Contact Us | Karhuno AI" />
        <meta property="og:description" content="Contact the Karhuno AI team for support, questions, or partnership opportunities. Reach out to us via email, phone, or visit our office." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Karhuno AI" />
        <meta name="twitter:description" content="Contact the Karhuno AI team for support, questions, or partnership opportunities." />
        <link rel="canonical" href="https://karhuno.com/contact" />
      </Head>
      <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 ${montserrat.className}`}>
        <div className="pt-20">
          <section className="relative py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-blue-100/30 to-indigo-100/30">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </h1>
                <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ${montserrat.className}`}>
                  Get in touch with the Karhuno AI team. We're here to help you succeed with B2B sales intelligence.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              >
                {/* Email */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold text-gray-800 ${roboto.className}`}>Email</h3>
                  </div>
                  <p className={`text-gray-600 ${montserrat.className}`}>
                    <a href="mailto:team@karhuno.com" className="hover:text-purple-600 transition-colors">
                      team@karhuno.com
                    </a>
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold text-gray-800 ${roboto.className}`}>Phone</h3>
                  </div>
                  <p className={`text-gray-600 ${montserrat.className}`}>
                    <a href="tel:+358465381366" className="hover:text-purple-600 transition-colors">
                      +358 465381366
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold text-gray-800 ${roboto.className}`}>Address</h3>
                  </div>
                  <p className={`text-gray-600 ${montserrat.className}`}>
                    Daring Spirit Oy<br />
                    Hiihtomäentie 14, 00810<br />
                    Helsinki, Finland
                  </p>
                </div>
              </motion.div>

              {/* Book a Call CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h2 className={`text-2xl font-bold text-gray-800 ${roboto.className}`}>
                    Book a Call with Our Team
                  </h2>
                </div>
                <p className={`text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 ${montserrat.className}`}>
                  Ready to see how Karhuno AI can transform your B2B sales? Schedule a personalized demo with our experts.
                </p>
                <button
                  onClick={() => window.open('https://calendly.com/team-karhuno/30min', '_blank')}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Demo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className={`text-sm text-gray-500 mt-4 ${montserrat.className}`}>
                  30-minute personalized demo • No commitment required
                </p>
              </motion.div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

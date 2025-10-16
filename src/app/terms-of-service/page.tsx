"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import Footer from "@/components/home/footer";
import { Montserrat, Roboto } from "next/font/google";
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

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Karhuno AI - Legal Terms & Conditions</title>
        <meta
          name="description"
          content="Read Karhuno AI's terms of service and legal conditions. Understand your rights and obligations when using our B2B sales intelligence platform."
        />
        <meta name="keywords" content="Karhuno AI terms of service, legal terms, B2B sales terms, sales intelligence terms, platform terms" />
        <meta property="og:title" content="Terms of Service | Karhuno AI" />
        <meta property="og:description" content="Read Karhuno AI's terms of service and legal conditions. Understand your rights and obligations when using our platform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Karhuno AI" />
        <meta name="twitter:description" content="Read Karhuno AI's terms of service and legal conditions." />
        <link rel="canonical" href="https://karhuno.com/terms-of-service" />
      </Head>
      <div className="min-h-screen">
      <div className="pt-20">
        <section className="relative py-24 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
            <div className="absolute inset-0">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <radialGradient
                    id="terms-grad1"
                    cx="25%"
                    cy="25%"
                    r="65%"
                    fx="25%"
                    fy="25%"
                  >
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                  </radialGradient>
                  <radialGradient
                    id="terms-grad2"
                    cx="75%"
                    cy="75%"
                    r="55%"
                    fx="75%"
                    fy="75%"
                  >
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.1)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#terms-grad1)">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="0" y="0" width="100" height="100" fill="url(#terms-grad2)">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur="11s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                Terms of Service — Karhuno AI
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-gray-600 space-y-1 ${montserrat.className}`}
              >
                <p><strong>Effective Date:</strong> 30/05/2025</p>
                <p><strong>Last Updated:</strong> 30/05/2025</p>
              </motion.div>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-cyan-500/15 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-lg mb-12"
            >
              <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Karhuno AI ("the Platform"), a self-service tool developed and owned by Daring Spirit Oy.
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-purple-200/30">
                  <p className="font-semibold text-purple-700 mb-2">Company Information:</p>
                  <p className="text-gray-800">
                    Daring Spirit Oy<br />
                    Business ID: 3461256-6<br />
                    Hiihtomäentie 14, 00810<br />
                    Helsinki, Finland
                  </p>
                </div>
                <p>
                  By registering an account or using any part of the Platform, you agree to be bound by these Terms.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
              {/* Section 1: Platform Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  1. Platform Overview
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Karhuno AI is a self-service SaaS platform that helps B2B professionals identify high-potential companies through market signals and real-time web data.
                  </p>
                  <p>The Platform includes, but is not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>LinkedIn Tracker:</strong> keyword-based signal monitoring and comment scraping</li>
                    <li><strong>Deep Research:</strong> AI-powered scanning of thousands of online articles for buyer intent signals</li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 2: Account Registration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  2. Account Registration
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    To access Karhuno AI, users must create an account using a valid email address and password. You are responsible for maintaining the confidentiality of your login credentials and all activities that occur under your account.
                  </p>
                </div>
              </motion.div>

              {/* Section 3: Credit-Based Access */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  3. Credit-Based Access
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>Karhuno AI operates on a credit-based system, where:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Each action (e.g., profile scan, research launch, email enrichment) consumes a specific number of credits</li>
                    <li>Credits are purchased upfront and are valid for 12 months from the date of purchase</li>
                    <li>Credit usage is fully visible in the user dashboard</li>
                  </ul>
                  <p className="font-semibold text-purple-700">
                    All credits purchased on Karhuno AI are valid for 12 months from the date of purchase. After this period, any unused credits will expire and cannot be refunded or reactivated.
                  </p>
                  <p className="font-semibold text-purple-700">
                    Note: Purchased credits are final and non-refundable.
                  </p>
                </div>
              </motion.div>

              {/* Section 4: Acceptable Use */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  4. Acceptable Use
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    You agree to use Karhuno AI solely for lawful and authorized purposes. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Attempt to reverse-engineer, resell, or reproduce any part of the platform</li>
                    <li>Use the platform to harm, harass, or unlawfully target individuals or organizations</li>
                    <li>Use automated scripts or bots unless explicitly allowed through APIs</li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 5: Data Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  5. Data and Results Disclaimer
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Karhuno AI provides access to public and enriched web data. While our AI strives to deliver high-quality outputs, we do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sales results, customer acquisition, or ROI</li>
                    <li>Accuracy or completeness of third-party data sources</li>
                  </ul>
                  <p>
                    All insights and leads generated through the platform are to be used at your discretion.
                  </p>
                </div>
              </motion.div>

              {/* Section 6: Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  6. Intellectual Property
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    All content, code, and design elements of Karhuno AI are the exclusive property of Daring Spirit Oy.
                  </p>
                  <p>
                    Users may not copy, distribute, or exploit any part of the platform without prior written consent.
                  </p>
                </div>
              </motion.div>

              {/* Section 7: Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  7. Support & Communication
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Our team provides support via email (team@karhuno.com) and scheduled video calls.
                  </p>
                  <p>
                    We may send you service updates, feature announcements, or billing notifications as part of your use of the platform.
                  </p>
                </div>
              </motion.div>

              {/* Section 8: Termination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  8. Termination
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Karhuno AI reserves the right to suspend or terminate any account in case of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violation of these Terms</li>
                    <li>Suspicious or abusive behavior</li>
                    <li>Non-compliance with applicable laws</li>
                  </ul>
                  <p className="font-semibold text-purple-700">
                    Unused credits will not be refunded upon termination.
                  </p>
                </div>
              </motion.div>

              {/* Section 9: Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  9. Governing Law
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Finland.
                  </p>
                  <p>
                    Any disputes will be subject to the exclusive jurisdiction of the courts of Finland.
                  </p>
                </div>
              </motion.div>

              {/* Section 10: Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-lg"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  10. Contact
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    For questions or concerns about these Terms, contact us at:
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-700">team@karhuno.com</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    </>
  );
} 
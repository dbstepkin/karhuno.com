"use client";

import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import Footer from "@/components/home/footer";
import { Montserrat, Roboto } from "next/font/google";

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

export default function PrivacyPolicyPage() {
  return (
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
                    id="privacy-grad1"
                    cx="20%"
                    cy="30%"
                    r="70%"
                    fx="20%"
                    fy="30%"
                  >
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.12)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.08)" />
                  </radialGradient>
                  <radialGradient
                    id="privacy-grad2"
                    cx="80%"
                    cy="70%"
                    r="60%"
                    fx="80%"
                    fy="70%"
                  >
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.08)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.04)" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#privacy-grad1)">
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="0" y="0" width="100" height="100" fill="url(#privacy-grad2)">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.7;0.4"
                    dur="10s"
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
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                Privacy Policy — Karhuno AI
              </h1>
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
              {/* Section 1: Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  1. Introduction
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    At Karhuno AI, we are committed to protecting your privacy and handling your personal data with transparency, care, and compliance. This Privacy Policy outlines how we collect, use, and safeguard your information when you access or interact with our platform.
                  </p>
                  <p>
                    By using Karhuno AI, you agree to the practices described below. If you do not consent to any part of this policy, we recommend discontinuing use of our services.
                  </p>
                </div>
              </motion.div>

              {/* Section 2: Data Collection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  2. Data Collection & Usage
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    We collect personal information necessary to provide a secure, efficient, and customized experience on our platform. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, password</li>
                    <li>LinkedIn profile details (for identity verification and integration)</li>
                    <li>Payment information (via secure third-party processors)</li>
                  </ul>
                  <p>
                    This data is required when signing up for a trial or purchasing credits/subscriptions. It helps us authenticate users, deliver platform features, and support product optimization.
                  </p>
                  <p className="font-semibold text-purple-700">
                    Note: We do not store complete payment card details on our servers.
                  </p>
                  <p>
                    In accordance with GDPR and local interpretations of public data usage, some LinkedIn comment data may be restricted or limited in countries such as Germany, France, and Austria. Karhuno AI does not simulate login sessions or bypass LinkedIn's visibility controls. All data collected is publicly available and handled in compliance with international privacy standards.
                  </p>
                </div>
              </motion.div>

              {/* Section 3: LinkedIn Data & Regional Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  3. LinkedIn Data & Regional Compliance
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    In accordance with GDPR and local interpretations of public data usage, some LinkedIn comment data may be restricted or limited in countries such as Germany, France, and Austria. Karhuno AI does not simulate login sessions or bypass LinkedIn's visibility controls. All data collected is publicly available and handled in compliance with international privacy standards.
                  </p>
                  <p>
                    The availability and visibility of publicly accessible content may vary depending on national privacy laws. We are committed to complying with these regulations and adapting our platform's behavior accordingly in restricted jurisdictions.
                  </p>
                </div>
              </motion.div>

              {/* Section 4: Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  4. Data Security & Compliance
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    We use industry best practices to protect your data, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption for data in transit and at rest</li>
                    <li>Strict access control and user authentication</li>
                    <li>Regular system audits and security reviews</li>
                  </ul>
                  <p>
                    Karhuno AI complies with GDPR, UK GDPR, and other applicable data protection laws. We do not sell or share your personal data for marketing purposes.
                  </p>
                </div>
              </motion.div>

              {/* Section 5: Third-Party Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  5. Third-Party Services
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    We may use trusted third-party tools for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud hosting</li>
                    <li>Analytics</li>
                    <li>Email communication</li>
                    <li>Payment processing</li>
                  </ul>
                  <p>
                    These services are carefully selected and compliant with international privacy standards. No personal data is shared without your consent.
                  </p>
                </div>
              </motion.div>

              {/* Section 6: Marketing Communication */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  6. Marketing Communication
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    When you sign up, you may receive occasional product updates, insights, or special offers. These communications include an unsubscribe link at the bottom of every email.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may opt-out anytime</li>
                    <li>Essential emails (e.g. billing, alerts) will still be sent</li>
                    <li>We do not send SMS or push marketing messages</li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 7: Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  7. Cookies & Tracking
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Karhuno AI does not use cookies for advertising, behavioral tracking, or third-party analytics.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No third-party tracking scripts are embedded</li>
                    <li>No cookie consent popups are required</li>
                    <li>We prioritize a clean, private browsing experience</li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 8: Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 p-8 shadow-sm"
              >
                <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent ${roboto.className}`}>
                  8. Your Rights
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request a copy of your personal data</li>
                    <li>Correct or update your information</li>
                    <li>Delete your account and all associated data</li>
                  </ul>
                  <p>
                    To make a request, email us at: <span className="font-semibold text-purple-700">team@karhuno.com</span>. We respond promptly and comply fully with GDPR and relevant data regulations.
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
                    This policy is governed by the data protection laws of Finland and the European Union.
                  </p>
                  <p>
                    In case of any privacy disputes, both parties agree to attempt informal resolution before initiating legal proceedings.
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
                  10. Contact Us
                </h2>
                <div className={`text-gray-900 leading-relaxed space-y-4 ${montserrat.className}`}>
                  <p>
                    Have questions or concerns? Contact our privacy team at:
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-700">team@karhuno.com</span>
                  </div>
                  <p className="mt-4">
                    We are committed to protecting your data and ensuring clarity in all our processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
} 
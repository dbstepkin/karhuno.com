"use client";

import { motion } from "framer-motion";
import { Check, X, ImageIcon } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";

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

export default function ComparisonTable() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5 }
  } as const;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff]">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            {...fadeUp}
            className={`inline-block bg-purple-100 text-purple-700 px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wider mb-4 ${montserrat.className}`}
          >
            Feature Comparison
          </motion.div>
          <motion.h2
            {...fadeUp}
            className={`text-4xl md:text-5xl font-bold text-center mb-2 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Karhuno AI vs AI tools for the same query
            </span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${roboto.className}`}
          >
            Example query: "logistic company open new warehouse in the US"
          </motion.p>
        </div>

        {/* Top: Karhuno AI box (elevated, slightly wider) */}
        <motion.div
          {...fadeUp}
          className="relative -mt-2 mb-8"
        >
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 md:p-9 text-white shadow-xl ring-1 ring-white/20 md:max-w-[90%] mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {/* Screenshot (left) */}
              <div className="md:col-span-1">
                <div className="rounded-xl overflow-hidden border border-white/20 bg-white/10">
                <div className="relative w-full h-48 sm:h-44 md:h-56">
                  <Image src="/result warehouskarhuno.png" alt="Karhuno AI result" fill className="object-cover" />
                  </div>
                </div>
                <p className="text-xs text-white/80 mt-2 text-center">Karhuno AI result</p>
              </div>

              {/* Content (right) */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className={`text-2xl font-bold mb-3 ${roboto.className}`}>Karhuno AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="text-base font-medium">10+ results</p>
                      <p className="text-sm text-purple-100">Multiple verified signals for the same query</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="text-base font-medium">Proof URLs</p>
                      <p className="text-sm text-purple-100">News, posts, or pages linked for verification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="text-base font-medium">Ready to qualify</p>
                      <p className="text-sm text-purple-100">Structured output for sales workflows</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-5 mb-6 text-center">Karhuno detects real events. These tools don’t.</p>
        </motion.div>

        {/* Context text above AI tools */}
        <motion.p
          {...fadeUp}
          className={`text-sm text-gray-600 text-center mt-8 mb-8 ${roboto.className}`}
        >
          Other tools struggle to surface verified buying signals.
        </motion.p>

        {/* Bottom: three AI tools (uniform neutral style, concise lines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ChatGPT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className="w-full rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-zinc-200 text-zinc-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center overflow-hidden">
                <Image src="/logo verde chatgpt.webp" alt="ChatGPT logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${roboto.className}`}>ChatGPT</h4>
                <p className="text-sm text-zinc-700">AI conversation tool</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm">❌ 2 vague results</p>
              <p className="text-sm">⚠️ No buying signal context</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 py-6">
              <div className="relative w-full h-48 sm:h-56">
                <Image src="/result warehousechatgpt.png" alt="ChatGPT result" fill className="object-cover" />
              </div>
            </div>
            <p className="text-xs text-zinc-700 mt-2 text-center">ChatGPT result</p>
          </motion.div>

          {/* Perplexity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-zinc-200 text-zinc-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center overflow-hidden">
                <Image src="/logobluperplexity.jpg" alt="Perplexity logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${roboto.className}`}>Perplexity</h4>
                <p className="text-sm text-zinc-700">Search assistant</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm">❌ 4 vague results</p>
              <p className="text-sm">⚠️ No buying signal context</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 py-6">
              <div className="relative w-full h-48 sm:h-56">
                <Image src="/new perplecity warehouse.png" alt="Perplexity result" fill className="object-cover" />
              </div>
            </div>
            <p className="text-xs text-zinc-700 mt-2 text-center">Perplexity result</p>
          </motion.div>

          {/* Claude */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-zinc-200 text-zinc-900"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center overflow-hidden">
                <Image src="/logoarancioclaude.png" alt="Claude logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${roboto.className}`}>Claude</h4>
                <p className="text-sm text-zinc-700">AI analysis tool</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm">❌ 4 vague results</p>
              <p className="text-sm">⚠️ No buying signal context</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 py-6">
              <div className="relative w-full h-48 sm:h-56">
                <Image src="/result warehouse claude.png" alt="Claude result" fill className="object-cover" />
              </div>
            </div>
            <p className="text-xs text-zinc-700 mt-2 text-center">Claude result</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

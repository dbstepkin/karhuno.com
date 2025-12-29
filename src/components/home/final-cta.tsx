"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Montserrat, Roboto } from "@/lib/localFonts";

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

export default function FinalCTA() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-[#0f1117]">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-20 overflow-hidden group shadow-2xl"
                >
                    {/* Inner Glow Surround */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Scale your outreach with timing</span>
                    </motion.div>

                    <h2 className={`text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight ${roboto.className}`}>
                        Ready to turn{" "}
                        <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                            Signals
                        </span>{" "}
                        into sales?
                    </h2>

                    <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed ${montserrat.className}`}>
                        Stop wasting time on stale, static lists. Start finding high-intent decision makers exactly when they are ready to buy.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = 'https://my.karhuno.com/signup'}
                            className="group relative px-10 py-5 bg-gradient-to-r from-[#a974ff] to-[#679eff] text-white font-bold text-xl rounded-2xl shadow-[0_0_20px_rgba(169,116,255,0.3)] hover:shadow-[0_0_30px_rgba(169,116,255,0.5)] transition-all flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10">Start Free Trial</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine transition-all"></div>
                        </motion.button>

                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                7-day free trial
                            </span>
                        </div>
                    </div>

                    {/* Decorative Corner Orbs */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full"></div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes shine {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}</style>
        </section>
    );
}

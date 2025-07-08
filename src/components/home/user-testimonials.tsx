"use client";

import { motion } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

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

// Karhuno AI brand color palette
const brandColors = [
  "bg-gradient-to-br from-[#a974ff] to-[#679eff]", // purple to blue
  "bg-[#f7f4ff]", // light purple
  "bg-[#edf0ff]", // light blue
  "bg-[#e0e7ff]", // blue-100
  "bg-[#ede9fe]", // purple-100
  "bg-[#c7d2fe]", // blue-200
  "bg-[#a5b4fc]", // blue-300
  "bg-[#ddd6fe]", // purple-200
  "bg-[#f1f5f9]", // gray-100
];
const avatarColors = [
  "bg-[#a974ff]", // purple
  "bg-[#679eff]", // blue
  "bg-[#7c3aed]", // deep purple
  "bg-[#2563eb]", // deep blue
  "bg-[#818cf8]", // blue-400
  "bg-[#a5b4fc]", // blue-300
  "bg-[#c7d2fe]", // blue-200
  "bg-[#ddd6fe]", // purple-200
];

const testimonials = [
  {
    id: "julia-kramer",
    quote: (
      <>
        I just click 'run daily' and get warm replies every morning — my LinkedIn reply rate is up to <span className="font-bold">61.7%</span>.
      </>
    ),
    name: "Julia Kramer",
    role: "Enterprise SDR",
    initials: "JK",
    avatarColor: "bg-[#a974ff]",
    topPick: true,
  },
  {
    id: "adam-cho",
    quote: (
      <>
        Karhuno turned my inbox into a meeting machine — I now get a <span className="font-bold">24.36% cold email reply rate</span>.
      </>
    ),
    name: "Adam Cho",
    role: "Account Executive",
    initials: "AC",
    avatarColor: "bg-[#679eff]",
    topPick: false,
  },
  {
    id: "laura-mendes",
    quote: (
      <>
        Best sales tool I've used since Outreach. <span className="font-bold">Contextual leads</span>, no guessing.
      </>
    ),
    name: "Laura Mendes",
    role: "AE Mid-Market",
    initials: "LM",
    avatarColor: "bg-[#7c3aed]",
    topPick: false,
  },
  {
    id: "lucas-tan",
    quote: (
      <>
        <span className="font-bold">Zero risk</span>. Verified contacts from public posts. No login required.
      </>
    ),
    name: "Lucas Tan",
    role: "Outbound Specialist",
    initials: "LT",
    avatarColor: "bg-[#2563eb]",
    topPick: false,
  },
  {
    id: "anita-g",
    quote: (
      <>
        I used to burn 6h/week in Sales Nav. Now I close <span className="font-bold">3x faster</span>.
      </>
    ),
    name: "Anita G.",
    role: "B2B Sales Rep",
    initials: "AG",
    avatarColor: "bg-[#818cf8]",
    topPick: false,
  },
  {
    id: "ben-r",
    quote: (
      <>
        Karhuno feeds my CRM all week with one click. I save at least <span className="font-bold">10h weekly</span>.
      </>
    ),
    name: "Ben R.",
    role: "SDR Team Lead",
    initials: "BR",
    avatarColor: "bg-[#a5b4fc]",
    topPick: false,
  },
];

// Gradient border utility
function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[#a974ff] to-[#679eff] p-[2px] rounded-2xl">
      <div className="bg-white rounded-[15px] h-full w-full">{children}</div>
    </div>
  );
}

function TopPickBadge() {
  return (
    <span className="absolute top-4 right-4 z-10 px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#a974ff] to-[#679eff] text-white shadow-md animate-pulse">
      Top pick
    </span>
  );
}

export default function UserTestimonials() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#f7f4ff] to-[#edf0ff] overflow-hidden">
      {/* Optional soft blur/pattern background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[40vw] bg-gradient-to-br from-[#a974ff33] to-[#679eff22] blur-2xl opacity-60 rounded-full" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${roboto.className}`}
          >
            <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              What our users are saying
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-xl text-gray-700 max-w-2xl mx-auto ${montserrat.className}`}
          >
            Real testimonials from sales professionals using Karhuno AI
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              whileHover={{ y: -3, boxShadow: "0 8px 32px 0 rgba(60,60,120,0.10)", filter: "brightness(1.03)" }}
            >
              <GradientBorder>
                <Card
                  className={
                    `relative rounded-2xl shadow-lg bg-white px-7 py-8 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-white/10 hover:ring-inset`
                  }
                >
                  {item.topPick && <TopPickBadge />}
                  <div className="flex flex-col h-full justify-between">
                    <div className="mb-5">
                      <div className={`text-lg md:text-xl font-medium leading-relaxed mb-2 text-gray-900 ${roboto.className}`}
                      >
                        {item.quote}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <Avatar className={`h-10 w-10 ${item.avatarColor} text-white text-base font-bold`}>
                        <AvatarFallback>{item.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className={`font-bold text-base leading-tight flex items-center gap-1 text-gray-900 ${roboto.className}`}>
                          {item.name}
                          <Linkedin className="w-4 h-4 text-[#a974ff] ml-1" />
                        </div>
                        <div className={`text-xs opacity-80 ${montserrat.className}`}>{item.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
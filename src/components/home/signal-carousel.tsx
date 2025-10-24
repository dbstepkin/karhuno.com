"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, DollarSign, EarthIcon, FileSpreadsheet, Globe, Megaphone, FileText, Upload } from "lucide-react";

export default function SignalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const signals = [
    {
      icon: <Globe className="size-6 text-[#0A66C2]" />,
      text: "Company announced expansion to a new market",
      description: "A company entering a new country or region often invests in local vendors, logistics, and marketing. Strong buying intent indicator.",
    },
    {
      icon: <Megaphone className="size-6 text-[#0A66C2]" />,
      text: "Hiring for SDRs or Sales roles",
      description: "Hiring for sales roles (like SDRs, AEs, or BDMs) shows active revenue expansion — a sign they're investing in prospecting tools or enablement tech.",
    },
    {
      icon: <FileText className="size-6 text-[#0A66C2]" />,
      text: "Published a report on AI or sustainability",
      description: "When a company releases research or reports on AI, ESG, or innovation topics, it often marks a shift toward strategic partnerships or digital transformation.",
    },
    {
      icon: <Linkedin className="size-6 text-[#0A66C2]" />,
      text: "A post on a certain topic among your network or outside of it",
      description: "Monitoring specific post topics and engagement trends reveals what problems or priorities your target accounts are discussing right now.",
    },
    {
      icon: <DollarSign className="size-6 text-[#0A66C2]" />,
      text: "A company attracted investment",
      description: "Investment or fundraising news shows fresh capital and new budgets — ideal timing to offer solutions that support their next growth phase.",
    },
    {
      icon: <EarthIcon className="size-6 text-[#0A66C2]" />,
      text: "A company announced the purchase of green credits",
      description: "Buying carbon or green credits indicates ESG compliance efforts — a trigger for partnerships in sustainability, energy, or reporting services.",
    },
    {
      icon: <EarthIcon className="size-6 text-[#0A66C2]" />,
      text: "A company announced plans to open a warehouse",
      description: "Announcing a new warehouse or facility is a strong indicator of operational growth — often followed by hiring, logistics, or tech investments.",
    },
    {
      icon: <Image src="/hiring.svg" alt="hiring" width={52} height={52} />,
      text: "A company is hiring a biochemist",
      description: "Recruiting for niche technical roles (like biochemists, AI engineers, or process experts) often points to R&D activity or new product development.",
    },
  ];

  const repeated = [...signals, ...signals, ...signals];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.08;

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        container.scrollLeft += delta * speed;

        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="py-24 relative before:-z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-200/80 before:via-pink-200/60 before:to-purple-200/80 before:animate-gradient-shift before:opacity-75 overflow-hidden">
      <div className="container mx-auto flex h-full flex-col overflow-hidden">
        {/* Heading */}
        <div className="w-full pt-16 pb-8 px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                Buying signals Karhuno can detect
              </span>
              , before your competitors do
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From hiring spikes to product launches, here are the high-conversion triggers we track to help you reach the right companies at the right time.
            </p>
          </div>
        </div>

        {/* Scrolling container */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8 w-full overflow-x-scroll no-scrollbar transform-gpu p-4"
          >
            {repeated.map((signal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 transform-gpu"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="p-4 bg-[#f5f5ff] rounded-full flex items-center justify-center w-14 h-14">
                      <div className="w-7 h-7 flex items-center justify-center">
                        {signal.icon}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-medium text-gray-700">
                      {signal.text}
                    </p>
                    {signal.description && (
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {signal.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

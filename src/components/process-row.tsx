"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { StepCard } from "./step-card";
import { StepContent } from "./step-content";

interface ProcessRowProps {
  leftText: string;
  rightText: string;
  icon: React.ReactNode;
  accentColor: string;
  rightAccentColor: "blue" | "purple";
  bgGradient: string;
  steps: { text: string }[];
}

export function ProcessRow({
  leftText,
  rightText,
  icon,
  accentColor,
  rightAccentColor,
  bgGradient,
  steps,
}: ProcessRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );

  // Define colors based on the rightAccentColor
  const accentBgColor =
    rightAccentColor === "blue" ? "bg-blue-500" : "bg-purple-500";
  const accentBorderColor =
    rightAccentColor === "blue" ? "border-blue-400" : "border-purple-400";
  const textColor =
    rightAccentColor === "blue" ? "text-blue-100" : "text-purple-100";
  const stepTextColor =
    rightAccentColor === "blue" ? "text-blue-300" : "text-purple-300";

  // Extract accent colors for CSS variables
  const accentStartColor = accentColor.split(" ")[0].replace("from-", "");
  const accentEndColor = accentColor.split(" ")[1].replace("to-", "");

  const handleStepComplete = (index: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = true;
    setCompletedSteps(newCompletedSteps);
  };

  const allStepsCompleted = completedSteps[completedSteps.length - 1];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 items-center"
      style={
        {
          "--accent-start": `var(--${accentStartColor})`,
          "--accent-end": `var(--${accentEndColor})`,
        } as React.CSSProperties
      }
    >
      {/* Left text with large semi-transparent icon */}
      <motion.div
        className="md:col-span-3 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`relative rounded-xl overflow-hidden h-full min-h-[160px] flex items-center`}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`}
          ></div>

          {/* Large semi-transparent icon covering the entire background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {icon}
          </div>

          {/* Text overlay */}
          <div className="relative z-10 p-5">
            <p className={`font-medium text-lg ${textColor}`}>{leftText}</p>
          </div>
        </div>
      </motion.div>

      {/* Flow steps - now just centered text with bottom line */}
      <div className="md:col-span-6 flex justify-evenly flex-col md:flex-row gap-6 min-h-80 md:min-h-4">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            stepNumber={index + 1}
            stepColor={stepTextColor}
            isInView={index === 0 ? isInView : completedSteps[index - 1]}
            onComplete={() => handleStepComplete(index)}
          >
            <StepContent text={step.text} color={rightAccentColor === "blue" ? "#4169e1" : "#d8b4fe"}  num={index === 0 ? 1 : 2} />
          </StepCard>
        ))}
      </div>

      {/* Right text - with accent */}
      <motion.div
        className="md:col-span-3"
        initial={{ opacity: 0 }}
        animate={allStepsCompleted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`bg-slate-800/80 backdrop-blur-sm rounded-xl border my-2 md:my-0 ${accentBorderColor} shadow-lg overflow-hidden`}
          initial={{ y: 20, opacity: 0 }}
          animate={
            allStepsCompleted ? { y: 20, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay:0.35 }}
        >
          <div
            className={`${accentBgColor} px-4 py-2 flex items-center justify-between`}
          >
            <h3 className="font-semibold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Outcome</span>
            </h3>
          </div>

          <div className="p-4">
            <p className="text-slate-200 font-medium">{rightText}</p>
          </div>

          <motion.div
            className="h-1 w-full relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to right, var(--accent-start), var(--accent-end))`,
              originX: 0,
            }}
            initial={{ scaleX: 0 }}
            animate={allStepsCompleted ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}


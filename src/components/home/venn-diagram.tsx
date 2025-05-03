"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VennDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "17.5rem" },
  };

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-8">
      <h2 className="text-3xl md:text-4xl my-12 text-center">
        Designed for SMEs with Global Reach
      </h2>

      <div className="relative h-[500px]">
        {/* B2B Circle */}
        <motion.div
          className="absolute top-[15%] left-[5%] lg:top-0 lg:left-[15%] w-48 h-48 lg:w-72 lg:h-72 rounded-full  bg-gradient-to-bl from-violet-600/60 via-violet-400/60 to-violet-500/60 border border-purple-500 flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-sm lg:text-xl font-bold -translate-x-[150%] -translate-y-[150%] lg:-translate-x-full lg:-translate-y-full">
            B2B
          </span>
        </motion.div>

        {/* Global sales Circle */}
        <motion.div
          className="absolute top-[15%] right-[5%] lg:top-0 lg:right-[20%] w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-gradient-to-bl from-purple-600/60 via-purple-400/60 to-purple-500/60 bg-primary/30 border border-purple-500  flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-sm lg:text-xl font-bold translate-x-3/4 -translate-y-3/4">
            Global
            <br />
            sales
          </span>
        </motion.div>

        {/* Average check Circle */}
        <motion.div
          className="absolute top-[42%] right-[23%] lg:top-40 lg:right-[35%] w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-gradient-to-bl from-blue-600/60 via-blue-400/60 to-blue-500/60 border border-purple-500 flex items-center justify-center text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="text-sm lg:text-xl font-bold translate-y-1/4 lg:translate-y-3/4">
            $2-50K
            <br />
            average deal size
          </span>
        </motion.div>

        {/* Center line and text */}
        <div className="lg:absolute lg:top-[35%] lg:left-[48%] lg:-translate-y-1/2">
          <div className="relative block lg:grid grid-cols-2 gap-x-8 items-center">
            <motion.div
              className="hidden lg:block h-[2px] bg-black origin-left"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.6, delay: 1 }}
            />
            <motion.div
              className="my-0 lg:my-4"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-xl lg:ml-[3.8rem]">
                The segment where we are doing the magic ✨
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

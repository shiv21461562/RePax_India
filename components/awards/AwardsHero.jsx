
"use client";

import { motion } from "framer-motion";

export default function AwardsHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#255B7D] py-32"
    >
      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/5"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-orange-500/10"
      />

      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-orange-400"
        >
          REPAX AWARDS 2026
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-7 font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Celebrating Excellence In

          <span className="mt-1 block text-orange-400">
            Payments & Fintech
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-200"
        >
          Honoring outstanding achievements, innovation and leadership across
          the payments, banking and fintech ecosystem.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
        >
          <button
            className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
          >
            Nominate Now
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}

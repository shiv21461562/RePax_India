"use client";

import { motion } from "framer-motion";

export default function ExhibitionHero() {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative overflow-hidden bg-[#255B7D] py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-[#355F7A] px-5 py-2 text-sm font-semibold text-orange-400"
          >
            RE-PAX INDIA 2026
          </motion.span>

       <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="
    mt-7
    font-serif
    text-3xl
    sm:text-4xl
    md:text-6xl
    font-bold
    leading-[1.08]
    tracking-tight
    text-white
  "
>
  <span className="block">
    Exhibit at RE-PAX India
  </span>

  <span className="mt-1 block text-orange-400">
    Showcase Your Innovations
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-200"
          >
            Connect with India's renewable energy decision-makers, project
            developers, and investors shaping the sustainable future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          ></motion.div>
        </div>
      </motion.section>
    </>
  );
}

"use client";

import { FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative py-14 sm:py-16 md:py-20 bg-white border-t border-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5  mb-5"
          >
         

           <div className="flex items-center justify-center gap-4">
  <span className="h-[2px] w-10 bg-red-500 sm:w-16" />

  <span
    className="
      font-poppins
      text-[11px]
      sm:text-xs
      font-medium
      uppercase
      tracking-[0.15em]
      text-red-500
      text-center
      whitespace-nowrap
    "
  >
    RePax India 2026 •
  </span>

  <span className="h-[2px] w-10 bg-red-500 sm:w-16" />
</div>
          </motion.div>

          {/* Heading */}
        <motion.h2
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="
    font-serif
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    tracking-tight
    text-slate-900
  "
>
  Ready to Join

  <span className="mt-2 block text-[#0B3A63]">
    The Future of Sustainability?
  </span>
</motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-5 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Connect with global leaders, investors, innovators, startups,
            policymakers and sustainability experts at India's premier
            conference and expo.
          </motion.p>

        </div>
      </div>
    </motion.section>
  );
}
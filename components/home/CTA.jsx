"use client";

import { FiArrowRight, FiCalendar, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative py-24 bg-white border-t border-slate-100"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-100 mb-8"
          >
            <FiCalendar size={16} className="text-orange-500" />

            <span className="text-sm font-medium text-slate-700">
              RePax India 2026 • 
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-slate-900"
          >
            Ready to Join
            <span className="block mt-3 text-[#0B3A63]">
              The Future of Sustainability?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed"
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

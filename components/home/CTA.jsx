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
              RePax India 2026 • Limited Seats Available
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
            {[
              { end: 200, label: "Attendees", suffix: "+" },
              { end: 20, label: "Speakers", suffix: "+" },
              { end: 10, label: "Sponsors", suffix: "+" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-6
                  border
                  border-slate-200
                  hover:border-orange-400
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-4xl font-bold text-[#0B3A63]">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.end}
                      duration={2.5}
                      separator=","
                    />
                  )}
                  {item.suffix}
                </h3>

                <div className="w-10 h-1 bg-orange-400 rounded-full mx-auto mt-4 mb-3 group-hover:w-16 transition-all duration-300" />

                <p className="text-slate-600 text-sm uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-14"
          ></motion.div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-slate-200" />
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  "Solar Energy & Manufacturing",
  "Energy Storage & Battery Technologies",
  "EPC & Project Development",
  "Government Policies & Frameworks",
  "Electric Mobility & Transport",
  "Investment, Finance & Growth",
  "Renewable Energy Innovations",
  "Global Industry Networking",
];

export default function EventHighlights() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#05111F] via-[#071B2C] to-[#05111F] py-7">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[130px]" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>

          <span className="text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
            EVENT HIGHLIGHTS
          </span>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            animate={paused ? {} : { x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...highlights, ...highlights].map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onClick={() => setPaused(!paused)}
                className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,.25)]"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-400 to-emerald-400 transition group-hover:scale-125" />

                <span className="font-medium text-gray-200">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
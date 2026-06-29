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
  className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-[#182332] px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:border-[#F59E0B] hover:shadow-[0_0_25px_rgba(16,185,129,.20)]"
>
  {/* Left → Right Background */}
  <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#0D3B52] via-[#156C63] to-[#0F8F6D] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

  {/* Shine Effect */}
  <span className="absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[140%]"></span>

  {/* Dot */}
  <div className="relative z-10 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FFD6A0] transition-all duration-300 group-hover:scale-125"></div>

  {/* Text */}
  <span className="relative z-10 font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
    {item}
  </span>
</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

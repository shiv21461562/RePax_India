
"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  const missionPoints = [
    "Industry Collaboration",
    "Knowledge Sharing",
    "Technology Innovation",
    "Business Networking",
    "Investment Facilitation",
    "Policy Discussions",
    "Leadership Recognition",
    "Sustainable Development",
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            Our Purpose
          </span>

          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Our Vision <span className="text-orange-500">&</span> Mission
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Driving a cleaner future through innovation, collaboration,
            and sustainable growth.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">

          {/* Left Blue Background */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#1f5678] px-7 py-10 text-center text-white md:px-12"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/5" />

            <div className="relative z-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white">
                ◎
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                Our Vision
              </span>

              <h3 className="mx-auto mt-4 max-w-md text-2xl font-bold leading-snug md:text-3xl">
                Building a Sustainable Energy Future
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-blue-100">
                To establish RE-PAX India as a leading platform that brings
                together the renewable energy ecosystem, accelerates
                innovation, encourages collaboration, and contributes to
                India's transition towards a cleaner and more sustainable
                energy future.
              </p>
            </div>
          </motion.div>

          {/* Right White Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-9 text-center shadow-lg md:px-10"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl text-orange-600">
              ✦
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Our Mission
            </span>

            <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
              Connecting People & Opportunities
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Creating meaningful opportunities for collaboration,
              innovation, knowledge sharing, and business growth
              across the renewable energy industry.
            </p>

            {/* Mission Points */}
            <div className="mt-7 grid w-full grid-cols-2 gap-3">
              {missionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-2 py-3 transition-colors hover:bg-orange-50"
                >
                  <span className="text-xs font-bold text-orange-500">
                    ✓
                  </span>

                  <span className="text-xs font-semibold text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

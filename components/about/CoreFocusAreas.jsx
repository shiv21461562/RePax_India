
"use client";

import { motion } from "framer-motion";

export default function CoreFocusAreas() {
  const focusAreas = [
    {
      title: "Solar Manufacturing",
      description:
        "Advancing solar manufacturing capabilities, technologies, and solutions to support clean energy growth.",
    },
    {
      title: "Energy Storage Systems (BESS)",
      description:
        "Exploring battery energy storage technologies that improve energy reliability and grid flexibility.",
    },
    {
      title: "Electric Mobility",
      description:
        "Supporting the development of electric mobility, EV infrastructure, and sustainable transportation.",
    },
    {
      title: "Green Hydrogen",
      description:
        "Promoting green hydrogen technologies and their role in building a cleaner energy ecosystem.",
    },
    {
      title: "Smart Energy Solutions",
      description:
        "Showcasing intelligent energy management, digital technologies, and innovative power solutions.",
    },
    {
      title: "Sustainability & ESG",
      description:
        "Encouraging responsible business practices, environmental sustainability, and ESG initiatives.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1f5678] py-16 md:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
            Industry Segments
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
            Our Core <span className="text-orange-400">Focus Areas</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
            Exploring the key sectors shaping India's renewable energy
            transition and sustainable future.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-400" />
        </motion.div>

        {/* Focus Area Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -7 }}
              className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-white/80 bg-white p-8 shadow-md transition-all duration-300 hover:border-[#F5A000] hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] md:min-h-[290px] md:p-9"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

              {/* Content */}
              <div className="pt-2">
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#1f5678]">
                  {area.title}
                </h3>

                <p className="text-sm leading-8 text-slate-500">
                  {area.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-auto flex items-center justify-between pt-8">
                <div className="h-[3px] w-10 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-20" />

                <span className="text-xs font-semibold tracking-wider text-slate-300 transition-colors duration-300 group-hover:text-orange-500">
                  EXPLORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

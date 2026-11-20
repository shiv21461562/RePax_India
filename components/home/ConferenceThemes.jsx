"use client";

import { motion, useReducedMotion } from "framer-motion";

const themes = [
  {
    title: "Renewable Energy",
    description:
      "Exploring solar, wind, and clean energy innovations for a sustainable future.",
  },
  {
    title: "Circular Economy",
    description:
      "Strategies to reduce waste and maximize resource efficiency across industries.",
  },
  {
    title: "Climate Action",
    description:
      "Global initiatives and policies driving climate resilience and net-zero goals.",
  },
  {
    title: "Energy Storage Systems (BESS)",
    description:
      "Understand the growing role of battery energy storage in grid stability, renewable integration, commercial & industrial applications and utility-scale projects.",
  },
  {
    title: "Green Hydrogen",
    description:
      "Discover opportunities in hydrogen production, storage, infrastructure, industrial applications and India's Green Hydrogen Mission.",
  },
  {
    title: "Electric Mobility",
    description:
      "Learn about EV charging infrastructure, battery technologies, fleet electrification and sustainable transportation solutions.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ConferenceThemes() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-[2px] w-8 bg-red-500 sm:w-16" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-500 sm:text-sm">
              Shaping the Future of Renewable Energy
            </span>
            <span className="h-[2px] w-8 bg-red-500 sm:w-16" />
          </div>

          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            Explore Key Discussion Areas
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
            The conference will focus on the most important topics driving
            India's clean energy transformation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.title}
              variants={item}
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group h-full"
            >
              <div
                className="
                  relative flex h-full min-h-[240px] flex-col items-center justify-center
                  overflow-hidden rounded-2xl border-2 border-transparent bg-[#0B3A63]
                  px-6 py-9 text-center shadow-lg shadow-[#0B3A63]/15
                  transition-all duration-500 ease-out
                  group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-500/20
                  sm:min-h-[260px] sm:px-8 sm:py-10
                "
              >
                {/* Soft glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-400/0 blur-3xl transition-colors duration-500 group-hover:bg-orange-400/25" />

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
                  <h3 className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                    {theme.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200 sm:text-[15px] lg:text-base">
                    {theme.description}
                  </p>

                  <div className="mt-6 h-[2px] w-10 rounded-full bg-orange-400 transition-all duration-500 ease-out group-hover:w-20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
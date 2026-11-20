
"use client";

import { motion } from "framer-motion";

export default function Stakeholders() {
  const stakeholders = [
    "Solar Manufacturers",
    "Battery Manufacturers",
    "Energy Storage Companies",
    "EPC Contractors",
    "Renewable Energy Developers",
    "Independent Power Producers (IPPs)",
    "Government Departments",
    "Public Sector Undertakings (PSUs)",
    "Policymakers & Regulators",
    "Utilities & DISCOMs",
    "Technology Providers",
    "OEMs",
    "Investors & Venture Capital Firms",
    "Banks & Financial Institutions",
    "Consultants",
    "Dealers & Distributors",
    "Installers",
    "Industrial & Commercial Energy Consumers",
    "Startups",
    "Research Institutions",
    "Industry Associations",
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
            Our Community
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Who We Bring{" "}
            <span className="text-orange-500">Together</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Connecting the entire renewable energy value chain through
            meaningful relationships, collaboration, and shared opportunities.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-500" />
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stakeholders.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.07,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className="group relative flex min-h-[112px] items-center overflow-hidden rounded-xl border border-[#2D6A8C] bg-[#1f5678] p-5 shadow-sm transition-all duration-300 hover:border-[#F5A000] hover:shadow-[0_10px_25px_rgba(245,160,0,0.14)]"
            >
              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-[#F5A000] transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#FFD477]" />

                <h3 className="text-sm font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-[#FFD477]">
                  {item}
                </h3>
              </div>

              <span className="absolute bottom-4 right-4 text-xs text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-300">
                →
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-2xl bg-[#1f5678] px-7 py-9 text-center shadow-lg md:px-12 md:py-12"
        >
          {/* Decoration */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[25px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[25px] border-white/5" />

          <div className="relative z-10">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Stronger Together
            </span>

            <h3 className="text-xl font-extrabold leading-snug text-white md:text-3xl">
              One Platform. The Entire{" "}
              <span className="text-orange-400">
                Renewable Energy Ecosystem.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100">
              Bringing manufacturers, developers, investors, policymakers,
              technology providers, and industry professionals together
              to create meaningful connections and accelerate sustainable
              energy growth.
            </p>

            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-orange-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

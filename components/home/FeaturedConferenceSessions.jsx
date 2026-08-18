"use client";

import { motion } from "framer-motion";

const sessions = [
  {
    title: "Renewable Energy Market Outlook 2026",
    description:
      "Explore India's renewable energy growth, investment trends and future opportunities.",
  },
  {
    title: "India's Solar Manufacturing Roadmap",
    description:
      "Advancements in solar cells, modules, inverters and next-gen manufacturing.",
  },
  {
    title: "Battery Energy Storage Systems & Grid Integration",
    description:
      "Battery storage enabling renewable integration and grid stability.",
  },
  {
    title: "Future of Renewable Energy Financing",
    description:
      "Investment strategies and sustainable funding models for renewable projects.",
  },
  {
    title: "Emerging Technologies in Solar & Storage",
    description:
      "AI, automation and digital monitoring transforming renewable energy.",
  },
  {
    title: "Policy & Regulatory Updates",
    description:
      "Government policies, incentives and regulatory developments shaping the industry.",
  },
  {
    title: "Smart Grid & Digital Energy Solutions",
    description:
      "Smart grids, IoT and digital energy management for the future ecosystem.",
  },
  {
    title: "Green Hydrogen Opportunities",
    description:
      "Hydrogen production, storage and India's Green Hydrogen Mission.",
  },
  {
    title: "Industrial Decarbonization Strategies",
    description:
      "How industries can reduce carbon emissions and achieve sustainability goals.",
  },
  {
    title: "Panel Discussion with Industry Leaders",
    description:
      "Insights from CEOs, policymakers and renewable energy experts.",
  },
];

export default function ConferenceSessions() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A63] py-20">
   

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
        <div className="flex items-center justify-center gap-5">
  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

  <span
    className="
      font-poppins
      text-xs
      sm:text-sm
      md:text-base
      font-medium
      uppercase
      tracking-[0.18em]
      text-white
      text-center
      whitespace-nowrap
    "
  >
    Featured Conference Sessions
  </span>

  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
</div>

        <h2
  className="
    mt-5
    font-serif
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    tracking-tight
    text-white
  "
>
  <span className="block">
    Featured Conference
  </span>

  <span className="mt-2 block text-orange-400">
    Sessions
  </span>
</h2>

       
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sessions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group rounded-2xl border border-white/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-orange-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
            >
        

              <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-[#0B3A63]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
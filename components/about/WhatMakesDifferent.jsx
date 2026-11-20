
"use client";

import { motion } from "framer-motion";

export default function WhatMakesDifferent() {
  const features = [
    {
      icon: "🤝",
      title: "Business-Focused Networking",
      description:
        "Connect with industry leaders, decision-makers, buyers, sellers, and potential business partners to create meaningful business opportunities.",
    },
    {
      icon: "🎓",
      title: "Expert-Led Knowledge Sharing",
      description:
        "Gain valuable insights through expert sessions, industry discussions, and knowledge-sharing opportunities.",
    },
    {
      icon: "🏆",
      title: "Industry Recognition",
      description:
        "Celebrate achievements, recognize innovation, and highlight the contributions of renewable energy industry leaders.",
    },
    {
      icon: "⚡",
      title: "Technology Showcase",
      description:
        "Explore innovative products, emerging technologies, and advanced solutions transforming the energy sector.",
    },
    {
      icon: "🌐",
      title: "Strategic Partnerships",
      description:
        "Build valuable connections and collaborations that support long-term business growth and industry development.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
            The RE-PAX Advantage
          </span>

          <p className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What Makes{" "}
            <span className="text-orange-500">RE-PAX</span> Different?
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Meaningful connections, industry insights, innovation, and
            opportunities that drive renewable energy forward.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[#2D6A8C] bg-[#1f5678] p-7 text-white shadow-sm transition-all duration-300 hover:border-[#F5A000] hover:shadow-[0_12px_30px_rgba(245,160,0,0.16)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl transition-all duration-300 group-hover:bg-[#F5A000] group-hover:scale-105">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#FFD477]">
                {feature.title}
              </h3>

              <p className="text-[13px] leading-7 text-blue-100">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-[2px] w-10 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

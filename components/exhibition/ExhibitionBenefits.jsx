
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Handshake,
  Globe,
} from "lucide-react";

export default function ExhibitionBenefits() {
  const stats = [
    ["5000+", "Visitors"],
    ["100+", "Exhibitors"],
    ["2+", "Conference Sessions"],
    ["50+", "Industry Partners"],
  ];

  const benefits = [
    "Showcase Latest Technologies & Innovations",
    "Launch New Products & Services",
    "Generate Qualified Sales Leads",
    "Meet Decision Makers & Procurement Teams",
    "Build Strategic Partnerships",
    "Gain Valuable Market Insights",
  ];

  const benefitIcons = [
    Sparkles,
    Rocket,
    TrendingUp,
    Users,
    Handshake,
    Globe,
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="relative -mt-16 z-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([number, title]) => (
              <div
                key={title}
                className="
                  group relative overflow-hidden rounded-[28px]
                  bg-[#2D6689] p-8 text-center text-white
                  shadow-xl transition-all duration-500
                  hover:-translate-y-3 hover:bg-[#35739B]
                "
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

                <h3 className="text-5xl font-bold text-orange-400">
                  {number}
                </h3>

                <p className="mt-3 text-slate-200">{title}</p>

                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-32" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Exhibit Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2
              className="
                mt-5 font-serif text-2xl sm:text-3xl md:text-4xl
                font-bold leading-tight tracking-tight text-[#001B4D]
              "
            >
              Why Exhibit at{" "}
              <span className="text-orange-500">
                RE-PAX India?
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              The renewable energy sector is growing rapidly. RE-PAX India
              brings together decision-makers actively seeking innovative
              products and solutions, making it the ideal environment to
              generate business opportunities.
            </p>
          </motion.div>

          {/* Benefit Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = benefitIcons[index];

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="
                    group relative cursor-pointer overflow-hidden
                    rounded-3xl border border-slate-200
                    bg-white p-8 shadow-sm
                  "
                >
                  {/* Animated Background */}
                  <div
                    className="
                      absolute inset-0 origin-left scale-x-0
                      bg-[#255B7D] transition-transform
                      duration-500 ease-out group-hover:scale-x-100
                    "
                  />

                  {/* Card Content */}
                  <div className="relative z-10">

                    {/* Icon */}
                    <div
                      className="
                        mb-5 flex h-16 w-16 items-center justify-center
                        rounded-2xl bg-orange-100 transition-all
                        duration-500 group-hover:bg-white/10
                      "
                    >
                      <Icon
                        size={32}
                        className="
                          text-orange-500 transition-all duration-500
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        text-2xl font-semibold text-[#001B4D]
                        transition-all duration-500
                        group-hover:text-white
                      "
                    >
                      {item}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-4 leading-7 text-slate-500
                        transition-all duration-500
                        group-hover:text-slate-200
                      "
                    >
                      Connect with industry leaders, showcase innovative
                      solutions and create valuable business opportunities
                      across the renewable energy ecosystem.
                    </p>

                    {/* Animated Line */}
                    <div
                      className="
                        mt-6 h-1 w-12 rounded-full bg-orange-500
                        transition-all duration-500
                        group-hover:w-24
                      "
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
}

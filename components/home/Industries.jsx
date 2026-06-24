"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Leaf,
  Building2,
  Wheat,
  Car,
  Cpu,
  Hammer,
  Recycle,
} from "lucide-react";

const industries = [
  {
    title: "Renewable Energy",
    description: "Solar, wind, hydro and next-generation clean energy solutions.",
    icon: Leaf,
  },
  {
    title: "Manufacturing",
    description: "Sustainable production and industrial innovation strategies.",
    icon: Factory,
  },
  {
    title: "Smart Cities",
    description: "Technology-driven urban infrastructure and development.",
    icon: Building2,
  },
  {
    title: "Agriculture",
    description: "Climate-smart farming and sustainable food systems.",
    icon: Wheat,
  },
  {
    title: "Mobility & Transport",
    description: "Electric vehicles, green logistics and smart transportation.",
    icon: Car,
  },
  {
    title: "Technology",
    description: "AI, IoT, digital transformation and future technologies.",
    icon: Cpu,
  },
  {
    title: "Construction",
    description: "Green buildings and sustainable infrastructure development.",
    icon: Hammer,
  },
  {
    title: "Waste Management",
    description: "Circular economy and resource recovery innovations.",
    icon: Recycle,
  },
];

export default function Industries() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0B3A63]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63] via-[#114D7E] to-[#0B3A63]" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-orange-300 text-xs font-bold uppercase tracking-widest">
            Industries Covered
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Industries We Bring Together
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-300">
            RePax connects leaders, innovators, startups, investors and
            policymakers from diverse sectors driving sustainability,
            innovation and growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="
                  group
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  hover:border-orange-400
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(255,138,0,0.15)]
                  transition-all
                  duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-5">
                  <Icon
                    size={26}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.title}
                </h3>

                <p className="text-slate-300 leading-7">
                  {industry.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-orange-400 group-hover:w-20 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
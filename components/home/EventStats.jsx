"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 200,
    label: "Delegates",
  },
  {
    number: 20,
    label: "Industry Speakers",
  },
  {
    number: 50,
    label: "Renewable Energy Companies",
  },
  {
    number: 10,
    label: "Conference Sessions",
  },
  {
    number: 15,
    label: "Award Categories",
  },
];

export default function EventStats() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            EVENT AT A GLANCE
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Conference At A Glance
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Experience one of India's leading renewable energy conferences
            bringing together delegates, industry leaders, innovators and
            decision-makers to accelerate India's clean energy transition.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-[#0B3A63]
                to-[#114D7E]
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(11,58,99,0.25)]
                transition-all
                duration-500
              "
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white">
                  <CountUp
                    end={item.number}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>

                <div className="mx-auto mt-4 mb-3 h-1 w-12 rounded-full bg-orange-400 group-hover:w-20 transition-all duration-500" />

                <p className="text-sm font-medium text-slate-200">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 max-w-4xl mx-auto leading-8">
            RE-PAX India brings together manufacturers, EPC companies,
            developers, investors, policymakers, utilities and technology
            providers to create meaningful business opportunities through
            networking, innovation showcases, knowledge sharing and strategic
            collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
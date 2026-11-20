
"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function PreviousWinners() {
  const winners = [
    {
      company: "Leading Fintech Company",
      category: "Best Fintech Innovation",
      year: "2025",
    },
    {
      company: "Digital Payments Leader",
      category: "Digital Payment Excellence",
      year: "2025",
    },
    {
      company: "Banking Transformation Awardee",
      category: "Banking Transformation",
      year: "2025",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden bg-[#255B7D] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Previous{" "}
            <span className="text-orange-400">
              Winners
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            Recognizing organizations that have demonstrated outstanding
            innovation, leadership and excellence in payments, banking and
            fintech.
          </p>
        </div>

        {/* Winner Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group rounded-3xl bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Award Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 transition-all duration-500 group-hover:bg-orange-500">
                <Award
                  size={38}
                  className="text-orange-500 transition-all duration-500 group-hover:text-white"
                />
              </div>

              <div className="text-center">
                <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                  {winner.year} Winner
                </span>

                <h3 className="text-2xl font-bold text-[#001B4D]">
                  {winner.company}
                </h3>

                <p className="mt-4 text-slate-600">
                  {winner.category}
                </p>

                <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

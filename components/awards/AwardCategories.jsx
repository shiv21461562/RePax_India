
"use client";

import { motion } from "framer-motion";

export default function AwardCategories() {
  const categories = [
    "Best Fintech Innovation",
    "Digital Payment Excellence",
    "Emerging Startup Award",
    "Cybersecurity Leadership",
    "Banking Transformation Award",
    "AI Innovation Award",
  ];

  return (
    <section className="relative overflow-hidden bg-[#255B7D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Award{" "}
            <span className="text-orange-400">
              Categories
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            Recognizing innovation, leadership and excellence across the
            payments, fintech and banking ecosystem.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-transparent bg-white p-8 shadow-lg transition-all duration-500 hover:border-orange-500 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-9">

                {/* Top Border Animation */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                {/* Category Title */}
                <h3 className="text-xl font-bold leading-snug text-[#001B4D] transition-colors duration-300 group-hover:text-orange-600 sm:text-2xl">
                  {item}
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Celebrating outstanding achievements and innovation within
                  the financial ecosystem.
                </p>

                {/* Bottom Accent */}
                <div className="mt-8 h-[3px] w-10 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-20" />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

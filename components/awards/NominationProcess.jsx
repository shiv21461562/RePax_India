
"use client";

import { motion } from "framer-motion";

export default function NominationProcess() {
  const steps = [
    {
      step: "01",
      title: "Submit Nomination",
      desc: "Complete the nomination form and provide supporting information.",
    },
    {
      step: "02",
      title: "Initial Screening",
      desc: "Entries are reviewed to ensure eligibility and completeness.",
    },
    {
      step: "03",
      title: "Jury Evaluation",
      desc: "Industry experts evaluate submissions based on defined criteria.",
    },
    {
      step: "04",
      title: "Winner Announcement",
      desc: "Top-performing entries are recognized during the awards ceremony.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#001B4D] sm:text-3xl md:text-4xl">
            Nomination{" "}
            <span className="text-orange-500">
              Process
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            A transparent and structured evaluation process designed to
            recognize the most innovative organizations and leaders in the
            payments and fintech ecosystem.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Number */}
              <div className="mb-6 text-6xl font-extrabold text-orange-100 transition-all group-hover:text-orange-200">
                {item.step}
              </div>

              <h3 className="text-2xl font-bold text-[#001B4D]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

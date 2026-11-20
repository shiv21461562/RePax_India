
"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export default function JuryPanel() {
  const juryMembers = [
    {
      name: "Rahul Sharma",
      role: "CEO",
      company: "Fintech Solutions",
    },
    {
      name: "Neha Verma",
      role: "Managing Director",
      company: "Digital Payments India",
    },
    {
      name: "Amit Kapoor",
      role: "Chief Innovation Officer",
      company: "Future Banking Group",
    },
    {
      name: "Priya Mehta",
      role: "Founder",
      company: "NextGen Fintech",
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
            Distinguished{" "}
            <span className="text-orange-400">
              Jury Panel
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            A panel of respected leaders, innovators and industry veterans
            ensuring a transparent and credible evaluation process.
          </p>
        </div>

        {/* Jury Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {juryMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Profile */}
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-orange-100 transition-all duration-500 group-hover:bg-orange-500">
                <UserRound
                  size={50}
                  className="text-orange-500 transition-all duration-500 group-hover:text-white"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#001B4D]">
                {member.name}
              </h3>

              <p className="mt-2 font-semibold text-orange-500">
                {member.role}
              </p>

              <p className="mt-2 text-slate-500">
                {member.company}
              </p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

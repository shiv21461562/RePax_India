"use client";

import { motion } from "framer-motion";

const agendaItems = [
  {
    time: "09:00 AM",
    title: "Registration & Networking",
    description:
      "Welcome attendees, registration, coffee, and networking session.",
  },
  {
    time: "10:00 AM",
    title: "Opening Keynote",
    description:
      "Industry leaders discuss sustainability and innovation trends.",
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion",
    description:
      "Experts share insights on renewable energy and climate action.",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description:
      "Networking lunch with speakers, partners, and delegates.",
  },
  {
    time: "02:30 PM",
    title: "Innovation Showcase",
    description:
      "Explore groundbreaking products, startups, and technologies.",
  },
  {
    time: "04:00 PM",
    title: "Awards & Closing Ceremony",
    description:
      "Recognition of excellence followed by closing remarks.",
  },
];

export default function Agenda() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            Event Agenda
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Conference Schedule
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600">
            A full day of insightful discussions, networking opportunities,
            innovation showcases and industry-leading sessions.
          </p>
        </motion.div>

        {/* Agenda Cards */}
        <div className="max-w-5xl mx-auto space-y-5">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group bg-white rounded-3xl border border-slate-200 p-6 md:p-7 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                {/* Time */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-[#0B3A63] text-white font-semibold min-w-[120px]">
                    {item.time}
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-12 w-px bg-slate-200" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B3A63] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Number */}
                <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
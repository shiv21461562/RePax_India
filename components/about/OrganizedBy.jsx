
"use client";

import { motion } from "framer-motion";

export default function OrganizedBy() {
  const highlights = [
    {
      title: "Industry Leadership",
      description:
        "Renewable Mirror brings industry knowledge, media expertise, and a strong network of renewable energy professionals to create a meaningful platform for the sector.",
    },
    {
      title: "Our Commitment",
      description:
        "We are committed to supporting India's clean energy transition by encouraging collaboration, promoting innovation, and creating opportunities for sustainable business growth.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1f5678] py-16 md:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full border border-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
            The Organiser
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
            Organized by{" "}
            <span className="text-orange-400">Renewable Mirror</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
            Bringing the renewable energy community together through
            knowledge, networking, innovation, and industry engagement.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-400" />
        </motion.div>

        {/* Organizer Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white bg-white px-8 py-10 text-center shadow-md transition-all duration-300 hover:border-[#F5A000] hover:shadow-[0_15px_35px_rgba(245,160,0,0.18)] md:min-h-[290px] md:px-10"
            >
              {/* Top Golden Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F5A000] transition-all duration-500 group-hover:w-full" />

              {/* Card Content */}
              <div className="flex flex-1 flex-col items-center justify-center">
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  {index === 0 ? "Our Experience" : "Our Promise"}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-[#1f5678] md:text-2xl">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 h-[3px] w-10 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

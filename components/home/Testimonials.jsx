"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Tata Power",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Excellent platform for networking and discovering renewable energy opportunities. The event brought together key stakeholders from across the industry.",
  },
  {
    name: "Priya Mehta",
    company: "Adani Green",
    image: "https://i.pravatar.cc/150?img=32",
    text: "One of the most impactful sustainability events with high-quality speakers, valuable discussions and meaningful partnerships.",
  },
  {
    name: "Amit Verma",
    company: "NTPC",
    image: "https://i.pravatar.cc/150?img=15",
    text: "Great discussions, meaningful connections and industry insights. A must-attend event for professionals in the renewable energy sector.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0B3A63]">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63] via-[#114D7E] to-[#0B3A63]" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-orange-300 text-xs font-bold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            What Industry Leaders Say
          </h2>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            Hear from delegates, sponsors and industry leaders who have
            experienced the impact of RE PAX India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              className="
                group
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[32px]
                p-8
                hover:border-orange-400
                hover:-translate-y-3
                hover:shadow-[0_20px_50px_rgba(255,138,0,0.15)]
                transition-all
                duration-500
              "
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <Quote className="text-white" size={24} />
                </div>
              </div>

              {/* Text */}
              <p className="text-slate-300 leading-8 text-[15px]">
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              

                <div>
                  <h4 className="font-bold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-orange-300">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/5 to-transparent transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Connect with Industry Leaders",
    description:
      "Meet CEOs, founders, project developers, investors, government officials, utilities, EPC contractors, manufacturers and technology providers from across India.",
  },
  {
    title: "Gain Industry Insights",
    description:
      "Learn about the latest developments in renewable energy policies, manufacturing trends, energy storage technologies, financing opportunities, and sustainability initiatives from leading experts.",
  },
  {
    title: "Expand Your Business Network",
    description:
      "Build relationships with potential customers, suppliers, distributors, investors, and strategic partners through dedicated networking sessions.",
  },
  {
    title: "Showcase Innovation",
    description:
      "Present your latest products, services, and technologies to a targeted audience of industry professionals and decision-makers.",
  },
  {
    title: "Discover New Opportunities",
    description:
      "Explore emerging market trends, investment possibilities, and collaborative business opportunities across the renewable energy value chain.",
  },
];

const highlights = [
  "Business Networking",
  "Knowledge Sharing",
  "Innovation Showcase",
  "Leadership Awards",
];

export default function WhyAttend() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-red-500 sm:w-16" />

            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-red-500 sm:text-xs">
              WHY ATTEND RE-PAX INDIA
            </span>

            <span className="h-[2px] w-10 bg-red-500 sm:w-16" />
          </div>

          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            Why Attend{" "}
            <span className="text-[#0B3A63]">
              RE-PAX India?
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            RE-PAX India is more than a conference—it's where the renewable
            energy community comes together to learn, connect, and grow. The
            event is designed to create meaningful business opportunities and
            deliver valuable insights into the future of clean energy.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <div className="group relative flex h-full min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#0B3A63] px-6 py-8 text-center transition-colors duration-300 hover:border-[#E6B94A] sm:px-7">

                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-slate-200 sm:text-sm">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-9 rounded-full bg-orange-400" />

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-3xl bg-[#0B3A63] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-14">

            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-red-400 sm:w-16" />

              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white sm:text-xs">
                Join India's Renewable Energy Community
              </span>

              <span className="h-[2px] w-10 bg-red-400 sm:w-16" />
            </div>

            <h3 className="mt-5 font-serif text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
              Build Connections That Drive the Future
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              Whether you're launching a new technology, expanding your
              business, exploring investment opportunities or staying ahead of
              market trends, RE-PAX India provides the ideal platform to connect
              with industry leaders and accelerate your growth.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="flex min-h-[65px] items-center justify-center rounded-xl border border-white/20 px-4 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-[#E6B94A] hover:text-[#E6B94A]"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-lg bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-600">
                Register Now
              </button>

              <button className="rounded-lg border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#E6B94A] hover:text-[#E6B94A]">
                Become a Sponsor
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

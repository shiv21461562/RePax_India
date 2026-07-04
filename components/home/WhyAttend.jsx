"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Handshake,
  Presentation,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Connect with Industry Leaders",
    description:
      "Meet CEOs, founders, project developers, investors, government officials, utilities, EPC contractors, manufacturers and technology providers from across India.",
  },
  {
    icon: Lightbulb,
    title: "Gain Industry Insights",
    description:
      "Learn about the latest developments in renewable energy policies, manufacturing trends, energy storage technologies, financing opportunities, and sustainability initiatives from leading experts.",
  },
  {
    icon: Handshake,
    title: "Expand Your Business Network",
    description:
      "Build relationships with potential customers, suppliers, distributors, investors, and strategic partners through dedicated networking sessions.",
  },
  {
    icon: Presentation,
    title: "Showcase Innovation",
    description:
      "Present your latest products, services, and technologies to a targeted audience of industry professionals and decision-makers.",
  },
  {
    icon: TrendingUp,
    title: "Discover New Opportunities",
    description:
      "Explore emerging market trends, investment possibilities, and collaborative business opportunities across the renewable energy value chain.",
  },
];

export default function WhyAttend() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#D8CCA3]
            bg-[#A89A6A]/10
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[2px]
            text-[#A67C00]
          "
          >
            WHY ATTEND RE-PAX INDIA
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Why Attend <span className="text-[#0B3A63]">RE-PAX India?</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            RE-PAX India is more than a conference—it's where the renewable
            energy community comes together to learn, connect, and grow. The
            event is designed to create meaningful business opportunities and
            deliver valuable insights into the future of clean energy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#0B3A63]
                hover:shadow-[0_25px_70px_rgba(11,58,99,.25)]
                "
              >
                {/* Left to Right Hover Background - RE PAX India Colors */}
                <div
                  className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-[#0B3A63]
                    via-[#114D7E]
                    to-[#0B3A63]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-x-100
                  "
                />

                {/* Glow Effect */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-br
    from-[#0B3A63]
    to-[#114D7E]
    text-white
    shadow-lg
    transition-all
    duration-500
    group-hover:scale-110
    group-hover:rotate-6
  group-hover:bg-white/10
group-hover:text-white
    group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]
  "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-all duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600 transition-all duration-500 group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0B3A63] via-[#114D7E] to-[#0B3A63] p-10 text-center shadow-[0_30px_80px_rgba(11,58,99,.25)] lg:p-14">
            <span className="inline-flex rounded-full border border-orange-300/40 bg-orange-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-300">
              Join India's Renewable Energy Community
            </span>

            <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              Build Connections That Drive the Future
            </h3>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              Whether you're launching a new technology, expanding your
              business, exploring investment opportunities or staying ahead of
              market trends, RE-PAX India provides the ideal platform to connect
              with industry leaders and accelerate your growth.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">🤝</div>
                <h4 className="mt-3 font-semibold text-white">
                  Business Networking
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">💡</div>
                <h4 className="mt-3 font-semibold text-white">
                  Knowledge Sharing
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">🚀</div>
                <h4 className="mt-3 font-semibold text-white">
                  Innovation Showcase
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl">🏆</div>
                <h4 className="mt-3 font-semibold text-white">
                  Leadership Awards
                </h4>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl">
                Register Now
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                Become a Sponsor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

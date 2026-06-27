"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Users,
  Briefcase,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export default function Page() {
  const benefits = [
    "Investor Access",
    "Pitch Competition",
    "Media Exposure",
    "Mentorship",
    "Networking",
    "Funding Opportunities",
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-38">
        {/* Glow Effects */}

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                STARTUP PAVILION 2026
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#001B4D] md:text-5xl">
                {" "}
                Where Startups Meet{" "}
                <span className="block text-orange-500">
                  {" "}
                  The Future Of Finance{" "}
                </span>{" "}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Showcase your innovation, connect with investors, banks, fintech
                leaders and industry experts at REPAY Startup Pavilion 2026.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[40px] bg-[#255B7D] p-10 text-white shadow-2xl">
                <Rocket size={60} className="text-orange-400" />

                <h3 className="mt-6 text-3xl font-bold">Launch Your Startup</h3>

                <p className="mt-4 text-slate-200">
                  Present your products and ideas to investors, venture funds,
                  banks and strategic partners.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="text-3xl font-bold text-orange-400">100+</h4>
                    <p className="text-sm text-slate-300">Startups</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="text-3xl font-bold text-orange-400">50+</h4>
                    <p className="text-sm text-slate-300">Investors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="bg-[#255B7D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-bold text-white">Startup Ecosystem</h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Connect with investors, mentors and industry leaders to accelerate
              growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["100+", "Startups", ""],
              ["50+", "Investors", ""],
              ["20+", "Mentors", ""],
              ["₹100Cr+", "Funding Access", ""],
            ].map(([number, title, icon], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/10
          p-8
          text-center
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-orange-400/50
          hover:bg-white/15
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
              >
                {/* Glow */}
                <div
                  className="
            absolute
            -right-10
            -top-10
            h-32
            w-32
            rounded-full
            bg-orange-500/10
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-orange-500/20
            "
                />

                <div className="relative z-10">
                  <div className="mb-4 text-4xl">{icon}</div>

                  <h3 className="text-5xl font-bold text-orange-400">
                    {number}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-white">{title}</p>

                  <div
                    className="
              mx-auto
              mt-5
              h-1
              w-12
              rounded-full
              bg-orange-500
              transition-all
              duration-500
              group-hover:w-24
              "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              STARTUP BENEFITS
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#001B4D]">
              Why Join
              <span className="text-orange-500"> Startup Pavilion?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Unlock growth opportunities, connect with investors, gain industry
              exposure and accelerate your startup journey.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Investor Access",
                icon: "💰",
                desc: "Meet venture capital firms, angel investors and funding partners.",
              },
              {
                title: "Pitch Competition",
                icon: "🚀",
                desc: "Showcase your innovation and pitch directly to decision makers.",
              },
              {
                title: "Media Exposure",
                icon: "📢",
                desc: "Gain visibility through media partners and industry coverage.",
              },
              {
                title: "Mentorship",
                icon: "🎯",
                desc: "Learn from experienced founders, leaders and mentors.",
              },
              {
                title: "Networking",
                icon: "🤝",
                desc: "Build strategic partnerships with enterprises and startups.",
              },
              {
                title: "Growth Opportunities",
                icon: "📈",
                desc: "Discover collaborations, customers and market opportunities.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-500
          hover:border-orange-300
          hover:shadow-2xl
          "
              >
                {/* Hover Background */}
                <div
                  className="
            absolute
            inset-0
            bg-[#255B7D]
            translate-y-full
            transition-all
            duration-500
            group-hover:translate-y-0
            "
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-orange-100
              text-4xl
              transition-all
              duration-500
              group-hover:bg-white/10
              "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
              mt-8
              text-2xl
              font-bold
              text-[#001B4D]
              transition-all
              duration-500
              group-hover:text-white
              "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
              mt-4
              leading-7
              text-slate-600
              transition-all
              duration-500
              group-hover:text-slate-200
              "
                  >
                    {item.desc}
                  </p>

                  <div
                    className="
              mt-8
              h-1
              w-12
              rounded-full
              bg-orange-500
              transition-all
              duration-500
              group-hover:w-24
              group-hover:bg-white
              "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Opportunities */}

      <section className="bg-[#255B7D] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              STARTUP PROGRAM
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Startup Opportunities
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Connect with investors, mentors and industry leaders while
              showcasing your startup to the right audience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Pitch Competition",
                icon: "🚀",
                desc: "Present your startup idea before investors, experts and industry leaders.",
              },
              {
                title: "Investor Connect",
                icon: "💰",
                desc: "Schedule meetings with VCs, angel investors and funding partners.",
              },
              {
                title: "Mentors",
                icon: "🎯",
                desc: "Learn directly from successful founders, advisors and startup mentors.",
              },
              {
                title: "Startup Registration",
                icon: "📝",
                desc: "Secure your participation and showcase your innovation at REPAY.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-orange-400/50
            hover:bg-white/15
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/20 text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-orange-400 font-semibold">
                  Learn More →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup CTA */}

      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-[#1F5678] to-[#2E6C93] p-16 text-center shadow-2xl">
            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              JOIN THE STARTUP PAVILION
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Ready To Scale Your Startup?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Connect with investors, mentors, strategic partners and industry
              leaders while showcasing your innovation at REPAY Startup
              Pavilion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

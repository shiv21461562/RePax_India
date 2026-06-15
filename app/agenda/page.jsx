"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

import CountUp from "react-countup";
export default function AgendaPage() {
  const agenda = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome Coffee",
      description:
        "Delegate registration, networking and welcome refreshments.",
    },
    {
      time: "10:00 AM",
      title: "Opening Keynote",
      description:
        "Future of Renewable Energy and India's Clean Energy Vision.",
    },
    {
      time: "11:30 AM",
      title: "Green Hydrogen Session",
      description:
        "Exploring hydrogen infrastructure and future opportunities.",
    },
    {
      time: "01:00 PM",
      title: "Networking Lunch",
      description: "Connect with industry leaders, investors and policymakers.",
    },
    {
      time: "02:30 PM",
      title: "Panel Discussion",
      description:
        "Investment opportunities in solar, wind and storage sectors.",
    },
    {
      time: "04:00 PM",
      title: "Innovation Showcase",
      description: "Latest technologies and breakthrough renewable solutions.",
    },
    {
      time: "05:30 PM",
      title: "Closing Remarks",
      description: "Key takeaways and future roadmap discussion.",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#174d6d] pt-36 pb-38">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow Effects */}
        <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <FadeUp>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-6 py-2 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur-xl">
              EVENT SCHEDULE
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="mt-10 text-5xl font-bold leading-none md:text-7xl">
              <span className="block text-white">Explore The</span>

              <span className="mt-2 block text-orange-400">Summit</span>

              <span className="mt-2 block text-white">Agenda</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              From keynote addresses and policy discussions to networking
              opportunities and innovation showcases, discover everything
              planned for RE PAX India 2026.
            </p>
          </FadeUp>

          {/* Quick Highlights */}

          <FadeUp delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
                ⚡ 15+ Sessions
              </div>

              <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
                🎤 50+ Speakers
              </div>

              <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
                🤝 Networking Events
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      {/* Timeline */}

<section className="relative -mt-16 pb-24 z-20">
  <div className="mx-auto max-w-6xl px-6">

    {/* Timeline Container */}

    <div className="rounded-[40px] bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

      <FadeUp>
        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            EVENT FLOW
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Event Timeline
          </h2>

          <p className="mt-4 text-slate-600">
            A full day packed with insights, networking and innovation.
          </p>

        </div>
      </FadeUp>

      <div className="relative">

        {/* Timeline Line */}

        <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-orange-500 via-orange-300 to-orange-100" />

        {agenda.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="relative mb-8 pl-24"
          >

            {/* Dot */}

            <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-orange-500 bg-white shadow-lg">

              <div className="h-3 w-3 rounded-full bg-orange-500" />

            </div>

            {/* Card */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:border-orange-300
                hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]
              "
            >

              <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                {item.time}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {item.description}
              </p>

            </motion.div>

          </motion.div>
        ))}

      </div>

    </div>

  </div>
</section>

      {/* Stats */}

      <section className="py-24 bg-[#174d6d]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                value: 150,
                label: "Delegates",
              },
              {
                value: 15,
                label: "Industry Speakers",
              },
              {
                value: 20,
                label: "Partner Companies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="
            rounded-3xl
            border
            border-white/10
            bg-white/10
            backdrop-blur-xl
            p-8
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:bg-white/15
            hover:border-orange-400
          "
              >
                <h3 className="text-5xl font-bold text-orange-400">
                  <CountUp
                    end={item.value}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>

                <p className="mt-3 text-slate-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[#174d6d] p-12 text-center text-white shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
            {/* Glow Effects */}

            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[2px] text-white backdrop-blur-xl">
                RE PAX INDIA 2026
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Ready To Experience
                <span className="mt-2 block text-orange-400">RE PAX 2026?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Join industry leaders, investors, policymakers and innovators
                for a transformative renewable energy summit.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all"
                >
                  Contact →
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}

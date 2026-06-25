"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

import { useEffect, useState } from "react";
import { getAgendas } from "../services/AgendaApi";

import Link from "next/link";

import CountUp from "react-countup";
export default function AgendaPage() {
  const [agenda, setAgenda] = useState([]);

  const fetchAgenda = async () => {
    try {
      const response = await getAgendas();

      if (response.success) {
        setAgenda(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // call
  useEffect(() => {
    fetchAgenda();
  }, []);

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
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="
    group
    relative
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-br
    from-[#174d6d]
    via-[#1c5a7d]
    to-[#246b94]
    p-8
    text-white
    shadow-[0_20px_50px_rgba(15,23,42,0.15)]
    transition-all
    duration-500
    hover:shadow-[0_25px_80px_rgba(249,115,22,0.25)]
  "
                  >
                    {/* Shine Effect */}
                    <div
                      className="
      absolute
      inset-0
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      -translate-x-full
      group-hover:translate-x-full
      transition-all
      duration-1000
    "
                    />

                    {/* Top Border */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Time + Type */}
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <span
                          className="
          rounded-full
          bg-orange-500
          px-4
          py-2
          text-sm
          font-bold
          text-white
          shadow-lg
        "
                        >
                          ⏰ {item.time}
                        </span>

                        <span
                          className="
          rounded-full
          bg-white/10
          backdrop-blur-xl
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-white
        "
                        >
                          {item.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-3xl font-bold leading-tight text-white">
                        {item.title}
                      </h3>

                      {/* Speaker */}
                      <div className="mt-6 flex items-center gap-4">
                        <div
                          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-orange-500
          text-lg
          shadow-lg
        "
                        >
                          🎤
                        </div>  

                        <div>
                          <p className="font-semibold text-white">
                            {item.speaker_name}
                          </p>

                          <p className="text-sm text-white/70">
                            Session Speaker
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="mt-4 flex items-center gap-2 text-white/80">
                        <span>📍</span>
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 leading-8 text-white/75">
                        {item.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-xs font-semibold tracking-[3px] text-white/50">
                          RE PAX INDIA 2026
                        </span>

                        <button
                          className="
          rounded-full
          bg-orange-500
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-orange-400
        "
                        >
                          View Session →
                        </button>
                      </div>
                    </div>
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
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-orange-600"
                  >
                    Contact
                  </motion.button>
                </Link>

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

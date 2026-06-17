"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900">
      {/* About Section  */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-[#1f5678] pt-30 pb-24"
      >
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="inline-block">
              <span className="inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-6 py-2 text-sm font-semibold text-orange-300 backdrop-blur-sm">
                ABOUT RE PAX INDIA
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Connecting India's
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Energy Ecosystem
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300/80">
              RE PAX India Summit collaborates with leading media platforms,
              industry publications, and energy communities to drive innovation,
              knowledge sharing, and business growth across the renewable
              sector.
            </p>
          </motion.div>

          {/* Cards Grid - Enhanced with better visuals */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Solar */}
            <motion.a
              href="https://www.renewablemirror.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-orange-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
                  alt="Renewable Mirror"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f5678]/55 via-[#1f5678]/10 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
                    🌿 Renewable Mirror
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300">
                  Renewable Mirror
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Renewable Energy Media Platform
                </p>

                <div className="mt-5">
                  <h4 className="text-4xl font-extrabold text-white">100K+</h4>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Industry Readers
                  </p>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </div>

                {/* Visit Website */}
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Visit Website →
                </div>
              </div>
            </motion.a>

            {/* Card 2 - Wind */}
            <motion.a
              href="https://electricalmirror.net/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-orange-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                  alt="Electrical Mirror"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f5678]/55 via-[#1f5678]/10 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
                    📰 Electrical Mirror
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300">
                  Electrical Mirror
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Electrical Industry Publication
                </p>

                <div className="mt-5">
                  <h4 className="text-4xl font-extrabold text-white">25+</h4>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Years Presence
                  </p>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </div>

                {/* Visit Website */}
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Visit Website →
                </div>
              </div>
            </motion.a>

            {/* Card 3 - Hydro (Center - Premium) */}
            <motion.a
              href="https://www.powerpaxindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 30px 60px -15px rgba(251,146,60,0.4)",
              }}
              className="group relative block overflow-hidden rounded-3xl border-2 border-orange-400/40 bg-gradient-to-br from-orange-400/15 to-white/5 backdrop-blur-xl transition-all duration-500 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              {/* Featured Badge */}
              <div className="absolute -top-1 right-4 z-10">
                <div className="relative">
                  <span className="relative rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-orange-500/40">
                    ⭐ FEATURED
                  </span>

                  <div className="absolute -inset-1 animate-pulse rounded-full bg-orange-400/20 blur-sm"></div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"
                  alt="PowerPax India"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f5678]/55 via-[#1f5678]/10 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-white ">
                    ⚡ PowerPax India
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300">
                  PowerPax India
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Official Event Platform
                </p>

                <div className="mt-5">
                  <h4 className="text-4xl font-extrabold text-white">500+</h4>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Industry Leaders
                  </p>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </div>

                {/* Visit Website */}
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Visit Website →
                </div>
              </div>
            </motion.a>

            {/* Card 4 - Bio */}
            <motion.a
              href="https://constructionmirror.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-orange-400 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
                  alt="Construction Mirror"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f5678]/55 via-[#1f5678]/10 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-orange-400 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
                    🏗 Construction Mirror
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300">
                  Construction Mirror
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Infrastructure & Construction Media
                </p>

                <div className="mt-5">
                  <h4 className="text-4xl font-extrabold text-white">50K+</h4>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Professionals Reached
                  </p>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                </div>

                {/* Visit Website */}
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Visit Website →
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Purpose */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">Our Purpose</h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              RE PAX India creates a collaborative ecosystem where renewable
              energy leaders, innovators, policymakers, and investors work
              together to accelerate India's clean energy transition.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RE PAX INDIA Content */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative">
              <img
                src="https://as1.ftcdn.net/v2/jpg/08/90/38/42/1000_F_890384266_GcuyaHhW69QoFdWEIUlZ5XlOKpxwgD1d.jpg"
                alt="RE PAX Summit"
                className="h-[500px] w-full rounded-[32px] object-cover shadow-2xl"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-5 shadow-xl">
                <h3 className="text-3xl font-bold text-orange-500">500+</h3>
                <p className="text-slate-600">Industry Leaders</p>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-500">
                WHY RE PAX INDIA
              </span>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 leading-tight">
                India's Premier
                <span className="block text-orange-500">
                  Renewable Energy Platform
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Bringing together renewable energy leaders, investors,
                innovators and policymakers to accelerate India's clean energy
                future.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    ⚡
                  </div>
                  <span>Clean Energy Innovation</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🌍
                  </div>
                  <span>Global Industry Leaders</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🤝
                  </div>
                  <span>Strategic Networking</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    📈
                  </div>
                  <span>Investment Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1f5678] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["200+", "Delegates"],
              ["20+", "Speakers"],
              ["10+", "Sponsors"],
              ["50+", "Partners"],
            ].map((item, i) => (
              <div
                key={i}
                className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-10
      text-center
      backdrop-blur-xl
      transition-all
      duration-300
      hover:scale-105
      hover:-translate-y-2
      hover:border-orange-400
      hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)]
    "
              >
                <h3 className="text-5xl font-bold text-orange-400 transition-all duration-300 group-hover:scale-110">
                  {item[0]}
                </h3>

                <p className="mt-3 text-slate-300">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative overflow-hidden py-24 bg-white"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600"
          >
            OUR VISION
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl"
          >
            Shaping The Future Of
            <span className="block text-orange-500">Renewable Energy</span>
          </motion.h2>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600"
          >
            Our vision is to create a collaborative platform that accelerates
            renewable energy adoption, drives innovation, and connects
            policymakers, investors, technology providers, and industry leaders
            to build a cleaner, greener, and more sustainable future for India.
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}

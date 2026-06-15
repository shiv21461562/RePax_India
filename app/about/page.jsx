"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-[#1f5678] pt-36 pb-24"
      >
        {/* Grid Background */}
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

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-2 text-sm font-semibold text-orange-300">
                ABOUT RE PAX INDIA
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
                Accelerating
                <span className="block text-orange-400">Renewable Energy</span>
                Innovation
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                RE PAX India Summit is India's premier renewable energy platform
                bringing together policymakers, investors, industry leaders and
                innovators to shape the future of clean energy.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  ⚡ Clean Energy
                </div>

                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  🌍 Global Leaders
                </div>

                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  🤝 Partnerships
                </div>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Renewable Energy"
                  className="h-[450px] w-full rounded-3xl object-cover"
                />
              </motion.div>
            </motion.div>
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

      {/* About Content */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          {/* Image */}
          <FadeUp>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="h-[500px] rounded-3xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://studio1hub.com/wp-content/uploads/2021/12/floating-devices-mockup-with-responsive-website-design-3d-rendering-1024x576.jpg')",
                }}
              />
            </motion.div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Why RE PAX?</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                RE PAX India Summit serves as a platform where renewable energy
                experts, technology innovators, investors and government leaders
                collaborate to drive meaningful change in the energy ecosystem.
              </p>

              <div className="mt-10 grid gap-5">
                {[
                  "⚡ Clean Energy Innovation",
                  "🌍 Global Industry Leaders",
                  "🤝 Networking Opportunities",
                  "💰 Investment & Partnerships",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1f5678] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["5000+", "Delegates"],
              ["150+", "Speakers"],
              ["80+", "Sponsors"],
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

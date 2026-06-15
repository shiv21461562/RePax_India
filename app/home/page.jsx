"use client";

import {
  CalendarDays,
  MapPin,
  Users,
  Mic,
  Monitor,
  Handshake,
  ArrowRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";

import Link from "next/link";
export default function Hero() {
  const [activeSpeaker, setActiveSpeaker] = useState(2);

  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO, Green Energy Corp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000",
    },
    {
      name: "Michael Anderson",
      role: "Director, Solar Future",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000",
    },
    {
      name: "Priya Sharma",
      role: "Energy Policy Expert",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000",
    },
    {
      name: "David Wilson",
      role: "Managing Partner, Renew VC",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000",
    },
    {
      name: "Emma Clark",
      role: "Climate Investor",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000",
    },
  ];

  return (
    <>
      {/* hero section */}
      <section className="relative min-h-screen overflow-hidden bg-[#1f5678]">
        {/* Background Image with Overlay */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#1f5678] via-[#245d82] to-[#2b6b92]" />

        {/* Big Glow */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-blue-300/10 blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
      linear-gradient(to right, white 1px, transparent 1px),
      linear-gradient(to bottom, white 1px, transparent 1px)
    `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Animated Dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 animate-float-dot"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Animated Blobs */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-400/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-400/10 blur-[140px] animate-pulse delay-700" />

        {/* Light Overlay - Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 pt-36 md:pt-44">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-white">
                  <span></span>
                  <span className="font-semibold">REPAX INDIA 2026</span>
                </div>

                <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
                  Accelerating India's
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Clean Energy
                  </span>
                  Future
                </h1>

                <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300" />

                <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
                  India's premier platform bringing together policymakers,
                  investors, industry leaders and innovators to shape the future
                  of renewable energy and sustainable infrastructure.
                </p>
              </div>

              {/* RIGHT SIDE */}

              <div className="relative hidden lg:block h-[650px]">
                {/* Top Card */}
                <div className="absolute top-0 right-0 w-[380px] rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl">
                  <h4 className="text-sm text-slate-400">RE PAX OVERVIEW</h4>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/5 p-3">
                      <h3 className="text-2xl font-bold text-cyan-400">
                        5000+
                      </h3>
                      <p className="text-xs text-slate-400">Delegates</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                      <h3 className="text-2xl font-bold text-green-400">
                        150+
                      </h3>
                      <p className="text-xs text-slate-400">Speakers</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                      <h3 className="text-2xl font-bold text-orange-400">
                        80+
                      </h3>
                      <p className="text-xs text-slate-400">Sponsors</p>
                    </div>
                  </div>
                </div>

                {/* Middle Card */}
                <div className="absolute left-0 top-52 w-[320px] rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl">
                  <h4 className="font-semibold text-white">Event Highlights</h4>

                  <div className="mt-5 space-y-4">
                    <div className="flex justify-between text-white">
                      <span>Solar Energy</span>
                      <span className="text-green-400">95%</span>
                    </div>

                    <div className="flex justify-between text-white">
                      <span>Green Hydrogen</span>
                      <span className="text-cyan-400">88%</span>
                    </div>

                    <div className="flex justify-between text-white">
                      <span>Wind Energy</span>
                      <span className="text-orange-400">91%</span>
                    </div>
                  </div>
                </div>

                {/* Website Cards */}

                <div className="absolute right-0 top-[470px] flex gap-3">
                  {[
                    {
                      icon: "⚡",
                      title: "PowerPax India",
                      desc: "Explore breakthrough innovations in solar, storage, EV infrastructure and the future of clean energy.",
                      link: "https://www.powerpaxindia.com/",
                    },
                    {
                      icon: "📰",
                      title: "Electrical Mirror",
                      desc: "Industry News & Insights",
                      link: "https://electricalmirror.net/",
                    },
                    {
                      icon: "☀️",
                      title: "REI Expo",
                      desc: "Asia's Clean Energy Expo",
                      link: "https://www.renewableenergyindiaexpo.com/",
                    },
                    {
                      icon: "🤝",
                      title: "Community",
                      desc: "Connect & Network",
                      link: "#",
                    },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
        group
        relative
        w-[135px]
        overflow-visible
        rounded-2xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        p-4
        text-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:bg-white/15
        hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]
      "
                    >
                      {/* Popup */}

                      <div
                        className="
    pointer-events-none
    absolute
    bottom-[115%]
    left-1/2
    z-50
    w-48
    -translate-x-1/2
    rounded-2xl
    border
    border-cyan-500/20
    bg-slate-950/95
    p-3
    opacity-0
    shadow-2xl
    backdrop-blur-xl
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:-translate-y-2
  "
                      >
                        <h5 className="text-sm font-semibold text-cyan-400">
                          {item.title}
                        </h5>

                        <p className="mt-2 text-xs leading-5 text-slate-300">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col items-center text-center gap-2">
                        <div
                          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-white/10
            text-xl
            transition-all
            duration-300
            group-hover:scale-110
          "
                        >
                          {item.icon}
                        </div>

                        <h4 className="text-xs font-medium leading-4">
                          {item.title}
                        </h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

{/* Numbers card */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          <CountUp end={5000} duration={3} />+
        </h3>
        <p className="mt-3 text-gray-600">
          Delegates
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          <CountUp end={150} duration={3} />+
        </h3>
        <p className="mt-3 text-gray-600">
          Speakers
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          <CountUp end={50} duration={3} />+
        </h3>
        <p className="mt-3 text-gray-600">
          Sponsors
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          <CountUp end={30} duration={3} />+
        </h3>
        <p className="mt-3 text-gray-600">
          Countries
        </p>
      </div>

    </div>

  </div>
</section>
    

      {/* why  */}

      <section className="relative overflow-hidden bg-[#1f5678] py-24">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[220px] w-[220px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-300">
              WHY ATTEND
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Why Attend RE PAX India 2026?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Discover breakthrough innovations, connect with industry leaders
              and explore new opportunities driving India's renewable energy
              future.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🤝",
                title: "Networking Opportunities",
                desc: "Meet industry leaders, policymakers, investors and innovators from across the renewable energy sector.",
              },
              {
                icon: "💼",
                title: "Investment Connections",
                desc: "Discover funding opportunities and build partnerships with investors shaping the future of clean energy.",
              },
              {
                icon: "🎤",
                title: "Expert Speakers",
                desc: "Learn from global experts, CEOs, government officials and thought leaders in renewable energy.",
              },
              {
                icon: "⚡",
                title: "Technology Showcase",
                desc: "Explore the latest innovations in solar, wind, storage systems and smart energy technologies.",
              },
              {
                icon: "🌍",
                title: "Global Insights",
                desc: "Gain valuable insights from international case studies, market trends and policy developments.",
              },
              {
                icon: "📈",
                title: "Business Growth",
                desc: "Generate leads, build strategic partnerships and unlock new business opportunities in the energy sector.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border-2
            border-transparent
            bg-white
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-4
            hover:border-orange-400
            hover:shadow-[0_25px_60px_rgba(249,115,22,0.25)]
          "
              >
                {/* Hover Overlay */}
                <div
                  className="
              absolute
              inset-0
              opacity-0
              bg-gradient-to-br
              from-orange-50
              via-transparent
              to-orange-100
              transition-all
              duration-500
              group-hover:opacity-100
            "
                />

                {/* Top Icon Area */}
                <div
                  className="
              flex
              h-36
              items-center
              justify-center
              bg-gradient-to-b
              from-slate-100
              to-slate-50
              transition-all
              duration-500
              group-hover:bg-orange-50
            "
                >
                  <div
                    className="
                text-6xl
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:-translate-y-2
              "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3
                    className="
                text-xl
                font-bold
                text-slate-900
                transition-all
                duration-500
                group-hover:text-orange-500
              "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <button
                      className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-orange-500
                  transition-all
                  duration-300
                  group-hover:gap-3
                "
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}

    
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#102a43] py-24">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              INDUSTRY LEADERS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Our Sponsors & Strategic Partners
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Supported by leading organizations driving innovation,
              sustainability and transformation across the renewable energy
              ecosystem.
            </p>
          </div>

          {/* Partner Slider */}
          <div className="relative mt-16 overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />

            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

            <div className="partner-slider flex w-max gap-6 py-4">
              {[
                "Tata Power",
                "Adani Green",
                "NTPC Green",
                "Siemens Energy",
                "ReNew",
                "Suzlon",
                "Waaree",
                "Jakson Group",

                "Tata Power",
                "Adani Green",
                "NTPC Green",
                "Siemens Energy",
                "ReNew",
                "Suzlon",
                "Waaree",
                "Jakson Group",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              group
              relative
              flex
              h-[90px]
              w-[220px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-orange-400
              hover:shadow-[0_20px_60px_rgba(249,115,22,0.25)]
            "
                >
                  {/* Hover Fill */}
                  <div
                    className="
                absolute
                inset-0
                opacity-0
                bg-gradient-to-r
                from-orange-500/20
                via-amber-500/20
                to-cyan-500/20
                transition-all
                duration-500
                group-hover:opacity-100
              "
                  />

                  {/* Shine */}
                  <div
                    className="
                absolute
                -left-40
                top-0
                h-full
                w-20
                rotate-12
                bg-white/20
                blur-xl
                transition-all
                duration-700
                group-hover:left-[120%]
              "
                  />

                  <span
                    className="
                relative
                z-20
                text-lg
                font-bold
                text-white
                transition-all
                duration-500
                group-hover:scale-105
              "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <div
              className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          text-center
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-orange-400
        "
            >
              <h3 className="text-5xl font-bold text-orange-400">50+</h3>

              <p className="mt-3 text-slate-300">Industry Sponsors</p>
            </div>

            <div
              className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          text-center
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400
        "
            >
              <h3 className="text-5xl font-bold text-cyan-400">25+</h3>

              <p className="mt-3 text-slate-300">Strategic Partners</p>
            </div>

            <div
              className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          text-center
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-orange-400
        "
            >
              <h3 className="text-5xl font-bold text-orange-400">100+</h3>

              <p className="mt-3 text-slate-300">Global Collaborations</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-slate-400">
              Trusted by leading energy companies, technology innovators,
              policymakers, investors and sustainability leaders committed to
              shaping the future of clean energy.
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Industry Leaders */}

      <section className="bg-white py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              FEATURED SPEAKERS
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Meet The Industry Leaders
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Learn from policymakers, investors and innovators driving the
              future of renewable energy.
            </p>
          </div>

          <div className="mt-20 flex items-end justify-center gap-4">
            {speakers.map((speaker, index) => {
              const active = index === activeSpeaker;

              return (
                <div
                  key={index}
                  onClick={() => setActiveSpeaker(index)}
                  className={`
              relative overflow-hidden rounded-[40px]
              cursor-pointer
              transition-all duration-700 ease-in-out
              group
              ${
                active
                  ? "h-[520px] w-[360px]"
                  : index < activeSpeaker
                    ? "h-[280px] w-[140px]"
                    : "h-[320px] w-[160px]"
              }
            `}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`
                h-full w-full object-cover
                transition-all duration-700
                ${active ? "scale-100" : "scale-95 opacity-90"}
                group-hover:scale-110
              `}
                  />

                  {active && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-8 left-8">
                        <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white">
                          Featured Speaker
                        </span>

                        <h3 className="mt-4 text-4xl font-bold text-white">
                          {speaker.name}
                        </h3>

                        <p className="mt-2 text-lg text-white/80">
                          {speaker.role}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready To Join RE PAX India  */}

      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
        relative
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-[#1f5678]
        via-[#2c6488]
        to-[#5d7f92]
        px-8
        py-20
        text-center
        shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        md:px-20
      "
          >
            {/* Background Glow */}
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Ready To Join RE PAX India 2026?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                Be part of India's leading renewable energy summit.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link
                  href="/contact"
                  className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-orange-500
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(249,115,22,0.45)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-orange-600
            "
                >
                  Contact Now
                  <span>→</span>
                </Link>

                <Link
                  href="/agenda"
                  className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border-2
              border-white/70
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-slate-900
            "
                >
                  View Agenda
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

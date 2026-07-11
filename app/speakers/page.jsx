"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSpeakers } from "../services/SpeakerApi";

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    const response = await getSpeakers();

    if (response.success) {
      setSpeakers(response.data);
    }
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden bg-[#174d6d]">
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

        {/* Gradient Glow */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[2px] text-slate-200 backdrop-blur-xl"
              >
                RE-PAX INDIA CONFERENCE
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1] tracking-tight text-white lg:text-5xl"
              >
                Meet the Visionaries
                <span className="block text-orange-400">
                  Shaping the Future
                </span>
                of Renewable Energy
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 0.6 }}
                className="mt-6 h-1 rounded-full bg-orange-500"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-7 max-w-md text-[15px] font-light leading-8 tracking-[0.2px] text-slate-300"
              >
                The RE-PAX India Conference brings together some of the most
                respected voices in the renewable energy industry. Our speakers
                include government officials, policy experts, CEOs, founders,
                technology pioneers, investors, researchers and sustainability
                leaders driving India's clean energy future.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.8,
                    },
                  },
                }}
                className="mt-10 flex flex-wrap gap-4"
              >
                {[
                  "🏛 Government Leaders",
                  "⚡ Industry Experts",
                  "💼 Investors",
                  "🌱 Sustainability Leaders",
                  

                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:pt-24"
            >
              {/* Stats Card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="ml-auto w-full max-w-md rounded-[32px] border border-white/10 bg-[#0d203b]/90 p-8 backdrop-blur-2xl shadow-2xl"
              >
                <h3 className="mb-6 text-xs font-medium uppercase tracking-[3px] text-slate-400">
                  Speaker Overview
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white/5 p-5 text-center">
                    <h4 className="text-3xl font-bold text-cyan-400">20+</h4>
                    <p className="mt-2 text-xs text-slate-400">Speakers</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 text-center">
                    <h4 className="text-3xl font-bold text-green-400">2+</h4>
                    <p className="mt-2 text-xs text-slate-400">Countries</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 text-center">
                    <h4 className="text-3xl font-bold text-orange-400">500+</h4>
                    <p className="mt-2 text-xs text-slate-400">Attendees</p>
                  </div>
                </div>
              </motion.div>

              {/* Expertise */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="rounded-[32px] border border-white/10 bg-[#0d203b]/90 p-8 backdrop-blur-2xl shadow-2xl"
              >
                <h3 className="mb-8 text-xl font-semibold text-white">
                  Speaker Expertise
                </h3>

                <div className="space-y-7">
                  {[
                    {
                      title: "Renewable Energy",
                      width: "95%",
                      color: "bg-cyan-400",
                      percent: "95%",
                    },
                    {
                      title: "Green Hydrogen",
                      width: "88%",
                      color: "bg-green-400",
                      percent: "88%",
                    },
                    {
                      title: "Sustainability",
                      width: "92%",
                      color: "bg-orange-400",
                      percent: "92%",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-slate-300">
                          {item.title}
                        </span>

                        <span className="text-sm font-semibold text-white">
                          {item.percent}
                        </span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: item.width }}
                          transition={{
                            duration: 1.2,
                            delay: 0.5,
                          }}
                          className={`h-2 rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>








      {/* WHY ATTEND SPEAKER SESSIONS */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
        <div className="absolute inset-0 opacity-40">
         
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              WHY ATTEND
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Why Attend Speaker Sessions?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Learn directly from global energy pioneers, investors,
              policymakers and innovators shaping the future of renewable energy
              and sustainability.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎤",
                title: "Industry Leaders",
                text: "Gain insights from CEOs and decision makers driving energy transformation.",
              },
              {
                icon: "🌍",
                title: "Global Perspective",
                text: "Explore emerging trends and opportunities from international markets.",
              },
              {
                icon: "💡",
                title: "Innovation Insights",
                text: "Discover breakthrough technologies and future energy solutions.",
              },
              {
                icon: "🤝",
                title: "Networking Access",
                text: "Connect with investors, policymakers and industry experts.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition-all
            duration-500
            hover:-translate-y-4
            hover:bg-[#0d203b]
            hover:border-orange-500
           
            cursor-pointer
          "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 transition-all duration-500 group-hover:from-orange-500/10 group-hover:to-cyan-500/10" />

                <div className="relative">
                  <div
                    className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                text-3xl
                transition-all
                duration-500
                group-hover:bg-orange-500
                group-hover:scale-110
              "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                transition-colors
                duration-500
                group-hover:text-white
              "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                mt-4
                leading-8
                text-slate-600
                transition-colors
                duration-500
                group-hover:text-slate-300
              "
                  >
                    {item.text}
                  </p>

                  <div
                    className="
                mt-6
                flex
                items-center
                gap-2
                text-orange-500
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:translate-x-2
              "
                  >
                    <span className="text-sm font-semibold">Learn More</span>

                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ===================== LEARN FROM INDUSTRY LEADERS ===================== */}

<section className="relative overflow-hidden bg-gradient-to-br from-[#1b4f6d] via-[#225879] to-[#153f59] py-28">





  {/* ===================== GRID ===================== */}

  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />



  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* ===================== Heading ===================== */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-flex rounded-full bg-orange-100 px-6 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-600 shadow-lg">
        Learn From Industry Leaders
      </span>

      <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">

        Learn from Industry Leaders,

        <span className="mt-2 block bg-gradient-to-r from-[#FFD166] via-white to-[#9BE7FF] bg-clip-text text-transparent">
          Innovators & Policymakers
        </span>

      </h2>

      <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400"></div>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/85 md:text-xl">

        Through keynote addresses, panel discussions, fireside chats and
        technical sessions, RE-PAX India brings together government officials,
        CEOs, investors, technology pioneers and sustainability experts who
        share practical insights, market trends and future-ready strategies
        shaping the renewable energy industry.

      </p>

    </div>

    {/* ===================== Cards ===================== */}

    <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Keynote Addresses",
          desc: "Visionary sessions from industry leaders shaping India's renewable energy future.",
        },
        {
          title: "Panel Discussions",
          desc: "Interactive discussions with policymakers, CEOs and market experts.",
        },
        {
          title: "Fireside Chats",
          desc: "Exclusive conversations sharing real business experiences and innovation stories.",
        },
        {
          title: "Technical Sessions",
          desc: "Deep dives into emerging technologies, engineering solutions and real-world case studies.",
        },
      ].map((item, index) => (
                <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-md
            transition-all
            duration-500
            hover:-translate-y-4
            hover:border-orange-400/60
            hover:bg-white
            hover:shadow-[0_25px_70px_rgba(0,0,0,.30)]
          "
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <div className="relative z-10">

            {/* Orange Accent */}
            <div className="mb-8 h-1.5 w-14 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24" />

            {/* Title */}
            <h3 className="text-3xl font-bold leading-tight text-white transition duration-500 group-hover:text-[#174d6d]">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="mt-6 h-px w-full bg-white/15 transition duration-500 group-hover:bg-slate-300" />

            {/* Description */}
            <p className="mt-6 text-lg leading-9 text-white/75 transition duration-500 group-hover:text-slate-600">
              {item.desc}
            </p>

            {/* Learn More */}
            <div className="mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-orange-500">
              Learn More

              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </div>

          </div>

          {/* Bottom Border Animation */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
        </div>

      ))}

    </div>

  </div>

</section>

   

      {/* SPEAKERS */}

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Global Experts
            </span>

            <h2 className="mt-4 text-5xl font-bold">All Speakers</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      bg-white
      border
      border-slate-200
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-4
      hover:border-orange-400
      hover:shadow-[0_25px_60px_rgba(249,115,22,0.20)]
    "
              >
                {/* Image */}

                <div className="relative h-[430px] overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
                  />

                  {/* Overlay */}

                  <div
                    className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0d203b]
          via-[#0d203b]/40
          to-transparent
          opacity-70
          transition-all
          duration-500
          group-hover:opacity-100
        "
                  />

                  {/* Content */}

                  <div
                    className="
          absolute
          bottom-0
          left-0
          right-0
          p-7
          translate-y-6
          transition-all
          duration-500
          group-hover:translate-y-0
        "
                  >
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300">
                      Featured Speaker
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {speaker.name}
                    </h3>

                    <p className="mt-2 text-orange-300">
                      {speaker.designation}
                    </p>

                    <p className="text-sm text-slate-300 mt-1">
                      {speaker.company}
                    </p>

                    <p
                      className="
            mt-4
            text-sm
            leading-7
            text-slate-300
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
                    >
                      {speaker.bio}
                    </p>

                    {/* Social Icons */}

                    <div
                      className="
            mt-5
            flex
            gap-3
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
                    >
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl hover:bg-orange-500">
                        in
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl hover:bg-orange-500">
                        X
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl hover:bg-orange-500">
                        🌐
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================== CONFERENCE SESSION FORMATS ===================== */}

<section className="relative overflow-hidden bg-gradient-to-br from-[#174d6d] via-[#1e5b7d] to-[#123d58] py-28">

  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* Glow */}
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/20 blur-[140px]" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-xl">
        Conference Session Formats
      </span>

      <h2 className="mt-7 text-4xl font-extrabold text-white md:text-5xl">
        Learn Through Multiple
        <span className="block text-orange-400">
          Interactive Session Formats
        </span>
      </h2>

      <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400" />

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        RE-PAX India features a variety of engaging session formats designed
        to deliver practical knowledge, encourage discussion and showcase
        cutting-edge renewable energy innovations.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          icon: "🎤",
          title: "Keynote Addresses",
          desc: "Visionary presentations from industry leaders discussing renewable energy, policy developments and market opportunities.",
        },
        {
          icon: "👥",
          title: "Panel Discussions",
          desc: "Interactive conversations featuring policymakers, CEOs and experts sharing diverse perspectives.",
        },
        {
          icon: "☕",
          title: "Fireside Chats",
          desc: "Exclusive one-on-one discussions with entrepreneurs, investors and government leaders.",
        },
        {
          icon: "⚙️",
          title: "Technical Sessions",
          desc: "Deep dives into engineering innovations, products, technologies and real project case studies.",
        },
        {
          icon: "🚀",
          title: "Innovation Showcase",
          desc: "Live demonstrations of advanced renewable energy solutions, smart technologies and clean innovations.",
        },
        {
          icon: "🏆",
          title: "Leadership Talks",
          desc: "Success stories and leadership journeys from pioneers transforming India's renewable energy ecosystem.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-4
          hover:bg-white
          hover:border-orange-400
          hover:shadow-[0_25px_70px_rgba(0,0,0,.30)]
        "
        >

          {/* Glow */}

          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <div className="relative z-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg transition duration-500 group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white transition duration-500 group-hover:text-[#174d6d]">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-300 transition duration-500 group-hover:text-slate-600">
              {item.desc}
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100 group-hover:text-orange-500">
              Learn More
              <span>→</span>
            </div>

          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />

        </div>

      ))}

    </div>

  </div>

</section>


{/* ===================== TOPICS OUR SPEAKERS WILL COVER ===================== */}

<section className="relative overflow-hidden bg-white py-28">



  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
        Conference Topics
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Topics Our Speakers
        <span className="block text-[#174d6d]">
          Will Cover
        </span>
      </h2>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500"></div>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Our speakers will address the most important topics shaping the renewable
        energy industry today, helping professionals understand market trends,
        innovations and future opportunities.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Renewable Energy Policy",
          desc: "Government initiatives, incentives, regulations and policy updates driving India's clean energy transition.",
        },
        {
          title: "Solar Manufacturing",
          desc: "Domestic manufacturing, ALMM, DCR, advanced cell technologies and export opportunities.",
        },
        {
          title: "Battery Energy Storage Systems",
          desc: "Grid-scale storage, financing models, commercial applications and future battery technologies.",
        },
        {
          title: "Green Hydrogen",
          desc: "Production technologies, industrial adoption, business opportunities and India's hydrogen roadmap.",
        },
        {
          title: "Electric Mobility",
          desc: "EV charging infrastructure, battery innovation, fleet electrification and sustainable transportation.",
        },
        {
          title: "Smart Energy Technologies",
          desc: "Artificial Intelligence, IoT, smart grids, digital energy management and intelligent monitoring.",
        },
        {
          title: "ESG & Sustainability",
          desc: "Corporate sustainability strategies, carbon reduction and ESG compliance for modern businesses.",
        },
        {
          title: "Investment & Finance",
          desc: "Funding opportunities, renewable energy investments, project financing and market outlook.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="group rounded-[26px] border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-orange-400 hover:bg-[#174d6d]"
        >

          <div className="h-1 w-14 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24"></div>

          <h3 className="mt-7 text-2xl font-bold text-slate-900 transition-all duration-500 group-hover:text-white">
            {item.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-600 transition-all duration-500 group-hover:text-slate-300">
            {item.desc}
          </p>

          <div className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500 transition-all duration-500 group-hover:text-orange-300">
            Explore Topic →
          </div>

        </div>

      ))}

    </div>

  </div>



</section>


{/* ===================== SPEAKER BENEFITS ===================== */}

<section className="relative overflow-hidden bg-[#174d6d] py-28">





  {/* Grid Background */}

  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* Glow */}



  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-xl">
        Speaker Benefits
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Why Speak At
        <span className="block text-orange-400">
          RE-PAX India?
        </span>
      </h2>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400"></div>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
        RE-PAX India offers speakers an opportunity to engage with a highly
        targeted audience of renewable energy professionals, policymakers,
        investors and business leaders while showcasing their expertise.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        "Share your expertise with industry leaders",
        "Position yourself as a thought leader",
        "Connect with potential clients and partners",
        "Showcase your organization's innovations",
        "Gain valuable media exposure",
        "Build long-term business relationships",
        "Inspire future renewable energy professionals",
        "Expand your professional network",
      ].map((item, index) => (

        <div
          key={index}
          className="
          group
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:bg-white
          hover:border-orange-400
          hover:shadow-[0_25px_60px_rgba(0,0,0,.25)]
          "
        >

          <div className="h-1 w-14 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24"></div>

          <h3 className="mt-8 text-2xl font-bold leading-tight text-white transition-all duration-500 group-hover:text-[#174d6d]">
            Benefit {index + 1}
          </h3>

          <p className="mt-5 leading-8 text-slate-300 transition-all duration-500 group-hover:text-slate-600">
            {item}
          </p>

          <div className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100 group-hover:text-orange-500">
            Learn More →
          </div>

        </div>

      ))}

    </div>

  </div>



</section>


{/* ===================== BECOME A SPEAKER ===================== */}

<section className="relative overflow-hidden bg-white py-28">




  <div className="relative mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}

      <div>

        <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
          Become A Speaker
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Share Your Knowledge.
          <span className="block text-[#174d6d]">
            Inspire The Industry.
          </span>
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-orange-500"></div>

        <p className="mt-8 text-lg leading-9 text-slate-600">
          Are you an industry expert, policymaker, entrepreneur, innovator or
          researcher with valuable insights to share?
        </p>

        <p className="mt-5 text-lg leading-9 text-slate-600">
          Join RE-PAX India as a speaker and engage with renewable energy
          professionals, investors, government leaders and decision makers from
          across the industry.
        </p>

    

      </div>

      {/* Right */}

      <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-xl">

        <h3 className="text-2xl font-bold text-slate-900">
          We're Looking For Experts In
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Share your expertise across renewable energy, sustainability,
          technology and innovation.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          {[
            "Solar Energy",
            "Battery Storage",
            "Green Hydrogen",
            "Electric Mobility",
            "Renewable Policy",
            "Smart Grids",
            "Sustainability",
            "ESG",
            "AI in Energy",
            "Clean Technology",
            "Renewable Finance",
            "Climate Innovation",
          ].map((item, index) => (

            <span
              key={index}
              className="
                rounded-full
                border
                border-slate-300
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:bg-[#174d6d]
                hover:border-[#174d6d]
                hover:text-white
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>

  </div>



</section>



{/* ===================== CALL FOR SPEAKER APPLICATIONS ===================== */}

<section className="relative overflow-hidden bg-[#174d6d] py-28">



  {/* Background */}

  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />



  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <span className="inline-flex rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-md">
      Call For Speaker Applications
    </span>

    <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
      Interested In Speaking
      <span className="block text-orange-400">
        At RE-PAX India?
      </span>
    </h2>

    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400"></div>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
      Submit your profile, proposed topic and presentation summary to our
      conference committee. Every application is carefully reviewed to build a
      diverse, inspiring and impactful speaker lineup for RE-PAX India.
    </p>

    {/* Buttons */}

    <div className="mt-14 flex flex-wrap justify-center gap-5">

      <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600">
        Apply To Speak
      </button>

      <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#174d6d]">
        Download Speaker Guidelines
      </button>

     

    </div>

  </div>



</section>

      

      {/* CTA SECTION */}

   {/* ===================== JOIN THE CONVERSATION ===================== */}

<section className="relative overflow-hidden bg-white py-28">




  {/* Background Glow */}

  
  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <span className="inline-flex rounded-full bg-orange-100 px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
      Join The Conversation
    </span>

    <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
      Shape The Future Of
      <span className="block text-[#174d6d]">
        Renewable Energy
      </span>
    </h2>

    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></div>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
      The future of renewable energy will be shaped by collaboration,
      innovation and shared knowledge. Every speaker brings a unique
      perspective that inspires businesses, policymakers and future
      leaders to accelerate the clean energy transition.
    </p>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 font-medium text-slate-700">
      Be part of the conversations that matter.
      <br />
      Share your expertise. Inspire the industry. Shape the future.
    </p>

    {/* Buttons */}

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <button className="rounded-xl bg-[#174d6d] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-500">
        Become A Speaker
      </button>

      <button className="rounded-xl border border-[#174d6d] px-8 py-4 font-semibold text-[#174d6d] transition-all duration-300 hover:bg-[#174d6d] hover:text-white">
        Contact Our Team
      </button>

    </div>

  </div>

</section>
    </main>
  );
}

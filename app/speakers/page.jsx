"use client";
import { motion } from "framer-motion";

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Rajesh Sharma",
      role: "CEO, Green Energy India",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Director, Renewable Future",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    },
    {
      name: "Amit Verma",
      role: "Policy Advisor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
    },
    {
      name: "Priya Kapoor",
      role: "Energy Strategist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=80",
    },
    {
      name: "Michael Brown",
      role: "Investment Partner",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80",
    },
    {
      name: "Ankit Singh",
      role: "Hydrogen Expert",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    },
  ];

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
                RE PAX INDIA SPEAKERS 2026
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1] tracking-tight text-white lg:text-5xl"
              >
                Global Voices
                <span className="block text-orange-400">Driving Renewable</span>
                Energy Innovation
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
                Connect with visionary leaders, policymakers, investors,
                innovators and sustainability experts who are shaping the future
                of renewable energy, green hydrogen and climate-focused
                technologies across India and the world.
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
                  "⚡ Energy Leaders",
                  "🌍 Global Experts",
                  "🤝 Industry Network",
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
                    <h4 className="text-3xl font-bold text-cyan-400">50+</h4>
                    <p className="mt-2 text-xs text-slate-400">Speakers</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 text-center">
                    <h4 className="text-3xl font-bold text-green-400">20+</h4>
                    <p className="mt-2 text-xs text-slate-400">Countries</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-5 text-center">
                    <h4 className="text-3xl font-bold text-orange-400">
                      5000+
                    </h4>
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
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
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
            hover:shadow-[0_20px_60px_rgba(249,115,22,0.25)]
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

      {/* KEYNOTE SPEAKER */}

      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              FEATURED KEYNOTE
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Meet Our Keynote Speaker
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-60" />

            <div className="grid items-center lg:grid-cols-[420px_1fr]">
              {/* Image */}

              <div className="relative p-8">
                <div className="overflow-hidden rounded-[32px]">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1500&q=80"
                    alt=""
                    className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}

              <div className="relative p-10 lg:p-14">
                <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                  KEYNOTE ADDRESS
                </span>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  Dr. Rajesh Sharma
                </h3>

                <p className="mt-2 text-xl text-orange-500">
                  CEO, Green Energy India
                </p>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  A globally recognized renewable energy leader with more than
                  two decades of experience driving solar, wind and hydrogen
                  infrastructure projects across Asia. His insights continue to
                  influence the future of sustainable energy development.
                </p>

                {/* Stats */}

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <h4 className="text-3xl font-bold text-orange-500">20+</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Years Experience
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-6">
                    <h4 className="text-3xl font-bold text-cyan-500">50+</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Energy Projects
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-6">
                    <h4 className="text-3xl font-bold text-green-500">15+</h4>
                    <p className="mt-2 text-sm text-slate-500">
                      Countries Impacted
                    </p>
                  </div>
                </div>

                {/* Expertise */}

                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    Renewable Energy
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    Green Hydrogen
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    Sustainability
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    Energy Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Global Experts
            </span>

            <h2 className="mt-4 text-5xl font-bold">All Speakers</h2>
          </div>

         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {speakers.map((speaker, index) => (
    <div
      key={index}
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
            {speaker.role}
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
            Renewable energy expert sharing insights on
            sustainability, innovation and future energy
            transformation.
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

      {/* CTA */}

    {/* CTA SECTION */}

<section className="py-20 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6">

    <div className="relative overflow-hidden rounded-[40px] bg-[#174d6d] px-8 py-14 text-center text-white shadow-[0_25px_60px_rgba(15,23,42,0.12)]">

      {/* Subtle Glow */}
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative">

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] backdrop-blur-xl">
          RE PAX INDIA 2026
        </span>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          Ready To Join
          <span className="block text-orange-400">
            RE PAX India 2026?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Be part of India's leading renewable energy summit and
          connect with global industry leaders, innovators and
          decision makers.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]">
            Contact Now →
          </button>

          <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
            View Agenda →
          </button>

        </div>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}

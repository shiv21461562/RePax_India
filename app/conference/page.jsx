"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Mic, Building2, Globe } from "lucide-react";

const topics = [
  "Digital Payments",
  "AI in Financial Services",
  "Cybersecurity",
  "Banking Transformation",
  "UPI & Mobile Payments",
  "Cross Border Payments",
];

const stats = [
  { number: "20+", title: "Industry Speakers" },
  { number: "5000+", title: "Delegates" },
  { number: "30+", title: "Countries" },
  { number: "50+", title: "Partners" },
];

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#001B4D] via-[#0B3B6E] to-[#1D5A7A] text-white">
      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden bg-[#0B1F2E]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/con.avif')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#081824]/60" />

        {/* Gradient Overlay */}

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-300 backdrop-blur-md">
                REPAY SUMMIT 2026
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-5xl">
                India's Premier
                <span className="block text-orange-400">
                  Payments & Fintech
                </span>
                Conference
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Join fintech leaders, banking innovators, regulators and
                investors shaping the future of digital payments and financial
                technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  Coming Soon
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  New Delhi, India
                </div>
              </div>

              {/* <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
                  Register Interest
                </button>

                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white hover:text-[#255B7D]">
                  Download Brochure
                </button>
              </div> */}
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex justify-center">
              <div className="absolute h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                Event Overview
              </span>

              <h2 className="mt-6 text-5xl font-bold text-[#0B4D7A]">
                Shaping The Future Of Payments & Fintech
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                REPAY Summit brings together fintech innovators, banking
                leaders, regulators, investors and technology providers to
                explore the future of digital payments, financial inclusion and
                emerging technologies.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Gain insights from industry experts, participate in workshops
                and connect with decision-makers driving financial innovation.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0B4D7A] p-10 text-white">
              <h3 className="text-3xl font-bold">Why Attend?</h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Industry Insights</li>
                <li>✓ Networking Opportunities</li>
                <li>✓ Investor Connect</li>
                <li>✓ B2B Meetings</li>
                <li>✓ Workshops & Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Statistics   Number */}
      <section className="bg-[#0A3F63] py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Event Statistics
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Event By The Numbers
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Bringing together the brightest minds in fintech, payments and
              innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          p-10
          text-center
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-orange-400/50
          hover:bg-white/10
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
              >
                <div className="absolute left-0 top-0 h-1 w-16 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                <h3 className="text-6xl font-bold text-orange-400">
                  {item.number}
                </h3>

                <p className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </p>

                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Themes */}

      <section className="relative overflow-hidden bg-white py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Conference Themes
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#0A3F63] md:text-6xl">
              Explore The Future Of Fintech
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Discover transformative technologies, innovative business models
              and emerging trends redefining payments, banking and financial
              services.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💳",
                title: "Digital Payments",
                desc: "Real-time payment infrastructure, UPI innovation and next-generation payment ecosystems.",
              },
              {
                icon: "🏦",
                title: "Open Banking",
                desc: "Secure APIs, data sharing and connected financial ecosystems driving innovation.",
              },

              {
                icon: "🌍",
                title: "Financial Inclusion",
                desc: "Driving access to financial services through technology and innovation.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
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
      bg-[#0A3F63]
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
      "
              >
                <div className="absolute left-0 top-0 h-1 w-16 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                <div className="mb-6 text-5xl">{item.icon}</div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-300">{item.desc}</p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-orange-400">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Tracks */}

      <section className="bg-[#0A3F63] py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Conference Tracks
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Industry-Focused Tracks
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              Explore specialized tracks covering innovation, security, AI,
              fintech growth and regulatory frameworks.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏦",
                title: "Banking Innovation",
              },
              {
                icon: "💳",
                title: "Payments Technology",
              },
              {
                icon: "🚀",
                title: "Fintech Startups",
              },
              {
                icon: "🔒",
                title: "Cybersecurity",
              },
              {
                icon: "🤖",
                title: "AI & Data",
              },
              {
                icon: "⚖️",
                title: "Policy & Regulation",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-md
          cursor-pointer
          "
              >
                {/* Hover Gradient */}
                <div
                  className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            transition-all
            duration-500
            group-hover:translate-x-0
            "
                />

                <div className="relative z-10">
                  <div className="mb-5 text-5xl">{item.icon}</div>

                  <h3
                    className="
              text-2xl
              font-bold
              text-white
              transition-colors
              duration-500
              "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-orange-400
              font-semibold
              transition-all
              duration-500
              group-hover:text-white
              "
                  >
                    Explore Track →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
Agenda Timeline */}

      <section className="bg-white py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          ```
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Conference Agenda
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#0A3F63]">
              Event Schedule
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              A full day of insightful sessions, networking opportunities,
              expert discussions and business meetings.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[32px] top-0 h-full w-[3px] bg-orange-200 hidden md:block" />

            {[
              {
                time: "09:00 AM",
                title: "Registration & Networking",
                icon: "📝",
                desc: "Kickstart the day with registration and networking.",
              },
              {
                time: "10:00 AM",
                title: "Opening Keynote",
                icon: "🎤",
                desc: "Industry leaders share insights on fintech innovation.",
              },
              {
                time: "11:00 AM",
                title: "Panel Discussion",
                icon: "👥",
                desc: "Experts discuss future trends and opportunities.",
              },
              {
                time: "01:00 PM",
                title: "Lunch Break",
                icon: "🍽️",
                desc: "Lunch and networking with attendees.",
              },
              {
                time: "02:00 PM",
                title: "Workshops",
                icon: "💡",
                desc: "Hands-on learning sessions and interactive workshops.",
              },
              {
                time: "04:00 PM",
                title: "B2B Meetings",
                icon: "🤝",
                desc: "Pre-scheduled meetings with industry leaders.",
              },
              {
                time: "06:00 PM",
                title: "Closing Remarks",
                icon: "🏆",
                desc: "Summarizing key takeaways and conference wrap-up.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative mb-8 flex gap-6"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10 h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className="
        group
        flex-1
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-orange-300
        hover:shadow-2xl
        "
                >
                  <div className="mb-3 text-orange-500 font-bold">
                    {item.time}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A3F63]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          ```
        </div>
      </section>

      {/* Workshops Section */}
      <section className="relative overflow-hidden bg-[#0A3F63] py-28">
        {/* Background Effects */}

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          ```
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-300">
              Interactive Workshops
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
              Hands-On Learning Sessions
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Gain practical knowledge, explore real-world use cases and learn
              from industry experts through immersive workshop sessions.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: "🤖",
                title: "AI In Banking",
                desc: "Explore AI and machine learning transforming banking operations.",
              },
              {
                icon: "💳",
                title: "UPI Innovation",
                desc: "Dive into next-generation payment ecosystems and UPI trends.",
              },
              {
                icon: "🔒",
                title: "Fraud Detection",
                desc: "Learn advanced fraud prevention and security frameworks.",
              },
              {
                icon: "📈",
                title: "Digital Lending",
                desc: "Understand lending models, credit systems and fintech growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/15
      bg-white/5
      p-8
      backdrop-blur-md
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-orange-400
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
      "
              >
                {/* Orange Top Line */}
                <div className="absolute left-0 top-0 h-1 w-16 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                {/* Icon Circle */}
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-white/5 text-4xl transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-white">{item.title}</h3>

                <div className="mt-4 h-1 w-12 rounded-full bg-orange-500" />

                <p className="mt-6 leading-8 text-slate-300">{item.desc}</p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-orange-400">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          ```
        </div>
      </section>

      {/* B2B Meetings */}

      <section className="bg-white py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              B2B Meetings
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#0A3F63]">
              Business Matchmaking Platform
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Connect with investors, fintech leaders, solution providers and
              decision-makers through curated one-on-one meetings.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                icon: "",
                title: "Investor Connect",
              },
              {
                icon: "",
                title: "Startup Showcase",
              },
              {
                icon: "",
                title: "Partnership Meetings",
              },
              {
                icon: "",
                title: "CXO Networking",
              },
              {
                icon: "",
                title: "Business Matchmaking",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-slate-200
      bg-white
      p-8
      text-center
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-orange-400
      hover:shadow-2xl
      "
              >
                {/* Hover Fill */}
                <div
                  className="
        absolute
        inset-0
        origin-left
        scale-x-0
        bg-gradient-to-r
        from-[#0A3F63]
        to-[#0B4D7A]
        transition-transform
        duration-500
        group-hover:scale-x-100
        "
                />

                <div className="relative z-10">
                  <div className="mb-5 text-5xl transition-all duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3
                    className="
          text-xl
          font-bold
          text-[#0A3F63]
          transition-colors
          duration-500
          group-hover:text-white
          "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
          mx-auto
          mt-5
          h-1
          w-12
          rounded-full
          bg-orange-500
          "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

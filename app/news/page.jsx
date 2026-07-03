"use client";

import { motion } from "framer-motion";
import { Newspaper, ArrowRight, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/news1.png')",
          }}
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-[#0B1F2E]/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2E]/80 via-[#0B1F2E]/45 to-[#0B1F2E]/30" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span
              className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/20
        bg-white/10
        px-6
        py-3
        text-sm
        font-medium
        tracking-wider
        text-orange-400
        backdrop-blur-md
        "
            >
              <Newspaper size={16} />
              RE-PAX INDIA NEWSROOM
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
      mt-8
      text-5xl
      font-extrabold
      leading-tight
      text-white
      md:text-7xl
      lg:text-6xl
      "
          >
            Latest News &
            <span className="block text-orange-400">Industry Updates</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="
      mx-auto
      mt-8
      max-w-3xl
      text-lg
      leading-8
      text-slate-200
      md:text-xl
      "
          >
            Stay updated with the latest announcements, speaker reveals, award
            nominations, sponsorship opportunities, conference updates, and
            renewable energy industry news from RE-PAX India 2026.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <button
              className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-orange-500
        px-10
        py-5
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-600
        hover:shadow-[0_15px_50px_rgba(249,115,22,0.35)]
        "
            >
              Explore News
            </button>

            <button
              className="
        rounded-full
        border
        border-white/20
        bg-white/10
        px-10
        py-5
        font-semibold
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white
        hover:text-[#255B7D]
        "
            >
              Subscribe Updates
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              {
                number: "150+",
                label: "Articles",
              },
              {
                number: "50+",
                label: "Press Releases",
              },
              {
                number: "100K+",
                label: "Readers",
              },
              {
                number: "25+",
                label: "Media Partners",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
          rounded-2xl
          border
          border-white/10
          bg-white/10
          p-6
          backdrop-blur-md
          "
              >
                <h3 className="text-3xl font-bold text-orange-400">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured News Categories */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Featured
              <span className="text-orange-500"> News Categories</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Explore the latest stories, insights and updates shaping the
              future of payments, fintech and digital innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fintech News",
                desc: "Latest updates from digital payments, fintech startups and banking innovations.",
                stat: "120+ Articles",
              },
              {
                title: "Industry Insights",
                desc: "Expert opinions, market intelligence and emerging technology trends.",
                stat: "50+ Reports",
              },
              {
                title: "Event Announcements",
                desc: "Summit updates, keynote speakers and important event highlights.",
                stat: "25+ Updates",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
          group
          relative
          flex
          min-h-[380px]
          flex-col
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-10
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-3
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

                <div className="relative z-10 flex h-full flex-col">
                  {/* Title */}
                  <h3
                    className="
              mt-8
              text-3xl
              font-bold
              text-[#001B4D]
              transition-all
              duration-500
              group-hover:text-white
              "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
              mt-5
              leading-8
              text-slate-600
              transition-all
              duration-500
              group-hover:text-slate-200
              "
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Area */}
                  <div className="mt-auto">
                    <div
                      className="
                mt-8
                inline-flex
                rounded-full
                bg-orange-100
                px-5
                py-3
                text-sm
                font-semibold
                text-orange-600
                transition-all
                duration-500
                group-hover:bg-white/10
                group-hover:text-orange-300
                "
                    >
                      {item.stat}
                    </div>

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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Featured
              <span className="text-orange-500"> Stories</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                image: "/images/news.png",
                title: "Digital Payments Growth in India",
                category: "Fintech",
              },
              {
                image: "/images/news1.png",
                title: "Future of Banking Technology",
                category: "Banking",
              },
              {
                image: "/images/news3.jpg",
                title: "AI Transforming Financial Services",
                category: "Innovation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="
          group
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          "
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              h-64
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
              "
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                    {item.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#001B4D]">
                    {item.title}
                  </h3>

                  <button className="mt-6 font-semibold text-orange-500">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}

      <section className="bg-[#255B7D] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-400">
              NEWS & INSIGHTS
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Industry
              <span className="text-orange-400"> Insights</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Explore expert opinions, exclusive interviews, industry trends and
              Renewable Observer's latest coverage from across the renewable
              energy ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📈",
                title: "Industry News",
                desc: "Latest updates, market trends and key developments shaping the renewable energy sector.",
              },
              {
                icon: "📄",
                title: "Articles",
                desc: "Expert-written articles covering innovation, policy changes and business opportunities.",
              },
              {
                icon: "🎙️",
                title: "Interviews",
                desc: "Exclusive conversations with industry leaders, policymakers and technology pioneers.",
              },
              {
                icon: "📰",
                title: "Renewable Observer Coverage",
                desc: "Featured event coverage, reports and insights published by Renewable Observer.",
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
                whileHover={{
                  y: -10,
                }}
                className="
            group
            rounded-[32px]
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
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/20 text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>

                <div className="mt-8 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-[#255B7D] p-16 text-center text-white">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-orange-400">
              NEWS COMING SOON
            </span>

            <h2 className="mt-8 text-5xl font-bold">Stay Tuned For Updates</h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Our newsroom will soon feature breaking industry news, expert
              insights and exclusive event coverage.
            </p>

            <button className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Get Notified
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

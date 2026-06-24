"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSponsors } from "../services/SponsorApi";

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    const response = await getSponsors();

    if (response.success) {
      setSponsors(response.data);
    }
  };

  const benefits = [
    {
      icon: "🌍",
      title: "Brand Visibility",
      desc: "Showcase your brand to industry leaders and decision makers.",
    },
    {
      icon: "🤝",
      title: "Industry Networking",
      desc: "Connect with investors, policymakers and energy experts.",
    },
    {
      icon: "📈",
      title: "Business Growth",
      desc: "Unlock partnerships and future business opportunities.",
    },
    {
      icon: "🚀",
      title: "Market Exposure",
      desc: "Position your company at the forefront of innovation.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#174d6d] pt-36 pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/10
        px-6
        py-2
        text-xs
        font-semibold
        tracking-[0.2em]
        text-white
        backdrop-blur-xl
      "
          >
            OUR PARTNERS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-8 text-5xl font-bold tracking-tight md:text-7xl"
          >
            <span className="text-white">Event </span>

            <span className="text-orange-400">Sponsors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
        mx-auto
        mt-8
        max-w-2xl
        text-lg
        leading-8
        text-slate-300
      "
          >
            Partnering with industry pioneers, innovators and renewable energy
            leaders driving sustainable transformation across India.
          </motion.p>

          {/* Highlights */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              🤝 Strategic Partners
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              ⚡ Renewable Energy Leaders
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              🌍 Industry Innovators
            </div>
          </motion.div>

          {/* Sponsor Stats */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-28 grid gap-5 md:grid-cols-4"
          >
            <div className="rounded-[24px] border border-white/10 bg-[#0d203b]/60 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-orange-400">80+</h3>
              <p className="mt-2 text-sm text-slate-300">Sponsors</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0d203b]/60 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-400">200+</h3>
              <p className="mt-2 text-sm text-slate-300">Delegates</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0d203b]/60 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-green-400">20+</h3>
              <p className="mt-2 text-sm text-slate-300">Countries</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0d203b]/60 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-orange-400">150+</h3>
              <p className="mt-2 text-sm text-slate-300">Partner Brands</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Card Section */}

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-[#174d6d]">
              OUR PARTNERS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Trusted By Industry Leaders
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Partnering with leading organizations accelerating innovation,
              sustainability and growth across the renewable energy ecosystem.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#174d6d]" />
          </motion.div>

          {/* Sponsors Grid */}

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {sponsors.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-white
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#174d6d]/20
            hover:bg-[#174d6d]
            hover:shadow-[0_25px_60px_rgba(23,77,109,0.18)]
          "
              >
                {/* Top Border */}

                <span
                  className="
              absolute
              left-0
              top-0
              h-[2px]
              w-0
              bg-gradient-to-r
              from-[#174d6d]
              via-cyan-500
              to-[#174d6d]
              transition-all
              duration-700
              group-hover:w-full
            "
                />

                {/* Bottom Border */}

                <span
                  className="
              absolute
              bottom-0
              right-0
              h-[2px]
              w-0
              bg-gradient-to-r
              from-[#174d6d]
              via-cyan-500
              to-[#174d6d]
              transition-all
              duration-700
              group-hover:w-full
            "
                />

                {/* Glow */}

                <div
                  className="
              absolute
              inset-0
              opacity-0
              transition-all
              duration-500
              bg-gradient-to-br
              from-cyan-50/50
              via-transparent
              to-transparent
              group-hover:opacity-100
            "
                />

                {/* Shine Effect */}

                <div
                  className="
              absolute
              -left-20
              top-0
              h-full
              w-10
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              opacity-0
              transition-all
              duration-700
              group-hover:left-[120%]
              group-hover:opacity-100
            "
                />

                {/* Content */}

                <div className="relative z-10 flex h-36 items-center justify-center px-4">
                  <span
                    className="
                text-center
                text-lg
                font-bold
                text-slate-700
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:text-white
              "
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-16 w-full object-contain"
                    />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-14 text-center"
          >
            <p className="mx-auto max-w-3xl text-slate-500">
              Supported by industry pioneers, technology innovators and
              sustainability leaders driving the future of renewable energy,
              green hydrogen and clean technology solutions.
            </p>
          </motion.div>
        </div>
      </section>


      {/* SPONSORS GRID */}
<section className="py-24 bg-[#174d6d]">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
        FEATURED PARTNERS
      </span>

      <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
        Featured Sponsors
      </h2>

      <p className="mt-4 text-slate-300">
        Supporting innovation, sustainability and energy transformation.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
     {sponsors.map((sponsor) => (
  <motion.div
    key={sponsor.id}
    onClick={() =>
      sponsor.website &&
      window.open(sponsor.website, "_blank")
    }
    whileHover={{ y: -8 }}
    className="
      group
      relative
      cursor-pointer
      overflow-hidden
      rounded-[30px]
      border
      border-slate-200
      bg-white
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-orange-300
      hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
    "
  >
    {/* Top Border */}
    <div className="absolute left-0 top-0 h-[3px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

    {/* Logo */}
    <div
      className="
        mb-6
        flex
        h-24
        w-full
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-100
        bg-slate-50
        p-4
      "
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="max-h-16 w-auto object-contain"
      />
    </div>

    {/* Sponsor Name */}
    <h3 className="text-xl font-bold text-slate-900">
      {sponsor.name}
    </h3>

    {/* Category */}
    <div className="mt-3">
      <span
        className="
          inline-flex
          rounded-full
          bg-orange-100
          px-3
          py-1
          text-xs
          font-semibold
          text-orange-600
        "
      >
        {sponsor.category_name || "Sponsor"}
      </span>
    </div>

    {/* Website */}
    <p className="mt-4 text-sm text-slate-500">
      Visit Website →
    </p>
  </motion.div>
))}
    </div>
  </div>
</section>
      

      {/* BENEFITS */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-10 md:p-16 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            {/* Background Blur */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />

            {/* Heading */}
            <div className="relative text-center">
              <span className="inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-[#174d6d]">
                SPONSORSHIP BENEFITS
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                Why Sponsor RE PAX?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Gain unmatched brand visibility, connect with decision makers,
                investors and policymakers, and position your organization at
                the forefront of India's renewable energy transformation.
              </p>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#174d6d]" />
            </div>

            {/* Cards */}
            <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-[#174d6d]/20
              hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
            "
                >
                  {/* Dark Hover Layer */}
                  <div
                    className="
                absolute
                inset-0
                scale-x-0
                origin-left
                bg-[#174d6d]
                transition-transform
                duration-500
                group-hover:scale-x-100
              "
                  />

                  {/* Top Line */}
                  <div
                    className="
                absolute
                left-0
                top-0
                h-1
                w-0
                bg-orange-500
                transition-all
                duration-500
                group-hover:w-full
              "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-100
                  text-3xl
                  transition-all
                  duration-500
                  group-hover:bg-white/10
                  group-hover:scale-110
                "
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="
                  mt-6
                  text-xl
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
                  text-sm
                  leading-7
                  text-slate-600
                  transition-colors
                  duration-500
                  group-hover:text-slate-300
                "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[#174d6d] px-8 py-16 text-center text-white shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
            {/* Grid Background */}
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

            {/* Glow Effects */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
                RE PAX INDIA 2026
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Become A Sponsor
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Join RE PAX India Summit and connect with investors,
                policymakers, innovators and renewable energy leaders.
              </p>

              <button
                className="
            mt-10
            rounded-xl
            bg-orange-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(249,115,22,0.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
              >
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import CountUp from "react-countup";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900">
      {/* ================= ABOUT HERO ================= */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#1f5678] pt-40 pb-20 lg:pt-30"
      >
   

 

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Badge */}

          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-6 py-2 text-sm font-semibold tracking-widest text-orange-300 uppercase">
              About RE-PAX India
            </span>

            {/* Heading */}

            <h1 className="mx-auto mt-8 max-w-6xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-6xl">
              Empowering India's
              <span className="block">
                Renewable Energy
                <span className="text-orange-400"> Ecosystem</span>
              </span>
              <span className="mt-3 block text-3xl font-bold text-orange-300 md:text-4xl">
                Through Collaboration, Innovation & Leadership
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">
              India's renewable energy sector is undergoing a remarkable
              transformation. As the nation accelerates toward ambitious clean
              energy targets, RE-PAX India brings together manufacturers, EPC
              companies, policymakers, investors, technology providers,
              developers and sustainability leaders to drive innovation,
              collaboration and business growth.
            </p>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                number: "200+",
                label: "Delegates",
              },
              {
                number: "20+",
                label: "Speakers",
              },
              {
                number: "50+",
                label: "Companies",
              },
              {
                number: "15+",
                label: "Award Categories",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            text-center
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-orange-400
            hover:bg-white/10
          "
              >
                <h3 className="text-4xl font-black text-orange-400">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-wider text-slate-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              About RE-PAX India
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              RE-PAX India was established to support this transformation by
              creating a dedicated platform where the entire renewable energy
              ecosystem can come together under one roof. More than just a
              conference, RE-PAX India is a business networking and
              knowledge-sharing platform that enables meaningful conversations,
              encourages innovation, and fosters partnerships that contribute to
              India's sustainable future.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Organized by Renewable Mirror, RE-PAX India has become one of the
              country's fastest-growing renewable energy conference series,
              bringing together industry leaders, government representatives,
              manufacturers, EPC contractors, project developers, utilities,
              financial institutions, investors, researchers, and technology
              innovators.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Our goal is simple: to provide a world-class platform where
              businesses connect, ideas flourish, and the renewable energy
              industry moves forward together.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RE PAX INDIA Content */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src="https://i.pinimg.com/1200x/de/7d/37/de7d376c0f762d4f066fdf6662f79e85.jpg"
                alt="RE PAX Summit"
                className="
      h-[500px]
      w-full
      rounded-[32px]
      object-cover
      shadow-2xl
      transition-transform
      duration-700
      ease-in-out
      hover:scale-110
    "
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
                Why RE-PAX India?
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
                  <span>Learn from industry experts and policymakers.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🌍
                  </div>
                  <span>Discover innovative technologies and solutions.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🤝
                  </div>
                  <span>Explore investment and funding opportunities.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    📈
                  </div>
                  <span>Build relationships with key decision-makers.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🚀
                  </div>
                  <span>Showcase products and services.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    💼
                  </div>
                  <span>Generate high-quality business leads.</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    🏛️
                  </div>
                  <span>
                    Understand government initiatives and policy developments.
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    📊
                  </div>
                  <span>Stay informed about emerging market trends.</span>
                </div>
              </div>
              <p className="mt-8 text-lg leading-8 text-slate-600">
                Unlike traditional exhibitions or conferences, RE-PAX India
                combines thought leadership, networking, business matchmaking,
                exhibitions, and recognition into one integrated experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1f5678] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [200, "Delegates"],
              [20, "Speakers"],
              [10, "Sponsors"],
              [50, "Partners"],
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
                  <CountUp start={0} end={item[0]} duration={2.5} />+
                </h3>

                <p className="mt-3 text-slate-300 text-lg">{item[1]}</p>
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
            Building a Sustainable Future Through
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
            Our vision is to become India's most trusted renewable energy
            conference and business networking platform by connecting industry
            leaders, policymakers, investors, innovators, and businesses to
            accelerate the adoption of clean energy technologies.
            <br />
            We believe that collaboration is the foundation of sustainable
            growth. By bringing together diverse stakeholders from across the
            renewable energy value chain, RE-PAX India aims to inspire
            innovation, strengthen partnerships, and contribute to India's
            journey toward energy independence and environmental sustainability.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-28 bg-gradient-to-br from-[#1f5678] via-[#245f85] to-[#1f5678]"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300 font-semibold">
              OUR MISSION
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
              Creating Opportunities That Empower the
              <span className="block text-orange-400">
                Renewable Energy Community
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
              At RE-PAX India, our mission is to create opportunities that
              empower the renewable energy community through:
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🤝",
                title: "Industry Collaboration",
                desc: "Encouraging collaboration across the renewable energy ecosystem.",
              },
              {
                icon: "📚",
                title: "Knowledge Sharing",
                desc: "Sharing industry insights, trends and best practices.",
              },
              {
                icon: "⚡",
                title: "Technology Innovation",
                desc: "Promoting innovative clean energy technologies and solutions.",
              },
              {
                icon: "🌐",
                title: "Business Networking",
                desc: "Creating valuable networking opportunities for businesses.",
              },
              {
                icon: "💰",
                title: "Investment Facilitation",
                desc: "Connecting investors with promising renewable energy opportunities.",
              },
              {
                icon: "🏛️",
                title: "Policy Discussions",
                desc: "Supporting dialogue on renewable energy policies and regulations.",
              },
              {
                icon: "🏆",
                title: "Leadership Recognition",
                desc: "Recognizing excellence through the RE-PAX Leadership Awards.",
              },
              {
                icon: "🌱",
                title: "Sustainable Development",
                desc: "Driving long-term environmental and sustainable growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        text-center
        transition-all
        duration-500
        hover:border-orange-400
        hover:bg-white/10
        hover:shadow-[0_20px_50px_rgba(249,115,22,0.25)]
      "
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-4xl shadow-lg shadow-orange-500/30">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-300 leading-7 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHAT MAKES RE-PAX DIFFERENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-500">
              WHAT MAKES RE-PAX DIFFERENT?
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              What Makes
              <span className="block text-orange-500">RE-PAX Different?</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Unlike traditional exhibitions or conferences, RE-PAX India
              combines thought leadership, networking, business matchmaking,
              exhibitions, and recognition into one integrated experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business-Focused Networking",
                desc: "RE-PAX India is designed to facilitate meaningful business interactions rather than casual networking. Our carefully curated attendee base includes senior executives, business owners, project developers, procurement heads, investors, consultants and government officials actively seeking partnerships and opportunities.",
              },
              {
                title: "Expert-Led Knowledge Sharing",
                desc: "Gain valuable insights from industry leaders through keynote presentations, panel discussions, fireside chats and technical sessions covering the latest trends, challenges and innovations in renewable energy.",
              },
              {
                title: "Industry Recognition",
                desc: "The RE-PAX Leadership Awards celebrate organizations and professionals who have demonstrated excellence in renewable energy, innovation, sustainability and business leadership.",
              },
              {
                title: "Technology Showcase",
                desc: "Discover cutting-edge products, services and technologies from leading companies shaping the future of solar energy, battery storage, electric mobility, smart grids and clean technology.",
              },
              {
                title: "Strategic Partnerships",
                desc: "RE-PAX creates an environment where businesses can identify potential partners, customers, suppliers, investors and collaborators, helping participants achieve long-term growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="
            rounded-3xl
            border
            border-[#2D6A8C]
            bg-[#1f5678]
            p-8
            shadow-lg
            transition-all
            duration-300
            hover:border-[#F4B400]
            hover:shadow-[0_20px_40px_rgba(31,86,120,0.35)]
          "
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <p className="mt-5 leading-8 text-slate-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE FOCUS AREAS */}

      <section className="bg-[#1f5678] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              OUR CORE FOCUS AREAS
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Driving India's
              <span className="block text-orange-400">
                Renewable Energy Transition
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              RE-PAX India addresses the most significant sectors driving
              India's renewable energy transition.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solar Manufacturing",
                desc: "Explore advancements in solar cells, modules, wafers, inverters, domestic manufacturing, ALMM, DCR policies and next-generation technologies.",
              },
              {
                title: "Energy Storage Systems (BESS)",
                desc: "Understand the growing role of battery energy storage in grid stability, renewable integration, commercial applications and utility-scale projects.",
              },
              {
                title: "Electric Mobility",
                desc: "Learn about EV charging infrastructure, battery technologies, fleet electrification and sustainable transportation solutions.",
              },
              {
                title: "Green Hydrogen",
                desc: "Discover opportunities in hydrogen production, storage, infrastructure, industrial applications and India's Hydrogen Mission.",
              },
              {
                title: "Smart Energy Solutions",
                desc: "Explore AI, IoT, digital energy management, automation, smart grids and intelligent renewable energy technologies.",
              },
              {
                title: "Sustainability & ESG",
                desc: "Understand sustainability strategies, carbon reduction, ESG best practices and long-term environmental responsibility.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
            rounded-3xl
            border
            border-[#2b6b8f]
            bg-[#245f85]
            p-8
            transition-all
            duration-300
            hover:border-[#F4B400]
            hover:shadow-[0_20px_45px_rgba(0,0,0,0.30)]
          "
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <div className="mt-4 h-1 w-16 rounded-full bg-orange-400" />

                <p className="mt-5 leading-8 text-slate-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE BRING TOGETHER */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-500">
              WHO WE BRING TOGETHER
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Connecting Every Stakeholder in
              <span className="block text-[#1f5678]">
                India's Renewable Energy Ecosystem
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              RE-PAX India connects professionals from across the renewable
              energy value chain, creating an ideal environment for
              collaboration, innovation and business development.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Solar Manufacturers",
              "Battery Manufacturers",
              "Energy Storage Companies",
              "EPC Contractors",
              "Renewable Energy Developers",
              "Independent Power Producers (IPPs)",
              "Government Departments",
              "Public Sector Undertakings (PSUs)",
              "Policymakers & Regulators",
              "Utilities & DISCOMs",
              "Technology Providers",
              "OEMs",
              "Investors & Venture Capital Firms",
              "Banks & Financial Institutions",
              "Consultants",
              "Dealers & Distributors",
              "Installers",
              "Industrial & Commercial Energy Consumers",
              "Startups",
              "Research Institutions",
              "Industry Associations",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-5
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:border-[#F4B400]
            hover:shadow-xl
          "
              >
                <h3 className="font-semibold text-[#1f5678] text-lg">{item}</h3>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text */}

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-lg leading-8 text-slate-600">
              This diverse participation creates an ideal environment for
              collaboration, innovation, strategic partnerships and business
              development across India's renewable energy ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANIZED BY RENEWABLE MIRROR */}

      <section className="bg-[#1f5678] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              ORGANIZED BY
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Renewable
              <span className="block text-orange-400">Mirror</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              RE-PAX India is proudly organized by Renewable Mirror, a leading
              media and networking platform dedicated to the renewable energy
              industry. Through industry publications, conferences, awards,
              digital media and knowledge initiatives, Renewable Mirror
              continues to support the growth of India's clean energy ecosystem.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Card 1 */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="
          rounded-3xl
          border
          border-[#2c6b8d]
          bg-[#245f85]
          p-10
          transition-all
          duration-300
          hover:border-[#F4B400]
        "
            >
              <h3 className="text-2xl font-bold text-white">
                Industry Leadership
              </h3>

              <div className="mt-4 h-1 w-16 rounded-full bg-orange-400"></div>

              <p className="mt-6 leading-8 text-slate-200">
                Renewable Mirror has earned the trust of professionals,
                manufacturers, developers, EPC companies, investors and
                policymakers by delivering high-quality industry insights,
                business networking opportunities and knowledge-driven events.
              </p>
            </motion.div>

            {/* Card 2 */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="
          rounded-3xl
          border
          border-[#2c6b8d]
          bg-[#245f85]
          p-10
          transition-all
          duration-300
          hover:border-[#F4B400]
        "
            >
              <h3 className="text-2xl font-bold text-white">Our Commitment</h3>

              <div className="mt-4 h-1 w-16 rounded-full bg-orange-400"></div>

              <p className="mt-6 leading-8 text-slate-200">
                With a strong focus on quality content, meaningful engagement
                and industry collaboration, Renewable Mirror continues to
                accelerate India's renewable energy transition while connecting
                businesses, promoting innovation and creating lasting
                partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOIN THE MOVEMENT */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-500">
              JOIN THE MOVEMENT
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              The Future of Energy
              <span className="block text-[#1f5678]">Is Renewable</span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              Whether you are a manufacturer, investor, policymaker, EPC
              contractor, developer, technology provider, startup or
              sustainability professional, RE-PAX India offers the perfect
              platform to connect, collaborate and grow.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              Join us in driving innovation, building partnerships and
              accelerating India's transition to a cleaner, greener and more
              sustainable future.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Register Now",
                desc: "Secure your delegate pass and become part of India's renewable energy community.",
              },
              {
                title: "Become a Sponsor",
                desc: "Showcase your brand before senior decision-makers and industry leaders.",
              },
              {
                title: "Nominate for Awards",
                desc: "Celebrate excellence by submitting your organization for the RE-PAX Leadership Awards.",
              },
              {
                title: "Contact Us",
                desc: "Get in touch with our team for sponsorship, partnership or event enquiries.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:border-[#F4B400]
            hover:shadow-[0_20px_40px_rgba(31,86,120,0.25)]
          "
              >
                {/* Hover Background */}

                <div
                  className="
              absolute
              inset-0
              bg-[#1f5678]
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
                />

                {/* Content */}

                <div className="relative z-10">
                  <h3
                    className="
                text-2xl
                font-bold
                text-[#1f5678]
                transition-all
                duration-300
                group-hover:text-white
              "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                mt-5
                leading-7
                text-slate-600
                transition-all
                duration-300
                group-hover:text-slate-200
              "
                  >
                    {item.desc}
                  </p>

                  <button
                    className="
                mt-8
                rounded-xl
                border
                border-orange-400
                px-6
                py-3
                font-semibold
                text-orange-500
                transition-all
                duration-300
                group-hover:border-white
                group-hover:text-white
              "
                  >
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

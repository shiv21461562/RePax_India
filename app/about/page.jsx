"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import CountUp from "react-countup";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900">
      {/* ================= ABOUT HERO ================= */}
<section className="relative w-full overflow-hidden bg-[#071827] pt-0 md:pt-[87px]">
  <div
    className="
      relative w-full
      min-h-[630px]
      sm:min-h-[660px]
      md:min-h-[720px]
    "
  >
{/* Background Image */}
<img
  src="/speaker/aboutBG.png"
  alt="About RE-PAX India"
  className="
    absolute inset-0
    w-full h-full
    object-cover
    object-[72%_center]
    sm:object-[70%_center]
    md:object-center
  "
/>

    {/* Dark Transparent Overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-[#061522]/85
        via-[#071827]/75
        sm:via-[#071827]/65
        md:via-[#071827]/55
        to-[#071827]/20
      "
    />

    {/* Mobile Extra Dark Overlay */}
    <div
      className="
        absolute inset-0
        bg-[#061522]/20
        sm:bg-transparent
      "
    />

    {/* Content */}
    <div
      className="
        relative z-10
        flex min-h-[620px]
        sm:min-h-[650px]
        md:min-h-[700px]
        items-center
      "
    >
      <div
        className="
          mx-auto w-full max-w-7xl
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        <div
          className="
            w-full
            max-w-[760px]
            pt-16
            sm:pt-0
          "
        >

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <span className="h-[2px] w-6 sm:w-10 bg-orange-500" />

              <span
                className="
                  font-poppins
                  text-[9px]
                  xs:text-[10px]
                  sm:text-xs
                  md:text-sm
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  sm:tracking-[0.22em]
                  text-orange-400
                  whitespace-nowrap
                "
              >
                About RE-PAX India
              </span>

              <span className="h-[2px] w-6 sm:w-10 bg-orange-500" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                mt-4
                sm:mt-5
                md:mt-6
                w-full
                font-serif
                font-bold
                leading-[1.08]
                sm:leading-[1.12]
                tracking-tight
                text-white
              "
            >

              {/* Row 1 */}
              <span
                className="
                  block
                  text-[27px]
                  xs:text-[29px]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Empowering India's
              </span>

              {/* Row 2 */}
              <span
                className="
                  mt-1
                  sm:mt-2
                  block
                  text-[27px]
                  xs:text-[29px]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Renewable Energy{" "}
                <span className="text-orange-500">
                  Ecosystem
                </span>
              </span>

              {/* Row 3 */}
              <span
                className="
                  mt-3
                  sm:mt-4
                  block
                  text-xs
                  xs:text-sm
                  sm:text-lg
                  md:text-xl
                  lg:text-2xl
                  font-semibold
                  leading-snug
                  text-orange-400
                "
              >
                Through Collaboration, Innovation & Leadership
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                mt-4
                sm:mt-5
                md:mt-6
                max-w-[650px]
                text-[10px]
                xs:text-xs
                sm:text-sm
                md:text-base
                leading-4
                sm:leading-6
                md:leading-7
                text-white/80
              "
            >
              India's renewable energy sector is undergoing a remarkable
              transformation. As the nation accelerates toward ambitious
              clean energy targets, RE-PAX India brings together
              manufacturers, EPC companies, policymakers, investors,
              technology providers, developers and sustainability leaders
              to drive innovation, collaboration and business growth.
            </motion.p>

          </motion.div>

        </div>
      </div>
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
            </div>

            {/* Right Content */}
            <div>
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

      {/* Vision & Mission */}
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
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT - Vision */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600"
              >
                OUR VISION
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl font-bold text-slate-900 md:text-4xl"
              >
                Building a Sustainable Future Through
                <span className="block text-orange-500">Renewable Energy</span>
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-5 h-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
              />

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 max-w-xl text-lg leading-9 text-slate-600"
              >
                Our vision is to become India's most trusted renewable energy
                conference and business networking platform by connecting
                industry leaders, policymakers, investors, innovators, and
                businesses to accelerate the adoption of clean energy
                technologies.
                <br />
                <br />
                We believe that collaboration is the foundation of sustainable
                growth. By bringing together diverse stakeholders from across
                the renewable energy value chain, RE-PAX India aims to inspire
                innovation, strengthen partnerships, and contribute to India's
                journey toward energy independence and environmental
                sustainability.
              </motion.p>
            </div>

            {/* RIGHT - Mission */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600"
              >
                OUR MISSION
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl font-bold text-slate-900 md:text-3xl"
              >
                Creating Opportunities That Empower the
                <span className="block text-orange-500">
                  Renewable Energy Community
                </span>
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-5 h-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
              />

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 max-w-xl text-lg leading-9 text-slate-600"
              >
                At RE-PAX India, our mission is to create opportunities that
                empower the renewable energy community through:
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 space-y-4"
              >
                {[
                  {
                    title: "Industry Collaboration",
                    desc: "Encouraging collaboration across the renewable energy ecosystem.",
                  },
                  {
                    title: "Knowledge Sharing",
                    desc: "Sharing industry insights, trends and best practices.",
                  },
                  {
                    title: "Technology Innovation",
                    desc: "Promoting innovative clean energy technologies and solutions.",
                  },
                  {
                    title: "Business Networking",
                    desc: "Creating valuable networking opportunities for businesses.",
                  },
                  {
                    title: "Investment Facilitation",
                    desc: "Connecting investors with promising renewable energy opportunities.",
                  },
                  {
                    title: "Policy Discussions",
                    desc: "Supporting dialogue on renewable energy policies and regulations.",
                  },
                  {
                    title: "Leadership Recognition",
                    desc: "Recognizing excellence through the RE-PAX Leadership Awards.",
                  },
                  {
                    title: "Sustainable Development",
                    desc: "Driving long-term environmental and sustainable growth.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                    <p className="text-slate-600 leading-7">
                      <span className="font-semibold text-slate-900">
                        {item.title}:
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHAT MAKES RE-PAX DIFFERENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
<div className="flex flex-col items-center justify-center text-center">
  <span className="font-poppins text-sm font-semibold tracking-wide text-slate-900">
    WHAT MAKES RE-PAX DIFFERENT?
  </span>

  <span className="mt-2 h-[2px] w-12 rounded-full bg-red-500" />
</div>

            <h2
              className="
    mt-6
    font-poppins
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    text-slate-900
    whitespace-nowrap
  "
            >
              What Makes{" "}
              <span className="text-orange-500">RE-PAX Different?</span>
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
        <div className="flex flex-col items-center justify-center text-center">
  <span className="font-poppins text-sm font-semibold tracking-wide text-white">
    OUR CORE FOCUS AREAS
  </span>

  <span className="mt-2 h-[2px] w-12 rounded-full bg-red-500" />
</div>

       <h2
  className="
    mt-5
    font-poppins
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    text-white
  "
>
  Driving India's
  <span className="block mt-1 text-orange-400">
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
        <div className="flex items-center justify-center gap-5">
  <span className="h-[2px] w-16 sm:w-20 bg-red-500" />

  <span
    className="
      font-poppins
      text-sm
      sm:text-base
      font-medium
      tracking-[0.35em]
      text-red-500
      whitespace-nowrap
    "
  >
    WHO WE BRING TOGETHER
  </span>

  <span className="h-[2px] w-16 sm:w-20 bg-red-500" />
</div>

      <h2
  className="
    mt-5
    font-poppins
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    tracking-tight
    text-slate-900
  "
>
  {/* Row 1 */}
  <span className="block">
    Connecting Every Stakeholder in
  </span>

  {/* Row 2 */}
  <span className="mt-1 block text-[#1f5678]">
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
         <div className="flex items-center justify-center gap-5">
  <span className="h-[2px] w-16 sm:w-20 bg-red-500" />

  <span
    className="
      font-poppins
      text-sm
      sm:text-base
      font-medium
      tracking-[0.35em]
      text-white
      whitespace-nowrap
    "
  >
    ORGANIZED BY
  </span>

  <span className="h-[2px] w-16 sm:w-20 bg-red-500" />
</div>

         <h2
  className="
    mt-5
    font-serif
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-bold
    leading-tight
    tracking-tight
    text-white
    whitespace-nowrap
  "
>
  Renewable{" "}
  <span className="text-orange-400">
    Mirror
  </span>
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

      {/* JOIN THE MOVEMENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
         <div className="flex items-center justify-center gap-5">
  <span className="h-[2px] w-16 bg-red-500 sm:w-20" />

  <span
    className="
      font-poppins
      text-sm
      font-medium
      tracking-[0.35em]
      text-red-500
      whitespace-nowrap
    "
  >
    JOIN THE MOVEMENT
  </span>

  <span className="h-[2px] w-16 bg-red-500 sm:w-20" />
</div>

        <h2
  className="
    mt-5
    font-serif
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-bold
    leading-tight
    tracking-tight
    text-slate-900
  "
>
  <span className="block">
    The Future of Energy
  </span>

  <span className="mt-1 block text-[#1f5678]">
    Is Renewable
  </span>
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

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Register Now",
                desc: "Secure your delegate pass and become part of India's renewable energy community.",
                button: "Register",
                link: "/register",
              },
              {
                title: "Become a Sponsor",
                desc: "Showcase your brand before senior decision-makers and industry leaders.",
                button: "Contact Us",
                link: "/contact",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md"
              >
                <Link href={item.link}>
                  <div
                    className="
            group
            relative
            h-full
            cursor-pointer
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
                    <div className="relative z-10 flex h-full flex-col">
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
                flex-1
                leading-7
                text-slate-600
                transition-all
                duration-300
                group-hover:text-slate-200
              "
                      >
                        {item.desc}
                      </p>

                      <span
                        className="
                mt-8
                inline-flex
                w-fit
                items-center
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
                        {item.button}
                        <span className="ml-2">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

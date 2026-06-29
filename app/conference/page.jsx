"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Mic,
  Building2,
  Globe,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Coffee,
  Briefcase,
  Lightbulb,
  Network,
  Target,
  Zap,
} from "lucide-react";

const stats = [
  { number: "50+", title: "Industry Speakers" },
  { number: "3000+", title: "Delegates" },
  { number: "10+", title: "Expert Sessions" },
  { number: "75+", title: "Partner & Exhibitors" },
];

const agendaItems = [
  {
    time: "09:00 AM – 10:00 AM",
    title: "Registration & Welcome Networking",
    icon: "📝",
    desc: "Kick-start your RE-PAX experience by completing your registration and connecting with fellow delegates over tea and coffee. This informal networking session offers an excellent opportunity to meet industry peers, exchange ideas, and establish new business connections before the conference begins.",
  },
  {
    time: "10:00 AM – 10:30 AM",
    title: "Inaugural Ceremony",
    icon: "🪔",
    desc: "The conference officially begins with the inaugural ceremony featuring the traditional lamp lighting, welcome address, and opening remarks by distinguished guests.",
    highlights: [
      "Welcome Address by the Organizing Committee",
      "Lamp Lighting Ceremony",
      "Chief Guest Address",
      "Special Industry Address",
      "Conference Overview",
    ],
  },
  {
    time: "10:30 AM – 11:00 AM",
    title: "Opening Keynote: The Future of India's Renewable Energy Sector",
    icon: "🎤",
    desc: "Gain insights into India's renewable energy vision, policy landscape, investment opportunities, and future growth strategies from a distinguished keynote speaker.",
    highlights: [
      "India's Renewable Energy Targets",
      "Solar & Wind Growth",
      "Energy Security",
      "Sustainability Goals",
      "Industry Outlook",
    ],
  },
  {
    time: "11:00 AM – 11:45 AM",
    title: "Session 1: Solar Manufacturing – Driving India's Global Leadership",
    icon: "☀️",
    desc: "India is rapidly emerging as a global manufacturing hub for solar technologies. This session explores the latest developments in domestic manufacturing, government initiatives, and next-generation technologies.",
    highlights: [
      "Solar Manufacturing Roadmap",
      "ALMM & DCR Policies",
      "Domestic Manufacturing Incentives",
      "TOPCon & HJT Technologies",
      "Wafer & Cell Manufacturing",
      "Supply Chain Localization",
      "Export Opportunities",
      "Manufacturing Investments",
    ],
  },
  {
    time: "11:45 AM – 12:15 PM",
    title: "Networking Tea Break",
    icon: "☕",
    desc: "Refresh, reconnect, and engage with fellow delegates while exploring exhibition booths and technology showcases.",
  },
  {
    time: "12:15 PM – 01:00 PM",
    title:
      "Session 2: Battery Energy Storage Systems (BESS) – Enabling a Reliable Renewable Future",
    icon: "🔋",
    desc: "Battery Energy Storage Systems are becoming the backbone of renewable energy integration. This session focuses on technologies, policies, financing, and business opportunities in India's rapidly growing storage market.",
    highlights: [
      "Grid Scale Storage",
      "Commercial & Industrial Storage",
      "Utility Applications",
      "Battery Manufacturing",
      "Policy Framework",
      "Financing Models",
      "Emerging Technologies",
      "Future Market Opportunities",
    ],
  },
  {
    time: "01:00 PM – 01:30 PM",
    title: "Technology Showcase: Innovation Spotlight",
    icon: "💡",
    desc: "Leading technology providers will present their latest products, software platforms, renewable energy solutions, and digital innovations through live demonstrations and corporate presentations. This session allows attendees to explore breakthrough technologies that are transforming the renewable energy industry.",
  },
  {
    time: "01:30 PM – 02:30 PM",
    title: "Networking Lunch",
    icon: "🍽️",
    desc: "Enjoy lunch while building valuable business relationships with fellow attendees, speakers, sponsors, exhibitors, and industry leaders. The networking lunch is one of the most productive opportunities to discuss collaborations, partnerships, and business opportunities in an informal setting.",
  },
  {
    time: "02:30 PM – 03:15 PM",
    title:
      "Leadership Awards Ceremony – Honouring Excellence in Renewable Energy",
    icon: "🏆",
    desc: "Celebrate organizations and professionals who have made outstanding contributions to India's renewable energy industry.",
    highlights: [
      "Solar Manufacturing",
      "EPC Services",
      "Energy Storage",
      "Renewable Innovation",
      "Sustainability",
      "Green Technology",
      "Project Development",
      "Industry Leadership",
    ],
  },
  {
    time: "03:15 PM – 04:00 PM",
    title: "Panel Discussion – Accelerating India's Clean Energy Transition",
    icon: "👥",
    desc: "Join an engaging panel discussion featuring industry leaders, policymakers, investors, and technology experts as they explore the opportunities and challenges shaping India's renewable energy future.",
    highlights: [
      "Investment Outlook",
      "Manufacturing Expansion",
      "Policy Reforms",
      "Grid Modernization",
      "Green Hydrogen",
      "Battery Storage",
      "Smart Energy",
      "Digital Transformation",
    ],
  },
  {
    time: "04:00 PM – 04:15 PM",
    title: "Closing Remarks",
    icon: "🎯",
    desc: "The conference concludes with a summary of key insights, acknowledgements, and an invitation to future RE-PAX events.",
    highlights: [
      "Conference Takeaways",
      "Vote of Thanks",
      "Future Event Announcements",
      "Networking Continuation",
    ],
  },
];

const tracks = [
  {
    icon: "☀️",
    title: "Solar Technology",
    desc: "Latest innovations in solar manufacturing, cell technology, and deployment strategies.",
  },
  {
    icon: "🔋",
    title: "Energy Storage",
    desc: "Advanced battery technologies, grid storage solutions, and energy management systems.",
  },
  {
    icon: "🌍",
    title: "Green Energy Policy",
    desc: "Regulatory frameworks, government incentives, and policy reforms shaping the industry.",
  },
  {
    icon: "💼",
    title: "Investment & Finance",
    desc: "Funding opportunities, investment models, and financial strategies for renewable projects.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    desc: "Domestic manufacturing capabilities, supply chain, and export opportunities.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Climate goals, decarbonization, and sustainable development practices.",
  },
];

const workshops = [
  {
    icon: "⚡",
    title: "Solar Project Development",
    desc: "Learn best practices for developing, financing, and executing solar projects.",
  },
  {
    icon: "🔋",
    title: "BESS Integration",
    desc: "Understanding battery storage integration and grid stability solutions.",
  },
  {
    icon: "🌿",
    title: "Green Hydrogen",
    desc: "Explore green hydrogen production, applications, and market potential.",
  },
  {
    icon: "📊",
    title: "Energy Trading",
    desc: "Insights into energy markets, trading strategies, and price forecasting.",
  },
];

const whyAttend = [
  "Industry Insights",
  "Networking Opportunities",
  "Investor Connect",
  "B2B Meetings",
  "Workshops & Training",
  "Technology Showcases",
  "Policy Updates",
  "Awards & Recognition",
];

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#001B4D] via-[#0B3B6E] to-[#1D5A7A] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#0B1F2E]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/conf3.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#081824]/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-300 backdrop-blur-md">
                RE-PAX INDIA 2026
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-5xl">
                India's Premier
              <span className="block text-[#FF6B00]">Renewable Energy</span>
                Conference
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Discover a Day of Learning, Networking & Innovation — A
                Power-Packed Conference Designed for Renewable Energy
                Professionals
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
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex justify-center">
              <div className="absolute h-80 w-80 rounded-full bg-green-500/20 blur-[120px]" />
            </div>
          </div>
        </div>
      </section>

      {/* EVENT OVERVIEW */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-[#0A3F63]">
                Event Overview
              </span>

              <h2 className="mt-6 text-5xl font-bold text-[#0B4D7A]">
                Shaping The Future Of Renewable Energy In India
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The RE-PAX India Conference Agenda has been carefully curated to
                provide attendees with valuable industry insights, meaningful
                networking opportunities, and practical knowledge from leading
                experts across the renewable energy sector.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                From keynote addresses and expert panel discussions to technical
                presentations, live product showcases, and networking sessions,
                every moment of the conference is designed to inspire
                collaboration and drive business growth.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Whether you're a manufacturer, EPC contractor, policymaker,
                investor, developer, or technology provider, you'll gain
                actionable insights into the latest trends, policies,
                innovations, and opportunities shaping India's renewable energy
                landscape.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#0B4D7A] to-[#1D5A7A] p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold">Why Attend?</h3>

              <ul className="mt-8 space-y-4">
                {whyAttend.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-[#0A3F63]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
               <button className="rounded-full bg-white px-8 py-3 font-semibold text-[#0A3F63] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-[0_10px_30px_rgba(255,255,255,.18)]">
                  Register as Delegate
                </button>
                <button className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10">
                  View Speakers
                </button>
                <button className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10">
                  Become a Sponsor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
 {/* ================= EVENT STATISTICS ================= */}

<section className="relative overflow-hidden bg-[#0B4F78] py-24">

  {/* Background Pattern */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#FF8A00]/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-16 text-center"
    >

      <span className="inline-flex rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#FF8A00]">
        EVENT STATISTICS
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Conference By The Numbers
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#FF8A00]" />

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Bringing together the brightest minds in renewable energy,
        innovation and sustainability.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

      {stats.map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .15,
          }}
          whileHover={{
            y: -10,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#165A86]/70 p-10 backdrop-blur-sm transition-all duration-500 hover:border-[#FF8A00] hover:bg-[#15628F] hover:shadow-[0_20px_45px_rgba(0,0,0,.35)]"
        >

          {/* Orange Line */}

          <div className="absolute left-0 top-0 h-1 w-0 bg-[#FF8A00] transition-all duration-500 group-hover:w-full" />

          {/* Background Glow */}

          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FF8A00]/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

          {/* Number */}

          <h3 className="relative text-6xl font-extrabold text-[#FF8A00] transition-all duration-500 group-hover:scale-110">
            {item.number}
          </h3>

          {/* Divider */}

          <div className="mt-5 h-1 w-16 rounded-full bg-[#FF8A00] transition-all duration-500 group-hover:w-24" />

          {/* Title */}

          <h4 className="mt-6 text-xl font-semibold text-white">
            {item.title}
          </h4>

          {/* Description */}

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {item.description}
          </p>

          {/* Bottom Border */}

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF8A00] transition-all duration-500 group-hover:w-full" />

        </motion.div>

      ))}

    </div>

  </div>

</section>  




      {/* CONFERENCE THEMES */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
          <span className="rounded-full border border-[#FFB27A] bg-[#FFF2E8] px-5 py-2 text-sm font-semibold text-[#FF6B00]">
              Conference Themes
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#0A3F63] md:text-6xl">
              Explore The Future Of Renewable Energy
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Discover transformative technologies, innovative business models
              and emerging trends redefining the renewable energy landscape.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((item, index) => (
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
                className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#07263D] via-[#0A3F63] to-[#0D5674] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="absolute left-0 top-0 h-1 w-16 bg-[#FF6B00] transition-all duration-500 group-hover:w-full" />

                <div className="mb-6 text-5xl">{item.icon}</div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-300">{item.desc}</p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#FF9A3D]">
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







{/* CONFERENCE TRACKS */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#07263D] via-[#0A3F63] to-[#0D5674] py-28">

  {/* Background Blur */}
  <div className="absolute -left-52 top-0 h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[150px]" />
  <div className="absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-sm font-semibold tracking-wide text-sky-300">
        Industry Focus Areas
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Industry-Focused Tracks
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        Explore dedicated conference tracks covering renewable energy,
        manufacturing, energy storage, investment, sustainability and policy.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Solar Manufacturing",
          desc: "Advanced solar module production technologies, automation and global supply chains."
        },
        {
          title: "Energy Storage",
          desc: "Battery innovations, storage solutions and next-generation grid technologies."
        },
        {
          title: "Green Hydrogen",
          desc: "Hydrogen production, infrastructure and industrial decarbonization."
        },
        {
          title: "Investment & Finance",
          desc: "Funding opportunities, clean energy investments and project financing."
        },
        {
          title: "Policy & Regulation",
          desc: "Government policies, incentives and renewable energy regulations."
        },
        {
          title: "Sustainability",
          desc: "Climate action, ESG initiatives and sustainable business transformation."
        },
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .08,
          }}
          className="group relative overflow-hidden rounded-[30px] border border-white/30 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,.35)] cursor-pointer"
        >

          {/* Left to Right Hover Animation */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover:translate-x-0" />

          {/* Content */}
          <div className="relative z-10">

            <div className="mb-6 h-1 w-14 rounded-full bg-[#0A3F63] transition-all duration-500 group-hover:w-24 group-hover:bg-white" />

            <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
              {item.desc}
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[#0A3F63] transition-all duration-500 group-hover:gap-4 group-hover:text-white">
              Explore Track

              <svg
                className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>




      {/* AGENDA TIMELINE */}
  
<section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFD] via-white to-[#F5FAFC] py-28">

  {/* Background Blur */}
  <div className="absolute -left-44 top-10 h-[380px] w-[380px] rounded-full bg-sky-200/40 blur-[140px]" />
  <div className="absolute -right-44 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-200/40 blur-[140px]" />

  <div className="relative mx-auto max-w-6xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-semibold text-[#0A3F63]">
        Conference Agenda
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#0A3F63]">
        Event Schedule
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        A thoughtfully curated agenda featuring keynote sessions,
        networking opportunities, industry panels, business meetings
        and award celebrations.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-8 top-0 hidden h-full w-[4px] rounded-full bg-gradient-to-b from-[#0A3F63] via-[#2476A8] to-[#7DD3FC] md:block" />

      {agendaItems.map((item, index) => (

        <motion.div
          key={item.time}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .55,
            delay: index * .08,
          }}
          className="group relative mb-10 flex gap-8"
        >

          {/* Timeline Number */}
          <div className="relative z-10 hidden md:flex">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A3F63] text-lg font-bold text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0A3F63]">
              {String(index + 1).padStart(2, "0")}
            </div>

          </div>

          {/* Card */}
          <div className="group/card relative flex-1 overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(10,63,99,.18)]">

            {/* Hover Overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover/card:translate-x-0" />

            {/* Content */}
            <div className="relative z-10">

              {/* Time */}
              <div className="mb-5 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-[#0A3F63] transition-all duration-500 group-hover/card:bg-white/15 group-hover/card:text-white">

                <Clock className="mr-2 h-4 w-4" />

                {item.time}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover/card:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-8 text-slate-600 transition-colors duration-500 group-hover/card:text-slate-200">
                {item.desc}
              </p>

              {/* Highlights */}
              {item.highlights && (

                <div className="mt-6 flex flex-wrap gap-3">

                  {item.highlights.map((highlight) => (

                    <span
                      key={highlight}
                      className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-[#0A3F63] transition-all duration-500 group-hover/card:border-white/20 group-hover/card:bg-white/15 group-hover/card:text-white"
                    >
                      {highlight}
                    </span>

                  ))}

                </div>

              )}

              {/* Bottom Line */}
              <div className="mt-8 flex items-center gap-3">

                <div className="h-[3px] w-14 rounded-full bg-[#0A3F63] transition-all duration-500 group-hover/card:w-28 group-hover/card:bg-white" />

                <span className="text-sm font-semibold text-[#0A3F63] transition-all duration-500 group-hover/card:text-white">
                  Session Details
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>
    {/* Bottom Info Cards */}
    <div className="mt-24 grid gap-8 lg:grid-cols-2">

      {/* Why Agenda Matters */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(10,63,99,.18)]"
      >
        {/* Hover Background */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover:translate-x-0" />

        <div className="relative z-10">

          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-[#0A3F63] transition-all duration-500 group-hover:bg-white/15 group-hover:text-white">
            Why It Matters
          </span>

          <h3 className="mt-6 text-3xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
            Why the Agenda Matters
          </h3>

          <p className="mt-5 leading-8 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
            Every session has been carefully planned to maximize learning,
            collaboration and business opportunities. From keynote speeches to
            expert panel discussions and networking sessions, attendees gain
            practical insights into emerging renewable energy trends.
          </p>

          <p className="mt-5 leading-8 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
            Whether you're an investor, policymaker, manufacturer, developer,
            startup or technology provider, the agenda helps you build valuable
            connections and discover new business opportunities.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-[3px] w-14 rounded-full bg-[#0A3F63] transition-all duration-500 group-hover:w-28 group-hover:bg-white" />
            <span className="font-semibold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
              Learn • Connect • Grow
            </span>
          </div>

        </div>
      </motion.div>

      {/* Plan Your Day */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(10,63,99,.18)]"
      >
        {/* Hover Background */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover:translate-x-0" />

        <div className="relative z-10">

          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-[#0A3F63] transition-all duration-500 group-hover:bg-white/15 group-hover:text-white">
            Visitor Guide
          </span>

          <h3 className="mt-6 text-3xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
            Plan Your Day
          </h3>

          <div className="mt-8 space-y-4">

            {[
              "Arrive early for registration & networking",
              "Attend keynote sessions for market insights",
              "Participate in expert panel discussions",
              "Visit exhibitors during networking breaks",
              "Meet sponsors and technology providers",
              "Schedule B2B meetings with industry leaders",
              "Join the awards ceremony & closing networking"
            ].map((tip) => (

              <div
                key={tip}
                className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 transition-all duration-500 group-hover:bg-white/10"
              >

                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0A3F63] transition-colors duration-500 group-hover:bg-white" />

                <p className="text-sm leading-7 text-slate-700 transition-colors duration-500 group-hover:text-slate-200">
                  {tip}
                </p>

              </div>

            ))}

          </div>

        </div>
      </motion.div>

    </div>

  </div>
</section>




      {/* WORKSHOPS SECTION */}


<section className="relative overflow-hidden bg-gradient-to-br from-[#07263D] via-[#0A3F63] to-[#0D5674] py-28">

  {/* Background Blur */}
  <div className="absolute -left-44 top-10 h-[380px] w-[380px] rounded-full bg-sky-400/10 blur-[150px]" />
  <div className="absolute -right-44 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-sm font-semibold text-sky-300">
        Interactive Workshops
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Hands-On Learning Sessions
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-sky-400" />

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        Practical workshops designed to help attendees explore renewable
        technologies, business strategies and industry best practices through
        interactive learning experiences.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {workshops.map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .08,
          }}
          className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,.35)] cursor-pointer"
        >

          {/* Hover Background */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover:translate-x-0" />

          {/* Content */}
          <div className="relative z-10">

            {/* Top Line */}
            <div className="mb-5 h-1 w-14 rounded-full bg-[#0A3F63] transition-all duration-500 group-hover:w-24 group-hover:bg-white" />

            <h3 className="text-2xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
              {item.title}
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
              {item.desc}
            </p>

            <div className="mt-7 flex items-center gap-2 font-semibold text-[#0A3F63] transition-all duration-500 group-hover:gap-4 group-hover:text-white">
              Explore Workshop

              <svg
                className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>



      {/* NETWORKING BEYOND THE CONFERENCE */}

<section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFD] via-white to-[#F5FAFC] py-28">

  {/* Background Blur */}
  <div className="absolute -left-44 top-0 h-[380px] w-[380px] rounded-full bg-sky-200/40 blur-[150px]" />
  <div className="absolute -right-44 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-200/40 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-semibold text-[#0A3F63]">
        Networking Opportunities
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#0A3F63]">
        Networking Beyond The Conference
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Build meaningful industry relationships through structured networking,
        business meetings and valuable conversations that continue beyond the
        conference sessions.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Exhibition Area",
          desc: "Discover innovative products and connect directly with exhibitors."
        },
        {
          title: "Networking Zones",
          desc: "Meet industry leaders and expand your professional network."
        },
        {
          title: "Business Meetings",
          desc: "Exchange ideas, contacts and explore strategic partnerships."
        },
        {
          title: "Coffee Conversations",
          desc: "Build lasting relationships through informal discussions."
        },
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .08,
          }}
          className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(10,63,99,.18)]"
        >

          {/* Hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 ease-out group-hover:translate-x-0" />

          <div className="relative z-10">

            {/* Accent Line */}
            <div className="mb-5 h-1 w-14 rounded-full bg-[#0A3F63] transition-all duration-500 group-hover:w-24 group-hover:bg-white" />

            <h3 className="text-2xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
              {item.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
              {item.desc}
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[#0A3F63] transition-all duration-500 group-hover:gap-4 group-hover:text-white">

              Learn More

              <svg
                className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Bottom Highlight */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6, delay: .2 }}
      className="group relative mt-20 overflow-hidden rounded-[34px] border border-slate-200 bg-white p-10 shadow-xl"
    >

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#07263D] via-[#0A3F63] to-[#0D5674] transition-transform duration-700 group-hover:translate-x-0" />

      <div className="relative z-10 text-center">

        <h3 className="text-3xl font-bold text-[#0A3F63] transition-colors duration-500 group-hover:text-white">
          Connections That Last Beyond The Event
        </h3>

        <p className="mx-auto mt-6 max-w-4xl leading-8 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
          Some of the strongest partnerships begin with a simple conversation.
          RE-PAX India creates an environment where innovators, investors,
          manufacturers, policymakers and business leaders can connect, share
          ideas and build long-term collaborations that drive the renewable
          energy industry forward.
        </p>

      </div>

    </motion.div>

  </div>

</section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3F63] to-[#001B4D] py-28">
        <div className="absolute inset-0 bg-[url('/images/conf3.png')] bg-cover bg-center opacity-10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold text-white">Register Today</h2>

            <p className="mt-6 text-xl text-slate-300">
              Don't miss the opportunity to be part of India's premier renewable
              energy conference. Join industry leaders, innovators, investors,
              policymakers, and technology experts for a day of learning,
              networking, and collaboration.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-green-500 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-600 hover:shadow-[0_10px_40px_rgba(34,197,94,0.3)]">
                Register as Delegate
              </button>
              <button className="rounded-full border border-white/30 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                View Speakers
              </button>
              <button className="rounded-full border border-white/30 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                Become a Sponsor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

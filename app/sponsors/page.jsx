"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getSponsors } from "../services/SponsorApi";
import Link from "next/link";

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

  const sponsorBenefits = [
    "Increase Brand Visibility",
    "Position Your Company as an Industry Leader",
    "Launch New Products & Services",
    "Connect with Key Decision-Makers",
    "Generate High-Quality Business Leads",
    "Build Strategic Partnerships",
    "Engage with Government Officials",
    "Strengthen Customer Relationships",
    "Showcase Innovation",
    "Enhance Corporate Reputation",
  ];

  const attendeeProfiles = [
    "Solar Manufacturers",
    "Module & Cell Manufacturers",
    "Battery Manufacturers",
    "Energy Storage Companies",
    "EPC Contractors",
    "Renewable Energy Developers",
    "Government Departments",
    "Public Sector Undertakings (PSUs)",
    "Independent Power Producers (IPPs)",
    "Utilities & DISCOMs",
    "OEMs",
    "Technology Providers",
    "Financial Institutions",
    "Investors",
    "Consultants",
    "Dealers & Distributors",
    "Installers",
    "Industrial & Commercial Consumers",
    "Research Institutions",
    "Industry Associations",
  ];

  const sponsorshipPackages = [
    {
      tier: "Title Sponsor",
      description:
        "Become the headline sponsor of RE-PAX India and receive the highest level of visibility across all event branding, digital promotions, conference materials, stage backdrops, media campaigns, and networking activities.",
      benefits: [
        "Exclusive Title Sponsor Recognition",
        "Premium Logo Placement",
        "Opening Ceremony Recognition",
        "Keynote Speaking Opportunity",
        "Exhibition Space",
        "VIP Delegate Passes",
        "Award Presentation Opportunity",
        "Media Interviews",
        "Website Feature",
        "Social Media Promotion",
        "Branding Across Event Venue",
      ],
    },
    {
      tier: "Platinum Sponsor",
      description:
        "Position your organization among the leading renewable energy companies participating in RE-PAX India.",
      benefits: [
        "Premium Branding",
        "Conference Stage Visibility",
        "Speaker Opportunity",
        "Exhibition Booth",
        "Delegate Passes",
        "Website Listing",
        "Networking Access",
        "Digital Promotion",
      ],
    },
    {
      tier: "Gold Sponsor",
      description:
        "Enhance your market presence and connect directly with industry professionals.",
      benefits: [
        "Event Branding",
        "Exhibition Booth",
        "Logo Placement",
        "Delegate Passes",
        "Digital Promotion",
        "Networking Opportunities",
      ],
    },
    {
      tier: "Silver Sponsor",
      description:
        "An excellent opportunity for organizations looking to increase visibility while engaging with a targeted renewable energy audience.",
      benefits: [
        "Branding Opportunities",
        "Exhibition Space",
        "Website Recognition",
        "Delegate Passes",
        "Marketing Promotion",
      ],
    },
    {
      tier: "Associate Sponsor",
      description:
        "Build your presence within the renewable energy industry while supporting one of India's leading conferences.",
      benefits: [
        "Brand Recognition",
        "Event Branding",
        "Delegate Passes",
        "Website Listing",
      ],
    },
  ];

  const brandingOptions = [
    "Registration Desk Branding",
    "Delegate Kit Branding",
    "Lanyard Branding",
    "Badge Branding",
    "Networking Lounge Branding",
    "Stage Branding",
    "LED Screen Branding",
    "Welcome Arch Branding",
    "Coffee Break Branding",
    "Lunch Sponsorship",
    "Gala Dinner Branding",
    "Awards Ceremony Branding",
    "Photo Wall Branding",
    "Direction Signage Branding",
    "Digital Display Branding",
  ];

  const partnershipCategories = [
    "Strategic Partners",
    "Knowledge Partners",
    "Industry Partners",
    "Government Partners",
    "Media Partners",
    "Association Partners",
    "Technology Partners",
    "Sustainability Partners",
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
            SPONSORS & PARTNERS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-8 text-5xl font-bold tracking-tight md:text-6xl"
          >
            <span className="text-white">Partner with India's Premier </span>
            <span className="text-orange-400">Renewable Energy Conference</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
            className="mt-6 text-2xl font-semibold leading-relaxed text-white md:text-3xl"
          >
            Showcase Your Brand.
            <br />
            <span className="text-orange-300">
              Connect with Industry Leaders.
            </span>
            <br />
            Drive Business Growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300"
          >
            RE-PAX India offers a unique opportunity for organizations to
            position themselves at the forefront of India's rapidly growing
            renewable energy sector. As a sponsor or partner, your brand will
            gain direct exposure to senior decision-makers, government
            representatives, investors, developers, EPC contractors,
            manufacturers, technology providers, and industry influencers from
            across the country.
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
              🤝 Senior Decision Makers
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              🏛 Government Officials
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              💼 Investors
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              ⚡ Technology Leaders
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

      {/* ================= WHY SPONSOR ================= */}
      <section className="relative overflow-hidden bg-white py-28">
        {/* Top Decoration */}
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-100/30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-sky-100/40 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-6 py-2 text-sm font-semibold tracking-widest uppercase text-[#174d6d]">
              WHY SPONSOR
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-5xl">
              Why Sponsor
              <span className="block text-[#174d6d]">RE-PAX India 2026?</span>
            </h2>

            <div className="mx-auto mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-cyan-500 via-[#174d6d] to-cyan-500"></div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
              Sponsoring RE-PAX India places your brand at the center of India's
              fastest-growing renewable energy ecosystem. Build strategic
              partnerships, engage with key decision-makers, generate quality
              business leads, and position your organization as an industry
              leader before thousands of professionals, investors, policymakers,
              and innovators.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-[1px] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#174d6d] hover:shadow-2xl"
              >
                {/* Hover Background */}
                <span className="absolute inset-y-0 left-0 w-0 bg-[#174d6d] transition-all duration-500 ease-out group-hover:w-full"></span>

                {/* Content */}
                <div className="relative z-10 flex h-full items-center gap-5 rounded-2xl bg-white p-6 transition-all duration-500 group-hover:bg-transparent">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl font-bold text-[#174d6d] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-[#174d6d]">
                    ✓
                  </div>

                  {/* Text */}
                  <p className="text-base font-semibold leading-7 text-slate-700 transition-colors duration-500 group-hover:text-white">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ATTENDEE PROFILE ======================= */}

      <section className="relative overflow-hidden bg-[#174d6d] py-28">
        
        <div className="absolute right-0 bottom-24 opacity-20">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[3px] text-cyan-200">
              <span className="h-px w-10 bg-cyan-300"></span>
              Attendee Profile
              <span className="h-px w-10 bg-cyan-300"></span>
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Who Will You Meet?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-200">
              Your brand will engage with professionals representing every
              segment of the renewable energy industry.
            </p>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-orange-500"></div>
          </motion.div>

          {/* Cards */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {attendeeProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                }}
                className="group cursor-pointer"
              >
                <div
                  className="
              flex
              h-[76px]
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-300
              hover:bg-gradient-to-r
              hover:from-[#0f4263]
              hover:to-[#1b6a95]
              hover:shadow-2xl
            "
                >
                  <span className="text-[16px] font-semibold text-slate-700 transition group-hover:text-white">
                    {profile}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP OPPORTUNITIES */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="inline-flex rounded-full border border-[#174d6d]/20 bg-[#174d6d]/10 px-5 py-2 text-sm font-semibold text-[#174d6d]">
              SPONSORSHIP OPPORTUNITIES
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Sponsorship Packages
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We offer a range of sponsorship packages tailored to maximize your
              brand's visibility and business objectives.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#174d6d]" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sponsorshipPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl border p-6 transition-all hover:-translate-y-2 hover:shadow-xl ${
                  index === 0
                    ? "border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`mb-4 inline-block rounded-full px-4 py-1 text-sm font-bold ${
                    index === 0
                      ? "bg-orange-500 text-white"
                      : "bg-[#174d6d] text-white"
                  }`}
                >
                  {pkg.tier}
                </div>
                <p className="mb-4 text-sm text-slate-600">{pkg.description}</p>
                <h4 className="mb-3 text-sm font-semibold text-slate-900">
                  Benefits Include:
                </h4>
                <ul className="space-y-2">
                  {pkg.benefits.slice(0, 6).map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 text-[#174d6d]">•</span>
                      {benefit}
                    </li>
                  ))}
                  {pkg.benefits.length > 6 && (
                    <li className="text-sm text-[#174d6d] font-medium">
                      +{pkg.benefits.length - 6} more benefits
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITION & BRANDING */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Exhibition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <span className="inline-flex rounded-full bg-[#174d6d]/10 px-4 py-1 text-sm font-semibold text-[#174d6d]">
                EXHIBITION
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Exhibition Opportunities
              </h3>
              <p className="mt-3 text-slate-600">
                Showcase your latest products, technologies, and solutions to a
                highly engaged audience of renewable energy professionals. The
                exhibition area is designed to encourage interaction between
                exhibitors and visitors, helping companies generate quality
                leads and establish valuable business relationships.
              </p>
              <h4 className="mt-6 font-semibold text-slate-900">
                Why Exhibit?
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  "Launch New Products",
                  "Meet Qualified Buyers",
                  "Generate Business Leads",
                  "Demonstrate Live Solutions",
                  "Strengthen Brand Presence",
                  "Connect with Distributors",
                  "Expand into New Markets",
                  "Build Customer Relationships",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-[#174d6d]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                BRANDING
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Branding Opportunities
              </h3>
              <p className="mt-3 text-slate-600">
                In addition to sponsorship packages, RE-PAX India offers
                multiple branding options to maximize your visibility throughout
                the event.
              </p>
              <h4 className="mt-6 font-semibold text-slate-900">
                Available Branding Options:
              </h4>
              <div className="mt-3 grid grid-cols-1 gap-1.5">
                {brandingOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-orange-500">◆</span>
                    {option}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">
                Customized branding solutions are also available to meet your
                marketing objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS BEYOND EVENT */}
      <section className="py-24 bg-[#174d6d]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              BEYOND THE EVENT
            </span>
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Benefits Beyond the Event
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Your partnership with RE-PAX India extends beyond the conference
              day. Sponsors benefit from:
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              "Pre-Event Marketing Campaigns",
              "Social Media Promotions",
              "Email Marketing Campaigns",
              "Website Exposure",
              "Media Coverage",
              "Post-Event Reports",
              "Photo & Video Highlights",
              "Long-Term Brand Association",
              "Industry Recognition",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY LEADING BRANDS CHOOSE RE-PAX */}
    <section className="py-24 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <span className="inline-flex rounded-full border border-[#1F5678]/20 bg-[#1F5678]/10 px-5 py-2 text-sm font-semibold tracking-wider text-[#1F5678]">
        WHY LEADING BRANDS CHOOSE RE-PAX
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
        Why Leading Brands Choose RE-PAX
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        Organizations choose RE-PAX India because it delivers measurable
        business value, strategic networking opportunities and unmatched
        industry exposure.
      </p>
    </motion.div>

    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Direct Access to Decision Makers",
          desc: "Meet policymakers, CXOs, investors and renewable energy leaders under one roof.",
        },
        {
          title: "Business Networking",
          desc: "Build valuable partnerships with EPC companies, manufacturers and technology providers.",
        },
        {
          title: "Targeted Industry Audience",
          desc: "Engage directly with professionals actively seeking renewable energy solutions.",
        },
        {
          title: "Enhanced Brand Visibility",
          desc: "Increase brand awareness before thousands of qualified industry professionals.",
        },
        {
          title: "Strong Media Presence",
          desc: "Receive extensive visibility through Renewable Mirror and industry media channels.",
        },
        {
          title: "Excellent ROI",
          desc: "Generate qualified leads, business opportunities and long-term partnerships.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -8 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#1F5678]
            p-8
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_20px_45px_rgba(31,86,120,0.35)]
          "
        >
      

          {/* Orange Line */}
          <div className="mb-6 h-1 w-14 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />

          <h3 className="text-2xl font-bold leading-tight text-white">
            {item.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-300">
            {item.desc}
          </p>

          <div className="mt-8 flex items-center gap-2 text-orange-400 font-semibold">
            <span>Discover More</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>

          {/* Hover Glow */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  </div>
</section>





      {/* PARTNERS CATEGORIES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              OUR PARTNERS
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Partnership Categories
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              We proudly collaborate with organizations that share our vision of
              advancing India's renewable energy ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {partnershipCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 hover:border-[#174d6d]/30 hover:bg-[#174d6d]/5 transition-all"
              >
                {category}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Become a Sponsor */}
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
                Become a Sponsor
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Ready to elevate your brand and connect with the leaders shaping
                India's renewable energy future?
                <br />
                <br />
                Join RE-PAX India as a sponsor or partner and unlock
                unparalleled opportunities for business growth, networking, and
                industry recognition. Our team will work with you to create a
                customized sponsorship package that aligns with your marketing
                goals and delivers maximum value.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
                    Become a Sponsor
                  </button>
                </Link>
                <Link href="/brochure">
                  <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 cursor-pointer">
                    Download Sponsorship Brochure
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 cursor-pointer">
                    Contact Sponsorship Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Let's Build the Future Together */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              LET'S BUILD THE FUTURE TOGETHER
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Let's Build the Future Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              The renewable energy industry thrives on collaboration,
              innovation, and partnerships. At RE-PAX India, we provide the
              platform where meaningful connections are made and lasting
              business relationships begin.
            </p>
            <p className="mt-4 text-xl font-semibold text-[#174d6d]">
              Become a sponsor. Showcase your brand. Inspire innovation. Shape
              the future.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

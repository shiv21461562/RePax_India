"use client";

import { useState } from "react";
import BoothBookingModal from "@/components/BoothBookingModal";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Globe,
  Handshake,
  ArrowRight,
  Sun,
  Battery,
  Zap,
  Leaf,
  Sparkles,
  Award,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Car,
  Droplets,
  Rocket,
} from "lucide-react";

export default function Page() {
  const [openBoothModal, setOpenBoothModal] = useState(false);

  const benefits = [
    "Showcase Latest Technologies & Innovations",
    "Launch New Products & Services",
    "Generate Qualified Sales Leads",
    "Meet Decision Makers & Procurement Teams",
    "Build Strategic Partnerships",
    "Gain Valuable Market Insights",
  ];

  const visitorProfile = [
    "Solar Module Manufacturers",
    "Solar Cell Manufacturers",
    "Inverter Manufacturers",
    "Battery Manufacturers",
    "Battery Energy Storage Companies",
    "EPC Contractors",
    "Renewable Energy Developers",
    "Government Departments",
    "Public Sector Undertakings (PSUs)",
    "Utilities & DISCOMs",
    "Independent Power Producers (IPPs)",
    "Technology Providers",
    "Consultants",
    "Investors",
    "Financial Institutions",
    "OEMs",
    "Industrial & Commercial Consumers",
    "Dealers & Distributors",
    "Installers",
    "Research Organizations",
    "Educational Institutions",
    "Industry Associations",
  ];

  const industries = [
    { name: "Solar Energy", icon: <Sun size={28} /> },
    { name: "Energy Storage", icon: <Battery size={28} /> },
    { name: "Green Hydrogen", icon: <Droplets size={28} /> },
    { name: "Electric Mobility", icon: <Car size={28} /> },
    { name: "Smart Grid", icon: <Cpu size={28} /> },
    { name: "Sustainable Tech", icon: <Leaf size={28} /> },
  ];

  const exhibitionFeatures = [
    "Premium Exhibition Space",
    "Dedicated Booth Area",
    "Company Name in Event Directory",
    "Website Listing",
    "Networking Opportunities",
    "Delegate Passes",
    "Branding Opportunities",
    "Access to Conference Sessions",
    "Business Matchmaking Support",
    "On-Site Event Assistance",
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <motion.section
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative overflow-hidden bg-[#255B7D] py-32"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-[#355F7A] px-5 py-2 text-sm font-semibold text-orange-400"
          >
            RE-PAX INDIA 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Exhibit at RE-PAX India
            <span className="block text-orange-400">
              Showcase Your Innovations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-200"
          >
            Connect with India's renewable energy decision-makers, project
            developers, and investors shaping the sustainable future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          ></motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["5000+", "Visitors"],
              ["100+", "Exhibitors"],
              ["2+", "Conference Sessions"],
              ["50+", "Industry Partners"],
            ].map(([number, title], index) => (
              <div
                key={title}
                className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#2D6689]
            p-8
            text-center
            text-white
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-3
            hover:bg-[#35739B]
            "
              >
                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

                {/* Number */}
                <h3 className="text-5xl font-bold text-orange-400">{number}</h3>

                <p className="mt-3 text-slate-200">{title}</p>

                {/* Bottom Line */}
                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-32" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Exhibit */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Why Exhibit at
              <span className="text-orange-500"> RE-PAX India?</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              The renewable energy sector is growing rapidly. RE-PAX India
              brings together decision-makers actively seeking innovative
              products and solutions, making it the ideal environment to
              generate business opportunities.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
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
            cursor-pointer
            "
              >
                {/* Animated Background */}
                <div
                  className="
              absolute
              inset-0
              origin-left
              scale-x-0
              bg-[#255B7D]
              transition-transform
              duration-500
              ease-out
              group-hover:scale-x-100
              "
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                transition-all
                duration-500
                group-hover:bg-white/10
                "
                  >
                    {index === 0 && (
                      <Sparkles
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                    {index === 1 && (
                      <Rocket
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                    {index === 2 && (
                      <TrendingUp
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                    {index === 3 && (
                      <Users
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                    {index === 4 && (
                      <Handshake
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                    {index === 5 && (
                      <Globe
                        size={32}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                text-2xl
                font-semibold
                text-[#001B4D]
                transition-all
                duration-500
                group-hover:text-white
                "
                  >
                    {item}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                mt-4
                leading-7
                text-slate-500
                transition-all
                duration-500
                group-hover:text-slate-200
                "
                  >
                    Connect with industry leaders, showcase innovative solutions
                    and create valuable business opportunities across the
                    renewable energy ecosystem.
                  </p>

                  {/* Animated Line */}
                  <div
                    className="
                mt-6
                h-1
                w-12
                rounded-full
                bg-orange-500
                transition-all
                duration-500
                group-hover:w-24
                "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Booth Packages */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Booth
              <span className="text-orange-500"> Packages</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Reserve your exhibition space and position your brand among the
              industry's leading innovators at RE-PAX India 2026.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Standard Booth",
                size: "6 sqm",
                price: "₹80,000",
                color: "bg-white",
                description:
                  "Ideal for startups and small businesses looking to establish their presence.",
                features: [
                  "Standard Booth Space",
                  "Company Listing",
                  "2 Delegate Passes",
                  "Branding Support",
                  "Networking Access",
                ],
              },
              {
                title: "Premium Booth",
                size: "9 sqm",
                price: "₹1,00,000",
                popular: true,
                color: "bg-[#255B7D]",
                description:
                  "Perfect for established companies seeking greater visibility.",
                features: [
                  "Prime Booth Location",
                  "Premium Branding",
                  "4 Delegate Passes",
                  "Website Feature",
                  "Social Media Mention",
                  "Business Matchmaking Support",
                ],
              },
              {
                title: "Custom Pavilion",
                size: "12+ sqm",
                price: "₹1,50,000",
                color: "bg-white",
                description:
                  "Designed for organizations looking to create an immersive brand experience.",
                features: [
                  "Large Custom Space",
                  "Bespoke Booth Design",
                  "Product Demonstration Area",
                  "Meeting Lounge",
                  "VIP Passes",
                  "Dedicated Branding Opportunities",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[32px] ${
                  item.color
                } p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
              >
                {item.popular && (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-orange-500 px-6 py-2 text-sm font-semibold text-white">
                    MOST POPULAR
                  </span>
                )}

                <h3
                  className={`text-3xl font-bold ${
                    item.popular ? "text-white" : "text-[#001B4D]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    item.popular ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>

                <p
                  className={`mt-2 ${
                    item.popular ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  Booth Size • {item.size}
                </p>

                <div
                  className={`mt-8 text-5xl font-bold ${
                    item.popular ? "text-orange-400" : "text-orange-500"
                  }`}
                >
                  {item.price}
                </div>

                <ul className="mt-10 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 ${
                        item.popular ? "text-white" : "text-slate-700"
                      }`}
                    >
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setOpenBoothModal(true)}
                  className={`mt-10 w-full rounded-full py-4 font-semibold transition ${
                    item.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-[#255B7D] text-white hover:bg-[#1B4966]"
                  }`}
                >
                  Book Booth
                </button>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <p className="mt-12 text-center text-sm text-slate-500">
            * Our team will help you select the best booth location, recommend
            branding opportunities, and ensure a successful exhibition
            experience.
          </p>
        </div>
      </section>

      <BoothBookingModal
        open={openBoothModal}
        onClose={() => setOpenBoothModal(false)}
      />

      {/* Exhibition Features */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Exhibition <span className="text-orange-500">Features</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Every exhibitor at RE-PAX India benefits from premium features
              designed to maximize your brand exposure and business
              opportunities.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exhibitionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#0A3F63] hover:shadow-2xl"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#0A3F63] via-[#0C4F7A] to-[#0A3F63] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/15">
                    <Award
                      size={22}
                      className="text-orange-500 transition-colors duration-500 group-hover:text-white"
                    />
                  </div>

                  {/* Text */}
                  <span className="font-medium leading-7 text-slate-700 transition-colors duration-500 group-hover:text-white">
                    {feature}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Categories */}
      <section className="bg-[#255B7D] py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white">
              Industries
              <span className="text-orange-400"> Represented</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              The exhibition covers the complete renewable energy value chain,
              showcasing innovations across the entire ecosystem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <div
                key={index}
                className="
            group
            relative
            overflow-hidden
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-3
            hover:scale-105
            "
              >
                {/* Orange Hover Overlay */}
                <div
                  className="
              absolute
              inset-0
              translate-y-full
              bg-orange-500
              transition-all
              duration-500
              group-hover:translate-y-0
              "
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                transition-all
                duration-500
                group-hover:bg-white/20
                "
                  >
                    <div className="text-orange-500 transition-all duration-500 group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>

                  <h3
                    className="
                mt-6
                text-xl
                font-semibold
                text-[#001B4D]
                transition-all
                duration-500
                group-hover:text-white
                "
                  >
                    {item.name}
                  </h3>

                  <div
                    className="
                mx-auto
                mt-4
                h-1
                w-10
                rounded-full
                bg-orange-500
                transition-all
                duration-500
                group-hover:w-20
                group-hover:bg-white
                "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Profile */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Who Will Visit
              <span className="text-orange-500"> Your Booth?</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              RE-PAX India attracts professionals from every segment of the
              renewable energy industry, ensuring exhibitors connect with the
              right audience.
            </p>
          </div>

          {/* Visitor Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {visitorProfile.map((profile, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="rounded-full bg-[#255B7D]/10 px-6 py-3 text-sm font-medium text-[#255B7D] transition hover:bg-[#255B7D] hover:text-white"
              >
                {profile}
              </motion.span>
            ))}
          </div>

          {/* Why Visitors Visit */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-3xl font-bold text-[#001B4D]">
              Why Visitors Visit
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Discover innovative renewable energy technologies",
                "Compare products from leading companies",
                "Meet manufacturers directly",
                "Explore business partnerships",
                "Evaluate suppliers",
                "Find EPC partners",
                "Learn about government initiatives",
                "Identify investment opportunities",
                "Understand the latest market trends",
                "Source products for upcoming projects",
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-slate-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why RE-PAX Exhibition */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] bg-[#255B7D] p-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-orange-400">
                  Why RE-PAX Exhibition?
                </span>
                <h2 className="mt-6 text-4xl font-bold text-white">
                  Beyond Traditional Exhibitions
                </h2>
                <p className="mt-4 text-lg text-slate-200">
                  Unlike traditional trade exhibitions, RE-PAX integrates the
                  exhibition with a conference, networking sessions, leadership
                  awards, and business meetings. This means exhibitors don't
                  just display products—they engage in meaningful conversations
                  with key stakeholders, creating opportunities that extend well
                  beyond the event.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setOpenBoothModal(true)}
                    className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Book Your Booth
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                {[
                  "Conference Sessions",
                  "Networking Sessions",
                  "Leadership Awards",
                  "Business Meetings",
                  "Product Launches",
                  "Strategic Partnerships",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Exhibitors */}
      <section className="bg-[#1E5676] py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white">
              Ideal <span className="text-orange-400">Exhibitors</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              RE-PAX India welcomes exhibitors from across the renewable energy
              ecosystem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Solar Equipment Manufacturers",
              "Battery Manufacturers",
              "Renewable Energy Developers",
              "EPC Companies",
              "Technology Companies",
              "Software Providers",
              "Automation Companies",
              "EV Charging Solution Providers",
              "Green Hydrogen Companies",
              "Financial Institutions",
              "Testing & Certification Organizations",
              "Research Institutions",
              "Government Agencies",
              "Industry Associations",
              "Sustainability Consultants",
            ].map((exhibitor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white p-5 shadow-md transition-all duration-300 hover:border-orange-400 hover:shadow-2xl"
              >
                <div className="h-3 w-3 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-150" />

                <span className="font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#1E5676]">
                  {exhibitor}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build the Future Together */}
      <section className="relative overflow-hidden bg-white py-28">
        {/* Background Blur */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-70" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[40px] bg-[#255B7D] px-8 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:px-16"
          >
            {/* Badge */}
            <div className="flex justify-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-orange-300 backdrop-blur">
                Join RE-PAX India 2026
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-center text-5xl font-bold leading-tight text-white">
              Let's Build the
              <span className="text-orange-400"> Future Together</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-500" />

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-200">
              The exhibition is where innovation meets opportunity. Whether
              you're introducing breakthrough technologies, expanding your
              customer base, or strengthening your market position, RE-PAX India
              offers the ideal platform to achieve your business objectives.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Join hundreds of renewable energy professionals and showcase your
              innovations to investors, policymakers, EPC companies, developers,
              and decision-makers shaping India's sustainable future.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <button
                onClick={() => setOpenBoothModal(true)}
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600"
              >
                Book Exhibition Booth →
              </button>

              <button className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#255B7D]">
                Download Exhibition Brochure
              </button>

              <button className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#255B7D]">
                Contact Exhibition Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

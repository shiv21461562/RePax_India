"use client";

import { useState } from "react";
import BoothBookingModal from "@/components/BoothBookingModal";

import { motion } from "framer-motion";
import { Building2, Users, Globe, Handshake, ArrowRight } from "lucide-react";

export default function Page() {
  const [openBoothModal, setOpenBoothModal] = useState(false);

  const benefits = [
    "Connect with Industry Leaders",
    "Showcase Innovative Solutions",
    "Generate Qualified Business Leads",
    "Meet Decision Makers",
    "Expand Brand Visibility",
    "Build Strategic Partnerships",
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
            REPAY SUMMIT 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Connect With The Future Of
            <span className="block text-orange-400">Payment Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-200"
          >
            Discover next-generation payment technologies, fintech solutions and
            digital commerce innovations from leading industry exhibitors.
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
              ["2+", "Sessions + Awards"],

              ["50+", "Partners"],
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
              Why
              <span className="text-orange-500"> Exhibit?</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Showcase your innovations, connect with decision makers, generate
              qualified leads and build strategic partnerships within the
              payments and fintech ecosystem.
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
                    <Handshake
                      size={32}
                      className="
                text-orange-500
                transition-all
                duration-500
                group-hover:text-white
                "
                    />
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
                    payments ecosystem.
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
              Choose the exhibition package that best fits your business goals
              and maximize your brand exposure during REPAY Summit 2026.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Standard",
                size: "6 sqm",
                price: "₹80,000",
                color: "bg-white",
                features: [
                  "Company Branding",
                  "Power Supply",
                  "Basic Furniture",
                  "2 Delegate Passes",
                  "Listing on Website",
                ],
              },
              {
                title: "Premium",
                size: "9 sqm",
                price: "₹1,00,000",
                popular: true,
                color: "bg-[#255B7D]",
                features: [
                  "Prime Location",
                  "Premium Branding",
                  "LED Display",
                  "4 Delegate Passes",
                  "Networking Access",
                  "Social Media Promotion",
                ],
              },
              {
                title: "Platinum",
                size: "12 sqm",
                price: "₹1,50,000",
                color: "bg-white",
                features: [
                  "Largest Booth",
                  "VIP Branding",
                  "Meeting Lounge",
                  "8 Delegate Passes",
                  "Speaking Opportunity",
                  "Media Coverage",
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
        </div>
      </section>

      <BoothBookingModal
        open={openBoothModal}
        onClose={() => setOpenBoothModal(false)}
      />



      

      {/* Floor Plan */}

      {/* Featured Areas */}
      <section className="bg-[#255B7D] py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white">
              Exhibition
              <span className="text-orange-400"> Categories</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Explore cutting-edge technologies, innovative solutions and
              future-ready platforms shaping the payments ecosystem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Digital Payments",
              "Fintech Solutions",
              "Banking Technology",
              "Cybersecurity",
              "AI & Automation",
              "UPI Innovations",
              "Cloud Services",
              "Financial Platforms",
            ].map((item, index) => (
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
                    <Building2
                      size={32}
                      className="
                text-orange-500
                transition-all
                duration-500
                group-hover:text-white
                "
                    />
                  </div>

                  <h3
                    className="
              mt-6
              text-lg
              font-semibold
              text-[#001B4D]
              transition-all
              duration-500
              group-hover:text-white
              "
                  >
                    {item}
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

      {/* Exhibitor List */}

      {/* Exhibition Categories */}

      {/* Visitor Profile */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Visitor
              <span className="text-orange-500"> Profile</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Meet decision makers, buyers, innovators and industry leaders
              driving the future of payments and financial technology.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users size={50} />,
                title: "Business Leaders",
                desc: "CXOs, Founders, Directors and key decision makers.",
              },
              {
                icon: <Globe size={50} />,
                title: "Global Buyers",
                desc: "International delegates seeking innovative solutions.",
              },
              {
                icon: <Building2 size={50} />,
                title: "Technology Providers",
                desc: "Fintech companies, banks and digital innovators.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
group
relative
min-h-[320px]
rounded-[30px]
border border-slate-200
bg-white
p-8
shadow-lg
transition-all
duration-500
hover:-translate-y-3
hover:border-orange-500
hover:shadow-2xl
"
              >
                {/* Top Orange Bar */}
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

                {/* Circle */}
                <div
                  className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-orange-100
            transition-all
            duration-500
            group-hover:bg-[#255B7D]
            "
                >
                  <div className="text-orange-500 transition-all duration-500 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                <h3
                  className="
            mt-8
            text-center
            text-2xl
            font-bold
            text-[#001B4D]
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
            mt-4
            text-center
            leading-7
            text-slate-600
            "
                >
                  {item.desc}
                </p>

                {/* Bottom Arrow */}
                <div
                  className="
            mt-8
            flex
            justify-center
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            "
                >
                  <div className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                    Explore
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-[#255B7D] p-16 text-center text-white">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-orange-400">
              REPAY EXHIBITION 2026
            </span>

            <h2 className="mt-8 text-4xl font-bold md:text-5xl">
              Showcase Your Brand at REPAY 2026
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Reserve your exhibition space and connect with thousands of
              industry professionals, buyers and fintech innovators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


"use client";

import { motion } from "framer-motion";
import {
  Award,
  Sun,
  Battery,
  Droplets,
  Car,
  Cpu,
  Leaf,
} from "lucide-react";

export default function ExhibitionAudience() {
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

  const industries = [
    { name: "Solar Energy", icon: Sun },
    { name: "Energy Storage", icon: Battery },
    { name: "Green Hydrogen", icon: Droplets },
    { name: "Electric Mobility", icon: Car },
    { name: "Smart Grid", icon: Cpu },
    { name: "Sustainable Tech", icon: Leaf },
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

  const visitorReasons = [
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
  ];

  const idealExhibitors = [
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
  ];

  return (
    <>
      {/* Exhibition Features */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <h2 className="mt-5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#001B4D]">
              Exhibition{" "}
              <span className="text-orange-500">Features</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Every exhibitor at RE-PAX India benefits from premium features
              designed to maximize your brand exposure and business
              opportunities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exhibitionFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#0A3F63] hover:shadow-2xl"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#0A3F63] via-[#0C4F7A] to-[#0A3F63] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/15">
                    <Award
                      size={22}
                      className="text-orange-500 transition-colors duration-500 group-hover:text-white"
                    />
                  </div>

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

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Represented */}
      <section className="bg-[#255B7D] py-28">
        <div className="mx-auto max-w-7xl px-6">

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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 translate-y-full bg-orange-500 transition-all duration-500 group-hover:translate-y-0" />

                  <div className="relative z-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-500 group-hover:bg-white/20">
                      <Icon
                        size={28}
                        className="text-orange-500 transition-all duration-500 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#001B4D] transition-all duration-500 group-hover:text-white">
                      {item.name}
                    </h3>

                    <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visitor Profile */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <h2 className="mt-5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#001B4D]">
              Who Will Visit{" "}
              <span className="text-orange-500">Your Booth?</span>
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
                key={profile}
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
              {visitorReasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-slate-700">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Exhibitors */}
      <section className="bg-[#1E5676] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <h2 className="mt-5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
              Ideal{" "}
              <span className="text-orange-400">Exhibitors</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              RE-PAX India welcomes exhibitors from across the renewable energy
              ecosystem.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {idealExhibitors.map((exhibitor, index) => (
              <motion.div
                key={exhibitor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
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
    </>
  );
}

"use client";

import {
  Sun,
  RefreshCw,
  Globe2,
  Cpu,
  LineChart,
  Building2,
} from "lucide-react";

const themes = [
  {
    title: "Renewable Energy",
    icon: Sun,
    description:
      "Exploring solar, wind, and clean energy innovations for a sustainable future.",
  },
  {
    title: "Circular Economy",
    icon: RefreshCw,
    description:
      "Strategies to reduce waste and maximize resource efficiency across industries.",
  },
  {
    title: "Climate Action",
    icon: Globe2,
    description:
      "Global initiatives and policies driving climate resilience and net-zero goals.",
  },
  {
    title: "Green Technology",
    icon: Cpu,
    description:
      "Innovative technologies transforming sustainability and environmental impact.",
  },
  {
    title: "ESG & Sustainability",
    icon: LineChart,
    description:
      "Best practices for integrating ESG principles into business operations.",
  },
  {
    title: "Smart Infrastructure",
    icon: Building2,
    description:
      "Building sustainable cities through intelligent infrastructure solutions.",
  },
];

export default function ConferenceThemes() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            Conference Themes
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Explore Key Discussion Areas
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Discover the most important topics shaping sustainability,
            innovation, climate action, and future-ready development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => {
            const Icon = theme.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(11,58,99,0.25)]
                "
              >
                {/* Hover Background */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#0B3A63]
                    via-[#114D7E]
                    to-[#0B3A63]
                    translate-x-[-100%]
                    group-hover:translate-x-0
                    transition-transform
                    duration-700
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      mb-6
                      transition-all
                      duration-500
                      group-hover:bg-white/15
                    "
                  >
                    <Icon
                      size={30}
                      className="
                        text-orange-500
                        group-hover:text-orange-300
                        transition-colors
                        duration-500
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                      mb-3
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  >
                    {theme.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-slate-600
                      leading-relaxed
                      transition-colors
                      duration-500
                      group-hover:text-slate-200
                    "
                  >
                    {theme.description}
                  </p>

                  {/* Bottom line */}
                  <div
                    className="
                      mt-6
                      h-[3px]
                      w-12
                      rounded-full
                      bg-orange-400
                      transition-all
                      duration-500
                      group-hover:w-24
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

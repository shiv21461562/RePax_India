
"use client";

import { Trophy, Users, Star } from "lucide-react";

export default function WhyParticipate() {
  const benefits = [
    {
      icon: <Trophy size={50} />,
      title: "Industry Recognition",
      desc: "Get recognized for outstanding achievements and innovation.",
    },
    {
      icon: <Users size={50} />,
      title: "Brand Visibility",
      desc: "Increase visibility among industry leaders and decision makers.",
    },
    {
      icon: <Star size={50} />,
      title: "Market Leadership",
      desc: "Position your organization as a leader in the industry.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#001B4D] sm:text-3xl md:text-4xl">
            Why{" "}
            <span className="text-orange-500">
              Participate?
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Gain industry recognition, strengthen your brand presence and
            showcase excellence before leaders in the fintech ecosystem.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Top Line Animation */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

              {/* Icon Circle */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 transition-all duration-500 group-hover:bg-[#255B7D]">
                <div className="text-orange-500 transition-all duration-500 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-center text-2xl font-bold text-[#001B4D]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-center leading-7 text-slate-600">
                {item.desc}
              </p>

              {/* Bottom Button */}
              <div className="mt-8 flex justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

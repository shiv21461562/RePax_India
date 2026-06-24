"use client";

import {
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiBriefcase,
  FiTarget,
  FiAward,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiUsers size={28} />,
    title: "Network with Industry Leaders",
    description:
      "Connect with top decision-makers, innovators, investors, and global industry experts.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Discover Emerging Trends",
    description:
      "Gain insights into the latest technologies, sustainability initiatives, and market opportunities.",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Global Perspectives",
    description:
      "Learn from international speakers and organizations driving transformation worldwide.",
  },
  {
    icon: <FiBriefcase size={28} />,
    title: "Business Opportunities",
    description:
      "Explore partnerships, collaborations, investments, and growth opportunities.",
  },
  {
    icon: <FiTarget size={28} />,
    title: "Actionable Insights",
    description:
      "Attend expert-led sessions designed to provide practical strategies and real-world solutions.",
  },
  {
    icon: <FiAward size={28} />,
    title: "Innovation Showcase",
    description:
      "Experience groundbreaking products, services, and innovations shaping the future.",
  },
];

export default function WhyAttend() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold">
            WHY ATTEND
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Why Attend RePax India 2026?
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Join industry pioneers, policymakers, investors, innovators, and
            sustainability leaders for meaningful discussions, networking, and
            business opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:border-green-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Be Part of the Future of Sustainability & Innovation
            </h3>

            <p className="max-w-2xl mx-auto text-green-50 mb-8">
              Connect, collaborate, and create impact with leaders driving the
              next generation of sustainable growth.
            </p>

            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import {
  FaHandshake,
  FaBullhorn,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaAward,
  FaGlobe,
  FaMicrophone,
  FaBuilding,
  FaLightbulb,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";

export default function SponsorshipPage() {
  return (
    <>
      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
            RE PAX INDIA 2026
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-5xl">
            <span className="text-slate-900">Sponsorship </span>
            <span className="text-orange-500">Opportunities</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Showcase your organization at
            <span className="font-semibold text-slate-900">
              {" "}
              RE PAX India Summit
            </span>{" "}
            and connect with policymakers, investors, EPC companies,
            manufacturers, developers, startups, and renewable energy leaders
            from across India.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Sponsoring RE PAX provides an excellent platform to enhance your
            brand visibility, generate high-value business opportunities, launch
            innovative solutions, and establish meaningful partnerships within
            India's growing clean energy ecosystem.
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              WHY SPONSOR
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Why Become a Sponsor?
            </h2>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
              RE PAX India Summit brings together renewable energy leaders,
              investors, government officials, EPC companies, utilities,
              manufacturers and technology innovators from across India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

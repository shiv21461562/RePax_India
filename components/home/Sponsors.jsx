"use client";

import Image from "next/image";

const sponsors = [
  {
    name: "Microsoft",
    logo: "/images/sponsors/microshoft.png",
  },
  {
    name: "Google",
    logo: "/images/sponsors/google2.png",
  },
  {
    name: "Amazon",
    logo: "/images/sponsors/amazon.png",
  },
  {
    name: "Tesla",
    logo: "/images/sponsors/tesla.png",
  },

  {
    name: "IBM",
    logo: "/images/sponsors/IBM2.png",
  },
  {
    name: "Adobe",
    logo: "/images/sponsors/Adobe.png",
  },
  {
    name: "Oracle",
    logo: "/images/sponsors/oracle.png",
  },
];

export default function Sponsors() {
  const items = [...sponsors, ...sponsors];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            Sponsors & Partners
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted By Industry Leaders
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600">
            Join leading organizations shaping the future of renewable energy.
            Explore sponsorship, exhibition, media partnership, and strategic
            collaboration opportunities to expand your reach and connect with
            industry leaders.
          </p>
        </div>
      </div>

      {/* Sponsors Slider */}
      <div className="relative">
        <div className="sponsor-slider flex gap-6 w-max">
          {items.map((sponsor, index) => (
            <div
              key={index}
              className="group flex items-center justify-center min-w-[220px] h-[120px] rounded-3xl border border-slate-200 bg-white hover:border-orange-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center px-4">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 mb-3">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Company Name */}
                <h3 className="font-semibold text-slate-900">{sponsor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

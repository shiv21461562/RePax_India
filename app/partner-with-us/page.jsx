"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Handshake,
  Lightbulb,
  Landmark,
  Megaphone,
  Users,
  Leaf,
  Cpu,
} from "lucide-react";

const partnerTypes = [
  {
    title: "Industry Partner",
    icon: <Handshake size={42} className="text-orange-500" />,
    desc: "Collaborate with India's leading renewable energy companies.",
  },
  {
    title: "Knowledge Partner",
    icon: <Lightbulb size={42} className="text-orange-500" />,
    desc: "Share research, innovation and industry expertise.",
  },
  {
    title: "Government Partner",
    icon: <Landmark size={42} className="text-orange-500" />,
    desc: "Support policy discussions and sustainable development.",
  },
  {
    title: "Media Partner",
    icon: <Megaphone size={42} className="text-orange-500" />,
    desc: "Increase brand visibility through media collaboration.",
  },
  {
    title: "Association Partner",
    icon: <Users size={42} className="text-orange-500" />,
    desc: "Strengthen industry relationships and networking.",
  },
  {
    title: "Sustainability Partner",
    icon: <Leaf size={42} className="text-orange-500" />,
    desc: "Promote green initiatives and clean energy adoption.",
  },
  {
    title: "Technology Partner",
    icon: <Cpu size={42} className="text-orange-500" />,
    desc: "Showcase next-generation renewable technologies.",
  },
];

export default function PartnerWithUs() {
  return (
    <main className="bg-white">

      {/* HERO */}

  <section className="relative min-h-screen flex items-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/partnerBG1.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/95 via-[#061326]/70 to-[#061326]/40"></div>




  <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">

    <div className="max-w-3xl">

      <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-orange-400 backdrop-blur">
        Strategic Partnership
      </span>

      <h1 className="mt-8 text-5xl md:text-5xl xl:text-5xl font-black leading-tight text-white">
        Partner With
        <br />
        <span className="text-orange-500">
          RE-PAX India
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">
        Join India's fastest-growing renewable energy conference and
        showcase your brand before manufacturers, EPC companies,
        investors, policymakers, utilities and technology innovators.
      </p>

      <div className="mt-12 flex flex-wrap gap-5">

        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-9 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
        >
          Become A Partner →
        </Link>

     

      </div>

    </div>

  </div>

</section>

    

      {/* PARTNERSHIP TYPES */}

   {/* PARTNERSHIP TYPES */}

<section className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
        Partnership Opportunities
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black text-slate-900">
        Partnership Types
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
        Choose the partnership model that best aligns with your
        organization and maximize your visibility before India's
        leading renewable energy decision makers.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {partnerTypes.map((item) => (

        <div
          key={item.title}
          className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-4]"
        >

          {/* Animated Background */}
<div className="absolute inset-0 origin-left scale-x-0 bg-[#1F5673] transition-transform duration-700 ease-out group-hover:scale-x-100"></div>

          {/* Top Border */}
          <div className="absolute left-0 top-0 h-1 w-0 bg-white transition-all duration-700 group-hover:w-full"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white">

              <div className="text-orange-500 transition-all duration-500">
                {item.icon}
              </div>

            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-5 leading-8 text-slate-500 transition-colors duration-500 group-hover:text-orange-100">
              {item.desc}
            </p>

           

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}
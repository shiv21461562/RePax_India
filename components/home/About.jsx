"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";

import { useRouter } from "next/navigation";

export default function About() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FadeUp>
        <section className="py-24 bg-[#0B3A63] relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-bold tracking-widest uppercase">
                  ABOUT RE-PAX INDIA
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                  India's Most Influential
                  <span className="block text-orange-400">
                    Renewable Energy
                  </span>
                  Business Networking Platform
                </h2>

                <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                  RE-PAX India is a premier conference and networking platform
                  dedicated to accelerating the growth of India's renewable
                  energy sector.
                </p>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  Organized by Renewable Mirror, the event brings together
                  manufacturers, EPC contractors, developers, investors,
                  government officials, policymakers, technology innovators and
                  sustainability experts to collaborate, share knowledge, and
                  drive India's clean energy transition.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Business Networking</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Knowledge Sharing</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Strategic Partnerships</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Market Expansion</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Innovation Showcase</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-orange-400">✓</span>
                    <span>Leadership Awards</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    onClick={() => router.push("/register")}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300"
                  >
                    Register Now
                  </button>
                  <Link
                    href="/about"
                    className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* RIGHT - Stats Cards */}
              <div className="grid grid-cols-2 gap-5">
                <div className="group bg-white rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-[#0B3A63]">200+</h3>
                  <p className="mt-2 text-slate-600">Industry Delegates</p>
                </div>

                <div className="group bg-orange-50 rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-orange-500">20+</h3>
                  <p className="mt-2 text-slate-600">Industry Speakers</p>
                </div>

                <div className="group bg-white rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-[#0B3A63]">50+</h3>
                  <p className="mt-2 text-slate-600">Leading Companies</p>
                </div>

                <div className="group bg-orange-50 rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-orange-500">15+</h3>
                  <p className="mt-2 text-slate-600">Award Categories</p>
                </div>

                <div className="col-span-2 group bg-gradient-to-r from-[#FF8A00] to-[#FFB347] rounded-3xl p-8 text-white border border-transparent hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.30)] transition-all duration-300">
                  <h3 className="text-2xl font-bold">Why RE-PAX India?</h3>

                  <p className="mt-3 text-white/90 leading-relaxed">
                    Connect with manufacturers, EPC companies, developers,
                    investors, policymakers and technology providers while
                    discovering new business opportunities and strategic
                    partnerships. Join India's premier renewable energy
                    conference, expo & leadership awards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

   
    </>
  );
}

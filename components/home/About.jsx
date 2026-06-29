"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import RegisterModal from "@/components/RegisterModal";

export default function About() {
  const [openModal, setOpenModal] = useState(false);

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

                <h2 className="mt-6 text-4xl md:text-4xl font-bold text-white leading-tight">
                  Empowering India's Renewable Energy Ecosystem Through
                  Collaboration,
                  <span className="text-orange-400">
                    {" "}
                    Innovation & Leadership
                  </span>
                </h2>

                <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                  India's renewable energy sector is undergoing a remarkable
                  transformation. As the nation accelerates toward its ambitious
                  clean energy targets, the demand for innovation,
                  collaboration, and strategic partnerships continues to grow.
                </p>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  RE-PAX India is a premier business networking and
                  knowledge-sharing platform that brings together manufacturers,
                  EPC contractors, developers, investors, policymakers,
                  technology providers, and sustainability leaders to drive
                  collaboration and accelerate India's clean energy future.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    onClick={() => setOpenModal(true)}
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

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-5">
                <div className="group bg-white rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-[#0B3A63]">7+</h3>

                  <p className="mt-2 text-slate-600">
                    Years of Conference Excellence
                  </p>
                </div>

                <div className="group bg-orange-50 rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                  <h3 className="text-4xl font-bold text-orange-500">20</h3>

                  <p className="mt-2 text-slate-600">Speakers</p>
                </div>

                <div className="col-span-2 group bg-gradient-to-r from-[#FF8A00] to-[#FFB347] rounded-3xl p-8 text-white border border-transparent hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.30)] transition-all duration-300">
                  <h3 className="text-2xl font-bold">
                    Driving India's Renewable Energy Ecosystem
                  </h3>

                  <p className="mt-3 text-white/90 leading-relaxed">
                    Connect with manufacturers, EPC companies, developers,
                    investors, policymakers and technology providers while
                    discovering new business opportunities and strategic
                    partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
      <RegisterModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
      />
    </>
  );
}

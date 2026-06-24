"use client";

import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <FadeUp>
      <section className="py-24 bg-[#0B3A63] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-bold tracking-widest uppercase">
                About The Conference
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Shaping a Sustainable
                <span className="text-orange-400"> Future Together</span>
              </h2>

              <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                Join global leaders, sustainability experts, innovators and
                policymakers for an inspiring conference focused on solving
                tomorrow's environmental and energy challenges.
              </p>

              <p className="mt-5 text-slate-400 leading-relaxed">
                Through keynote sessions, networking opportunities, workshops
                and industry collaborations, participants gain actionable
                insights, discover emerging technologies and build meaningful
                connections.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300">
                  Register Now
                </button>

                <button className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="group bg-white rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                <h3 className="text-4xl font-bold text-[#0B3A63]">10+</h3>
                <p className="mt-2 text-slate-600">
                  Years of Conference Excellence
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-orange-50 rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                <h3 className="text-4xl font-bold text-orange-500">120+</h3>
                <p className="mt-2 text-slate-600">
                  International Speakers
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#FFF7ED] rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                <h3 className="text-4xl font-bold text-orange-500">50+</h3>
                <p className="mt-2 text-slate-600">
                  Participating Countries
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-white rounded-3xl p-7 border border-transparent hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.20)] transition-all duration-300">
                <h3 className="text-4xl font-bold text-[#0B3A63]">5000+</h3>
                <p className="mt-2 text-slate-600">
                  Global Attendees
                </p>
              </div>

              {/* Large Bottom Card */}
              <div className="col-span-2 group bg-gradient-to-r from-[#FF8A00] to-[#FFB347] rounded-3xl p-8 text-white border border-transparent hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.30)] transition-all duration-300">
                <h3 className="text-2xl font-bold">
                  Building Connections That Matter
                </h3>

                <p className="mt-3 text-white/90 leading-relaxed">
                  Connect with decision-makers, innovators and sustainability
                  professionals from around the globe through meaningful
                  discussions, networking opportunities and collaborative
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
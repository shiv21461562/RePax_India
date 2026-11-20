
"use client";

import { motion } from "framer-motion";

export default function ExhibitionCTA({ onBook }) {
  const exhibitionHighlights = [
    "Conference Sessions",
    "Networking Sessions",
    "Leadership Awards",
    "Business Meetings",
    "Product Launches",
    "Strategic Partnerships",
  ];

  return (
    <>
      {/* Why RE-PAX Exhibition */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] bg-[#255B7D] p-8 md:p-16">
            <div className="grid gap-12 md:grid-cols-2">

              {/* Left Content */}
              <div>
                <div className="flex items-center justify-center gap-5">
                  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

                  <span className="font-poppins text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.18em] text-white text-center whitespace-nowrap">
                    Why RE-PAX Exhibition?
                  </span>

                  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
                </div>

                <h2 className="mt-5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                  Beyond Traditional Exhibitions
                </h2>

                <p className="mt-4 text-lg text-slate-200">
                  Unlike traditional trade exhibitions, RE-PAX integrates the
                  exhibition with a conference, networking sessions, leadership
                  awards, and business meetings. This means exhibitors don't
                  just display products—they engage in meaningful conversations
                  with key stakeholders, creating opportunities that extend
                  well beyond the event.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={onBook}
                    className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Book Your Booth
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center gap-4">
                {exhibitionHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Let's Build the Future Together */}
      <section className="relative overflow-hidden bg-white py-28">

        {/* Background Blur */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-100 opacity-70 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-100 opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[40px] bg-[#255B7D] px-8 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:px-16"
          >

            {/* Badge */}
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-5">
                <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

                <span className="font-poppins text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.18em] text-white text-center whitespace-nowrap">
                  Join RE-PAX India 2026
                </span>

                <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-center font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
              Let's Build the{" "}
              <span className="text-orange-400">
                Future Together
              </span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-500" />

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-200">
              The exhibition is where innovation meets opportunity. Whether
              you're introducing breakthrough technologies, expanding your
              customer base, or strengthening your market position, RE-PAX India
              offers the ideal platform to achieve your business objectives.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Join hundreds of renewable energy professionals and showcase your
              innovations to investors, policymakers, EPC companies, developers,
              and decision-makers shaping India's sustainable future.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                type="button"
                onClick={onBook}
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600"
              >
                Book Exhibition Booth →
              </button>

              <button
                type="button"
                className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#255B7D]"
              >
                Download Exhibition Brochure
              </button>

              <button
                type="button"
                className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#255B7D]"
              >
                Contact Exhibition Team
              </button>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinMovement() {
  const cards = [
    {
      label: "FOR VISITORS & DELEGATES",
      title: "Register for RE-PAX India",
      description:
        "Be part of India's renewable energy gathering. Connect with industry professionals, explore new opportunities, and discover the latest innovations shaping the energy sector.",
      button: "Register Now",
      href: "/register",
      variant: "blue",
    },
    {
      label: "FOR INDUSTRY PARTNERS",
      title: "Become a Sponsor",
      description:
        "Showcase your brand, connect with key decision-makers, strengthen your industry presence, and unlock valuable business opportunities through strategic sponsorship.",
      button: "Explore Sponsorship",
      href: "/contact",
      variant: "white",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
            Be Part of the Change
          </span>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Future of Energy Is{" "}
            <span className="text-orange-500">Renewable</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Join RE-PAX India and become part of the movement shaping
            India's renewable energy future. Connect, collaborate,
            and create new opportunities.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-500" />
        </motion.div>

        {/* CTA Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const isBlue = card.variant === "blue";

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className={`group relative flex min-h-[340px] flex-col items-center overflow-hidden rounded-2xl border p-8 text-center shadow-md transition-all duration-300 hover:border-[#F5A000] hover:shadow-[0_15px_35px_rgba(245,160,0,0.15)] md:p-9 ${
                  isBlue
                    ? "border-[#2D6A8C] bg-[#1f5678] text-white"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {/* Golden Top Accent */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#F5A000] transition-all duration-500 group-hover:w-full" />

                {/* Card Content */}
                <div className="flex flex-1 flex-col items-center justify-center">
                  <span
                    className={`mb-5 text-[11px] font-bold uppercase tracking-[0.2em] ${
                      isBlue ? "text-orange-300" : "text-orange-600"
                    }`}
                  >
                    {card.label}
                  </span>

                  <h3 className="text-2xl font-extrabold leading-snug md:text-[28px]">
                    {card.title}
                  </h3>

                  <p
                    className={`mx-auto mt-4 max-w-md text-sm leading-7 ${
                      isBlue ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={card.href}
                  className={`mt-8 inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 ${
                    isBlue
                      ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg"
                      : "bg-[#1f5678] text-white hover:bg-orange-500 hover:shadow-lg"
                  }`}
                >
                  {card.button}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Bottom Accent */}
                <div
                  className={`mt-7 h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-20 ${
                    isBlue ? "bg-orange-400" : "bg-orange-500"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-xs font-medium tracking-wide text-slate-400"
        >
          Connect. Collaborate. Innovate. Build a Sustainable Future.
        </motion.p>

      </div>
    </section>
  );
}

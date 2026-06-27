"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can attend RE-PAX India?",
    answer:
      "RE-PAX India welcomes industry professionals, solar manufacturers, EPC companies, project developers, investors, government officials, policymakers, consultants, startups, researchers, academia, technology providers, and sustainability leaders looking to explore opportunities in India's renewable energy sector.",
  },
  {
    question: "How can I become a sponsor?",
    answer:
      "Choose from our range of sponsorship packages designed to maximize your brand visibility and business opportunities. Contact our event team to discuss customized sponsorship and branding solutions tailored to your organization's objectives.",
  },
  {
    question: "Can I nominate my company for the Leadership Awards?",
    answer:
      "Yes. Organizations, professionals, startups, and industry leaders can submit nominations through the official RE-PAX India Leadership Awards nomination portal. All entries will be reviewed by an independent jury panel based on the award criteria.",
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Absolutely. RE-PAX India offers dedicated networking breaks, B2B meetings, exhibition zones, investor interactions, VIP networking sessions, and the Leadership Awards Gala Dinner, providing excellent opportunities to build meaningful business relationships.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 overflow-hidden bg-[#1F567A]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F567A] via-[#225F87] to-[#184C6C]" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase">
            {" "}
            Frequently Asked Questions{" "}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            {" "}
            Everything You Need to Know About RE-PAX India{" "}
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-300">
            {" "}
            Find answers to the most common questions about attending,
            sponsoring, exhibiting, networking, and participating in RE-PAX
            India 2026.{" "}
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="max-w-5xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`overflow-hidden rounded-3xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-2xl border border-orange-400"
                    : "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/50"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors ${
                      isOpen ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-7 pb-7 border-t border-slate-100">
                        <p className="pt-5 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

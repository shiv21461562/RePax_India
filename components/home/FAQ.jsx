"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can attend RE-PAX India?",
    answer:
      "RE-PAX India welcomes professionals from renewable energy, solar manufacturing, energy storage, electric mobility, utilities, government departments, EPC contractors, finance and investment firms, manufacturing companies, technology providers, research institutions, startups, consultants, and sustainability leaders.",
  },
  {
    question: "How do I register for RE-PAX India?",
    answer:
      "You can register by completing the online registration form on our website. Simply select your delegate category, fill in your details, complete the payment process, and receive your confirmation email with event details, venue information, and access credentials.",
  },
  {
    question: "Can I nominate my company for the RE-PAX Leadership Awards?",
    answer:
      "Yes. Organizations, professionals, startups, and industry leaders can submit nominations through the official RE-PAX Leadership Awards nomination portal. All nominations will be reviewed by an independent jury panel based on innovation, impact, sustainability, and industry contribution criteria.",
  },
  {
    question: "How do I become a sponsor or exhibitor?",
    answer:
      "You can become a sponsor or exhibitor by visiting our Sponsorship page or contacting our sponsorship team directly. We offer customized packages including premium branding, speaking opportunities, exhibition booth space, award presentations, digital promotions, and VIP networking access.",
  },
  {
    question: "Will there be networking opportunities at the event?",
    answer:
      "Absolutely. RE-PAX India offers dedicated networking breaks, B2B meeting zones, exhibition areas, investor interaction sessions, VIP networking lounges, and the prestigious Leadership Awards Gala Dinner – all designed to help participants build valuable business relationships.",
  },
  {
    question: "Will I receive a participation certificate?",
    answer:
      "Yes, all registered delegates will receive an official participation certificate from RE-PAX India. The certificate recognizes your engagement in India's premier renewable energy conference and can be added to your professional credentials.",
  },
  {
    question: "Is parking available at the venue?",
    answer:
      "Yes, ample parking space is available at the venue for all attendees. The venue provides secure parking facilities with easy access to the conference halls, exhibition areas, and networking zones.",
  },
  {
    question: "Will food and refreshments be provided?",
    answer:
      "Yes, all delegates will be provided with lunch and refreshments throughout the conference day. We ensure high-quality catering services with a variety of options to accommodate different dietary preferences and requirements.",
  },
  {
    question: "What is the dress code for RE-PAX India?",
    answer:
      "The dress code for RE-PAX India is Business Formal. We recommend professional attire suitable for networking, meetings, and the Leadership Awards Gala. Business formals create the perfect environment for serious business conversations and professional interactions.",
  },
  {
    question: "Can students and researchers attend RE-PAX India?",
    answer:
      "Yes, students, researchers, and academic professionals are welcome to attend RE-PAX India. We offer special student and academic delegate passes to encourage young talent and research communities to engage with the renewable energy industry and explore career opportunities.",
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
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Everything You Need to Know About RE-PAX India
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-300">
            Find answers to the most common questions about attending,
            sponsoring, exhibiting, networking, and participating in RE-PAX
            India 2026.
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
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
  const [active, setActive] = useState(0);

  return (
   <section className="relative overflow-hidden bg-[#174D6D] py-28">
      {/* Import distinctive type pairing: Space Grotesk for display, Inter for body */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");
        .font-display {
          font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
        }
        .font-body {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>

  


      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Left column — stays put while the list scrolls on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3 text-[#F4A623]">
              <span className="h-px w-8 bg-[#F4A623]" />
              <span className="font-body text-sm font-medium">FAQ</span>
            </div>

            <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Everything you need to know before RE-PAX India
            </h2>

            <p className="font-body mt-6 max-w-md text-base leading-7 text-[#9FB4C4]">
              Answers on attending, sponsoring, exhibiting, and the
              Leadership Awards — for delegates, partners, and researchers
              joining India's renewable energy conference.
            </p>

            <a
              href="contact"
              className="font-body mt-8 inline-flex items-center gap-2 border-b border-[#F4A623]/40 pb-1 text-sm font-medium text-[#F4A623] transition-colors hover:border-[#F4A623]"
            >
              Still have a question? Get in touch
            </a>
          </motion.div>

          {/* Right column — the accordion */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="border-b border-white/10 first:border-t"
                >
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start gap-5 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A623]/60"
                  >
                    {/* Accent bar that fills in on open — encodes state, not decoration */}
                    <span className="relative mt-1.5 h-5 w-[3px] shrink-0 overflow-hidden rounded-full bg-white/15">
                      <span
                        className={`absolute inset-0 bg-[#F4A623] transition-transform duration-300 ${
                          isOpen ? "translate-y-0" : "translate-y-full"
                        }`}
                      />
                    </span>

                    <span
                      className={`font-display flex-1 text-lg font-medium leading-snug transition-colors sm:text-xl ${
                        isOpen ? "text-white" : "text-white/85 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`font-display mt-1 shrink-0 text-2xl leading-none transition-all duration-300 ${
                        isOpen ? "rotate-45 text-[#F4A623]" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-body max-w-xl pb-7 pl-[2px] pr-8 text-[15px] leading-7 text-[#B9C7D1] sm:pl-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

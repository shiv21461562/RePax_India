"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is RE-PAX India Summit & Awards?",
    answer:
      "RE-PAX India Summit & Awards is one of India's premier renewable energy conferences, bringing together policymakers, industry leaders, developers, investors, manufacturers, EPC companies, and technology innovators to discuss the future of clean energy.",
  },
  {
    question: "When and where will the event take place?",
    answer:
      "The event date and venue will be announced on the official website. Please visit the Agenda or Contact page for the latest updates.",
  },
  {
    question: "Who should attend the summit?",
    answer:
      "The summit is ideal for renewable energy companies, EPC contractors, project developers, manufacturers, investors, government officials, consultants, researchers, startups, and students interested in the clean energy sector.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register by filling out the registration form available on our website. Our team will contact you with confirmation and further details.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Registration categories and applicable fees will be mentioned on the Registration page. Early bird offers may also be available.",
  },
  {
    question: "How can I become a sponsor?",
    answer:
      "Visit our Sponsors page or contact our sponsorship team. We offer multiple sponsorship packages designed to maximize brand visibility and networking opportunities.",
  },
  {
    question: "Can I become a speaker?",
    answer:
      "Yes. Industry experts and thought leaders can submit their interest through the Contact page. Our organizing committee reviews all speaker applications.",
  },
  {
    question: "Will I receive a participation certificate?",
    answer:
      "Yes. Registered participants who attend the event will receive a digital participation certificate after the summit.",
  },
  {
    question: "Will media coverage be available?",
    answer:
      "Yes. The event includes extensive media coverage through digital platforms, print media, photography, interviews, and social media channels.",
  },
  {
    question: "How can I contact the organizing team?",
    answer:
      "You can reach us through the Contact page or by submitting an enquiry form. Our team will respond as soon as possible.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {faq.question}
        </h3>

        <ChevronDown
          className={`h-5 w-5 text-[#F97316] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 py-5 leading-8 text-slate-600">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [active, setActive] = useState(0);

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B1F35] via-[#123C63] to-[#174D6D]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Find answers to the most commonly asked questions about
            RE-PAX India Summit & Awards, registrations, sponsorship,
            speaking opportunities, and event participation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="-mt-10 pb-24 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={active === index}
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-24 px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#123C63] via-[#123C63] to-[#123C63] px-8 py-16 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">
            Our team is happy to assist you with registrations,
            sponsorship opportunities, speaking requests, partnerships,
            or any other queries related to RE-PAX India Summit & Awards.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
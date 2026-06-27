export default function TermsAndConditionsPage() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the RE-PAX India website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website and services.",
    },
    {
      title: "2. Event Registration",
      content:
        "Registration for the RE-PAX India Summit & Awards is subject to availability. The organizing committee reserves the right to accept, reject, or cancel registrations at its sole discretion.",
    },
    {
      title: "3. Payments & Refunds",
      content:
        "Any applicable registration or sponsorship fees must be paid within the specified timeline. Refund requests will be processed only according to the official cancellation policy communicated during registration.",
    },
    {
      title: "4. Intellectual Property",
      content:
        "All website content, event branding, logos, graphics, images, videos, and documents are the intellectual property of RE-PAX India and may not be copied, reproduced, or distributed without prior written permission.",
    },
    {
      title: "5. User Responsibilities",
      content:
        "Users agree to provide accurate information, avoid misuse of the website, and refrain from any activity that may disrupt website functionality or compromise its security.",
    },
    {
      title: "6. Third-Party Links",
      content:
        "Our website may contain links to external websites for your convenience. RE-PAX India is not responsible for the content, privacy practices, or services offered by third-party websites.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "RE-PAX India shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website, event participation, or reliance on information provided.",
    },
    {
      title: "8. Modifications",
      content:
        "We reserve the right to modify these Terms & Conditions at any time. Updates will become effective immediately upon publication on this page.",
    },
    {
      title: "9. Governing Law",
      content:
        "These Terms & Conditions shall be governed and interpreted in accordance with the laws of India. Any disputes shall fall under the jurisdiction of the competent courts in India.",
    },
    {
      title: "10. Contact Information",
      content:
        "If you have any questions regarding these Terms & Conditions, please contact the RE-PAX India organizing committee through our Contact page.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B1F35] via-[#123C63] to-[#174D6D]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Please read these Terms & Conditions carefully before using the
            RE-PAX India website or participating in our events.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="-mt-10 px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <p className="mb-10 text-gray-500">
            <span className="font-semibold text-slate-900">
              Last Updated:
            </span>{" "}
            July 2026
          </p>

          <div className="space-y-8">
            {terms.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-300 hover:shadow-md"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="leading-8 text-gray-600">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            Questions About Our Terms?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            If you need clarification regarding our Terms & Conditions,
            registrations, sponsorships, or event participation, feel free to
            contact our support team.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#EA580C] transition hover:bg-slate-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
export default function RefundPolicyPage() {
  const policies = [
    {
      title: "1. Registration Fees",
      content:
        "All registration fees paid for the RE-PAX India Summit & Awards are subject to the refund policy outlined below. By completing your registration, you agree to these terms.",
    },
    {
      title: "2. Cancellation by Participant",
      content:
        "Cancellation requests must be submitted in writing via email to the organizing committee. Refund eligibility depends on the date of cancellation and the applicable event guidelines.",
    },
    {
      title: "3. Refund Eligibility",
      content:
        "Refund requests received before the official refund deadline may qualify for a partial or full refund after deducting applicable administrative or processing charges. Requests received after the deadline may not be eligible for any refund.",
    },
    {
      title: "4. Event Cancellation",
      content:
        "If RE-PAX India cancels the event due to unforeseen circumstances, registered participants will be informed promptly. Refunds or alternative participation options will be communicated by the organizing committee.",
    },
    {
      title: "5. Event Rescheduling",
      content:
        "If the event is postponed or rescheduled, registrations will automatically remain valid for the revised event date. Participants who are unable to attend may contact the organizing team regarding available options.",
    },
    {
      title: "6. Sponsorship & Exhibition Bookings",
      content:
        "Payments made for sponsorships, exhibition booths, branding opportunities, and partnership packages are generally non-refundable unless otherwise specified in the signed agreement.",
    },
    {
      title: "7. Processing Time",
      content:
        "Approved refunds will be processed within 7–14 business days through the original payment method. Processing time may vary depending on your payment provider or banking institution.",
    },
    {
      title: "8. Non-Refundable Charges",
      content:
        "Transaction fees, payment gateway charges, taxes, and other applicable administrative fees may be deducted from the refund amount where permitted.",
    },
    {
      title: "9. Contact for Refund Requests",
      content:
        "For refund-related inquiries, please contact the RE-PAX India organizing committee through the Contact page. Kindly include your registration details and payment reference for faster assistance.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F1F5F9] pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#174D6D] via-[#123C63] to-[#174D6D]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Refund Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Our refund policy explains the conditions under which refunds may
            be requested for registrations, sponsorships, and other services
            related to RE-PAX India Summit & Awards.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="-mt-10 px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-2xl md:p-12">

          <div className="mb-10 rounded-2xl border-l-4 border-[#F97316] bg-orange-50 p-5">
            <p className="text-gray-700">
              <span className="font-semibold text-slate-900">
                Last Updated:
              </span>{" "}
              July 2026
            </p>
          </div>

          <div className="space-y-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-[#F97316] hover:shadow-lg"
              >
                <h2 className="mb-3 text-2xl font-bold text-slate-900">
                  {policy.title}
                </h2>

                <p className="leading-8 text-gray-600">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            Need Help With a Refund?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Our support team is available to assist you with refund requests,
            payment-related questions, registration issues, and event
            participation queries.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#EA580C] transition hover:bg-slate-100"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
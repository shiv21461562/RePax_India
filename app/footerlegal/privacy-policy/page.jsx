export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B1F35] via-[#123C63] to-[#174D6D]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Your privacy is important to us. This Privacy Policy explains how
            RE-PAX India collects, uses, and protects your personal
            information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="-mt-10 pb-24 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-12">

          <p className="mb-10 text-gray-500">
            <span className="font-semibold text-slate-900">
              Last Updated:
            </span>{" "}
            July 2026
          </p>

          <div className="space-y-12">

            {/* Section 1 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                1. Information We Collect
              </h2>

              <p className="leading-8 text-gray-600">
                We may collect personal information including your name,
                email address, phone number, organization, designation,
                company details, and other information when you register
                for an event, download brochures, contact us, or submit
                forms on our website.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                2. How We Use Your Information
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-600">
                <li>Process registrations and event participation.</li>
                <li>Respond to your inquiries and requests.</li>
                <li>Send conference updates and announcements.</li>
                <li>Share sponsorship or partnership information.</li>
                <li>Improve website performance and user experience.</li>
                <li>Provide customer support and communication.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                3. Data Protection
              </h2>

              <p className="leading-8 text-gray-600">
                We implement appropriate technical and organizational
                security measures to protect your personal information
                against unauthorized access, misuse, disclosure,
                alteration, or destruction.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                4. Cookies
              </h2>

              <p className="leading-8 text-gray-600">
                Our website may use cookies and similar technologies to
                improve website functionality, analyze visitor behavior,
                and provide a better browsing experience.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                5. Third-Party Services
              </h2>

              <p className="leading-8 text-gray-600">
                We may use trusted third-party providers for analytics,
                registrations, payments, email communications, and cloud
                hosting. These providers maintain their own privacy
                policies and security standards.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                6. Your Rights
              </h2>

              <p className="leading-8 text-gray-600">
                You have the right to request access, correction,
                modification, or deletion of your personal information.
                Please contact us through our official communication
                channels for any privacy-related requests.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                7. Changes to This Policy
              </h2>

              <p className="leading-8 text-gray-600">
                RE-PAX India reserves the right to update or modify this
                Privacy Policy at any time. Any updates will be published
                on this page along with the latest revision date.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                8. Contact Us
              </h2>

              <p className="leading-8 text-gray-600">
                If you have any questions regarding this Privacy Policy,
                your personal information, or our data handling practices,
                please contact the RE-PAX India organizing team through
                our Contact page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#174d6d] text-white">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.10),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo + About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="RE PAX India"
              width={220}
              height={80}
              className="w-[190px]"
            />

            <p className="mt-6 leading-8 text-slate-300">
              RE PAX India Summit brings together policymakers,
              investors, innovators and renewable energy leaders
              driving the future of sustainable energy and clean
              infrastructure development.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">

              <div className="flex items-start gap-3">
                <span>📍</span>
                <span>New Delhi, India</span>
              </div>

              <div className="flex items-start gap-3">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <span>✉️</span>
                <span>info@repaxindia.com</span>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Navigation
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/agenda" className="hover:text-orange-400">
                  Agenda
                </Link>
              </li>

              <li>
                <Link href="/speakers" className="hover:text-orange-400">
                  Speakers
                </Link>
              </li>

              <li>
                <Link href="/sponsors" className="hover:text-orange-400">
                  Sponsors
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Event Details
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>📅 October 2026</li>
              <li>🎤 50+ Industry Speakers</li>
              <li>🤝 5000+ Delegates</li>
              <li>🌍 20+ Countries</li>
              <li>⚡ Renewable Energy Summit</li>
              <li>🏢 Industry Leaders & Investors</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Connect
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>Sponsorship Opportunities</li>
              <li>Partnership Enquiries</li>
              <li>Delegate Registration</li>
              <li>Speaker Applications</li>
              <li>Media Collaborations</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8 flex gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500">
                in
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500">
                X
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500">
                ▶
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">

            <p className="text-slate-300">
              © 2026 RE PAX India Summit. All Rights Reserved.
            </p>

            <p className="text-slate-300">
              Driving the Future of Renewable Energy
            </p>

          </div>

        </div>


  {/* BIG WATERMARK */}
  <div className="pointer-events-none absolute bottom-[-20px] left-0 w-full">

    <h1
      className="
        text-[300px]
        font-black
        leading-none
        tracking-[15px]
        text-center
        text-transparent
        whitespace-nowrap
      "
      style={{
        WebkitTextStroke: "1px rgba(255,255,255,0.07)",
      }}
    >
      RE PAX INDIA
    </h1>

  </div>
      </div>

   

    </footer>
  );
}
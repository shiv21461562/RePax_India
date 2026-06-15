import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900">

      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">

        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Image
              src="/images/logo.png"
              alt="REPAX India"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />

            <p className="mt-6 leading-7 text-slate-600 sm:leading-8">
              RE PAX India Summit brings together policymakers,
              investors, innovators and industry leaders to
              accelerate the renewable energy transition and
              sustainable infrastructure growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 transition hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition hover:text-orange-500"
                >
                  About Summit
                </Link>
              </li>

              <li>
                <Link
                  href="/agenda"
                  className="text-slate-600 transition hover:text-orange-500"
                >
                  Agenda
                </Link>
              </li>

              <li>
                <Link
                  href="/speakers"
                  className="text-slate-600 transition hover:text-orange-500"
                >
                  Speakers
                </Link>
              </li>

              <li>
                <Link
                  href="/sponsors"
                  className="text-slate-600 transition hover:text-orange-500"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Event Info
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li>📅 24–25 Oct 2026</li>
              <li>📍 New Delhi, India</li>
              <li>🎤 15+ Speakers</li>
              <li>🌍 150+ Delegates</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-600">
              <li>📧 info@repaxindia.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 New Delhi, India</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                in
              </div>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                X
              </div>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                ▶
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Stay Updated
              </h3>

              <p className="mt-2 text-slate-600">
                Subscribe to receive summit updates and announcements.
              </p>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-slate-300 bg-white px-6 py-4 outline-none placeholder:text-slate-400"
              />

              <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-slate-600 sm:px-6 lg:flex-row lg:text-left">

          <p>
            © 2026 RE PAX India Summit. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <span className="cursor-pointer transition hover:text-orange-500">
              Privacy Policy
            </span>

            <span className="cursor-pointer transition hover:text-orange-500">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}
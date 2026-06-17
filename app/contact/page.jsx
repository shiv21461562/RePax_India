"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 -left-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 -right-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-200/20 blur-[140px]" />

      {/* Hero Section  */}

      <section className="relative overflow-hidden bg-[#174d6d] pt-36 pb-32">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow Effects */}
        <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/10
        px-6
        py-2
        text-xs
        font-semibold
        tracking-[0.2em]
        text-white
        backdrop-blur-xl
      "
          >
            CONTACT RE PAX INDIA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-5xl font-bold leading-none md:text-7xl"
          >
            <span className="block text-white">Connect With</span>

            <span className="mt-2 block text-orange-400">RE PAX India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
        mx-auto
        mt-8
        max-w-3xl
        text-lg
        leading-8
        text-slate-300
      "
          >
            Sponsorships, registrations, partnerships and speaker inquiries —
            our team is here to help.
          </motion.p>

          {/* Quick Highlights */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              ⚡ Fast Response
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              🤝 Sponsorship Support
            </div>

            <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
              🌍 Global Partnerships
            </div>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid gap-5 md:grid-cols-3"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#0d203b]/70 p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-bold text-orange-400">24h</h3>

              <p className="mt-2 text-slate-300">Response Time</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d203b]/70 p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-bold text-cyan-400">5000+</h3>

              <p className="mt-2 text-slate-300">Event Attendees</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d203b]/70 p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-bold text-green-400">100+</h3>

              <p className="mt-2 text-slate-300">Industry Partners</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(23,77,109,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full bg-[#174d6d]/10 px-5 py-2 text-sm font-semibold text-[#174d6d]">
              CONTACT OPTIONS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Reach Out To Our Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Get in touch for sponsorships, registrations, partnerships and
              event support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Call */}

            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#174d6d]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#174d6d] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white transition-all duration-500 group-hover:bg-white/10">
                  <Phone className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition duration-500 group-hover:text-white">
                  Call Us
                </h3>

                <p className="mt-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
                  Mon - Fri, 9AM to 6PM IST
                </p>

                <p className="mt-5 text-2xl font-bold text-orange-500">
                  +91 9899072636
                </p>

                <p className="mt-2 text-sm text-slate-500 transition duration-500 group-hover:text-slate-300">
                  Toll Free: 1800-123-REPAX
                </p>
              </div>
            </div>

            {/* Email */}

            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#174d6d]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#174d6d] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition-all duration-500 group-hover:bg-white/10">
                  <Mail className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition duration-500 group-hover:text-white">
                  Email Us
                </h3>

                <p className="mt-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
                  We typically respond within 24 hours
                </p>

                <p className="mt-5 text-lg font-bold text-cyan-500">
                  info@repaxindia.com
                </p>

                <p className="mt-2 text-sm text-slate-500 transition duration-500 group-hover:text-slate-300">
                  support@repaxindia.com
                </p>
              </div>
            </div>

            {/* Visit */}

            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#174d6d]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#174d6d] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white transition-all duration-500 group-hover:bg-white/10">
                  <Building2 className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition duration-500 group-hover:text-white">
                  Visit Us
                </h3>

                <p className="mt-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
                  Gaur City Mall
                </p>

                <p className="mt-5 text-lg font-semibold text-slate-800 transition duration-500 group-hover:text-white">
                  Office 14130, 14th Floor
                </p>

                <p className="text-slate-600 transition duration-500 group-hover:text-slate-300">
                  Gaur City Mall, Greater Noida West - 201318
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}

      <section className="relative py-16 bg-slate-50 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#174d6d]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_.9fr]">
            {/* FORM */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
              <span className="inline-flex rounded-full bg-[#174d6d]/10 px-4 py-2 text-sm font-semibold text-[#174d6d]">
                CONTACT FORM
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-slate-500">
                Fill out the form and our team will get back to you shortly.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <textarea
                  rows={4}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#174d6d] focus:ring-4 focus:ring-[#174d6d]/10"
                />

                <button
                  type="submit"
                  className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#174d6d]
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(23,77,109,0.25)]
            "
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-5">
              {/* Quick Contact */}

              <div className="rounded-[30px] bg-[#174d6d] p-7 text-white shadow-xl">
                <h3 className="text-2xl font-bold">
                  Need Immediate Assistance?
                </h3>

                <p className="mt-2 text-slate-300">
                  Reach out directly to our support team.
                </p>

                <div className="mt-5 space-y-3">
                  <p className="flex items-center gap-3">📞 +91 98765 43210</p>

                  <p className="flex items-center gap-3">
                    ✉ info@repaxindia.com
                  </p>
                </div>
              </div>

              {/* Office Hours */}

              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-orange-100 p-3">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Office Hours
                    </h3>

                    <p className="mt-3 text-slate-600">Monday - Friday</p>

                    <p className="text-slate-500">9:00 AM - 6:00 PM IST</p>

                    <p className="mt-3 text-slate-600">Saturday</p>

                    <p className="text-slate-500">10:00 AM - 2:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}

              <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">
                  Quick Links
                </h3>

                <div className="mt-5 space-y-3">
                  <a
                    href="#"
                    className="block text-slate-600 transition hover:text-orange-500"
                  >
                    → Sponsorship Opportunities
                  </a>

                  <a
                    href="#"
                    className="block text-slate-600 transition hover:text-orange-500"
                  >
                    → Delegate Registration
                  </a>

                  <a
                    href="#"
                    className="block text-slate-600 transition hover:text-orange-500"
                  >
                    → Partnership Enquiries
                  </a>

                  <a
                    href="#"
                    className="block text-slate-600 transition hover:text-orange-500"
                  >
                    → Speaker Applications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section - Modern */}

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl">
            {/* Map Header */}
            <div className="border-b border-slate-200/50 bg-gradient-to-r from-orange-500/5 to-transparent p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Venue Location
                  </h3>
                  <p className="text-sm text-slate-500">
                    Gaur City Mall, Greater Noida West
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[400px] w-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7914311117165!2d77.42705757550215!3d28.60603318528361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1781527043962!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

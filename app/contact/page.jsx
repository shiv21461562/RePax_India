"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  Globe,
  Users,
  Award,
  Mic,
  Newspaper,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useState } from "react";
import { createContact } from "../services/EnquiriesApi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    designation: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    purpose: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createContact(formData);

      if (response.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "😊 Thanks! We'll get back to you soon",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#0f172a",
          iconColor: "#22c55e",
          customClass: {
            popup: "rounded-2xl shadow-xl",
          },
        });

        setFormData({
          full_name: "",
          company_name: "",
          designation: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          purpose: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Something went wrong. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const enquiryOptions = [
    "Delegate Registration",
    "Sponsorship",
    "Exhibition",
    "Speaker Opportunity",
    "Award Nomination",
    "Media Partnership",
    "General Enquiry",
  ];

  const faqs = [
    {
      q: "How can I register as a delegate?",
      a: "You can register online through our Registration page or contact our delegate support team for assistance.",
    },
    {
      q: "How do I become a sponsor?",
      a: "Visit our Sponsors page or contact our sponsorship team to explore available partnership opportunities.",
    },
    {
      q: "Can I book an exhibition booth?",
      a: "Yes. Booth bookings can be made through our Exhibitors page or by contacting our exhibition team directly.",
    },

    {
      q: "How can I become a speaker?",
      a: "Industry experts can submit their speaker proposals through the Speakers page or contact our conference team.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 -left-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 -right-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-200/20 blur-[140px]" />

      {/* Hero Section */}
     
      <section className="relative overflow-hidden bg-[#255B7D] min-h-[100vh] flex items-center pt-32 pb-32">
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

        {/* Optional Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#255B7D]/20 to-[#255B7D]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-8 py-3 text-sm font-semibold tracking-[0.25em] text-white backdrop-blur-xl"
          >
            LET'S CONNECT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 text-5xl font-extrabold leading-tight md:text-7xl"
          >
            <span className="block text-white">We're Here to Help You</span>

            <span className="mt-3 block text-orange-400">
              Be Part of RE-PAX India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-10 max-w-4xl text-lg md:text-xl leading-9 text-slate-300"
          >
            Whether you're interested in attending the conference, becoming a
            sponsor, exhibiting your latest innovations, speaking at the event,
            or nominating your organization for the RE-PAX Leadership Awards —
            our team is here to assist you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          ></motion.div>
        </div>
      </section>
      {/* Contact Cards - Get in Touch */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,91,125,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full bg-[#255B7D]/10 px-5 py-2 text-sm font-semibold text-[#255B7D]">
              GET IN TOUCH
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Have Questions? We're Here to Help
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Need assistance with registration, sponsorship, or exhibition? Our
              team is just a call or email away.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Call */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#255B7D]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#255B7D] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white transition-all duration-500 group-hover:bg-white/10">
                  <Phone className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition duration-500 group-hover:text-white">
                  Call Us
                </h3>
                <p className="mt-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
                  Mon - Fri, 9:30 AM - 6:30 PM IST
                </p>
                <p className="mt-5 text-2xl font-bold text-orange-500">
                  +91-120-516-2126
                </p>
                <p className="mt-2 text-sm text-slate-500 transition duration-500 group-hover:text-slate-300">
                  General Enquiries
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#255B7D]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#255B7D] transition-transform duration-500 group-hover:scale-x-100" />
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
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#255B7D]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <div className="absolute inset-0 scale-x-0 origin-left bg-[#255B7D] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white transition-all duration-500 group-hover:bg-white/10">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition duration-500 group-hover:text-white">
                  Corporate Office
                </h3>
                <p className="mt-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
                  Renewable Mirror (TRESUB Media)
                </p>
                <p className="mt-5 text-sm font-semibold text-slate-800 transition duration-500 group-hover:text-white">
                  14th Floor, Gaur City Mall
                </p>
                <p className="text-sm text-slate-600 transition duration-500 group-hover:text-slate-300">
                  Sector 4, Greater Noida West
                </p>
                <p className="text-sm text-slate-600 transition duration-500 group-hover:text-slate-300">
                  Uttar Pradesh – 201318, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + FAQs */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#255B7D]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* FORM */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Have a Question?
              </h2>
              <p className="mt-2 text-slate-500">
                Fill out the enquiry form below, and our team will respond as
                soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number *"
                    required
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="UAE">UAE</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  />
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                  >
                    <option value="">Purpose of Enquiry</option>
                    {enquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                />

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full rounded-xl border border-slate-200 px-5 py-3 text-slate-700 outline-none transition-all focus:border-[#255B7D] focus:ring-4 focus:ring-[#255B7D]/10"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#255B7D] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,91,125,0.25)] disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div>
              <div className="sticky top-24">
                <span className="inline-flex rounded-full bg-[#255B7D]/10 px-4 py-2 text-sm font-semibold text-[#255B7D]">
                  FAQ
                </span>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-slate-500">
                  Quick answers to common queries.
                </p>

                <div className="mt-6 space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
                    >
                      <h4 className="font-semibold text-slate-900 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">▸</span>
                        {faq.q}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 pl-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Sections - Delegate, Sponsorship, Exhibition, Speaker, Awards, Media */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full bg-[#255B7D]/10 px-5 py-2 text-sm font-semibold text-[#255B7D]">
              EVENT SUPPORT
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Dedicated Support for Every Need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Our team is here to assist you with every aspect of your RE-PAX
              journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Delegate Registration */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Delegate Registration
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Need help registering for the conference?
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{" "}
                  Delegate Passes
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{" "}
                  Group Registrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{" "}
                  Corporate Registrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{" "}
                  Payment Support
                </li>
              </ul>
            </div>

            {/* Sponsorship */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-500">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Sponsorship Opportunities
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Showcase your brand before India's renewable energy leaders.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{" "}
                  Sponsorship Packages
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{" "}
                  Branding Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{" "}
                  Customized Partnerships
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{" "}
                  Title Sponsorship
                </li>
              </ul>
            </div>

            {/* Exhibition */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-500">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Exhibition Enquiries
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Book your booth and showcase your latest products.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  Booth Selection
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  Floor Plan & Pricing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  Branding Options
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  Logistics & Installation
                </li>
              </ul>
            </div>

            {/* Speaker */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-500">
                <Mic className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Speaker Enquiries
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Want to speak at RE-PAX India?
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />{" "}
                  Speaker Applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />{" "}
                  Presentation Topics
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />{" "}
                  Panel Discussions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />{" "}
                  Technical Sessions
                </li>
              </ul>
            </div>

            {/* Awards */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-500">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Awards Enquiries
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Questions about nominations or award categories?
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Award Categories
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Eligibility & Nomination
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Supporting Documents
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Jury Information
                </li>
              </ul>
            </div>

            {/* Media & Press */}
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <Newspaper className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Media & Press
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Journalists, media organizations, and content partners.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Press Accreditation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Media Partnerships
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Interviews & Press Releases
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Photography & Video
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours + Stay Connected */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Office Hours */}
            <div className="rounded-[32px] bg-[#255B7D] p-10 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-3">
                  <Clock className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">Office Hours</h3>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Monday – Friday</span>
                  <span className="text-orange-400">
                    09:30 AM – 06:30 PM (IST)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Saturday</span>
                  <span className="text-orange-400">
                    10:00 AM – 02:00 PM (IST)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">
                  📍 Event Venue: Greater Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Stay Connected
              </h3>
              <p className="mt-2 text-slate-500">
                Follow RE-PAX India for the latest event announcements, speaker
                updates, agenda releases, and renewable energy news.
              </p>
              <div className="mt-8 flex gap-4">
                {[
                  {
                    icon: FaLinkedinIn,
                    color: "bg-[#0A66C2]",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaFacebookF,
                    color: "bg-[#1877F2]",
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    color: "bg-[#E4405F]",
                    label: "Instagram",
                  },
                  { icon: FaTwitter, color: "bg-[#000000]", label: "X" },
                  { icon: FaYoutube, color: "bg-[#FF0000]", label: "YouTube" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`${item.color} flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-110 hover:shadow-lg`}
                    aria-label={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-orange-50 p-4 border border-orange-200">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-orange-500">🌐</span>{" "}
                  Website: www.repaxindia.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative pb-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl">
            <div className="border-b border-slate-200/50 bg-gradient-to-r from-orange-500/5 to-transparent p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Event Venue
                  </h3>
                  <p className="text-sm text-slate-500">
                    RE-PAX India Leadership Conference & Awards • Greater Noida,
                    Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] w-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7914311117165!2d77.42705757550215!3d28.60603318528361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1781527043962!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-3xl"
                title="RE-PAX India Venue Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to Join */}
      <section className="bg-[#255B7D] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Join <span className="text-orange-400">RE-PAX India?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Register today and become part of India's leading renewable energy
            conference and networking platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg"
            >
              Register Now
            </Link>

            <Link
              href="/sponsors"
              className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

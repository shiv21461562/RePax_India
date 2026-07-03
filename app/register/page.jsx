"use client";
import { useState } from "react";
import { createRegistration } from "../services/RegistrationApi";
import {
  Users,
  Handshake,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  FileBadge,
  Trophy,
  User,
  Building2,
  GraduationCap,
  Crown,
  UsersRound,
  Menu,
  X,
  CheckCircle2,
  Send,
  Lock,
  ChevronDown,
} from "lucide-react";

const WHY_ITEMS = [
  { icon: Users, label: "Full-day conference access" },
  { icon: Handshake, label: "Networking opportunities" },
  { icon: Store, label: "Exhibition access" },
  { icon: UtensilsCrossed, label: "Lunch & refreshments" },
  { icon: ShoppingBag, label: "Delegate kit" },
  { icon: FileBadge, label: "Participation certificate" },
  { icon: Trophy, label: "Awards ceremony access" },
];

const CATEGORIES = [
  {
    icon: User,
    title: "Individual Delegate",
    desc: "For professionals attending independently.",
    bg: "bg-orange-100",
    fg: "text-orange-600",
  },
  {
    icon: Building2,
    title: "Corporate Delegate",
    desc: "For organizations & business teams.",
    bg: "bg-sky-100",
    fg: "text-sky-600",
  },
  {
    icon: GraduationCap,
    title: "Student Pass",
    desc: "Special registration for students.",
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
  },
  {
    icon: Crown,
    title: "VIP Pass",
    desc: "Premium experience with exclusive access.",
    bg: "bg-purple-100",
    fg: "text-purple-600",
  },
  {
    icon: UsersRound,
    title: "Group Registration",
    desc: "Discounted registration for groups.",
    bg: "bg-orange-100",
    fg: "text-orange-600",
  },
];

const STATS = [
  "1000+ Industry Professionals",
  "50+ Expert Speakers",
  "80+ Exhibitors",
  "2 Days of Insights & Networking",
  "Shape the Future of Clean Energy",
];

function Turbine({
  className = "",
  spinClass = "animate-[spin_9s_linear_infinite]",
}) {
  return (
    <svg viewBox="0 0 100 130" className={className}>
      <rect x="47" y="0" width="6" height="130" fill="currentColor" />
      <g className={spinClass} style={{ transformOrigin: "50px 0px" }}>
        <path d="M50,0 L54,-58 L62,-52 Z" fill="currentColor" />
        <path d="M50,0 L96,26 L88,34 Z" fill="currentColor" />
        <path d="M50,0 L8,32 L16,38 Z" fill="currentColor" />
      </g>
      <circle cx="50" cy="0" r="4" fill="currentColor" />
    </svg>
  );
}

export default function RepaxRegistration() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    gst_number: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createRegistration(formData);

    if (response.success) {
      setSubmitted(true);

      setFormData({
        full_name: "",
        company_name: "",
        designation: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        gst_number: "",
      });
    } else {
      alert(response.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[800px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-22 pb-36 px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[3px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-orange-400 inline-block" />
              Registration Page
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Register for{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                RE-PAX
              </span>{" "}
              India 2026
            </h1>
            <p className="text-slate-100 text-lg font-semibold mt-4">
              Join India's Premier Renewable Energy Conference
            </p>
            <p className="text-slate-400 text-[15px] leading-relaxed mt-4 max-w-lg">
              Register as a delegate and become part of one of India's most
              influential renewable energy networking events. Gain access to
              keynote sessions, expert panel discussions, technical
              presentations, exhibitions, networking opportunities, and the
              prestigious RE-PAX Leadership Awards.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-orange-500/40 hover:-translate-y-0.5 transition-transform"
              >
                <Send size={16} />
                Register Now
              </a>
              <a
                href="#why"
                className="border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Why Attend?
              </a>
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 bottom-0 w-full h-16"
        >
          <path
            d="M0,40 C360,90 1080,0 1440,40 L1440,70 L0,70 Z"
            fill="#FFF7ED"
          />
          <path
            d="M0,36 C360,86 1080,-4 1440,36"
            fill="none"
            stroke="#F97316"
            strokeWidth="4"
          />
        </svg>
      </section>

      {/* Why Register */}
      <section id="why" className="scroll-mt-28 py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Why Register?
            </h2>

            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover opportunities, connect with industry leaders, and gain
              exclusive insights at RE-PAX India.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_ITEMS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border border-orange-100
            bg-white
            p-6
            text-center
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            cursor-pointer
          "
              >
                {/* Animated Background */}
                <div
                  className="
              absolute
              inset-0
              bg-[#0B4F78]
              origin-left
              scale-x-0
              transition-transform
              duration-500
              ease-out
              group-hover:scale-x-100
            "
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                w-16
                h-16
                mx-auto
                mb-5
                flex
                items-center
                justify-center
                rounded-2xl
                bg-orange-100
                transition-all
                duration-500
                group-hover:bg-white/20
                group-hover:border
                group-hover:border-white/30
                backdrop-blur-sm
              "
                  >
                    <Icon
                      size={28}
                      className="
                  text-orange-600
                  transition-all
                  duration-500
                  group-hover:text-white
                  group-hover:scale-110
                "
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                text-sm
                md:text-base
                font-bold
                leading-snug
                text-gray-900
                transition-colors
                duration-500
                group-hover:text-white
              "
                  >
                    {label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Registration Categories
            </h2>

            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose the registration category that best matches your profile
              and become part of India's premier renewable energy conference.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {CATEGORIES.map(({ icon: Icon, title, desc, bg, fg }) => (
              <div
                key={title}
                className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border border-orange-100
            bg-white
            p-6
            text-center
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            cursor-pointer
          "
              >
                {/* Animated Background */}
                <div
                  className="
              absolute
              inset-0
              bg-[#0B4F78]
              origin-left
              scale-x-0
              transition-transform
              duration-500
              ease-out
              group-hover:scale-x-100
            "
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                w-16
                h-16
                mx-auto
                mb-4
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:bg-white/20
                group-hover:border
                group-hover:border-white/30
                backdrop-blur-sm
                bg-orange-100
              "
                  >
                    <Icon
                      size={26}
                      className="
                  text-orange-600
                  transition-all
                  duration-500
                  group-hover:text-white
                  group-hover:scale-110
                "
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                text-base
                font-extrabold
                mb-2
                text-gray-900
                transition-colors
                duration-500
                group-hover:text-white
              "
                  >
                    {title}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                text-[13px]
                leading-relaxed
                text-slate-500
                transition-colors
                duration-500
                group-hover:text-white/90
              "
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form + sidebar */}
      <section id="register" className="scroll-mt-32 py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_0.9fr] gap-7 items-start">
          {/* Form card */}
          <div className="bg-white border border-orange-100 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-extrabold">Registration Form</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mt-3 mb-7 rounded-full" />

            {submitted && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm font-semibold mb-6">
                <CheckCircle2 size={18} />
                You're registered! A confirmation email is on its way.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
                <Field
                  label="Company"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter company name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  placeholder="Enter your designation"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
                <Field
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter your city"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="Enter your country"
                />
                <Field
                  label="GST Number (Optional)"
                  name="gst_number"
                  value={formData.gst_number}
                  onChange={handleChange}
                  placeholder="Enter GST number"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-orange-500/40 hover:-translate-y-0.5 transition-transform"
              >
                <Send size={16} />
                Register Now
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Lock size={13} />
                Your information is secure and will not be shared.
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="rounded-3xl overflow-hidden shadow-xl sticky top-24">
            <div className="h-56 relative bg-gradient-to-b from-sky-500 via-sky-300 to-slate-200 overflow-hidden">
              <div className="absolute right-10 top-6 text-white/90 w-16">
                <Turbine spinClass="animate-[spin_9s_linear_infinite]" />
              </div>
              <div className="absolute right-2 top-16 text-white/70 w-10">
                <Turbine spinClass="animate-[spin_7s_linear_infinite]" />
              </div>
              <svg
                viewBox="0 0 400 90"
                preserveAspectRatio="none"
                className="absolute bottom-0 w-full h-24"
              >
                <rect x="0" y="40" width="400" height="50" fill="#0F2A1F" />
                <polygon points="20,40 200,20 220,65 30,80" fill="#13294E" />
                <polygon points="230,35 400,15 400,65 240,80" fill="#122650" />
              </svg>
            </div>
            <div className="bg-slate-950 text-white p-8">
              <h3 className="text-xl font-extrabold leading-snug">
                Be Part of India's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Renewable Energy
                </span>{" "}
                Transformation
              </h3>
              <div className="w-11 h-1 bg-gradient-to-r from-orange-500 to-amber-400 my-5 rounded-full" />
              <ul className="space-y-3">
                {STATS.map((stat) => (
                  <li
                    key={stat}
                    className="flex items-start gap-3 text-[14px] text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-white" />
                    </span>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block text-[13px] font-bold mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-orange-200 rounded-xl text-sm bg-orange-50/40 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400"
      />
    </div>
  );
}

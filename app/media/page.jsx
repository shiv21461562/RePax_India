"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  Tv,
  Globe,
  Camera,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white pt-24">

   
     {/* Hero Section */}

<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative flex min-h-screen items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/images/media3.avif')", 
    }}
  />

  {/* Dark Overlay */}
 <div className="absolute inset-0 bg-[#0B1F2E]/45" />

  {/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#255B7D]/20 to-black/30" />

  {/* Blur Circles */}
  <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
  <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

  {/* Grid Pattern */}
  <div className="absolute inset-0 opacity-[0.04]">
    <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:35px_35px]" />
  </div>

  {/* Content */}
  <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/20
        bg-white/10
        px-6
        py-3
        text-sm
        font-medium
        tracking-widest
        text-orange-400
        backdrop-blur-xl
        shadow-lg
      "
      >
        ✦ REPAY MEDIA CENTER
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="
      mt-8
      text-5xl
      font-extrabold
      leading-tight
      text-white
      md:text-7xl
      lg:text-6xl
    "
    >
      Media &
      <span
        className="
        block
        bg-gradient-to-r
        from-orange-400
        via-orange-300
        to-yellow-300
        bg-clip-text
        text-transparent
      "
      >
        Press Center
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="
      mx-auto
      mt-8
      max-w-4xl
      text-lg
      leading-8
      text-slate-200
      md:text-xl
    "
    >
      Stay updated with the latest announcements,
      press releases, media coverage, and event highlights
      from REPAY Summit 2026. Connect with journalists,
      industry publications, and media partners shaping
      the future of payments and fintech.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-12 flex flex-wrap justify-center gap-5"
    >
      <button
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-orange-500
        px-10
        py-5
        font-semibold
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-600
        hover:shadow-[0_15px_50px_rgba(249,115,22,0.4)]
      "
      >
        Download Media Kit
        <ArrowRight
          size={20}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      <button
        className="
        rounded-full
        border
        border-white/20
        bg-white/10
        px-10
        py-5
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-white
        hover:text-[#255B7D]
      "
      >
        Become Media Partner
      </button>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
    >
      {[
        { number: "150+", label: "Media Houses" },
        { number: "50+", label: "Press Releases" },
        { number: "100K+", label: "Global Reach" },
        { number: "25+", label: "Partners" },
      ].map((item, i) => (
        <div
          key={i}
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        "
        >
          <h3 className="text-3xl font-bold text-orange-400">
            {item.number}
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  </div>
</motion.section>





   

     
     {/* Media Coverage */}
<section className="bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mb-16 text-center">
      <h2 className="text-5xl font-bold text-[#001B4D]">
        Media
        <span className="text-orange-500"> Coverage</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        Extensive coverage across leading business publications,
        digital media platforms, television networks and industry journals.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Business News",
          value: "50+ Publications",
        },
        {
          title: "TV Networks",
          value: "20+ Channels",
        },
        {
          title: "Industry Journals",
          value: "35+ Journals",
        },
        {
          title: "Digital Publications",
          value: "100K+ Reach",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          "
        >
          {/* Hover Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-[#255B7D]
            translate-y-full
            transition-all
            duration-500
            group-hover:translate-y-0
            "
          />

          <div className="relative z-10">

            {/* Icon */}
            <div
              className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              transition-all
              duration-500
              group-hover:bg-white/10
              "
            >
              <Newspaper
                size={36}
                className="
                text-orange-500
                transition-all
                duration-500
                group-hover:text-white
                "
              />
            </div>

            {/* Title */}
            <h3
              className="
              mt-6
              text-center
              text-xl
              font-bold
              text-[#001B4D]
              transition-all
              duration-500
              group-hover:text-white
              "
            >
              {item.title}
            </h3>

            {/* Stats */}
            <p
              className="
              mt-3
              text-center
              text-orange-500
              font-semibold
              transition-all
              duration-500
              group-hover:text-orange-300
              "
            >
              {item.value}
            </p>

            {/* Bottom Line */}
            <div
              className="
              mx-auto
              mt-6
              h-1
              w-12
              rounded-full
              bg-orange-500
              transition-all
              duration-500
              group-hover:w-24
              group-hover:bg-white
              "
            />
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>




{/* Media Press Releases */}

<section className="bg-[#255B7D] py-28">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-400">
        LATEST NEWS
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Media
        <span className="text-orange-400"> Press Releases</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        Official announcements, strategic partnerships, event milestones
        and key updates from REPAY Summit.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      {[
        {
          date: "15 Jan 2026",
          title: "REPAY Summit 2026 Officially Announced",
          desc: "Industry leaders, fintech innovators and investors will gather for the biggest payments event.",
        },
        {
          date: "02 Feb 2026",
          title: "Media Partnership Program Launch",
          desc: "Leading publications and media houses join REPAY Summit as official media partners.",
        },
        {
          date: "18 Mar 2026",
          title: "Startup Pavilion Registration Opens",
          desc: "Startups can now register to showcase innovations and connect with investors.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -10,
          }}
          className="
            group
            rounded-[32px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-orange-400/50
            hover:bg-white/15
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
        >
          <div className="inline-flex rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-400">
            {item.date}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            {item.desc}
          </p>

          <div className="mt-8 flex items-center gap-2 text-orange-400 font-semibold">
            Read Release →
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>



{/* Gallery */}


<section className="bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
        EVENT HIGHLIGHTS
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#001B4D]">
        Photo
        <span className="text-orange-500"> Gallery</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        Explore memorable moments, keynote sessions, networking events
        and exclusive highlights from REPAY Summit.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "/images/news.png",
        "/images/blog1.jpg",
        "/images/media.png",
        "/images/news1.png",
        "/images/con.avif",
        "/images/blog4.webp",
      ].map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{ scale: 1.03 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            shadow-lg
          "
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="
              h-[320px]
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              translate-y-8
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <h3 className="text-xl font-bold text-white">
              REPAY Summit 2026
            </h3>

            <p className="mt-2 text-sm text-slate-200">
              Event Highlight
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* Videos */}


<section className="bg-[#255B7D] py-28">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-400">
        VIDEO LIBRARY
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Event
        <span className="text-orange-400"> Videos</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        Watch keynote sessions, panel discussions, interviews and
        exclusive highlights from REPAY Summit.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Opening Keynote Session",
          duration: "12 Min",
          image: "/images/video1.jpg",
        },
        {
          title: "Fintech Leaders Panel",
          duration: "18 Min",
          image: "/images/video2.jpg",
        },
        {
          title: "Startup Pavilion Highlights",
          duration: "10 Min",
          image: "/images/video3.jpg",
        },
      ].map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{ y: -10 }}
          className="
            group
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/10
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-orange-400/40
            hover:bg-white/15
          "
        >
          <div className="relative">

            <img
              src={video.image}
              alt={video.title}
              className="
                h-64
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/30" />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500
                  text-3xl
                  text-white
                  shadow-2xl
                "
              >
                ▶
              </div>
            </div>

            <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
              {video.duration}
            </div>

          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white">
              {video.title}
            </h3>

            <p className="mt-4 text-slate-300">
              Watch full event coverage and exclusive insights from industry experts.
            </p>

            <div className="mt-6 text-orange-400 font-semibold">
              Watch Video →
            </div>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* Media Registration */}


<section className="bg-white py-28">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
        MEDIA ACCESS
      </span>

      <h2 className="mt-6 text-5xl font-bold text-[#001B4D]">
        Media
        <span className="text-orange-500"> Registration</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        Register as a media representative and gain exclusive access
        to interviews, press conferences, networking sessions and event coverage.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      {[
        {
          icon: "📰",
          title: "Press Access",
          desc: "Get access to press conferences, keynote sessions and official announcements.",
        },
        {
          icon: "🎤",
          title: "Interview Opportunities",
          desc: "Connect with speakers, industry leaders and event partners for interviews.",
        },
        {
          icon: "📸",
          title: "Media Resources",
          desc: "Access press kits, logos, photos and official event content.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{ y: -10 }}
          className="
            rounded-[30px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-500
            hover:border-orange-300
            hover:shadow-xl
          "
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl">
            {item.icon}
          </div>

          <h3 className="mt-8 text-2xl font-bold text-[#001B4D]">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <button
        className="
          rounded-full
          bg-orange-500
          px-10
          py-4
          text-lg
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-orange-600
        "
      >
        Register As Media →
      </button>
    </div>

  </div>
</section>

{/* Brand Assets */}

<section className="bg-[#255B7D] py-28">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-orange-400">
        DOWNLOAD CENTER
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Brand
        <span className="text-orange-400"> Assets</span>
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        Access official REPAY Summit logos, media kits, brand guidelines
        and promotional materials for media and partners.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🎨",
          title: "Brand Guidelines",
          desc: "Official brand usage guidelines and identity standards.",
        },
        {
          icon: "📦",
          title: "Media Kit",
          desc: "Download event overview, press materials and assets.",
        },
        {
          icon: "🖼️",
          title: "Event Banners",
          desc: "Promotional banners and marketing creatives.",
        },
        {
          icon: "🏷️",
          title: "Logo Package",
          desc: "High-resolution logos in multiple formats.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -10,
          }}
          className="
            group
            rounded-[32px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-orange-400/50
            hover:bg-white/15
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/20 text-4xl">
            {item.icon}
          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            {item.desc}
          </p>

          <button className="mt-8 font-semibold text-orange-400 transition hover:text-orange-300">
            Download →
          </button>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-[40px] bg-[#255B7D] p-16 text-center text-white">

            <h2 className="text-5xl font-bold">
              Become A Media Partner
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Join our media network and connect with industry
              leaders, innovators and decision makers.
            </p>

            <button className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Partner With Us
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}
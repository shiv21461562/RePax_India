"use client";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { Trophy, Award, Star, Users, ArrowRight } from "lucide-react";

export default function Page() {
  const categories = [
    "Best Fintech Innovation",
    "Digital Payment Excellence",
    "Emerging Startup Award",
    "Cybersecurity Leadership",
    "Banking Transformation Award",
    "AI Innovation Award",
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-[#255B7D] py-32"
      >
        {/* Floating Circle */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/5"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-orange-500/10"
        />

        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-orange-400"
          >
            REPAY AWARDS 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-8 text-5xl font-bold text-white md:text-7xl"
          >
            Celebrating Excellence In
            <span className="block text-orange-400">Payments & Fintech</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-200"
          >
            Honoring outstanding achievements, innovation and leadership across
            the payments, banking and fintech ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
          >
            <button
              className="
        mt-10
        rounded-full
        bg-orange-500
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-600
        hover:shadow-xl
        "
            >
              Nominate Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="relative -mt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["25+", "Award Categories"],
              ["500+", "Nominations"],
              ["100+", "Industry Leaders"],
              ["1", "Grand Ceremony"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="
                rounded-3xl
                bg-white
                p-8
                text-center
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                "
              >
                <h3 className="text-5xl font-bold text-orange-500">{number}</h3>

                <p className="mt-3 text-slate-600">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="bg-[#255B7D] py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-white">
              Award
              <span className="text-orange-400"> Categories</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Recognizing innovation, leadership and excellence across the
              payments, fintech and banking ecosystem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item, index) => (
              <div
                key={item}
                className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          transition-all
          duration-500
          hover:-translate-y-4
          hover:scale-[1.03]
          "
              >
                {/* Hover Overlay */}
                <div
                  className="
            absolute
            inset-0
            bg-orange-500
            translate-y-full
            transition-all
            duration-500
            group-hover:translate-y-0
            "
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              transition-all
              duration-500
              group-hover:bg-white/20
              "
                  >
                    <Award
                      size={32}
                      className="
                text-orange-500
                transition-all
                duration-500
                group-hover:text-white
                "
                    />
                  </div>

                  <h3
                    className="
              mt-6
              text-2xl
              font-semibold
              text-[#001B4D]
              transition-all
              duration-500
              group-hover:text-white
              "
                  >
                    {item}
                  </h3>

                  <p
                    className="
              mt-4
              text-slate-600
              transition-all
              duration-500
              group-hover:text-slate-100
              "
                  >
                    Celebrating outstanding achievements and innovation within
                    the financial ecosystem.
                  </p>

                  <div
                    className="
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#001B4D]">Eligibility</h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Organizations driving innovation, excellence and impact across the
              payments, fintech and banking ecosystem are invited to apply.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Banks & NBFCs",
                desc: "Leading financial institutions delivering innovative services.",
              },
              {
                title: "Fintech Companies",
                desc: "Technology-driven firms transforming financial services.",
              },
              {
                title: "Payment Providers",
                desc: "Organizations enabling secure and seamless transactions.",
              },
              {
                title: "Startups & Innovators",
                desc: "Emerging companies introducing breakthrough solutions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
          group
          bg-white
          rounded-3xl
          p-8
          border
          border-slate-200
          shadow-lg
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-500
          "
              >
                <div
                  className="
            h-16
            w-16
            rounded-2xl
            bg-orange-100
            flex
            items-center
            justify-center
            mb-6
            "
                >
                  <Award size={28} className="text-orange-500" />
                </div>

                <h3 className="text-2xl font-bold text-[#001B4D]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">{item.desc}</p>

                <div className="mt-6 h-1 w-12 bg-orange-500 rounded-full group-hover:w-24 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury   */}
      {/* Jury Panel */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#255B7D] py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white">
              Distinguished
              <span className="text-orange-400"> Jury Panel</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              A panel of respected leaders, innovators and industry veterans
              ensuring a transparent and credible evaluation process.
            </p>
          </div>

          {/* Jury Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "CEO",
                company: "Fintech Solutions",
              },
              {
                name: "Neha Verma",
                role: "Managing Director",
                company: "Digital Payments India",
              },
              {
                name: "Amit Kapoor",
                role: "Chief Innovation Officer",
                company: "Future Banking Group",
              },
              {
                name: "Priya Mehta",
                role: "Founder",
                company: "NextGen Fintech",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
          group
          bg-white
          rounded-3xl
          p-8
          text-center
          shadow-xl
          hover:-translate-y-4
          hover:shadow-2xl
          transition-all
          duration-500
          "
              >
                {/* Profile */}
                <div
                  className="
            w-28 h-28
            mx-auto
            rounded-full
            bg-orange-100
            flex
            items-center
            justify-center
            mb-6
            group-hover:bg-orange-500
            transition-all
            duration-500
            "
                >
                  <UserRound
                    size={50}
                    className="
              text-orange-500
              group-hover:text-white
              transition-all
              duration-500
              "
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#001B4D]">
                  {member.name}
                </h3>

                <p className="mt-2 text-orange-500 font-semibold">
                  {member.role}
                </p>

                <p className="mt-2 text-slate-500">{member.company}</p>

                <div
                  className="
            mt-6
            mx-auto
            h-1
            w-12
            rounded-full
            bg-orange-500
            transition-all
            duration-500
            group-hover:w-24
            "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Nomination Process */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Nomination
              <span className="text-orange-500"> Process</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              A transparent and structured evaluation process designed to
              recognize the most innovative organizations and leaders in the
              payments and fintech ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Nomination",
                desc: "Complete the nomination form and provide supporting information.",
              },
              {
                step: "02",
                title: "Initial Screening",
                desc: "Entries are reviewed to ensure eligibility and completeness.",
              },
              {
                step: "03",
                title: "Jury Evaluation",
                desc: "Industry experts evaluate submissions based on defined criteria.",
              },
              {
                step: "04",
                title: "Winner Announcement",
                desc: "Top-performing entries are recognized during the awards ceremony.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="
          relative
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-lg
          hover:-translate-y-3
          hover:shadow-2xl
          transition-all
          duration-500
          "
              >
                {/* Number */}
                <div
                  className="
            mb-6
            text-6xl
            font-extrabold
            text-orange-100
            group-hover:text-orange-200
            transition-all
            "
                >
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-[#001B4D]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">{item.desc}</p>

                <div
                  className="
            mt-6
            h-1
            w-12
            rounded-full
            bg-orange-500
            transition-all
            duration-500
            group-hover:w-24
            "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    
      {/* Previous Winners */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#255B7D] py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white">
              Previous
              <span className="text-orange-400"> Winners</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200">
              Recognizing organizations that have demonstrated outstanding
              innovation, leadership and excellence in payments, banking and
              fintech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Leading Fintech Company",
                category: "Best Fintech Innovation",
                year: "2025",
              },
              {
                company: "Digital Payments Leader",
                category: "Digital Payment Excellence",
                year: "2025",
              },
              {
                company: "Banking Transformation Awardee",
                category: "Banking Transformation",
                year: "2025",
              },
            ].map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="
          group
          bg-white
          rounded-3xl
          p-10
          shadow-xl
          hover:-translate-y-4
          hover:shadow-2xl
          transition-all
          duration-500
          "
              >
                <div
                  className="
            w-20
            h-20
            rounded-full
            bg-orange-100
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            group-hover:bg-orange-500
            transition-all
            duration-500
            "
                >
                  <Award
                    size={38}
                    className="
              text-orange-500
              group-hover:text-white
              transition-all
              duration-500
              "
                  />
                </div>

                <div className="text-center">
                  <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {winner.year} Winner
                  </span>

                  <h3 className="text-2xl font-bold text-[#001B4D]">
                    {winner.company}
                  </h3>

                  <p className="mt-4 text-slate-600">{winner.category}</p>

                  <div className="mt-6 h-1 w-12 mx-auto bg-orange-500 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Participate */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#001B4D]">
              Why
              <span className="text-orange-500"> Participate?</span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Gain industry recognition, strengthen your brand presence and
              showcase excellence before leaders in the fintech ecosystem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Trophy size={50} />,
                title: "Industry Recognition",
                desc: "Get recognized for outstanding achievements and innovation.",
              },
              {
                icon: <Users size={50} />,
                title: "Brand Visibility",
                desc: "Increase visibility among industry leaders and decision makers.",
              },
              {
                icon: <Star size={50} />,
                title: "Market Leadership",
                desc: "Position your organization as a leader in the industry.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-10
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-4
          hover:shadow-2xl
          "
              >
                {/* Top Line Animation */}
                <div
                  className="
            absolute
            left-0
            top-0
            h-1
            w-0
            bg-orange-500
            transition-all
            duration-500
            group-hover:w-full
            "
                />

                {/* Icon Circle */}
                <div
                  className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-orange-100
            transition-all
            duration-500
            group-hover:bg-[#255B7D]
            "
                >
                  <div className="text-orange-500 transition-all duration-500 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
            mt-8
            text-center
            text-2xl
            font-bold
            text-[#001B4D]
            "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
            mt-4
            text-center
            leading-7
            text-slate-600
            "
                >
                  {item.desc}
                </p>

                {/* Bottom Button */}
                <div
                  className="
            mt-8
            flex
            justify-center
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            "
                >
                  <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-[#255B7D] p-16 text-center text-white">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-orange-400">
              REPAY AWARDS 2026
            </span>

            <h2 className="mt-8 text-5xl font-bold">
              Ready To Get Recognized?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
              Submit your nomination and showcase your achievements before
              industry leaders and innovators.
            </p>

          
          </div>
        </div>
      </section>
    </div>
  );
}

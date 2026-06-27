import Link from "next/link";
import {
  FaNewspaper,
  FaCamera,
  FaBullhorn,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

export default function MediaCollaborationPage() {
  return (
    <>
      {/* Hero */}

<section className="relative overflow-hidden bg-white py-28">



  <div className="relative mx-auto max-w-5xl px-6 text-center">

    {/* Badge */}
    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      RE PAX INDIA 2026
    </span>

    {/* Heading */}
    <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-5xl">
      Media
      <span className="text-orange-500"> Collaborations</span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Become an official media partner of
      <span className="font-semibold text-slate-900">
        {" "}RE PAX India Summit
      </span>{" "}
      and help amplify India's renewable energy transformation through
      exclusive news coverage, interviews, live event reporting, and
      industry-focused storytelling.
    </p>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
      Collaborate with policymakers, clean energy leaders, innovators,
      investors, and global organizations while gaining privileged access to
      keynote sessions, exhibitions, product launches, networking events, and
      expert panel discussions.
    </p>

    {/* Information Box */}
    <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h3 className="text-2xl font-bold text-slate-900">
        Why Become a Media Partner?
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        RE PAX provides media organizations with an opportunity to publish
        exclusive stories, interview industry leaders, showcase renewable
        energy innovations, increase audience engagement, and strengthen
        their presence within India's rapidly growing clean energy sector.
      </p>

    </div>

  </div>

</section>

     

    {/* Benefits */}
<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
        Media Benefits
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Why Partner With RE PAX India?
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Gain exclusive media access, connect with industry leaders, and
        deliver compelling stories from India's premier renewable energy
        summit.
      </p>

    </div>

    {/* Cards */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: <FaNewspaper />,
          title: "Exclusive Stories",
          desc: "Cover keynote sessions, policy announcements, technology launches and industry insights before everyone else.",
        },
        {
          icon: <FaCamera />,
          title: "Press Access",
          desc: "Capture interviews, exhibitions, networking events and exclusive behind-the-scenes moments.",
        },
        {
          icon: <FaBullhorn />,
          title: "Brand Promotion",
          desc: "Increase your publication's visibility through official event branding and media recognition.",
        },
        {
          icon: <FaGlobe />,
          title: "Global Exposure",
          desc: "Reach renewable energy professionals, innovators and decision-makers from India and abroad.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">
            <div className="text-3xl text-orange-500 transition group-hover:text-white">
              {item.icon}
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

    </>
  );
}
import Link from "next/link";
import {
  FaHandshake,
  FaGlobe,
  FaUsers,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";

export default function PartnershipPage() {
  return (
    <>
      {/* Hero */}
{/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-28">



  <div className="relative mx-auto max-w-5xl px-6 text-center">


    {/* Heading */}
    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-4xl">
      Build Meaningful
      <span className="mt-2 block text-orange-500">
        Partnerships
      </span>
    </h1>

    {/* Intro */}
    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
      Partner with <span className="font-semibold text-slate-900">RE PAX India Summit</span>,
      India's premier renewable energy conference, and position your
      organization alongside industry leaders, policymakers, innovators,
      investors, manufacturers, EPC companies, and sustainability experts
      shaping the future of clean energy.
    </p>

    {/* Content Box */}
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Why Partner With RE PAX?
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        RE PAX offers organizations an opportunity to create long-term
        collaborations, increase brand visibility, engage directly with
        decision-makers, and showcase innovative products and services before
        a highly targeted audience from the renewable energy sector.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We invite technology providers, corporate organizations, government
        agencies, industry associations, media partners, academic
        institutions, startups, and clean energy companies to join us in
        accelerating India's sustainable energy transition through impactful
        partnerships.
      </p>

    </div>

    {/* Bottom Text */}

    <div className="mx-auto mt-12 max-w-4xl">

      <p className="text-base leading-8 text-slate-500">
        Every partnership at RE PAX is designed to deliver meaningful value
        through strategic networking, collaborative initiatives, industry
        engagement, and increased market visibility. Together, we can drive
        innovation, strengthen the renewable energy ecosystem, and contribute
        to a more sustainable future.
      </p>

    </div>

  </div>

</section>

  

    </>
  );
}
import Link from "next/link";
import {
  FaMicrophone,
  FaGlobe,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

export default function SpeakerApplicationPage() {
  return (
    <>
      {/* Hero */}
    

<section className="relative overflow-hidden bg-white py-28">

  <div className="relative mx-auto max-w-5xl px-6 text-center">

    {/* Badge */}
    <span className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
       RE PAX INDIA 2026
    </span>

    {/* Heading */}
    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-5xl">
      Speaker
      <span className="block text-orange-500">
        Applications
      </span>
    </h1>

    {/* Description */}

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
      Share your expertise and inspire the future of renewable energy by
      speaking at <span className="font-semibold text-slate-900">RE PAX India Summit</span>.
      Join an influential lineup of industry pioneers, policymakers,
      entrepreneurs, researchers, and technology leaders driving India's
      clean energy transformation.
    </p>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
      We welcome experienced professionals, innovators, business executives,
      government representatives, academics, and sustainability experts to
      present groundbreaking ideas, emerging technologies, successful case
      studies, and strategic insights that will shape the future of the
      renewable energy sector.
    </p>

  

    {/* Bottom Text */}

    <div className="mt-16 border-t border-slate-200 pt-8">

      <p className="mx-auto max-w-4xl text-base leading-8 text-slate-500">
        Speaking at RE PAX India Summit provides an exceptional opportunity to
        showcase your knowledge, strengthen your professional profile, engage
        with decision-makers, and contribute to meaningful discussions that
        accelerate innovation and sustainable growth within India's renewable
        energy ecosystem.
      </p>

    </div>

  </div>

</section>


  
    </>
  );
}
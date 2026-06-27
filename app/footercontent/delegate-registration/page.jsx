import Link from "next/link";
import {
  FaUserCheck,
  FaUsers,
  FaCertificate,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

export default function DelegateRegistrationPage() {
  return (
    <>
      {/* Hero */}
{/* Hero */}
<section className="relative overflow-hidden bg-white py-28">



  <div className="relative mx-auto max-w-5xl px-6 text-center">

    {/* Badge */}
    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
       RE PAX INDIA 2026
    </span>

    {/* Heading */}
    <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-5xl">
      Delegate
      <span className="text-orange-500"> Registration</span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Be part of <span className="font-semibold text-slate-900">RE PAX India Summit</span>,
      India's leading renewable energy conference, bringing together
      policymakers, investors, EPC companies, manufacturers, developers,
      technology providers, researchers, and sustainability professionals
      under one roof.
    </p>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
      Register as a delegate to gain exclusive access to keynote sessions,
      technical discussions, networking opportunities, innovative product
      showcases, and valuable business interactions that will help shape the
      future of India's clean energy ecosystem.
    </p>

    {/* Bottom Box */}
    <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h3 className="text-2xl font-bold text-slate-900">
        Why Attend RE PAX India?
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Discover emerging renewable energy technologies, connect with industry
        leaders, explore investment opportunities, and build meaningful
        relationships with professionals driving innovation across the solar,
        wind, storage, green hydrogen, EV, and sustainable infrastructure
        sectors.
      </p>

    </div>

  </div>

</section>



   
    </>
  );
}
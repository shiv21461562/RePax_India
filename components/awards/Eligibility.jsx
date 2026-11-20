
import { Award } from "lucide-react";

export default function Eligibility() {
  const eligibilityItems = [
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
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#001B4D] sm:text-3xl md:text-4xl">
            Eligibility
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Organizations driving innovation, excellence and impact across the
            payments, fintech and banking ecosystem are invited to apply.
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {eligibilityItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                <Award size={28} className="text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-[#001B4D]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

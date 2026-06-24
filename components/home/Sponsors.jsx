"use client";

const sponsors = [
  { name: "Microsoft" },
  { name: "Google" },
  { name: "Amazon" },
  { name: "Tesla" },
  { name: "Siemens" },
  { name: "IBM" },
  { name: "Adobe" },
  { name: "Oracle" },
];

export default function Sponsors() {
  const items = [...sponsors, ...sponsors];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            Sponsors & Partners
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted By Industry Leaders
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600">
            Proudly supported by leading organizations driving innovation,
            sustainability and global collaboration.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="sponsor-slider flex gap-6 w-max">
          {items.map((sponsor, index) => (
            <div
              key={index}
              className="group flex items-center justify-center min-w-[220px] h-[120px] rounded-3xl border border-slate-200 bg-white hover:border-orange-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#0B3A63] text-white flex items-center justify-center font-bold text-lg group-hover:bg-orange-500 transition-all">
                  {sponsor.name.charAt(0)}
                </div>

                <h3 className="font-semibold text-slate-900">
                  {sponsor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
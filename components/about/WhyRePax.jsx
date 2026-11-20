
"use client";

export default function WhyRePax() {
  const benefits = [
    "Learn from industry experts and policymakers",
    "Discover innovative technologies and solutions",
    "Explore investment and funding opportunities",
    "Build relationships with key decision-makers",
    "Showcase products and services",
    "Generate high-quality business leads",
    "Understand government initiatives and policy developments",
    "Stay informed about emerging market trends",
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="group relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-orange-500" />

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://i.pinimg.com/1200x/de/7d/37/de7d376c0f762d4f066fdf6662f79e85.jpg"
                alt="Renewable energy industry"
                className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[460px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-orange-500" />
          </div>

          {/* Content */}
          <div className="lg:pl-3">

            <span className="mb-4 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
              Why RE-PAX India
            </span>

            <p className="mb-4 text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl lg:text-[24px]">
              Where Renewable Energy Leaders{" "}
              <span className="text-orange-500">
                Connect, Collaborate & Grow
              </span>
            </p>

            <p className="mb-6 max-w-xl text-[14px] leading-7 text-slate-600 md:text-[15px]">
              RE-PAX India brings together the renewable energy ecosystem
              on one platform, connecting businesses, industry leaders,
              policymakers, investors, and technology providers to
              accelerate India's clean energy transition.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                    ✓
                  </span>

                  <p className="text-[13px] font-medium leading-6 text-slate-700 md:text-sm">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Description */}
            <p className="mt-6 border-l-[3px] border-orange-500 pl-4 text-[13px] leading-7 text-slate-500 md:text-sm">
              More than an exhibition, RE-PAX India is an integrated
              experience designed to accelerate collaboration, encourage
              innovation, and create meaningful business opportunities
              across the renewable energy sector.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

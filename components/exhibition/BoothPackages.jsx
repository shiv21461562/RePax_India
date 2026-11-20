
"use client";

export default function BoothPackages({ onBook }) {
  const packages = [
    {
      title: "Standard Booth",
      size: "6 sqm",
      price: "₹80,000",
      color: "bg-white",
      description:
        "Ideal for startups and small businesses looking to establish their presence.",
      features: [
        "Standard Booth Space",
        "Company Listing",
        "2 Delegate Passes",
        "Branding Support",
        "Networking Access",
      ],
    },
    {
      title: "Premium Booth",
      size: "9 sqm",
      price: "₹1,00,000",
      popular: true,
      color: "bg-[#255B7D]",
      description:
        "Perfect for established companies seeking greater visibility.",
      features: [
        "Prime Booth Location",
        "Premium Branding",
        "4 Delegate Passes",
        "Website Feature",
        "Social Media Mention",
        "Business Matchmaking Support",
      ],
    },
    {
      title: "Custom Pavilion",
      size: "12+ sqm",
      price: "₹1,50,000",
      color: "bg-white",
      description:
        "Designed for organizations looking to create an immersive brand experience.",
      features: [
        "Large Custom Space",
        "Bespoke Booth Design",
        "Product Demonstration Area",
        "Meeting Lounge",
        "VIP Passes",
        "Dedicated Branding Opportunities",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-[#001B4D]">
            Booth
            <span className="text-orange-500"> Packages</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Reserve your exhibition space and position your brand among the
            industry's leading innovators at RE-PAX India 2026.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-[32px] ${
                item.color
              } p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-orange-500 px-6 py-2 text-sm font-semibold text-white">
                  MOST POPULAR
                </span>
              )}

              {/* Title */}
              <h3
                className={`text-3xl font-bold ${
                  item.popular ? "text-white" : "text-[#001B4D]"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-2 text-sm ${
                  item.popular ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {item.description}
              </p>

              {/* Booth Size */}
              <p
                className={`mt-2 ${
                  item.popular ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Booth Size • {item.size}
              </p>

              {/* Price */}
              <div
                className={`mt-8 text-5xl font-bold ${
                  item.popular ? "text-orange-400" : "text-orange-500"
                }`}
              >
                {item.price}
              </div>

              {/* Features */}
              <ul className="mt-10 space-y-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 ${
                      item.popular ? "text-white" : "text-slate-700"
                    }`}
                  >
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Booking Button */}
              <button
                type="button"
                onClick={onBook}
                className={`mt-10 w-full rounded-full py-4 font-semibold transition ${
                  item.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-[#255B7D] text-white hover:bg-[#1B4966]"
                }`}
              >
                Book Booth
              </button>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <p className="mt-12 text-center text-sm text-slate-500">
          * Our team will help you select the best booth location, recommend
          branding opportunities, and ensure a successful exhibition
          experience.
        </p>
      </div>
    </section>
  );
}

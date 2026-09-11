import Image from "next/image";
import Link from "next/link";

const previousConferences = [
  {
    id: "jodhpur-2026",
    year: "2026",
    title: "Indana Palace",
    location: "Jodhpur, Rajasthan, India",
    attendees: "500+ Attendees",
    image: "/conferences/indana.jpg",
  },
  {
    id: "nashik-2026",
    year: "2026",
    title: "Radisson Blu",
    location: "Nashik, India",
    attendees: "350+ Attendees",
    image: "/conferences/radison.webp",
  },
];

export default function PreviousConferences() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Our Legacy
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Previous{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Conferences
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            A glimpse into our previous conferences that brought together
            industry leaders, policymakers and innovators.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {previousConferences.map((conference) => (
            <Link
              key={conference.id}
              href={`/gallery?conference=${conference.id}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/40 bg-white/40 shadow-xl shadow-gray-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-200/60 hover:bg-white/60 hover:shadow-2xl hover:shadow-orange-200/30"
            >
              {/* Glass shine effect */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={conference.image}
                  alt={conference.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Year badge */}
                <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/30 px-4 py-1.5 text-sm font-bold text-white shadow-md backdrop-blur-md">
                  {conference.year}
                </div>

                {/* Title over image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {conference.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-6 py-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-orange-200/50 bg-orange-50/60 text-orange-600 backdrop-blur-sm">
                    📍
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    {conference.location}
                  </span>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
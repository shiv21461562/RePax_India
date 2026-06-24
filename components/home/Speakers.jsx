"use client";

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Sustainability Leader",
    company: "Green Future Foundation",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "CleanTech Global",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    name: "Emma Wilson",
    role: "Climate Policy Expert",
    company: "UN Climate Initiative",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
  },
  {
    name: "David Kumar",
    role: "Innovation Director",
    company: "Future Energy Labs",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  },
];

export default function Speakers() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
            Featured Speakers
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Meet Our Speakers
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Hear from global leaders, innovators and sustainability experts
            shaping tomorrow's world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[340px]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Footer Color Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A63] via-[#0B3A63]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Speaker Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {speaker.name}
                </h3>

                <p className="mt-2 text-orange-500 font-semibold">
                  {speaker.role}
                </p>

                <p className="mt-2 text-slate-500 text-sm">
                  {speaker.company}
                </p>

                <div className="mt-5 mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
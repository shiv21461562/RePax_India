"use client";

const galleryImages = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            EVENT GALLERY
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Moments From Previous Editions
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Explore highlights, networking sessions, keynote speeches,
            exhibitions, and memorable moments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
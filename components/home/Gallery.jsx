"use client";

const galleryImages = [
  "/gallary/image1.jpeg",
  "/gallary/image2.jpeg",
  "/gallary/image3.jpeg",
  "/gallary/image4.jpeg",
  "/gallary/image5.jpeg",
  "/gallary/image6.jpeg",
];

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            EVENT GALLERY
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Moments From Previous Editions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Explore highlights, networking sessions, keynote speeches,
            exhibitions and memorable moments from RE-PAX India.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

const galleryImages = [
  "/gallary/image20.jpeg",
  "/gallary/image21.jpeg",
  "/gallary/image25.jpeg",
  "/gallary/image29.jpeg",
  "/gallary/image27.jpeg",
  "/gallary/award24.jpeg",
];

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
         <div className="flex items-center justify-center gap-5">
  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

  <span
    className="
      font-poppins
      text-xs
      sm:text-sm
      md:text-base
      font-medium
      uppercase
      tracking-[0.18em]
      text-red-500
      text-center
      whitespace-nowrap
    "
  >
    EVENT GALLERY
  </span>

  <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
</div>

        <h2
  className="
    mt-4
    font-serif
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-bold
    leading-tight
    tracking-tight
    text-gray-900
  "
>
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
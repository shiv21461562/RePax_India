"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Conference Sessions",
    image: "/gallary/image1.jpeg",
    title: "Conference Session",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 2,
    category: "Keynote Speakers",
    image: "/gallary/image2.jpeg",
    title: "Keynote Speakers",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 3,
    category: "Exhibition",
    image: "/gallary/image3.jpeg",
    title: "Exhibition Hall",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 4,
    category: "Networking",
    image: "/gallary/image4.jpeg",
    title: "Industry Networking",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 5,
    category: "Awards Ceremony",
    image: "/gallary/image5.jpeg",
    title: "Leadership Awards",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 6,
    category: "Product Launches",
    image: "/gallary/image6.jpeg",
    title: "Product Launch",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 7,
    category: "Sponsors",
    image: "/gallary/image7.jpeg",
    title: "Sponsors & Partners",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 8,
    category: "Media Coverage",
    image: "/gallary/image8.jpeg",
    title: "Media Coverage",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 9,
    category: "Solar Exhibition",
    image: "/gallary/image9.jpeg",
    title: "Solar Exhibition",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 10,
    category: "Panel Discussion",
    image: "/gallary/image10.jpeg",
    title: "Panel Discussion",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 11,
    category: "Business Meetings",
    image: "/gallary/image11.jpeg",
    title: "B2B Meetings",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 12,
    category: "Closing Ceremony",
    image: "/gallary/image12.jpeg",
    title: "Closing Ceremony",
    subtitle: "RE-PAX INDIA",
  },
  // Awards Images
  {
    id: 13,
    category: "Awards",
    image: "/gallary/award1.jpeg",
    title: "Best Innovation Award",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 14,
    category: "Awards",
    image: "/gallary/award2.jpeg",
    title: "Excellence in Leadership",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 15,
    category: "Awards",
    image: "/gallary/award3.jpeg",
    title: "Sustainability Champion",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 16,
    category: "Awards",
    image: "/gallary/award4.jpeg",
    title: "Industry Pioneer Award",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 17,
    category: "Awards",
    image: "/gallary/award5.jpeg",
    title: "Community Impact Award",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 18,
    category: "Awards",
    image: "/gallary/award6.jpeg",
    title: "Lifetime Achievement",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 19,
    category: "Awards",
    image: "/gallary/award7.jpeg",
    title: "Award Winner 7",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 20,
    category: "Awards",
    image: "/gallary/award8.jpeg",
    title: "Award Winner 8",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 21,
    category: "Awards",
    image: "/gallary/award9.jpeg",
    title: "Award Winner 9",
    subtitle: "RE-PAX INDIA 2025",
  },
  {
    id: 22,
    category: "Awards",
    image: "/gallary/award10.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 23,
    category: "Awards",
    image: "/gallary/award11.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 24,
    category: "Awards",
    image: "/gallary/award12.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 25,
    category: "Awards",
    image: "/gallary/award13.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 26,
    category: "Awards",
    image: "/gallary/award14.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 27,
    category: "Awards",
    image: "/gallary/award15.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 28,
    category: "Awards",
    image: "/gallary/award16.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
    {
    id: 29,
    category: "Awards",
    image: "/gallary/award17.jpeg",
    title: "Award Winner 10",
    subtitle: "RE-PAX INDIA 2025",
  },
];

// Regular images (without Awards)
const regularImages = galleryImages.filter(item => item.category !== "Awards");
// Only Awards images
const awardsImages = galleryImages.filter(item => item.category === "Awards");

export default function GalleryPage() {
  const [showAwards, setShowAwards] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Show regular images by default, show only awards when button is clicked
  const displayedImages = showAwards ? awardsImages : regularImages;

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 md:mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            GALLERY
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Conference Moments
          </h2>

          <p className="mt-4 md:mt-5 text-base md:text-lg leading-7 md:leading-8 text-slate-600 px-4">
            Explore the highlights from RE-PAX India—from insightful conference
            sessions and keynote speeches to exhibitions, networking events,
            business meetings, product launches, and memorable award ceremonies.
          </p>
        </motion.div>

        {/* Awards Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12 flex justify-center"
        >
          <button
            onClick={() => setShowAwards(!showAwards)}
            className={`group relative px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg hover:shadow-2xl ${
              showAwards
                ? "bg-gradient-to-r from-[#0B1F3A] to-[#163A6B] text-white shadow-blue-900/40"
                : "bg-[#111827] text-white border border-[#374151] hover:bg-[#1F2937] hover:border-[#F59E0B]"
            }`}
          >
            {showAwards ? (
              <>
                <X className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-90 text-[#F59E0B]" />
                <span>Show All Images</span>
              </>
            ) : (
              <>
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-[#F59E0B] group-hover:scale-110 transition-transform" />
                <span>View Awards Ceremony</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Gallery Grid - 2 columns on mobile, 2 on tablet, 4 on desktop */}
        <motion.div
          layout
          className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="wait">
            {displayedImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-md md:shadow-lg relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Zoom icon on hover - No text below */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal - Full Screen */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 md:p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all duration-300"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info - Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6 rounded-b-lg">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 mt-1">
                  {selectedImage.subtitle}
                </p>
                <p className="text-xs md:text-sm text-white/60 mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
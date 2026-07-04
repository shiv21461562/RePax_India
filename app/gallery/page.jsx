"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  Mic,
  Building2,
  Handshake,
  Trophy,
  Rocket,
  Grid3x3,
  Image as ImageIcon,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Conference Sessions",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
    title: "RE-PAX INDIA",
    subtitle: "CONFERENCE SESSION",
  },
  {
    id: 2,
    category: "Keynote Speakers",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200",
    title: "Shaping India's Renewable Energy Future",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 3,
    category: "Exhibition",
    image:
      "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=1200",
    title: "Exhibition Hall",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 4,
    category: "Networking",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200",
    title: "Industry Networking",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 5,
    category: "Awards Ceremony",
    image:
      "https://images.unsplash.com/photo-1601933470928-c5b0b0d0a8b9?w=1200",
    title: "RE-PAX INDIA LEADERSHIP AWARDS",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 6,
    category: "Product Launches",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    title: "Product Launch",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 7,
    category: "Sponsors",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    title: "RE-PAX INDIA Gala",
    subtitle: "RE-PAX INDIA",
  },
  {
    id: 8,
    category: "Media Coverage",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200",
    title: "Media Coverage",
    subtitle: "RE-PAX INDIA",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase">
            GALLERY
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Conference Moments
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore the highlights from RE-PAX India - from insightful sessions
            and networking to exhibitions and award ceremonies.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-orange-50/70 p-8 sm:flex-row"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 text-orange-500">
              <ImageIcon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Want to Explore More Moments?
              </h3>
              <p className="mt-1 text-slate-500">
                Discover hundreds of memorable moments from RE-PAX conferences,
                exhibitions, networking sessions, leadership awards, and more.
              </p>
            </div>
          </div>

          <button className="flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
            <ImageIcon size={18} />
            View More Photos
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600"
              >
                ✕
              </button>
              <div className="relative h-[60vh] w-full">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {selectedImage.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-white">
                    {selectedImage.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
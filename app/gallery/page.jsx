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
    image: "/gallary/image1.jpeg",
    title: "RE-PAX INDIA",
    subtitle: "CONFERENCE SESSION",
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
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
  <section className="relative overflow-hidden bg-white pt-40 pb-20">
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
        GALLERY
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        Conference Moments
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Explore the highlights from RE-PAX India—from insightful conference
        sessions and keynote speeches to exhibitions, networking events,
        business meetings, product launches, and memorable award ceremonies.
      </p>
    </motion.div>

    {/* Gallery */}
    <motion.div
      layout
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
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
            className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>
  );
}
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { conferences } from "./galleryData";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, ZoomIn, ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  const searchParams = useSearchParams();

  const [selectedConferenceId, setSelectedConferenceId] = useState(
    searchParams.get("conference"),
  );

  const [showAwards, setShowAwards] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectedConference = conferences.find(
    (c) => c.id === selectedConferenceId,
  );

  const displayedImages = selectedConference
    ? showAwards
      ? selectedConference.awardImages
      : selectedConference.images
    : [];

  const handleBack = () => {
    setSelectedConferenceId(null);
    setShowAwards(false);
    setSelectedImage(null);
  };

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
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
            Conference Moments
          </h2>

          <p className="mt-4 md:mt-5 text-base md:text-lg leading-7 md:leading-8 text-slate-600 px-4">
            Explore the highlights from RE-PAX India — from insightful
            conference sessions and keynote speeches to exhibitions, networking
            events, and memorable award ceremonies.
          </p>
        </motion.div>

        {/* ---------------- CONFERENCE CARDS VIEW ---------------- */}
        {!selectedConference && (
          <motion.div
            layout
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conferences.map((conference, index) => (
              <motion.div
                key={conference.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => setSelectedConferenceId(conference.id)}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative"
              >
                <img
                  src={conference.cover}
                  alt={conference.name}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {conference.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      Click to view gallery
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ---------------- SINGLE CONFERENCE VIEW ---------------- */}
        {selectedConference && (
          <>
            {/* Back + Awards toggle row */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all conferences
              </button>

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
            </div>

            <h3 className="mb-6 text-2xl font-bold text-slate-900 text-center">
              {selectedConference.name}
            </h3>

            {/* Gallery Grid */}
            <motion.div
              layout
              className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4"
            >
              <AnimatePresence mode="wait">
                {displayedImages.map((image, index) => (
                  <motion.div
                    key={image}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    onClick={() => setSelectedImage(image)}
                    className="group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-md md:shadow-lg relative"
                  >
                    <img
                      src={image}
                      alt={selectedConference.name}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {displayedImages.length === 0 && (
              <p className="text-center text-slate-500 mt-10">
                No images added yet for this section.
              </p>
            )}
          </>
        )}
      </div>

      {/* ---------------- FULLSCREEN IMAGE MODAL ---------------- */}
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
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all duration-300"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

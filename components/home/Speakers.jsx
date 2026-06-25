"use client";

import { useEffect, useState } from "react";
import { getSpeakers } from "../../app/services/SpeakerApi";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const fetchSpeakers = async () => {
    try {
      const response = await getSpeakers();

      if (response.success) {
        setSpeakers(response.data);
      }
    } catch (error) {
      console.error("Error fetching speakers:", error);
    }
  };

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
          {speakers.slice(0, 4).map((speaker) => (
            <div
              key={speaker.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                border
                border-slate-200
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-4
                hover:border-orange-400
                hover:shadow-[0_25px_60px_rgba(249,115,22,0.20)]
                cursor-pointer
              "
            >
              <div className="relative h-[430px] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d203b] via-[#0d203b]/40 to-transparent opacity-70 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-300">
                    Featured Speaker
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {speaker.name}
                  </h3>

                  <p className="mt-2 text-orange-300">{speaker.designation}</p>

                  <p className="text-sm text-slate-300 mt-1">
                    {speaker.company}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {speaker.bio}
                  </p>

                  <div className="mt-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* LinkedIn */}
                    <a
                      href={speaker.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label={`${speaker.name}'s LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={speaker.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label={`${speaker.name}'s Twitter`}
                    >
                      <FaXTwitter />
                    </a>

                    {/* Website */}
                    <a
                      href={speaker.website || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label={`${speaker.name}'s Website`}
                    >
                      <FiGlobe />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

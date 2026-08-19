"use client";

import { MapPin, Calendar, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Venue() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex flex-col items-center">
            <p
              className="
      font-sans
      text-[15px]
      md:text-[17px]
      font-semibold
      uppercase
      tracking-[0.22em]
      text-orange-500
      drop-shadow-[0_2px_4px_rgba(249,115,22,0.18)]
    "
            >
              Event Venue 
            </p>

            <div className="relative mt-3 flex items-center justify-center">
              <span className="h-[1px] w-8 bg-orange-200" />

              <span
                className="
        mx-2
        h-[3px]
        w-20
        rounded-full
        bg-orange-500
        shadow-[0_2px_8px_rgba(249,115,22,0.35)]
      "
              />

              <span className="h-[1px] w-8 bg-orange-200" />
            </div>
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Join Us At The Venue
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Experience world-class networking, exhibitions and sustainability
            discussions at India's premier event destination.
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            hover:border-orange-400
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[300px] lg:h-[320px] overflow-hidden">
              <Image
                src="/venue/indana.jpg"
                alt="Radisson Blu hotel exterior in Jodhpur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 z-10">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold text-white">
                    RE PAX INDIA 2026
                  </span>
               
                </span>

                <h3 className="mt-3 text-4xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  Indana Palace
                </h3>

                <p className="text-lg text-white font-medium">
                  Jodhpur, Rajasthan
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A63]">
                Indana Palace, Jodhpur, Rajasthan
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                One of India's leading conference and exhibition venues,
                bringing together global leaders, innovators and sustainability
                experts under one roof.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-orange-500" />
                  </div>

                  <span className="text-slate-700">
                    Indana Palace, Jodhpur,
                    <br />
                    Opp. Military Officer Quarters,
                    <br />
                    Benayakiya Road, Shikargarh,
                    <br />
                    Jodhpur, Rajasthan 342015
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Calendar size={18} className="text-orange-500" />
                  </div>

                  <span className="text-slate-700 font-medium">
                    9 September 2026
                  </span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Indana+Palace+Jodhpur%2C+Benayakiya+Road%2C+Shikargarh%2C+Jodhpur%2C+Rajasthan+342015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Radisson Blu, Jodhpur on Google Maps"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  w-fit
                  px-6
                  py-3
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  hover:bg-orange-600
                  hover:scale-105
                  active:scale-95
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-orange-500/25
                  hover:shadow-orange-500/40
                "
              >
                Get Directions
                <Navigation
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

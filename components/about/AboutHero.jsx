
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071827] pt-0 md:pt-[87px]">
      <div className="relative w-full min-h-[630px] sm:min-h-[660px] md:min-h-[720px]">

        {/* Background Image */}
        <img
          src="/speaker/aboutBG.png"
          alt="About RE-PAX India"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-[72%_center]
            sm:object-[70%_center]
            md:object-center
          "
        />

        {/* Dark Transparent Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#061522]/85
            via-[#071827]/75
            sm:via-[#071827]/65
            md:via-[#071827]/55
            to-[#071827]/20
          "
        />

        {/* Mobile Extra Dark Overlay */}
        <div
          className="
            absolute inset-0
            bg-[#061522]/20
            sm:bg-transparent
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10
            flex min-h-[620px]
            sm:min-h-[650px]
            md:min-h-[700px]
            items-center
          "
        >
          <div
            className="
              mx-auto w-full max-w-7xl
              px-5 sm:px-8 md:px-12 lg:px-16
            "
          >
            <div className="w-full max-w-[760px] pt-16 sm:pt-0">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start text-left"
              >

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="h-[2px] w-6 sm:w-10 bg-orange-500" />

                  <span
                    className="
                      font-poppins
                      text-[9px] xs:text-[10px]
                      sm:text-xs md:text-sm
                      font-medium uppercase
                      tracking-[0.12em]
                      sm:tracking-[0.22em]
                      text-orange-400 whitespace-nowrap
                    "
                  >
                    About RE-PAX India
                  </span>

                  <span className="h-[2px] w-6 sm:w-10 bg-orange-500" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="
                    mt-4 sm:mt-5 md:mt-6
                    w-full font-serif font-bold
                    leading-[1.08] tracking-tight text-white
                  "
                >
                  <span
                    className="
                      block text-[24px] xs:text-[26px]
                      sm:text-3xl md:text-4xl lg:text-5xl
                    "
                  >
                    Empowering India's
                  </span>

                  <span
                    className="
                      block text-[24px] xs:text-[26px]
                      sm:text-3xl md:text-4xl lg:text-5xl
                    "
                  >
                    Renewable Energy
                  </span>

                  <span
                    className="
                      block text-[24px] xs:text-[26px]
                      sm:text-3xl md:text-4xl lg:text-5xl
                      text-orange-500
                    "
                  >
                    Ecosystem
                  </span>

                  {/* Subtitle */}
                  <span
                    className="
                      mt-2 sm:mt-3 block
                      text-[11px] xs:text-xs
                      sm:text-base md:text-lg lg:text-xl
                      font-semibold leading-snug text-orange-400
                    "
                  >
                    Through Collaboration, Innovation & Leadership
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="
                    mt-4 sm:mt-5 md:mt-6
                    max-w-[650px]
                    text-[10px] xs:text-xs
                    sm:text-sm md:text-base
                    leading-4 sm:leading-6 md:leading-7
                    text-white/80
                  "
                >
                  India's renewable energy sector is undergoing a remarkable
                  transformation. As the nation accelerates toward ambitious
                  clean energy targets, RE-PAX India brings together
                  manufacturers, EPC companies, policymakers, investors,
                  technology providers, developers and sustainability leaders
                  to drive innovation, collaboration and business growth.
                </motion.p>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

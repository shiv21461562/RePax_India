// "use client";

// import { MapPin, Calendar, Navigation } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Venue() {
//   return (
//    <section className="relative py-16 bg-[#0B3A63] overflow-hidden">


//       <div className="container relative mx-auto px-4 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex flex-col items-center">
//             <p
//               className="
//       font-sans
//       text-[15px]
//       md:text-[17px]
//       font-semibold
//       uppercase
//       tracking-[0.22em]
//       text-orange-400
//       drop-shadow-[0_2px_4px_rgba(249,115,22,0.25)]
//     "
//             >
//               Event Venue
//             </p>

//             <div className="relative mt-3 flex items-center justify-center">
//               <span className="h-[1px] w-8 bg-orange-500/30" />

//               <span
//                 className="
//         mx-2
//         h-[3px]
//         w-20
//         rounded-full
//         bg-orange-500
//         shadow-[0_2px_8px_rgba(249,115,22,0.45)]
//       "
//               />

//               <span className="h-[1px] w-8 bg-orange-500/30" />
//             </div>
//           </div>

//           <h2
//             className="
//     mt-4
//     font-serif
//     text-xl
//     sm:text-2xl
//     md:text-3xl
//     font-bold
//     leading-tight
//     tracking-tight
//     text-white
//   "
//           >
//             Join Us At The Venue
//           </h2>

//           <p className="mt-4 max-w-2xl mx-auto text-slate-400">
//             Experience world-class networking, exhibitions and sustainability
//             discussions at India's premier event destination.
//           </p>
//         </motion.div>

//         {/* Venue Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="
//             overflow-hidden
//             rounded-[32px]
//             border
//             border-slate-200
//             bg-white
//             shadow-2xl
//             shadow-black/40
//             hover:border-orange-400
//             hover:shadow-orange-500/20
//             transition-all
//             duration-500
//           "
//         >
//           <div className="grid lg:grid-cols-2">
//             {/* Image */}
//             <div className="flex flex-col">
//               <div className="relative h-[300px] lg:h-[320px] overflow-hidden">
//                 <Image
//                   src="/venue/indana.jpg"
//                   alt="Radisson Blu hotel exterior in Jodhpur"
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-cover transition duration-700 hover:scale-110"
//                 />
//               </div>

//               <div className="px-6 py-5 bg-white">
//                 <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold text-white">
//                   RE PAX INDIA 2026
//                 </span>

//                 <h3 className="mt-3 text-3xl font-bold text-[#0B3A63]">
//                   Indana Palace
//                 </h3>

//                 <p className="text-lg text-slate-600 font-medium">
//                   Jodhpur, Rajasthan
//                 </p>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-8 lg:p-10 flex flex-col justify-center">
//               <div className="flex flex-col items-start">
//                 {/* 5 Star Rating */}
//                 <div className="flex gap-1 mb-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       className="text-[#D4AF37] text-lg sm:text-xl"
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 <h3
//                   className="
//       font-serif
//       text-xl
//       sm:text-2xl
//       md:text-3xl
//       font-bold
//       leading-tight
//       tracking-tight
//       text-[#0B3A63]
//     "
//                 >
//                   Indana Palace, Jodhpur, Rajasthan
//                 </h3>
//               </div>
//               <p className="mt-4 text-slate-600 leading-7">
//                 One of India's leading conference and exhibition venues,
//                 bringing together global leaders, innovators and sustainability
//                 experts under one roof.
//               </p>

//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center gap-4">
//                   <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
//                     <MapPin size={18} className="text-orange-500" />
//                   </div>

//                   <span className="text-slate-700">
//                     Indana Palace, Jodhpur,
//                     <br />
//                     Opp. Military Officer Quarters,
//                     <br />
//                     Benayakiya Road, Shikargarh,
//                     <br />
//                     Jodhpur, Rajasthan 342015
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="h-11 w-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
//                     <Calendar size={18} className="text-orange-500" />
//                   </div>

//                   <span className="text-slate-700 font-medium">
//                     9 September 2026
//                   </span>
//                 </div>
//               </div>

              
// <a
//   href="https://www.google.com/maps/dir/?api=1&destination=Indana+Palace+Jodhpur%2C+Benayakiya+Road%2C+Shikargarh%2C+Jodhpur%2C+Rajasthan+342015"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Get directions to Indana Palace, Jodhpur on Google Maps"
//   className="
//     mt-8
//     inline-flex
//     items-center
//     gap-2
//     w-fit
//     px-6
//     py-3
//     rounded-full
//     bg-orange-500
//     text-white
//     font-semibold
//     hover:bg-orange-600
//     hover:scale-105
//     active:scale-95
//     transition-all
//     duration-300
//     shadow-lg
//     shadow-orange-500/25
//     hover:shadow-orange-500/40
//   "
// >
//   Get Directions
//   <Navigation
//     size={18}
//     className="transition-transform group-hover:translate-x-1"
//   />
// </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







"use client";

import { MapPin, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-20">
     

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="font-sans text-[15px] font-semibold uppercase tracking-[0.22em] text-orange-500 md:text-[17px]">
              Event Venue
            </p>

            <div className="relative mt-3 flex items-center justify-center">
              <span className="h-px w-8 bg-orange-400/40" />
              <span className="mx-2 h-[3px] w-20 rounded-full bg-orange-500 shadow-[0_2px_8px_rgba(249,115,22,0.3)]" />
              <span className="h-px w-8 bg-orange-400/40" />
            </div>
          </div>

          <h2 className="mt-4 font-serif text-xl font-bold leading-tight tracking-tight text-[#0B3A63] sm:text-2xl md:text-3xl">
            Join Us 
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
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
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.06]"
        >
          <div className="flex flex-col items-center px-8 pb-14 pt-12 text-center lg:px-16">
            <div className="inline-flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
              </span>
              <span className="font-poppins text-2xl font-extrabold uppercase tracking-[0.1em] text-orange-500 sm:text-3xl">
                Coming Soon
              </span>
            </div>

         

         

            <p className="mt-4 max-w-xl leading-relaxed text-slate-500">
              We're finalizing a venue worthy of India's premier renewable
              energy gathering. The exact property will be announced shortly
              — stay tuned.
            </p>


       
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// const newsItems = [
//   {
//     date: "15 June 2026",
//     title: "RePax 2026 Announces Global Sustainability Leaders",
//     description:
//       "Leading experts and innovators from across the globe join the speaker lineup.",
//   },
//   {
//     date: "10 June 2026",
//     title: "Startup Pavilion Applications Now Open",
//     description:
//       "Emerging startups can now apply to showcase their innovations at RePax 2026.",
//   },
//   {
//     date: "05 June 2026",
//     title: "Strategic Partnership Program Launched",
//     description:
//       "New partnership opportunities available for industry leaders and exhibitors.",
//   },
// ];

// export default function News() {
//   return (
//     <section className="py-24 bg-[#F8FAFC]">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase">
//             Latest News
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
//             News & Updates
//           </h2>

//           <p className="mt-5 max-w-3xl mx-auto text-slate-600">
//             Stay informed with the latest announcements about RE-PAX India,
//             speaker updates, agenda releases, award nominations, sponsorship
//             opportunities, and renewable energy industry news.
//           </p>
//         </motion.div>

//         {/* News Cards */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {newsItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.15,
//               }}
//               className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 hover:border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
//             >
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63] to-[#114D7E] opacity-0 group-hover:opacity-100 transition-all duration-500" />

//               <div className="relative z-10">
//                 {/* Date */}
//                 <span className="inline-flex px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold group-hover:bg-white/10 group-hover:text-orange-300 transition-all">
//                   {item.date}
//                 </span>

//                 {/* Title */}
//                 <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-slate-600 leading-relaxed group-hover:text-slate-200 transition-colors">
//                   {item.description}
//                 </p>

//                 {/* Read More */}
//                 <button className="mt-6 inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:text-orange-300 transition-all">
//                   Read More
//                   <span className="group-hover:translate-x-1 transition-transform">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

     
//       </div>
//     </section>
//   );
// }

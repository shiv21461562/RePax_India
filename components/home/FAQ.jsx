// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "Who should attend RePax 2026?",
//     answer:
//       "Industry leaders, startups, investors, policymakers, researchers and sustainability professionals.",
//   },
//   {
//     question: "Where will the event take place?",
//     answer:
//       "The event will be hosted at a world-class venue with networking, exhibition and conference facilities.",
//   },
//   {
//     question: "How can I become a sponsor?",
//     answer:
//       "You can contact our sponsorship team through the registration section or sponsor inquiry form.",
//   },
//   {
//     question: "Can startups participate?",
//     answer:
//       "Yes, startups can exhibit, pitch innovations and connect with investors through the Startup Pavilion.",
//   },
//   {
//     question: "Will certificates be provided?",
//     answer:
//       "Yes, participation certificates will be available for registered attendees.",
//   },
// ];

// export default function FAQ() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative py-24 overflow-hidden bg-[#1F567A]">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#1F567A] via-[#225F87] to-[#184C6C]" />

//       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

//       <div className="relative container mx-auto px-4 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase">
//             FAQ
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
//             Frequently Asked Questions
//           </h2>

//           <p className="mt-5 max-w-3xl mx-auto text-slate-300">
//             Everything you need to know before attending RePax 2026.
//           </p>
//         </motion.div>

//         {/* FAQ Cards */}
//         <div className="max-w-5xl mx-auto space-y-5">
//           {faqs.map((faq, index) => {
//             const isOpen = active === index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//                 className={`overflow-hidden rounded-3xl transition-all duration-300 ${
//                   isOpen
//                     ? "bg-white shadow-2xl border border-orange-400"
//                     : "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/50"
//                 }`}
//               >
//                 <button
//                   onClick={() =>
//                     setActive(isOpen ? null : index)
//                   }
//                   className="w-full flex items-center justify-between p-6 md:p-7 text-left"
//                 >
//                   <h3
//                     className={`text-lg md:text-xl font-semibold transition-colors ${
//                       isOpen
//                         ? "text-slate-900"
//                         : "text-white"
//                     }`}
//                   >
//                     {faq.question}
//                   </h3>

//                   <div
//                     className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
//                       isOpen
//                         ? "bg-orange-500 text-white rotate-180"
//                         : "bg-white/10 text-white"
//                     }`}
//                   >
//                     {isOpen ? "−" : "+"}
//                   </div>
//                 </button>

//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         height: "auto",
//                         opacity: 1,
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.35,
//                       }}
//                     >
//                       <div className="px-7 pb-7 border-t border-slate-100">
//                         <p className="pt-5 text-slate-600 leading-relaxed">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>

      
//       </div>
//     </section>
//   );
// }
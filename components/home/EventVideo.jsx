// "use client";

// import { useEffect, useRef } from "react";

// export default function EventVideo() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           video?.play();
//         } else {
//           video?.pause();
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (video) observer.observe(video);

//     return () => {
//       if (video) observer.unobserve(video);
//     };
//   }, []);

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px]" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <div className="text-center max-w-4xl mx-auto mb-14">
//           <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
//             Event Experience
//           </span>

//           <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
//             Experience The Future Of
//             <span className="block text-green-400">
//               Sustainable Innovation
//             </span>
//           </h2>

//           <p className="mt-6 text-lg text-slate-300">
//             Explore the vision, energy, and opportunities that define ETES.
//             Watch highlights, discover innovations, and connect with industry
//             leaders shaping tomorrow.
//           </p>
//         </div>

//         {/* Video Card */}
//         <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//           <video
//             ref={videoRef}
//             muted
//             loop
//             playsInline
//             controls
//             preload="metadata"
//             className="w-full h-auto"
//             poster="/images/video-poster.jpg"
//           >
//             <source
//               src="/videos/event-preview.mp4"
//               type="video/mp4"
//             />
//           </video>

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
//             <h3 className="text-3xl font-bold text-green-400">5000+</h3>
//             <p className="text-slate-300 mt-2">Attendees</p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
//             <h3 className="text-3xl font-bold text-green-400">100+</h3>
//             <p className="text-slate-300 mt-2">Speakers</p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
//             <h3 className="text-3xl font-bold text-green-400">50+</h3>
//             <p className="text-slate-300 mt-2">Partners</p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
//             <h3 className="text-3xl font-bold text-green-400">3</h3>
//             <p className="text-slate-300 mt-2">Days Event</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
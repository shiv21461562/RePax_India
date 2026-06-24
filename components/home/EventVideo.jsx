"use client";

import { useEffect, useRef } from "react";

export default function EventVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video?.play().catch(() => {});
        } else {
          video?.pause();
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  const stats = [
    { number: "5000+", label: "Attendees" },
    { number: "100+", label: "Industry Speakers" },
    { number: "50+", label: "Exhibitors" },
    { number: "3", label: "Event Days" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-medium">
            Event Experience
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Witness The Future Of
            <span className="block bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Renewable Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            Experience powerful discussions, breakthrough technologies,
            strategic networking opportunities, and the innovations shaping the
            global clean energy transition.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow */}
          <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-[40px]" />

          {/* Video Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/images/video-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/event-preview.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Badge */}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
              <p className="text-white font-semibold">
                RE-PAX India Summit 2026
              </p>
              <p className="text-sm text-slate-300">
                Renewable Energy • Sustainability • Innovation
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-green-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

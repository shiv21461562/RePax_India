"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatsappButton() {
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const messages = [
    "👋 Hi there!",
    "Welcome to RE PAX India Summit.",
    "Looking for event details?",
    "Registration is open now.",
    "Click below to chat with our team.",
  ];

  useEffect(() => {
    if (!open) {
      setVisibleCount(0);
      return;
    }

    let count = 0;

    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);

      if (count >= messages.length) {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [open]);

  const whatsappLink =
    "https://wa.me/919873168426?text=Hi%20RE%20PAX%20Team,%20I%20want%20more%20information%20about%20the%20summit.";

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Popup */}
      <div
        className={`absolute bottom-20 right-0 w-[340px] overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] p-4 text-white">
          <h3 className="font-semibold">RE PAX Support</h3>
          <p className="text-sm text-white/80">
            Online • Usually replies instantly
          </p>
        </div>

        {/* Chat */}
        <div className="space-y-3 bg-[#ECE5DD] p-4 min-h-[260px]">
          {messages.slice(0, visibleCount).map((msg, index) => (
            <div key={index} className="animate-[fadeIn_0.4s_ease]">
              <div className="inline-block rounded-2xl rounded-tl-md bg-white px-4 py-2 text-sm text-gray-800 shadow">
                {msg}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25D366] py-4 text-center font-semibold text-white hover:bg-[#20ba5a]"
        >
          Connect to Our Team →
        </a>
      </div>

      {/* Floating Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
<img
  src="/images/Whatsapp.png"
  alt="WhatsApp"
  width="70"
  height="70"
/>
      </a>
    </div>
  );
}

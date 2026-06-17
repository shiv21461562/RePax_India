"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatsappButton() {
  const [open, setOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "👋 Hi there!",
    "How can I help you? 😊",
    "Welcome to RE PAX India Summit.",
    "Looking for event details?",
    "Registration is open now.",
    "Click below to chat with our team.",
  ];

  useEffect(() => {
    if (!open) {
      setCurrentMessageIndex(0);
      setCharIndex(0);
      setIsTyping(false);
      return;
    }

    // Start typing first message
    setCurrentMessageIndex(0);
    setCharIndex(0);
    setIsTyping(true);

    return () => {
      setIsTyping(false);
    };
  }, [open]);

  // Typing effect for all messages
  useEffect(() => {
    if (!isTyping || !open) return;

    const currentMessage = messages[currentMessageIndex];
    if (!currentMessage) return;

    // If current message is complete, move to next message
    if (charIndex >= currentMessage.length) {
      // Wait 0.5 second before starting next message
      const timeout = setTimeout(() => {
        if (currentMessageIndex < messages.length - 1) {
          setCurrentMessageIndex((prev) => prev + 1);
          setCharIndex(0);
        } else {
          // All messages complete
          setIsTyping(false);
        }
      }, 500);

      return () => clearTimeout(timeout);
    }

    // Type next character - FASTER TYPING SPEED
    const typingInterval = setInterval(() => {
      setCharIndex((prev) => prev + 1);
    }, 50); // Changed from 150ms to 50ms (3x faster!)

    return () => clearInterval(typingInterval);
  }, [isTyping, currentMessageIndex, charIndex, open]);

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
        <div className="space-y-3 bg-[#ECE5DD] p-4 min-h-[280px]">
          {/* Show all completed messages */}
          {messages.slice(0, currentMessageIndex).map((msg, index) => (
            <div key={index} className="flex justify-start">
              <div className="inline-block rounded-2xl rounded-tl-md bg-white px-4 py-2 text-sm text-gray-800 shadow max-w-[80%]">
                {msg}
              </div>
            </div>
          ))}

          {/* Show currently typing message with cursor */}
          {isTyping && currentMessageIndex < messages.length && (
            <div className="flex justify-start">
              <div className="inline-block rounded-2xl rounded-tl-md bg-white px-4 py-2 text-sm text-gray-800 shadow max-w-[80%]">
                {messages[currentMessageIndex].slice(0, charIndex)}
                {charIndex < messages[currentMessageIndex].length && (
                  <span className="inline-block w-[2px] h-4 bg-gray-600 ml-0.5 animate-pulse">
                    &nbsp;
                  </span>
                )}
              </div>
            </div>
          )}
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
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn"
>
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

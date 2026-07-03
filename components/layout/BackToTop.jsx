"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // easeInOutQuad easing function — smooth start aur smooth end
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const scrollToTop = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const startY = window.scrollY;
    const startTime = performance.now();
    const duration = 1200; // ms — isse badhao to aur dheere scroll hoga (e.g. 1800, 2000)

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      window.scrollTo(0, startY * (1 - eased));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 40 }}
          transition={{ duration: 0.35 }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="group fixed left-6 bottom-24 z-[99999] flex h-14 w-14 items-center justify-center rounded-full bg-[#1E5575] text-white shadow-2xl shadow-[#1E5575]/40 transition-all duration-300 hover:bg-[#256b91]"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-[#1E5575] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"></span>

          {/* Icon */}
          <ChevronUp
            size={28}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
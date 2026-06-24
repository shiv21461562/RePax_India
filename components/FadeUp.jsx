"use client";

import { motion } from "framer-motion";

export default function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
} 
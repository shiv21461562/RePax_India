// "use client";

// import { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import Link from "next/link";

// export default function EventPopup() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setIsOpen(true);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center px-5">

//       <div className="pointer-events-auto relative w-full max-w-[650px]">

//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={() => setIsOpen(false)}
//           aria-label="Close popup"
//           className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#071B39] text-white shadow-lg transition-all duration-200 hover:bg-[#FF6500]"
//         >
//           <X size={20} />
//         </button>

//         {/* Poster */}
//         <Link
//           href="/register"
//           className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_15px_60px_rgba(0,0,0,0.25)]"
//         >
//           <img
//             src="/event-popup/repax-banner.png"
//             alt="RE-PAX India 2026 Event"
//             className="block max-h-[75vh] w-full object-contain"
//           />
//         </Link>

//       </div>
//     </div>
//   );
// }

"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

/* ---------- Settings (yahin se tweak karo) ---------- */

const POSTER_SRC = "/event-popup/repax-banner.png";

const SHOW_DELAY_MS = 1000; // page load ke kitni der baad popup aaye
const SHOW_ONCE_PER_SESSION = false; // true karo to ek session me sirf ek baar dikhega
const STORAGE_KEY = "repax-popup-seen";
const REGISTER_HREF = "/register";
const SPONSOR_HREF = "/sponsors";

export default function EventPopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
  }, []);

  useEffect(() => {
    try {
      if (SHOW_ONCE_PER_SESSION && sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, SHOW_DELAY_MS);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mounted, close]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="RE-PAX India 2026"
      className={`fixed inset-0 z-[9999] flex items-start justify-center px-4 pt-[125px] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Simple dim overlay - NO blur, background clear dikhega */}
      <div onClick={close} className="absolute inset-0 bg-black/55" />

      {/* Popup */}
      <div
        className={`relative w-fit max-w-[650px] -translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-95 opacity-0"
        }`}
      >

        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute -right-3 -top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#071B39] text-white shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all duration-200 hover:rotate-90 hover:bg-[#FF6500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB300]"
        >
          <X size={20} />
        </button>



        {/* Thin gold border + poster (poster hi hero hai, poora dikhega) */}
        <div className="rounded-[18px] bg-gradient-to-br from-[#FFD36B] via-[#FF8A1F] to-[#FFD36B] p-[3px] shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
          <Link
            href={REGISTER_HREF}
            onClick={close}
            aria-label="Register for RE-PAX India 2026"
            className="block overflow-hidden rounded-[15px] bg-[#071B39]"
          >
            <img
              src={POSTER_SRC}
              alt="RE-PAX India 2026 - Solar Summit, Awards & Expo, December 2026, Raipur"
              className="block h-auto max-h-[72vh] w-auto max-w-[min(650px,88vw)] object-contain"
            />
          </Link>


        </div>
      </div>
    </div>
  );
}

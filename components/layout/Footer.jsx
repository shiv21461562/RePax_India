// import Link from "next/link";
// import Image from "next/image";

// import {
//   FaLinkedinIn,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#174d6d] text-white">


//       <div className="relative mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-12 lg:grid-cols-4">
//           {/* Logo + About */}
//           <div>
//             <Image
//               src="/logo/footerlogo.png"
//               alt="RE PAX India"
//               width={220}
//               height={80}
//               className="w-[190px]"
//             />

//             <p className="mt-6 leading-8 text-slate-300">
//               RE PAX India Summit brings together policymakers, investors,
//               innovators and renewable energy leaders driving the future of
//               sustainable energy and clean infrastructure development.
//             </p>

//             <div className="mt-8 space-y-4 text-slate-300">
//               <div className="flex items-start gap-3">
//                 <span>📍</span>
//                 <span>
//                   Gaur City mall space building 14th floor office 14130,14130A
//                 </span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span>📞</span>
//                 <span>+91 9899072636,9818575520</span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span>✉️</span>
//                 <span>info@repaxindia.com</span>
//               </div>
//             </div>
//           </div>
          

//           {/* Navigation */}
//           <div>
//             <h3 className="mb-6 text-xl font-semibold">Navigation</h3>

//             <ul className="space-y-4 text-slate-300">
//               <li>
//                 <Link href="/" className="hover:text-orange-400">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/about" className="hover:text-orange-400">
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/agenda" className="hover:text-orange-400">
//                   Agenda
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/speakers" className="hover:text-orange-400">
//                   Speakers
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/sponsors" className="hover:text-orange-400">
//                   Sponsors
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/contact" className="hover:text-orange-400">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>


         
        
//          {/* Legal */}
// <div>
//   <h3 className="mb-6 text-xl font-semibold">Legal</h3>

//   <ul className="space-y-4 text-slate-300">
//     <li>
//       <Link
//         href="/footerlegal/privacy-policy"
//         className="hover:text-orange-400"
//       >
//         Privacy Policy
//       </Link>
//     </li>

//     <li>
//       <Link
//         href="/footerlegal/terms-and-conditions"
//         className="hover:text-orange-400"
//       >
//         Terms & Conditions
//       </Link>
//     </li>

//     <li>
//       <Link
//         href="/footerlegal/refund-policy"
//         className="hover:text-orange-400"
//       >
//         Refund Policy
//       </Link>
//     </li>

//     <li>
//       <Link
//         href="/footerlegal/faq"
//         className="hover:text-orange-400"
//       >
//         FAQ
//       </Link>
//     </li>
//   </ul>
// </div>


//           {/* Connect */}
//           <div>
//             <h3 className="mb-6 text-xl font-semibold">Connect</h3>

//          <ul className="space-y-4">
//   <li>
//     <Link
//       href="/footercontent/sponsorship"
//       className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
//     >
//       Sponsorship Opportunities
//     </Link>
//   </li>

//   <li>
//     <Link
//       href="/footercontent/partnership"
//       className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
//     >
//       Partnership Enquiries
//     </Link>
//   </li>

//   <li>
//     <Link
//       href="/footercontent/delegate-registration"
//       className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
//     >
//       Delegate Registration
//     </Link>
//   </li>

//   <li>
//     <Link
//       href="/footercontent/speaker-application"
//       className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
//     >
//       Speaker Applications
//     </Link>
//   </li>

//   <li>
//     <Link
//       href="/footercontent/media-collaboration"
//       className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
//     >
//       Media Collaborations
//     </Link>
//   </li>
// </ul>

//             {/* Social Icons */}
//             <div className="mt-8 flex gap-3">
//               <a
//                 href="https://www.linkedin.com/company/renewablemirror/posts/?feedView=all"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
//               >
//                 <FaLinkedinIn size={18} />
//               </a>

//               <a
//                 href="https://www.facebook.com/RenewableMirrorMagazine/posts/pfbid0V9ptaRoU1o9aBHz3rJn2Cex36yecEV1wToJgLtK8TQH7sqPGpXLJT3xVMbp8NEJcl"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
//               >
//                 <FaFacebookF size={18} />
//               </a>

//               <a
//                 href="https://www.instagram.com/p/DZ9wGrun8lY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
//               >
//                 <FaInstagram size={18} />
//               </a>

//               <a
//                 href="https://www.youtube.com/results?search_query=renewablemirror.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
//               >
//                 <FaYoutube size={18} />
//               </a>

//               <a
//                 href="https://x.com/renewablemirror/status/2069725495361691844?s=20"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
//               >
//                 <FaXTwitter size={18} />
//               </a>
//             </div>

//           </div>


          


//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 border-t border-white/10 pt-8">
//           <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
//             <p className="text-slate-300">
//               © 2026 RE PAX India Summit. All Rights Reserved.
//             </p>

//             <p className="text-slate-300">
//               Driving the Future of Renewable Energy
//             </p>
//           </div>
//         </div>

//         {/* BIG WATERMARK */}
//         <div className="pointer-events-none absolute bottom-[-20px] left-0 w-full">
//           <h1
//             className="
//         text-[300px]
//         font-black
//         leading-none
//         tracking-[15px]
//         text-center
//         text-transparent
//         whitespace-nowrap
//       "
//             style={{
//               WebkitTextStroke: "1px rgba(255,255,255,0.07)",
//             }}
//           >
//             RE PAX INDIA
//           </h1>
//         </div>
//       </div>
//     </footer>
//   );
// }



import Link from "next/link";
import Image from "next/image";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#174d6d] text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Main Grid - 5 Columns */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* 1. Logo + About */}
          <div className="lg:col-span-1">
            <Image
              src="/logo/footerlogo.png"
              alt="RE PAX India"
              width={220}
              height={80}
              className="w-[190px]"
            />

            <p className="mt-4 text-sm leading-7 text-slate-300">
              RE PAX India Summit brings together policymakers, investors,
              innovators and renewable energy leaders driving the future of
              sustainable energy and clean infrastructure development.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span>📍</span>
                <span className="text-xs">
                  Gaur City mall space building 14th floor office 14130,14130A
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span>📞</span>
                <span className="text-xs">+91 9899072636, 9818575520</span>
              </div>

              <div className="flex items-start gap-3">
                <span>✉️</span>
                <span className="text-xs">info@repaxindia.com</span>
              </div>
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 text-lg font-semibold">Navigation</h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-orange-400 transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-orange-400 transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-orange-400 transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Legal */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 text-lg font-semibold">Legal</h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/footerlegal/privacy-policy"
                  className="hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/footerlegal/terms-and-conditions"
                  className="hover:text-orange-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/footerlegal/refund-policy"
                  className="hover:text-orange-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/footerlegal/faq"
                  className="hover:text-orange-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Connect */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 text-lg font-semibold">Connect</h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/footercontent/sponsorship"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sponsorship Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/footercontent/partnership"
                  className="hover:text-orange-400 transition-colors"
                >
                  Partnership Enquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/footercontent/delegate-registration"
                  className="hover:text-orange-400 transition-colors"
                >
                  Delegate Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/footercontent/speaker-application"
                  className="hover:text-orange-400 transition-colors"
                >
                  Speaker Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/footercontent/media-collaboration"
                  className="hover:text-orange-400 transition-colors"
                >
                  Media Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 text-lg font-semibold">Newsletter</h3>

            <p className="mb-4 text-sm leading-6 text-slate-300">
              Subscribe to receive the latest updates, event announcements,
              speaker news, and renewable energy insights.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Subscribe Now
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-400">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Social Icons - Full Width Below Grid */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/renewablemirror/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-orange-500"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://www.facebook.com/RenewableMirrorMagazine/posts/pfbid0V9ptaRoU1o9aBHz3rJn2Cex36yecEV1wToJgLtK8TQH7sqPGpXLJT3xVMbp8NEJcl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-orange-500"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/p/DZ9wGrun8lY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-orange-500"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://www.youtube.com/results?search_query=renewablemirror.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-orange-500"
            >
              <FaYoutube size={16} />
            </a>

            <a
              href="https://x.com/renewablemirror/status/2069725495361691844?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-orange-500"
            >
              <FaXTwitter size={16} />
            </a>
          </div>

          <p className="text-sm text-slate-400">
            © 2026 RE PAX India Summit. All Rights Reserved.
          </p>
        </div>

        {/* BIG WATERMARK */}
        <div className="pointer-events-none absolute bottom-[-20px] left-0 w-full">
          <h1
            className="
        text-[300px]
        font-black
        leading-none
        tracking-[15px]
        text-center
        text-transparent
        whitespace-nowrap
      "
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.07)",
            }}
          >
            RE PAX INDIA
          </h1>
        </div>
      </div>
    </footer>
  );
}
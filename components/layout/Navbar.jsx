

"use client";



import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Speakers", href: "/speakers" },
    { name: "Agenda", href: "/agenda" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Blog", href: "/blog" },
    // { name: "Contact", href: "/contact" },
  ];

  // All menu items including More dropdown items for mobile
  const allMobileMenuItems = [
    ...menuItems,
    { name: "Conference", href: "/conference" },
    { name: "Exhibition", href: "/exhibition" },
    { name: "Awards", href: "/awards" },
    { name: "Startup Pavilion", href: "/startup-pavilion" },
    { name: "Media", href: "/media" },
    { name: "News", href: "/news" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/navLogo.png"
              alt="REPAX Logo"
              width={220}
              height={70}
              priority
              className="h-auto w-[120px] sm:w-[140px] lg:w-[140px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[15px] xl:text-[16px] font-semibold transition whitespace-nowrap ${
                    active
                      ? "text-orange-500"
                      : "text-slate-600 hover:text-orange-500"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-500" />
                  )}
                </Link>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="font-semibold text-slate-600 hover:text-orange-500 transition text-[15px] xl:text-[16px]">
                More ▾
              </button>

              {moreOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 xl:w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                    <Link
                      href="/conference"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      Conference
                    </Link>
                    <Link
                      href="/exhibition"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      Exhibition
                    </Link>
                    <Link
                      href="/awards"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      Awards
                    </Link>
                    <Link
                      href="/startup-pavilion"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      Startup Pavilion
                    </Link>
                    <Link
                      href="/media"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      Media
                    </Link>
                    <Link
                      href="/news"
                      className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                    >
                      News
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/contact">
              <button className="rounded-full bg-orange-500 px-6 xl:px-7 py-2 xl:py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
                Contact 
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 lg:hidden flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - All items visible with scroll */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[80vh] pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 max-h-[70vh] overflow-y-auto">
            {allMobileMenuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-[15px] sm:text-[16px] ${
                    active
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Register button in mobile menu */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3"
            >
              <button className="w-full rounded-full bg-orange-500 px-4 py-3 text-[15px] sm:text-[16px] font-semibold text-white transition hover:bg-orange-600">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

















// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronRight, ArrowLeft } from "lucide-react";
// import { useState, useRef } from "react";

// // ─── Mega Menu Data ────────────────────────────────────────────────────────────
// const megaMenus = {
//   Conference: {
//     href: "/conference",
//     items: [
//       { label: "Conference Overview", desc: "Know more about RE-PAX India 2026", href: "/conference/overview", icon: "🌐" },
//       { label: "Why Attend", desc: "Discover the benefits of attending", href: "/conference/why-attend", icon: "🎯" },
//       { label: "Conference Agenda", desc: "Explore sessions, keynotes and tracks", href: "/conference/agenda", icon: "📅" },
//       { label: "Registration", desc: "Register as a delegate", href: "/conference/registration", icon: "📋" },
//       { label: "Become a Speaker", desc: "Share your expertise", href: "/conference/speaker", icon: "🎤" },
//       { label: "FAQ", desc: "Find answers to common questions", href: "/conference/faq", icon: "❓" },
//     ],
//   },
//   Exhibition: {
//     href: "/exhibition",
//     items: [
//       { label: "Why Exhibit", desc: "Grow your brand and generate leads", href: "/exhibition/why-exhibit", icon: "🏆" },
//       { label: "Exhibitors", desc: "Who exhibits at RE-PAX India", href: "/exhibition/exhibitors", icon: "👥" },
//       { label: "Exhibition Features", desc: "Explore unique features and highlights", href: "/exhibition/features", icon: "⭐" },
//       { label: "Ideal Exhibitors", desc: "Industries and sectors that exhibit", href: "/exhibition/ideal", icon: "👔" },
//       { label: "Book Exhibition Booth", desc: "Reserve your space at RE-PAX India", href: "/exhibition/book-booth", icon: "🏠" },
//       { label: "Contact Exhibition Team", desc: "Get in touch with our experts", href: "/exhibition/contact", icon: "📞" },
//     ],
//   },
//   Sponsors: {
//     href: "/sponsors",
//     items: [
//       { label: "Sponsors & Partners", desc: "Our valued sponsors and partners", href: "/sponsors/partners", icon: "🤝" },
//       { label: "Partner With Us", desc: "Become a strategic partner", href: "/sponsors/partner-with-us", icon: "🔗" },
//       { label: "Sponsorship Opportunities", desc: "Explore sponsorship packages", href: "/sponsors/opportunities", icon: "📦" },
//     ],
//   },
//   Media: {
//     href: "/media",
//     items: [
//       { label: "Newsroom", desc: "Latest news and updates", href: "/media/newsroom", icon: "📰" },
//       { label: "Press & Media", desc: "Press releases, media kit and resources", href: "/media/press", icon: "🎬" },
//       { label: "Gallery", desc: "Photos and videos from past events", href: "/media/gallery", icon: "🖼️" },
//       { label: "Blog", desc: "Insights, articles and industry perspectives", href: "/blog", icon: "✏️" },
//     ],
//   },
// };

// const simpleNavItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Speakers", href: "/speakers" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSubmenu, setMobileSubmenu] = useState(null); // null | key of megaMenus
//   const [desktopHover, setDesktopHover] = useState(null);
//   const hoverTimeout = useRef(null);

//   const handleMouseEnter = (key) => {
//     clearTimeout(hoverTimeout.current);
//     setDesktopHover(key);
//   };

//   const handleMouseLeave = () => {
//     hoverTimeout.current = setTimeout(() => setDesktopHover(null), 120);
//   };

//   const closeMobile = () => {
//     setMobileOpen(false);
//     setMobileSubmenu(null);
//   };

//   return (
//     <>
//       <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
//         <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10">
//           <div className="flex h-[70px] items-center justify-between gap-6">

//             {/* ── Logo ── */}
//             <Link href="/" className="flex items-center gap-3 flex-shrink-0">
//               <Image
//                 src="/images/navLogo.png"
//                 alt="RE-PAX India"
//                 width={120}
//                 height={50}
//                 priority
//                 className="h-auto w-[100px] sm:w-[110px]"
//               />
//               <div className="hidden sm:block border-l border-slate-200 pl-3">
//                 <p className="text-[11px] text-slate-500 leading-tight">Renewable Energy</p>
//                 <p className="text-[11px] text-slate-500 leading-tight">Innovation & Connection</p>
//               </div>
//             </Link>

//             {/* ── Desktop Nav ── */}
//             <nav className="hidden lg:flex items-center gap-1 xl:gap-2">

//               {/* Simple items */}
//               {simpleNavItems.map((item) => {
//                 const active = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold rounded-md transition whitespace-nowrap ${
//                       active ? "text-orange-500" : "text-slate-700 hover:text-orange-500"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}

//               {/* Mega menu items */}
//               {Object.entries(megaMenus).map(([key, data]) => {
//                 const active = pathname.startsWith(data.href);
//                 const open = desktopHover === key;
//                 return (
//                   <div
//                     key={key}
//                     className="relative"
//                     onMouseEnter={() => handleMouseEnter(key)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       href={data.href}
//                       className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold rounded-md transition whitespace-nowrap ${
//                         active || open ? "text-orange-500" : "text-slate-700 hover:text-orange-500"
//                       }`}
//                     >
//                       {key}
//                       <svg
//                         className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </Link>

//                     {/* Dropdown */}
//                     {open && (
//                       <div
//                         className="absolute left-0 top-full pt-2 z-50"
//                         onMouseEnter={() => handleMouseEnter(key)}
//                         onMouseLeave={handleMouseLeave}
//                       >
//                         {/* Arrow pointer */}
//                         <div className="absolute top-[6px] left-6 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 z-10" />

//                         <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 min-w-[280px] xl:min-w-[320px] z-20">
//                           <p className="text-[13px] font-bold text-orange-500 uppercase tracking-wide pb-2 mb-2 border-b border-orange-100">
//                             {key}
//                           </p>
//                           <div className="space-y-1">
//                             {data.items.map((item) => (
//                               <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 group transition-all duration-150"
//                               >
//                                 <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
//                                 <div>
//                                   <p className="text-[14px] font-semibold text-slate-800 group-hover:text-orange-500 transition">
//                                     {item.label}
//                                   </p>
//                                   <p className="text-[12px] text-slate-400 leading-tight">{item.desc}</p>
//                                 </div>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}

//               <Link
//                 href="/contact"
//                 className={`px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-semibold rounded-md transition whitespace-nowrap ${
//                   pathname === "/contact" ? "text-orange-500" : "text-slate-700 hover:text-orange-500"
//                 }`}
//               >
//                 Contact
//               </Link>
//             </nav>

//             {/* ── Register Now CTA ── */}
//             <div className="hidden lg:block flex-shrink-0">
//               <Link href="/contact">
//                 <button className="rounded-full bg-orange-500 px-5 xl:px-6 py-2.5 text-[14px] font-bold text-white hover:bg-orange-600 transition shadow-sm shadow-orange-200 whitespace-nowrap">
//                   Register Now
//                 </button>
//               </Link>
//             </div>

//             {/* ── Mobile: Register + Hamburger ── */}
//             <div className="flex items-center gap-3 lg:hidden flex-shrink-0">
//               <Link href="/contact">
//                 <button className="rounded-full bg-orange-500 px-4 py-2 text-[13px] font-bold text-white hover:bg-orange-600 transition">
//                   Register Now
//                 </button>
//               </Link>
//               <button
//                 onClick={() => { setMobileOpen(!mobileOpen); setMobileSubmenu(null); }}
//                 className="text-slate-800 p-1"
//                 aria-label="Toggle menu"
//               >
//                 {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ─────────────── Mobile Drawer ─────────────── */}
//         <div
//           className={`lg:hidden fixed inset-0 top-[70px] z-40 transition-all duration-300 ${
//             mobileOpen ? "visible" : "invisible"
//           }`}
//         >
//           {/* Backdrop */}
//           <div
//             className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
//             onClick={closeMobile}
//           />

//           {/* Panel */}
//           <div
//             className={`absolute left-0 top-0 h-full w-[300px] sm:w-[340px] bg-white shadow-2xl transition-transform duration-300 ${
//               mobileOpen ? "translate-x-0" : "-translate-x-full"
//             } overflow-y-auto`}
//           >
//             {/* Main list */}
//             <div className={`transition-all duration-250 ${mobileSubmenu ? "hidden" : "block"}`}>
//               <div className="p-4">
//                 {/* Simple links */}
//                 {simpleNavItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={closeMobile}
//                     className={`flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold ${
//                       pathname === item.href ? "text-orange-500 bg-orange-50" : "text-slate-700 hover:bg-slate-50"
//                     }`}
//                   >
//                     <span className="text-lg">
//                       {item.name === "Home" ? "🏠" : item.name === "About" ? "ℹ️" : "🎤"}
//                     </span>
//                     {item.name}
//                   </Link>
//                 ))}

//                 {/* Mega menu triggers */}
//                 {Object.entries(megaMenus).map(([key, data]) => (
//                   <button
//                     key={key}
//                     onClick={() => setMobileSubmenu(key)}
//                     className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-semibold ${
//                       pathname.startsWith(data.href) ? "text-orange-500 bg-orange-50" : "text-slate-700 hover:bg-slate-50"
//                     }`}
//                   >
//                     <span className="flex items-center gap-3">
//                       <span className="text-lg">
//                         {key === "Conference" ? "🌐" : key === "Exhibition" ? "🏆" : key === "Sponsors" ? "🤝" : "📰"}
//                       </span>
//                       {key}
//                     </span>
//                     <ChevronRight size={18} className="text-slate-400" />
//                   </button>
//                 ))}

//                 <Link
//                   href="/contact"
//                   onClick={closeMobile}
//                   className={`flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold ${
//                     pathname === "/contact" ? "text-orange-500 bg-orange-50" : "text-slate-700 hover:bg-slate-50"
//                   }`}
//                 >
//                   <span className="text-lg">📞</span>
//                   Contact
//                 </Link>
//               </div>
//             </div>

//             {/* Sub-menu panel */}
//             {mobileSubmenu && megaMenus[mobileSubmenu] && (
//               <div className="p-4">
//                 <button
//                   onClick={() => setMobileSubmenu(null)}
//                   className="flex items-center gap-2 text-orange-500 font-semibold text-[14px] mb-4 hover:underline"
//                 >
//                   <ArrowLeft size={16} />
//                   Back
//                   <span className="ml-1 text-slate-700">{mobileSubmenu}</span>
//                 </button>

//                 <div className="space-y-1">
//                   {megaMenus[mobileSubmenu].items.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={closeMobile}
//                       className="flex items-center justify-between px-3 py-3 rounded-xl text-[14px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-500 group transition"
//                     >
//                       <span className="flex items-center gap-3">
//                         <span className="text-base">{item.icon}</span>
//                         {item.label}
//                       </span>
//                       <ChevronRight size={16} className="text-slate-300 group-hover:text-orange-400" />
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Spacer so content doesn't go under fixed navbar */}
//       <div className="h-[70px]" />
//     </>
//   );
// }

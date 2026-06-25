// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   const [moreOpen, setMoreOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Speakers", href: "/speakers" },
//     { name: "Agenda", href: "/agenda" },
//     { name: "Sponsors", href: "/sponsors" },
//       { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
//       <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
//         <div className="flex h-24 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo.png"
//               alt="REPAX Logo"
//               width={220}
//               height={70}
//               priority
//               className="h-auto w-[140px] lg:w-[140px]"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {menuItems.map((item) => {
//               const active = pathname === item.href;

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`relative text-[16px] font-semibold transition ${
//                     active
//                       ? "text-orange-500"
//                       : "text-slate-600 hover:text-orange-500"
//                   }`}
//                 >
//                   {item.name}

//                   {active && (
//                     <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-500" />
//                   )}
//                 </Link>
//               );
//             })}

//             <div
//               className="relative"
//               onMouseEnter={() => setMoreOpen(true)}
//               onMouseLeave={() => setMoreOpen(false)}
//             >
//               <button className="font-semibold text-slate-600 hover:text-orange-500 transition">
//                 More ▾
//               </button>

//               {/* dropdown more */}

//               {moreOpen && (
//                 <div className="absolute left-0 top-full pt-2">
//                   <div className="w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
//                     <Link
//                       href="/conference"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       Conference
//                     </Link>

//                     <Link
//                       href="/exhibition"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       Exhibition
//                     </Link>

//                     <Link
//                       href="/awards"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       Awards
//                     </Link>

//                     <Link
//                       href="/startup-pavilion"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       Startup Pavilion
//                     </Link>

//                     <Link
//                       href="/media"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       Media
//                     </Link>

//                     <Link
//                       href="/news"
//                       className="
// block
// rounded-xl
// px-5
// py-3
// text-[16px]
// font-semibold
// text-slate-600
// transition-all
// duration-200
// hover:bg-orange-50
// hover:text-orange-500
// hover:translate-x-1
// "
//                     >
//                       News
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* CTA */}
//           <div className="hidden lg:block">
//             <Link href="/contact">
//               <button className="rounded-full bg-orange-500 px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
//                 Register
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-slate-800 lg:hidden"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//           <div
//             className={`overflow-hidden transition-all duration-300 lg:hidden ${
//               isOpen ? "max-h-[500px] pb-4" : "max-h-0"
//             }`}
//           >
//             <div className="rounded-2xl border border-slate-200 bg-white p-4">
//               {menuItems.map((item) => {
//                 const active = pathname === item.href;

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`block rounded-xl px-4 py-3 ${
//                       active
//                         ? "bg-orange-50 text-orange-500"
//                         : "text-slate-700 hover:bg-slate-50"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}

//               <Link
//                 href="/conference"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 Conference
//               </Link>

//               <Link
//                 href="/exhibition"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 Exhibition
//               </Link>

//               <Link
//                 href="/awards"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 Awards
//               </Link>

//               <Link
//                 href="/startup-pavilion"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 Startup Pavilion
//               </Link>

//               <Link
//                 href="/media"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 Media
//               </Link>

//               <Link
//                 href="/news"
//                 onClick={() => setIsOpen(false)}
//                 className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50"
//               >
//                 News
//               </Link>
//             </div>
//           </div>


        
//       </div>
//     </header>
//   );
// }


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
                Contact Now
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
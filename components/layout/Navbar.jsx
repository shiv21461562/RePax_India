






"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
    { name: "Gallery", href: "/gallery" },
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
    { name: "Partner With Us", href: "/partner-with-us" },
  ];

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open (prevents "content missing" feeling
  // caused by page scrolling behind the open menu)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-16 sm:h-20 lg:h-[88px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/navLogo.png"
              alt="REPAX Logo"
              width={220}
              height={70}
              priority
              className="h-auto w-[100px] sm:w-[120px] lg:w-[130px] xl:w-[140px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-10">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[14px] 2xl:text-[16px] font-semibold transition whitespace-nowrap ${
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
              <button
                type="button"
                className="font-semibold text-slate-600 hover:text-orange-500 transition text-[14px] 2xl:text-[16px] whitespace-nowrap"
              >
                More ▾
              </button>

              {moreOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 xl:w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                    {[
                      { name: "Conference", href: "/conference" },
                      { name: "Exhibition", href: "/exhibition" },
                      { name: "Awards", href: "/awards" },
                      { name: "Startup Pavilion", href: "/startup-pavilion" },
                      { name: "Media", href: "/media" },
                      { name: "News", href: "/news" },
                        { name: "Partner With Us", href: "/partner-with-us" }
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 xl:px-5 py-2.5 xl:py-3 text-[15px] xl:text-[16px] font-semibold text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA - desktop only */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4 flex-shrink-0">
            <Link href="/contact">
              <button
                type="button"
                className="h-11 2xl:h-12 rounded-full border border-orange-400 bg-white px-5 2xl:px-8 text-[14px] 2xl:text-[15px] font-semibold text-orange-500 whitespace-nowrap transition-all duration-300 hover:bg-orange-50"
              >
                Contact
              </button>
            </Link>

            <Link href="/register">
              <button
                type="button"
                className="flex h-11 2xl:h-12 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 2xl:px-8 text-[14px] 2xl:text-[15px] font-semibold text-white whitespace-nowrap shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                
                Register
              </button>
            </Link>
          </div>

          {/* Mobile / Tablet Toggle — visible on everything below xl */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[60] flex-shrink-0 rounded-md p-1 text-slate-800 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={26} className="sm:w-7 sm:h-7" />
            ) : (
              <Menu size={26} className="sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            isOpen ? "max-h-[85vh] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 max-h-[75vh] overflow-y-auto shadow-xl">
            {allMobileMenuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-[14px] sm:text-[16px] font-medium ${
                    active
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Contact + Register buttons in mobile menu */}
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                <button
                  type="button"
                  className="w-full rounded-full border border-orange-400 bg-white px-4 py-3 text-[14px] sm:text-[16px] font-semibold text-orange-500 transition hover:bg-orange-50"
                >
                  Contact
                </button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="w-full">
                <button
                  type="button"
                  className="w-full rounded-full bg-orange-500 px-4 py-3 text-[14px] sm:text-[16px] font-semibold text-white transition hover:bg-orange-600"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}









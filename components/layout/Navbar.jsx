"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Speakers", href: "/speakers" },
    { name: "Agenda", href: "/agenda" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="REPAX Logo"
              width={220}
              height={70}
              priority
              className="h-auto w-[140px] lg:w-[140px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[16px] font-semibold transition ${
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
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="rounded-full bg-orange-500 px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
                Contact 
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 ${
                    active
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

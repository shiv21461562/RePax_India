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
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo + About */}
          <div>
            <Image
              src="/logo/footerlogo.png"
              alt="RE PAX India"
              width={220}
              height={80}
              className="w-[190px]"
            />

            <p className="mt-6 leading-8 text-slate-300">
              RE PAX India Summit brings together policymakers, investors,
              innovators and renewable energy leaders driving the future of
              sustainable energy and clean infrastructure development.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <span>📍</span>
                <span>
                  Gaur City mall space building 14th floor office 14130,14130A
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span>📞</span>
                <span>+91 9899072636,9818575520</span>
              </div>

              <div className="flex items-start gap-3">
                <span>✉️</span>
                <span>info@repaxindia.com</span>
              </div>
            </div>
          </div>
          

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Navigation</h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/agenda" className="hover:text-orange-400">
                  Agenda
                </Link>
              </li>

              <li>
                <Link href="/speakers" className="hover:text-orange-400">
                  Speakers
                </Link>
              </li>

              <li>
                <Link href="/sponsors" className="hover:text-orange-400">
                  Sponsors
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


         
        
         {/* Legal */}
<div>
  <h3 className="mb-6 text-xl font-semibold">Legal</h3>

  <ul className="space-y-4 text-slate-300">
    <li>
      <Link
        href="/footerlegal/privacy-policy"
        className="hover:text-orange-400"
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        href="/footerlegal/terms-and-conditions"
        className="hover:text-orange-400"
      >
        Terms & Conditions
      </Link>
    </li>

    <li>
      <Link
        href="/footerlegal/refund-policy"
        className="hover:text-orange-400"
      >
        Refund Policy
      </Link>
    </li>

    <li>
      <Link
        href="/footerlegal/faq"
        className="hover:text-orange-400"
      >
        FAQ
      </Link>
    </li>
  </ul>
</div>


          {/* Connect */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Connect</h3>

         <ul className="space-y-4">
  <li>
    <Link
      href="/footercontent/sponsorship"
      className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
    >
      Sponsorship Opportunities
    </Link>
  </li>

  <li>
    <Link
      href="/footercontent/partnership"
      className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
    >
      Partnership Enquiries
    </Link>
  </li>

  <li>
    <Link
      href="/footercontent/delegate-registration"
      className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
    >
      Delegate Registration
    </Link>
  </li>

  <li>
    <Link
      href="/footercontent/speaker-application"
      className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
    >
      Speaker Applications
    </Link>
  </li>

  <li>
    <Link
      href="/footercontent/media-collaboration"
      className="text-slate-300 transition-colors duration-300 hover:text-[#F97316]"
    >
      Media Collaborations
    </Link>
  </li>
</ul>

            {/* Social Icons */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/company/renewablemirror/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.facebook.com/RenewableMirrorMagazine/posts/pfbid0V9ptaRoU1o9aBHz3rJn2Cex36yecEV1wToJgLtK8TQH7sqPGpXLJT3xVMbp8NEJcl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/p/DZ9wGrun8lY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/results?search_query=renewablemirror.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://x.com/renewablemirror/status/2069725495361691844?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-orange-500"
              >
                <FaXTwitter size={18} />
              </a>
            </div>

          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-slate-300">
              © 2026 RE PAX India Summit. All Rights Reserved.
            </p>

            <p className="text-slate-300">
              Driving the Future of Renewable Energy
            </p>
          </div>
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

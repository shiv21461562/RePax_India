"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { createContact } from "@/app/services/EnquiriesApi";

export default function Hero() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [brochureData, setBrochureData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "Brochure Download",
    message: "User downloaded brochure",
    source: "brochure",
  });

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createContact(brochureData);

      if (response?.success) {
        setShowBrochureForm(false);

        await Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Thank You ",
          text: "Your brochure is ready to download.",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#0f172a",
          customClass: {
            popup: "rounded-2xl shadow-2xl",
          },
        });

        window.open("/brochure/RE-PAX @.pdf", "_blank");
        setBrochureData({
          full_name: "",
          email: "",
          phone: "",
          subject: "Brochure Download",
          message: "User downloaded brochure",
          source: "brochure",
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const websites = [
    {
      logo: "/logo/RM logo golden.png",
      title: "Renewable Mirror",
      desc: "India's leading renewable energy news & insights platform",
      link: "https://www.renewablemirror.com/",
    },
    {
      logo: "/logo/pw.png",
      title: "PowerPax India",
      desc: "Power sector innovations, technology & business updates",
      link: "https://www.powerpaxindia.com/",
    },
    {
      logo: "/logo/EM logo Golden.png",
      title: "Electrical Mirror",
      desc: "Electrical industry magazine and market intelligence",
      link: "https://electricalmirror.net/",
    },
    {
      logo: "/logo/CM-LOGO FINAL golden new.png",
      title: "Construction Mirror",
      desc: "Construction, infrastructure and EPC industry insights",
      link: "https://constructionmirror.com/",
    },
    {
      logo: "/logo/ETES 2026 logo.png",
      title: "ETES Event",
      desc: "Events, exhibitions and industry networking platform",
      link: "https://etesevent.com/",
    },
  ];

  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#1f5678]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Hero5.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 min-h-screen">
          <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="grid w-full gap-8 py-8 lg:grid-cols-2 lg:gap-16 lg:py-12">
              {/* LEFT CONTENT */}
              <div className="pt-4 sm:pt-6 lg:pt-8">
                <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md sm:px-6 sm:py-3 lg:px-8 lg:py-4">
                  <span className="text-xs font-semibold sm:text-sm lg:text-base">
                    REPAX INDIA 2026
                  </span>
                </div>

                <h1 className="mt-6 text-3xl font-black leading-[1.05] text-white sm:mt-8 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                  Powering the
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Conversations
                  </span>
                  Shaping Tomorrow's Energy
                </h1>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 sm:mt-8 sm:w-20 lg:w-24" />

                <p className="mt-6 text-sm leading-7 text-gray-200 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg lg:leading-8">
                  Uniting the Voices of Policymakers, Solar Manufacturers, EPCs,
                  Developers, Investors & Technology Leaders to Drive
                  Collaboration, Innovation and Growth Across India's Renewable
                  Energy Ecosystem.
                </p>
              </div>

              {/* RIGHT CONTENT */}

              <div className="relative flex flex-col gap-4 pt-8 lg:pt-12 lg:h-[600px] lg:justify-between">
                {/* Top Row - Overview + Highlights */}
                <div className="flex w-full flex-col gap-4 sm:flex-row">
                  {/* Overview Card */}
                  <div className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl sm:w-[45%] sm:p-5 lg:p-6">
                    <h4 className="text-xs text-slate-400 sm:text-sm">
                      REPAX OVERVIEW
                    </h4>

                    <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="rounded-2xl bg-white/5 p-2 text-center sm:p-3">
                        <h3 className="text-lg font-bold text-cyan-400 sm:text-xl lg:text-2xl">
                          200+
                        </h3>
                        <p className="text-[10px] text-slate-400 sm:text-xs">
                          Delegates
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-2 text-center sm:p-3">
                        <h3 className="text-lg font-bold text-green-400 sm:text-xl lg:text-2xl">
                          20+
                        </h3>
                        <p className="text-[10px] text-slate-400 sm:text-xs">
                          Speakers
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-2 text-center sm:p-3">
                        <h3 className="text-lg font-bold text-orange-400 sm:text-xl lg:text-2xl">
                          10+
                        </h3>
                        <p className="text-[10px] text-slate-400 sm:text-xs">
                          Sponsors
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Highlights */}
                  <div className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl sm:w-[55%] sm:p-5 lg:p-6">
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      Event Highlights
                    </h4>

                    <div className="mt-2 space-y-1 text-xs text-white sm:mt-3 sm:text-sm">
                      <div>• Solar Energy & Manufacturing</div>
                      <div>• Energy Storage & Battery Technologies</div>
                      <div>• EPC & Project Development</div>
                      <div>• Government Policies & Frameworks</div>
                      <div>• Electric Mobility & Transport</div>
                      <div>• Investment, Finance & Growth</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col gap-3 lg:absolute lg:-bottom-6 lg:w-full">
                  {/* Download Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowBrochureForm(true)}
                      className="flex w-full max-w-[280px] items-center justify-center gap-3 rounded-2xl border border-[#D8CCA3] bg-[#A89A6A]/90 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#A89A6A] sm:px-6 sm:py-4 sm:text-base lg:w-[260px]"
                    >
                      <Download size={18} />
                      Download Brochure
                    </button>
                  </div>

                  {/* Website Cards */}
                  <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
                    {websites.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
group relative flex flex-col items-center justify-center
h-[95px]
rounded-2xl
border border-[#D8CCA3]/60
bg-[#0f172a]/75
backdrop-blur-xl
p-2
shadow-[0_0_12px_rgba(216,204,163,0.15)]
overflow-hidden
transition-all duration-300
hover:-translate-y-1
hover:border-[#D8CCA3]
hover:bg-[#162338]/90
hover:shadow-[0_0_25px_rgba(216,204,163,0.35)]
"
                      >
                        {/* Tooltip - Hidden on mobile */}
                        <div
                          className="
                            pointer-events-none
                            absolute bottom-full mb-3 left-1/2
                            hidden w-48 -translate-x-1/2
                            rounded-lg
                            border border-yellow-400/30
                            bg-slate-900/95
                            px-3 py-2
                            text-center text-[10px]
                            text-white
                            opacity-0
                            shadow-xl
                            transition-all duration-300
                            group-hover:-top-16
                            group-hover:opacity-100
                            z-50
                            sm:block
                          "
                        >
                          {item.desc}
                        </div>

                        {/* Logo */}
                        <div className="relative mb-2 h-7 w-12 sm:h-8 sm:w-14">
                          <Image
                            src={item.logo}
                            alt={item.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Title */}
                        <span className="text-center text-[8px] font-normal text-white leading-tight sm:text-[10px]">
                          {item.title}
                        </span>

                        {/* Bottom Glow Line */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#D8CCA3] to-yellow-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl max-h-[90vh] overflow-y-auto sm:p-6">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowBrochureForm(false)}
              className="absolute right-4 top-3 text-2xl text-slate-500 hover:text-red-500 sm:right-5 sm:top-4 sm:text-3xl"
            >
              ×
            </button>

            <h2 className="mb-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Download Brochure
            </h2>

            <p className="mb-4 text-xs text-slate-500 sm:text-sm">
              Fill the details below to download brochure.
            </p>

            <form
              onSubmit={handleBrochureSubmit}
              className="space-y-3 sm:space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
                onChange={(e) =>
                  setBrochureData({
                    ...brochureData,
                    full_name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
                onChange={(e) =>
                  setBrochureData({
                    ...brochureData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
                onChange={(e) =>
                  setBrochureData({
                    ...brochureData,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
                onChange={(e) =>
                  setBrochureData({
                    ...brochureData,
                    subject: e.target.value,
                  })
                }
              />

              <textarea
                rows={3}
                placeholder="Tell us more about your inquiry..."
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
                onChange={(e) =>
                  setBrochureData({
                    ...brochureData,
                    message: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#174d6d] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#123d57] sm:py-3 sm:text-base"
              >
                Submit & Download Brochure
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}



// "use client";
// import Image from "next/image";
// import { Download } from "lucide-react";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import { createContact } from "@/app/services/EnquiriesApi";
// import Link from "next/link";

// export default function Hero() {
//   const [showBrochureForm, setShowBrochureForm] = useState(false);
//   const [brochureData, setBrochureData] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     subject: "Brochure Download",
//     message: "User downloaded brochure",
//     source: "brochure",
//   });

//   const handleBrochureSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await createContact(brochureData);

//       if (response?.success) {
//         setShowBrochureForm(false);

//         await Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "success",
//           title: "Thank You ",
//           text: "Your brochure is ready to download.",
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           background: "#ffffff",
//           color: "#0f172a",
//           customClass: {
//             popup: "rounded-2xl shadow-2xl",
//           },
//         });

//         window.open("/brochure/RE-PAX @.pdf", "_blank");
//         setBrochureData({
//           full_name: "",
//           email: "",
//           phone: "",
//           subject: "Brochure Download",
//           message: "User downloaded brochure",
//           source: "brochure",
//         });
//       }
//     } catch (error) {
//       console.log(error);

//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//       });
//     }
//   };

//   const websites = [
//     {
//       logo: "/logo/RM Logo golden.png",
//       title: "Renewable Mirror",
//       desc: "India's leading renewable energy news & insights platform",
//       link: "https://www.renewablemirror.com/",
//     },
//     {
//       logo: "/logo/ppx.png",
//       title: "PowerPax India",
//       desc: "Power sector innovations, technology & business updates",
//       link: "https://www.powerpaxindia.com/",
//     },
//     {
//       logo: "/logo/EM Logo Golden.png",
//       title: "Electrical Mirror",
//       desc: "Electrical industry magazine and market intelligence",
//       link: "https://electricalmirror.net/",
//     },
//     {
//       logo: "/logo/CM-LOGO FINAL golden new.png",
//       title: "Construction Mirror",
//       desc: "Construction, infrastructure and EPC industry insights",
//       link: "https://constructionmirror.com/",
//     },
//     {
//       logo: "/logo/ETES 2026 Logo.png",
//       title: "ETES Event",
//       desc: "Events, exhibitions and industry networking platform",
//       link: "https://etesevent.com/",
//     },
//   ];

//   return (
//     <>
//       {/* hero */}
//       <section className="relative min-h-[100dvh] lg:h-screen overflow-hidden bg-[#020817]">
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover"
//           style={{
//             backgroundImage: "url('/images/finalHero.png')",
//             backgroundPosition: "72% center",
//             backgroundSize: "cover",
//           }}
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/60 via-[#020817]/55 to-[#020817]/20 md:to-transparent" />

//         <div className="relative z-10 min-h-[100dvh] lg:min-h-screen">
//           <div className="mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-8 lg:min-h-screen lg:items-center lg:px-8">
//             <div className="grid w-full gap-8 py-20 sm:py-24 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-12">
//               {/* LEFT CONTENT */}
//               <div className="max-w-full md:max-w-[520px] lg:max-w-[620px] md:pt-10 lg:pt-16">
//                 <h1
//                   className="
//                     mt-4 sm:mt-5 md:mt-6
//                     text-[36px]
//                     sm:text-[44px]
//                     md:text-[50px]
//                     lg:text-[60px]
//                     leading-[1.1]
//                     lg:leading-[1.05]
//                     font-black
//                     tracking-tight
//                     text-white
//                   "
//                 >
//                   RE-PAX India
//                   <span className="text-orange-400"> 2026</span>
//                 </h1>

//                 <h2 className="mt-3 sm:mt-4 max-w-full md:max-w-[480px] lg:max-w-[560px] text-base sm:text-lg md:text-xl font-bold leading-snug text-white">
//                   India's Premier Renewable Energy Conference, Expo &
//                   <span className="text-orange-400"> Leadership Awards</span>
//                 </h2>

//                 <p className="mt-4 text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 md:mt-8 lg:text-lg lg:leading-8">
//                   <span className="block mb-3 sm:mb-4 text-orange-300 font-medium">
//                     Empowering Innovation • Driving Collaboration • Accelerating
//                     India's Clean Energy Future
//                   </span>
//                   Join India's most influential gathering of renewable energy
//                   leaders, solar manufacturers, battery storage innovators, EPC
//                   contractors, policymakers, investors, utilities and technology
//                   providers. RE-PAX India is where industry leaders meet to
//                   exchange ideas, build partnerships, showcase innovations and
//                   shape the future of clean energy.
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="mt-6 sm:mt-8 flex flex-row gap-2 sm:gap-4 w-full">
//                   <Link
//                     href="/register"
//                     className="group flex-1 inline-flex items-center justify-center overflow-hidden rounded-full border border-orange-400/40 bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_12px_35px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(249,115,22,0.55)] whitespace-nowrap"
//                   >
//                     Register Now
//                   </Link>

//                   <Link
//                     href="/sponsors"
//                     className="flex-1 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0f172a] whitespace-nowrap"
//                   >
//                     Become a Sponsor
//                   </Link>
//                 </div>
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="relative flex h-full flex-col justify-end gap-2">
//                 {/* Download Button */}
//                 <div className="flex justify-center">
//                   <button
//                     onClick={() => setShowBrochureForm(true)}
//                     className="
//                       group
//                       flex
//                       h-12
//                       sm:h-14
//                       md:h-16
//                       w-full
//                       max-w-[320px]
//                       sm:max-w-[360px]
//                       items-center
//                       justify-center
//                       gap-2
//                       sm:gap-3
//                       rounded-full
//                       border
//                       border-cyan-400/30
//                       bg-[#0B1220]/55
//                       backdrop-blur-2xl
//                       px-5
//                       sm:px-8
//                       text-sm
//                       sm:text-base
//                       font-semibold
//                       text-white
//                       shadow-[0_10px_30px_rgba(0,0,0,0.35)]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-1
//                       hover:border-cyan-400/60
//                       hover:bg-[#11233A]/75
//                       hover:shadow-[0_15px_40px_rgba(0,170,255,0.25)]
//                     "
//                   >
//                     <Download
//                       size={18}
//                       className="sm:w-5 sm:h-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
//                     />
//                     <span>Download Brochure</span>
//                   </button>
//                 </div>

//                 {/* Website Cards */}
//                 <div className="mt-6 sm:mt-8 md:mt-6 lg:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
//                   {websites.map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group relative flex flex-col items-center justify-center
//                         h-[76px]
//                         sm:h-[90px]
//                         md:h-[95px]
//                         w-[30%]
//                         min-w-[92px]
//                         sm:w-[18%]
//                         sm:min-w-[100px]
//                         rounded-xl
//                         sm:rounded-2xl
//                         border border-[#037AA6]/60
//                         bg-[#0f172a]/75
//                         backdrop-blur-xl
//                         p-2
//                         overflow-hidden
//                         shadow-[0_0_18px_rgba(3,122,166,0.20)]
//                         transition-all duration-300
//                         hover:-translate-y-1
//                         hover:border-[#037AA6]
//                         hover:bg-[#162338]/90
//                         hover:shadow-[0_0_35px_rgba(3,122,166,0.45)]
//                       "
//                     >
//                       {/* Tooltip - Hidden on mobile/tablet */}
//                       <div
//                         className="
//                           pointer-events-none
//                           absolute bottom-full mb-3 left-1/2
//                           hidden w-48 -translate-x-1/2
//                           rounded-lg
//                           border border-yellow-400/30
//                           bg-slate-900/95
//                           px-3 py-2
//                           text-center text-[10px]
//                           text-white
//                           opacity-0
//                           shadow-xl
//                           transition-all duration-300
//                           group-hover:-top-16
//                           group-hover:opacity-100
//                           z-50
//                           lg:block
//                         "
//                       >
//                         {item.desc}
//                       </div>

//                       {/* Logo */}
//                       <div
//                         className={`relative mb-1.5 sm:mb-2 ${
//                           item.title === "PowerPax India"
//                             ? "h-9 w-14 sm:h-12 sm:w-20 md:h-14 md:w-24"
//                             : "h-6 w-9 sm:h-7 sm:w-12 md:h-8 md:w-14"
//                         }`}
//                       >
//                         <Image
//                           src={item.logo}
//                           alt={item.title}
//                           fill
//                           sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 120px"
//                           className="object-contain transition-transform duration-300 group-hover:scale-105"
//                         />
//                       </div>

//                       {/* Title */}
//                       <span className="text-center text-[7px] sm:text-[9px] md:text-[10px] font-normal text-white leading-tight px-0.5">
//                         {item.title}
//                       </span>

//                       {/* Bottom Glow Line */}
//                       <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#D8CCA3] to-yellow-400" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Brochure Modal */}
//       {showBrochureForm && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
//           <div className="relative w-full max-w-[92vw] sm:max-w-lg rounded-3xl bg-white p-5 shadow-2xl max-h-[90vh] overflow-y-auto sm:p-6">
//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={() => setShowBrochureForm(false)}
//               className="absolute right-4 top-3 text-2xl text-slate-500 hover:text-red-500 sm:right-5 sm:top-4 sm:text-3xl"
//             >
//               ×
//             </button>

//             <h2 className="mb-1 pr-8 text-lg font-bold text-slate-900 sm:text-2xl">
//               Download Brochure
//             </h2>

//             <p className="mb-4 text-xs text-slate-500 sm:text-sm">
//               Fill the details below to download brochure.
//             </p>

//             <form
//               onSubmit={handleBrochureSubmit}
//               className="space-y-3 sm:space-y-4"
//             >
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
//                 onChange={(e) =>
//                   setBrochureData({
//                     ...brochureData,
//                     full_name: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
//                 onChange={(e) =>
//                   setBrochureData({
//                     ...brochureData,
//                     email: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 required
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
//                 onChange={(e) =>
//                   setBrochureData({
//                     ...brochureData,
//                     phone: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
//                 onChange={(e) =>
//                   setBrochureData({
//                     ...brochureData,
//                     subject: e.target.value,
//                   })
//                 }
//               />

//               <textarea
//                 rows={3}
//                 placeholder="Tell us more about your inquiry..."
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-black placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#1f5678] sm:px-4 sm:py-3"
//                 onChange={(e) =>
//                   setBrochureData({
//                     ...brochureData,
//                     message: e.target.value,
//                   })
//                 }
//               />

//               <button
//                 type="submit"
//                 className="w-full rounded-xl bg-[#174d6d] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#123d57] sm:py-3 sm:text-base"
//               >
//                 Submit & Download Brochure
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { createContact } from "@/app/services/EnquiriesApi";
import Link from "next/link";

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
      logo: "/logo/RM Logo golden.png",
      title: "Renewable Mirror",
      desc: "India's leading renewable energy news & insights platform",
      link: "https://www.renewablemirror.com/",
    },
    {
      logo: "/logo/ppx.png",
      title: "PowerPax India",
      desc: "Power sector innovations, technology & business updates",
      link: "https://www.powerpaxindia.com/",
    },
    {
      logo: "/logo/EM Logo Golden.png",
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
      logo: "/logo/ETES 2026 Logo.png",
      title: "ETES Event",
      desc: "Events, exhibitions and industry networking platform",
      link: "https://etesevent.com/",
    },
  ];

  return (
    <>
      {/* hero */}
      <section className="relative min-h-[100dvh] lg:h-screen overflow-hidden bg-[#020817]">
        {/* Background - object-cover so image always fills the screen (no shrinking on mobile),
            with tuned object-position per breakpoint so key visual content stays in frame */}
        <div className="absolute inset-0">
          <Image
            src="/images/finalHero.png"
            alt="RE-PAX India 2026 Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-[75%_center] md:object-[73%_center] lg:object-[72%_center]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/60 via-[#020817]/55 to-[#020817]/20 md:to-transparent" />

        <div className="relative z-10 min-h-[100dvh] lg:min-h-screen">
          <div className="mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 sm:px-6 md:px-8 lg:min-h-screen lg:items-center lg:px-8">
            <div className="grid w-full gap-8 py-20 sm:py-24 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-12">
              {/* LEFT CONTENT */}
              <div className="max-w-full md:max-w-[520px] lg:max-w-[620px] md:pt-10 lg:pt-16">
                <h1
                  className="
                    mt-4 sm:mt-5 md:mt-6
                    text-[36px]
                    sm:text-[44px]
                    md:text-[50px]
                    lg:text-[60px]
                    leading-[1.1]
                    lg:leading-[1.05]
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  RE-PAX India
                  <span className="text-orange-400"> 2026</span>
                </h1>

                <h2 className="mt-3 sm:mt-4 max-w-full md:max-w-[480px] lg:max-w-[560px] text-base sm:text-lg md:text-xl font-bold leading-snug text-white">
                  India's Premier Renewable Energy Conference, Expo &
                  <span className="text-orange-400"> Leadership Awards</span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 md:mt-8 lg:text-lg lg:leading-8">
                  <span className="block mb-3 sm:mb-4 text-orange-300 font-medium">
                    Empowering Innovation • Driving Collaboration •
                    Accelerating India's Clean Energy Future
                  </span>
                  Join India's most influential gathering of renewable energy
                  leaders, solar manufacturers, battery storage innovators, EPC
                  contractors, policymakers, investors, utilities and
                  technology providers. RE-PAX India is where industry leaders
                  meet to exchange ideas, build partnerships, showcase
                  innovations and shape the future of clean energy.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-row gap-2 sm:gap-4 w-full">
                  <Link
                    href="/register"
                    className="group flex-1 inline-flex items-center justify-center overflow-hidden rounded-full border border-orange-400/40 bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_12px_35px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(249,115,22,0.55)] whitespace-nowrap"
                  >
                    Register Now
                  </Link>

                  <Link
                    href="/sponsors"
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0f172a] whitespace-nowrap"
                  >
                    Become a Sponsor
                  </Link>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative flex h-full flex-col justify-end gap-2">
                {/* Download Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowBrochureForm(true)}
                    className="
                      group
                      flex
                      h-12
                      sm:h-14
                      md:h-16
                      w-full
                      max-w-[320px]
                      sm:max-w-[360px]
                      items-center
                      justify-center
                      gap-2
                      sm:gap-3
                      rounded-full
                      border
                      border-cyan-400/30
                      bg-[#0B1220]/55
                      backdrop-blur-2xl
                      px-5
                      sm:px-8
                      text-sm
                      sm:text-base
                      font-semibold
                      text-white
                      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/60
                      hover:bg-[#11233A]/75
                      hover:shadow-[0_15px_40px_rgba(0,170,255,0.25)]
                    "
                  >
                    <Download
                      size={18}
                      className="sm:w-5 sm:h-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />
                    <span>Download Brochure</span>
                  </button>
                </div>

                {/* Website Cards */}
                <div className="mt-6 sm:mt-8 md:mt-6 lg:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
                  {websites.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group relative flex flex-col items-center justify-center
                        h-[76px]
                        sm:h-[90px]
                        md:h-[95px]
                        w-[30%]
                        min-w-[92px]
                        sm:w-[18%]
                        sm:min-w-[100px]
                        rounded-xl
                        sm:rounded-2xl
                        border border-[#037AA6]/60
                        bg-[#0f172a]/75
                        backdrop-blur-xl
                        p-2
                        overflow-hidden
                        shadow-[0_0_18px_rgba(3,122,166,0.20)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[#037AA6]
                        hover:bg-[#162338]/90
                        hover:shadow-[0_0_35px_rgba(3,122,166,0.45)]
                      "
                    >
                      {/* Tooltip - Hidden on mobile/tablet */}
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
                          lg:block
                        "
                      >
                        {item.desc}
                      </div>

                      {/* Logo */}
                      <div
                        className={`relative mb-1.5 sm:mb-2 ${
                          item.title === "PowerPax India"
                            ? "h-9 w-14 sm:h-12 sm:w-20 md:h-14 md:w-24"
                            : "h-6 w-9 sm:h-7 sm:w-12 md:h-8 md:w-14"
                        }`}
                      >
                        <Image
                          src={item.logo}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 120px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <span className="text-center text-[7px] sm:text-[9px] md:text-[10px] font-normal text-white leading-tight px-0.5">
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
      </section>

      {/* Brochure Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-[92vw] sm:max-w-lg rounded-3xl bg-white p-5 shadow-2xl max-h-[90vh] overflow-y-auto sm:p-6">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowBrochureForm(false)}
              className="absolute right-4 top-3 text-2xl text-slate-500 hover:text-red-500 sm:right-5 sm:top-4 sm:text-3xl"
            >
              ×
            </button>

            <h2 className="mb-1 pr-8 text-lg font-bold text-slate-900 sm:text-2xl">
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




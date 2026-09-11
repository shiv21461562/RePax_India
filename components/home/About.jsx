// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import FadeUp from "@/components/FadeUp";

// import { useRouter } from "next/navigation";

// export default function About() {
//   const [openModal, setOpenModal] = useState(false);
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <FadeUp>
//         <section className="py-24 bg-[#0B3A63] relative overflow-hidden">
//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               {/* LEFT */}
//               <div>
//             <div className="flex items-center justify-start gap-5 max-sm:justify-center">
//   <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

//   <span
//     className="
//       font-poppins
//       text-xs
//       sm:text-sm
//       md:text-base
//       font-medium
//       uppercase
//       tracking-[0.18em]
//       text-white
//       text-center
//       whitespace-nowrap
//     "
//   >
//     ABOUT RE-PAX INDIA
//   </span>

//   <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
// </div>

//            <h2
//   className="
//     mt-5
//     font-serif
//     text-2xl
//     sm:text-3xl
//     md:text-4xl
//     font-bold
//     leading-[1.12]
//     tracking-tight
//     text-white
//   "
// >
//   <span className="block">
//     India's Most Influential
//   </span>

//   <span className="mt-1 block text-orange-400">
//     Renewable Energy
//   </span>

//   <span className="mt-1 block">
//     Business Networking Platform
//   </span>
// </h2>

//                 <p className="mt-6 text-slate-300 text-lg leading-relaxed">
//                   RE-PAX India is a premier conference and networking platform
//                   dedicated to accelerating the growth of India's renewable
//                   energy sector.
//                 </p>

//                 <p className="mt-5 text-slate-400 leading-relaxed">
//                   Organized by Renewable Mirror, the event brings together
//                   manufacturers, EPC contractors, developers, investors,
//                   government officials, policymakers, technology innovators and
//                   sustainability experts to collaborate, share knowledge, and
//                   drive India's clean energy transition.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Business Networking</span>
//                   </div>

//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Knowledge Sharing</span>
//                   </div>

//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Strategic Partnerships</span>
//                   </div>

//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Market Expansion</span>
//                   </div>

//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Innovation Showcase</span>
//                   </div>

//                   <div className="flex items-center gap-3 text-white">
//                     <span className="text-orange-400">✓</span>
//                     <span>Leadership Awards</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-4 mt-8">
//                   <button
//                     onClick={() => router.push("/register")}
//                     className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300"
//                   >
//                     Register Now
//                   </button>
//                   <Link
//                     href="/about"
//                     className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>

//               {/* RIGHT - Stats Cards */}
//               <div className="grid grid-cols-2 gap-5">
               

              

//                 <div className="col-span-2 group bg-gradient-to-r from-[#FF8A00] to-[#FFB347] rounded-3xl p-8 text-white border border-transparent hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,0,0.30)] transition-all duration-300">
//                   <h3 className="text-2xl font-bold">Why RE-PAX India?</h3>

//                   <p className="mt-3 text-white/90 leading-relaxed">
//                     Connect with manufacturers, EPC companies, developers,
//                     investors, policymakers and technology providers while
//                     discovering new business opportunities and strategic
//                     partnerships. Join India's premier renewable energy
//                     conference, expo & leadership awards.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </FadeUp>

   
//     </>
//   );
// }




"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { useRouter } from "next/navigation";

export default function About() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const features = [
    { label: "Business Networking", desc: "Meet 500+ industry leaders face to face" },
    { label: "Knowledge Sharing", desc: "Panels led by policy & technology experts" },
    { label: "Strategic Partnerships", desc: "Connect EPCs, developers & investors" },
    { label: "Market Expansion", desc: "Enter new states & sourcing corridors" },
    { label: "Innovation Showcase", desc: "See the latest solar, wind & storage tech" },
    { label: "Leadership Awards", desc: "Recognizing India's clean energy pioneers" },
  ];

  const stats = [
    { value: "500+", label: "Delegates" },
    { value: "80+", label: "Exhibitors" },
    { value: "40+", label: "Speakers" },
  ];

  return (
    <>
      <FadeUp>
<section className="relative overflow-hidden bg-[#124570] py-24">
        

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span className="font-poppins text-xs font-medium tracking-wide text-white/80">
                    About RE-PAX India
                  </span>
                </div>

             <h2 className="mt-6 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-[2.15rem]">
  India's most influential{" "}
  <span className="text-orange-500">
    renewable energy
  </span>{" "}
  business networking platform
</h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                  RE-PAX India is a premier conference and networking
                  platform dedicated to accelerating the growth of India's
                  renewable energy sector.
                </p>

                <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                  Organized by Renewable Mirror, the event brings together
                  manufacturers, EPC contractors, developers, investors,
                  government officials, policymakers, technology innovators
                  and sustainability experts to collaborate, share
                  knowledge, and drive India's clean energy transition.
                </p>

          

                <div className="mt-9 flex flex-wrap gap-4">
                  <button
                    onClick={() => router.push("/register")}
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,138,0,0.35)] transition-transform duration-200 hover:scale-[1.03]"
                  >
                    Register Now
                  </button>
                  <Link
                    href="/about"
                    className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/[0.09]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* RIGHT — glass panel */}
              <div className="relative">
                <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 shadow-[0_8px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  {/* inner sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

                  <h3 className="relative font-serif text-xl font-bold text-white">
                    Why RE-PAX India?
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-slate-300">
                    Connect with manufacturers, EPC companies, developers,
                    investors, policymakers and technology providers while
                    discovering new business opportunities and strategic
                    partnerships.
                  </p>

                  <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {features.map((f) => (
                      <div
                        key={f.label}
                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-colors duration-200 hover:bg-white/[0.09]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 transition-transform duration-200 group-hover:scale-125" />
                          <div className="text-sm font-semibold text-white">
                            {f.label}
                          </div>
                        </div>
                     
                      </div>
                    ))}
                  </div>
                </div>

             {/* floating accent chip */}
<div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-orange-300/30 bg-[#FF8A00] px-5 py-3 shadow-lg shadow-orange-500/20 backdrop-blur-xl sm:block">
  <div className="text-sm font-semibold text-white">
    Powered by Renewable Mirror
  </div>
</div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  );
}

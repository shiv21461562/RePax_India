



"use client";

import AboutHero from "@/components/about/AboutHero";
import WhyRePax from "@/components/about/WhyRePax";
import VisionMission from "@/components/about/VisionMission";
import WhatMakesDifferent from "@/components/about/WhatMakesDifferent";
import CoreFocusAreas from "@/components/about/CoreFocusAreas";
import Stakeholders from "@/components/about/Stakeholders";
import OrganizedBy from "@/components/about/OrganizedBy";
import JoinMovement from "@/components/about/JoinMovement";

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white via-slate-50 to-orange-50 text-slate-900">
      <AboutHero />
      <WhyRePax />
      <VisionMission />
      <WhatMakesDifferent />
      <CoreFocusAreas />
      <Stakeholders />
      <OrganizedBy />
      <JoinMovement />
    </main>
  );
}

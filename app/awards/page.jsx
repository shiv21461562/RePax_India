










"use client";

import AwardsHero from "@/components/awards/AwardsHero";
import AwardsStats from "@/components/awards/AwardsStats";
import AwardCategories from "@/components/awards/AwardCategories";
import Eligibility from "@/components/awards/Eligibility";
import JuryPanel from "@/components/awards/JuryPanel";
import NominationProcess from "@/components/awards/NominationProcess";
import PreviousWinners from "@/components/awards/PreviousWinners";
import WhyParticipate from "@/components/awards/WhyParticipate";
import AwardsCTA from "@/components/awards/AwardsCTA";

export default function Page() {
  return (
    <div className="bg-white pt-24">
      <AwardsHero />

      <AwardsStats />

      <AwardCategories />

      <Eligibility />

      <JuryPanel />

      <NominationProcess />

      <PreviousWinners />

      <WhyParticipate />

      <AwardsCTA />
    </div>
  );
}

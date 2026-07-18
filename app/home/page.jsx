import Hero from "@/components/home/Hero";
import EventStats from "@/components/home/EventStats";
import About from "@/components/home/About";
import ConferenceThemes from "@/components/home/ConferenceThemes";
import Speakers from "@/components/home/Speakers";
// import Agenda from "@/components/home/Agenda";
// import Industries from "@/components/home/Industries";
// import Sponsors from "@/components/home/Sponsors";
import Gallery from "@/components/home/Gallery";
// import News from "@/components/home/News";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import EventHighlights from "@/components/home/EventHighlights";

import Testimonials from "@/components/home/Testimonials";
import Venue from "@/components/home/Venue";

// import EventVideo from "@/components/home/EventVideo";

import WhyAttend from "@/components/home/WhyAttend"

import FeaturedConferenceSessions from "@/components/home/FeaturedConferenceSessions"
export default function HomePage() {
  return (
    <>
      <Hero />

      <EventHighlights />

      <EventStats />
      {/* <EventVideo /> */}

      <About />

      <ConferenceThemes />
      <FeaturedConferenceSessions/>
      <WhyAttend/>

      <Speakers />

      {/* <Agenda /> */}

      {/* <Industries /> */}

      {/* <Sponsors /> */}

      <Testimonials />

      <Venue />

      <Gallery />

      {/* <News /> */}

      <FAQ />

      <CTA />
    </>
  );
}

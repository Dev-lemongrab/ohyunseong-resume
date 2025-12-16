// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";
import OrgTreemap from "@/components/orgTreemap";
import OrgTreemap2 from "@/components/orgTreemap2";

export default function Portfolio() {
  return (
    <>
    {/**
      <Navbar />
      <Testimonial />
      <Hero />
      <InformationSection />
      <Footer />
       */}
     <OrgTreemap />
        <OrgTreemap2 />
    </>
  );
}

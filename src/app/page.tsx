
import { FaqAccordion } from "@/components/homeCompo/FaqAccordion";

import HeroSection from "@/components/homeCompo/HeroSection";
import Pricing from "@/components/homeCompo/Pricing";
import Services from "@/components/homeCompo/Services";
import Testimonials from "@/components/homeCompo/Testimonials";
import UpdateNews from "@/components/homeCompo/updateNews";



export default function Home() {
  return (

    <div className="">
      <HeroSection></HeroSection>

      <Services></Services>

      <Pricing></Pricing>

      <FaqAccordion></FaqAccordion>

    <UpdateNews></UpdateNews>

      <Testimonials></Testimonials>

  
  
    </div>

  );
}

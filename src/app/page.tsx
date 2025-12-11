
import Count_Section from "@/components/homeCompo/Count_Section";
import DialogButton from "@/components/homeCompo/DialogButton";
import { FaqAccordion } from "@/components/homeCompo/FaqAccordion";

import HeroSection from "@/components/homeCompo/HeroSection";
import Pricing from "@/components/homeCompo/Pricing";
import Services from "@/components/homeCompo/Services";
import Testimonials from "@/components/homeCompo/Testimonials";
import UpdateNews from "@/components/homeCompo/updateNews";
import Want_Request from "@/components/homeCompo/Want_Requst";



export default function Home() {
  return (

    <div className="">
      <HeroSection></HeroSection>

      <Services></Services>

      <Count_Section></Count_Section>

      <Pricing></Pricing>

      <FaqAccordion></FaqAccordion>



    <UpdateNews></UpdateNews>

   

    <DialogButton></DialogButton>

      <Testimonials></Testimonials>

  
  
    </div>

  );
}

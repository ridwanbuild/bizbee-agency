import Contact from "@/components/homeCompo/Contact";
import Features from "@/components/homeCompo/Features";
import HeroSection from "@/components/homeCompo/HeroSection";
import Pricing from "@/components/homeCompo/Pricing";
import Services from "@/components/homeCompo/Services";
import Testimonials from "@/components/homeCompo/Testimonials";


export default function Home() {
  return (

    <div className="">
      <HeroSection></HeroSection>

      <Services></Services>

      <Pricing></Pricing>

      <Testimonials></Testimonials>

      <Contact></Contact>
  
    </div>

  );
}

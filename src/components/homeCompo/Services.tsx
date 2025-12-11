"use client";

import React from "react";
import { IconType } from "react-icons";
import { FiTrendingUp, FiVideo, FiLayers, FiCode } from "react-icons/fi";
import SectionHeading from "../Re_UseCompo/SectionHeading";

interface ServiceItem {
  title: string;
  icon: IconType;
  bullets: string[];
}

const services: ServiceItem[] = [
  {
    title: "Strategic Digital Marketing",
    icon: FiTrendingUp,
    bullets: ["SEO & SEM Strategy", "Content Campaigns", "Brand Visibility"],
  },
  {
    title: "Captivating Video & Motion Graphics",
    icon: FiVideo,
    bullets: ["Corporate Videos", "Ad Visuals", "2D/3D Animation"],
  },
  {
    title: "Professional Website Design",
    icon: FiCode,
    bullets: ["Next.js Development", "High Performance UI", "SEO Ready"],
  },
  {
    title: "Dedicated Creative Team",
    icon: FiLayers,
    bullets: ["Collaboration", "Creative Direction", "Project Execution"],
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-white py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}

       <div className="flex lg:items-center flex-col items-start">
         <SectionHeading
          badgeText="Your Vision"
          titleText="Our Expertise"

          paraText="We are a multidisciplinary agency dedicated to driving measurable
          results through creative excellence and strategic execution."
          
        ></SectionHeading>



       </div>


        
    






        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                p-6 rounded-xl 
                shadow-md
                bg-gradient-to-br 
                from-[#efeef0]
                via-[#e6f3ff]
                to-[#f4f9ff]
                backdrop-blur-md 
                transition-all
                hover:shadow-lg
                "
              >
                <div className="text-green-600 mb-3">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

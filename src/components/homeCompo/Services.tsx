"use client";

import React from "react";
import { IconType } from "react-icons";
import { FiTrendingUp, FiVideo, FiLayers, FiCode } from "react-icons/fi";

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
    <section
      className="bg-white h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-4">
          Your Vision, Our Expertise.
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          We are a multidisciplinary agency dedicated to driving measurable
          results through creative excellence and strategic execution.
        </p>

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

"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { FiTrendingUp, FiVideo, FiLayers, FiCode } from "react-icons/fi";
import SectionHeading from "../Re_UseCompo/SectionHeading";

interface ServiceItem {
  title: string;
  icon: IconType;
  bullets: string[];
  hoverBg: string;
  activeBg: string;
  borderGradient: string;
}

const services: ServiceItem[] = [
  {
    title: "Strategic Digital Marketing",
    icon: FiTrendingUp,
    bullets: ["SEO & SEM Strategy", "Content Campaigns", "Brand Visibility"],
    borderGradient: "bg-gradient-to-r from-red-500 via-orange-400 to-pink-400",
    hoverBg: `
      radial-gradient(circle at 30% 70%, rgba(173,216,230,.35), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(255,182,193,.4), transparent 60%)
    `,
    activeBg: `
      radial-gradient(circle at 30% 70%, rgba(255,200,150,.45), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(180,255,200,.45), transparent 60%)
    `,
  },
  {
    title: "Captivating Video & Motion Graphics",
    icon: FiVideo,
    bullets: ["Corporate Videos", "Ad Visuals", "2D/3D Animation"],
    borderGradient: "bg-gradient-to-r from-purple-500 via-pink-400 to-red-400",
    hoverBg: `
      radial-gradient(circle at 30% 70%, rgba(173,216,230,.35), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(255,182,193,.4), transparent 60%)
    `,
    activeBg: `
      radial-gradient(circle at 30% 70%, rgba(255,200,150,.45), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(180,255,200,.45), transparent 60%)
    `,
  },
  {
    title: "Professional Website Design",
    icon: FiCode,
    bullets: ["Next.js Development", "High Performance UI", "SEO Ready"],
    borderGradient: "bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400",
    hoverBg: `
      radial-gradient(circle at 30% 70%, rgba(173,216,230,.35), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(255,182,193,.4), transparent 60%)
    `,
    activeBg: `
      radial-gradient(circle at 30% 70%, rgba(255,200,150,.45), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(180,255,200,.45), transparent 60%)
    `,
  },
  {
    title: "Dedicated Creative Team",
    icon: FiLayers,
    bullets: ["Collaboration", "Creative Direction", "Project Execution"],
    borderGradient: "bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400",
    hoverBg: `
      radial-gradient(circle at 30% 70%, rgba(173,216,230,.35), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(255,182,193,.4), transparent 60%)
    `,
    activeBg: `
      radial-gradient(circle at 30% 70%, rgba(255,200,150,.45), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(180,255,200,.45), transparent 60%)
    `,
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badgeText="Your Vision"
          titleText="Our Expertise"
          paraText="We drive measurable results through creative excellence."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  p-[1px]
                  rounded-lg
                  transition-all
                  cursor-pointer
                  ${service.borderGradient}
                  ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}
                `}
              >
                <div
                  className="
                    h-full
                    rounded-lg
                    p-8
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                  style={{
                    backgroundImage: isActive
                      ? service.activeBg
                      : service.hoverBg,
                  }}
                >
                  <div className="text-orange-600 mb-3">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {service.title}
                  </h3>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {service.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

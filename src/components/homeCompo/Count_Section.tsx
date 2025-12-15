"use client";

import SectionHeading from "../Re_UseCompo/SectionHeading";

interface StatItem {
  value: string;
  subLabel: string;
}

const stats: StatItem[] = [
  {
    value: "100K+",
    subLabel: "total Users",
  },
  {
    value: "5K+",
    subLabel: "Campaigns",
  },
  {
    value: "500K+",
    subLabel: "Engagements",
  },
  {
    value: "1M+",
    subLabel: "Impressions",
  },
];

export default function StatsSection() {
  return (
    <section className="pb-10  px-4 container m-auto">

      <div className="flex lg:items-center flex-col items-start">

        <SectionHeading
          badgeText="USER STATISTICS"
          titleText="Our Impact"
          paraText="Driving measurable growth with creativity and strategy."
          
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg lg:max-w-5xl m-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="lg:p-8 py-8 p-3 rounded-xl text-center shadow-md bg-white"
          >
            <h3 className="lg:text-3xl capitalize text-2xl font-bold text-orange-600">
              {item.value}
            </h3>

            <p className="text-lg capitalize font-semibold text-gray-700">
              {item.subLabel}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

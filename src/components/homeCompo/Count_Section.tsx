"use client";

import SectionHeading from "../Re_UseCompo/SectionHeading";

interface StatItem {
  value: string;
  subLabel: string;
}

const stats: StatItem[] = [
  {
    value: "100K+",
    subLabel: "DUA & RUQYAH",
  },
  {
    value: "5K+",
    subLabel: "QURAN MAZID ",
  },
  {
    value: "500K+",
    subLabel: "QURAN MAZID",
  },
  {
    value: "1M+",

    subLabel: "AL HADITH",
  },
];

export default function StatsSection() {
  return (
    <section className="py-10 px-4 container m-auto ">

      <div className="flex lg:items-center flex-col items-start">
        <SectionHeading
          badgeText="USER STATISTICS"
          titleText="Number of User's"
          paraText="We are a multidisciplinary agency dedicated to driving measurable
          results through creative excellence and strategic execution."
        ></SectionHeading>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg  lg:max-w-5xl m-auto ">
        {stats.map((item, index) => (
          <div key={index} className={`lg:p-8 py-8 p-3 rounded-xl text-center shadow-md `}>
            <h3 className="lg:text-3xl text-lg font-bold text-gray-800">{item.value}</h3>

            <p className="text-sm font-semibold text-gray-700">
              {item.subLabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

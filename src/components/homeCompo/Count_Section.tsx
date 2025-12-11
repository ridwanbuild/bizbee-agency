"use client";

import SectionHeading from "../Re_UseCompo/SectionHeading";

interface StatItem {
  value: string;
  subLabel: string;
  gradient: string;
}

const stats: StatItem[] = [
  {
    value: "100K+",
    subLabel: "DUA & RUQYAH",
    gradient: "bg-gradient-to-br from-green-100 to-green-100",
  },
  {
    value: "5K+",
    subLabel: "QURAN MAZID PRO",
    gradient: "bg-gradient-to-br from-blue-100 to-blue-100",
  },
  {
    value: "500K+",
    subLabel: "QURAN MAZID",
    gradient: "bg-gradient-to-br from-purple-100 to-purple-100",
  },
  {
    value: "1M+",

    subLabel: "AL HADITH",
    gradient: "bg-gradient-to-br from-yellow-100 to-yellow-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4 container m-auto bg-slate-50">


      <div className="flex lg:items-center flex-col items-start">
        <SectionHeading
          badgeText="USER STATISTICS"
          titleText="Number of User's"
          paraText="We are a multidisciplinary agency dedicated to driving measurable
          results through creative excellence and strategic execution."
        ></SectionHeading>

        
      </div>

      

      {/* Stats Grid */}
      <div className="grid lg:grid-cols-4 gap-10 max-w-lg lg:max-w-5xl m-auto ">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl text-center shadow-sm ${item.gradient}`}
          >
            <h3 className="text-3xl font-bold text-gray-800">{item.value}</h3>

            <p className="text-sm font-semibold text-gray-700">
              {item.subLabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

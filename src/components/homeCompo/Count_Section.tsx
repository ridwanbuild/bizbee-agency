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
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    value: "5K+",
  
    subLabel: "QURAN MAZID PRO",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    value: "500K+",

    subLabel: "QURAN MAZID",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    value: "1M+",
 
    subLabel: "AL HADITH",
    gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="pb-8">
        <SectionHeading
          badgeText="USER STATISTICS"
          titleText="Number of User's"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid lg:grid-cols-4 gap-10 max-w-lg lg:max-w-5xl m-auto px-4 ">
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

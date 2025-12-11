import React from "react";

interface sectionHeadingProp  {
    badgeText : string;
    titleText: string;
    paraText: string
  }


export default function SectionHeading({ badgeText, titleText, paraText } : sectionHeadingProp) {

  return (
    <div className="">

      <div className=" flex flex-col lg:items-center items-start space-y-2 mb-4">

        <h4 className="bg-orange-100 inline-block px-5 rounded-full text-gray-800 uppercase font-semibold py-1 text-sm ">
          {badgeText}
          
        </h4>

        <h2 className="lg:text-3xl capitalize text-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-gray-900 bg-clip-text text-transparent font-bold">
          {titleText}
          
        </h2>

          <p className="lg:text-center text-gray-600 lg:max-w-lg mx-auto mb-16">
          {paraText}
        </p>

      </div>

      

    </div>
  );
}

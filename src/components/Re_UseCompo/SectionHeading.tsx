import React from "react";

interface sectionHeadingProp  {
    badgeText : string;
    titleText: string;
  }


export default function SectionHeading({ badgeText, titleText } : sectionHeadingProp) {

  return (
    <div>
      <div className="text-center space-y-2 mb-4">
        <h4 className="bg-orange-100 inline-block px-4 rounded-full text-gray-800 uppercase font-semibold py-1 text-sm ">
          {badgeText}
          
        </h4>

        <h2 className="lg:text-3xl text-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-gray-900 bg-clip-text text-transparent font-bold">
          {titleText}
          
        </h2>
      </div>
    </div>
  );
}

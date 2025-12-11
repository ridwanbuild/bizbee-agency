"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

export default function UpdateNews() {
  return (
    <div
      className=" max-w-5xl m-auto my-20 p-8  
      bg-gradient-to-r from-red-500 to-orange-500 

      rounded-2xl text-white lg:flex  items-center justify-between"
    >
      {/* LEFT TEXT SECTION */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-slate-200">Trusted by 12k+ developers</p>

        {/* Rating Row */}
        <div className="flex items-center gap-2">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <FaStar key={i} className="text-green-400" size={18} />
            ))}
          </div>
          <span className="text-sm text-slate-300">4.5/5 • 2300+ Reviews</span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl md:text-[46px] leading-tight font-bold 
          bg-gradient-to-r from-white to-[#c4becf] bg-clip-text text-transparent"
        >
          Join our newsletter & Stay Updated
        </h1>
      </div>

      {/* RIGHT INPUT SECTION */}

      <div className="flex mt-10  rounded-full border border-gray-300 overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Type to search..."
          className="flex-1 py-2 px-4 outline-none text-sm"
        />
        <button className=" py-2 cursor-pointer px-4 bg-white text-gray-800  text-sm font-medium  ">
          Subscribe
        </button>
        
      </div>


    </div>
  );
}

"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

export default function UpdateNews() {
  return (
    <div className=" max-w-5xl m-auto my-20 p-8  
      bg-gradient-to-r from-red-500 to-orange-500 
      rounded-2xl text-white flex items-center justify-between">

      {/* LEFT TEXT SECTION */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-slate-200">Trusted by 12k+ developers</p>

        {/* Rating Row */}
        <div className="flex items-center gap-2">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <FaStar key={i} className="text-pink-400" size={18} />
            ))}
          </div>
          <span className="text-sm text-slate-300">4.5/5 • 2300+ Reviews</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-[46px] leading-tight font-semibold 
          bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-transparent">
          Join our newsletter & Stay Updated
        </h1>
      </div>

      {/* RIGHT INPUT SECTION */}
      <div className="md:w-1/2 flex items-center gap-2 bg-gray-100 text-black! mt-6 md:mt-0 
        pl-4 h-11 text-sm rounded-full overflow-hidden w-full md:w-auto">

        <HiOutlineMail size={20} className="text-slate-500" />

        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 outline-none bg-transparent "
        />

        <button className="px-6 h-10 mr-1 rounded-full hover:text-white transition hover:border-orange-600 hover:bg-orange-600 cursor-pointer border border-gray-400 bg-white-800">
          Subscribe
        </button>

      </div>

    </div>
  );
}

"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Current_Development from "../Re_UseCompo/Current_Development";




export default function HeroSection() {
  return (
    <div className="lg:pt-30 pt-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')]  text-sm text-gray-500">


      {/* HERO SECTION */}
      <div className=" relative h-[500px] flex flex-col items-center justify-center px-4 text-center">

        <div className="absolute lg:top-0 top-15">
          <Current_Development></Current_Development>
        </div>

        {/* Title */}
        <h1 className="lg:text-5xl lg:w-[600px] text-2xl font-bold max-w-4xl text-gray-800">
          Solutions to Elevate <span className="text-orange-600"> Your Business </span> Growth
        </h1>

        {/* Description */}
        <p className="lg:max-w-xl text-center mt-6  text-gray-600">
          Unlock potential with tailored strategies designed for success.
          Simplify challenges, maximize results, and stay ahead in the competitive market.
        </p>

        {/* Buttons */}
        <div className="flex items-center  gap-4 pt-6">

          {/* CTA Button */}
          <button className="border px-4 hover:bg-transparent hover:text-black cursor-pointer py-2 transition rounded-full bg-gray-800  text-white">
            Get Started Now
          </button>

          {/* Learn More Button */}
          <button className="border px-4 py-2 rounded-full text-black hover:text-white hover:bg-gray-800 transition cursor-pointer flex items-center ">
            Learn more
            <FiArrowRight
              className="group-hover:translate-x-1 transition text-gray-600 hover:text-white"
              size={14}
            />
          </button>

        </div>


        
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Current_Development from "../Re_UseCompo/Current_Development";

export default function HeroSection() {
  const [activeBtn, setActiveBtn] = useState<"start" | "learn" | null>("start");

  return (
    <div className="lg:pt-30 pt-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')] text-sm text-gray-500">
      <div className="relative h-[500px] flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute lg:top-0 top-15">
          <Current_Development />
        </div>

        {/* Title */}
        <h1 className="lg:text-5xl lg:w-[500px] text-2xl font-bold max-w-4xl text-gray-700">
          We Boost Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Digital & Help
          </span>{" "}
          You Grow
        </h1>

        {/* Description */}
        <p className="lg:max-w-xl text-center mt-6 text-gray-600">
          At Biz-Bee, we tailor smart digital strategies that help brands thrive
          online — from creative design and marketing to measurable growth results.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-6">
          {/* Get Started Button */}
          <button
            onClick={() => setActiveBtn("start")}
            className={`border px-4 py-2.5 rounded-full transition cursor-pointer
              ${
                activeBtn === "start"
                  ? "bg-gradient-to-r from-slate-800 to-slate-500 text-white"
                  : "bg-transparent text-black hover:bg-slate-800 hover:text-white"
              }`}
          >
            Get Started Now
          </button>

          {/* Learn More Button */}
          <button
            onClick={() => setActiveBtn("learn")}
            className={`border px-4 py-2.5 rounded-full transition cursor-pointer flex items-center gap-1
              ${
                activeBtn === "learn"
                  ? "bg-gradient-to-r from-slate-700 to-slate-500 text-white"
                  : "bg-transparent text-black hover:bg-slate-800 hover:text-white"
              }`}
          >
            Learn more
            <FiArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

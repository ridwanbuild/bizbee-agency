import React from "react";

export default function Current_Development() {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border bg-white/40 backdrop-blur-2xl shadow-sm font-semibold text-gray-800">
      
      {/* Animated Dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300"></span>
      </span>

      <span className="bg-gradient-to-r from-slate-700 to-rose-600 bg-clip-text text-transparent">Currently in development</span>

    </div>
  );
}

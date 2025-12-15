"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-md">

        {/* Icon */}
        <div className="flex justify-center mb-3">
          <div className="bg-orange-500/10 text-orange-600 p-4 rounded-full">
            <Ghost size={40} />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl text-gray-800 font-bold mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2 cursor-pointer transition rounded-sm bg-gray-800 hover:bg-gray-900 text-white font-mediums"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}

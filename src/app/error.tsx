"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";


export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md w-full bg-white/50 backdrop-blur-xl border border-white/10 rounded-sm p-8 shadow-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/10 text-orange-500 p-4 rounded-full">
            <AlertTriangle size={40} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          An unexpected error occurred. Please try again or go back to the homepage.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => location.reload()}
            className="px-5 py-2 cursor-pointer rounded-sm bg-gray-800  text-white font-medium transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2 rounded-sm border  font-medium transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

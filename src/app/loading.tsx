"use client";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4">
      
      <div className="flex flex-col items-center gap-4 text-center">
        
        {/* Loader */}
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-600 animate-bounce"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-600 animate-bounce [animation-delay:0.15s]"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-600 animate-bounce [animation-delay:0.3s]"></span>
        </div>

        {/* Meaningful Text */}
        <p className="text-sm sm:text-base text-slate-600 tracking-wide">
          Getting things ready for you…
        </p>
      </div>

    </div>
  );
}

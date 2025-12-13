import Link from "next/link";
import React from "react";

export default function Request_Button() {
  return (

 <div className=" bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient.png')] bg-cover text-sm text-gray-800 max-md:px-4 text-center  ">
     <div className=" flex space-y-2 flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-semibold text-gray-600 mb-3 max-w-md">
        Ready to start your next project? Tell us what you need and let’s
        turn your idea into reality.
      </p>

      <Link
        href="/request"
        className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition"
      >
        Request a Service
      </Link>
    </div>
 </div>

  );
}

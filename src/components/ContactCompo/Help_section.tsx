"use client";

import Image from "next/image";
import Link from "next/link";

const Help_section = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container m-auto px-4 gap-10 grid items-center lg:grid-cols-2">

        {/* Image FIRST on mobile */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src="/contact-image/help-image.png"
            width={400}
            height={400}
            alt="Help illustration"
            className="object-contain"
          />
        </div>

        {/* Text SECOND on mobile */}
        <div className="order-2 lg:order-1  lg:text-left">
            
          <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black text-white px-6 py-2 rounded-sm font-medium hover:bg-gray-800 transition"
          >
            Contact us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Help_section;

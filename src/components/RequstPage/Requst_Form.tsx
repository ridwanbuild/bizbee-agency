"use client";

import SectionHeading from "../Re_UseCompo/SectionHeading";

export default function RequestServicePage() {
  return (
    <section className="py-16 px-4">
   
      <div className="max-w-5xl mx-auto p-6 border rounded-xl bg-white shadow-sm">

        <SectionHeading
          badgeText="Request"
          titleText="send your request"
          paraText="Tell us what you need and we’ll get back to you shortly."
        ></SectionHeading>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium block mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Service */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Select Service
            </label>
            <select className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Choose a service</option>
              <option>Website Design</option>
              <option>Video Editing</option>
              <option>Graphic Design</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Estimated Budget
            </label>
            <select className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Select budget</option>
              <option>$100 – $300</option>
              <option>$300 – $700</option>
              <option>$700 – $1500</option>
              <option>$1500+</option>
            </select>
          </div>

          {/* Delivery Time */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Delivery Time
            </label>
            <select className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Select time</option>
              <option>3 – 5 Days</option>
              <option>7 – 10 Days</option>
              <option>2 – 3 Weeks</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Delivery Date */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Preferred Delivery Date
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-4">
          <label className="text-sm font-medium block mb-1">
            Project Details
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Note */}
        <div className="mt-4">
          <label className="text-sm font-medium block mb-1">
            Note (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Any extra note or special instruction..."
            className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
        <button className="mt-6 cursor-pointer w-full py-2 bg-black text-white rounded-md hover:opacity-90 transition">
          Submit Request
        </button>
      </div>
    </section>
  );
}

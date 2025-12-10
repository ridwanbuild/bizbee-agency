"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="py-20 pt-30 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6 text-slate-800">
          {/* Badge */}
          <p className="text-xs bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-full w-fit">
            Contact Us
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900">
            Let's Get In Touch.
          </h1>

          {/* Subtext */}
          <p className="text-gray-600">
            Have questions or want to work together?  
            We’re here to help you grow your business with powerful digital solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-orange-600 text-2xl">
            <a href="#" className="hover:scale-110 transition"><FaFacebook /></a>
            <a href="#" className="hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="hover:scale-110 transition"><FaLinkedin /></a>
            <a href="#" className="hover:scale-110 transition"><FaTwitter /></a>
            <a href="#" className="hover:scale-110 transition"><FaYoutube /></a>
          </div>

          {/* Email Text */}
          <p className="text-gray-500">
            Or reach us directly at{" "}
            <a href="mailto:hello@bizbee.com" className="text-orange-600 hover:underline">
              hello@bizbee.com
            </a>
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="flex flex-col text-slate-800 w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Name */}
          <label htmlFor="name" className="font-medium">Full Name</label>
          <div className="flex items-center h-12 pl-3 border border-slate-300 rounded-md shadow-sm focus-within:ring-0 focus-within:ring-orange-0 transition-all overflow-hidden mb-4">
            <input
              type="text"
              className="h-full px-3 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <label htmlFor="email" className="font-medium">Email Address</label>
          <div className="flex items-center h-12 pl-3 border border-slate-300 rounded-md shadow-sm focus-within:ring-0 focus-within:ring-orange-0 transition-all overflow-hidden mb-4">
            <input
              type="email"
              className="h-full px-3 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message */}
          <label htmlFor="message" className="font-medium">Message</label>
          <textarea
            rows={4}
            className="w-full mt-2 p-3 bg-transparent border border-slate-300 rounded-md resize-none outline-none shadow-sm focus:ring-0 focus-within:ring-orange-0 transition-all mb-5"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex cursor-pointer items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 w-full rounded-full font-semibold shadow-md transition-all"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}

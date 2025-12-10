// UPDATED: Converted PrebuiltUI HTML navbar into a React/Next.js component
// ADDED: TypeScript typing + JSX fixes
// ADDED: next/link support
// ADDED: Mobile menu open/close logic with useState
// UPDATED: Centered header + reusable links for both mobile & desktop
// UPDATED: Replaced inline SVGs with react-icons

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuSun } from "react-icons/lu";



export default function Navbar() {
  const [open, setOpen] = useState(false); // ADDED

  // ADDED: shared link list
  const navLinks = [
    { label: "home", href: "/" },
    { label: "about", href: "about" },
    { label: "services", href: "services" },
    { label: "pricing", href: "pricing" },
    { label: "contact", href: "contact" }
  ];

  return (
    // UPDATED: centered + container width fix
    <header className="flex items-center justify-between fixed top-3 left-1/2 -translate-x-1/2  container m-auto px-6 py-3 border border-gray-100 backdrop-blur-3xl shadow-md rounded-full bg-white/40 z-50">

      {/* LOGO */}
      <Link href="/">
        <h2 className="font-bold text-xl">
          Biz-<span className="text-teal-600">Bee</span>
        </h2>
      </Link>

      {/* NAV LINKS (shared mobile + desktop) */}
      <nav
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full max-md:bg-white/80 max-md:backdrop-blur max-md:flex-col max-md:justify-center max-md:items-center transition-all flex md:flex-row gap-8 text-gray-900 text-sm font-normal ${
          open ? "max-md:w-full" : "max-md:w-0 overflow-hidden"
        }`}
      >
        {/* UPDATED: re-used links for both views */}
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-orange-600 text-[16px] capitalize"
          >
            {item.label}
          </Link>
        ))}

        {/* CLOSE MENU ICON (mobile) */}
        <button
          className="md:hidden text-gray-600 mt-6"
          onClick={() => setOpen(false)}
        >
          <HiOutlineX size={28} /> {/* UPDATED */}
        </button>

      </nav>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center space-x-4">
        {/* UPDATED: replaced SVG with react-icons */}
        <button className="size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md">
          <LuSun size={16} />
        </button>

        <Link
          className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          href="#"
        >
          Sign up
        </Link>

        {/* OPEN MENU BUTTON */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(true)}
        >
          <HiOutlineMenu size={28} /> {/* UPDATED */}
        </button>
      </div>


    </header>
  );
}

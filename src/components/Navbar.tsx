"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "pricing", href: "/pricing" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <header className="flex items-center bg-white lg:bg-white/50 lg:backdrop-blur-md justify-between fixed lg:top-3 left-1/2 -translate-x-1/2 container px-6 py-4  shadow-md lg:rounded-full z-30">
        
   
        {/* LOGO */}
        <Link href="/">
          <h2 className="font-bold text-xl">
            Biz-<span className="text-teal-600">Bee</span>
          </h2>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-900 text-sm font-normal">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-orange-600 text-[16px] capitalize"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* --- MOBILE OFFCANVAS (NO OVERLAY) --- */}
        <nav
          className={`
            md:hidden fixed top-0 left-0 h-screen w-full 
            bg-white/40 backdrop-blur-[15px] shadow-md p-8 z-50
            flex flex-col text-gray-900 text-lg font-normal 
            transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex items-center border-b border-gray-200 pb-6 justify-between">
            <Link href="/">
              <h2 className="font-bold text-xl">
                Biz-<span className="text-teal-600">Bee</span>
              </h2>
            </Link>

            <button
              className="cursor-pointer text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX size={28} />
            </button>
          </div>

          {/* LINKS */}
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="capitalize hover:text-orange-600 py-3"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 flex items-center justify-center">
            <Link
              className="border w-full border-gray-300 text-center px-5 py-2 rounded-md text-sm font-medium"
              href="/contact"
              onClick={() => setMobileOpen(false)}
            >
              Support Us
            </Link>
          </div>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center space-x-4">
          <Link
            className="hidden md:flex bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium "
            href="/contact"
          >
            Support Us
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-600 rounded-md cursor-pointer border p-1"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenu size={28} />
          </button>
        </div>
      </header>
    </div>
  );
}

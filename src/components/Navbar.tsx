"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation"; // ⬅️ Added
import DialogButton from "./homeCompo/DialogButton";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", href: "/services" },
  { label: "pricing", href: "/pricing" },
  { label: "request form", href: "/request" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname(); // ⬅️ Added

  return (
    <div className="relative">
      <header className="flex items-center bg-white lg:bg-white/50 lg:backdrop-blur-md justify-between fixed lg:top-3 left-1/2 -translate-x-1/2 container px-6 py-4 shadow-md lg:rounded-full z-30">
        {/* LOGO */}
        <Link href="/">
          <h2 className="font-bold bg-gradient-to-r from-slate-700 to-red-400 bg-clip-text text-transparent text-2xl">
            Bizbee
          </h2>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-900 text-sm font-normal">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-orange-600 text-[16px] capitalize ${
                pathname === item.href ? "text-orange-600 font-medium" : ""
              }`}
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
          <h2 className="font-bold bg-gradient-to-r from-slate-700 to-red-400 bg-clip-text text-transparent text-2xl">
            Bizbee
          </h2>
        </Link>

            <button
              className="cursor-pointer text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX size={28} />
            </button>
          </div>

          {/* MOBILE LINKS */}
         <div className=" flex flex-col pt-8">
           {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`capitalize hover:text-orange-600 py-2 ${
                pathname === item.href ? "text-orange-600 font-medium" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
         </div>

        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center space-x-3">

          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="text-gray-700  transition"
          >
            <FaLinkedinIn size={25 } />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-gray-700  transition"
          >
            <FaInstagram size={25 } />
          </Link>

          <Link
            className="lg:bg-slate-800 lg:text-white  lg:px-5 font-semibold lg:rounded-full lg:py-1"
            href="/contact"
          >
            Help
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

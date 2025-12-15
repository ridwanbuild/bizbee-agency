"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

interface LinkSection {
  title: string;
  links: string[];
}

const linkSections: LinkSection[] = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

// Icon map
const iconMap: any = {
  Instagram: <FaInstagram className="text-lg" />,
  Twitter: <FaTwitter className="text-lg" />,
  Facebook: <FaFacebookF className="text-lg" />,
  YouTube: <FaYoutube className="text-lg" />,
};

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300/40 text-gray-600">

        {/* LOGO section */}
        <div>
          <Link href="/">
            <h2 className="font-bold text-gray-800 text-3xl">
              Biz-<span className="text-teal-600">Bee</span>
            </h2>
          </Link>

          <p className="max-w-[410px] mt-6 leading-relaxed text-gray-600">
            Biz-Bee is a creative digital agency dedicated to helping businesses grow online. We deliver strategic marketing, stunning design, and measurable results.
          </p>
        </div>

        {/* Link sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-base text-gray-800 md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 hover:underline text-gray-600 hover:text-gray-900 transition"
                    >
                      {/* If Follow Us → show icon */}
                      {section.title === "Follow Us" && iconMap[link]}
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/90">
        © 2025 <span className="text-gray-700 font-semibold">BizBee</span> — All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;

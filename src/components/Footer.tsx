"use client";

import Link from "next/link";

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

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300/40 text-gray-600">

        {/* LOGO section */}
        <div>
          <Link href="/">
            <h2 className="font-bold text-gray-800 text-3xl">
              Biz-<span className="text-teal-600">Bee</span>
            </h2>
          </Link>

          <p className="max-w-[410px] mt-6 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque amet.
          </p>
        </div>

        {/* link sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-base text-gray-800 md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:underline text-gray-600 hover:text-gray-900 transition">
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

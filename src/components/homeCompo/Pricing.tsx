"use client";

import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import SectionHeading from "../Re_UseCompo/SectionHeading";

interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 199,
    yearly: 159,
    features: [
      "Single landing page website",
      "Basic UI design",
      "Mobile responsive layout",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthly: 399,
    yearly: 319,
    features: [
      "Multi-page website",
      "UI/UX focused design",
      "SEO-ready structure",
      "Social media creatives",
      "Priority support",
    ],
  },
  {
    name: "Pro Agency",
    monthly: 699,
    yearly: 559,
    features: [
      "Custom website design",
      "Video editing (ads & reels)",
      "Branding & graphic design",
      "Digital marketing setup",
      "Analytics & performance report",
    ],
  },
];

const Pricing: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className=" ">
          <SectionHeading
            badgeText="Pricing Plans"
            titleText="Flexible Plans "
            paraText="Whether you're just starting or scaling your brand, choose a plan that fits your goals."
          />
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className={!yearly ? "font-semibold" : "text-gray-500"}>
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setYearly(!yearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              yearly ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                yearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>

          <span className={yearly ? "font-semibold" : "text-gray-500"}>
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-8 bg-white rounded-xl shadow-sm border flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-orange-500">
                  {plan.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {yearly ? "Billed yearly (save more)" : "Monthly billing"}
                </p>

                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">/month</span>
                </div>

                {yearly && (
                  <div className="mb-4 text-xs text-green-700 border border-green-600 px-2 py-1 rounded-full w-fit">
                    Save up to 20%
                  </div>
                )}

                <ul className="space-y-2 mb-6 text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <BiCheck className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="w-full cursor-pointer py-2.5 px-4 bg-gradient-to-r from-slate-700 to-slate-500 text-white rounded-lg text-sm hover:bg-gray-900 transition">
                Request This Plan
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Pricing;

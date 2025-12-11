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
    monthly: 12,
    yearly: 10,
    features: ["3 projects", "5GB storage", "Email support"],
  },
  {
    name: "Standard",
    monthly: 19,
    yearly: 15,
    features: [
      "10 projects",
      "30GB storage",
      "Priority support",
      "Basic analytics",
    ],
  },
  {
    name: "Premium",
    monthly: 29,
    yearly: 22,
    features: [
      "Unlimited projects",
      "100GB storage",
      "Premium support",
      "Advanced analytics",
    ],
  },
];

const Pricing: React.FC = () => {
  // todo check
  const [yearly, setYearly] = useState(false);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mb-5">
          <SectionHeading
            badgeText="Pricing Plans"
            titleText="Heading text"
            paraText="Choose the plan that fits your needs. Monthly and yearly billing options available."
          ></SectionHeading>
        </div>


        {/* toggle */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <span className={!yearly ? "font-semibold" : "text-gray-500"}>
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setYearly(!yearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              yearly ? "bg-orange-600" : "bg-gray-200"
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

        {/* cards */}
        <div className="grid  border-black  lg:grid-cols-3 gap-8 justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-8 bg-white rounded-lg shadow-sm  border-gray-800 flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {plan.name}
                </h3>
                <p className="text-gray-600">
                  {yearly ? "Billed yearly" : "Monthly billing"}
                </p>

                <div className="mt-3 mb-6 flex items-baseline">
                  <span className="text-3xl font-bold">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">/month</span>
                </div>

                {yearly && (
                  <div className="mb-4 text-sm text-indigo-600 border border-indigo-500 px-2 py-1 rounded-full w-fit">
                    Save 20%
                  </div>
                )}

                <ul className="space-y-2 mb-6 text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <BiCheck className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* button stays at bottom */}
              <button className="w-full cursor-pointer py-2 px-4 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 mt-auto">
                Subscribe Now
              </button>

            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Pricing;

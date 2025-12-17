// app/components/FaqSection.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


export type FaqItem = {
  id: string;
  question: string;
  answer: (string | React.ReactNode)[];
};

const FAQ_DATA: FaqItem[] = [
  {
    id: "product-info",
    question: "What is included in the product package?",
    answer: [
      "The package includes the main unit, a charging cable, a user manual, and a warranty card.",
      "All accessories are securely packed to prevent damage during transit.",
    ],
  },
  {
    id: "shipping-time",
    question: "How long does shipping take?",
    answer: [
      "Standard delivery takes 3-5 business days.",
      "If you choose express shipping, delivery time is 1-2 business days.",
      "You will receive a tracking number once your order is dispatched.",
    ],
  },
  {
    id: "return-policy",
    question: "Can I return the item if I'm not satisfied?",
    answer: [
      "Yes — we offer a 30-day return policy. The item must be returned in its original condition.",
      "We offer free return shipping and will process the refund within 48 hours of receiving the returned item.",
    ],
  },
  {
    id: "payment-methods",
    question: "What payment methods are accepted?",
    answer: [
      "We accept major credit/debit cards, and mobile banking payment options.",
      "Cash on Delivery (COD) might be available depending on your location — check during checkout.",
    ],
  },
  {
    id: "order-tracking",
    question: "How can I track my order?",
    answer: [
      "Once your order is shipped, we will send you a tracking number via email or SMS.",
      "Use the tracking number on the courier’s tracking portal to see live updates about delivery.",
    ],
  },
  {
    id: "international-shipping",
    question: "Do you offer international shipping?",
    answer: [
      "Yes — we ship internationally to most countries. Shipping costs and delivery time vary by destination.",
      "Extra customs/import fees (if any) are the customer’s responsibility.",
    ],
  },
];

export function FaqAccordion() {
  return (
    <section
      className="
      bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] h-full
      rounded-md min-h-screen 
    "
    >
      <div className="text-center "></div>

      <div className="grid lg:grid-cols-2 items-center gap-8 px-4 container m-auto">
        <div className="self-start lg:pt-30">
          <img
            src={"/contact-image/contact-image.jpg"}
            alt="contact image"
            width={500}
            height={500}
            className="w-full rounded-md"
          />
        </div>

        <div className="flex  flex-col px-4 py-15">
          <div className="pb-10 space-y-2 gap-10">
            <div className="flex items-center ">
              <h2 className="font-bold">FAQ’S</h2>
              <span className="w-5 mx-2 h-0.5 bg-orange-500"></span>
            </div>

            <h2 className="lg:text-3xl font-semibold text-gray-800">
              Top Questions Answered Your Quick Guide
            </h2>
            <p>
              Digiplus is the hub for early adopters and innovation enthusiasts,
              offering vibrant, imaginative technology before it becomes
              mainstream sem taciti placerat
            </p>
          </div>

          <Accordion type="single" collapsible className="  space-y-4">
            {FAQ_DATA.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-transparent rounded-md bg-gradient-to-br from-white to-gray-50 shadow-sm"
              >
                <AccordionTrigger className="text-[15px] cursor-pointer font-semibold py-2 px-4 text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col py-2 px-4 gap-3 text-gray-700">
                  {faq.answer.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

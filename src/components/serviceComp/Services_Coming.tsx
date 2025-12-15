import React from "react";
import SectionHeading from "../Re_UseCompo/SectionHeading";

export default function Services_Coming() {
  return (
    <section className="min-h-[60vh] pt-25 flex lg:items-center lg:justify-center px-4">
      <div className="lg:text-center max-w-md">

        <SectionHeading
          badgeText="Our Services"
          titleText="Coming Soon"
          paraText="We’re currently working behind the scenes to prepare our full range of services. Please check back shortly — exciting updates are on the way."
        />

      </div>
    </section>
  );
}

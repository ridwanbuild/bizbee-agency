import Help_section from "@/components/ContactCompo/Help_section";
import Want_Request from "@/components/RequstPage/Requst_Form";
import React from "react";

export default function page() {
  return (
    <div className=" ">
      {" "}
      <div className="pt-16">
        <Want_Request></Want_Request>
      </div>

      <Help_section></Help_section>

    </div>
  );
}

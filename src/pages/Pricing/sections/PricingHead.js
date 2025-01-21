import React from "react";
import Pricing from "./Pricing";

function PricingHead() {
  return (
    <div className="px-[10%] mt-[8rem]">
      <div className="text-center mb-[3rem] md:mb-[5rem]">
        <h2 className="font-bold text-[2rem] mb-[2rem]">Pricing</h2>
        <p className="text-[#5B5B5B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae nunc vitae neque .
        </p>
      </div>

      <Pricing />
    </div>
  );
}

export default PricingHead;

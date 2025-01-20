import React from "react";
import datas from "./Data";
import Threee from "../components/Three";
import img1 from "../assets/Icon.png";
import img2 from "../assets/Icon (1).png";
import img3 from "../assets/Icon (2).png";

function Three() {
  return (
    <div className="p-[10%]">
      <div>
        <h2 className="text-center mt-10 font-bold text-[1.4rem] leading-none mb-[3.2rem]">
          Get the best out of your customer support with Finsweet
        </h2>

        <div className="md:flex md:gap-[3rem]">
          <Threee
            heading="Analytics"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque ."
            image={img1}
          />
          <Threee
            heading="Best Quality"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque ."
            image={img2}
          />
          <Threee
            heading="More Clicks"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque ."
            image={img3}
          />
        </div>
      </div>
    </div>
  );
}

export default Three;

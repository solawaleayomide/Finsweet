import React from "react";
import { cardData } from "../../../data/Data5";
import ThreeCard from "../../../components/ThreeCard";

function Three() {
  return (
    <div className="p-[10%]">
      <div>
        <h2 className="text-center mt-10 font-bold text-[1.4rem] leading-none mb-[3.2rem]">
          Get the best out of your customer support with Finsweet
        </h2>

        <div className="md:flex md:gap-[3rem] mb-[3rem] md:mb-[0.5rem]">
          {cardData.map((data, _i) => {
            return (
              <ThreeCard
                key={_i}
                heading={data.heading}
                desc={data.description}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Three;

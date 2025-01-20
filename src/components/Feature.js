import React from "react";
import { homeFeatures } from "./Data";
import FeatureCard from "../components/FeatureCard";

function Feature() {
  return (
    <div>
      <div className="lg:mb-[6rem] md:mb-[5rem]">
        {homeFeatures.map((feature, _i) => (
          <FeatureCard
            key={_i}
            image={feature.image}
            text1={feature.text1}
            text2={feature.text2}
            text3={feature.text3}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;

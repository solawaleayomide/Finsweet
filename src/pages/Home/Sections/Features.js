import React from "react";
import { homeFeatures } from "../../../data/Data";
import FeatureCard from "../../../components/FeatureCard";

function Features() {
  return (
    <div className="lg:mb-[6rem] md:mb-[5rem] mt-[8rem] px-[10%]">
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
  );
}

export default Features;

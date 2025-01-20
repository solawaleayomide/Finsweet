import React from "react";
import FeatureCard from "../components/FeatureCard";
import { productFeatures } from "../components/Data4";

function Features() {
  return (
    <div className="px-[10%] md:mb-[10rem]">
      {productFeatures.map((feature, _i) => (
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

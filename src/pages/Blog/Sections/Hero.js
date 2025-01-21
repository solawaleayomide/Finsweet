import React from "react";
import HeroText from "../../../components/HeroText";
import img1 from "../../../assets/Header Image.png";

function Hero() {
  return (
    <div>
      <HeroText
        heading="Brand Positioning that you can’t ignore in 2021"
        description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque ."
        heroImg={img1}
        date="29 May 2021"
        learn="Learn more →"
      />
    </div>
  );
}

export default Hero;

import React from "react";
import Navbar from "../../components/Navbar";
import HeroText from "../../components/HeroText";
import heroImg from "../../assets/Shapes.png";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <HeroText
        heading="About Us"
        description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque ."
        heroImg={heroImg}
      />
    </div>
  );
}

export default AboutUs;

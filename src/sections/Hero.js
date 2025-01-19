import React from "react";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import heroImg from "../assets/Hero Image.png";

function Hero() {
  return (
    <div>
      <Navbar />
      <HeroText
        heading="Run Your Entire Customer Support Remotely"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque"
        btn1Text="Get Started For Free"
        btn2Text="Pricing"
        heroImg={heroImg}
      />
    </div>
  );
}

export default Hero;

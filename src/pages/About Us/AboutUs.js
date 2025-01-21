import React from "react";
import Navbar from "../../components/Navbar";
import HeroText from "../About Us/Sections/HeroText";
import heroImg from "../../assets/Shapes.png";
import About from "./Sections/About";
import Team from "./Sections/Team";
import Footer from "../../components/Footer";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <HeroText
        heading="About Us"
        description="Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum vitae nunc vitae neque ."
        heroImg={heroImg}
      />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default AboutUs;

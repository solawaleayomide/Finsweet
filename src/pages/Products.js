import React from "react";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import heroImg from "../assets/Hero Image (1).png";

function Products() {
  return (
    <div>
      <Navbar />
      <HeroText
        heading="Help your team to focus on priority tasks"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque"
        heroImg={heroImg}
      />
    </div>
  );
}

export default Products;

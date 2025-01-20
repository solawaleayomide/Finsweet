import React from "react";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import heroImg from "../assets/Hero Image (1).png";
import Three from "../sections/Three";
import Features2 from "../sections/Features2";
import Footer from "../sections/Footer";

function Products() {
  return (
    <div>
      <Navbar />
      <HeroText
        heading="Help your team to focus on priority tasks"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nunc vitae neque"
        heroImg={heroImg}
      />
      <Three />
      <Features2 />
      <Footer />
    </div>
  );
}

export default Products;

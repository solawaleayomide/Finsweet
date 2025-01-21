import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import HeroText from "../../components/HeroText";
import heroImg from "../../assets/Hero Image (1).png";
import Three from "../Product/Section/Three";
import Features2 from "../Product/Section/Features2";
import Image2 from "../Product/Section/Image2";
import Footer from "../../components/Footer";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Image2 />
      <Footer />
    </div>
  );
}

export default Products;

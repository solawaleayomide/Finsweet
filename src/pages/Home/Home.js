import React, { useEffect } from "react";
import Hero from "../Home/Sections/Hero";
import Logo from "../Home/Sections/Logo";
import Why from "../Home/Sections/Why";
import Image from "../Home/Sections/image";
import Features from "../Home/Sections/Features";
import Testimonial from "../Home/Sections/Testimonial";
import Faqs from "../Home/Sections/Faqs";
import Footer from "../Home/Sections/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Logo />
      <Why />
      <Image />
      <Features />
      <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Hero from "../sections/Hero";
import Logo from "../sections/Logo";
import Why from "../sections/Why";
import Image from "../sections/image";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import Faqs from "../sections/Faqs";

function Home() {
  return (
    <div>
      <Hero />
      <Logo />
      <Why />
      <Image />
      <Features />
      <Testimonial />
      <Faqs />
    </div>
  );
}

export default Home;

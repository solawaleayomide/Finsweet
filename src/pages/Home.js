import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import Logo from "../sections/Logo";
import Why from "../sections/Why";
import Image from "../sections/image";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import Faqs from "../sections/Faqs";
import Footer from "../sections/Footer";

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

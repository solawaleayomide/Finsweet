import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Faq from "../Pricing/sections/Faq";
import Testimonials from "../Pricing/sections/Testimonial";
import Footer from "../../components/Footer";
import PricingHead from "./sections/PricingHead";

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <PricingHead />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Pricing;

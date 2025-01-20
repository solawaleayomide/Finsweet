import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Priciing from "../sections/Pricing";
import Faqs from "../sections/Faqs";
import Testimonial from "../sections/Testimonial";
import Footer from "../sections/Footer";
import PricingHead from "../sections/PricingHead";

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PricingHead />
      <Navbar />
      <Faqs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Pricing;

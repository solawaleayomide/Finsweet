import React from "react";
import Navbar from "../components/Navbar";
import Priciing from "../sections/Pricing";
import Faqs from "../sections/Faqs";
import Testimonial from "../sections/Testimonial";
import Footer from "../sections/Footer";

function Pricing() {
  return (
    <div>
      <Priciing />
      <Navbar />
      <Faqs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Pricing;

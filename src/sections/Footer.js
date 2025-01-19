import React from "react";
import Footter from "../components/Footer";

function Footer() {
  return (
    <div className="bg-[#EFF0F8]">
      <div className="px-[10%] mt-[8rem] md:mt-[12rem] pb-10">
        <Footter />
      </div>
      <h2 className="text-[#fff] text-center font-semibold py-3 bg-[#232ED1]">
        © Copyright Unsaas 2021
      </h2>
    </div>
  );
}

export default Footer;

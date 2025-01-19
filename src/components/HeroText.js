import React from "react";
import heroImg from "../assets/Hero Image.png";

function HeroText() {
  return (
    <div className="mt-[10rem] px-[10%] md:px-[7%] md:flex">
      <div className="text-center md:text-start md:w-[50%] md:pr-10">
        <h2 className="font-bold text-[2rem] leading-none mb-8 md:text-[1.8rem] md:mb-5 lg:text-[3rem]">
          Run Your Entire Customer Support Remotely
        </h2>
        <p className="text-[0.95rem] text-[#5B5B5B] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae nunc vitae neque
        </p>

        <div className="flex gap-8 w-fit mx-auto md:mx-0">
          <button className="bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C]">
            <a href="/"> Get Started For Free</a>
          </button>
          <button className="bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C]">
            <a href="/"> Pricing</a>
          </button>
        </div>
      </div>

      <div className="w-[25rem] mt-12 mx-auto md:w-[25rem] lg:w-[30rem]  md:mt-0">
        <img src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
}

export default HeroText;

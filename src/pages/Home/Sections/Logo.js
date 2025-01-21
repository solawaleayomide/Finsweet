import React from "react";
import logo1 from "../../../assets/Logo 1.png";
import logo2 from "../../../assets/Logo 2.png";
import logo3 from "../../../assets/Logo 3.png";
import logo4 from "../../../assets/Logo 4.png";
import logo5 from "../../../assets/Logo 5.png";

function Logo() {
  return (
    <div className="mt-[6rem] px-[10%]">
      <h2 className="text-center text-[#5B5B5B] text-[.9rem]">
        10,000+ clients who are getting more replies
      </h2>

      <div className="w-full mt-7 grid grid-cols-3 md:flex gap-5 md:gap-12 items-center justify-center">
        <img
          src={logo1}
          alt="logo1"
          className="w-[4.3rem] md:w-[6rem] lg:w-[9rem]"
        />
        <img
          src={logo2}
          alt="logo2"
          className="w-[4.3rem] md:w-[6rem] lg:w-[9rem]"
        />
        <img
          src={logo3}
          alt="logo3"
          className="w-[4.3rem]  md:w-[6rem] lg:w-[9rem]"
        />
        <img
          src={logo4}
          alt="logo4"
          className="w-[4.3rem] md:w-[6rem] lg:w-[9rem]"
        />
        <img
          src={logo5}
          alt="logo5"
          className="w-[4.3rem] md:w-[6rem] lg:w-[9rem]"
        />
      </div>
    </div>
  );
}

export default Logo;

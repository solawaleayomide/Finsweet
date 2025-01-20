import React from "react";

function HeroText({ heading, description, btn1Text, btn2Text, heroImg }) {
  return (
    <div className="mt-[10rem] px-[10%] md:px-[7%] md:flex">
      <div className="text-center md:text-start md:w-[50%] md:pr-10">
        <h2 className="font-bold text-[2rem] leading-none mb-8 md:text-[1.8rem] md:mb-5 lg:text-[3rem]">
          {heading}
        </h2>
        <p className="text-[0.95rem] text-[#5B5B5B] mb-8">{description}</p>

        {(btn1Text || btn2Text) && (
          <div className="flex gap-8 w-fit mx-auto md:mx-0">
            <button className="text-[.9rem] bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C]">
              <a href="/"> {btn1Text}</a>
            </button>
            <button className="text-[.9rem] bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C]">
              <a href="/"> {btn2Text}</a>
            </button>
          </div>
        )}
      </div>

      <div className=" mt-12 mx-auto md:mt-0">
        <img
          src={heroImg}
          alt="heroImg"
          className="w-[20rem] md:w-[25rem] lg:w-[30rem]"
        />
      </div>
    </div>
  );
}

export default HeroText;

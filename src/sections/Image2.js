import React from "react";
import img1 from "../assets/Image (1).jpg";

function Image2() {
  return (
    <div className="px-[10%]">
      <div className="mb-[3rem] mt-[6rem]">
        <div>
          <img src={img1} alt="img1" />
        </div>

        <div className="px-[10%] -translate-y-[5rem] md:-translate-y-[6rem] ">
          <div className=" bg-[#F24C27] py-6 px-10 mx-auto rounded-md">
            <h2 className="leading-none mb-[1rem] text-[#fff] text-[1rem] md:text-[2rem] md:mb-[1.8rem] text-center font-bold md:my-auto">
              You + Finsweet = Happy Customers
            </h2>
            <p className="text-[0.7rem] md:text-[1rem] text-center my-auto text-[#fff]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
              cursus arcu. Vestibulum ante ipsum primis in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image2;

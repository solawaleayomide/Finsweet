import React from "react";
import img1 from "../assets/Why Box 1.jpg";
import img2 from "../assets/Why Box 2.jpg";
import img3 from "../assets/Why Box 3.jpg";
import img4 from "../assets/Why Box 4.jpg";

function Why() {
  return (
    <div className="mt-[6rem] px-[10%] md:flex">
      <div className="text-center md:text-start my-auto md:pr-6">
        <p className="text-[#232ED1] text-[0.9rem] font-semibold mb-7">
          Why Choose Us?
        </p>
        <h2 className="font-bold text-[1.5rem] mb-5 leading-none">
          Premium features for competitive price
        </h2>
        <p className="text-[#5B5B5B] text-[0.9rem]">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
          cursus arcu
        </p>
      </div>

      <div className="flex mx-auto md:mx-0 mt-[2.5rem] gap-9 px-6">
        <div>
          <img src={img1} alt="img1" className="mb-9" />
          <img src={img3} alt="img3" />
        </div>

        <div className=" ">
          <img src={img2} alt="img2" className="mb-9" />
          <img src={img4} alt="img4" />
        </div>
      </div>
    </div>
  );
}

export default Why;

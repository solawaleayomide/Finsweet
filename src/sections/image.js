import React from "react";
import img1 from "../assets/Image Background.png";

function image() {
  return (
    <div className="mt-[8rem] relative">
      <div>
        <img src={img1} />
      </div>

      <div className="px-[10%] mb-5 -translate-y-[3rem] absolute right-0 md:px-0">
        <div className="flex md:w-[50rem] bg-[#232ED1] py-6 px-10 mx-auto rounded-md   md:h-[8rem]">
          <h2 className="leading-none mr-9 text-[#fff] text-[.9rem] font-semibold md:text-[1.5rem] md:my-auto">
            Keeps Your Team Happy
          </h2>
          <p className="text-[0.55rem] my-auto text-[#fff] md:text-[.7rem]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
            cursus arcu. Vestibulum ante ipsum primis in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default image;

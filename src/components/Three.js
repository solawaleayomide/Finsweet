import React from "react";

function Three({ heading, desc, image }) {
  return (
    <div className="mb-[3rem] md:mb-[0.5rem]">
      <img src={image} alt="img" className="w-[1.5rem]" />
      <h2 className="font-bold text-[1.3rem] mt-5 mb-2"> {heading}</h2>
      <p className="text-[#5B5B5B]">{desc}</p>
    </div>
  );
}

export default Three;

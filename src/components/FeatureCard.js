import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function FeatureCard({ image, text1, text2, text3 }) {
  return (
    <div className="md:flex even:flex-row-reverse">
      <div>
        <img src={image} className="w-[20rem] md:w-[50rem]" />
      </div>

      <div className="mt-5 mb-12 text-center md:text-start md:px-10 md:my-auto">
        <p className="text-[#232ED1] text-bold mb-4">{text1}</p>
        <h2 className="font-bold text-[1.3rem] mb-4">{text2}</h2>
        <p className="text-[#5B5B5B] text-[0.9rem] mb-4">{text3}</p>
        <button>
          <a className="flex gap-3 items-center text-[#1A1A1A]">
            Learn more <FaLongArrowAltRight className="text-[#1A1A1A]" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;

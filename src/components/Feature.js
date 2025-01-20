import React from "react";
import datas from "./Data";
import { FaLongArrowAltRight } from "react-icons/fa";

function Feature({ image, text1, text2, text3 }) {
  return (
    <div>
      <div className="md:flex even:flex-row-reverse lg:mb-[6rem] md:mb-[5rem]">
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
    </div>
  );
}

export default Feature;

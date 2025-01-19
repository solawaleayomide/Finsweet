import React from "react";
import datas from "./Data";
import { FaLongArrowAltRight } from "react-icons/fa";

function Feature() {
  return (
    <div>
      {datas.map((data) => {
        return (
          <div
            key={data.id}
            className="lg:flex even:flex-row-reverse lg:mb-[6rem] md:mb-[5rem]"
          >
            <div>
              <img
                src={data.image}
                className="w-[20rem] md:w-[25rem] lg:w-[50rem]"
              />
            </div>

            <div className="mt-5 mb-12 text-center md:text-start md:px-10 md:my-auto">
              <p className="text-[#232ED1] text-bold mb-4">{data.text1}</p>
              <h2 className="font-bold text-[1.3rem] mb-4">{data.text2}</h2>
              <p className="text-[#5B5B5B] text-[0.9rem] mb-4">{data.text3}</p>
              <button>
                <a className="flex gap-3 items-center text-[#1A1A1A]">
                  {data.text4}{" "}
                  <FaLongArrowAltRight className="text-[#1A1A1A]" />
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feature;

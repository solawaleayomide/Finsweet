import React from "react";
import datas from "./Data";

function Feature() {
  return (
    <div>
      {datas.map((data) => {
        return (
          <div>
            <div>
              <img
                src={data.image}
                className="w-[20rem] md:w-[25rem] lg:w-[30rem]"
              />
            </div>

            <div className="mt-5 mb-12 text-center">
              <p className="text-[#232ED1] text-bold mb-4">{data.text1}</p>
              <h2 className="font-bold text-[1.3rem] mb-4">{data.text2}</h2>
              <p className="text-[#5B5B5B] text-[0.9rem]">{data.text3}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feature;

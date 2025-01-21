import React from "react";
import { testimonials } from "../data/Data2";

function Testimonials() {
  return (
    <div>
      <h2 className="font-bold text-[1.3rem] text-center mb-[3rem]">
        Customer Testimonials
      </h2>

      <div className="md:flex md:gap-10">
        {testimonials.map((data) => {
          return (
            <div className="mb-[2.5rem] bg-gradient-to-r from-[#B6BAFF33] to-[#232ED133] p-6 rounded-md">
              <div className="flex mb-5">
                <img src={data.image} alt="dataImg" className="w-[3rem] mr-7" />
                <div className="my-auto">
                  <h2 className="font-bold">{data.name}</h2>
                  {Array(data.stars)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-[#FF9F43]">
                        ★
                      </span>
                    ))}
                </div>
              </div>

              <p className="text-[0.9rem]">{data.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;

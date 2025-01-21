import React from "react";
import { Teams } from "../../../data/Data6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

function Team() {
  return (
    <div className="px-[10%] md:px-[7%] md:mt-[7rem]">
      <div className="md:flex">
        <div className="text-center md:text-start md:pr-[4rem]">
          <h2 className="mb-[1rem] font-bold text-[2rem]">Our Team</h2>
          <p className="text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur dipiscing elit.
          </p>
        </div>

        <div className="mt-[2rem] md:mt-0 md:grid md:grid-cols-3">
          {Teams.map((team, _i) => {
            return (
              <div className="flex flex-col items-center justify-center mx-auto mb-[3rem] md:px-[1rem] md:text-start md:items-start">
                <img
                  src={team.image}
                  alt="teamImg"
                  className="w-[15rem] mb-[1rem]"
                />
                <h2 className="text-[#232ED1] text-[0.7rem]">{team.text1}</h2>
                <p className="font-bold">{team.text2}</p>

                <div className="flex gap-[1rem] mt-[.9rem]">
                  <FaFacebook className="text-[#5B5B5B]" />
                  <FaInstagram className="text-[#5B5B5B]" />
                  <IoLogoTwitter className="text-[#5B5B5B]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;

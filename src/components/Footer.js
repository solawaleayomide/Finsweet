import React from "react";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-[#EFF0F8]">
        <div className="px-[10%] mt-[8rem] md:mt-[12rem] pb-10">
          <div className="bg-[#232ED1] text-center p-8 md:py-[4rem] -translate-y-[5rem] rounded-md md:flex md:justify-between">
            <h2 className="text-[#fff] mb-10 text-[1.7rem] leading-none font-bold md:text-[2rem] md:my-auto">
              Get started with Finsweet today
            </h2>
            <button>
              <a className="bg-[#F24C27] px-5 py-2 font-bold rounded-md text-[#fff]">
                View pricing
              </a>
            </button>
          </div>

          <div className="md:flex md:justify-between md:mt-10">
            <div className="text-center mb-[4rem]">
              <h2 className="mb-5 font-bold text-[1.3rem]">Finsweet</h2>
              <div className="flex gap-5 items-center justify-center">
                <FaFacebook className="text-[1rem] text-[#5B5B5B]" />
                <LuInstagram className="text-[1rem] text-[#5B5B5B]" />
                <FaTwitter className="text-[1rem] text-[#5B5B5B]" />
              </div>
            </div>

            <div className="md:flex gap-[10rem] md:gap-[7rem]">
              <div className="text-center mb-12 md:text-start">
                <h2 className="mb-8 font-semibold text-[1.3rem]">Company</h2>

                <ul>
                  <li className="mb-5">
                    <a className=" text-[#5B5B5B]">Product</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">Pricing</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">About Us</a>
                  </li>
                </ul>
              </div>

              <div className="text-center mb-12 md:text-start">
                <h2 className="mb-8 font-semibold text-[1.3rem]">Legal</h2>

                <ul>
                  <li className="mb-5">
                    <a className=" text-[#5B5B5B]">Privacy Policy</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">404</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">Protected Page</a>
                  </li>
                </ul>
              </div>

              <div className="text-center mb-12 md:text-start">
                <h2 className="mb-8 font-semibold text-[1.3rem]">Reach Us</h2>

                <ul>
                  <li className="mb-5">
                    <a className=" text-[#5B5B5B]">Contact Us</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">fs@finsweet.com</a>
                  </li>
                  <li className="mb-5">
                    <a className="text-[#5B5B5B]">+1808 08 08</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-[#5B5B5B] text-center mb-8 md:m-0 mt-[5rem]">
              398 11th St, San Francisco
            </h2>

            <div className="w-fit mx-auto text-center md:mx-0 relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full mb-4 px-5 py-2 rounded-md relative md:w-[25rem] md:mb-0 md:pr-[6rem] md:py-[1rem]"
              />
              <button className="w-full md:w-fit md:absolute md:top-[50%] md:right-0 md:transform md:-translate-y-[50%] bg-[#F24C27] px-5 py-2 font-bold rounded-md text-[#fff] md:translate-x-[-10%]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#fff] text-center font-semibold py-3 bg-[#232ED1]">
        © Copyright Unsaas 2021
      </h2>
    </div>
  );
}

export default Footer;

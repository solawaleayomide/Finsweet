import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-[20px] px-[10%] md:px-[7%] flex items-center justify-between bg-white shadow-md">
      <a href="/" className="text-[2rem] font-bold md:text-[1.5rem]">
        Finsweet
      </a>

      <button
        className="md:hidden text-[2rem] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoMdClose className="w-[1.5rem]" />
        ) : (
          <RxHamburgerMenu className="w-[1.5rem]" />
        )}
      </button>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full pb-10 md:p-0 bg-white md:flex md:static md:w-auto md:bg-transparent md:gap-8 md:items-center`}
      >
        <div className="px-[8%] md:p-0">
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            <li>
              <a href="/" className="hover:text-[#232ED1]">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#232ED1]">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#232ED1]">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#232ED1]">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#232ED1]">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <button className="ml-[10%] md:m-0 bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C] md:hidden">
          <a href="/">Clone Project</a>
        </button>
      </nav>

      <button className="hidden md:block bg-[#232ED1] text-white px-5 py-2 rounded-md hover:bg-[#1A1E9C]">
        <a href="/">Clone Project</a>
      </button>
    </header>
  );
}

export default Navbar;

import React from "react";
import aboutImg from "../../../assets/Image (2).jpg";

function About() {
  return (
    <div className="px-[10%] md:px-[7%] mt-[6rem] mb-[4rem]">
      <div className="text-center md:text-start mb-[5rem]">
        <h2 className="font-bold text-[2rem] mb-[2rem]">Finsweet</h2>
        <p className="text-[#5B5B5B] text-[.9rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
          eu lorem rutrum tempus. Integer tincidunt tellus quis est tincidunt
          auctor.
        </p>
      </div>

      <img src={aboutImg} alt="aboutImg" className="mb-[4rem]" />

      <div className="text-center md:text-start">
        <p className="mb-[2rem] text-[#5B5B5B]">
          Phasellus scelerisque eros felis, ut lobortis ipsum mattis
          ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed
          dolor. Pellentesque facilisis condimentum nunc, nec placerat eros
          aliquam lobortis. Nullam non bibendum neque, nec sagittis risus. Proin
          est metus, bibendum at maximus quis, placerat id sapien. Fusce ipsum
          quam, placerat sit amet mauris vitae, suscipit ultrices turpis. Etiam
          ac eros est. Quisque id rhoncus dolor, eget gravida ante. Integer
          commodo id lacus at fringilla. Phasellus scelerisque eros felis, ut
          lobortis ipsum mattis ullamcorper. Morbi magna orci, ornare vel auctor
          non, malesuada sed dolor. Pellentesque facilisis
        </p>

        <p className="font-bold">
          Phasellus scelerisque eros felis, ut lobortis ipsum mattis
          ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed
          dolor. Pellentesque facilisis condimentum nunc
        </p>
      </div>
    </div>
  );
}

export default About;

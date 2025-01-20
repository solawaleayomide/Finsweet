import React from "react";
import Feature from "../components/Feature";
import img1 from "../assets/Feature 3 Image.png";
import img2 from "../assets/Feature 4 Image.png";
import img3 from "../assets/Feature 5 Image.png";

function Features() {
  return (
    <div className="mt-[8rem] px-[10%]">
      <Feature
        image={img1}
        text1="Features"
        text2="Work from Anywhere"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img2}
        text1="Features"
        text2="Work from Anywhere"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img3}
        text1="Features"
        text2="Work from Anywhere"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
    </div>
  );
}

export default Features;

import React from "react";
import Feature from "../components/Feature";
import img1 from "../assets/Feature 1 Image (1).jpg";
import img2 from "../assets/Feature 2 Image (1).jpg";
import img3 from "../assets/Feature 3 Image.png";
import img4 from "../assets/Feature 4 Image.png";
import img5 from "../assets/Feature 5 Image.png";

function Features() {
  return (
    <div className="px-[10%]">
      <Feature
        image={img1}
        text1="Features"
        text2="Work from Anywhere"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img2}
        text1="Features"
        text2="Chat live with 
the Support Team "
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img3}
        text1="Features"
        text2="Analytics at your 
fingertips"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img4}
        text1="Features"
        text2="Stay connected with
your customers "
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
      <Feature
        image={img5}
        text1="Features"
        text2="Stay up to date with 
live alerts"
        text3="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu"
      />
    </div>
  );
}

export default Features;

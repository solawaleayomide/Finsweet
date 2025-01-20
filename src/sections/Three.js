import React from "react";
import datas from "./Data";

function Three() {
  return (
    <div className="p-[10%]">
      <div>
        <h2 className="text-center mt-10 font-bold text-[1.4rem]">
          Get the best out of your customer support with Finsweet
        </h2>

        <div>
          {datas.map((data) => {
            return <div></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Three;

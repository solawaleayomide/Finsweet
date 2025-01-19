import React, { useState } from "react";
import datas from "../components/Data3";

function Faq() {
  const [activeId, setActiveId] = useState(null);

  const toggleAns = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h2 className="font-bold text-[1.8rem] mb-7">FAQ</h2>

      <div>
        {datas.map((data) => {
          return (
            <div
              className="flex gap-8 border-b-2 mb-5"
              onClick={() => toggleAns(data.id)}
            >
              <span className="font-bold text-[1rem]">{data.id}</span>

              <div>
                <h2 className="font-semibold text-[1.2rem] mb-5 leading-none">
                  {data.question}
                </h2>
                {activeId === data.id && (
                  <p className="mb-7 text-[0.9rem] text-[#5B5B5B]">
                    {data.answer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

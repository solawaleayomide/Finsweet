import React from "react";

function PricingCard({ data }) {
  const { title, price, features, buttonText, highlight } = data;

  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col ${
        highlight ? "bg-[#FFF4E6]" : "bg-[#F8F9FF]"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="text-[2rem] font-extrabold mb-2 flex items-baseline">
        ${price}
        <span className="text-sm font-medium text-gray-500 ml-1">/mo</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Integer proin ac, lectus proin egestas ultricies.
      </p>
      <ul className="mb-6 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-700 flex items-center mb-3"
          >
            <span className="text-green-500 font-bold mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-auto py-2 text-sm font-bold rounded-md ${
          highlight
            ? "bg-[#FF5722] text-white"
            : "border-2 border-[#232ED1] text-[#232ED1]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;

import React from "react";
import PricingCard from "../../../components/PricingCard";

function Pricing() {
  const pricingData = [
    {
      title: "Launch",
      price: "19",
      features: ["1GB of storage", "128 x 31", "50 tasks"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Startup",
      price: "49",
      features: ["100GB of storage", "3 users", "500 tasks", "24/7 support"],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Growth",
      price: "79",
      features: [
        "1000GB of storage",
        "Unlimited users",
        "Unlimited tasks",
        "24/7 support",
        "Priority",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {pricingData.map((plan, index) => (
        <PricingCard key={index} data={plan} />
      ))}
    </div>
  );
}

export default Pricing;

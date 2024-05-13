import React from "react";
import PriceCard from "./Components/Price-Card/PriceCard";
import Header from "./Components/Header/Header";

const App = () => {
  const priceCard = [
    {
      plan: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "PLUS",
      price: "$9/month",
      user: "5 User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
  ];

  return (
    <>
      <Header />
      <PriceCard priceCard={priceCard} />
    </>
  );
};

export default App;

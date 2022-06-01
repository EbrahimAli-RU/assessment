import React from "react";
import SecondCard from "./shared/SecondCard";

const CoreFeature = () => {
  return (
    <div className="core_feature_container">
      <p>Our Core Features</p>
      <h2>We are Specialist for Many Business Solutions</h2>
      <div className="core_feature_card_container">
        <SecondCard />
        <SecondCard />
        <SecondCard />
      </div>
      <div className="core_feature_card_container">
        <SecondCard />
        <SecondCard />
        <SecondCard />
      </div>
    </div>
  );
};

export default CoreFeature;

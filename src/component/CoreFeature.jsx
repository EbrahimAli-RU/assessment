import React from "react";
import SecondCard from "./shared/SecondCard";
import SectionSubHeader from "./shared/SectionSubHeader";

const CoreFeature = () => {
  return (
    <div className="core_feature_container">
      <div style={{ textAlign: "center" }}>
        <SectionSubHeader title="Our Core Features" show />
        <h1 className="colorBlack">We are Specialist for Many</h1>
        <h1 className="negative-margin-5 marginBottom-big colorBlack">
          Business Solutions
        </h1>
      </div>
      <div className="core_feature_card_container marginTop-big">
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

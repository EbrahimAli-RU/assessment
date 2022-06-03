import React from "react";
import SecondCard from "./shared/SecondCard";
import SectionSubHeader from "./shared/SectionSubHeader";
import Meeting1 from "../assets/img/meeting1.jpg";
import Meeting2 from "../assets/img/meeting2.jpg";
import Meeting3 from "../assets/img/meeting3.jpg";
import Meeting4 from "../assets/img/meeting4.jpg";

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
        <SecondCard photo={Meeting1} />
        <SecondCard photo={Meeting2} />
        <SecondCard photo={Meeting3} />
      </div>
      <div className="core_feature_card_container">
        <SecondCard photo={Meeting4} />
        <SecondCard photo={Meeting1} />
        <SecondCard photo={Meeting2} />
      </div>
    </div>
  );
};

export default CoreFeature;

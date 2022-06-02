import React from "react";
import Card from "./shared/Card";
import SectionSubHeader from "./shared/SectionSubHeader";

const CompanyService = () => {
  return (
    <div className="company_services_container">
      <div className="company_services_top"></div>
      <div className="company_services_top_1"></div>
      <div className="company_services_content">
        <SectionSubHeader title="Company Services" show />
        <h1 className="colorBlack marginTop-small">
          We Provide Most Exclusive
        </h1>
        <h1 className="negative-margin-5 colorBlack marginBottom-big">
          Service for Business
        </h1>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CompanyService;

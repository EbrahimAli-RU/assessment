import React from "react";
import Card from "./shared/Card";

const CompanyService = () => {
  return (
    <div className="company_services_container">
      <div className="company_services_content">
        <p>Company Services</p>
        <h2>We Provide Most Exclusive Service for Business</h2>
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

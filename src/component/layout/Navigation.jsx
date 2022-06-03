import React from "react";
import DemoSwitchButton from "../shared/DemoSwitchButton";

const Navigation = () => {
  return (
    <div className="navigation_container">
      <h2 className="colorPrimary">COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Blog</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
      <div>
        <DemoSwitchButton
          title="Consulting Now"
          colorFlag="#14212a"
          slideColor="#ff4917"
        />
      </div>
    </div>
  );
};

export default Navigation;

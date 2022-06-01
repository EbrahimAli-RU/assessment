import React from "react";
import SwitchButton from "./shared/SwitchButton";

import Img from "../assets/img/img1.jpg";

const AboutUs = () => {
  return (
    <div className="about_us_container">
      <div className="about_us_left_container">
        <img src={Img} alt="" />
      </div>
      <div className="about_us_right_container">
        <p>About Us</p>
        <h2>Professional Business Guidance Agency</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since Unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>
        <p>
          <span></span> Business & Consulting Agency
        </p>
        <p>
          <span></span> Business & Consulting Agency
        </p>
        <SwitchButton />
      </div>
    </div>
  );
};

export default AboutUs;

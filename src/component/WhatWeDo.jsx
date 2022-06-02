import React from "react";
import Img from "../assets/img/img1.jpg";
import SwitchButton from "./shared/SwitchButton";

const WhatWeDo = () => {
  return (
    <div className="what_we_do_container">
      <div className="what_we_do_left_container">
        <img src={Img} alt="" />
      </div>
      <div className="what_we_do_right_container">
        <p>What We Do</p>
        <h2>Why Choose Our Business Agency</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <p>
          <span></span> Business & Consulting Agency
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

export default WhatWeDo;

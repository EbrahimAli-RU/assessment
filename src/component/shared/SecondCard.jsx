import React from "react";

import Img1 from "../../assets/img/img1.jpg";

const SecondCard = () => {
  return (
    <div className="second_card_container">
      <img src={Img1} alt="meeting" className="second_card_image" />
      <div className="second_card_info_div">
        <svg
          width="35"
          height="20"
          viewBox="0 0 35 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10H33.75M33.75 10L24.8906 1M33.75 10L24.8906 19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Free consulting</p>
        <p className="second_card_join_us font-size-14">
          Join us for consultation.
        </p>
      </div>
      <div className="second_card_top_div"></div>
      <div className="second_card_bottom_top_div"></div>
      <div className="second_card_colo"></div>
    </div>
  );
};

export default SecondCard;

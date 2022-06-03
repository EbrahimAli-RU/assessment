import React from "react";

const Card = (props) => {
  return (
    <div className="card_container_wrapper">
      <div className="card_container">
        <div className="card_icon_div">{props.children}</div>
        <div className="card_detail_container">
          <p>Creative Idea</p>
          <p className="card_detail_des">
            It is a long established fact that a reader will be distracted.
          </p>
        </div>
        <div className="card_down_arrow">
          <svg
            width="35"
            height="20"
            viewBox="0 0 35 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10H33.75M33.75 10L24.8906 1M33.75 10L24.8906 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="card_container_down_border"></div>
    </div>
  );
};

export default Card;

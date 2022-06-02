import React from "react";

const Circle = () => {
  return (
    <div className="circle_container">
      <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
        <circle
          class="circleBg"
          r="40"
          cy="125"
          cx="125"
          strokeWidth="2"
          fill="none"
        ></circle>
        <circle
          class="circle"
          r="45"
          cy="125"
          cx="125"
          strokeWidth="2"
          fill="none"
        ></circle>
      </svg>
      {/* <p className="circle_title">Business Strategy</p> */}
    </div>
  );
};

export default Circle;

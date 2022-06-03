import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circle = (props) => {
  const { handleMouseEnter, handleMouseLeave, id, value, title } = props;
  return (
    <div className="circle_container">
      <div
        style={{
          width: 120,
          height: 120,
          display: "block",
          borderRadius: "50%",
        }}
        className="GHHG"
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={() => handleMouseLeave(id)}
      >
        <CircularProgressbar
          value={value}
          // text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: "#ff4917",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#f5f5f5",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              // Text color
              fill: "#f88",
              // Text size
              fontSize: "16px",
            },
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
      <p className="circle_title">{title}</p>
    </div>
  );
};

export default Circle;

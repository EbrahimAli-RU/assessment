import React from "react";

const DemoSwitchButton = (props) => {
  const { title, colorFlag, slideColor, fontColor } = props;
  return (
    <div className="demo_switch_button" style={{ backgroundColor: colorFlag }}>
      <div
        className="demo_switch_slide"
        style={{ backgroundColor: slideColor }}
      ></div>
      <p style={{ color: fontColor }}>{title}</p>
    </div>
  );
};

export default DemoSwitchButton;

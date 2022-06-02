import React from "react";

const SectionSubHeader = (props) => {
  const { title, show } = props;
  return (
    <p
      className={`colorPrimary flex_utils`}
      style={{ justifyContent: show ? "center" : "flex-start" }}
    >
      <svg
        width="25"
        height="2.5"
        viewBox="0 0 30 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="3" fill="#FF4917" />
      </svg>{" "}
      <span className="padding_1">{title}</span>
      {show && (
        <svg
          width="25"
          height="2.5"
          viewBox="0 0 30 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="3" fill="#FF4917" />
        </svg>
      )}
    </p>
  );
};

export default SectionSubHeader;

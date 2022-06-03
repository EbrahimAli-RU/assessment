import React from "react";
import User from "../../assets/img/user.jpg";

const UserProfile = () => {
  return (
    <div className="user_profile_container">
      <div className="user_profile_fb">
        <a href="https://www.facebook.com/rokomari/">
          {" "}
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="user_profile_top"></div>
      <div className="user_profile_top_1"></div>
      <div className="user_profile_img_div">
        <img src={User} alt="" />
        <div className="user_profile_down_right_border"></div>
      </div>
      <div className="user_profile_info">
        <p className="colorBlack">User Name</p>
        <p className="user_profile_info_role">Business Developer</p>
      </div>
    </div>
  );
};

export default UserProfile;

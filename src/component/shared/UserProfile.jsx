import React from "react";
import User from "../../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = () => {
  return (
    <div className="user_profile_container">
      <div className="user_profile_top">
        {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
      </div>
      <div className="user_profile_top_1"></div>
      <div className="user_profile_img_div">
        <img src={User} alt="" />
      </div>
      <div className="user_profile_info">
        <p className="colorBlack">User Name</p>
        <p className="user_profile_info_role">Business Developer</p>
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import BannerImg from "../../assets/img/banner.jpg";
import SwitchButton from "../shared/SwitchButton";
const Banner = () => {
  return (
    <div className="banner_container">
      <img src={BannerImg} alt="" />
      <div className="banner_shadow_container"></div>
      <div className="banner_trangle_top"></div>
      <div className="banner_trangle_top_1"></div>
      <div className="banner_info_container">
        <p className="banner_info_title">Business & Consulting</p>
        <h1 className="banner_info_main_heading">Making Difference</h1>
        <h1 className="banner_info_main_heading banner_info_main_heading_negate">
          Growth Your Business
        </h1>
        <h1 className="banner_info_main_heading banner_info_main_heading_negate">
          With Modern Ideas
        </h1>
        <div>
          <SwitchButton />
          <SwitchButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;

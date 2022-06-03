import React from "react";
import BannerImg from "../../assets/img/banner.jpg";
import DemoSwitchButton from "../shared/DemoSwitchButton";
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
        <div className="banner_btn_container marginTop-big">
          <DemoSwitchButton
            title="Get Started Now"
            colorFlag="#ff4917"
            slideColor="#14212a"
            fontColor="white"
          />
          <div className="marginRight-big"></div>
          <DemoSwitchButton
            title="Our Services"
            colorFlag="white"
            slideColor="#ff4917"
            fontColor="#14212a"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

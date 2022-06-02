import React from "react";
import User from "../assets/img/user.jpg";
import Circle from "./shared/Circle";
import SectionSubHeader from "./shared/SectionSubHeader";
import SwitchButton from "./shared/SwitchButton";
import UserProfile from "./shared/UserProfile";

const MeetOurAdvisor = () => {
  return (
    <div className="meet_our_advisor_container">
      <div className="meet_our_advisor_circle"></div>
      <div className="meet_our_advisor_content">
        <div className="meet_our_advisor_top_div">
          <SectionSubHeader title="Meet our Advisors" show />
          <h1 className="marginTop-small colorBlack">We have an Exclusive</h1>
          <h1 className="negative-margin-5 marginBottom-big colorBlack">
            Team Member
          </h1>
          <div className="meet_our_advisor_profile_container">
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
          </div>
        </div>
        <div className="meet_our_advisor_company_skill_container">
          <div className="meet_our_advisor_company_skill_container_left_div">
            <SectionSubHeader title="Company Skills" />
            <h1 className="marginTop-small colorBlack">We Have Experience</h1>
            <h1 className="negative-margin-5 marginBottom-big colorBlack">
              for Business Planning
            </h1>
            <p className="meet_our_advisor_des marginBottom-big">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <p className="meet_our_advisor_des marginBottom-extralarge">
              Unknown printer took a galley of type and scrambled it to make a
              type specimen book.There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even.
            </p>
            <SwitchButton />
          </div>
          <div className="meet_our_advisor_company_skill_container_right_div">
            <div>
              <Circle />
              <Circle />
            </div>
            <div>
              <Circle />
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurAdvisor;

import React, { useState } from "react";
import profile from "../assets/img/profile1.jpg";
import profile2 from "../assets/img/profile2.jpg";
import profile3 from "../assets/img/profile3.jpg";
import profile4 from "../assets/img/profile4.jpg";
import profile5 from "../assets/img/profile5.jpg";
import SectionSubHeader from "./shared/SectionSubHeader";

const dummyUser = [
  {
    photo: profile,
    name: "Richard E. Harrisona",
    level: "CEO & Founder",
    id: 1,
  },
  {
    photo: profile2,
    name: "Ben McCormack",
    level: "CTO & Co-Founder",
    id: 2,
  },
  {
    photo: profile3,
    name: "Michael Marano",
    level: "Technical Director & CTO",
    id: 3,
  },
  {
    photo: profile4,
    name: "Mark Kropf ",
    level: "CEO & Founder",
    id: 4,
  },
  {
    photo: profile5,
    name: "Ksenia Nekrasova ",
    level: "Head of Customer",
    id: 5,
  },
];

const MeetOurAdvisorSecond = () => {
  const [user, setUser] = useState(dummyUser);
  const [activeUser, setActiveUser] = useState(0);

  const forWardHandler = () => {
    setActiveUser((prevState) => (prevState + 1) % user.length);
  };

  const backWardHandler = () => {
    if (activeUser === 0) {
      setActiveUser(user.length - 1);
    } else {
      setActiveUser((prevState) => (prevState - 1) % user.length);
    }
  };

  return (
    <div className="meet_second_container">
      <div className="meet_second_red_cir">
        <svg
          width="552"
          height="493"
          viewBox="0 0 652 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M138.193 0.5C54.5949 59.521 0 156.885 0 267C0 447.045 145.955 593 326 593C506.045 593 652 447.045 652 267C652 156.885 597.405 59.521 513.807 0.5H138.193Z"
            fill="#FF4917"
          />
        </svg>
        <div className="meet_second_comma">
          <svg
            width="222"
            height="175"
            viewBox="0 0 322 275"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M139.16 103.027C139.16 152.507 127.279 191.244 103.516 219.238C79.4271 247.233 45.7357 265.625 2.44141 274.414L2.4414 223.633C35.319 213.542 57.4544 195.313 68.8476 168.945C75.3581 154.948 77.9622 141.439 76.6601 128.418L-1.27634e-05 128.418L-2.399e-05 2.81156e-05L139.16 1.59499e-05L139.16 103.027ZM321.605 103.027C321.605 151.855 310.049 190.43 286.937 218.75C263.5 247.07 229.483 265.625 184.887 274.414L184.887 223.633C218.09 213.216 240.388 195.313 251.781 169.922C257.641 156.576 260.082 142.741 259.105 128.418L182.445 128.418L182.445 1.21658e-05L321.605 0L321.605 103.027Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="active">
          <img src={user[activeUser].photo} alt="" />
        </div>
        <div className="meet_second_profile_div_right">
          <img src={user[(activeUser + 1) % user.length].photo} alt="" />
        </div>
      </div>

      <div className="meet_second_info_container">
        <SectionSubHeader title="Meet Our Advisor" />
        <h1 className="marginTop-small colorBlack">We Have an Experience</h1>
        <h1 className="negative-margin-5 marginBottom-big colorBlack">
          Team Member
        </h1>
        <p className="font-size-14 marginTop-big">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <p className="font-size-14 marginTop-big marginBottom-extralarge">
          Unknown printer took a galley of type and scrambled it to make a type
          specimen book there are many{" "}
        </p>
        <div className="meet_second_intro_div">
          <img
            style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
            src={user[activeUser].photo}
            alt=""
          />
          <div className="meet_second_intro_div_info">
            <p className="colorBlack">{user[activeUser].name}</p>
            <p className="font-size-14 colorPrimary">
              {user[activeUser].level}
            </p>
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}>
          <svg
            onClick={forWardHandler}
            className="right_svg"
            width="44"
            height="25"
            viewBox="0 0 44 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "3rem" }}
          >
            <path
              d="M1 12.5H43M43 12.5L31.6384 1M43 12.5L31.6384 24"
              stroke="#C5C6C8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div></div>
          <svg
            onClick={backWardHandler}
            className="left_svg"
            width="44"
            height="25"
            viewBox="0 0 44 25"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43 12.5L1 12.5M1 12.5L12.3616 24M1 12.5L12.3616 1"
              stroke="#C5C6C8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MeetOurAdvisorSecond;

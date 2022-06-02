import React from "react";
import WhatWeDo from "../WhatWeDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const WhatWe = () => {
  return (
    <div className="what_we_container">
      <div className="what_we_content">
        <div className="what_we_content_top">
          <WhatWeDo />
        </div>
        <div className="what_we_achivement_container">
          <div className="what_we_achivement">
            <FontAwesomeIcon
              style={{ fontSize: "3.5rem", color: "red" }}
              icon={faNotesMedical}
            />
            <p className="what_we_achivement_number">3568</p>
            <p className="what_we_achivement_type">Project Complete</p>
          </div>
          <div className="what_we_achivement">
            <FontAwesomeIcon
              style={{ fontSize: "3.5rem", color: "red" }}
              icon={faNotesMedical}
            />
            <p className="what_we_achivement_number">3568</p>
            <p className="what_we_achivement_type">Satisfied Client</p>
          </div>
          <div className="what_we_achivement">
            <FontAwesomeIcon
              style={{ fontSize: "3.5rem", color: "red" }}
              icon={faNotesMedical}
            />
            <p className="what_we_achivement_number">3568</p>
            <p className="what_we_achivement_type">Internation Award</p>
          </div>
          <div className="what_we_achivement">
            <FontAwesomeIcon
              style={{ fontSize: "3.5rem", color: "red" }}
              icon={faNotesMedical}
            />
            <p className="what_we_achivement_number">3568</p>
            <p className="what_we_achivement_type">Expert team Member</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWe;

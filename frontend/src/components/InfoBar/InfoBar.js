import React from "react";

import onlineIcon from "../InfoBar/onlineIcon.png";
import closeIcon from "../InfoBar/closeIcon.png";

import "./InfoBar.css";

function InfoBar() {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>room</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/join">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;

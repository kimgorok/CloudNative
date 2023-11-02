import React from "react";

import "./InfoBar.css";

function InfoBar() {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <h3>1 : 1 문의</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/join">
          <h3>나가기</h3>
        </a>
      </div>
    </div>
  );
}

export default InfoBar;

import React from "react";

import "./TextContainer.css";

function TextContainer({ users }) {
  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h1>현재 채팅중인 사람들 : </h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TextContainer;

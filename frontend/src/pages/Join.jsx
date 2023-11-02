import React, { useState } from "react";
import { Link } from "react-router-dom"; // 리액트 라우터의 링크를 사용하기 위한 라이브러리

import "./Join.css";

function Join() {
  const [name, setName] = useState(""); // 이름 처음은 빔
  const [room, setRoom] = useState(""); // 방이름 처음은 짐빔
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"></h1>
        <div>
          <input
            placeholder="이름"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)} // 이름 입력값 업데이트
          />
        </div>
        <div>
          <input
            placeholder="채팅방"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)} // 방 이름 입력값 업데이트
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)} // 이름 또는 방 이름이 비어 있으면 링크 이동 못하게 함
          to={`/join/chat?name=${name}&room=${room}`} // 이름과 방 이름을 URL 쿼리로 전달하여 채팅 화면으로 이동
        >
          <button className={"button mt-20"} type="submit">
            가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;

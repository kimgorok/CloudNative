import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  // 엔터 눌러서 채팅 전송하기
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 엔터 눌렀을 때 새로고침 안되게
      sendMessage(event); // sendMessage 함수를 호출하여 메시지 전송
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // 버튼 클릭했을 때 새로고침 안되게
    sendMessage(event); // sendMessage 함수를 호출하여 메시지 전송
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)} // 입력 값 변경 시 setMessage 함수 호출
        onKeyDown={handleKeyPress}
      />
      <button
        style={{ cursor: "pointer" }}
        className="sendButton"
        type="submit"
        onClick={handleButtonClick}
      >
        전송
      </button>
    </form>
  );
};

export default Input;

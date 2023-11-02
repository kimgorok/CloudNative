import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Enter 키 눌렀을 때 새로고침 방지
      sendMessage(event);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // 버튼 클릭 시 새로고침 방지
    sendMessage(event);
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
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

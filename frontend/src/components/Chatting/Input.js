import React from "react";

import styled from "styled-components";

// 채팅 입력 폼
const MyForm = styled.form`
  display: flex;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

// 채팅 입력하는 input
const InputText = styled.input`
  border: none;
  padding: 2%;
  width: 90%;
  font-size: 1.2em;
  outline: none;
`;

// 전송 버튼
const SendButton = styled.button`
  background: #ffd700;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  border: none;
  width: 10%;
  outline: none;
`;

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
    <MyForm>
      <InputText
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)} // 입력 값 변경 시 setMessage 함수 호출
        onKeyDown={handleKeyPress}
      />
      <SendButton
        style={{ cursor: "pointer" }}
        className="sendButton"
        type="submit"
        onClick={handleButtonClick}
      >
        전송
      </SendButton>
    </MyForm>
  );
};

export default Input;

import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase(); // 사용자 이름에서 공백을 제거하고 소문자로 변환

  // 지금 유저가 보내는 건지, 남이 보내는 건지 확인
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      {/* 현재 사용자가 보낸 메시지의 컨테이너 */}
      <p className="sentText pr-10">{trimmedName}</p>
      {/* 메시지 오른쪽에 사용자 이름 표시 */}
      <div className="messageBox backgroundBlue">
        {/* 메시지 박스 스타일링 - 파란색 */}
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        {/* 메시지 텍스트 - 흰색 */}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {/* 다른 사용자가 보낸 메시지의 컨테이너 */}
      <div className="messageBox backgroundLight">
        {/* 메시지 박스 스타일링 - 밝은 색상 */}
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        {/* 메시지 텍스트 - 어두운 색상 */}
      </div>
      <p className="sentText pl-10 ">{user}</p>
      {/* 메시지 왼쪽에 사용자 이름 표시 */}
    </div>
  );
}

export default Message;

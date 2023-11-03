import React, { useEffect } from "react";

import BasicScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

import "./Messages.css";

// 메시지 배열 messages
function Messages({ messages, name }) {
  // 메시지 배열 업데이트
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <BasicScrollToBottom className="messages">
      {/* 스크롤을 아래로 이동하는 컨테이너 */}
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
            {/* 각 메시지를 Message 컴포넌트로 렌더링 */}
          </div>
        );
      })}
    </BasicScrollToBottom>
  );
}

export default Messages;

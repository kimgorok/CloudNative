import React, { useState, useEffect } from "react";
import queryString from "query-string"; // URL 쿼리 파싱을 위한 라이브러리
import io from "socket.io-client"; // Socket.IO 클라이언트 라이브러리

import InfoBar from "../components/Chatting/InfoBar";
import Input from "../components/Chatting/Input";
import Messages from "../components/Chatting/Messages/Messages";

import { MainFrame } from "./MainPage";
import styled from "styled-components";

const ENDPOINT = "http://localhost:5000"; // Socket.IO 서버의 엔드포인트
let socket; // Socket.IO 소켓 객체

// 채팅 스타일
const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;
// 채팅화면
const ChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #adcce4;
  border-radius: 8px;
  margin-top: 5%;
  height: 80vh;
  width: 90%;
`;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // messages는 그 동안의 메시지가 담긴 배열

  useEffect(() => {
    // URL에서 name과 room을 가져옴
    const { name, room } = queryString.parse(window.location.search);

    // Socket.io를 초기화
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    // 'join' 이벤트를 서버로 보내 사용자를 방에 추가
    socket.emit("join", { name, room }, (error) => {
      if (error) {
      }
    });
  }, []);

  useEffect(() => {
    // 새로운 메시지가 올 때마다 메시지 목록을 업데이트
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // 방의 사용자 목록을 업데이트합니다.
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      // 메시지가 비어 있지 않으면 'sendMessage' 이벤트를 서버로 보내 메시지 전송
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <MainFrame>
      <ChatContainer>
        <ChatScreen>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </ChatScreen>
      </ChatContainer>
    </MainFrame>
  );
};

export default Chat;

import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../components/InfoBar/InfoBar";
import Input from "../components/Input/Input";
import Messages from "../components/Messages/Messages";

import "./Chat.css";

const ENDPOINT = "http://localhost:5000";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);
  console.log("유저 : " + users);
  // 테스트용

  useEffect(() => {
    // URL에서 name과 room을 가져옵니다.
    const { name, room } = queryString.parse(window.location.search);

    console.log("이름 : " + name, "방 : " + room);

    // Socket.io를 초기화합니다.
    socket = io(ENDPOINT);

    console.log("ENDPOINT:", ENDPOINT);
    setRoom(room);
    setName(name);

    // 'join' 이벤트를 서버로 보내 사용자를 방에 추가합니다.
    socket.emit("join", { name, room }, (error) => {
      if (error) {
      }
    });
  }, []);

  useEffect(() => {
    // 새로운 메시지가 올 때마다 메시지 목록을 업데이트합니다.
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
      // console.log(message)
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;

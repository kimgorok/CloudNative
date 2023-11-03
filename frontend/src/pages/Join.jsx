import React, { useState } from "react";
import { Link } from "react-router-dom"; // 리액트 라우터의 링크를 사용하기 위한 라이브러리

import { MainFrame } from "./MainPage";
import styled from "styled-components";
import { motion } from "framer-motion";

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

//  방이름, 헤더처럼 사용
const RoomName = styled.input`
  background-color: #f2889b;
  color: white;
  border: none;
  padding: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -3.6px;
`;

// 닉네임 적는 인풋
const NickName = styled.input`
  margin: 60px 20px 20px 20px;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #f2889b;
  font-size: 25px;
  outline: none;
`;

// 가입 버튼 있는 div
const JoinButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

// 가입 버튼
const JoinButton = styled(motion.button)`
  color: white;
  background: #f2889b;
  padding: 10px 25px;
  border-radius: 15px;
  border: solid 3px black;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

function Join() {
  const [name, setName] = useState(""); // 이름 처음은 빔
  const room = "1 : 1 문의 입장하기"; // 방이름
  return (
    <MainFrame>
      <JoinContainer>
        <RoomName type="text" value="1 : 1 문의 입장하기" disabled />

        <NickName
          placeholder="닉네임을 적어주세요"
          type="text"
          onChange={(event) => setName(event.target.value)} // 이름 입력값 업데이트
        />

        <JoinButtonFrame>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)} // 이름 또는 방 이름이 비어 있으면 링크 이동 못하게 함
            to={`/join/chat?name=${name}&room=${room}`} // 이름과 방 이름을 URL 쿼리로 전달하여 채팅 화면으로 이동
          >
            <JoinButton whileHover={{ scale: 1.2 }} type="submit">
              가입
            </JoinButton>
          </Link>
        </JoinButtonFrame>
      </JoinContainer>
    </MainFrame>
  );
}

export default Join;

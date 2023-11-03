import React from "react";

import ReactEmoji from "react-emoji";
import styled from "styled-components";

// 내 메시지 컨테이너
const MyMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-bottom: 5px;
`;

// 내 메시지 옆에 나오는 이름
const MyNickName = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #828282;
  padding-right: 10px;
`;

// 내 메시지 상자
const MyMessageBox = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  display: inline-block;
  max-width: 80%;
  background: #ffd700;
`;

// 내 메시지 텍스트
const MyMessageText = styled.p`
  width: 100%;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  font-weight: 600;
`;

// 상대방 메시지 컨테이너
const OppositionMessageContainer = styled(MyMessageContainer)`
  justify-content: flex-start;
`;

// 상대 메시지 상자
const OppositionMessageBox = styled(MyMessageBox)`
  background-color: white;
`;

// 상대 메시지 텍스트
const OppositionMessageText = styled(MyMessageText)``;

// 상대 이름
const OppositionName = styled(MyNickName)`
  padding-left: 10px;
`;

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase(); // 사용자 이름에서 공백을 제거하고 소문자로 변환

  // 지금 유저가 보내는 건지, 남이 보내는 건지 확인
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <MyMessageContainer>
      {/* 현재 사용자가 보낸 메시지의 컨테이너 */}
      {/* 메시지 왼쪽에 사용자 이름 표시 */}
      <MyNickName>{trimmedName}</MyNickName>
      {/* 메시지 박스 스타일링 */}
      <MyMessageBox>
        <MyMessageText>{ReactEmoji.emojify(text)}</MyMessageText>
      </MyMessageBox>
    </MyMessageContainer>
  ) : (
    <OppositionMessageContainer>
      {/* 다른 사용자가 보낸 메시지의 컨테이너 */}
      {/* 상대방 메시지 박스 */}
      <OppositionMessageBox>
        <OppositionMessageText>
          {ReactEmoji.emojify(text)}
        </OppositionMessageText>
      </OppositionMessageBox>
      {/* 메시지 오른쪽에 사용자 이름 표시 */}
      <OppositionName>{user}</OppositionName>
    </OppositionMessageContainer>
  );
}

export default Message;

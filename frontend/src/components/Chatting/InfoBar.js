import React from "react";

import styled from "styled-components";

// 채팅창 위에 타이틀
const InfoBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.ChattingHead};
  border-radius: 10px 10px 0 0;
  height: 7vh;
`;

// 뒤로가기 버튼
const GoBackButtonFrame = styled.div`
  margin-left: 10px;
`;

// 뒤로가기 글씨
const GoBackText = styled.div`
  color: white;
  font-size: 24px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 10px;
`;

// 타이틀의 타이틀
const InfoTitleFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 5%;
`;

// 제목
const InfoTitleText = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

function InfoBar() {
  return (
    <InfoBarContainer>
      <GoBackButtonFrame>
        <a href="/join">
          <GoBackText>◀</GoBackText>
        </a>
      </GoBackButtonFrame>
      <InfoTitleFrame>
        <InfoTitleText>1 : 1 문의</InfoTitleText>
      </InfoTitleFrame>
    </InfoBarContainer>
  );
}

export default InfoBar;

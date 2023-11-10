import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// 배너
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  padding: 60px;
  border-radius: 10px 10px 0px 0px;
  // 배경 이미지를 props로 받아 옴
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
`;

// 배너에 적힌 영화 제목
const Title = styled.h2`
  padding-left: 40px;
  font-size: 4rem;
  width: 100%;
  color: white;
  // 흰 배경에서도 보이도록 그림자 설정
  text-shadow: 3px 3px 0 black;
`;

// 영화 설명
const Overview = styled.p`
  padding-left: 40px;
  font-size: 1.4rem;
  width: 80%;
  color: white;
  text-shadow: 3px 3px 0 black;
`;

// 배너에 마우스 올렸을 때 나오는 좌우 화살표
const ArrowButton = styled(motion.button)`
  position: absolute;
  height: 55vh;
  max-height: inherit; // 최대 높이를 상속받음
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;
// 배너에 마우스 올렸을 때 나오는 중앙 일시정지/재개 버튼
const PauseButton = styled(motion.button)`
  position: absolute;
  width: 100px;
  height: 100px;
  // 원을 만들기 위해 테두리 50%로
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

// Banner 컴포넌트에서 사용되는 하위 요소들을 포함하는 컴포넌트
function BannerModule({
  movie,
  bgPhoto,
  onNextButtonClick,
  onBackButtonClick,
  isArrowButtonVisible,
  onPauseButtonClick,
  isIntervalRunning,
}) {
  return (
    <Banner layoutId={movie.id + ""} key={movie.id} bgPhoto={bgPhoto}>
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
      <ArrowButton
        animate={{ opacity: isArrowButtonVisible ? 1 : 0, x: 0 }} // 화면에 마우스 올리면 보이게
        style={{ left: 0 }}
        onClick={onBackButtonClick}
        whileHover={{ scale: 1.2 }}
      >
        ◀
      </ArrowButton>

      {/* 다음 버튼 */}
      <ArrowButton
        animate={{ opacity: isArrowButtonVisible ? 1 : 0, x: 0 }}
        style={{ right: 0 }}
        onClick={onNextButtonClick}
        whileHover={{ scale: 1.2 }}
      >
        ▶
      </ArrowButton>
      <PauseButton
        animate={{ opacity: isArrowButtonVisible ? 1 : 0, x: 0 }}
        style={{ left: "45%" }}
        onClick={onPauseButtonClick}
        whileHover={{ scale: 1.2 }}
      >
        {isIntervalRunning ? "| |" : "▶"}
      </PauseButton>
    </Banner>
  );
}

export default BannerModule;

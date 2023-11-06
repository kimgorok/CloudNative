import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// GenreFrame 스타일 컴포넌트
const GenreFrame = styled.div`
  position: relative;
  flex-shrink: 0;
`;

// ButtonFrame 스타일 컴포넌트
const ButtonFrame = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
`;

// 좌우 버튼
const SliderButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 20px 5px 20px 5px;
  cursor: pointer;
`;

// DB로 가져온 영화 제목
const DBMovieTitle = styled.div`
  color: ${(props) => props.theme.darkwhiteColor};
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
  padding-left: 2%;
`;

// DB로 가져온 영화 Wrapper 가로로 김
const DBMovieWrapper = styled.div`
  height: 389px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  gap: 41px;
`;

// DB로 가져온 영화 Frame
const DBMovieFrame = styled(motion.div)`
  width: 17.5%;
  height: 80%;
  flex-shrink: 0;

  transition: transform 0.5s ease;
  border-radius: 42px;
  background: #b4bec9;
`;

const DBMovieImg = styled.div`
  height: 228px;
  flex-shrink: 0;
  background-color: #b1b1b1;

  border-radius: 42px 42px 0px 0px;
`;

const DBMovieNameFrame = styled.div`
  display: flex;

  height: auto;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

const DBMovieName = styled.div`
  text-align: center;
  font-size: 26px;
`;

const GenreModule = ({
  title,
  images,
  currentIndex,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <GenreFrame>
      <DBMovieTitle>{title}</DBMovieTitle>
      <DBMovieWrapper>
        {images.map((image, index) => (
          <DBMovieFrame
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 170}%)`,
            }}
          >
            <DBMovieImg src={image} alt={`Slide ${index + 1}`} />
            <DBMovieNameFrame>
              <DBMovieName>이름</DBMovieName>
            </DBMovieNameFrame>
          </DBMovieFrame>
        ))}
        <ButtonFrame>
          <SliderButton whileHover={{ scale: 1.4 }} onClick={onPrevClick}>
            ◀
          </SliderButton>
          <SliderButton whileHover={{ scale: 1.4 }} onClick={onNextClick}>
            ▶
          </SliderButton>
        </ButtonFrame>
      </DBMovieWrapper>
    </GenreFrame>
  );
};

export default GenreModule;

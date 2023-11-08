import React, { useState } from "react";
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
  background: rgba(76, 76, 76, 0.5);
  position: relateve;
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
  margin-top: 2%;
`;

// DB로 가져온 영화 Wrapper 가로로 김
const DBMovieWrapper = styled.div`
  height: auto;
  flex-shrink: 0;
  margin: 10px 0px 30px 0px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

// DB로 가져온 영화 Frame
const DBMovieFrame = styled(motion.div)`
  width: 17.5%;
  height: 80%;
  margin: 0px 5px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.bgColor};
  transition: transform 0.5s ease;
  border-radius: 42px;
  overflow: hidden;
  border: 5px solid ${(props) => props.theme.pinkblueColor};
  box-shadow: 1px 1px 3px grey;
`;

const DBMovieImg = styled.img`
  width: 100%;
  height: 250px;
  flex-shrink: 0;
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
  padding: 5px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -3.6px;

  color: ${(props) => props.theme.darkwhiteColor};
`;

const GenreModule = ({
  title,
  images,
  currentIndex,
  onPrevClick,
  onNextClick,
}) => {
  const [isArrowButtonVisible, setIsArrowButtonVisible] = useState(false);
  return (
    <GenreFrame>
      <DBMovieTitle>{title}</DBMovieTitle>
      <motion.div
        onMouseEnter={() => setIsArrowButtonVisible(true)}
        onMouseLeave={() => setIsArrowButtonVisible(false)}
      >
        <DBMovieWrapper>
          {images.map((image, index) => (
            <DBMovieFrame
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 170}%)`,
              }}
            >
              <DBMovieImg src={image.image_url} alt={"이미지 없음"} />

              <DBMovieNameFrame>
                <DBMovieName>{image.title}</DBMovieName>
              </DBMovieNameFrame>
            </DBMovieFrame>
          ))}
          <ButtonFrame>
            <SliderButton
              animate={{ opacity: isArrowButtonVisible ? 1 : 0, x: 0 }}
              whileHover={{ scale: 1.4 }}
              onClick={onPrevClick}
            >
              ◀
            </SliderButton>
            <SliderButton
              animate={{ opacity: isArrowButtonVisible ? 1 : 0, x: 0 }}
              whileHover={{ scale: 1.4 }}
              onClick={onNextClick}
            >
              ▶
            </SliderButton>
          </ButtonFrame>
        </DBMovieWrapper>
      </motion.div>
    </GenreFrame>
  );
};

export default GenreModule;

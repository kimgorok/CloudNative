import { motion } from "framer-motion";
import styled from "styled-components";

// 최신 인기영화 Frame
export const PopularMovieFrame = styled.div`
  height: 438px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 80px;
`;

// 최신 인기영화 Text
export const PopularMovieTitle = styled.div`
  box-sizing: border-box;
  width: 363px;
  height: 47px;
  margin: 20px 20px 0px 20px;
  color: ${(props) => props.theme.darkwhiteColor};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -3.6px;
`;

// 최신 인기영화 Grid
export const PopularMovieGrid = styled.div`
  display: flex;
  margin: 0px 40px;
  justify-content: center;
  gap: 50px;
`;

// 인기 영화 3개
export const PopularMovie = styled.div`
  width: 290px;
  height: 360px;
  background-image: url(${(props) => props.bgphoto});
  // 이미지 꽉 차게 그리고 중앙에 오도록
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  // 기존의 box-shadow에 transition을 추가
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: none; // hover 시 box-shadow를 없앰
  }
`;

// 인기 영화 순위 글씨(1 2 3)
export const PopularMovieText = styled.div`
  color: white;
  font-size: 3.5rem;
  margin: 20px;
  font-weight: 700;
  text-shadow: 3px 3px 0 black;
`;

// 인기 영화 애니메이션
export const PopularMovieVariants = {
  // 처음엔 보이지 않다가
  hidden: {
    opacity: 0,
    scale: 0,
  },
  // 뿅뿅뿅 등장
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      // 0.5초마다 하나씩 등장하게 하기 위해
      delay: index * 0.5,
    },
  }),
  // 마우스 올리면 이동
  hover: {
    x: 15,
    y: 15,
  },
};

// 클릭하면 나오는 큰 화면
export const BigMovie = styled(motion.div)`
  position: absolute;
  left: 15%;
  width: 70%;
  height: auto;
  margin: 0px auto;
  background-color: rgb(20, 20, 20);
  z-index: 4;
  padding-bottom: 10px;
`;

// 뒤에 검정색되는거 오버레이
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 3;
  cursor: pointer;
`;

// 큰 화면 표지
export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  min-height: 70vh;
`;
// 큰 화면 제목
export const BigTitle = styled.div`
  width: 100%;
  font-size: 2.5rem;
  position: relative;
  top: -100px;
  padding: 20px;
  color: white;
`;
// 큰 화면 설명
export const BigOverView = styled.div`
  margin: -100px 0px 40px 10px;
  padding: 10px;
  font-weight: lighter;
  color: white;
`;
// 큰 화면 기타
export const BigOthers = styled.div`
  position: relative;
  left: 0px;
  padding-left: 10px;
  font-weight: normal;
  color: white;
`;

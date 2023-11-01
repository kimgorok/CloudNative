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
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
`;

// 최신 인기영화 Grid
export const PopularMovieGrid = styled.div`
  display: flex;
  margin: 0px 40px;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  flex-shrink: 0;
`;

export const PopularMovie = styled.div`
  width: 290px;
  height: 360px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  transition: box-shadow 0.2s; // 기존의 box-shadow에 transition을 추가합니다.
  &:hover {
    box-shadow: none; // hover 시 box-shadow를 없앱니다.
  }
`;

export const PopularMovieText = styled.div`
  color: white;
  font-size: 3.5rem;
  margin: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-shadow: 3px 3px 0 black;
`;

export const PopularMovieVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.5,
    },
  }),
  hover: {
    x: 15,
    y: 15,
  },
};

export const BigMovie = styled(motion.div)`
  position: absolute;
  left: 25%;
  width: 50%;
  height: auto;

  margin: 0px auto;
  background-color: rgb(20, 20, 20);
  border-radius: 15px;
  z-index: 4;
`;

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

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 70vh;
`;

export const BigTitle = styled.div`
  width: 100%;
  font-size: 2.5rem;
  position: relative;
  top: -100px;
  padding: 20px;
  color: white;
`;

export const BigOverView = styled.div`
  margin: -100px 0px 40px 10px;
  padding: 10px;

  font-weight: lighter;
  color: white;
`;

export const BigOthers = styled.div`
  position: relative;
  left: 0px;
  padding-left: 10px;
  font-weight: normal;
  color: white;
`;

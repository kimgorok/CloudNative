import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./../atom";

// + 버튼
const ToggleButton = styled(motion.button)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 2;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  border-color: black;
  cursor: pointer;

  box-shadow: 1px 1px 1px grey;
  svg {
    fill: black;
    width: 24px;
    height: 24px;
  }
`;

// 뒤에 숨은 버튼들
const OtherButton = styled(ToggleButton)`
  z-index: 1;
`;

function FloatButton() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const [movingButton, setMovingButton] = useState(false);
  const [toggleButtonClicked, setToggleButtonClicked] = useState(false);

  // 토글 함수
  const handleToggleClick = () => {
    setMovingButton((prev) => !prev);
    setToggleButtonClicked((prev) => !prev);
  };

  // 화면의 제일 위로 스크롤 하는 버튼
  const goTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 화면의 제일 아래로 스크롤 하는 버튼
  const goBottomClick = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: document.documentElement.scrollHeight - windowHeight, // 문서의 맨 아래로 스크롤
      behavior: "smooth", // 부드러운 애니메이션 사용
    });
  };

  return (
    <>
      <ToggleButton
        onClick={handleToggleClick}
        animate={{
          rotate: toggleButtonClicked ? 45 : 0, // 클릭 시 45도 회전
        }}
        transition={{ duration: 0.1 }}
      >
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
        </svg>
      </ToggleButton>

      <OtherButton
        onClick={toggleDarkAtom}
        initial={{ y: 0 }}
        animate={{ y: movingButton ? -60 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </OtherButton>

      <OtherButton
        onClick={goTopClick}
        initial={{ y: 0 }}
        animate={{ y: movingButton ? -180 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path>
        </svg>
      </OtherButton>
      <OtherButton
        onClick={goBottomClick}
        initial={{ y: 0 }}
        animate={{ y: movingButton ? -120 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <svg viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </OtherButton>
    </>
  );
}

export default FloatButton;

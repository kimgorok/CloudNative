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
  border-radius: 50%;
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
  // 해와 달
  const [sunAndMoon, setSunAndMoon] = useState(true);
  // 해와 달 토글
  const toggleDarkAtom = () => {
    setDarkAtom((prev) => !prev);
    setSunAndMoon((prev) => !prev);
  };
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
        {sunAndMoon ? (
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.75 5.5C11.1977 5.5 10.75 5.05228 10.75 4.5V2C10.75 1.44772 11.1977 1 11.75 1H12.25C12.8023 1 13.25 1.44772 13.25 2V4.5C13.25 5.05228 12.8023 5.5 12.25 5.5H11.75Z"
              fill="black"
            />
            <path
              d="M16.4194 7.22698C16.0289 6.83646 16.0289 6.20329 16.4194 5.81277L18.1872 4.045C18.5777 3.65447 19.2109 3.65447 19.6014 4.045L19.9549 4.39855C20.3455 4.78908 20.3455 5.42224 19.9549 5.81277L18.1872 7.58053C17.7967 7.97106 17.1635 7.97106 16.773 7.58053L16.4194 7.22698Z"
              fill="black"
            />
            <path
              d="M18.5 11.75C18.5 11.1977 18.9477 10.75 19.5 10.75H22C22.5523 10.75 23 11.1977 23 11.75V12.25C23 12.8023 22.5523 13.25 22 13.25H19.5C18.9477 13.25 18.5 12.8023 18.5 12.25V11.75Z"
              fill="black"
            />
            <path
              d="M16.7728 16.4194C17.1633 16.0289 17.7965 16.0289 18.187 16.4194L19.9548 18.1872C20.3453 18.5777 20.3453 19.2109 19.9548 19.6014L19.6012 19.9549C19.2107 20.3455 18.5775 20.3455 18.187 19.9549L16.4192 18.1872C16.0287 17.7967 16.0287 17.1635 16.4192 16.773L16.7728 16.4194Z"
              fill="black"
            />
            <path
              d="M12.25 18.5C12.8023 18.5 13.25 18.9477 13.25 19.5V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V19.5C10.75 18.9477 11.1977 18.5 11.75 18.5H12.25Z"
              fill="black"
            />
            <path
              d="M7.58059 16.773C7.97111 17.1635 7.97111 17.7967 7.58059 18.1872L5.81282 19.955C5.4223 20.3455 4.78913 20.3455 4.39861 19.955L4.04505 19.6014C3.65453 19.2109 3.65453 18.5778 4.04505 18.1872L5.81282 16.4195C6.20334 16.0289 6.83651 16.0289 7.22703 16.4195L7.58059 16.773Z"
              fill="black"
            />
            <path
              d="M5.5 12.25C5.5 12.8023 5.05228 13.25 4.5 13.25H2C1.44772 13.25 1 12.8023 1 12.25V11.75C1 11.1977 1.44772 10.75 2 10.75H4.5C5.05228 10.75 5.5 11.1977 5.5 11.75V12.25Z"
              fill="black"
            />
            <path
              d="M7.22722 7.58059C6.8367 7.97111 6.20353 7.97111 5.81301 7.58059L4.04524 5.81282C3.65472 5.4223 3.65472 4.78913 4.04524 4.39861L4.3988 4.04505C4.78932 3.65453 5.42248 3.65453 5.81301 4.04505L7.58078 5.81282C7.9713 6.20334 7.9713 6.83651 7.58078 7.22703L7.22722 7.58059Z"
              fill="black"
            />
            <path
              d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
              fill="black"
            />
          </svg>
        )}
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

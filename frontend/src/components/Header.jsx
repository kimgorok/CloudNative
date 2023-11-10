import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 헤더
const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.pinkblueColor};
`;

// 로그인|회원가입 프레임
const LoginRegisterFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`;

// 로그인과 회원가입 글씨
const LoginRegister = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
`;

// 로고 프레임
const LogoFrame = styled(LoginRegisterFrame)``;

// 로고
const Logo = styled(motion.svg)`
  width: 130px;
  fill: white;
  path {
    stroke-width: 1px;
    stroke: white;
  }
`;

// 로고 쇼로로로로로롱 애니메이션
const logoVariants = {
  // 기본적으론 색칠이 되어있게
  normal: {
    fillOpacity: 1,
  },
  active: {
    // 색칠 0 -> 1 -> 0 무한 반복
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

// 검색창
const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

// 검색 input
const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: -5px;
  padding: 5px 10px;
  color: white;
  font-size: 16px;
  background-color: transparent; // 배경 투명화
  border: 1px solid white;
  &::placeholder {
    color: white;
  }
  outline: none;
`;

function MyHeader() {
  // 검색창 토글
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };
  return (
    <>
      <HeaderWrapper>
        <LogoFrame>
          <Link to="/">
            <Logo
              variants={logoVariants}
              initial="normal"
              whileHover="active"
              viewBox="0 0 139 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path d="M14.6463 17.28C14.6463 16.4 14.2729 15.6533 13.5263 15.04C12.7796 14.4267 11.8863 14.12 10.8463 14.12C9.80625 14.12 8.91292 14.4267 8.16625 15.04C7.41958 15.6533 7.04625 16.4 7.04625 17.28C7.04625 18.16 7.41958 18.9067 8.16625 19.52C8.91292 20.1333 9.80625 20.44 10.8463 20.44C11.8863 20.44 12.7796 20.1333 13.5263 19.52C14.2729 18.9067 14.6463 18.16 14.6463 17.28ZM5.08625 3.96V0.319999H16.1663V3.96H5.08625ZM0.20625 9.32V5.76H21.1663V9.32H0.20625ZM30.4463 35.96H8.24625V25.88H12.6463V32.32H30.4463V35.96ZM25.3263 0.119999H29.6463V27.08H25.3263V21.48H19.9263V17.88H25.3263V14.48H19.9263V10.88H25.3263V0.119999ZM18.6063 17.28C18.6063 18.2133 18.4063 19.08 18.0063 19.88C17.6063 20.6533 17.0596 21.3333 16.3663 21.92C15.6729 22.5067 14.8463 22.9733 13.8863 23.32C12.9529 23.64 11.9396 23.8 10.8463 23.8C9.75292 23.8 8.72625 23.64 7.76625 23.32C6.83292 22.9733 6.01958 22.5067 5.32625 21.92C4.63292 21.3333 4.08625 20.6533 3.68625 19.88C3.28625 19.08 3.08625 18.2133 3.08625 17.28C3.08625 16.3733 3.28625 15.52 3.68625 14.72C4.08625 13.92 4.63292 13.2267 5.32625 12.64C6.01958 12.0533 6.83292 11.6 7.76625 11.28C8.72625 10.9333 9.75292 10.76 10.8463 10.76C11.9396 10.76 12.9529 10.9333 13.8863 11.28C14.8463 11.6 15.6729 12.0533 16.3663 12.64C17.0596 13.2267 17.6063 13.92 18.0063 14.72C18.4063 15.52 18.6063 16.3733 18.6063 17.28ZM41.8431 13.4C42.6431 12.6533 43.3231 11.6 43.8831 10.24C44.4431 8.88 44.7231 7.26666 44.7231 5.4V5.28H38.9231V5.4C38.9231 7.32 39.2165 8.94667 39.8031 10.28C40.4165 11.6133 41.0965 12.6533 41.8431 13.4ZM56.1631 0.119999H60.4431V18.88H56.1631V11.24H51.7231V7.56H56.1631V0.119999ZM39.5231 36.8V26.88H56.1231V24.12H39.4831V20.56H60.4431V30.32H43.8031V33.2H61.3231V36.8H39.5231ZM36.9631 12.48C36.4298 13.6 35.7765 14.6667 35.0031 15.68C34.2298 16.6667 33.3365 17.56 32.3231 18.36L29.5231 15.76C31.0165 14.4533 32.2698 13.0133 33.2831 11.44C34.2698 9.89333 34.7631 7.90667 34.7631 5.48V5.28H30.7631V1.56H52.6431V5.28H48.8431V5.48C48.8431 6.76 48.9765 7.86667 49.2431 8.8C49.5098 9.73333 49.8831 10.5867 50.3631 11.36C50.8431 12.1333 51.3898 12.84 52.0031 13.48C52.6431 14.0933 53.3231 14.68 54.0431 15.24L51.2431 17.88C50.3365 17.24 49.4965 16.4533 48.7231 15.52C47.9498 14.5867 47.2831 13.5467 46.7231 12.4C45.6031 14.8533 43.9765 16.8133 41.8431 18.28C40.8298 17.5867 39.8965 16.7333 39.0431 15.72C38.1898 14.7067 37.4965 13.6267 36.9631 12.48ZM86.92 0.119999H91.24V35.12H86.92V0.119999ZM63 2.56H79.4V6.24H67.32V11.96H79.04V15.64H67.32V22.04C68.5467 22.04 69.8267 22.0133 71.16 21.96C72.52 21.9067 73.88 21.8133 75.24 21.68C76.6 21.5467 77.9467 21.3867 79.28 21.2C80.6133 21.0133 81.9067 20.8 83.16 20.56L83.68 24.2C80.4533 24.84 77.1067 25.2667 73.64 25.48C70.1733 25.6933 66.6267 25.7733 63 25.72V2.56ZM106.757 21.36V14.12H98.1169V21.36H106.757ZM117.717 0.119999H122.037V35.12H117.717V0.119999ZM93.7969 25V2.24H98.1169V10.44H106.757V2.24H111.037V25H93.7969Z" />
            </Logo>
          </Link>
        </LogoFrame>
        <Search>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -212 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
          </motion.svg>
          <Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            placeholder="영화 검색"
            transition={{ type: "linear" }}
          />
        </Search>
        <LoginRegisterFrame>
          <Link to="/">
            <LoginRegister>로그인</LoginRegister>
          </Link>
          <Link to="/">
            <LoginRegister>회원가입</LoginRegister>
          </Link>
        </LoginRegisterFrame>
      </HeaderWrapper>
    </>
  );
}

export default MyHeader;

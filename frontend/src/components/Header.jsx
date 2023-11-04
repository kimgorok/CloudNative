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
  width: 95px;
  fill: white;
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

// 로고 쇼로로로로로롱 애니메이션
const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 276.742"
            >
              <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
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

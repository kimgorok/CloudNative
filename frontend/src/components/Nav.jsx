import { Link } from "react-router-dom";
import styled from "styled-components";

// 이중선 테두리 wrapper
const NavWrapper = styled.div`
  width: 13%;
  height: 400px;

  border-radius: 20px;
  border: 12px double #f2889b;
  background: #fff;
  position: fixed;
  left: 1%;
  top: 9%;

  display: flex;
  flex-direction: column;
  z-index: 0;
`;

// 메뉴 써있는 부분
const NavMenu = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;

  border-radius: 8px 8px 0px 0px;
  background: #f2889b;
`;

// 메뉴 글씨
const NavTitle = styled.span`
  width: 100%;
  padding: 10px;

  flex-shrink: 0;
  color: #fff8ee;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
`;

// 메뉴 리스트
const NavList = styled.div`
  width: 100%;
  height: 62px;
  flex-shrink: 0;

  border-bottom: 2px solid #f2889b;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

// 메뉴 리스트 글씨
const NavListText = styled.span`
  width: 100%;

  color: #000;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 15px;
  letter-spacing: -3.6px;
`;

function MyNav() {
  return (
    <NavWrapper>
      <NavMenu>
        <NavTitle>메뉴</NavTitle>
      </NavMenu>

      <Link to="/">
        <NavList>
          <NavListText>메인</NavListText>
        </NavList>
      </Link>

      <Link to="/movielist">
        <NavList>
          <NavListText>영화목록</NavListText>
        </NavList>
      </Link>

      <Link to="/board">
        <NavList>
          <NavListText>게시판</NavListText>
        </NavList>
      </Link>

      <Link to="/join">
        <NavList>
          <NavListText>1 : 1 문의</NavListText>
        </NavList>
      </Link>
    </NavWrapper>
  );
}

export default MyNav;

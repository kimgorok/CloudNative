import { Link } from "react-router-dom";
import styled from "styled-components";

// 이중선 테두리 wrapper
const NavWrapper = styled.div`
  width: 13%;
  height: 400px;
  border-radius: 20px;
  border: 10px double ${(props) => props.theme.pinkblueColor};
  position: fixed;
  left: 1%;
  top: 9%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  background: ${(props) => props.theme.whiteblueColor};
`;

// 메뉴 써있는 부분
const NavMenu = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  background: ${(props) => props.theme.pinkblueColor};
`;
// 메뉴 글씨
const NavTitle = styled.span`
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -3.6px;
`;
// 메뉴 리스트
const NavList = styled.div`
  background: ${(props) => props.theme.whiteblueColor};
  width: 100%;
  height: 62px;
  border-bottom: 2px solid ${(props) => props.theme.pinkblueColor};
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
  color: ${(props) => props.theme.darkwhiteColor};
  font-size: 22px;
  font-weight: 700;
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
          <NavListText>영화 신청</NavListText>
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

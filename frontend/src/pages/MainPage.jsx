import styled from "styled-components";

export const MainFrame = styled.div`
  width: 50%;
  height: auto;
  min-height: 100vh;
  margin: 20px auto;

  flex-direction: column;
  flex-shrink: 0;
  background: ${(props) => props.theme.whiteblueColor};
  border-radius: 20px;
  border: 10px double ${(props) => props.theme.pinkblueColor};
`;

const BigText = styled.div`
  color: ${(props) => props.theme.darkwhiteColor};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -3.6px;
  margin: 20px;
`;

const SmallText = styled(BigText)`
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 500;
`;

function MainPage() {
  return (
    <>
      <MainFrame>
        <BigText>안녕하세요</BigText>
        <SmallText>
        안녕하십니까. 컴퓨터공학과 19학번 김현중입니다. <br />
        제가 이번에 개발한 프로그램은 VOD 서비스 사이트입니다.  <br />
        <br />
      최신 영화 목록 API를 통해 실시간으로 업데이트 되는 영화 목록을 보여주며,  <br />
        또 DataBase에서 불러온 영화 목록을 보여줍니다. <br />
        그리고 DataBase를 통해서 사용자가 영화 신청 목록을 만들고, 수정하고, 삭제합니다. <br />
        마지막으로 Websocket을 사용해서 실시간으로 사용자가 채팅으로 1 : 1 문의를 하는 기능을 넣었습니다. <br />
        <br /> <br />
        Backend로는 nodejs Express를 사용하였고, Frontend로는 React를 사용하였고, DB로는 MySQL을 사용하였습니다. 그리고 Nginx를 통해 빌드를 합니다.
        </SmallText>
      </MainFrame>
    </>
  );
}

export default MainPage;

import styled from "styled-components";

export const MainFrame = styled.div`
  width: 50%;
  height: auto;
  min-height: 100vh;
  margin: 20px auto;

  flex-direction: column;
  flex-shrink: 0;
  background: #fff;
  border-radius: 20px;
  border: 10px double #f2889b;
`;

const BigText = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
  margin: 20px;
`;

const SmallText = styled(BigText)`
  font-size: 24px;
  letter-spacing: -0px;
`;

function MainPage() {
  return (
    <>
      <MainFrame>
        <BigText>안녕하세요</BigText>
        <SmallText>
          임직찬 뒤에서 걷지 마라. 임직찬은 그대를 이끌지 않을 수도 있다. 임직찬
          앞에서 걷지 마라. 임직찬은 그대를 따르지 않을 수도 있다. 다만 임직찬
          옆에서 걸으라. 임직찬의 벗이 될 수 있도록. <br />
          "임직찬, 내 삶의 빛이요, 내 생명의 불꽃, 나의 죄, 나의 영혼."
          숭배합니다. <br />
          유일무이 GOAT 임직찬 <br />
          Who is JickChan? For the blind, He is the vision. For the hungry, He
          is the chef. For the thirsty, He is the water. If JickChan thinks, I
          agree. If JickChan speaks, I’m listening. If JickChan has one fan, it
          is me. If JickChan has no fans, I don’t exist.
          <br />
          "학생, 1명인데 왜 2명찍어? "제 마음속에는 언제나 직찬님이 살고있기
          때문이죠." 기사 님이 웃으며 말했다. "학생, 우리들의 친절한 이웃
          직찬님은 요금을 안받는단다."
        </SmallText>
      </MainFrame>
    </>
  );
}

export default MainPage;

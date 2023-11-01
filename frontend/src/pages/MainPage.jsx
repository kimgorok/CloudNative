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
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
          김현중 CloudNative 123 !@# 😀😁😂 김현중 CloudNative 123 !@# 😀😁😂
        </SmallText>
      </MainFrame>
    </>
  );
}

export default MainPage;

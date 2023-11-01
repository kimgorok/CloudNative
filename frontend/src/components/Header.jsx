import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  flex-shrink: 0;

  background: #f2889b;
`;

function MyHeader() {
  return (
    <>
      <HeaderWrapper></HeaderWrapper>
    </>
  );
}

export default MyHeader;

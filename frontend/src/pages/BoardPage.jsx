import React from "react";
import { MainFrame } from "./MainPage";
import styled from "styled-components";
import { motion } from "framer-motion";

const BoardTitle = styled.div`
  background-color: #f2889b;
  color: #fff;
  font-family: Inter;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
  padding: 15px;
`;

const BoardSubTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
  padding-left: 20px;
  margin: 34px 0px;
`;

const BoardFrame = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  width: auto;
  padding-bottom: 0px;
  justify-content: center;
  align-items: flex-start;
  border-top: solid 2.5px black;
`;

const TitleAndDirector = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 100%;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  line-height: normal;
  border-bottom: 1px solid black;
  padding: 5px;
`;

const Director = styled(Title)`
  border-left: 1px solid black;
`;

const BoardHeaderTitle = styled(Title)`
  background-color: #f2889b;
  color: white;
  font-weight: 700;
  text-align: center;
`;

const BoardHeaderDirector = styled(Director)`
  background-color: #f2889b;
  color: white;
  font-weight: 700;
  text-align: center;
`;

const CreateUpdateDeleteFrame = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  justify-content: end;
  align-items: flex-start;
  gap: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const CreateButton = styled(motion.button)`
  display: flex;
  min-width: 90px;
  min-height: 15px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 5px;
  border-radius: 10px;
  border: 3px solid #000;
  background-color: #f2889b;
  cursor: pointer;
`;

const CreateText = styled.div`
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UpdateDeleteButton = styled(CreateButton)`
  background-color: white;
`;

const UpdateDeleteText = styled(CreateText)`
  color: black;
`;

function BoardPage() {
  return (
    <MainFrame>
      <BoardTitle>게시판</BoardTitle>
      <BoardSubTitle>보고 싶은 영화를 적어주세요.</BoardSubTitle>
      <BoardFrame>
        <TitleAndDirector>
          <BoardHeaderTitle>제목</BoardHeaderTitle>
          <BoardHeaderDirector>감독이름</BoardHeaderDirector>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>{" "}
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>{" "}
        <TitleAndDirector>
          <Title>김현중의모험</Title>
          <Director>김현중</Director>
        </TitleAndDirector>
      </BoardFrame>
      <CreateUpdateDeleteFrame>
        <CreateButton whileHover={{ scale: 1.15 }}>
          <CreateText>등록</CreateText>
        </CreateButton>
        <UpdateDeleteButton whileHover={{ scale: 1.15 }}>
          <UpdateDeleteText>수정</UpdateDeleteText>
        </UpdateDeleteButton>
        <UpdateDeleteButton whileHover={{ scale: 1.15 }}>
          <UpdateDeleteText>삭제</UpdateDeleteText>
        </UpdateDeleteButton>
      </CreateUpdateDeleteFrame>
    </MainFrame>
  );
}

export default BoardPage;

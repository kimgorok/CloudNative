import React, { useEffect, useState } from "react";
import { MainFrame } from "./MainPage";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";

// 게시판이라고 적혀있는 제목 부분
const BoardTitle = styled.div`
  background-color: ${(props) => props.theme.pinkblueColor};
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -3.6px;
  padding: 15px;
`;

// 보고싶은 영화를 적어주세요 적혀있는 부제목 부분
const BoardSubTitle = styled.div`
  color: ${(props) => props.theme.darkwhiteColor};

  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.6px;
  padding-left: 20px;
  margin: 34px 0px;
`;
// 보고싶은 영화 적는 게시판 div
const BoardFrame = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  width: auto;
  padding-bottom: 0px;
  justify-content: center;
  align-items: flex-start;
  border-top: solid 2.5px ${(props) => props.theme.darkwhiteColor};
`;
// 제목이라고 적힌 게시판의 타이틀
const TitleAndDirector = styled.div`
  display: flex;
  width: 100%;
`;
// 제목 글씨
const BoardHeaderDirector = styled.div`
  width: 100%;
  font-size: 22px;
  border-bottom: 1px solid ${(props) => props.theme.darkwhiteColor};
  padding: 5px;
  color: white;
  background-color: ${(props) => props.theme.pinkblueColor};
  font-weight: 600;
  text-align: center;
`;

// 리스트 아이템들 컨테이너
const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
`;
// 리스트 아이템들 가로 프레임
const ListItemFrame = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.darkwhiteColor};
`;
// 리스트 아이템 글씨
const ListItem = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
  color: ${(props) => props.theme.darkwhiteColor};
`;

// 수정 인풋
const UpdateInput = styled.input`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
  color: ${(props) => props.theme.darkwhiteColor};
  background: none;
  outline: none; // focus 됐을 때 효과 없애기
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.darkwhiteColor}; // 아래에만 추가
`;

// 등록 Wrapper
const CreateWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;
// 등록 프레임
const CreateFrame = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;
// 등록 인풋
const CreateInput = styled(UpdateInput)`
  border-bottom: 1px solid ${(props) => props.theme.darkwhiteColor};
  &::placeholder {
    color: #a5a5a5;
  }
`;

// 등록 버튼
const CreateButton = styled(motion.button)`
  display: flex;
  min-width: 90px;
  min-height: 15px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.pinkblueColor};
  background-color: ${(props) => props.theme.pinkblueColor};
  cursor: pointer;
`;
// 등록 텍스트
const CreateText = styled.div`
  color: white;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

// 수정 삭제 버튼프레임
const UpdateDeleteButtonFrame = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 10px;
`;
// 수정 삭제 버튼
const UpdateDeleteButton = styled(CreateButton)`
  background-color: white;
`;
// 수정 삭제 텍스트
const UpdateDeleteText = styled(CreateText)`
  color: black;
`;

function BoardPage() {
  // DB로부터 화면에 보여주는 리스트
  const [lists, setLists] = useState([]);
  // input으로 입력한 값
  const [value, setValue] = useState("");
  useEffect(() => {
    // DB에 있는 값을 가져온다.
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log("DB에 저장된 값:", response.data);
      setLists(response.data);
    });
  }, []);
  // input에 입력한 값 가져오기
  const ChangeHandler = (e) => {
    setValue(e.currentTarget.value);
  };
  // 등록버튼을 눌렀을 때 DB에 POST하기
  const submitHandler = (e) => {
    axios
      .post("http://localhost:5000/api/value", { value: value })
      .then((response) => {
        if (response.data.success) {
          console.log("response.data", response.data);
          setLists([...lists, response.data]);
          setValue("");
        } else {
          alert("값을 DB에 넣는데 실패했습니다.");
        }
      });
  };

  // 수정|삭제
  const [editingItem, setEditingItem] = useState(null);
  const handleUpdate = (id) => {
    setEditingItem(id);
  };
  // 수정 함수, id와 updatedValue를 파라미터로
  const handleUpdateSubmit = (id, updatedValue) => {
    axios
      .put(`http://localhost:5000/api/value/${id}`, { value: updatedValue })
      .then((response) => {
        if (response.data.success) {
          setLists(
            lists.map((item) =>
              item.id === id ? { ...item, value: updatedValue } : item
            )
          );
          setEditingItem(null);
        } else {
          alert(
            "값을 수정하는데 실패했습니다. 서버 응답:",
            response.data.error
          );
        }
      })
      .catch((error) => {
        console.error("Axios error:", error);
        alert("값을 수정하는데 실패했습니다. Axios 오류:", error.message);
      });
  };
  // 삭제 함수
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/value/${id}`).then((response) => {
      if (response.data.success) {
        // 성공적으로 삭제된 경우, 클라이언트에서도 해당 아이템을 삭제
        setLists(lists.filter((item) => item.id !== id));
      } else {
        alert("값을 삭제하는데 실패했습니다.");
      }
    });
  };

  return (
    <MainFrame>
      <BoardTitle>영화 신청</BoardTitle>
      <BoardSubTitle>보고싶은 영화를 적어주세요</BoardSubTitle>
      <BoardFrame>
        <TitleAndDirector>
          <BoardHeaderDirector>제목</BoardHeaderDirector>
        </TitleAndDirector>
        {lists &&
          lists.map((list, index) => (
            <ListItemContainer key={index}>
              {editingItem === list.id ? (
                // 수정 버튼을 클릭했을 때. list.id의 값과 editingItem의 값이 같을 때
                <ListItemFrame>
                  <UpdateInput
                    type="text"
                    value={list.value}
                    onChange={(e) =>
                      setLists(
                        lists.map((item) =>
                          item.id === list.id
                            ? { ...item, value: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                  <UpdateDeleteButtonFrame>
                    <UpdateDeleteButton
                      whileHover={{ scale: 1.15 }}
                      onClick={() => handleUpdateSubmit(list.id, list.value)}
                    >
                      <UpdateDeleteText>수정</UpdateDeleteText>
                    </UpdateDeleteButton>
                  </UpdateDeleteButtonFrame>
                </ListItemFrame>
              ) : (
                // 기본적으로 화면에 보여줄 모습
                <ListItemFrame>
                  <ListItem>{list.value}</ListItem>
                  <UpdateDeleteButtonFrame>
                    <UpdateDeleteButton
                      whileHover={{ scale: 1.15 }}
                      onClick={() => handleUpdate(list.id)}
                    >
                      <UpdateDeleteText>수정</UpdateDeleteText>
                    </UpdateDeleteButton>
                    <UpdateDeleteButton
                      whileHover={{ scale: 1.15 }}
                      onClick={() => handleDelete(list.id)}
                    >
                      <UpdateDeleteText>삭제</UpdateDeleteText>
                    </UpdateDeleteButton>
                  </UpdateDeleteButtonFrame>
                </ListItemFrame>
              )}
            </ListItemContainer>
          ))}
        <CreateWrapper>
          <form onSubmit={submitHandler}>
            <CreateFrame>
              <CreateInput
                type="text"
                placeholder="이곳에입력해주세요"
                onChange={ChangeHandler}
                value={value}
              />
              <CreateButton whileHover={{ scale: 1.15 }} type="submit">
                <CreateText>등록</CreateText>
              </CreateButton>
            </CreateFrame>
          </form>
        </CreateWrapper>
      </BoardFrame>
    </MainFrame>
  );
}

export default BoardPage;

const users = [];

// 사용자를 방에 추가하는 함수 addUser
const addUser = ({ id, name, room }) => {
  // 데이터 정리
  name = name.trim().toLowerCase(); // 이름을 소문자로
  room = room.trim().toLowerCase(); // 방 이름을 소문자로

  // 이미 존재하는 사용자인지 확인
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  // 이름과 방을 제대로 입력했는지 확인
  if (!name || !room) return { error: "이름과 방이 필요해요." };

  // 사용자 이름 검증
  if (existingUser) {
    return { error: "이미 존재하는 이름입니다." };
  }

  // id, name, room을 user에 저장함
  const user = { id, name, room };
  users.push(user);

  return { user };
};

// 사용자가 방에서 나가는 함수 removeUser
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// 특정 사용자의 정보를 가져오는 함수 getUser
const getUser = (id) => users.find((user) => user.id === id);

// 특정 방에 속한 사용자 목록을 가져오는 함수 getUserInRoom
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };

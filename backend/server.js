const express = require("express"); // Express 웹 애플리케이션 프레임워크 불러오기
const db = require("./db"); // DB 모듈 불러오기
const cors = require("cors"); // CORS 미들웨어 불러오기
const http = require("http"); // HTTP 모듈 불러오기

const app = express(); // Express 애플리케이션 생성
const server = http.createServer(app); // HTTP 서버 생성
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000", // CORS 설정 - 원격 접속 허용 주소
    methods: ["GET", "POST"], // 허용하는 HTTP 메소드 설정
  },
});

// CORS 미들웨어를 사용하여 교차 출처 요청 허용
app.use(cors());
app.use(express.json()); // JSON 파싱 미들웨어 사용

// "/api/movies" 라우트 : 영화 데이터 반환
// 액션 영화
app.get("/api/Action_movie", (req, res) => {
  // 데이터베이스에서 "movie" 테이블을 쿼리하여 결과를 반환
  return db.pool.query("select * from Action_movie;", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    return res.json(results);
  });
});

// 애니메이션 영화
app.get("/api/Animation_movie", (req, res) => {
  // 데이터베이스에서 "movie" 테이블을 쿼리하여 결과를 반환
  return db.pool.query("select * from Animation_movie;", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    return res.json(results);
  });
});

// 음악 영화
app.get("/api/Music_movie", (req, res) => {
  // 데이터베이스에서 "movie" 테이블을 쿼리하여 결과를 반환
  return db.pool.query("select * from Music_movie;", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    return res.json(results);
  });
});

// 영화 신청 API
// GET 요청
app.get("/api/values", (req, res, next) => {
  // 데이터베이스에서 "lists" 테이블을 쿼리하여 결과를 반환
  db.pool.query("SELECT *FROM lists;", (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});
// POST 요청
app.post("/api/value", (req, res, next) => {
  // 사용자가 전송한 값을 "lists" 테이블에 추가
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}");`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});
// Update 부분
app.put("/api/value/:id", (req, res, next) => {
  // 사용자가 전송한 값을 해당 ID의 항목으로 업데이트
  const id = req.params.id;
  const updatedValue = req.body.value;

  db.pool.query(
    `UPDATE lists SET value = "${updatedValue}" WHERE id = ${id};`,
    (err, results, fields) => {
      if (err) {
        console.error("Update error:", err);
        return res.status(500).send(err);
      } else {
        return res.json({ success: true });
      }
    }
  );
});
// Delete 부분
app.delete("/api/value/:id", (req, res, next) => {
  // 해당 ID의 항목을 "lists" 테이블에서 삭제
  const id = req.params.id;

  db.pool.query(
    `DELETE FROM lists WHERE id = ${id};`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true });
    }
  );
});

// 채팅창 추가
// Socket.IO 및 HTTP 서버 설정
const router = require("./router"); // 라우터 모듈 불러오기
// 사용자 관리 함수 불러오기
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000; // 포트 설정

app.use(router);

io.on("connection", (socket) => {
  console.log("새로운 유저가 접속했습니다.");
  socket.on("join", ({ name, room }, callback) => {
    // "join" 이벤트 핸들러, 사용자가 방에 들어오면 나옴
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) callback({ error: "에러가 발생했습니다." });

    // 채팅방 들어가면 나오는 메시지
    socket.emit("message", {
      user: "관리자",
      text: `${user?.name}님, 무엇을 도와드릴까요?`,
    });
    // 다른 사람 들어왔을 때 나오는 메시지
    io.to(user?.room).emit("roomData", {
      room: user?.room,
      users: getUsersInRoom(user?.room),
    });
    // user를 해당 room에 join시키기
    socket.join(user?.room);
    callback(); // 콜백함수 호출
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    // 사용자가 보낸 메시지를 해당 방에 있는 모든 사용자에게 전송
    io.to(user?.room).emit("message", {
      user: user?.name,
      text: message,
    });
    callback();
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      // 사용자가 퇴장하면 방에 있는 모든 사용자에게 전송
      io.to(user?.room).emit("message", {
        user: "관리자",
        text: `${user?.name}님이 퇴장하셨습니다.`,
      });
      // 방에 있는 사용자 목록을 업데이트하여 알리기 (작동 안하는데 빼면 오류남)
      io.to(user?.room).emit("roomData", {
        room: user?.room,
        users: getUsersInRoom(user?.room),
      });
    }
    console.log("유저가 나갔습니다.");
  });
});

// 5000포트에서 실행됨을 알림
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

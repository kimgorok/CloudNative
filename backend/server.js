const express = require("express");
const db = require("./db");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// CORS 미들웨어를 사용하여 교차 출처 요청 허용
app.use(cors());
app.use(express.json());

// "/api/movies" 라우트 : 영화 데이터 반환
app.get("/api/movies", (req, res) => {
  // 데이터베이스에서 "movie" 테이블을 쿼리하여 결과를 반환
  return db.pool.query("select * from movie;", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    return res.json(results);
  });
});

app.use(express.json()); // JSON 파싱 미들웨어

// 원래 있던거
// app.get("/api/values", (req, res, next) => {
//   db.pool.query("SELECT *FROM lists;", (err, results, fields) => {
//     if (err) return res.status(500).send(err);
//     else return res.json(results);
//   });
// });

// // 원래있던거
// app.post("/api/value", (req, res, next) => {
//   db.pool.query(
//     `INSERT INTO lists (value) VALUES("${req.body.value}");`,
//     (err, results, fields) => {
//       if (err) return res.status(500).send(err);
//       else return res.json({ success: true, value: req.body.value });
//     }
//   );
// });

// app.listen(5000, () => {
//   console.log("this server listening on 5000");
// });

// 채팅창 추가
// Socket.IO 및 HTTP 서버 설정
const router = require("./router");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => {
  console.log("새로운 유저가 접속했습니다.");
  socket.on("join", ({ name, room }, callback) => {
    // "join" 이벤트 핸들러
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) callback({ error: "에러가 발생했습니다." });

    // 새 사용자에게 환영 메시지 보내기
    socket.emit("message", {
      user: "admin",
      text: `${user?.name}, ${user?.room}에 오신 것을 환영합니다.`,
    });
    io.to(user?.room).emit("roomData", {
      room: user?.room,
      users: getUsersInRoom(user?.room),
    });
    socket.join(user?.room);
    callback();
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    // console.log(user)
    // console.log(typeof message, message)
    io.to(user?.room).emit("message", {
      user: user?.name,
      text: message,
    });
    callback();
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user?.room).emit("message", {
        user: "admin",
        text: `${user?.name}님이 퇴장하셨습니다.`,
      });
      io.to(user?.room).emit("roomData", {
        room: user?.room,
        users: getUsersInRoom(user?.room),
      });
    }
    console.log("유저가 나갔습니다.");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

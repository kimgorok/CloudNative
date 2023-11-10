// Express 모듈을 불러와 변수 express에 할당
const express = require("express");
// Express의 라우터 객체를 생성
const router = express.Router();

// GET 메서드를 사용하여 루트 엔드포인트에 대한 핸들러를 정의
router.get("/", (req, res) => {
  // 클라이언트에게 응답을 전송하고 상태 코드 200을 설정
  res.send({ response: "반가워요" }).status(200);
});

// 라우터 객체를 모듈로 내보내기
module.exports = router;

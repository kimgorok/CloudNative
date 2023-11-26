# 23년 2학기 클라우드네이티브 과제

# 소개

안녕하십니까. 컴퓨터공학과 19학번 김현중입니다.
제가 이번에 개발한 프로그램은 VOD 서비스 사이트입니다.

최신 영화 목록 API를 통해 실시간으로 업데이트 되는 영화 목록을 보여주며, 
또 DataBase에서 불러온 영화 목록을 보여줍니다.
그리고 DataBase를 통해서 사용자가 영화 신청 목록을 만들고, 수정하고, 삭제합니다.
마지막으로 Websocket을 사용해서 실시간으로 사용자가 채팅으로 1 : 1 문의를 하는 기능을 넣었습니다.

Backend로는 nodejs Express를 사용하였고, Frontend로는 React를 사용하였고, DB로는 MySQL을 사용하였습니다. 그리고 Nginx를 통해 빌드를 합니다.

빌드한 이미지
hyunjoong0930 / my-backend
https://hub.docker.com/repository/docker/hyunjoong0930/my-backend/general

hyunjoong0930 / my-frontend
https://hub.docker.com/repository/docker/hyunjoong0930/my-frontend/general

# 구성
mysql 도커 + 프론트(React) 도커 + 서버 프로그램(node.js express) 도커

# 실행 방법
docker-compose down

cd frontend
npm run build
docker build -t hyunjoong0930/my-frontend:latest .
docker push hyunjoong0930/my-frontend:latest

cd ../backend
docker build -t hyunjoong0930/my-backend:latest .
docker push hyunjoong0930/my-backend:latest

cd ../
docker-compose up

- 해당 명령어를 사용해서, 도커 이미지를 빌드하고, 빌드한 이미지를도커허브에 push 합니다.



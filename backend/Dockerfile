# 기반 도커이미지로 Node.js Alpine 이미지를 사용
FROM node:alpine

# 현재 디렉토리의 package.json 파일을 이미지에 복사
COPY ./package.json ./

# npm install 명령어를 사용하여 애플리케이션의 종속성 설치
RUN npm install

# 현재 디렉토리 전체를 이미지에 복사
COPY ./ ./

# nodemon을 사용하여 애플리케이션 실행 (npm run start)
CMD ["npm", "run", "start"]
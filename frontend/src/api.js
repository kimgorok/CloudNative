// 영화 정보를 가져오기 위한 API 키와 기본 API 경로 설정
const API_KEY = "0f14660acdd4d1abc05886f61aba6373";
const BASE_PATH = "https://api.themoviedb.org/3";

// API에서 현재 상영 중인 영화 목록을 가져오는 함수
export function getMovies() {
  // API 경로에 API 키를 사용하여 현재 상영 중인 영화 목록에 대한 요청을 보냄
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

// DB에서 ActionMovie를 가져오는 함수
export function getMyMovies() {
  // Express 서버의 "/api/Action_movie" 엔드포인트로 GET 요청을 보내어 ActionMovie 목록을 가져옴
  return fetch(`http://localhost:5000/api/Action_movie`).then((response) =>
    response.json()
  );
}
// DB에서 AnimationMovie를 가져오는 함수
export function getAnimationMovies() {
  // Express 서버의 "/api/Animation_movie" 엔드포인트로 GET 요청을 보내어 AnimationMovie 목록을 가져옴
  return fetch(`http://localhost:5000/api/Animation_movie`).then((response) =>
    response.json()
  );
}
// DB에서 MusicMovie를 가져오는 함수
export function getMusicMovies() {
  // Express 서버의 "/api/Music_movie" 엔드포인트로 GET 요청을 보내어 MusicMovie 목록을 가져옴
  return fetch(`http://localhost:5000/api/Music_movie`).then((response) =>
    response.json()
  );
}

// 영화 포스터 이미지 경로를 생성하는 함수
export function makeImagePath(id, format) {
  /*
  주어진 영화 ID와 포맷을 사용하여 포스터 이미지 경로를 생성
  함수를 호출할 때 id 매개변수에 영화의 ID를 전달하고, 
  format 매개변수에 이미지의 원하는 형식을 전달하여 해당 영화의 포스터 이미지 경로를 생성
  "original"은 원본 크기의 이미지
  */
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

// 배경 이미지 경로를 생성하는 함수
export function makeBgPath(image) {
  // 주어진 이미지 경로를 사용하여 배경 이미지 경로를 생성
  return `https://image.tmdb.org/t/p/original${image}`;
}

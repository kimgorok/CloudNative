const API_KEY = "0f14660acdd4d1abc05886f61aba6373";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMyMovies() {
  return fetch(`http://localhost:5000/api/Action_movie`).then((response) =>
    response.json()
  );
}

export function getAnimationMovies() {
  return fetch(`http://localhost:5000/api/Animation_movie`).then((response) =>
    response.json()
  );
}

export function getMusicMovies() {
  return fetch(`http://localhost:5000/api/Music_movie`).then((response) =>
    response.json()
  );
}

export function makeImagePath(id, format) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export function makeBgPath(image) {
  return `https://image.tmdb.org/t/p/original${image}`;
}

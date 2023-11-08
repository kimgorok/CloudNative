import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getAnimationMovies,
  getMovies,
  getMusicMovies,
  getMyMovies,
  makeBgPath,
  makeImagePath,
} from "../api";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import BannerModule from "../components/MovieList/Banner";
import { useMatch, useNavigate } from "react-router-dom";
import {
  PopularMovieFrame,
  PopularMovieTitle,
  PopularMovieGrid,
  PopularMovieVariants,
  PopularMovie,
  PopularMovieText,
  Overlay,
  BigMovie,
  BigCover,
  BigTitle,
  BigOverView,
  BigOthers,
} from "../components/MovieList/PopularMovie";
import GenreModule from "../components/MovieList/Genre";

// 메인 테두리
const MovieListFrame = styled.div`
  width: 66vw;
  height: auto;
  // 가운데 정렬 위해
  margin: 20px auto;
  // 요소들 세로로 정렬
  flex-direction: column;
  background: ${(props) => props.theme.whiteblueColor};
  border-radius: 20px;
  border: 10px double ${(props) => props.theme.pinkblueColor};
  overflow: hidden;
  // 부모 컨테이너에 대한 상대적 위치 설정
  position: relative;
`;

const Banner = styled.div``;

// 함수 시작
function MovieList() {
  // useQuery로 영화api를 가져옴
  const { data } = useQuery(["movies", "nowPlaying"], getMovies);
  // 이건 db에 있는 데이터
  // 액션영화
  const dbdata = useQuery(["dbmovies", "action"], getMyMovies);

  // 애니메이션 영화화
  const animationdata = useQuery(
    ["aniMovies", "animation"],
    getAnimationMovies
  );

  // 음악 영화
  const musicdata = useQuery(["musicMovies", "music"], getMusicMovies);

  const [index, setIndex] = useState(3);
  // 한 번에 보여줄 영화 개수
  const offset = 1;

  // 최대로 보여줄 영화의 개수 설정
  const maxIndex = data?.results.length - 2 || 0;
  // 최대 영화 수에 도착하면 0으로 돌아감
  const NextButton = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
  };
  // 0에서 누르면 마지막 영화로 이동
  const BackButton = () => {
    setIndex((prevIndex) => (prevIndex - 1 + maxIndex + 1) % (maxIndex + 1));
  };

  // 배너에 마우스 올려야 화면에 화살표 보이도록
  const [isArrowButtonVisible, setIsArrowButtonVisible] = useState(false);

  // 인터벌의 실행 여부
  const [isIntervalRunning, setIsIntervalRunning] = useState(true);
  let intervalId;

  // startInterval 상태일 동안 4초마다 index값 1 증가
  const startInterval = () => {
    intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
    }, 4000);
  };

  // isIntervalRunning의 상태에 따라 start/clear 결정
  useEffect(() => {
    if (isIntervalRunning) {
      startInterval();
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [maxIndex, isIntervalRunning]);

  // 인기 영화 3개
  const resultsArray = [data?.results[0], data?.results[1], data?.results[2]];

  // 인기영화부분
  // useScroll은  scrollY의 픽셀 단위를 넘겨줌
  const { scrollY } = useScroll();
  // 내 링크가 현재 /movielist/:id에 있으면 true를 넘겨줌
  const moviePathMatch = useMatch("/movielist/:id");

  const navigate = useNavigate();
  // navigate를 통해 onClickImage를 하면 /movielist/${id}로 이동하게 함
  const onClickImage = (id) => {
    navigate(`/movielist/${id}`);
  };
  // 현재 URL의 경로에 추출한 id가 존재할 경우, results에서 가져온 movie.id와
  // 내 URL 경로의 id가 일치할 경우
  const clickedImg =
    moviePathMatch?.params.id &&
    data?.results.find((movie) => movie.id + "" === moviePathMatch.params.id);
  const XClick = () => navigate("/movielist");

  // 이미지 슬라이더
  // 액션영화
  const [ActionCurrentIndex, setActionCurrentIndex] = useState(0);

  const ActionNextSlide = () => {
    setActionCurrentIndex((ActionCurrentIndex + 1) % 5);
  };

  const ActionPrevSlide = () => {
    setActionCurrentIndex(
      //images.length - 6 를 4로 대체
      ActionCurrentIndex === 0 ? 4 : ActionCurrentIndex - 1
    );
  };

  // 애니메이션 영화
  const [AnimationCurrentIndex, setAnimationCurrentIndex] = useState(0);

  const AnimationNextSlide = () => {
    setAnimationCurrentIndex((AnimationCurrentIndex + 1) % 5);
  };

  const AnimationPrevSlide = () => {
    setAnimationCurrentIndex(
      AnimationCurrentIndex === 0 ? 4 : AnimationCurrentIndex - 1
    );
  };

  // 음악 영화
  const [MusicCurrentIndex, setMusicCurrentIndex] = useState(0);

  const MusicnNextSlide = () => {
    setMusicCurrentIndex((MusicCurrentIndex + 1) % 5);
  };

  const MusicPrevSlide = () => {
    setMusicCurrentIndex(MusicCurrentIndex === 0 ? 4 : MusicCurrentIndex - 1);
  };

  // 장르 별 영화 렌더
  const renderGenreModule = (
    title,
    data,
    currentIndex,
    onPrevClick,
    onNextClick
  ) => {
    return (
      <GenreModule
        title={title}
        images={data ? data : []}
        currentIndex={currentIndex}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );
  };

  return (
    <>
      <MovieListFrame>
        {/* 배너 */}
        <Banner>
          {data?.results
            .slice(1)
            .slice(offset * index, offset * index + offset)
            .map((movie) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.6 }}
                transition={{ duration: 0.95 }}
                onMouseEnter={() => setIsArrowButtonVisible(true)}
                onMouseLeave={() => setIsArrowButtonVisible(false)}
              >
                <BannerModule
                  movie={data?.results[index]}
                  bgPhoto={makeImagePath(data?.results[index].backdrop_path)}
                  onNextButtonClick={NextButton}
                  onBackButtonClick={BackButton}
                  isArrowButtonVisible={isArrowButtonVisible}
                  onPauseButtonClick={() =>
                    setIsIntervalRunning(!isIntervalRunning)
                  }
                  isIntervalRunning={isIntervalRunning}
                />
              </motion.div>
            ))}
        </Banner>

        <PopularMovieFrame>
          <PopularMovieTitle>최신 인기 영화</PopularMovieTitle>
          <PopularMovieGrid>
            {resultsArray.map((result, index) => (
              <motion.div
                key={index}
                variants={PopularMovieVariants}
                initial="hidden"
                animate="visible"
                custom={index} // 뿅뿅뿅 효과
                whileHover="hover"
                layoutId={result?.id + ""} // layoutId연결. 애니메이션 위해
              >
                <PopularMovie
                  bgphoto={makeImagePath(result?.poster_path)}
                  onClick={() => onClickImage(result?.id)}
                >
                  <PopularMovieText>{index + 1}</PopularMovieText>
                </PopularMovie>
              </motion.div>
            ))}
          </PopularMovieGrid>

          <AnimatePresence>
            {moviePathMatch ? (
              <>
                <Overlay
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={XClick}
                />
                <BigMovie
                  style={{ top: scrollY.get() - 70 }} // 어디서 누르든 화면 중앙에 나오게
                  layoutId={moviePathMatch.params.id} // layoutId연결. 애니메이션 위해
                >
                  {clickedImg && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, rgb(20, 20, 20), transparent), url(${makeBgPath(
                            clickedImg.backdrop_path
                          )})`,
                        }}
                      ></BigCover>

                      <BigTitle>{clickedImg.title}</BigTitle>
                      <BigOverView>{clickedImg.overview}</BigOverView>
                      <BigOthers>개봉일: {clickedImg.release_date}</BigOthers>
                      <BigOthers>
                        ⭐: {clickedImg.vote_average.toFixed(1)}
                      </BigOthers>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </PopularMovieFrame>

        {renderGenreModule(
          "액션 영화",
          dbdata.data,
          ActionCurrentIndex,
          ActionPrevSlide,
          ActionNextSlide
        )}
        {renderGenreModule(
          "애니메이션 영화",
          animationdata.data,
          AnimationCurrentIndex,
          AnimationPrevSlide,
          AnimationNextSlide
        )}
        {renderGenreModule(
          "음악 영화",
          musicdata.data,
          MusicCurrentIndex,
          MusicPrevSlide,
          MusicnNextSlide
        )}
      </MovieListFrame>
    </>
  );
}

export default MovieList;

DROP DATABASE IF EXISTS cloud;

CREATE DATABASE cloud;
USE cloud;

CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);

create table action_movie
(
    id INTEGER AUTO_INCREMENT primary key,
    title     varchar(200)  not null,
    image_url varchar(1000) not null
);

create table animation_movie
(
    id INTEGER AUTO_INCREMENT primary key,
    title     varchar(200)  not null,
    image_url varchar(1000) not null
);

create table music_movie
(
    id INTEGER AUTO_INCREMENT
        primary key,
    title     varchar(200)  not null,
    image_url varchar(1000) not null

);


INSERT INTO action_movie (title, image_url)
VALUES
  ('스파이더맨', 'https://file.mk.co.kr/meet/neds/2021/12/image_readtop_2021_1111761_16384267724870468.jpg'),
  ('아이언맨', 'https://upload.wikimedia.org/wikipedia/ko/f/f6/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_3_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'),
  ('닥터스트레인지', 'https://upload.wikimedia.org/wikipedia/ko/6/62/%EB%8B%A5%ED%84%B0_%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B8%EC%A7%80.jpg'),
  ('존윅', 'https://upload.wikimedia.org/wikipedia/ko/c/c0/%EC%A1%B4%EC%9C%853_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'),
  ('범죄도시', 'https://upload.wikimedia.org/wikipedia/ko/8/87/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C_2017.jpg'),
  ('어벤져스', 'https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'),
  ('다크나이트', 'https://upload.wikimedia.org/wikipedia/ko/0/00/%EB%8B%A4%ED%81%AC_%EB%82%98%EC%9D%B4%ED%8A%B8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'),
  ('히트맨', 'https://file.newswire.co.kr/data/datafile2/thumb_480/2007/09/2007091911901655050.54120400.jpg'),
  ('캡틴아메리카', 'https://img.extmovie.com/files/attach/images/174/762/848/b4bf76649544d763acc88d4c11600ac2.jpg'),
  ('토르', 'https://www.fnnews.com/resource/media/image/2013/09/23/201309232115426158_l.jpg');


INSERT INTO animation_movie (title, image_url)
VALUES
  ('엘리멘탈', 'https://img.movist.com/?img=/x00/05/85/10_p1.jpg'),
  ('주토피아', 'https://upload.wikimedia.org/wikipedia/ko/7/75/%EC%A3%BC%ED%86%A0%ED%94%BC%EC%95%84.jpg'),
  ('스즈메의문단속', 'https://img.movist.com/?img=/x00/05/72/30_p1.jpg'),
  ('소울', 'https://img.movist.com/?img=/x00/05/37/57_p1.jpg'),
  ('코코', 'https://img.movist.com/?img=/x00/04/96/71_p1.jpg'),
  ('겨울왕국', 'https://upload.wikimedia.org/wikipedia/ko/thumb/3/38/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD.jpg/220px-%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD.jpg'),
  ('미니언즈', 'https://upload.wikimedia.org/wikipedia/ko/5/56/%EB%AF%B8%EB%8B%88%EC%96%B8%EC%A6%88.jpg'),
  ('마리오', 'https://file2.nocutnews.co.kr/newsroom/image/2023/05/02/202305021000303317_0.jpg'),
  ('월-E', 'https://artinsight.co.kr/data/tmp/1904/377bcabfd3e8b28c8fa0e24720090366_7fcD9Mk7A4ejKKzrIuHzFLg.jpg'),
  ('카', 'https://upload.wikimedia.org/wikipedia/ko/e/e6/%EC%B9%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg');


INSERT INTO music_movie (title, image_url)
VALUES
  ('라라랜드', 'https://upload.wikimedia.org/wikipedia/ko/1/12/La_la_land.jpg'),
  ('비긴어게인', 'https://upload.wikimedia.org/wikipedia/ko/0/03/%EB%B9%84%EA%B8%B4_%EC%96%B4%EA%B2%8C%EC%9D%B8.jpg'),
  ('알라딘', 'https://upload.wikimedia.org/wikipedia/ko/2/25/%EC%95%8C%EB%9D%BC%EB%94%98_2019%EB%85%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'),
  ('코코', 'https://upload.wikimedia.org/wikipedia/ko/0/03/%EC%98%81%ED%99%94_%EC%BD%94%EC%BD%94.jpg'),
  ('위대한쇼맨', 'https://upload.wikimedia.org/wikipedia/ko/c/cd/%EC%9C%84%EB%8C%80%ED%95%9C_%EC%87%BC%EB%A7%A8.jpg'),
  ('사랑은비를타고', 'https://cdn.ngetnews.com/news/photo/202209/410755_32560_3331.jpg'),
  ('맘마미아', 'https://upload.wikimedia.org/wikipedia/ko/f/f2/%EB%A7%98%EB%A7%88%EB%AF%B8%EC%95%84_%EC%98%81%ED%99%94.jpg'),
  ('레미제라블', 'https://upload.wikimedia.org/wikipedia/ko/d/d3/%EB%A0%88%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94_2012.jpg'),
  ('하이스쿨뮤지컬', 'https://www.themoviedb.org/t/p/original/53I8Ob1pRxYDuD7eW3swOrR2Jcq.jpg'),
  ('겨울왕국', 'https://upload.wikimedia.org/wikipedia/ko/7/7f/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD2_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg');

DROP DATABASE IF EXISTS cloud;

CREATE DATABASE cloud;
USE cloud;

CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)
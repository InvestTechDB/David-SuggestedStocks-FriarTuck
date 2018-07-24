DROP DATABASE IF EXISTS recommendedStocks;

CREATE DATABASE recommendedStocks;

USE recommendedStocks;

CREATE TABLE Company (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(150) NOT NULL,
    yesterdayClose char(10) NOT NULL,
    currentPrice char(10) NOT NULL,
    analystRating char(10) NOT NULL,
    genre char(10) NOT NULL, 
    PRIMARY KEY (id)
);


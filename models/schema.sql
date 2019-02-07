DROP DATABASE IF EXISTS raven_db;
CREATE DATABASE raven_db;
USE raven_db;

CREATE TABLE user(
  id INT AUTO_INCREMENT NOT NULL, 
  userName VARCHAR (100),
  password VARCHAR (100) ,
  email VARCHAR (100) ,
  spotifyId VARCHAR (100),
  PRIMARY KEY (id)
);


SELECT * FROM user;


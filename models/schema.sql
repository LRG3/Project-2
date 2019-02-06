CREATE DATABASE raven_db;

USE raven_db;

CREATE TABLE raven_db(
  id INT AUTO_INCREMENT NOT NULL, 
  gamertag VARCHAR (100) NOT NULL,
  password VARCHAR (100) NOT NULL,
  email varchar (100) NOT NULL,
  PRIMARY KEY (id)
);


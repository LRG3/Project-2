CREATE DATABASE raven_db;

USE raven_db;

CREATE TABLE raven_db(
  id INT AUTO_INCREMENT NOT NULL, 
  member_name VARCHAR (100) NOT NULL,
  password VARCHAR (100) NOT NULL
  spam BOOLEAN NOT NULL,
  fake_account BOOLEAN NOT NULL,
  bot BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);


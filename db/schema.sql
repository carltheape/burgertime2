-- Initial MySQL schema for Eat-Da-Burger app
CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
	PRIMARY KEY (id)
);

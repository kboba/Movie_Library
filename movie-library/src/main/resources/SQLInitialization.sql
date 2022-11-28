CREATE SCHEMA movie_library;

CREATE TABLE movie_library.movie (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  director VARCHAR(45) NULL,
  rating INT NULL,
  PRIMARY KEY (id));

USE movie_library;

INSERT INTO movie (title, director, rating) VALUES("The Lord of the Rings: The Fellowship of the Ring", "Peter Jackson", 10);
INSERT INTO movie (title, director, rating) VALUES("The Lord of the Rings: The Two Towers", "Peter Jackson", 10);
INSERT INTO movie (title, director, rating) VALUES("The Lord of the Rings: Return of the King", "Peter Jackson", 10);
INSERT INTO movie (title, director, rating) VALUES("Batman", "Tim Burton", 8);
INSERT INTO movie (title, director, rating) VALUES("Superman", "Richard Donner", 7);
INSERT INTO movie (title, director, rating) VALUES("Last Samurai", "Edward Zwick", 8);

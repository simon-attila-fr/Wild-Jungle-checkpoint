DROP DATABASE IF EXISTS greenshop;

CREATE DATABASE greenshop
    DEFAULT CHARACTER SET = 'utf8';

USE greenshop;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL
) DEFAULT CHARACTER SET = 'utf8';

CREATE TABLE `plant` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL ,
  `category_id` int NOT NULL ,
  `light` int DEFAULT 1,
  `water` int DEFAULT 1,
  `price` int NOT NULL
) DEFAULT CHARACTER SET = 'utf8';

CREATE TABLE `plant_user` (
  `user_id` int NOT NULL ,
  `plant_id` int NOT NULL
) DEFAULT CHARACTER SET = 'utf8';

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) DEFAULT CHARACTER SET = 'utf8';

ALTER TABLE `plant_user` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `plant_user` ADD FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`);

ALTER TABLE `plant` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);



INSERT INTO user (`full_name`) VALUES ("Karl"), ("Alice");


INSERT INTO category (name) VALUES ("Classique"),("Extérieur"), ('Plante grasse');


INSERT INTO plant (name, `category_id`, light, water, price) VALUES
  ("Monstera",1,2,3,15),
  ("Ficus lyrata",1,3,1,16),
  ("Pothos argenté",1,1,2,9),
	("Calathea",1,2,3,20),
  ("Olivier",2,3,1,25),
	("Cactus",3,2,1,6),
  ("Basilique",2,2,3,5),
  ("Succulente",3,2,1,8),
  ("Menthe",2,2,2,4);

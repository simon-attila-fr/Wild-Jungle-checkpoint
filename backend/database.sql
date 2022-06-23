DROP DATABASE IF EXISTS greenshop;

CREATE DATABASE greenshop
    DEFAULT CHARACTER SET = 'utf8';

USE greenshop;

CREATE TABLE `plant` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL ,
  `category_id` int NOT NULL ,
  `light` int DEFAULT 1,
  `water` int DEFAULT 1,
  `price` int NOT NULL,
  `image` varchar(255) DEFAULT ""
) DEFAULT CHARACTER SET = 'utf8';

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) DEFAULT CHARACTER SET = 'utf8';


ALTER TABLE `plant` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);


INSERT INTO category (name) VALUES ("Classique"),("Extérieur"), ('Plante grasse');


INSERT INTO plant (name, `category_id`, light, water, price, image) VALUES
  ("Monstera",1,2,3,15, "/src/assets/monstera.jpg"),
  ("Ficus lyrata",1,3,1,16,"/src/assets/lyrata.jpg"),
  ("Pothos argenté",1,1,2,9,"/src/assets/pothos.jpg"),
	("Calathea",1,2,3,20,"/src/assets/calathea.jpg"),
  ("Olivier",2,3,1,25,"/src/assets/olivier.jpg"),
	("Cactus",3,2,1,6,"/src/assets/cactus.jpg"),
  ("Basilic",2,2,3,5,"/src/assets/basil.jpg"),
  ("Succulente",3,2,1,8,"/src/assets/succulent.jpg"),
  ("Menthe",2,2,2,4,"/src/assets/mint.jpg");

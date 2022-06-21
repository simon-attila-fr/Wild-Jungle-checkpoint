import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

INSERT INTO plant (id, name, light, water, price) VALUES (1, "Classique"),
(2, "Extérieur"), (3, 'plante grasse')


INSERT INTO plant (name, category_id, light, water, price) VALUES ('monstera',	1,	2,	3,	15),('ficus lyrata', 1, 3, 1, 16),
	(
		'pothos argenté',
		1,
		1,
		2,
		9
	),
	(
		'calathea',
		1,
		2,
		3,
		20
	),
	(
		'olivier',
		2,
		3,
		1,
		25
	),

	(
		'cactus',
		3,
		2,
		1,
		6
	),
	(
		'basilique',
		2,
		2,
		3,
		5
	),
	(
		'succulente',
		3,
		2,
		1,
		8
	),
	(
		'menthe',
		2,
		2,
		2,
		4
	)

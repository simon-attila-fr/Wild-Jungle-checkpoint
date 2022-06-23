const express = require("express");

const { CategoryController, PlantController } = require("./controllers");

const router = express.Router();

/** Ajoute tes routes /plants ici */
router.get("/plants", PlantController.browse);
router.get("/plants/:id", PlantController.read);
router.post("/plants", PlantController.add);

router.get("/categories", CategoryController.browse);

module.exports = router;

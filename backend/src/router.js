const express = require("express");

const { CategoryController, PlantsController } = require("./controllers");

const router = express.Router();

/** Ajoute tes routes /plants ici */
router.get("/plants", PlantsController.browse);
router.get("/plants/:id", PlantsController.read);

router.get("/categories", CategoryController.browse);

module.exports = router;

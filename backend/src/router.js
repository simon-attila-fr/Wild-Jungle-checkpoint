const express = require("express");

const { PlantController, CategoryController } = require("./controllers");

const router = express.Router();

router.get("/plants", PlantController.browse);
router.get("/plants/:id", PlantController.read);
router.post("/plants", PlantController.add);

router.get("/categories", CategoryController.browse);

module.exports = router;

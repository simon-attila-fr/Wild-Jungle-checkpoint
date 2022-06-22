const express = require("express");

const { PlantController } = require("./controllers");

const router = express.Router();

router.get("/plants", PlantController.browse);
router.get("/plants/:id", PlantController.read);
router.put("/plants/:id", PlantController.edit);
router.post("/plants", PlantController.add);
router.delete("/plants/:id", PlantController.delete);

module.exports = router;

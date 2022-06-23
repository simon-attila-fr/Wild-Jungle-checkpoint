const express = require("express");

const { CategoryController } = require("./controllers");

const router = express.Router();

/** Ajoute tes routes Plants ici */

router.get("/categories", CategoryController.browse);

module.exports = router;

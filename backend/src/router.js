const express = require("express");

const { CategoryController } = require("./controllers");

const router = express.Router();

router.get("/categories", CategoryController.browse);

module.exports = router;

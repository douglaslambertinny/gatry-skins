const express = require("express");
const router = express.Router();


// Colocar controller que ainda não foi criado
const index_controller = require("../controllers/index.controller");
// teste simples
router.get("/", index_controller.test);
module.exports = router;
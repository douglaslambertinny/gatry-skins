const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const skins_controller = require("../controllers/skins.controller");
// teste simples
router.get("/new", skins_controller.getSkins);
module.exports = router;
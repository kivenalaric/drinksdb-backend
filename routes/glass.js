const express = require("express");
// const Glass = require("../database/glass");
const router = express.Router();
const GlassControllers = require('../Controllers/GlassControllers')

router.get("/", GlassControllers.getAllGlasses);

router.post("/", GlassControllers.createGlass);

router.get("/:id", GlassControllers.getOneGlass);

router.put("/:id", GlassControllers.putOneGlass);

router.patch("/:id", GlassControllers.patchOnGlass);

router.delete("/:id", GlassControllers.deleteOneGlass);

module.exports = router;
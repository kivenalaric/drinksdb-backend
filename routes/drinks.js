const express = require("express");
// const Drink = require("../database/drinks");
const router = express.Router();
const DrinkControllers = require('../Controllers/DrinkControllers');

router.get("/", DrinkControllers.getAllDrinks);

router.post("/", DrinkControllers.createDrink);

router.get("/:id", DrinkControllers.getOneDrink);

router.put("/:id", DrinkControllers.putOneDrink);

router.patch("/:id", DrinkControllers.patchOnDrink);

router.delete("/:id", DrinkControllers.deleteDrink);

module.exports = router;
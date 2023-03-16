const express = require("express");
// const Ingredient = require("../database/ingredients");
const router = express.Router();
const IngredientControllers = require('../Controllers/IngredientControllers');

router.get("/", IngredientControllers.getAllIngredients);

router.post("/", IngredientControllers.createIngredient);

router.get("/:id",IngredientControllers.getOneIngredient );

router.put("/:id", IngredientControllers.putOneIngredient);

router.patch("/:id", IngredientControllers.patchOnIngredient);

router.delete("/:id",IngredientControllers.deleteOneIngredient );

module.exports = router;
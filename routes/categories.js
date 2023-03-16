const express = require("express");
// const Category = require("../database/categories");
const router = express.Router();
const CategoryControllers = require('../Controllers/CategoryControllers')

router.get("/", CategoryControllers.getAllCategories);

router.post("/", CategoryControllers.createCategory);

router.get("/:id", CategoryControllers.getOneCategory);

router.put("/:id", CategoryControllers.putOneCategory);

router.patch("/:id", CategoryControllers.patchOnCategory);

router.delete("/:id", CategoryControllers.deleteOneCategory);

module.exports = router;
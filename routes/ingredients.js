const express = require("express");
const Ingredient = require("../database/ingredients");
const router = express.Router();

router.get("/", async function (_, res) {
  const categories = await Ingredient.findAll();
  res.send(categories);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const ingredient = await Ingredient.create({
    name, description
  });
  res.send(ingredient);
});

router.get("/:id", async function (req, res) {
  const ingredient = await Ingredient.findByPk(req.params.id);
  if(ingredient){
    res.send(ingredient)
  } else {
  res.send({message: "No such ingredient Found"})
};
});

router.put("/:id", async function (req, res) {
  const { name, description  } = req.body;
  if ((name && description)) {
    await Ingredient.update(req.body, {where: {id : req.params.id}});
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.send(ingredient);
  } else {
    res.send({ message: "Write Error" });
  }
});

router.patch("/:id", async function (req, res) {
  await Ingredient.update(req.body,  {where: { id: req.params.id }});
  const ingredient = await Ingredient.findByPk(req.params.id);
  res.send(ingredient);
});

router.delete("/:id", async function (req, res) {
  await Ingredient.destroy( {where: {id: req.params.id}});
  res.send({ message: "Operation successful" });
});

module.exports = router;
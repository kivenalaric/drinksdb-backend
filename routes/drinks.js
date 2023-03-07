const express = require("express");
const Drink = require("../database/drinks");
const router = express.Router();

router.get("/", async function (_, res) {
  const drinks = await Drink.findAll();
  res.send(drinks);
});

router.post("/", async function (req, res) {
  const { name, imageUrl, description, recipe } = req.body;
  const drink = await Drink.create({
    name, description, imageUrl, recipe
  });
  res.send(drink);
});

router.get("/:id", async function (req, res) {
  const drink = await Drink.findByPk(req.params.id);
  if(drink){
    res.send(drink)
  } else {
  res.send({message: "No such drink Found"})
};
});

router.put("/:id", async function (req, res) {
  const { name, imageUrl, description, recipe } = req.body;
  if ((name && imageUrl && description && recipe)) {
    await Drink.update(req.body, {where: {id : req.params.id}});
    const drink = await Drink.findByPk(req.params.id);
    res.send(drink);
  } else {
    res.send({ message: "Write Error" });
  }
});

router.patch("/:id", async function (req, res) {
  await Drink.update(req.body,  {where: { id: req.params.id }});
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
});

router.delete("/:id", async function (req, res) {
  await Drink.destroy( {where: {id: req.params.id}});
  res.send({ message: "Operation successful" });
});

module.exports = router;
const express = require("express");
const Category = require("../database/categories");
const router = express.Router();

router.get("/", async function (_, res) {
  const categories = await Category.findAll();
  res.send(categories);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const category = await Category.create({
    name, description
  });
  res.send(category);
});

router.get("/:id", async function (req, res) {
  const category = await Category.findByPk(req.params.id);
  if(category){
    res.send(category)
  } else {
  res.send({message: "No such category Found"})
}
});

router.put("/:id", async function (req, res) {
  const { name, description  } = req.body;
  if ((name && description)) {
    await Category.update(req.body, {where: {id : req.params.id}});
    const category = await Category.findByPk(req.params.id);
    res.send(category);
  } else {
    res.send({ message: "Write Error" });
  };
});

router.patch("/:id", async function (req, res) {
  await Category.update(req.body,  {where: { id: req.params.id }});
  const category = await Category.findByPk(req.params.id);
  res.send(category);
});

router.delete("/:id", async function (req, res) {
  await Category.destroy( {where: {id: req.params.id}});
  res.send({ message: "Operation successful" });
});

module.exports = router;
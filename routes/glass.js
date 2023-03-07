const express = require("express");
const Glass = require("../database/glass");
const router = express.Router();

router.get("/", async function (_, res) {
  const glasses = await Glass.findAll();
  res.send(glasses);
});

router.post("/", async function (req, res) {
  const { name } = req.body;
  const glass = await Glass.create({
    name
  });
  res.send(glass);
});

router.get("/:id", async function (req, res) {
  const glass = await Glass.findByPk(req.params.id);
    if(glass){
    res.send(glass)
    } else {
    res.send({message: "No such glass Found"});
   }
});

router.put("/:id", async function (req, res) {
    const { name } = req.body;
    if ((name)) {
      await Glass.update(req.body, {where: {id : req.params.id}});
      const glass = await Glass.findByPk(req.params.id);
      res.send(glass);
    } else {
        res.send({ message: "Write Error" });
    }
  });

router.patch("/:id", async function (req, res) {
  await Glass.update(req.body,  {where: { id: req.params.id }});
  const glass = await Glass.findByPk(req.params.id);
  res.send(glass);
});

router.delete("/:id", async function (req, res) {
  await Glass.destroy( {where: {id: req.params.id}});
  res.send({ message: "Operation successful" });
});

module.exports = router;
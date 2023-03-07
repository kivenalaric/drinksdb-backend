const express = require("express");
const Drink = require("../database/drinks");

const User = require("../database/users");

const router = express.Router();

router.get("/", async function (_, res) {
  const users = await User.findAll();
  res.send(users);
});

router.post("/", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password, adminUser } =
    req.body;
  const user = await User.create({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
    adminUser,
    apiKey: Date.now(),
  });
  res.send(user);
});

router.get("/:id", async function (req, res) {
  const user = await User.findByPk(req.params.id, { include: Drink });
  if (user) {
    res.send(user);
  }
  res.send({ message: "No such user Found" });
});

router.put("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  if (firstName && lastName && emailAddress && phone && password) {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await findByPk(req.params.id);
    res.send(user);
  }
  res.send({ message: "Write Error" });
});

router.patch("/:id", async function (req, res) {
  await User.update(req.body, { where: { id: req.params.id } });
  const user = await User.findByPk(req.params.id);
  res.send(user);
});

router.delete("/:id", async function (req, res) {
  await User.destroy({ where: { id: req.params.id } });
  res.send({ message: "Operation successful" });
});

module.exports = router;

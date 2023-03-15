const express = require("express");
const bcrypt = require("bcrypt");
const uuid = require('uuid');

const Drink = require("../database/drinks");
const User = require("../database/users");

const { SALT_ROUNDS } = require("../services/constants");
const { authMiddleware } = require("../services/auth")

const router = express.Router();

router.get("/", async function (_, res) {
  const users = await User.findAll({include: Drink});
  res.send(users);
});

router.post("/", function (req, res) {
    const { firstName, lastName, emailAddress, phone, password } = req.body;
    bcrypt.hash(password, +SALT_ROUNDS, async function(err, hash) {
        if(err){
            res.status(500).send(err);
        } else {
            const user = await User.create({
            firstName,
            lastName,
            emailAddress, 
            phone,
            password: hash,
            apiKey: uuid.v4(),
            })
            res.send(user);
        }
    })
    
})

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

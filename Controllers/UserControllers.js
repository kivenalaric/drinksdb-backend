const User = require('../database/users');
const Drink = require('../database/drinks');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { SALT_ROUNDS } = require("../services/constants");

const findAll = async function (_, res) {
    const users = await User.findAll({include: Drink});
    res.send(users);
};

const createUser = function (req, res) {
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
    
};

const getOneUser = async function (req, res) {
    const user = await User.findByPk(req.params.id, { include: Drink });
    if (user) {
      res.send(user);
    } else {
        res.send({ message: "No such user Found" });
    }
};

const putOneUser = async function (req, res) {
    const { firstName, lastName, emailAddress, phone, password } = req.body;
    if (firstName && lastName && emailAddress && phone && password) {
      await User.update(req.body, { where: { id: req.params.id } });
      const user = await findByPk(req.params.id);
      res.send(user);
    } else {
        res.send({ message: "Write Error" });
    }
};

const patchOnUser = async function (req, res) {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id);
    res.send(user);
}

const deleteUser = async function (req, res) {
    await User.destroy({ where: { id: req.params.id } });
    res.send({ message: "Operation successful" });
}

module.exports = {
    findAll,
    createUser,
    getOneUser,
    putOneUser,
    patchOnUser,
    deleteUser,
}
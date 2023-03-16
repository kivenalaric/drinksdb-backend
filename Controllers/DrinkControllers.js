const Drink = require('../database/drinks')

const getAllDrinks = async function (_, res) {
    const drinks = await Drink.findAll();
    res.send(drinks);
};

const createDrink = async function (req, res) {
    const { name, imageUrl, description, recipe } = req.body;
    const drink = await Drink.create({
      name, description, imageUrl, recipe
    });
    res.send(drink);
};

const getOneDrink = async function (req, res) {
    const drink = await Drink.findByPk(req.params.id);
    if(drink){
      res.send(drink)
    } else {
    res.send({message: "No such drink Found"})
  };
};

const putOneDrink = async function (req, res) {
    const { name, imageUrl, description, recipe } = req.body;
    if ((name && imageUrl && description && recipe)) {
      await Drink.update(req.body, {where: {id : req.params.id}});
      const drink = await Drink.findByPk(req.params.id);
      res.send(drink);
    } else {
      res.send({ message: "Write Error" });
    }
};

const patchOnDrink = async function (req, res) {
    await Drink.update(req.body,  {where: { id: req.params.id }});
    const drink = await Drink.findByPk(req.params.id);
    res.send(drink);
};

const deleteDrink = async function (req, res) {
    await Drink.destroy( {where: {id: req.params.id}});
    res.send({ message: "Operation successful" });
};

module.exports = {
    getAllDrinks,
    createDrink,
    getOneDrink,
    putOneDrink,
    patchOnDrink,
    deleteDrink,
}
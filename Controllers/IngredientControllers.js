const Ingredient = require("../database/ingredients");

const getAllIngredients = async function (_, res) {
    const categories = await Ingredient.findAll();
    res.send(categories);
};

const createIngredient = async function (req, res) {
    const { name, description } = req.body;
    const ingredient = await Ingredient.create({
      name, description
    });
    res.send(ingredient);
};

const getOneIngredient = async function (req, res) {
    const ingredient = await Ingredient.findByPk(req.params.id);
    if(ingredient){
      res.send(ingredient)
    } else {
    res.send({message: "No such ingredient Found"})
  };
};

const putOneIngredient = async function (req, res) {
    const { name, description  } = req.body;
    if ((name && description)) {
      await Ingredient.update(req.body, {where: {id : req.params.id}});
      const ingredient = await Ingredient.findByPk(req.params.id);
      res.send(ingredient);
    } else {
      res.send({ message: "Write Error" });
    }
};

const patchOnIngredient = async function (req, res) {
    await Ingredient.update(req.body,  {where: { id: req.params.id }});
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.send(ingredient);
};

const deleteOneIngredient = async function (req, res) {
    await Ingredient.destroy( {where: {id: req.params.id}});
    res.send({ message: "Operation successful" });
};

module.exports = {
    getAllIngredients,
    createIngredient,
    getOneIngredient,
    putOneIngredient,
    patchOnIngredient,
    deleteOneIngredient
}
